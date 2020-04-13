<form className="signup-form__students" onSubmit={this.handleSubmit}>
    <div className="formcontainer">
        <div className="formcontainer__labeltitle">
            <label> {t("form.firstname")} </label>
        </div>
        <input type="text"
            name="firstname"
            onChange={this.handleChange}
            onBlur={this.handleBlur('firstname')}
            className={shouldMarkError('firstname') ? "error" : ""}
            value={this.state.firstname}
        />
        <span className={shouldMarkError('firstname') ? "errorshow" : "errorhide"}> {t("form.errormessage_textfield")} </span>
    </div>
    <div className="formcontainer">
        <div className="formcontainer__labeltitle">
            <label > {t("form.lastname")} </label>
        </div>
        <input type="text"
            name="lastname"
            onChange={this.handleChange}
            onBlur={this.handleBlur('lastname')}
            className={shouldMarkError('lastname') ? "error" : ""}
            value={this.state.lastname}
        />
        <span className={shouldMarkError('lastname') ? "errorshow" : "errorhide"}> {t("form.errormessage_textfield")} </span>
    </div>
    <div className="formcontainer">
        <div className="formcontainer__labeltitle">
            <label > {t("form.email")} </label>
        </div>
        <input type="email"
            name="email"
            onChange={this.handleChange}
            onBlur={this.handleBlur('email')}
            className={shouldMarkError('email') ? "error" : ""}
            placeholder="emailadres@domein.com"
            value={this.state.email}
        />
        <span className={shouldMarkError('email') ? "errorshow" : "errorhide"} > {t("form.errormessage_emailfield")} </span>
    </div>
    <div className="formcontainer">
        <div className="formcontainer__labeltitle">
            <label > {t("form.dateofbirth")} { /* htmlFor="dateofbirth" */} </label>
        </div>
        <input
            // className="date_picker"
            type="date"
            name="dateofbirth"
            id="dateofbirth"
            onChange={this.handleChange}
            onBlur={this.handleBlur('dateofbirth')}
            className={shouldMarkError('dateofbirth') ? "error extraclassforyou" : "extraclassforyou"}
            value={this.state.dateofbirth}
        />
        <span className={shouldMarkError('dateofbirth') ? "errorshow" : "errorhide"} > {t("form.errormessage_birthday")} </span>
    </div>
    <div className="formcontainer">
        <div className="formcontainer__labeltitle">
            <label> {t("form.dateofarrival")} { /* htmlFor="dateofarrival" */} </label>
        </div>
        <input
            // className="date_picker"
            type="date"
            name="dateofarrival"
            id="dateofarrival"
            onChange={this.handleChange}
            onBlur={this.handleBlur('dateofarrival')}
            className={shouldMarkError('dateofarrival') ? "error extraclassforyou" : "extraclassforyou"}
            value={this.state.dateofarrival}
        />
        <span className={shouldMarkError('dateofarrival') ? "errorshow" : "errorhide"} > {t("form.errormessage_datefield")} </span>
    </div>
    <div className="formcontainer" >
        <div className="formcontainer__labeltitle">
            <label > {t("form.dateofdeparture")} { /* htmlFor="dateofdeparture" */} </label>
        </div>
        <input
            // className="date_picker"
            type="date"
            name="dateofdeparture"
            id="dateofdeparture"
            onChange={this.handleChange}
            onBlur={this.handleBlur('dateofdeparture')}
            className={shouldMarkError('dateofdeparture') ? "error extraclassforyou" : "extraclassforyou"}
            value={this.state.dateofdeparture}
        />
        <span className={shouldMarkError('dateofdeparture') ? "errorshow" : "errorhide"} > {t("form.errormessage_datefield")} </span>
    </div>
    <div className="formcontainer">
        <div className="formcontainer__labeltitle" >
            <label > {t("form.study")} </label>
        </div>
        <input type="text"
            name="study"
            onChange={this.handleChange}
            onBlur={this.handleBlur('study')}
            className={shouldMarkError('study') ? "error" : ""}
            value={this.state.study}
        />
        <span className={shouldMarkError('study') ? "errorshow" : "errorhide"} > {t("form.errormessage_generic")} </span>
    </div>
    <div className="formcontainer" >
        <div className="formcontainer__labeltitle">
            <label > {t("form.languages")} </label>
        </div>
        <input type="text"
            name="languages"
            onChange={this.handleChange}
            onBlur={this.handleBlur('languages')}
            className={shouldMarkError('languages') ? "error" : ""}
            value={this.state.languages}
        />
        <span className={shouldMarkError('languages') ? "errorshow" : "errorhide"} > {t("form.errormessage_generic")} </span>
    </div>
    <div className="formcontainer" >
        <div className="formcontainer__labeltitle">
            <label > {t("form.maxbudget")} </label>
        </div>
        <input
            type="text"
            name="maxbudget"
            onChange={this.handleChange}
            onBlur={this.handleBlur('maxbudget')}
            className={shouldMarkError('maxbudget') ? "error" : ""}
            value={this.state.maxbudget}
        />
        <span className={shouldMarkError('maxbudget') ? "errorshow" : "errorhide"}>{t("form.errormessage_generic")}</span>
    </div>
    <div className="formcontainer" >
        <div className="formcontainer__labeltitle">
            <label > {t("form.countryofbirth")} </label>
        </div>
        <input
            type="text"
            name="countryofbirth"
            onChange={this.handleChange}
            onBlur={this.handleBlur('countryofbirth')}
            className={shouldMarkError('countryofbirth') ? "error" : ""}
            value={this.state.countryofbirth}
        />
        <span className={shouldMarkError('countryofbirth') ? "errorshow" : "errorhide"}>{t("form.errormessage_generic")}</span>
    </div>
    <div className="signup-form__picturecontainer">
        <div className="formcontainer__labeltitle">
            <span> {t("form.profilepicture")} </span>
        </div>

        <label className="signup-form__students--profilepicture">
            <span className="singup-form__students--placeholder-profilepicture" > {this.state.selectedFile !== null ? this.state.filename : t("form.profilepicture") + " +"} </span>

            <input
                type="file"
                onChange={this.onChangeHandler}
                required name="profilepicture"
                id="profilepicture"
                className="signup-form__students--input"
            />
        </label>
    </div>
    <div className="formcontainer" >
        <div className="formcontainer__labeltitle">
            <label > {t("form.phonenumber")}</label>
        </div>
        <input type="tel"
            name="tel"
            onChange={this.handleChange}
            onBlur={this.handleBlur('tel')}
            className={shouldMarkError('tel') ? "error" : ""}
            placeholder="+31612312123"
            value={this.state.tel}
        />
        <span className={shouldMarkError('tel') ? "errorshow" : "errorhide"} > {t("form.errormessage_phonefield")} </span>
    </div>
    <div className="formcontainer__gender" >
        <div > {t("form.gender")}
            <label className="container" > {t("form.male")}
                <input required type="radio"
                    name="gender"
                    id="male"
                    defaultValue="male"
                    onChange={this.handleChange}

                /> <span className="checkmark" > </span>
            </label> <label className="container" > {t("form.female")}
                <input type="radio"
                    name="gender"
                    id="female"
                    defaultValue="female"
                    onChange={this.handleChange}

                />
                <span className="checkmark" > </span>
            </label>
            <label className="container" > {t("form.neutral")}
                <input type="radio"
                    name="gender"
                    id="neutral"
                    defaultValue="neutral"
                    onChange={this.handleChange}

                />
                <span className="checkmark" > </span>
            </label> </div>
    </div>
    <div className="form__moreinfo" >
        <div className="formcontainer__labeltitle">
            <label>
                <span> {t("form.shortdescription")} </span>
            </label>
        </div>
        <textarea className="form__moreinfo-textarea"
            name="description"
            placeholder={t("form.descriptionplaceholder")}
            onChange={this.handleChange}
            value={this.state.description}
        />
    </div>

    <div className="form__submit" >
        <input type="submit"
            value={t("form.submit")}
            className="send-form" />
    </div>
    <div >
        <span className={this.state.errorclass ? "form__submitmessage" : "form__submitmessageinc"} > {this.state.submitmessage} </span>
    </div>
