const path = require("path")
const users = require("./../controllers/users.js")
module.exports = (app) => {

  app.post("/login", users.login)
  app.post("/add_poll", users.add_poll)
  // app.post("/update_user", users.user_update)
  // app.post("/get_bucket_item", users.get_bucket_item)
  // app.post("/get_user_by_name", users.get_user_by_name)
  app.post("/get_poll_by_id", users.get_poll_by_id)
  //
  // // //
  // app.get("/get_all_users", users.index)
  app.get("/get_poll_list", users.get_poll_list)
  // // app.get("/all_questions", users.all_questions)
  // // //
  app.get("/logout", users.logout)
  app.get("/get_logged_in_user", users.get_logged_in_user)

// this must be your last route
  app.get("*", (req,res) => {
    res.sendFile(path.resolve("./client/dist/index.html"))
  })
}
