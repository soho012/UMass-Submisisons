/** Command-line tool to generate Markov text. */

const fs = require("fs");
const axios = require("axios");
const { MarkovMachine } = require("./markov");

/**
 * Read a local file and return its content as string.
 */
function readFile(path) {
  try {
    return fs.readFileSync(path, "utf8");
  } catch (err) {
    console.error(`Error reading file ${path}:\n  ${err}`);
    process.exit(1);
  }
}

/**
 * Fetch a URL and return content as string.
 */
async function fetchURL(url) {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    console.error(`Error fetching URL ${url}:\n  ${err}`);
    process.exit(1);
  }
}

/**
 * Main function
 */
async function main() {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.error("Usage: node makeText.js <file|url> <path-or-url>");
    process.exit(1);
  }

  const mode = args[0];
  const target = args[1];

  let text;

  if (mode === "file") {
    text = readFile(target);
  } else if (mode === "url") {
    text = await fetchURL(target);
  } else {
    console.error("First argument must be 'file' or 'url'");
    process.exit(1);
  }

  const mm = new MarkovMachine(text);
  console.log(mm.makeText(200)); // generate 200 words by default
}

main();
