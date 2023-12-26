const fs = require('fs');

const writeToFile = function(fileName, data)
{
    fs.writeFile(
        fileName,
        data,
        {encoding: 'utf-8'},
        err =>
        {
            err ? console.log(err) : console.log(
                `File successfully saved as ${fileName}`
            );
        } // end err handling
    )
}

module.exports = writeToFile;