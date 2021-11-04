const axios = require('axios');
const cheerio = require('cheerio');

const itemsApi = async (item) => {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${ item }`;

    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const category = $('ol > li:nth-child(1) > a > span').text();

    const { results } = data;
    const formaterInfor = results.map((elem) => {
        const { title, price, thumbnail, permalink } = elem;

        return {
            name: title,
            category,
            price: price,
            img: thumbnail,
            url: permalink,
        };

    });

    return formaterInfor;
}

module.exports = itemsApi;