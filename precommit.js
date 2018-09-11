var cp = require('child_process')

cp.exec(`npm run build`, function (err, stdout, stderr) {
    if (err) {
        throw stderr
    }

    console.log(stdout)

    // git add generated doc
    cp.exec('git add build')
})
