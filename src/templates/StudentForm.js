import React from 'react';
import validator from 'validator';
import ReactS3 from 'react-s3';
import { withTranslation } from 'react-i18next';


const config = {
    bucketName: 'hospihousing-studentfiles',
    dirName: 'images',
    region: 'eu-west-1',
    accessKeyId: "AKIA2SZQDYWF3WNF5KMY",
    secretAccessKey: "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"
    // accessKeyId: aws.accessKeyId,
    // secretAccessKey: aws.secretAccessKey

}

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

// class RadioOption extends React.Component {
//     static contextType = {
//         RadioGroup: {
//             onChange: this.handleChange,
//             value: this.props.value,
//             name: this.props.name
//         }
//     };
//     render() {
//         <input
//             name={this.context.RadioGroup.name}
//             checked={this.context.RadioGroup.value === this.props.value}
//             onChange={this.context.RadioGroup.onChange}
//         />
//     };
// }

// class RadioGroup extends React.Component {
//     getOptionProps = () => ({
//         name: this.props.name,
//         value: this.props.value,
//         onChange: this.handleChange
//     });

//     render() {
//         return this.props.children({
//             getOptionProps: this.getOptionProps
//         })
//     }
// }

class StudentForm extends React.Component {
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
            selectedOption: '',
            gender: '',
            dateofbirth: '',
            dateofarrival: '',
            dateofdeparture: '',
            study: '',
            languages: '',
            maxbudget: '',
            countryofbirth: '',
            selectedFile: null,
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
        this.handleOptionChange = this.handleOptionChange.bind(this)
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true },
        });
    }


    handleChange(event) {
        console.log(event.target.name);
        console.log(event.target.value);
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });

    }

    handleOptionChange(event) {

        console.log(event.target.value);
        this.setState({ selectedOption: event.target.value });
        // this.setState({
        //     selectedOption: event.target.value
        // });
    }

    onChangeHandler = event => {
        console.log(event.target.files[0])
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
    }

    // uploadFile(e) {
    //     console.log(e.target.files[0]);
    //     ReactS3.uploadFile(e.target.files[0], config)
    //         .then((data) => {
    //             console.log(data.location);
    //         })
    //         .catch((err) => {
    //             alert(err);
    //         })
    // }


    handleSubmit(event) {
        event.preventDefault();
        console.log("fn: " + this.state.firstname + "ln: " + this.state.firstname +
            "email: " + this.state.email + "tel: " + this.state.tel + "fu: " + this.state.foundus
            + "des: " + this.state.description)

        console.log(this.state.selectedOption)
        console.log(this.state.selectedFile)
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        ReactS3.uploadFile(data, config)
            .then((data) => {
                console.log(data.location);
            })
            .catch((err) => {
                alert(err);
            })

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
        const { t } = this.props;

        const shouldMarkError = (field) => {
            const hasError = errors[field];
            const shouldShow = this.state.touched[field];
            return hasError ? shouldShow : false;
        };
        return (
            <form className="signup-form__students" onSubmit={this.handleSubmit}>

                <div className="formcontainer">
                    <label>
                        {t("form.firstname")}
                        <input
                            type="text"
                            name="firstname"
                            onChange={this.handleChange}
                            onBlur={this.handleBlur('firstname')}
                            className={shouldMarkError('firstname') ? "error" : ""}
                            value={this.state.firstname}
                            required />
                    </label>
                    <span className={shouldMarkError('firstname') ? "errorshow" : "errorhide"}>{t("form.errormessage_textfield")}</span>

                </div>
                <div className="formcontainer">
                    <label>
                        {t("form.lastname")}
                        <input
                            type="text"
                            name="lastname"
                            onChange={this.handleChange}
                            onBlur={this.handleBlur('lastname')}
                            className={shouldMarkError('lastname') ? "error" : ""}
                            value={this.state.lastname}
                            required />
                    </label>
                    <span className={shouldMarkError('lastname') ? "errorshow" : "errorhide"}>{t("form.errormessage_textfield")}</span>
                </div>
                <div className="formcontainer">
                    <label  >{t("form.email")}
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
                    <span className={shouldMarkError('email') ? "errorshow" : "errorhide"}>{t("form.errormessage_emailfield")}</span>
                </div>
                <div>
                    <label htmlFor="dateofbirth">{t("form.dateofbirth")}
                        <input
                            className="date_picker"
                            type="date"
                            name="dateofbirth"
                            id="dateofbirth"
                            onChange={this.handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="dateofarrival">{t("form.dateofarrival")}
                        <input
                            className="date_picker"
                            type="date"
                            name="dateofarrival"
                            id="dateofarrival"
                            onChange={this.handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="dateofdeparture">{t("form.dateofdeparture")}
                        <input
                            className="date_picker"
                            type="date"
                            name="dateofdeparture"
                            id="dateofdeparture"
                            onChange={this.handleChange}
                            required
                        />
                    </label>
                </div>
                <div className="formcontainer">
                    <label>
                        {t("form.study")}
                        <input
                            type="text"
                            name="study"
                            onChange={this.handleChange}
                            onBlur={this.handleBlur('study')}
                            className={shouldMarkError('study') ? "error" : ""}
                            value={this.state.study}
                            required />
                    </label>
                    <span className={shouldMarkError('study') ? "errorshow" : "errorhide"}>{t("form.errormessage_textfield")}</span>
                </div>
                <div className="formcontainer">
                    <label>
                        {t("form.languages")}
                        <input
                            type="text"
                            name="languages"
                            onChange={this.handleChange}
                            onBlur={this.handleBlur('languages')}
                            className={shouldMarkError('languages') ? "error" : ""}
                            value={this.state.languages}
                            required />
                    </label><span className={shouldMarkError('languages') ? "errorshow" : "errorhide"}>{t("form.errormessage_textfield")}</span>
                </div>
                <div className="formcontainer">
                    <label>
                        {t("form.maxbudget")}
                        <input
                            type="text"
                            name="maxbudget"
                            onChange={this.handleChange}
                            onBlur={this.handleBlur('maxbudget')}
                            className={shouldMarkError('maxbudget') ? "error" : ""}
                            value={this.state.maxbudget}
                            required />
                    </label><span className={shouldMarkError('maxbudget') ? "errorshow" : "errorhide"}>{t("form.errormessage_textfield")}</span>
                </div>
                <div className="formcontainer">
                    <label>
                        {t("form.countryofbirth")}
                        <input
                            type="text"
                            name="countryofbirth"
                            onChange={this.handleChange}
                            onBlur={this.handleBlur('countryofbirth')}
                            className={shouldMarkError('countryofbirth') ? "error" : ""}
                            value={this.state.countryofbirth}
                            required />
                    </label><span className={shouldMarkError('countryofbirth') ? "errorshow" : "errorhide"}>{t("form.errormessage_textfield")}</span>
                </div>
                <div className="signup-form__picturecontainer">
                    <div>
                        <span>{t("form.profilepicture")}</span>
                        <label className="signup-form__students--profilepicture"><span className="singup-form__students--placeholder-profilepicture">{t("form.profilepicture")} +</span>
                            <input
                                type="file"
                                onChange={this.onChangeHandler}
                                required
                                name="profilepicture"
                                id="profilepicture"
                                className="signup-form__students--input"
                            /></label>
                    </div>
                </div>


                <div className="formcontainer">
                    <label >{t("form.phonenumber")}
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
                    <span className={shouldMarkError('tel') ? "errorshow" : "errorhide"}>{t("form.errormessage_phonefield")}</span>
                </div>
                <div className="formcontainer__gender">
                    <div>
                        {t("form.gender")}
                        <label className="container">{t("form.male")}
                            <input
                                required
                                type="radio"
                                name="gender"
                                id="male"
                                defaultValue="male"
                                onChange={this.handleChange}
                            />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">{t("form.female")}
                            <input
                                type="radio"
                                name="gender"
                                id="female"
                                defaultValue="female"
                                onChange={this.handleChange}
                            />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">{t("form.neutral")}
                            <input
                                type="radio"
                                name="gender"
                                id="neutral"
                                defaultValue="neutral"
                                onChange={this.handleChange}
                            />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </div>
                <div className="form__moreinfo">
                    <label> <span>{t("form.shortdescription")}</span>
                        <textarea
                            className="form__moreinfo-textarea"
                            name="description"
                            placeholder={t("form.descriptionplaceholder")}
                            onChange={this.handleChange}
                            value={this.state.description} />
                    </label>
                </div>

                <div className="form__submit">
                    <input type="submit" value={t("form.submit")} className="send-form" /> <span className={this.state.errorclass ? "form__submitmessage" : "form__submitmessageinc"}>{this.state.submitmessage}</span>
                </div>
            </form >
        );
    }
}


export default withTranslation(["students", "common"])(StudentForm);