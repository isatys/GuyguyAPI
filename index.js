"use strict";

var fs = require("fs"),
  path = require("path"),
  http = require("http");
// // MongoDB with mongoose
// const MongoClient = require("mongodb").MongoClient;
// const url = "mongodb://localhost:27017";
// const dbName = "DiscordAPI";
// let db;

// MongoClient.connect(url, function (err, client) {
//   console.log("Connected successfully to server");
//   db = client.db(dbName);
// });

var express = require("express");
var app = express();
var swaggerTools = require("swagger-tools");
var jsyaml = require("js-yaml");
var serverPort = 8080;

// Middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("");
});

//messages

const messages = require("./json/messages.json");
app.get("/messages", (req, res) => {
  res.status(200).json(messages);
});

app.get("/messages/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const message = messages.find((message) => message.id === id);
  res.status(200).json(message);
});

app.post("/messages", (req, res) => {
  messages.push(req.body);
  res.status(200).json(messages);
});

app.delete("/messages/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let message = messages.find((message) => message.id === id);
  messages.splice(messages.indexOf(message), 1);
  res.status(200).json(messages);
});

app.put("/messages/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let message = parkings.find((message) => message.id === id);
  (message.message = req.body.message), res.status(200).json(message);
});

//servers
const servers = require("./json/servers.json");
app.get("/servers", (req, res) => {
  res.status(200).json(servers);
});

app.get("/servers/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const server = servers.find((server) => server.id === id);
  res.status(200).json(server);
});

app.get("/servers/:name", (req, res) => {
  const name = req.params.name;
  const server = servers.find((server) => (server.name = name));
  res.status(200).json(server);
});

app.post("/servers", (req, res) => {
  servers.push(req.body);
  res.status(200).json(servers);
});

app.delete("/servers/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let server = servers.find((server) => server.id === id);
  servers.splice(servers.indexOf(server), 1);
  res.status(200).json(servers);
});

//users

const users = require("./json/users.json");
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  res.status(200).json(user);
});

// swaggerRouter configuration
var options = {
  swaggerUi: path.join(__dirname, "/swagger.json"),
  controllers: path.join(__dirname, "./controllers"),
  useStubs: process.env.NODE_ENV === "development", // Conditionally turn on stubs (mock mode)
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
var spec = fs.readFileSync(path.join(__dirname, "api/swagger.yaml"), "utf8");
var swaggerDoc = jsyaml.safeLoad(spec);

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {
  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

  // Validate Swagger requests
  app.use(middleware.swaggerValidator());

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());

  // Start the server
  http.createServer(app).listen(serverPort, function () {
    console.log(
      "Your server is listening on port %d (http://localhost:%d)",
      serverPort,
      serverPort
    );
    console.log(
      "Swagger-ui is available on http://localhost:%d/docs",
      serverPort
    );
  });
});
