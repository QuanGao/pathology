module.exports = function (str) {
    const arr = str.split(" ")
    return str === "None"? "": `Membranes with ${arr[2]}, maternal immune response stage ${arr[1]}`
}