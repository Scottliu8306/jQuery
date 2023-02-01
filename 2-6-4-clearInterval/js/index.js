let num = 1;

const duration = 100

function doNext(){
    if(num<24){
        num++;
    }else{
        num=1
    };
    $("#Pic").attr("src", `./images/pic${num}.jpg`)
}
function doPrev(){
    if(num>1){
        num--;
    }else{
        num=24
    };
    $("#Pic").attr("src", `./images/pic${num}.jpg`)
}


picInterval = setInterval(doNext , duration)

$("#Wrap").hover(function(){
    clearInterval(picInterval)
},function(){
    picInterval = setInterval(doNext , duration)
})

$("#BtnNext").click(doNext);
$("#BtnPrev").click(doPrev)
