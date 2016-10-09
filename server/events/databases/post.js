import {POST} from './config';
import redis from '../../config/redis';

const onNewPost = (doc)=>{
    "use strict";
    console.log('new post', doc._id);
    redis.set(doc._id, JSON.parse(doc));
}

const onUpdatePost = (doc)=>{
    "use strict";
    console.log('update post', doc._id);
    redis.set(doc._id, JSON.parse(doc));
}

const onPostRemove = (doc)=>{
    "use strict";
    redis.del(doc._id);
}

export default (eventEmitter)=>{
    "use strict";

    eventEmitter.on(POST.NEW, onNewPost);
    eventEmitter.on(POST.UPDATE, onUpdatePost);
    eventEmitter.on(POST.REMOVE, onPostRemove);
}