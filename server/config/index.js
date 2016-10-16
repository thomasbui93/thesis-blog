import DBConfig from './database';
import {confidential} from './credentials';

export default {
    database : DBConfig
}
const meta = {
    defaultImage: 'https://cdn2.iconfinder.com/data/icons/nodejs-1/512/nodejs-512.png'
};


const jsonTokenKey = 'invincibleKhoa';
export { meta, jsonTokenKey, confidential }