var operand = [];//[123+456]
var operator = '';//儲存加減乘除哪一個
var display = 0;//機算機顯示的數字
var isDec = false;
var squ = 0;
var userClick = false;


var $num = $(".answer>input").val();//計算機的數字
var total = 0;
$(function () {
    //先放0進去
    $(".answer>input").val(display);

    //按下but先執行是數字還是運算
    $("button").click(function () {

        var num = $(this).val();//計算機的數字
        switch (num) {
            case "clean":
                display = 0;
                squ = 0;
                isDec = false;
                userClick = false;
                $num = 0;
                $(".answer>input").val(display);
                break;
            case "del":

                $num = $num.substring(0, $num.length - 1);
                $(".answer>input").val($num.substring(1, 20));
                if ($num == 0) $(".answer>input").val("0");
                break;

            //處理中
            case "+": case "-": case "*": case "/": calculator(num); break;
            case ".": if (!userClick) { userClick = true; $(".answer>input").val(display + '.'); } break;
            case "answer": answer(); break;
            default:
                if (userClick == false) displayNumber(num);
                else { userClick = false; $num = 0; $num += num; $(".answer>input").val(num); }
                break;

        }


    })
    function calc(e) {
        console.log(e);//符號

        switch (e) {
            case "+":

                break;
            case "-":
                break;
            case "*":
                break;
            case "/":
                break;
        }
    }
    //存數字
    function calculator(num) {
        operand.push(display.substr(1, 20));
        console.log(operand);// [empty, "123", "456"]

        // console.log(operand,operator);
        // operand[1] = operator;// [empty, "123"] "456"
        // console.log(operand,operator);
        calc(num, operand);
        userClick = true;
        //  console.log(operand);// [empty, "456"]
        var operand_01 = operand.substr(0, length - 1);
        var operand_02 = operand.substr(0, length - 1);
        console.log(operand_01, operand_02);

    }

    function displayNumber(num) {
        $num += num;
        display = $num;
        $(".answer>input").val(display.substr(1, 20));
    }


    //hover
    var $button = $(".btn");
    $button.hover(function () {
        $(this).css({ "opacity": "0.5" });
    }, function () { $(this).css({ "opacity": "1" }); });

})