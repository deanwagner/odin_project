/**
 * Encrypts (+key) or Decrypts (-key) text string per "Caeser Cipher" technique
 * @author  Dean Wagner <info@deanwagner.net>
 * @param   {string} cipher - Text to encrypt/decrypt
 * @param   {number} key    - The Encryption Key
 * @returns {number} - The encrypted/decrypted text
 */
const caesar = function(cipher, key) {
    const uppercase = ["A","B","C","D","E","F","G","H","I","G","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","w","z"];
    const character = cipher.split("");
    let encrypted = "";
    key = parseInt(key);

    // Loop through each character in the cipher string
    character.forEach(char => {
        if (uppercase.includes(char)) {
            // Uppercase Letter Match
            const index = uppercase.indexOf(char);
            encrypted += uppercase[shiftFactor(index, key)];
        } else if (lowercase.includes(char)) {
            // Lowercase Letter Match
            const index = lowercase.indexOf(char);
            encrypted += lowercase[shiftFactor(index, key)];
        } else {
            // Ignore
            encrypted += char;
        }
    });

    return encrypted;
};

/**
 * Helper Function for caesr(); Calculates shift for character index
 * @author  Dean Wagner <info@deanwagner.net>
 * @param   {number} index - Index of matched Character
 * @param   {number} key   - Encryption Key
 * @returns {number} - encrypted/decrypted text
 */
const shiftFactor = function(index, key) {
    let shift;
    let factor;
    let result;

    // Calculate Factor
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

    // Calculate Shift Amount
    shift = index + factor;

    if (shift > 25) {
        result = shift - 26;
    } else if (shift < 0) {
        result = shift + 26;
    } else {
        result = shift;
    }

    return result;
}

// Do not edit below this line
module.exports = caesar;
