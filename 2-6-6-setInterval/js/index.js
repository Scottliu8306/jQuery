let index = 0;
let picInterval;
const duration = 1000;
const $slide =$("#Slide");
const $slideImgInner = $slide.find(".img-inner")

const $pagination =$("#Pagination");
const $piginationItems = $pagination .find(".pagination-item");


picInterval = setInterval(setSlide, duration)
$piginationItems.eq(index).addClass("js-pagination-item");

function setSlide() {
    if (index < 4) {
        index++;
    } else {
        index = 0;
    };
    console.log(index)
    $slideImgInner.css("left",`${-index*100}%`)
    $piginationItems
        .eq(index).addClass("js-pagination-item")
        .siblings().removeClass("js-pagination-item");

}



$slide.hover(function () {
    clearInterval(picInterval);
}, function () {
    picInterval = setInterval(setSlide, duration)
})

$piginationItems.click(function(){
    index =$(this).index();
    $slideImgInner.css("left",`${-index*100}%`)
    $piginationItems
        .eq(index).addClass("js-pagination-item")
        .siblings().removeClass("js-pagination-item");
})