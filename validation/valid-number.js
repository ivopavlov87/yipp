const validNum = num => {
    return typeof num === 'number' && num.trim().length > 0;
}

module.exports = validNum;