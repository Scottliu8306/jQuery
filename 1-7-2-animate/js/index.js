
$('#BtnRight').click(function () {
    $("#Rocket").stop(1,0).animate({left: "+=200"},400);
});

$('#BtnLeft').click(function () {
    $("#Rocket").stop(1,0).animate({left: "-=200"},400);
});

