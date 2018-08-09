$('.loginLittle').click(function(){
    $('.loginLittle').css("background-color", "brown");
    $('.registerLittle').css("background-color", "gray");
    $('.loginContent').removeClass("none");
    $('.registerContent').addClass("none");
})

$('.registerLittle').click(function(){
    $('.registerLittle').css("background-color", "brown");
    $('.registerLittle').removeClass("active");
    $('.loginLittle').css("background-color", "gray");
    $('.loginContent').addClass("none");
    $('.registerContent').removeClass("none");
    
})

