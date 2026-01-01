// console.log("This is a temporary file.");

// import fs from "fs";

// fs.writeFile("temp.txt", "Writing file", (err) => {
//   if (err) {
//     console.log("Error writing file");
//   } else {
//     console.log("File written successfully");
//   }
// });
import http from 'http';

const server = http.createServer((req,res)=>{
  if(req.url==="/"){
    res.setHeader('Content-Type','text/html');
    res.write('<h1>Welcome to the Home Page</h1>');
    res.write('<form>');
    res.write('<a href="/">Home</a><br>');
    res.write('<a href="/men">Men</a><br>');
    res.write('<a href="/women">Women</a><br>');
    res.write('<a href="/kids">Kids</a><br>');
    res.write('<a href="/cards">Cards</a><br>');
    res.write('</form>');
    return res.end();
  }
  else if(req.url==="/men"){
    res.setHeader('Content-Type','text/html');
    res.write('<h1>Welcome to the Men Section</h1>');
    return res.end();
  }
  else if(req.url==="/women"){
    res.setHeader('Content-Type','text/html');
    res.write('<h1>Welcome to the Women Section</h1>');
    return res.end();
  }
  else if(req.url==="/kids"){
    res.setHeader('Content-Type','text/html');
    res.write('<h1>Welcome to the Kids Section</h1>');
    return res.end();
  }
  else{
    res.setHeader('Content-Type','text/html');
    res.write('<h1>Welcome to the Cards Section</h1>');
    return res.end();
  }
} )
const port = 3000;
server.listen(port,()=>{
  console.log(`http://localhost:${port}`);
})
