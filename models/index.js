'use strict';

import Sequelize from 'sequelize';
import path from 'path';
import fs from 'fs';

const env = process.env.NODE_ENV || 'development';

const configPath = path.resolve()+'\\config\\config.json';
const config = JSON.parse(fs.readFileSync(configPath,'utf-8'))[env];

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
export default sequelize;
