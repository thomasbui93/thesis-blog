import {CATEGORY, prefix} from '../config';
import redis from '../../config/redis';

const onNewCategory = (doc)=>{
    "use strict";

}

const onUpdateCategory= (doc)=>{
    "use strict";

}

const onCategoryRemove = (doc)=>{
    "use strict";
}

const onVisitCategory = (doc, slug)=>{
    "use strict";
    const cacheID = prefix.category + slug;
    console.log(cacheID);
    redis.set(cacheID, JSON.stringify(doc));
}

export default (eventEmitter)=>{
    "use strict";

    eventEmitter.on(CATEGORY.NEW, onNewCategory);
    eventEmitter.on(CATEGORY.UPDATE, onUpdateCategory);
    eventEmitter.on(CATEGORY.REMOVE, onCategoryRemove);
    eventEmitter.on(CATEGORY.VISITED, onVisitCategory);
}
