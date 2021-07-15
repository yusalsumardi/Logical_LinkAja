
const funcArray = (arr) => {
    result = arr.map(function (element) {
        return (element % 2 != 0) ? (element * 3) : (element * 2)
    }
    )
    return result;
}

const isFibo = (query, count = 1, last = 0) => {
    if (count < query) {
        return isFibo(query, count + last, count);
    };
    if (count === query) {
        return true;
    }
    return false;
};

const groupWord = (arrs) => {
    let hash = {}
    arrs.forEach(arr => {
        let letters = arr.split('').sort()

        hash[letters] ? hash[letters].push(arr) : hash[letters] = [arr]
    })

    const keys = Object.keys(hash);
    const values = keys.map(function (v) { return hash[v]; });
    return values
}



const funcLinkAja = (arr) => {
    result = arr.map(function (element) {
        if (element % 3 == 0 && element % 7 == 0) {
            return "Link Aja"
        } if (element % 7 == 0) {
            return "Aja"
        } if (element % 3 == 0) {
            return "Link"
        } else {
            return element
        }
    }
    )
    return result
}


console.log(funcArray([1, 2, 3, 4, 5]));
console.log(isFibo(8));
console.log(isFibo(9));
console.log(funcLinkAja([23, 2, 45, 98, 27, 4, 28, 8, 30, 70, 16, 15, 21, 14, 42]))
console.log(groupWord(["katak", "takak", "kasur", "rusak", "surak", "foo", "bar"]))
