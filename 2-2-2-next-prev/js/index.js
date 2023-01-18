const $advItem = $("#AdvLs .adv-item")
const duration = 200


// 方法一
// $advItem.hover(
//     function () {
//         $(this).stop(1, 0).animate({ top: 0 }, duration);
//         $(this).prev().stop(1, 0).animate({ top: 118 }, duration);
//         $(this).next().stop(1, 0).animate({ top: 118 }, duration)},
//     function () { $advItem.stop(1, 0).animate({ top: 166 }, 500) }
// );

// 方法二
$advItem.hover(out, over);

function over(){
    $(this).stop(1, 0).animate({ top: 0 }, duration);
    $(this).prev().stop(1, 0).animate({ top: 118 }, duration);
    $(this).next().stop(1, 0).animate({ top: 118 }, duration)};
function out(){
     $advItem.stop(1, 0).animate({ top: 166 }, 500) };

