import React from 'react';
import validator from 'validator';
import ReactS3 from 'react-s3';
import { withTranslation } from 'react-i18next';
import '../static/shared.css'
import '../static/students.css'



function validate(state) {

    return {
        email: validateEmail(state.email),
        tel: validatePhoneNumber(state.tel),
        firstname: validateNames(state.firstname),
        lastname: validateNames(state.lastname),
        dateofbirth: validateBirthDate(state.dateofbirth),
        dateofarrival: validateDate(state.dateofarrival),
        dateofdeparture: validateDate(state.dateofdeparture),
        study: validateNotEmpty(state.study),
        languages: validateNotEmpty(state.languages),
        maxbudget: validateNotEmpty(state.maxbudget),
        countryofbirth: validateNotEmpty(state.countryofbirth)

    };
}


function validateDate(date) {
    if (date) {
        if (date === "") {
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
}

function validateBirthDate(date) {

    let today = new Date();
    let filledin = new Date(date)
    if (date === "") {
        return true;
    } else if (filledin > today) {
        return true;
    }
    else {
        return false;
    }
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
    if (name) {
        if (validator.isAlpha(name)) {
            return false
        } else {
            return true
        }
    } else {
        return true
    }
}

function validateNotEmpty(value) {
    if (value != "") {
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
                'Origin': 'http://hospihousing.nl'
            },
            body: JSON.stringify(data)
        });

    console.log(response)
    return await response.text();
}

class StudentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            tel: '',
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
            filename: "",
            touched: {
                firstname: '',
                lastname: '',
                email: '',
                tel: '',
                gender: '',
                dateofbirth: '',
                dateofarrival: '',
                dateofdeparture: '',
                study: '',
                languages: '',
                maxbudget: '',
                countryofbirth: '',
                selectedFile: null
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
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });

    }

    handleOptionChange(event) {
        this.setState({ selectedOption: event.target.value });
    }

    onChangeHandler = event => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
            filename: event.target.files[0].name
        })

    }

    handleSubmit(event) {
        event.preventDefault();

        const { t } = this.props;
        const errors = validate(this.state);

        // Validate Errors
        var hasError = Object.keys(errors).some(function (k) {
            if (errors[k]) {
                return true;
            } else {
                return false;
            }
        });
        if (hasError) {
            this.setState({ submitmessage: t("form.errormessage_completeform") })
            this.setState({ errorclass: false })
            return;
        } else {
            // Upload image

            const config = {
                bucketName: 'hospihousing-studentfiles',
                dirName: 'images/' + this.state.email,
                region: 'eu-west-1',
                accessKeyId: "AKIA2SZQDYWF25CJPCEZ",
                secretAccessKey: "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"
                // accessKeyId: aws.accessKeyId,
                // secretAccessKey: aws.secretAccessKey

            }
            // const data = new FormData()
            // data.append('file', this.state.selectedFile)
            ReactS3.uploadFile(this.state.selectedFile, config)
                .then((data) => {
                    console.log(data.location);
                })
                .catch((err) => {
                    console.log(err);
                })

            // upload(e) {
            //     console.log(e.target.files[0]);
            //     ReactS3.uploadFile(e.target.files[0], config)
            //         .then((data) => {
            //             console.log(data.location);
            //         })
            //         .catch((err) => {
            //             console.log(err);
            //             // alert(err.message);
            //         })
            // }




            let dynamodata = {
                "firstname": this.state.firstname,
                "lastname": this.state.lastname,
                "email": this.state.email,
                "tel": this.state.tel,
                "description": this.state.description,
                "gender": this.state.gender,
                "dateofbirth": this.state.dateofbirth,
                "dateofarrival": this.state.dateofarrival,
                "dateofdeparture": this.state.dateofdeparture,
                "study": this.state.study,
                "languages": this.state.languages,
                "maxbudget": this.state.maxbudget,
                "countryofbirth": this.state.countryofbirth,
                "filename": this.state.filename
            }

            postData("https://cors-anywhere.herokuapp.com/https://8guqkxdl2f.execute-api.eu-west-1.amazonaws.com/prod/studentform", dynamodata)
            // method for doing something with the returned data
            // .then((data) => {
            //     console.log("wtf:" + data)
            // })
            this.setState(this.baseState)
            this.setState({ errorclass: true })
            let firstname = this.state.firstname


            this.setState({
                submitmessage: t("form.thankyou_1") + firstname.charAt(0).toUpperCase() +
                    firstname.slice(1) + t("form.thankyou_2")
            });


            setTimeout(() => {
                this.setState({ submitmessage: '' });
            }, 5000);
        }
    }


    render() {
        const errors = validate(this.state);
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
                        />
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
                        />
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
                        />
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
                            onBlur={this.handleBlur('dateofbirth')}
                            className={shouldMarkError('dateofbirth') ? "error" : ""}
                            value={this.state.dateofbirth}

                        />
                    </label>
                    <span className={shouldMarkError('dateofbirth') ? "errorshow" : "errorhide"}>{t("form.errormessage_birthday")}</span>
                </div>
                <div>
                    <label htmlFor="dateofarrival">{t("form.dateofarrival")}
                        <input
                            className="date_picker"
                            type="date"
                            name="dateofarrival"
                            id="dateofarrival"
                            onChange={this.handleChange}
                            onBlur={this.handleBlur('dateofarrival')}
                            className={shouldMarkError('dateofarrival') ? "error" : ""}
                            value={this.state.dateofarrival}

                        />
                    </label>
                    <span className={shouldMarkError('dateofarrival') ? "errorshow" : "errorhide"}>{t("form.errormessage_datefield")}</span>
                </div>
                <div>
                    <label htmlFor="dateofdeparture">{t("form.dateofdeparture")}
                        <input
                            className="date_picker"
                            type="date"
                            name="dateofdeparture"
                            id="dateofdeparture"
                            onChange={this.handleChange}
                            onBlur={this.handleBlur('dateofdeparture')}
                            className={shouldMarkError('dateofdeparture') ? "error" : ""}
                            value={this.state.dateofdeparture}

                        />
                    </label>
                    <span className={shouldMarkError('dateofdeparture') ? "errorshow" : "errorhide"}>{t("form.errormessage_datefield")}</span>
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
                        />
                    </label>
                    <span className={shouldMarkError('study') ? "errorshow" : "errorhide"}>{t("form.errormessage_generic")}</span>
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
                        />
                    </label><span className={shouldMarkError('languages') ? "errorshow" : "errorhide"}>{t("form.errormessage_generic")}</span>
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
                        />
                    </label><span className={shouldMarkError('maxbudget') ? "errorshow" : "errorhide"}>{t("form.errormessage_generic")}</span>
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
                        />
                    </label><span className={shouldMarkError('countryofbirth') ? "errorshow" : "errorhide"}>{t("form.errormessage_generic")}</span>
                </div>
                <div className="signup-form__picturecontainer">
                    <div>
                        <span>{t("form.profilepicture")}</span>

                        <label className="signup-form__students--profilepicture">
                            {/* <span className="singup-form__students--placeholder-profilepicture">
                                {t("form.profilepicture")} +
                        </span> */}
                            <span className="singup-form__students--placeholder-profilepicture">
                                {this.state.selectedFile != null ? this.state.filename : t("form.profilepicture") + " +"}
                            </span>
                            <input
                                type="file"
                                onChange={this.onChangeHandler}
                                required
                                name="profilepicture"
                                id="profilepicture"
                                className="signup-form__students--input"
                            />
                        </label>
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
                        />
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