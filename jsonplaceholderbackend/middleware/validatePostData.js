// Middleware function to validate post data before processing
const validatePostData = (req, res, next) => {
    const { title, body, userId } = req.body; // Extracts title, body, and userId from the request body.

    // Checks if all required fields are provided
    if (!title || !body || !userId) {
        return res.status(400).json({ message: "All fields (title, body, userId) are required." });
        // If any field is missing, it sends a 400 Bad Request response with an error message.
    }

    // Checks if userId is a valid number (assuming userId should be numeric)
    // if (typeof userId !== 'number') {
    //     return res.status(400).json({ message: "User ID must be a number." });
    //     // If userId is not a number, it returns a 400 status with an appropriate error message.
    // }

    // If validation passes, move to the next middleware or route handler
    next();
    // Calls `next()` to pass control to the next middleware function in the stack.
};

module.exports = validatePostData; // Exports the middleware function for use in route files.
