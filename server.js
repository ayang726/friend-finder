const express = require("express");




const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serving Static folder
app.use(express.static("app/public"));

// Routing
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

// App Listen
app.listen(PORT, () => { console.log("Server listening on http://localhost:" + PORT) });