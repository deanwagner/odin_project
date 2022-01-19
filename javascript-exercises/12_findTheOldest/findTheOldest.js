/**
 * Finds the Oldest Person in Object
 * @author  Dean Wagner <info@deanwagner.net>
 * @param   {object} people - People to Search
 * @returns {object} - Oldest Person
 */
const findTheOldest = function(people) {
    let old = 0;
    let key = 0;
    let age = 0;

    // Loop through People
    people.forEach((person, index) => {
        if (person.hasOwnProperty("yearOfDeath")) {
            // Person has Died
            age = person.yearOfDeath - person.yearOfBirth;
        } else {
            // Person is Alive
            age = (new Date().getFullYear()) - person.yearOfBirth;
        }

        // If older, Update
        if (age > old) {
            key = index;
            old = age;
        }
    });

    return people[key];
};

// Do not edit below this line
module.exports = findTheOldest;
