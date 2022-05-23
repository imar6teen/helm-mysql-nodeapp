/*
    the reason this file created is
    because for testing the express file
    we need to seperate between the app file
    and app listen
*/
const app = require("./index");
const { HTTP_PORT } = require("./config/config");

app.listen(HTTP_PORT, () => {
  console.log(`Server running on port ${HTTP_PORT}`);
});
