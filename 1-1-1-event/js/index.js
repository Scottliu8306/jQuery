// 標題一"的"滑鼠事件:放開 
$("h1").on("click" , getTitle);

$("p").on("click" , getParagraph)

// getTitle 的功能是:彈出視窗,顯示我點到標題一 
function getTitle(){
    alert("我點到標題一")
}

function getParagraph (){
    alert("我點到段落")
}