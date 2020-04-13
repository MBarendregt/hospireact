
<form className="signup-form" onSubmit={this.handleSubmit}>
    <div className="formcontainer">
        <label>
            {t("hospitaform.firstname")}*
        <input
                type="text"
                name="firstname"
                onChange={this.handleChange}
                onBlur={this.handleBlur('firstname')}
                className={shouldMarkError('firstname') ? "error" : ""}
                value={this.state.firstname}
            />
        </label><span className={shouldMarkError('firstname') ? "errorshow" : "errorhide"}>{t("hospitaform.errormsg_text")}</span>

    </div>
    <div className="formcontainer">
        <label>{t("hospitaform.lastname")}*
<input
                type="text"
                name="lastname"
                onChange={this.handleChange}
                onBlur={this.handleBlur('lastname')}
                className={shouldMarkError('lastname') ? "error" : ""}
                value={this.state.lastname}
            />
        </label>
        <span className={shouldMarkError('lastname') ? "errorshow" : "errorhide"}>{t("hospitaform.errormsg_text")}</span>
    </div>
    <div className="formcontainer">
        <label  >{t("hospitaform.email")}*
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
        <span className={shouldMarkError('email') ? "errorshow" : "errorhide"}>{t("hospitaform.errormsg_email")}</span>
    </div>
    <div className="formcontainer">
        <label >{t("hospitaform.phonenumber")}*
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
        <span className={shouldMarkError('tel') ? "errorshow" : "errorhide"}>{t("hospitaform.errormsg_phone")}</span>
    </div>
    <label>{t("hospitaform.foundus")}
        <input
            type="text"
            name="foundus"
            onChange={this.handleChange}
            value={this.state.foundus} />
    </label>
    <div className="hospita_form__moreinfo">
        <label> {t("hospitaform.moreinfo")}
            <textarea
                className="form__moreinfo-textarea"
                name="description"
                placeholder=""
                onChange={this.handleChange}
                value={this.state.description} />
        </label>
    </div>
    <div className="hospita_form__submit">
        <input type="submit" value={t("hospitaform.submit")} className="send-form" /> <span className={this.state.errorclass ? "form__submitmessage" : "form__submitmessageinc"}>{this.state.submitmessage}</span>
    </div>
</form >