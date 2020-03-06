class VigenereCipheringMachine {
    constructor (value) {
        if (value === true) {
            this.isDirect = true
        } else if (value === false) {
            this.isDirect = false
        } else {
            this.isDirect = true
        }
    }

    encrypt(str, key) {
        if (!str) { throw Error(); }
        if (!key) { throw Error(); }

        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        str = str.toUpperCase();
        key = key.toUpperCase();

      //  console.log('Str = ', str, 'Key = ', key);

        let tmp;

        let key_n = '';
        let key_array = [];

        let key_i;
        let str_i;

        let result = [];

        let maxlength = Math.max(str.length, key.length)

        /* Расширяем строку ключа до нужной длины */
        for (let i = 0; i < maxlength; i++ ){
            if (i < key.length) {
                key_n = key_n + key[i];
            } else {
                key_n = key_n + key[i % key.length];
            }
        }

        /* Делаем из строки ключа массив и расширем его не алфавитными элементами */
        key_array = key_n.split('');

        for (let i = 0; i < maxlength; i++ ) {
            if (alphabet.indexOf(str[i]) === -1) {
                key_array.splice(i,0,'-1');
            }
        }

        /* Строка и массив ключа имею одинаковые индексы и мы можем по ним бежать */
        for (let i = 0; i < maxlength; i++) {
            if (alphabet.indexOf(str[i]) !== -1) {
                str_i = alphabet.indexOf(str[i]);
                key_i = alphabet.indexOf(key_array[i]);

                tmp = (str_i + key_i) % alphabet.length; // Вычисляем индекс нашей шифрованной буквы

                result.push(alphabet[tmp]);
            } else {
                result.push(str[i]);
            }
        }

        if (this.isDirect === false) {
            result.reverse();
        }

        return result.join('');
    }

    decrypt(str, key) {
        if (!str) { throw Error(); }
        if (!key) { throw Error(); }

        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        str = str.toUpperCase();
        key = key.toUpperCase();

        //  console.log('Str = ', str, 'Key = ', key);

        let tmp;

        let key_n = '';
        let key_array = [];

        let key_i;
        let str_i;

        let result = [];

        let maxlength = Math.max(str.length, key.length)

        /* Расширяем строку ключа до нужной длины */
        for (let i = 0; i < maxlength; i++ ){
            if (i < key.length) {
                key_n = key_n + key[i];
            } else {
                key_n = key_n + key[i % key.length];
            }
        }

        /* Делаем из строки ключа массив и расширем его не алфавитными элементами */
        key_array = key_n.split('');

        for (let i = 0; i < maxlength; i++ ) {
            if (alphabet.indexOf(str[i]) === -1) {
                key_array.splice(i,0,'-1');
            }
        }

        /* Строка и массив ключа имею одинаковые индексы и мы можем по ним бежать */
        for (let i = 0; i < maxlength; i++) {
            if (alphabet.indexOf(str[i]) !== -1) {
                str_i = alphabet.indexOf(str[i]);
                key_i = alphabet.indexOf(key_array[i]);

                tmp = (str_i - key_i + alphabet.length) % alphabet.length; // Вычисляем индекс нашей шифрованной буквы

                result.push(alphabet[tmp]);
            } else {
                result.push(str[i]);
            }
        }

        if (this.isDirect === false) {
            result.reverse();
        }

        return result.join('');

    }
}

module.exports = VigenereCipheringMachine;
