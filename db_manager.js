const Sequelize = require('sequelize');

class DatabaseManager {
    constructor() {
        this.sequelize = new Sequelize('database', 'user', 'password', {
            host: 'localhost',
            dialect: 'sqlite',
            logging: false,
            // SQLite only
            storage: 'database.sqlite'
        });
    }
}

module.exports = new DatabaseManager();