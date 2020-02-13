import * as knexConnect from "knex";

export class DbHandler {
  private static instance: DbHandler = undefined;
  private connection: knexConnect = undefined;

  private constructor() {}

  static getInstance() {
    if (!this.instance) {
      this.instance = new DbHandler();
    }

    return this.instance;
  }

  connect() {
    this.connection = knexConnect({
      client: 'mysql',
      connection: {
        host: '0.0.0.0',
        port: 3367,
        user: 'root',
        password: 'password',
        database: 'dbname',
        charset: 'utf8'
      },
      debug: true,
      pool: {
        min: 1,
        max: 20,
      },
    });
  }

  getConnection() {
    return this.connection;
  }

  closeConnection() {
    this.connection.destroy();
  }
}
