const express = require("express");
const {
  postMessage,
  messageUsers,
  singlemessageUser,
} = require("../controlller/messageController");
const { userValidation } = require("../validation/validation");
const router = express.Router();

router.post("/postmessage", userValidation, postMessage);
router.get("/messageusers", messageUsers);
router.get("/singlemessageuser/:id", singlemessageUser);

module.exports = router;
