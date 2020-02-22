import React from 'react'
import { withTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom'
import '../static/shared.css'
import '../static/blog.css'
import imageLoader from './images';



function renderSomething({ t }, images, index) {
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

// }


class Blog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            visible: 3,
            error: false,
            images: [],
            url: ""
        };

        this.loadMore = this.loadMore.bind(this);
    }

    loadMore() {
        this.setState((prev) => {
            return { visible: prev.visible + 3 };
        });
    }


    componentDidMount() {
        var data = require('./file.json')
        const images = imageLoader(data)
        this.setState({ images })
        this.setState({
            items: images
        });
        // console.log(images)
    }


    render() {
        const { t } = this.props;
        return (

            <section className="feed">
                <div className="tiles" aria-live="polite">
                    {this.state.items.slice(0, this.state.visible).map((item, index) => {
                        return (
                            <div className="tile fade-in" key={item.id}>
                                <div >
                                    {renderSomething({ t }, this.state.images, index)}
                                </div>
                            </div>
                        );
                    })}
                </div>
                {
                    this.state.visible < this.state.items.length &&
                    <button onClick={this.loadMore} type="button" className="load-more">Load more</button>
                }
            </section>
        );
    }
}


export default withTranslation(["blog", "common"])(Blog);
// ReactDOM.render(<Blog />, document.getElementById('feed'));