require('dotenv').config()
<<<<<<< HEAD
module.exports= 
{
=======

module.exports = {
>>>>>>> 650ee2f4e47e1910ca3c742cd6075db8316edd75
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT,
    "define": {
      "underscored": true,
      "underscoredAll": true
    }
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "define": {
      "underscored": true,
      "underscoredAll": true
    }
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "define": {
      "underscored": true,
      "underscoredAll": true
    }
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 650ee2f4e47e1910ca3c742cd6075db8316edd75
