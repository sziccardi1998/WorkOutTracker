const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended:false }));
app.use(express.json());
app.use(morgan("combined"));

require("./routes/htmlRoutes.js")(app);
// require api route after addition
require("./routes/apiRoutes.js")(app);
// conncect to database with mongoose
mongoose.connect(
    process.env.MONGODB_URI || 'monodb://localhost/Workout', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    
       }
)

app.listen(PORT, () => {
    console.log("Server listening on port: " + PORT);
});