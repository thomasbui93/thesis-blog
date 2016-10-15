import {POST, prefix} from '../config';
import redis from '../../config/redis';

const onNewPost = (doc)=>{
    "use strict";

}

const onUpdatePost = (doc)=>{
    "use strict";

}

const onPostRemove = (doc)=>{
    "use strict";
}

const onVisitPost = (doc)=>{
    "use strict";
    const cacheID = prefix.post + doc.slug;
    delete doc._id;
    redis.set(cacheID, JSON.stringify(doc));
}

export default (eventEmitter)=>{
    "use strict";

    eventEmitter.on(POST.NEW, onNewPost);
    eventEmitter.on(POST.UPDATE, onUpdatePost);
    eventEmitter.on(POST.REMOVE, onPostRemove);
    eventEmitter.on(POST.VISITED, onVisitPost);
}