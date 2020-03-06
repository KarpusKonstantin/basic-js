module.exports = function repeater(str, options) {

    if (typeof str !== 'string') { str = String(str) }

    let additionalStr = '';
    let result = str;

/*    options = {
        repeatTimes: 3,
        separator: '**',
        addition: 'PLUS',
        additionRepeatTimes: 3,
        additionSeparator: '00'
    }; */


    console.log('STR = ', str, 'OPTIONS = ', options);

    if (!options) {
        return str;
    } else {
        if (options.repeatTimes === undefined) { options.repeatTimes = 0  }
        if (options.separator === undefined) { options.separator = '+'; }
        if (options.addition === undefined) { options.addition  = '' }
        if (options.additionSeparator === undefined) { options.additionSeparator = '|' }
        if (options.additionRepeatTimes === undefined) { options.additionRepeatTimes = 0  }

        if (typeof options.addition !== 'string') { options.addition = String(options.addition) }

        let m = [];
        if (options.additionRepeatTimes > 0) {
            for (let i = 1; i <= options.additionRepeatTimes; i++) {
                m.push(options.addition);
            }

            additionalStr = m.join(options.additionSeparator);
            result = result + additionalStr;
        }

        m = [];
        if (options.repeatTimes > 0) {
            for (let i = 1; i <= options.repeatTimes; i++) {
                m.push(result);
            }

            result = m.join(options.separator);
        } else {
            result = result + options.addition;
     //       console.log(result);
        }

      //  console.log(result);
        return result;
    }
};
