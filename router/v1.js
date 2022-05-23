const express = require("express");
const CommentController = require("../controller/CommentController");
const loginController = require("../controller/login");
const PostController = require("../controller/PostController");
const signupController = require("../controller/signup");

const router = express.Router();

router.post("/login", loginController);

router.post("/signup", signupController);

//TODO
router.route("/post").post(PostController.post).get(PostController.get);

//TODO
router
  .route("/comment")
  .post(CommentController.post)
  .get(CommentController.get);

module.exports = router;
