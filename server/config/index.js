import DBConfig from './database';

export default {
    database : DBConfig
}
const meta = {
    defaultImage: 'https://cdn2.iconfinder.com/data/icons/nodejs-1/512/nodejs-512.png'
};
const confidential = {
    email: 'buidangkhoa2602@gmail.com',
    password: '123456',
    name: 'Khoa D. Bui'
}

const jsonTokenKey = 'invincibleKhoa';
export { meta, jsonTokenKey, confidential }