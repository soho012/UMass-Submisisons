// step1.js

const fs = require("fs"); 

function cat(path) {
  try {
    const contents = fs.readFileSync(path, "utf8");
    console.log(contents);
  } catch (err) {
    console.error(`Error reading ${path}:\n  ${err}`);
    process.exit(1); 
  }
}

const path = process.argv[2]; 

if (!path) {
  console.error("Usage: node step1.js <file-path>");
  process.exit(1);
}

cat(path);
