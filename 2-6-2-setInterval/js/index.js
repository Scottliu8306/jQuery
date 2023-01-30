
let num = 0
const $pic =$("#Pic")
const duration = 500


function todo() {
    if (num < 5) {
        num++;
    } else {
        num = 1
    }
    console.log(num)

    $pic.attr("src" , `./images/photo${num}.jpg`)
}


setInterval( todo, duration);      