import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('posts_db', 'posts_user', '12345678', {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize;