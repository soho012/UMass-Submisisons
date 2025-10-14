// step2.js

const fs = require("fs");
const axios = require("axios");

function cat(path) {
  try {
    const contents = fs.readFileSync(path, "utf8");
    console.log(contents);
  } catch (err) {
    console.error(`Error reading ${path}:\n  ${err}`);
    process.exit(1);
  }
}

async function webCat(url) {
  try {
    const resp = await axios.get(url);
    console.log(resp.data);
  } catch (err) {
    
    console.error(`Error fetching ${url}:\n  ${err}`);
    process.exit(1);
  }
}

function isURL(str) {
  return str.startsWith("http://") || str.startsWith("https://");
}


const arg = process.argv[2];

if (!arg) {
  console.error("Usage: node step2.js <file-path-or-url>");
  process.exit(1);
}

if (isURL(arg)) {
  webCat(arg);
} else {
  cat(arg);
}
