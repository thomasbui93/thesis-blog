import post from './post';
import category from './category';

export default (eventEmitter)=>{
    "use strict";
    post(eventEmitter);
    category(eventEmitter);
}
