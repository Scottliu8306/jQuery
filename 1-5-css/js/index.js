// 宣告變數
const $btnLg = $("#BtnLg")
const $btnSm = $("#BtnSm")
const $content = $("#Content")

// 改變CSS
$btnLg.click(function(){
    // 方法一
    // $content.css("font-size", 20)
    // 方法二
    // $content.css("fontSize", 20);
    // $content.css("background-color", "pink")
    // // 方法三
    $content.css({
        "fontSize": 20 ,
        "background-color": "pink"
    })


});

$btnSm.click(function(){
    $content.css("font-size", 15)
});