/**
 * Encrypts (+key) or Decrypts (-key) text string per "Caeser Cipher" technique
 * @author  Dean Wagner <info@deanwagner.net>
 * @param   {string} cipher - Text to encrypt/decrypt
 * @param   {number} key    - The Encryption Key
 * @returns {string} - The encrypted/decrypted text
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
 * Helper Function for caesar(); Calculates shift factor for character index
 * @author  Dean Wagner <info@deanwagner.net>
 * @param   {number} index - Index of Original Character
 * @param   {number} key   - Encryption Key
 * @returns {number} - Shifted Index
 */
const shiftFactor = function(index, key) {
    let factor;
    let shift;
    let result;

    // Calculate Shift Factor
    if ((key > 26) || (key < -26)) {
        // Large Shift Factor
        factor = key % 26;
    } else {
        // Regular Shift Factor
        factor = key;
    }

    // Calculate Shift Amount
    shift = index + factor;

    if (shift > 25) {
        // Wrap Positive Numbers
        result = shift - 26;
    } else if (shift < 0) {
        // Wrap Negative Numbers
        result = shift + 26;
    } else {
        // No Wrap
        result = shift;
    }

    return result;
}

// Do not edit below this line
module.exports = caesar;
