'use strict';
import { Model, DataTypes } from 'sequelize';
import sequelize from './index.js';

class Post extends Model {

  static associate(models) {
   
  }
}
Post.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: { model: "user", key: "id" },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imgName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descript: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'post',
});

console.log(Post === sequelize.models.post)
export default Post;

