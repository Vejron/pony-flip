const testFolder = './src/assets/';
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
  let ponys = []
  let id = 0;

  files.forEach(file => {
    if(file.endsWith('png') || file.endsWith('jpg')) {
      ponys.push({
        id: id++,
        image: '/assets/' + file
      });
      ponys.push({
        id: id++,
        image: '/assets/' + file
      });
    }
  });

  let json = JSON.stringify(ponys, null, 2);
  fs.writeFile('./src/assets/ponys.json', json, (err) => {
    if (err) throw err;
    console.log('ponys.json file written')
  });
})
