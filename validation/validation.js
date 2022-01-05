exports.userValidation = (req, res, next) => {
  req.check("user_name", "User name is required").notEmpty();
  req.check("email", "Email is required").notEmpty();

  req
    .check("contact", "'Contact is required")
    .notEmpty()
    .isNumeric()
    .isLength({
      min: 10,
      max: 10,
    })
    .withMessage("Contact must be numeric and 10 digit");
  req.check("address", "Address is required").notEmpty();
  req
    .check("message", "Message required")
    .notEmpty()
    .isLength({
      min: 30,
    })
    .withMessage("Message must be 30 characters");

  const errors = req.validationErrors();
  if (errors) {
    const showError = errors.map((err) => err.msg);
    return res.status(400).json({ error: showError });
  }
  //to send in to next function
  next();
};
