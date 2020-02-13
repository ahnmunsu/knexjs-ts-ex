import { DbHandler } from "./DbHandler";

export class MyDao {
  private connection = DbHandler.getInstance().getConnection();

  static getConnection() {
    return DbHandler.getInstance().getConnection();
  }

  getOneItem = async (id: string) => {
    return this.connection
                .select("*")
                .from("tablename")
                .where("id", id)
                .then(rows => rows[0]);
  }

  getItems = async (search: string) => {
    return this.connection
                .select("*")
                .from("tablename")
                .where("fieldname", search)
                .then(rows => rows);
  }
}
