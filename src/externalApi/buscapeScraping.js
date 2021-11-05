const cheerio = require('cheerio');
const axios = require('axios');


const nameUrlPriceItems = async (item) => {
    const url = `https://www.buscape.com.br/search?q=${ item }`;

    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    
    const category = $('div.SearchPage_BreadCrumb__2thdv > div > div > div > div > ul > li:nth-child(2) > a > span').text();
    
    const arrItems = [];
    $('.Hits_SearchResultList__3ymoq .Hits_SearchResultListItem__1w6j-').each((_i, elem) => {

        const name = $(elem).find('a').attr('title');
        const url = 'https://www.buscape.com.br' + $(elem).find('a').attr('href');
        const price = $(elem).find('strong').text();
        
        if (name !== undefined) {
            arrItems.push(
                {
                    name,
                    url,
                    price,
                    category,
                }
            )
        }
    })

    return arrItems;
}


const inforCompleteItems = async (item) => {
    const arr = await nameUrlPriceItems(item);
    const completeInfor = await Promise.all(arr.map(async (elem) => {
        const { url, ...rest } = elem;
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        const img = $("div.PhotosCarousel_PhotosCarousel__1xgKH > div > div > div > ul > li:nth-child(2) > div > img").attr('src');
        return {
            ...rest,
            url,
            img,
        };
    }))

    return completeInfor;
}

module.exports = inforCompleteItems;
