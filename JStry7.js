var operand = [];//[123+456]
var operator = '';//+.-.*./.=
var display = 0;//機算機顯示的數字
var isDec = false;
var squ = 0;
var userClick = false;


var $num = $(".answer>input").val();//計算機的數字
var $add;
var $minus;
var $multiply;
var $divided;
var total = 0;
var userClick = false;
$(function () {
    //先放0進去
    $(".answer>input").val(display);
    //按下but先執行是數字還是運算
    $("button").click(function () {
        var num = $(this).val();
        switch (num) {
            case "clean":
                display = 0;
                squ = 0;
                isDec = false;
                userClick = false;
                $(".answer>input").val(display);
                break;

            case "del": var $num = (".answer>input").val(); $num = $num.substring(0, $num.length - 1); $(".answer>input").val($num.substr(1, 20)); break;

            //處理中
            case "+": case "-": case "*": case "/": calculator(num); break;
            case ".": if (!userClick) { userClick = true; $(".answer>input").val(display + '.'); } break;
            case "answer": answer(); break;
            default:
               
                $num += num;
                $(".answer>input").val($num.substr(1, 20));


        }
        console.log($num);
        console.log(num);

    })

    function calculator() {

    }

    //hover
    var $button = $(".btn");
    $button.hover(function () {
        $(this).css({ "opacity": "0.5" });
    }, function () { $(this).css({ "opacity": "1" }); });

})