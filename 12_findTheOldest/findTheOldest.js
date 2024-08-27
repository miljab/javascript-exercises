const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear(); 
    let result = people.reduce((oldestPerson, person) => {
        let age, maxAge;
        if ('yearOfDeath' in person) age = person.yearOfDeath - person.yearOfBirth;
        else age = currentYear - person.yearOfBirth;

        if ('yearOfDeath' in oldestPerson) maxAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
        else maxAge = currentYear - oldestPerson.yearOfBirth;
        return age > maxAge ? person : oldestPerson;
    });

    return result;
};

// Do not edit below this line
module.exports = findTheOldest;
