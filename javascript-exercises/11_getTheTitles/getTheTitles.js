/**
 * Get Book Titles from Object
 * @author  Dean Wagner <info@deanwagner.net>
 * @param   {object} books - Object contain Books
 * @returns {array} - Book Titles
 */
const getTheTitles = function(books) {
    let titles = [];

    // Loop through Books
    books.forEach(book => {
        // Add Title to Array
        titles.push(book.title);
    });

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
