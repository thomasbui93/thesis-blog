'use strict';

import { createClient as redisClient } from 'redis';
import database from './database';

export default redisClient(database.redis.port, 'localhost');
