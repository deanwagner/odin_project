const caesar = function(cipher, key) {
    const uppercase = ["A","B","C","D","E","F","G","H","I","G","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","w","z"];
    const character = cipher.split("");
    let encrypted = "";
    key = parseInt(key);

    character.forEach(char => {
        if (uppercase.includes(char)) {
            const index = uppercase.indexOf(char);
            encrypted += uppercase[shiftKey(index, key)];
        } else if (lowercase.includes(char)) {
            const index = lowercase.indexOf(char);
            encrypted += lowercase[shiftKey(index, key)];
        } else {
            encrypted += char;
        }
    });

    return encrypted;
};

const shiftKey = function(index, key) {
    let shift;
    let factor;
    let result;

    if (key > 26) {
        let k = key;
        while (k > 26) { 
            k = k - 26; 
        }
        factor = k;
    } else if (key < -26) {
        let k = key;
        while (k < -26) { 
            k = k + 26; 
        }
        factor = k;
    } else {
        factor = key;
    }

    shift = index + factor;

    if (shift > 25) {
        result = shift - 26;
    } else if (shift < 0) {
        result = shift + 26;
    } else {
        result = shift;
    }
    console.log(result);
    return result;
}

// Do not edit below this line
module.exports = caesar;
