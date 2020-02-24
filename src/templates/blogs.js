// images.js


function blogLoader() {

    const blogs = [
        {
            id: 0,
            src: require("../static/images/blogs/DSC07417.jpg"),
            url: "letsintroduce",
            title: "Hospi Housing: let's introduce",
            eng: 0,
            nl: 0
        },
        {
            id: 1,
            src: require("../static/images/blogs/InternationaleStudentenUtrecht.jpg"),
            url: "housingshortage",
            title: 'foo',
            description: 'bar',
            eng: 0,
            nl: 0
        },
        {
            id: 2,
            src: require("../static/images/blogs/utrechthospilogo.png"),
            url: "becomeahost",
            title: 'foo',
            description: 'bar',
            eng: 0,
            nl: 0
        },
        {
            id: 3,
            src: require("../static/images/blogs/rtvutrechtinterview.jpeg"),
            url: "knownfromtv",
            title: 'foo',
            description: 'bar',
            eng: 0,
            nl: 0
        },
        {
            id: 4,
            src: require("../static/images/blogs/Omaposthighres.jpg"),
            title: 'foo',
            url: "youngandoldtogether",
            description: 'bar',
            eng: 0,
            nl: 0
        },
        {
            id: 5, src: require("../static/images/blogs/InternationalstudentinUtrecht.jpg"),
            title: 'foo',
            description: 'bar',
            url: "10tipstoliveinthenetherlands",
            eng: 0,
            nl: 0
        },
        {
            id: 6,
            src: require("../static/images/blogs/Studentenopgelicht.jpg"),
            title: 'foo',
            description: 'bar',
            url: "scammedbrokeanddesperate",
            eng: 0,
            nl: 0
        },
        {
            id: 7,
            src: require("../static/images/blogs/TerrasUtrecht.jpg"),
            title: 'foo',
            url: "prepareforthedutchwayofliving",
            description: 'bar',
            eng: 0,
            nl: 0
        },
    ];
    return blogs;
}



export default blogLoader;