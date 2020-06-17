require('@babel/register')({
    extends: './.babelrc',
})

const Sitemap = require('react-router-sitemap').default;
const router = require('./src/Main').default;

const filterConfig = {
    isValid: false,
    rules: [
        /\/auth/,
        /\*/,
        /\static/
    ],
};

(
    new Sitemap(router)
        .filterPaths(filterConfig)
        .applyParams(paramsConfig)
        .build('http://my-site.ru', { limitCountPaths: 5000 })
        .save('./sitemap.xml', '/static/')
);