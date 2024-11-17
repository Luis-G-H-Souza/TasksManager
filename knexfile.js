module.exports = {
  test: {
    client: 'mysql2',
    version: '3.11.4',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '91644649gu',
      database: 'taskmanager'
    },
    migrations: {
      directory: 'src/migrations'
    }
  }
}
