// step3.js

const fs = require("fs/promises");
const axios = require("axios");

function isURL(str) {
  return str.startsWith("http://") || str.startsWith("https://");
}



async function readFileText(path) {
  try {
    return await fs.readFile(path, "utf8");
  } catch (err) {
    console.error(`Error reading ${path}:\n  ${err}`);
    process.exit(1);
  }
}

async function fetchUrlText(url) {
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (err) {
    console.error(`Error fetching ${url}:\n  ${err}`);
    process.exit(1);
  }
}

async function output(text, outPath) {
  if (!outPath) {
    console.log(text);
    return;
  }
  try {
    await fs.writeFile(outPath, text, "utf8");
  } catch (err) {
    console.error(`Couldn't write ${outPath}:\n  ${err}`);
    process.exit(1);
  }
}



async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error("Usage: node step3.js [--out output.txt] <file-or-url>");
    process.exit(1);
  }

  let outPath = null;
  let target = null;

  if (args[0] === "--out") {
    if (args.length < 3) {
      console.error("Usage: node step3.js --out <output-file> <file-or-url>");
      process.exit(1);
    }
    outPath = args[1];
    target = args[2];
  } else {
    target = args[0];
  }

  const text = isURL(target)
    ? await fetchUrlText(target)
    : await readFileText(target);

  await output(text, outPath);
}

main();
