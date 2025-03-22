// models/Article.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const ArticleComment = require('./ArticleComment');
const ArticleLike = require('./ArticleLike');
const ArticleImage = require('./ArticleImage');


class Article extends Model {}

Article.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
  imageSrc: {
    type: DataTypes.STRING,
  },
  tags: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
  date: {
    type: DataTypes.STRING,
  },
  views: { // حقل عدد المشاهدات
    type: DataTypes.INTEGER,
    defaultValue: 0,  // القيمة الافتراضية للمشاهدات
  },
}, {
  sequelize,
  modelName: 'Article',
  tableName: 'articles',
  timestamps: true,
});


// الربط بالعلاقات
Article.hasMany(ArticleComment, { foreignKey: 'articleId' });
Article.hasMany(ArticleLike, { foreignKey: 'articleId' });
Article.hasMany(ArticleImage, { foreignKey: 'articleId' });

module.exports = Article;
