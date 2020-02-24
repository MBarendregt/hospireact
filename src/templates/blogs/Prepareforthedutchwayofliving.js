import React from 'react'
import '../../static/shared.css'
import '../../static/blog.css'
import { withTranslation } from 'react-i18next';
import blogLoader from '../blogs'



function Prepareforthedutchwayofliving({ t }, props) {
    const blog = blogLoader()
    console.log(props)
    return (
        <section>
            <div className="text-concept">
                <div className="main--underline">
                    <h2>{t("title")}
                    </h2>
                </div>
            </div>
            <div>scammed broke and bitches</div>
        </section>
    );

}

export default withTranslation(['blogs', 'common'])(Prepareforthedutchwayofliving);