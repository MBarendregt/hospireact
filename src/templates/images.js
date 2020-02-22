// images.js


function imageLoader() {

    const images = [
        { id: 0, src: require("../static/images/blogs/adinterview.jpeg"), title: 'df', description: 'bar' },
        { id: 1, src: require("../static/images/blogs/DSC07417.jpg"), title: 'foo', description: 'bar' },
        { id: 2, src: require("../static/images/blogs/InternationaleStudentenUtrecht.jpg"), title: 'foo', description: 'bar' },
        { id: 3, src: require("../static/images/blogs/adinterview.jpeg"), title: 'foo', description: 'bar' },
        { id: 4, src: require("../static/images/blogs/adinterview.jpeg"), title: 'foo', description: 'bar' },
    ];
    return images;
}



export default imageLoader;