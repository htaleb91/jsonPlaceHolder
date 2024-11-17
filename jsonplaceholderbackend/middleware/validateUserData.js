// Middleware function to validate user data before processing
const validateUserData = (req, res, next) => {
  const {
    name,
    username,
    email,
    street,
    suite,
    city,
    zipcode,
    phone,
    website,
  } = req.body;

  // Check if all required fields are provided
  if (
    !name ||
    !username ||
    !email ||
    !street ||
    !suite ||
    !city ||
    !zipcode ||
    !phone ||
    !website
  ) {
    return res
      .status(400)
      .json({
        message:
          "All fields (name, username, email, street, suite, city, zipcode, phone, website) are required.",
      });
  }

  // Validate email format using a regular expression
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(email)) {
    return res
      .status(400)
      .json({ message: "Please enter a valid email address." });
  }

  // Validate phone format (basic check)
  const phoneRegex = /^\+?[1-9]\d{1,14}$/; // Can be adjusted to match specific phone formats
  if (!phoneRegex.test(phone)) {
    return res
      .status(400)
      .json({ message: "Please enter a valid phone number." });
  }

  // Additional checks for fields like website format (optional)
  try {
    new URL(website); // Will throw an error if not a valid URL
  } catch (e) {
    return res
      .status(400)
      .json({ message: "Please enter a valid website URL." });
  }

  // If all validations pass, proceed to the next middleware or route handler
  next();
};

module.exports = validateUserData;
