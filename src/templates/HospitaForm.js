import React from 'react';
import validator from 'validator';

function validate(email, tel, firstname, lastname) {
    return {
        email: validateEmail(email),
        tel: validatePhoneNumber(tel),
        firstname: validateNames(firstname),
        lastname: validateNames(lastname)
    };
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
        return true
    } else
        return false
}

function validatePhoneNumber(tel) {
    var re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;
    if (tel.length < 10 || !re.test(tel)) {
        return true
    } else {
        return false
    }
}

function validateNames(name) {
    if (validator.isAlpha(name)) {
        return false
    } else {
        return true
    }
}
async function postData(url = '', data = {}) {
    const response = await fetch(url,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

    console.log(response)
    return await response.text();
}

class HospitaForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            tel: '',
            foundus: '',
            description: '',
            submitmessage: '',
            errorclass: false,
            touched: {
                firstname: '',
                lastname: '',
                email: '',
                tel: ''
            },
            data: ''
        };

        this.baseState = this.state
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true },
        });
    }

    handleChange(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });

    }



    handleSubmit(event) {
        event.preventDefault();
        console.log("fn: " + this.state.firstname + "ln: " + this.state.firstname +
            "email: " + this.state.email + "tel: " + this.state.tel + "fu: " + this.state.foundus
            + "des: " + this.state.description)



        const errors = validate(this.state.email, this.state.tel, this.state.firstname, this.state.lastname);
        var hasError = Object.keys(errors).some(function (k) {
            if (errors[k]) {
                return true;
            } else {
                return false;
            }
        });
        if (hasError) {
            this.setState({ submitmessage: 'Het formulier bevat nog fouten' })
            this.setState({ errorclass: false })
            return;
        } else {
            let data = {
                "firstname": this.state.firstname,
                "lastname": this.state.lastname,
                "email": this.state.email,
                "tel": this.state.tel,
                "foundus": this.state.foundus,
                "description": this.state.description
            }
            postData('https://mq58an2et4.execute-api.eu-west-1.amazonaws.com/teststage', data)
            // method for doing something with the returned data
            // .then((data) => {
            //     console.log("wtf:" + data)
            // })
            this.setState(this.baseState)
            this.setState({ errorclass: true })
            let firstname = this.state.firstname

            this.setState({
                submitmessage: 'Bedankt ' + firstname.charAt(0).toUpperCase() +
                    firstname.slice(1) + ' voor uw aanmelding!'
            });
            setTimeout(() => {
                this.setState({ submitmessage: '' });
            }, 5000);
        }
    }


    render() {
        const errors = validate(this.state.email, this.state.tel, this.state.firstname, this.state.lastname);
        const shouldMarkError = (field) => {
            const hasError = errors[field];
            const shouldShow = this.state.touched[field];
            return hasError ? shouldShow : false;
        };
        return (
            <form className="signup-form" onSubmit={this.handleSubmit}>
                <div className="formcontainer">
                    <label>
                        Voornaam*:
                        <input
                            type="text"
                            name="firstname"
                            onChange={this.handleChange}
                            onBlur={this.handleBlur('firstname')}
                            className={shouldMarkError('firstname') ? "error" : ""}
                            value={this.state.firstname}
                            required />
                    </label><span className={shouldMarkError('firstname') ? "errorshow" : "errorhide"}>Dit veld is verplicht en mag geen cijfers of vreemde tekens bevatten</span>

                </div>
                <div className="formcontainer">
                    <label>
                        Achternaam*:
            <input
                            type="text"
                            name="lastname"
                            onChange={this.handleChange}
                            onBlur={this.handleBlur('lastname')}
                            className={shouldMarkError('lastname') ? "error" : ""}
                            value={this.state.lastname}
                            required />
                    </label>
                    <span className={shouldMarkError('lastname') ? "errorshow" : "errorhide"}>Dit veld is verplicht en mag geen cijfers of vreemde tekens bevatten</span>
                </div>
                <div className="formcontainer">
                    <label  >E-Mail*
                <input
                            type="email"
                            name="email"
                            onChange={this.handleChange}
                            onBlur={this.handleBlur('email')}
                            className={shouldMarkError('email') ? "error" : ""}
                            placeholder="emailadres@domein.com"
                            value={this.state.email}
                            required />
                    </label>
                    <span className={shouldMarkError('email') ? "errorshow" : "errorhide"}>Dit veld is verplicht: e-mailadres@domein.com</span>
                </div>
                <div className="formcontainer">
                    <label >Telefoonnummer*
                    <input
                            type="tel"
                            name="tel"
                            onChange={this.handleChange}
                            onBlur={this.handleBlur('tel')}
                            className={shouldMarkError('tel') ? "error" : ""}
                            placeholder="+31612312123"
                            value={this.state.tel}
                            required />
                    </label>
                    <span className={shouldMarkError('tel') ? "errorshow" : "errorhide"}>Dit veld is verplicht mag geen letters bevatten</span>
                </div>
                <label >Hoe heeft u ons gevonden?
              <input
                        type="text"
                        name="foundus"
                        onChange={this.handleChange}
                        value={this.state.foundus} />
                </label>
                <div className="form__moreinfo">
                    <label> Meer informatie? Of andere vragen? Stel ze hier!
                    <textarea
                            className="form__moreinfo-textarea"
                            name="description"
                            placeholder="Meer informatie? Of andere vragen? Stel ze hier!"
                            onChange={this.handleChange}
                            value={this.state.description} />
                    </label>
                </div>
                <div className="form__submit">
                    <input type="submit" value="Submit" className="send-form" /> <span className={this.state.errorclass ? "form__submitmessage" : "form__submitmessageinc"}>{this.state.submitmessage}</span>
                </div>
            </form >
        );
    }
}


export default HospitaForm