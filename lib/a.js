import Converter from "../src/index.js";

const readingTime = new Converter('./lib/index.md').lastUpdate();
console.log(readingTime)