/**
 * Created by khoabui on 09/10/16.
 */
import * as DB from './databases/config';
import * as UTILS from './ultils/config';

const {POST, CATEGORY } = DB;
const {VISITOR} = UTILS;
const prefix = {
    category: 'category-',
    post: 'post-'
};

export { POST, CATEGORY, VISITOR, prefix};