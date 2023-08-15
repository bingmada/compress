/*
 * @Author: bingmada
 * @Date: 2023-08-11 16:06:20
 * @LastEditors: liyingda
 * @LastEditTime: 2023-08-15 10:36:35
 */
const { PythonShell } = require("python-shell");
const path = require("path");

const compression = (text, options = {}) => {
  const language = options.language || "english",
    stemmer = options.stemmer || "porter",
    removeSpaces =
      options.removeSpaces !== undefined ? options.removeSpaces : true,
    removeStopwords =
      options.removeStopwords !== undefined ? options.removeStopwords : true,
    removePunctuation =
      options.removePunctuation !== undefined
        ? options.removePunctuation
        : true;
  return new Promise((resolve, reject) => {
    let pythonOptions = {
      args: [
        text,
        stemmer,
        language,
        removeSpaces,
        removeStopwords,
        removePunctuation,
      ],
    };
    PythonShell.run(path.resolve(__dirname, "./gptrim.py"), pythonOptions)
      .then((messages) => {
        resolve(messages[0]);
      })
      .catch((error) => {
        resolve(text);
        console.error(error);
      });
  });
};

module.exports = compression;
