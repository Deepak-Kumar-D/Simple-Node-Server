import express from "express";

const pizza = express.Router();

pizza.get("/", (request, response) => {
  response.send("Node server started successfully");
});

pizza.get("/user", (request, response) => {
  response.send("User Router");
});

pizza.get("/about", (request, response) => {
  response.send("About Router");
});

pizza.get("/contacts", (request, response) => {
  response.send("Contacts Router");
});

export { pizza };
