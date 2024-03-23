function showLogMessage(msg) {

    console.log(`-----------------------`)
    console.log(`로그메시지는 : ${msg}`)
    console.log(`-----------------------`)
}

function showLogMessage2(msg) {

    console.log(`===============`)
    console.log(`로그메시지는 : ${msg}`)
    console.log(`===============`)
}

const precious_value = 78



module.exports.showLogMessage = showLogMessage
module.exports.secondLog = showLogMessage2
module.exports.pvalue = precious_value