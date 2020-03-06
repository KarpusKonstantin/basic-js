module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let result = 1;
        let maxresult = 1;
        console.log('Array In = ', arr, ' Result In = ', result);

        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                result = this.calculateDepth(arr[i]) + 1;
                maxresult = Math.max(maxresult, result);
                console.log('Array = ', arr[i],' Result = ', result,' MaxResult = ', maxresult);
            } else {
                console.log('Not array = ', arr[i], ' Current result = ', result, ' MaxResult = ', maxresult);
            }
        }

        return maxresult;
    }
};
