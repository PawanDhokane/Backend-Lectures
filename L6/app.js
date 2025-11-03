const fs = require("fs");

//The fs module in Node.js stands for File System — it allows you to work with files and directories on your computer.Think of it as Node’s built-in tool for reading, writing, updating, deleting, and managing files or folders.

// Reading from a file

fs.readFile("input.txt", "utf-8", (err, data) => {
  // Asynchronous (non - blocking)
  if (err) throw err;
  else {
    console.log(data);
  }
});

const syncData = fs.readFileSync("input.txt", "utf-8"); // Synchronous (Blocking)
console.log(syncData);

// Writing in file

fs.writeFile("input.txt", "Hello World", (err) => {
  // overrides the previous text and adds 'Hello World' to file.
  if (err) throw err;
});

// Appending in file

fs.appendFile("input.txt", "\nThis is appended text", (err) => {
  // Adds new text to previously existing text
  if (err) throw err;
});

// Delete file

// fs.unlink("input.txt", (err) => {
//   // Deletes input.txt
//   if (err) throw err;
// });

// Now , all above methods are good only if file size is small , but it's inefficient for larger files therefore we can use following methods...

// RECOMMENDED

const readStream = fs.createReadStream("input.txt", "utf-8");
// console.log(readStream);

readStream.on("data", (chunk) => {
  console.log(chunk);
});

readStream.on("end", () => {
  console.log("File reading done...");
});

// Writing stream

const writeStream = fs.createWriteStream("input.txt", "utf-8");

writeStream.write("Welcome to Node.js.");

// Pipe : .pipe() lets you connect data flow between streams, automatically and efficiently, without manually managing events or buffering. basically transfer data between two files , you’re streaming data as it’s read, piece by piece, without ever loading the entire file into memory.

const readStream2 = fs.createReadStream("input.txt", "utf-8");

const writeStream2 = fs.createWriteStream("output.txt", "utf-8");

readStream2.pipe(writeStream2); // all data from input.txt gets copied to output.txt
