const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let user = {
    username: "standard_user",
    premium: false,
};

// Serve static files
app.use(express.static("public"));

// Endpoint to check user status
app.get("/api/user", (req, res) => {
    res.json({ premium: user.premium });
});

// Vulnerable PATCH request to modify user data
app.patch("/api/user", (req, res) => {
    if (req.body.premium !== undefined) {
        user.premium = req.body.premium; // No authentication check!
    }
    res.json({ message: "User data updated!", user });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
