import { createServer } from "miragejs";

createServer({
  routes() {
    this.urlPrefix = "http://localhost:8000";
    this.namespace;

    // this.post("/login", (schema, request) => {
    //   return schema.all();
    // });
    // this.post("/signup", (schema, request) => {
    //   return schema.all();
    // });
    // this.post("/contact", (schema, request) => {
    //   return schema.all();
    // });
    this.post("/login", () => {
      return;
    });
    this.post("/signup", () => {
      return;
    });
    this.post("/contact", () => {
      return;
    });
  },
});
