const $entryType = $("#EntryType")
$entryType.addClass("Type1")

$("#Tab1").click(function(){
    // 方法一
    // $entryType.removeClass();
    // $entryType.addClass("entry-out Type1")
    
    // 方法二
    $entryType
      .removeClass()
      .addClass("entry-out Type1");
});

$("#Tab2").click(function(){
    $entryType
      .removeClass()
      .addClass("entry-out Type2");
});
$("#Tab3").click(function(){
    $entryType
      .removeClass()
      .addClass("entry-out Type3");
});