module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/flights.db3'
    },
    useNullAsDefault: true,
    migrations:{
      directory: "./data/migrations"
    },
    seeds:{
      directory: "./data/seeds"
    }
  },
  production: {
    client:"mysql",
    connection:{
      host:"mydb.learn.mulesoft.com:3306",
      user:"mule",
      password:"mule",
      database:"training"
    }
  }
};
