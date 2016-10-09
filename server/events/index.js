import database from './databases';
import ultils from './ultils';

const eventListeners = (eventEmitter)=>{
    "use strict";
    database(eventEmitter);
    ultils(eventEmitter);
}

export default eventListeners;
