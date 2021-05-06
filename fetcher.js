const request = require('request');
const fs = require('fs');


const args = process.argv;
//make url the first argument
const url = args[2];
//make path the second argument
const path = args[3];
//console.log(args);

function fetch() {
    //create request for webpage
    request(url, (error, response, body) => {
        //console.log(url);
        //console.log(body.length);
        //let the file be downloaded to th specified path
        fs.writeFile(path, body, (callback) => {
            //use body.length to measure the amount of bytes located in the data
            console.log(`Downloaded and saved ${body.length} bytes to ${path}`)
        });
        //check if path already exists
        fs.access(path, fs.F_OK, (err) => {
            if (err) {
                console.log('file does not exist')
            } else {
                console.log('file exists')
            }
        });

      });
}

fetch();



