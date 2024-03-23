//function sayHello(name) {
    // console.log('Hello' +name)
// }

// sayHello('John')

// if (v > 5)

const logger = require('./logger.js')

logger.showLogMessage('모듈에 대한 테스트 중입니다.')
logger.secondLog('두번째 로그메시지')
console.log('Logger 모듈에 들어있는 소중한 값은 :' +logger.pvalue)