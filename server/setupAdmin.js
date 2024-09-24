import bcrypt from 'bcrypt';
import sequelize from './sequelize.js'; // Path to your sequelize instance
import User from './models/User.js'; // Path to your User model

const saltRounds = 10;
