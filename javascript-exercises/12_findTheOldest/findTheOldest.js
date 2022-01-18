const findTheOldest = function(people) {
    let old = 0;
    let key = 0;
    let age = 0;

    people.forEach((element, index) => {
        if (element.hasOwnProperty("yearOfDeath")) {
            age = element.yearOfDeath - element.yearOfBirth;
        } else {
            age = (new Date().getFullYear()) - element.yearOfBirth;
        }

        if (age > old) {
            key = index;
            old = age;
        }
    });

    return people[key];
};

// Do not edit below this line
module.exports = findTheOldest;
