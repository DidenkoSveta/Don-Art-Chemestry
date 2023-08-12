const fs = require('fs');
const uglifyJS = require('uglify-js');

const inputFileName = '../js/main.js';
const outputFileName = '../js/main.min.js';

fs.readFile(inputFileName, 'utf8', (err, data) => {
  if (err) {
    console.error('Ошибка чтения файла:', err);
    return;
  }

  const result = uglifyJS.minify(data);

  if (result.error) {
    console.error('Ошибка сжатия кода:', result.error);
    return;
  }

  fs.writeFile(outputFileName, result.code, (err) => {
    if (err) {
      console.error('Ошибка записи файла:', err);
      return;
    }

    console.log(`Файл ${outputFileName} успешно создан.`);
  });
});
