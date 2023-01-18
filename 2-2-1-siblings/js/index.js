const $advItem = $("#AdvLs .adv-item")
const duration = 200

$advItem.hover(
    function(){$(this).stop(1,0).animate({top:0},duration);
    $(this).siblings().stop(1,0).animate({top:118},duration)},
    function(){$advItem.stop(1,0).animate({top:166},500)}
    );