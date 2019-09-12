var operand = [];//[123+456]
var operator = '';//儲存加減乘除哪一個
var display = 0;//機算機顯示的數字
var isDec = false;
var squ = 0;
var userClick = false;
var $num = $(".answer>input").val();//計算機的數字

$(function () {
    //先放0進去
    $(".answer>input").val(display);

    //按下but先執行是數字還是運算
    $("button").click(function () {

        var num = $(this).val();//計算機的數字
        if ($(".answer>input").val().length > 14) { alert("超過15個字了"); $(".answer>input").val($num.substring(1, 15)); }
        else {
            switch (num) {
                case "clean":
                    display = 0;
                    squ = 0;
                    isDec = false;
                    userClick = false;
                    $num = 0;
                    operand = [];
                    $(".answer>input").val(display);
                    break;
                case "del":
                    $num = $num.substring(0, $num.length - 1);
                    $(".answer>input").val($num.substring(1, $num.length));
                    if ($num == 0) $(".answer>input").val("0");
                    break;
                case "+": case "-": case "*": case "/": calculator(num); break;
                case ".": dot(); break;
                case "answer": if ($num != "0") { operand.push($num); answer(); } break;
                default:
                    if ($num === '0' && num == 0) { $(".answer>input").val("0"); }
                    else {
                        if (userClick == false) { displayNumber(num); console.log("41"); }//還沒按過符號
                        else {
                            console.log("42");//按過符號
                            $num = $(".answer>input").val(); //先存目前數字
                            operand.push($num); //推上目前數字
                            num2(num);
                        }
                    }
                    break;
            }
        }
    })

    function num2(num) {
        display += num;
        $(".answer>input").val(display);
        console.log("56");//按過符號

    }
    function dot() {
        if (!isDec) {
            isDec = true;
            if ($(".answer>input").val() === "0") { $num = "0."; }
            else { $num = $num.substr(1, length) + '.'; }
            $(".answer>input").val($num);
        }
    }
    function answer() {
        console.log(squ);
        calc(squ);
    }

    function calc(e) {
        console.log(e);//符號
        var operand_01 = operand.pop() * 1;
        var operand_02 = operand.pop() * 1;
        console.log(operand_01, operand_02);
        switch (e) {
            case "+":
                display = operand_01 + operand_02;
                $(".answer>input").val(display);
                break;
            case "-":
                display = operand_02 - operand_01;
                $(".answer>input").val(display);
                break;
            case "*":
                display = operand_02 * operand_01;
                $(".answer>input").val(display);
                break;
            case "/":
                display = operand_02 / operand_01;
                $(".answer>input").val(display);
                break;
        }
    }
    //按下四則運算則存數字
    function calculator(num) {
        // console.log(operand, $num, num, userClick);
        $num = $(".answer>input").val();
        console.log(num);
        if (userClick == false) {//還沒按過符號
            if (num == "+" || num == "-") { operand.push(0); console.log("92"); }
            if (num == "*" || num == "/") { operand.push(1); console.log("93"); }
            userClick = true;
            operand.push($num);//先推一個數字在推計算機上的數字
            squ = num;//符號存起來
        }
        else {
            if (operand.length > 2) { operand.push($num); console.log("99", operand); calc(squ); }//存到兩個數字就計算
            else { operand = []; operand.push($num); console.log("100", operand); }//重複按符號
            squ = num;
        }
    }
    //單純的數字
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