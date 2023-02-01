let index = 0;
let picInterval;
const duration = 1000;
const $slide =$("#Slide");
const $slideImgInner = $slide.find(".img-inner")

picInterval = setInterval(setSlide, duration)

function setSlide() {
    if (index < 4) {
        index++;
    } else {
        index = 0;
    };
    console.log(index)
    $slideImgInner.css("left",`${-index*100}%`)
}



$slide.hover(function () {
    clearInterval(picInterval);
}, function () {
    picInterval = setInterval(setSlide, duration)
})
