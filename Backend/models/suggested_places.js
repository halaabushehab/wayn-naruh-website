const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User'); // تأكد من وجود موديل للمستخدم

const SuggestedPlace = sequelize.define('SuggestedPlace', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  userId: {
    type: DataTypes.UUID,
    references: {
      model: 'users',
      key: 'id',
    },
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  imageUrl: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  city: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('Pending Review', 'Accepted', 'Rejected'),
    defaultValue: 'Pending Review',
  },
  createdAt: {
    type: DataTypes.TIMESTAMP,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.TIMESTAMP,
    allowNull: true,
    onUpdate: 'CASCADE',
  },
}, {
  modelName: 'SuggestedPlace',
  tableName: 'suggested_places',
  timestamps: false, // سيتم استخدام createdAt و updatedAt يدويًا
});

// الربط بالعلاقات
SuggestedPlace.belongsTo(User, { foreignKey: 'userId' });

module.exports = SuggestedPlace;
