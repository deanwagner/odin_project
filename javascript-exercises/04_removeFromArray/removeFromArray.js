const removeFromArray = function(data, ...remove) {

    for (let i = 0; i < remove.length; i++) {
        const index = data.indexOf(remove[i]);
        if (index >= 0) {
            data.splice(index, 1);
        }
    }
    
    return data;
};

// Do not edit below this line
module.exports = removeFromArray;
