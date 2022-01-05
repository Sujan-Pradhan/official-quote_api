const Messagebox = require("../models/messageModel");

//post message
exports.postMessage = async (req, res) => {
  let users = new Messagebox({
    user_name: req.body.user_name,
    email: req.body.email,
    contact: req.body.contact,
    address: req.body.address,
    message: req.body.message,
  });
  users = await users.save();
  if (!users) {
    return res.status(400).json({ error: "Something went wrong" });
  }
  res.send(users);
};

//get all message users
exports.messageUsers = async (req, res) => {
  const users = await Messagebox.find();
  if (!users) {
    return res.status(400).json({ error: "Something went wrong" });
  }
  res.send(users);
};

//get single message users
exports.singlemessageUser = async (req, res) => {
  const users = await Messagebox.findById(req.params.id);
  if (!users) {
    return res.status(400).json({ error: "Something went wrong" });
  }
  res.send(users);
};
