'use strict';

import { createClient as redisClient } from 'redis-node';
import database from './database';

export default redisClient(database.redis.port, 'localhost');
