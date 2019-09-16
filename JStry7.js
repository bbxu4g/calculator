var operand = [];//[123+456]
var operator = '';//儲存加減乘除哪一個
var display = 0;//機算機顯示的數字
var isDec = false;
var userClick = false;
var $num = $(".answer>input").val();//計算機的數字

var _exist = 0;//重複的加減乘除
var squ = 0;
var num3 = 0;
var flag = 0;

var _equl = 0;
$(function () {
    //先放0進去
    $(".answer>input").val(display);

    //按下but先執行是數字還是運算
    $("button").click(function () {

        var num = $(this).val();//計算機的數字
        if ($(".answer>input").val().length > 14) { alert("超過15個字了"); $num = $num.substring(1, 15); $(".answer>input").val($num); }
        switch (num) {
            case "clean":
                display = 0;
                squ = 0;
                isDec = false;
                userClick = false;
                $num = 0;
                operand = [];
                num3 = 0;
                freq = [];
                $(".answer>input").val(display);
                break;
            case "del": del(); break;
            case "+": case "-": case "*": case "/": if (_exist == 0) { calculator(num); } else { _exist = 1; calculator(num); } break;
            case ".": dot(); break;
            case "answer": if (_equl == 0) { $num = $(".answer>input").val(); if ($num != "0") { operand.push($num); answer(); } _equl = 1; } break;
            default:
                _exist = 0;
                _equl = 0;

                if ($num === '0' && num == 0) { $(".answer>input").val("0"); }
                else {
                    if (userClick == false) { displayNumber(num); console.log(num); }//還沒按過符號
                    else {
                        console.log("42");//按過符號
                        $num = $(".answer>input").val(); //先存目前數字
                        $(".answer>input").val("");
                        num2(num);
                        flag = 0;
                    }
                }
                break;
        }
    })

    function del() {
        $num = $(".answer>input").val();
        if ($num.length > 1) {
            $num = $num.substring(0, $num.length - 1);
            $(".answer>input").val($num);
            if ($num == 0 || $num == "") $(".answer>input").val("0");
        }
        else { $(".answer>input").val("0"); }
    }

    function num2(num) {
        num3 += num;
        $(".answer>input").val(num3.substr(1, num3.length - 1));
        console.log(num3);
        //按過符號
    }
    function dot() {
        if (isDec == false) {
            isDec = true;
            $num = $(".answer>input").val();
            if ($(".answer>input").val() === "0") { $num = "0" + $num + "."; }
            else { $num = "0" + $num + '.'; }
            $(".answer>input").val($num.substr(1, length - 1));
            console.log($num);
        }
    }
    function answer() {
        if (operand.length > 1) {
            calc(squ);
            num3 = 0;
        }

    }


    function calc(e) {
        var operand_01 = operand.pop() * 1;
        var operand_02 = operand.pop() * 1;
        switch (e) {
            case "+":
                display = operand_01 + operand_02;
                $(".answer>input").val(display);
                console.log(operand_01, operand_02);
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
        operand = [];
        operand.push(display);
        num3 = 0;
    }




    //按下四則運算則存數字
    function calculator(num) {
        $num = $(".answer>input").val();   //$num計算機上的數字
        console.log(num);                  //num是符號
        num3 = 0;

        if (userClick == false) { //還沒按過符號
            operand = [];
            operand.push($num);//先推一個數字在推計算機上的數字[123]
            squ = num;         //符號存起來
            userClick = true;
        }

        else {
            operand.push($num * 1);
            if (operand.length > 1) {
                if (_exist == 0) {
                    _exist = 1;//避免重複的加減乘除
                    calc(squ);
                    num3 = 0;
                }
                squ = num;//存第二個符號
            }
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