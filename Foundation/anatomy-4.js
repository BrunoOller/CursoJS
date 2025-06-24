(function (a,b,c) {
    let x = 3
    console.log(`Result: ${a + b + c}`)
    console.log(x)
}) (1,2,3);

(function () {
    let x = 300
    console.log(x)
}) (1,2,3);

(() => {
    console.log("Arrow #1")
})();

(() => console.log("Arrow #2"))();