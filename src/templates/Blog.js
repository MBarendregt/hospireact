import React from 'react'
import { withTranslation, Trans } from 'react-i18next';
import { Link, Route, Switch } from 'react-router-dom'
import '../static/shared.css'
import '../static/blog.css'
import blogLoader from './blogs';
import i18n from '../i18n';
// import scammed from './blogs/scammedbrokeanddesperate'
// 

// function renderImages({ t }, images, index) {
//     /**
//      * Create image container
//      */
//     if (images[index].id === t("blogs" + "." + index + ".blog_id")) {
//         return (
//             <>
//                 <div>
//                     <img className="blog_container" src={images[index].src} />
//                 </div>
//             </>
//         )
//     }
// }

// function returnOnlyForSpecificLanguage(blog, lng) {
//     /**
//      * Get current language that is selected by i18n and return true if that blog exists for that language
//      */
//     if (lng === "nl") {
//         if (blog.nl === 0) {
//             return true
//         }
//     } else if (lng === 'en') {
//         if (blog.eng === 0) {
//             return true
//         }
//     } else {
//         return false
//     }
// }


class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            items: [],
            // items: 20,
            visible: 3,
            error: false,
            url: "",
            hasMoreItems: true
        };

        this.loadMore = this.loadMore.bind(this);
    }

    loadMore() {
        this.setState((prev) => {
            return { visible: prev.visible + 3 };
        });
    }

    componentDidMount() {
        const images = blogLoader()
        this.setState({
            items: images
        });

        this.refs.myscroll.addEventListener("scroll", () => {
            if (
                this.refs.myscroll.scrollTop + this.refs.myscroll.clientHeight >=
                this.refs.myscroll.scrollHeight
            ) {
                this.loadMore();
            }
        });
    }

    renderImages({ t }, images, index) {
        /**
         * Create image container
         */
        if (images[index].id === t("blogs" + "." + index + ".blog_id")) {
            return (
                <>
                    <div>
                        <img className="blog_container" src={images[index].src} />
                    </div>
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
        const { t } = this.props;
        const getLanguage = () => {
            return i18n.language ||
                (typeof window !== 'undefined' && window.localStorage.i18nextLng) ||
                'en';
        };
        return (

            <section>
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

                <div ref="myscroll" className="tiles" aria-live="polite">
                    {this.state.items
                        .filter(item => this.returnOnlyForSpecificLanguage(item, getLanguage()) === true)
                        .sort(function (a, b) { return a - b })
                        .slice(0, this.state.visible)
                        .map((item) => {
                            return (

                                <div className="tile fade-in" key={item.id}>
                                    {/* <Link className="tile_link" to={t("blogs" + "." + item.id + ".blogurl")}> */}
                                    <Link to={`/blog/${item.url}`}>
                                        {/* <Link to={`${match.url}/${id}`}> */}
                                        {/* <Link to="blabla"> */}
                                        {this.renderImages({ t }, this.state.items, item.id)}
                                        <div className="tile_text">
                                            <h2>
                                                {t("blogs" + "." + item.id + ".title")}
                                            </h2>
                                            <span>{t("blogs" + "." + item.id + ".blog_subtitle")}</span>
                                        </div>
                                    </Link>
                                </div>

                            );
                        })
                    }

                </div>

                {/* {
                    this.state.visible < this.state.items.length &&
                    <button onClick={this.loadMore} type="button" className="load-more">Load more</button>
                } */}
                {/* <Route path={`/blog/:topicId`} component={Blog} /> */}
            </section>

        );
    }
}


export default withTranslation(["blog", "common"])(Blog);