</form >





























    <form className="form-container" onSubmit={this.handleSubmit}>
        <div className="col-container">
            <div class="col">
                <div className="formcontainer__labeltitle">
                    <label> {t("form.firstname")} </label>
                </div>
                <input type="text"
                    name="firstname"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur('firstname')}
                    className={shouldMarkError('firstname') ? "error form__input" : "form__input"}
                    value={this.state.firstname}
                />
                <span className={shouldMarkError('firstname') ? "errorshow" : "errorhide"}> {t("form.errormessage_textfield")} </span>
            </div>
            <div class="col">
                <div className="formcontainer__labeltitle">
                    <label > {t("form.lastname")} </label>
                </div>
                <input type="text"
                    name="lastname"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur('lastname')}
                    className={shouldMarkError('lastname') ? "error form__input" : "form__input"}
                    value={this.state.lastname}
                />
                <span className={shouldMarkError('lastname') ? "errorshow" : "errorhide"}> {t("form.errormessage_textfield")} </span>
            </div>
        </div>
        <div className="col-container">
            <div class="col">
                <div className="formcontainer__labeltitle">
                    <label > {t("form.email")} </label>
                </div>
                <input type="email"
                    name="email"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur('email')}
                    className={shouldMarkError('email') ? "error form__input" : "form__input"}
                    placeholder="emailadres@domein.com"
                    value={this.state.email}
                />
                <span className={shouldMarkError('email') ? "errorshow" : "errorhide"} > {t("form.errormessage_emailfield")} </span>

            </div>
            <div class="col">
                <div className="formcontainer__labeltitle">
                    <label > {t("form.dateofbirth")} { /* htmlFor="dateofbirth" */} </label>
                </div>
                <input
                    // className="date_picker"
                    type="date"
                    name="dateofbirth"
                    id="dateofbirth"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur('dateofbirth')}
                    className={shouldMarkError('dateofbirth') ? "error form__input" : "form__input"}
                    value={this.state.dateofbirth}
                />
                <span className={shouldMarkError('dateofbirth') ? "errorshow" : "errorhide"} > {t("form.errormessage_birthday")} </span>
            </div>
        </div>
        <div className="col-container">
            <div class="col">
                <div className="formcontainer__labeltitle">
                    <label> {t("form.dateofarrival")} { /* htmlFor="dateofarrival" */} </label>
                </div>
                <input
                    // className="date_picker"
                    type="date"
                    name="dateofarrival"
                    id="dateofarrival"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur('dateofarrival')}
                    className={shouldMarkError('dateofarrival') ? "error form__input" : "form__input"}
                    value={this.state.dateofarrival}
                />
                <span className={shouldMarkError('dateofarrival') ? "errorshow" : "errorhide"} > {t("form.errormessage_datefield")} </span>

            </div>
            <div class="col">
                <div className="formcontainer__labeltitle">
                    <label > {t("form.dateofdeparture")} { /* htmlFor="dateofdeparture" */} </label>
                </div>
                <input
                    // className="date_picker"
                    type="date"
                    name="dateofdeparture"
                    id="dateofdeparture"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur('dateofdeparture')}
                    className={shouldMarkError('dateofdeparture') ? "error form__input" : "form__input"}
                    value={this.state.dateofdeparture}
                />
            </div>
        </div>
        <div className="col-container">
            <div class="col">
                <div className="formcontainer__labeltitle" >
                    <label > {t("form.study")} </label>
                </div>
                <input type="text"
                    name="study"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur('study')}
                    className={shouldMarkError('study') ? "error form__input" : "form__input"}
                    value={this.state.study}
                />
                <span className={shouldMarkError('study') ? "errorshow" : "errorhide"} > {t("form.errormessage_generic")} </span>

            </div>
            <div class="col">
                <div className="formcontainer__labeltitle">
                    <label > {t("form.languages")} </label>
                </div>
                <input type="text"
                    name="languages"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur('languages')}
                    className={shouldMarkError('languages') ? "error form__input" : "form__input"}
                    value={this.state.languages}
                />
                <span className={shouldMarkError('languages') ? "errorshow" : "errorhide"} > {t("form.errormessage_generic")} </span>

            </div>
        </div>
        <div className="col-container">
            <div class="col">
                <div className="formcontainer__labeltitle">
                    <label > {t("form.maxbudget")} </label>
                </div>
                <input
                    type="text"
                    name="maxbudget"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur('maxbudget')}
                    className={shouldMarkError('maxbudget') ? "error form__input" : "form__input"}
                    value={this.state.maxbudget}
                />
                <span className={shouldMarkError('maxbudget') ? "errorshow" : "errorhide"}>{t("form.errormessage_generic")}</span>

            </div>
            <div class="col">
                <div className="formcontainer__labeltitle">
                    <label > {t("form.countryofbirth")} </label>
                </div>
                <input
                    type="text"
                    name="countryofbirth"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur('countryofbirth')}
                    className={shouldMarkError('countryofbirth') ? "error form__input" : "form__input"}
                    value={this.state.countryofbirth}
                />
                <span className={shouldMarkError('countryofbirth') ? "errorshow" : "errorhide"}>{t("form.errormessage_generic")}</span>

            </div>
        </div>
        <div className="col-container">
            <div class="col">
                <div className="formcontainer__labeltitle">
                    <span> {t("form.profilepicture")} </span>
                </div>

                <div class="upload-btn-wrapper">
                    <button class="btn">{this.state.selectedFile !== null ? this.state.filename : t("form.profilepicture") + " +"}</button>
                    <input
                        type="file"
                        onChange={this.onChangeHandler}
                        required
                        name="profilepicture"
                        id="profilepicture"

                    />
                </div>
            </div>
            <div class="col">
                <div className="formcontainer__labeltitle">
                    <label > {t("form.phonenumber")}</label>
                </div>
                <input type="tel"
                    name="tel"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur('tel')}
                    className={shouldMarkError('tel') ? "error form__input" : "form__input"}
                    placeholder="+31612312123"
                    value={this.state.tel}
                />
                <span className={shouldMarkError('tel') ? "errorshow" : "errorhide"} > {t("form.errormessage_phonefield")} </span>
            </div>
        </div>

        {/* <div className="col-container"> */}
        <div className="col-container--gender">
            <div class="single__col">
                <div className="formcontainer__gender" >
                    <div > {t("form.gender")}
                        <label className="container" > {t("form.male")}
                            <input required type="radio"
                                name="gender"
                                id="male"
                                defaultValue="male"
                                onChange={this.handleChange}

                            /> <span className="checkmark" > </span>
                        </label> <label className="container" > {t("form.female")}
                            <input type="radio"
                                name="gender"
                                id="female"
                                defaultValue="female"
                                onChange={this.handleChange}

                            />
                            <span className="checkmark" > </span>
                        </label>
                        <label className="container" > {t("form.neutral")}
                            <input type="radio"
                                name="gender"
                                id="neutral"
                                defaultValue="neutral"
                                onChange={this.handleChange}

                            />
                            <span className="checkmark" > </span>
                        </label>
                    </div>
                </div>
            </div>
            {/* </div> */}
            {/* <div class="col"></div> */}

        </div>
        <div className="moreinfo__col">
            <div className="form__moreinfo" >
                <div className="formcontainer__labeltitle--moreinfo">
                    <label>
                        <span> {t("form.shortdescription")} </span>
                    </label>
                </div>
                <textarea className="form__moreinfo-textarea"
                    name="description"
                    placeholder={t("form.descriptionplaceholder")}
                    onChange={this.handleChange}
                    value={this.state.description}
                />
            </div>
        </div>
        {/* <div class="col"></div>
<div class="col"></div>
<div class="col"></div>
<div class="col"></div>
<div class="col"></div>
<div class="col"></div> */}
    </form >
