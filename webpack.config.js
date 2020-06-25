//1.entry point of the file 
//2.where do we output
console.log(__dirname);

const path = require('path');

console.log(path.join(__dirname,'public'))

module.exports= {

    entry: "./src/app.js",
    mode: 'development',
    output:{
        path:path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    module:{

        rules: [{

            loader: 'babel-loader',
            test:/\.js$/,
            exclude:/node_modules/
        }]
    }

}