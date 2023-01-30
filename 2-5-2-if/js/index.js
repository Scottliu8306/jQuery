// 設定初始值
let num = 1
const $pic =$("#Pic")

// 置入初始圖                                                                                                                                                                                                                                                                                                            案
// $pic.attr("src" , "./images/ui0"+ num+".jpg" );
$pic.attr("src" , `./images/ui0${num}.jpg ` );


$pic.click(function(){
    // num = num + 1 ;
    // num+=1
    // num++
    // num--

    if(num<4){
        num++
    }else{
        num=1
    }

    // alert( num + 1);
    console.log( num )

    $(this).attr("src" , `./images/ui0${num}.jpg `)
})