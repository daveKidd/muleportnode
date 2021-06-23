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
      host:"mudb.learn.mulesoft.com",
      port:3306,
      user:process.env.USERNAME,
      password:process.env.PASSWORD,
      database:process.env.DATABASE
    }
  }
};
