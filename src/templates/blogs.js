const blogLoader = {
    blogs: [
        {
            id: 0,
            src: require("../static/images/blogs/DSC07417.jpg"),
            secondsource: require("../static/images/blogs/DSC07417.jpg"),
            url: "letsintroduce",
            title: "Hospi Housing: let's introduce",
            eng: 0,
            nl: 0
        },
        {
            id: 1,
            src: require("../static/images/blogs/InternationaleStudentenUtrecht.jpg"),
            secondsource: require("../static/images/blogs/InternationaleStudentenUtrecht.jpg"),
            url: "housingshortage",
            title: 'foo',
            description: 'bar',
            eng: 0,
            nl: 0
        },
        {
            id: 2,
            src: require("../static/images/blogs/utrechthospilogo.png"),
            secondsource: require("../static/images/blogs/utrechthospilogo.png"),
            url: "becomeahost",
            title: 'foo',
            description: 'bar',
            eng: 0,
            nl: 0
        },
        {
            id: 3,
            src: require("../static/images/blogs/rtvutrechtinterview.jpeg"),
            secondsource: require("../static/images/blogs/rtvutrechtinterview.jpeg"),
            url: "knownfromtv",
            title: 'foo',
            description: 'bar',
            eng: 0,
            nl: 0
        },
        {
            id: 4,
            src: require("../static/images/blogs/Omaposthighres.jpg"),
            secondsource: require("../static/images/blogs/Omaposthighres.jpg"),
            title: 'foo',
            url: "youngandoldtogether",
            description: 'bar',
            eng: 0,
            nl: 0
        },
        {
            id: 5,
            src: require("../static/images/blogs/InternationalstudentinUtrecht.jpg"),
            secondsource: require("../static/images/blogs/InternationalstudentinUtrecht.jpg"),
            title: 'foo',
            description: 'bar',
            url: "tipstoliveinthenetherlands",
            eng: 0,
            nl: 1
        },
        {
            id: 6,
            src: require("../static/images/blogs/Studentenopgelicht.jpg"),
            secondsource: require("../static/images/blogs/Studentenopgelicht.jpg"),
            title: 'foo',
            description: 'bar',
            url: "scammedbrokeanddesperate",
            eng: 0,
            nl: 0
        },
        {
            id: 7,
            src: require("../static/images/blogs/TerrasUtrecht.jpg"),
            secondsource: require("../static/images/blogs/TerrasUtrecht.jpg"),
            title: 'foo',
            url: "prepareforthedutchwayofliving",
            description: 'bar',
            eng: 0,
            nl: 1
        },
    ],
    all: function () { return this.blogs },
    get: function (url) {
        const isBlog = blogs => blogs.url === url
        return this.blogs.find(isBlog)
    }
}

export default blogLoader;