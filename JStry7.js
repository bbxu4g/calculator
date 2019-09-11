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
                operand=[];
                $(".answer>input").val(display);
                break;
            case "del":

                $num = $num.substring(0, $num.length - 1);
                $(".answer>input").val($num.substring(1, $num.length));
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
        var operand_01 = operand.pop()*1;
        var operand_02 = operand.pop()*1;
        console.log(operand_01, operand_02);
        switch (e) {
            case "+":
display=operand_01*1+operand_02*1;
console.log(display);
$(".answer>input").val(display);
operand.push(display);

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
        operand.push(display.substr(0, $num.length ));
        console.log(operand);// [empty, "123", "456"]

        // console.log(operand,operator);
        // operand[1] = operator;// [empty, "123"] "456"
        // console.log(operand,operator);
       
        userClick = true;
        if(operand.length>1) calc(num);
        //  console.log(operand);// [empty, "456"]
       

    }

    function displayNumber(num) {
        $num += num;
        display = $num;
        $(".answer>input").val(display.substr(1, $num.length));
    }


    //hover
    var $button = $(".btn");
    $button.hover(function () {
        $(this).css({ "opacity": "0.5" });
    }, function () { $(this).css({ "opacity": "1" }); });

})