import eventEmitter from '../../events/events';
import {VISITOR} from '../../events/config';

const observerRequest = (req, res, next)=> {
    "use strict";
    eventEmitter.emit(VISITOR.WANDER, req);
    next();
}

export { observerRequest }
