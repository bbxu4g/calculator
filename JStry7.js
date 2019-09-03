var $text = $(".text").val();//計算機的數字
console.log($text);
var $add;
var $minus;
var $multiply;
var $divided;
var total;
$(function () {
    $(".btn").click(function () {
        var num = $(this).val();
        if (num == "." && $text < 1) { $text += num; $(".text").val($text); console.log("A"); } else {
            switch (num) {
                case "clean": $text = 0; num = $text; $(".text").val($text); break;
                case "del": $text = $text.substring(0, $text.length - 1); $(".text").val($text.substr(1, 20)); break;
                case "+": add(); answer(); break;
                case "answer":
                default:
                    $text += num;
                    $(".text").val($text.substr(1, 20)); console.log($text.substr(1, 20));
            }
        }
    });
});


//hover
var $button = $(".btn");
$button.hover(function () {
    $(this).css({ "opacity": "0.5" });
}, function () { $(this).css({ "opacity": "1" }); });

