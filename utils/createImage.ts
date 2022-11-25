import fs from 'fs';
var ba64 = require("ba64");

const createImage = (datas: any) => {
    datas.forEach((data: any) => {
        const source = data.source.split('/')[0];
        const element = data.source.split('/')[1];
        const level = data.source.split('/')[2];
        if (fs.existsSync('public')) {
            if (!fs.existsSync(`public/images/${source}/${element}/${level}`)) {
                fs.mkdirSync(`public/images/${source}/${element}/${level}`, { recursive: true });
            }
        }
        ba64.writeImageSync(`public/images/${source}/${element}/${level}/${Math.floor(Math.random() * 10000)}`, data.base64)
    })

}

export { createImage };