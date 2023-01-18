
const $thumbItems = $("#ThumbLs > img")
const $picItems = $("#PicLs > img")


$thumbItems.click(function(){
    // alert($(this).index())
    const index = $(this).index()
    // $picItems.fadeOut();
    // $picItems.eq(index).fadeIn();

    $picItems
    .eq(index).fadeIn()
    .siblings().fadeOut();
});