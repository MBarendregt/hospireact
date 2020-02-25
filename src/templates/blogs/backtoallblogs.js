import React from 'react'
import '../../static/shared.css'
import '../../static/blog.css'
import { withTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom'

function backtoallblogs({ t }) {

    return (
        <div className="backtoallblogs">
            <h2>
                <Trans>{t("back_to_all_blogs")}<Link className="tile_link" to="/blog"></Link></Trans>
            </h2>
        </div>
    );
}
export default withTranslation(['blog', 'common'])(backtoallblogs);