import React from 'react'
import { withTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom'
import '../static/shared.css'
import '../static/blog.css'
import blogLoader from './blogs';
import i18n from '../i18n';
import { Helmet } from "react-helmet";
class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            // items: 20,
            visible: 6,
            error: false,
        };

        this.loadMore = this.loadMore.bind(this);
    }

    loadMore() {
        this.setState((prev) => {
            return { visible: prev.visible + 3 };
        });
    }

    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight
    }

    trackScrolling = () => {
        const wrappedElement = document.getElementById('wholepagesection');
        if (this.isBottom(wrappedElement)) {
            this.loadMore()
        }
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.trackScrolling);
    }

    componentDidMount() {
        const images = blogLoader.all()
        this.setState({
            items: images
        });
        window.addEventListener('scroll', this.trackScrolling);

    }

    renderImages({ t, tReady }, images, index) {
        /**
         * Create image container
         */
        if (!tReady) return <p></p>
        if (images[index].id === t("blogs." + index + ".blog_id")) {

            const divStyle = {
                backgroundImage: 'url(' + images[index].src + ')',
                backgroundSize: 'cover',
                height: '18rem',
                backgroundPosition: "50%",
                boxShadow: "3px 3px 5px 3px rgba(0,0,0,0.3)",
                borderRadius: "5px",
            };

            return (
                <>
                    <div className="blogs_container" style={divStyle}></div>
                </>
            )
        }
    }

    returnOnlyForSpecificLanguage(blog, lng) {
        /**
         * Get current language that is selected by i18n and return true if that blog exists for that language
         */
        if (lng === "nl") {
            if (blog.nl === 0) {
                return true
            }
        } else if (lng === 'en') {
            if (blog.eng === 0) {
                return true
            }
        } else {
            return false
        }
    }




    render() {
        const { t, tReady } = this.props;
        if (!tReady) return <div id="wholepagesection" ref="myscroll" className="tiles" aria-live="polite"><p></p></div>
        const getLanguage = () => {
            return i18n.language ||
                (typeof window !== 'undefined' && window.localStorage.i18nextLng) ||
                'en';
        };

        return (
            <>
                <Helmet>
                    <title>Blog | Hospi Housing | Utrecht</title>
                    <meta name="description" content="Hospi housing schrijft over de woningproblematiek onder studenten. Waarom en hoe hospita's kunnen helpen bij het oplossen van dit probleem. Maar ook waarom het leuk is om hospita te zijn en waarom het leuk is om bij een hospita te wonen!" />
                </Helmet>
                <section >
                    <div className="text-concept">
                        <div className="main--underline">
                            <h2>{t("title")}
                            </h2>
                        </div>
                        <div className="text-container">
                            <span><Trans>{t("text")}<br /></Trans>
                            </span>
                        </div>
                        <div className="text-container">
                            <span><Trans>{t("sub_text")}<a href="https://www.instagram.com/hospihousing/" target="__blank" rel="noopener noreferrer"></a><a href="https://www.facebook.com/Hospihousing" target="__blank" rel="noopener noreferrer"></a><a href="https://www.linkedin.com/company/hospi/" target="__blank" rel="noopener noreferrer"></a></Trans>
                            </span>
                        </div>
                    </div>
                    <div className="blog_title">
                        <h2>{t("sub_title")}
                        </h2>
                    </div>
                    {/* // .sort(function (a, b) { return b-a }) */}
                    <div id="wholepagesection" ref="myscroll" className="tiles" aria-live="polite">
                        {this.state.items
                            .filter(item => this.returnOnlyForSpecificLanguage(item, getLanguage()) === true)
                            .reverse()
                            .slice(0, this.state.visible)
                            .map((item) => {
                                return (

                                    <div className="tile fade-in" key={item.id}>
                                        <Link className="tile_link" to={`/blog/${item.url}`}>
                                            {this.renderImages({ t, tReady }, this.state.items, item.id)}
                                            <div className="tile_text">
                                                <h2>
                                                    {t("blogs." + item.id + ".title")}
                                                </h2>
                                                <span>{t("blogs." + item.id + ".blog_subtitle")}</span>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })
                        }

                    </div>

                </section>
            </>
        );
    }
}


export default withTranslation(["blog", "common"])(Blog);