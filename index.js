
const fs = require("fs")
const path = require("path")

const files = fs.readdirSync(__dirname);



files.forEach(element => {
    let ext = element.split('.', element.length - 1).pop();
    if (ext != 'js' && ext != 'json') {

        if (fs.existsSync(path.join(__dirname, `${ext}`))) {
            fs.rename(path.join(__dirname, element),path.join(__dirname,ext, element), (err) => {
                if (err) throw err;
                console.log('File moved successfully!');
            }
            )

        }
        else{
            fs.mkdirSync(path.join(__dirname, ext))
            fs.rename(path.join(__dirname, element),path.join(__dirname,ext, element), (err) => {
                if (err) throw err;
                console.log('File moved successfully!');
            }
            )
        }
    }

}
)