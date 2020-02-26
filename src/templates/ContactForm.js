import React from 'react';
import validator from 'validator';
import { withTranslation } from 'react-i18next';

function validate(email, tel, firstname, lastname) {
    return {
        email: validateEmail(email),
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

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            description: '',
            submitmessage: '',
            errorclass: false,
            touched: {
                firstname: '',
                lastname: '',
                email: '',
                description: ''
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
            "email: " + this.state.email + "des: " + this.state.description)



        const errors = validate(this.state.email, this.state.firstname, this.state.lastname);
        const { t } = this.props;

        var hasError = Object.keys(errors).some(function (k) {
            if (errors[k]) {
                return true;
            } else {
                return false;
            }
        });
        if (hasError) {
            this.setState({ submitmessage: t("contactform.errormsg_submit") })
            this.setState({ errorclass: false })
            return;
        } else {
            let data = {
                "firstname": this.state.firstname,
                "lastname": this.state.lastname,
                "email": this.state.email,
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
                submitmessage: t("contactform.thankyou_1") + firstname.charAt(0).toUpperCase() +
                    firstname.slice(1) + t("contactform.thankyou_2")
            });
            setTimeout(() => {
                this.setState({ submitmessage: '' });
            }, 5000);
        }
    }
    render() {
        const errors = validate(this.state.email, this.state.tel, this.state.firstname, this.state.lastname);
        const { t } = this.props;
        const shouldMarkError = (field) => {
            const hasError = errors[field];
            const shouldShow = this.state.touched[field];
            return hasError ? shouldShow : false;
        };
        return (
            <form className="signup-form" onSubmit={this.handleSubmit}>
                <div className="formcontainer">
                    <label>
                        {t("contactform.firstname")}*
                        <input
                            type="text"
                            name="firstname"
                            onChange={this.handleChange}
                            onBlur={this.handleBlur('firstname')}
                            className={shouldMarkError('firstname') ? "error" : ""}
                            value={this.state.firstname}
                            required />
                    </label><span className={shouldMarkError('firstname') ? "errorshow" : "errorhide"}>{t("contactform.errormsg_text")}</span>

                </div>
                <div className="formcontainer">
                    <label>{t("contactform.lastname")}*
                <input
                            type="text"
                            name="lastname"
                            onChange={this.handleChange}
                            onBlur={this.handleBlur('lastname')}
                            className={shouldMarkError('lastname') ? "error" : ""}
                            value={this.state.lastname}
                            required />
                    </label>
                    <span className={shouldMarkError('lastname') ? "errorshow" : "errorhide"}>{t("contactform.errormsg_text")}</span>
                </div>
                <div className="formcontainer">
                    <label  >{t("contactform.email")}*
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
                    <span className={shouldMarkError('email') ? "errorshow" : "errorhide"}>{t("contactform.errormsg_email")}</span>
                </div>
                <div className="contact_form__moreinfo">
                    <label> {t("contactform.description")}
                        <textarea
                            className="form__moreinfo-textarea"
                            name="description"
                            placeholder=""
                            onChange={this.handleChange}
                            value={this.state.description} />
                    </label>
                </div>
                <div className="contact_form__submit">
                    <input type="submit" value={t("contactform.submit")} className="send-form" /> <span className={this.state.errorclass ? "form__submitmessage" : "form__submitmessageinc"}>{this.state.submitmessage}</span>
                </div>
            </form >
        );
    }
}
export default withTranslation(["contact", "common"])(ContactForm);