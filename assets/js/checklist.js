$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function (e) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    e.stopPropagation();
});

$("input[type='text']").on("keypress", function (e) {
    //13 is the number for 'enter' key
    if (e.which === 13) {
        //take typed in item, clear input box, append to list
        var newItem = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + newItem + "</li>");
    }
});
    
$(".fa-plus").on("click", function () {
    $("input[type='text']").fadeToggle(100);
});