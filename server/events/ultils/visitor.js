import {VISITOR} from './config';

const visitorEnter = ()=>{
    "use strict";

}

const visitorWander = (request)=>{
    "use strict";
    console.log('visitor from ', request.connection.remoteAddress);
}

export default (eventEmitter)=>{
    "use strict";
    eventEmitter.on(VISITOR.ENTER, visitorEnter);
    eventEmitter.on(VISITOR.WANDER, visitorWander);
}
