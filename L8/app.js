const http = require("http");

const server = http.createServer((req, res) => {
  //   if (req.url == "/") {
  //     res.writeHead(200, { "content-type": "text/plain" });
  //     res.end("Hello from file 8");
  //   }
  //   else if (req.url == "/users") {
  //     const obj = {
  //       name: "Pawan",
  //       age: 20,
  //       email: "pawan@gmail.com",
  //     };
  //     res.writeHead(200, { "content-type": "application/json" });
  //     res.end(JSON.stringify(obj));
  //   }

  // HANDLING A POST METHOD
  if (req.method === "POST" && req.url === "/submit") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString(); // convert buffer to string
    });

    req.on("end", () => {
      console.log(JSON.parse(body));
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ success: true, message: "Account Created !" }));
    });
  } else {
    res.writeHead(404, { "Content-type": "application/json" });
    res.end(
      JSON.stringify({
        success: false,
        message: "Oops ! Something went wrong!",
      })
    );
  }
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT} `);
});
