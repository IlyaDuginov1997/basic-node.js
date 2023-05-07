const {stdin, stdout} = process;

// ------------------------------process.argv, environment------------------------------\

// const sumFlag = process.argv.indexOf('-s');
// const multiplicationFlag = process.argv.indexOf('-m');
//
// stdout.write('Введите 2 числа\n');
// stdin.on('data', (data) => {
//   const numArr = data.toString().split(' ');
//   const [firstNumber, secondNumber] = numArr.map( el => Number(el))
//
//   if (sumFlag !== -1) {
//     stdout.write(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
//   } else if (multiplicationFlag !== -1) {
//     stdout.write(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
//   } else {
//     stdout.write('Something go wrong');
//   }
//   process.exit();
// });


// ------------------------------paths access------------------------------\

// const validFlags = ['-d', '-f'];
// const [flag] = process.argv.slice(2);
// const isValidFlag = validFlags.includes(flag);
//
// console.log('flag', flag);
// console.log('isValidFlag', isValidFlag);
// console.log(process.argv)
//
// if (isValidFlag && process.argv.slice(2).length === 1) {
//   if (flag === '-d') {
//     stdout.write(__dirname);
//     process.exit();
//
//   } else {
//     stdout.write(__filename);
//     process.exit();
//   }
// } else {
//   stdout.write('Введено некректное значение, попробуйте еще раз\n');
// }

// ------------------------------file-system access------------------------------\

// const fs = require('fs');
// const path = require('path');

// fs.mkdir(path.join(__dirname, 'notes'), err => {
//   if (err) throw err;
//   console.log('Папка была создана');
// });
//
// fs.writeFile(
//   path.join(__dirname, 'notes', 'mynotes.txt'),
//   'Hello world',
//   (err) => {
//     if (err) throw err;
//     console.log('Файл был создан');
//   }
// );
//
// fs.appendFile(
//   path.join(__dirname, 'notes', 'mynotes.txt'),
//   ' From append file',
//   err => {
//     if (err) throw err;
//     console.log('Файл был изменен');
//   }
// );
//
// fs.readFile(
//   path.join(__dirname, 'notes', 'mynotes.txt'),
//   'utf-8',
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

// fs.rename(
//   path.join(__dirname, 'notes', 'mynotes.txt'),
//   path.join(__dirname, 'notes', 'notes.txt'),
//   err => {
//     if (err) throw err;
//     console.log('Файл переименован');
//   }
// );


// ------------------------------OS access------------------------------\

// const os = require('os');
//
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.homedir());
// console.log(os.uptime());
// console.log(os.EOL);


// ------------------------------http------------------------------\

const http = require('http');

const PORT = 3000;

const requestHandler = (request, response) => {
  const { method, url } = request;
  const heading = `<h1 style="color: red">${url} page</h1>`;
  const content = `<div style="background-color: green; width: 100px; height: 100px">Green block 100px x 100px</div>`;
  console.log(`Получен ${method}-запрос на ${url}`);
  response.write(heading);
  response.end(content);
};

const server = http.createServer(requestHandler);

server.listen(PORT, 'localhost', () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});

