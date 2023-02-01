let num = 1

function doNext(){
    if(num < 24){
        num += 1;
    }else{
        num = 1;
    };
    $("#Pic").attr("scr",`./images/pic${num}.jpg`)
    console. log(num)
}