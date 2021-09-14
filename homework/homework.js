const fs = require('fs');
const path = require('path');

console.log(path.dirname('/Users/jakerotkvich/Workspace/node-react/homework/homework.js'));

function readContentsOfPath(filePathString){
    fs.readdir(filePathString, (err, files) => {
        if (err) throw err;
        console.log(files);
        for (const file in files) {
            fs.readFile(filePathString + files[file], 'utf8', (err, data) => {
                if (err) throw err;
                console.log(data);
            });
        };
    });
} 
console.log(readContentsOfPath('/Users/jakerotkvich/Workspace/node-react/server/'));