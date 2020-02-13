import { DbHandler } from "./DbHandler";
import { MyDao } from "./MyDao";

class App {
  init() {
    DbHandler.getInstance().connect();
  }

  close() {
    DbHandler.getInstance().closeConnection();
  }

  start() {
    console.log("start...")
    this.init();
    setTimeout(this.test, 1000);
  }

  async test() {
    console.log("test...");
    const dao = new MyDao();

    let item = await dao.getOneItem("10000");
    console.log(item);

    this.close();
  }
}

new App().start();
