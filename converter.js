const webp = require('webp-converter');
const fs = require('fs');
webp.grant_permission();
let directory = process.argv[2]
let filenames = fs.readdirSync(directory)

console.log("\nFilenames in directory:");
filenames.forEach((file) => {
    let filename = file
    let fileoutputName =file.split('.')[0] + '.webp'
    console.log(`Fileoutput name : ${fileoutputName}`)
    const result = webp.cwebp(`${directory}/${filename}`,`./compressed/${fileoutputName}`,"80");
    result.then((res) => {
        console.log(res)
    })
});
