import http from "http";

const PORT = process.env.PORT || 3000;
const server = http.createServer(async (req, res) => {
  //set the request route
  if (req.url === "/" && req.method === "GET") {
    //response headers
    res.writeHead(200, { "Content-Type": "application/json" });
    //set the response
    res.write("Hi there, This is a Vanilla Node.js API");
    //end the response
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(PORT, () => {
  console.log("Server running on port 3000");
});
