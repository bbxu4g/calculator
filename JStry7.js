var operand = [];//[123+456]
var operator = '';//儲存加減乘除哪一個
var display = 0;//機算機顯示的數字
var isDec = false;
var userClick = false;
var $num = $(".answer>input").val();//計算機的數字
var num3 = "";
var _exist = 0;//重複的加減乘除
var squ = 0;
var _equl = 0;

$(function () {
    //先放0進去
    $(".answer>input").val(display);

    //按下but先執行是數字還是運算
    $("button").click(function () {

        var num = $(this).val();//計算機的數字
        if ($(".answer>input").val().length > 14) { alert("超過15個字了"); $num = $(".answer>input").val(); $num = $num.substring(0, $num.length); $(".answer>input").val($num); }
        switch (num) {
            case "clean":
                display = 0;
                squ = 0;
                isDec = false;
                userClick = false;
                $num = 0;
                operand = [];
                num3 = "";
                $(".answer>input").val(display);
                break;
            case "del":del(); break;
            case "+": case "-": case "*": case "/": if (_exist == 0) { calculator(num); } else { _exist = 1; calculator(num); } break;
            case ".": if($(".answer>input").val()==="0" ){isDec = false;console.log("A"); } dot(); break;
            case "answer": if (_equl == 0) { $num = $(".answer>input").val(); if ($num != "0") { operand.push($num); answer(); } _equl = 1; } break;
            default:
                _exist = 0;
                _equl = 0;
                if ($num === '0' && num == 0) { $(".answer>input").val("0"); }
                else {
                    if (userClick == false) {
                        if ($(".answer>input").val() == "") { $(".answer>input").val("0"); } displayNumber(num);
                    }//還沒按過符號
                    else {
                        $(".answer>input").val("");
                        displayNumber(num); console.log(num);
                    }
                }
                break;
        }
    })

    function del() {
        $num = $(".answer>input").val();
        if ($num.length > 1) {
            $num =$num.substring(0, $num.length - 1);
            $(".answer>input").val($num);
            if ($num === 0 || $num == "") { $(".answer>input").val("0"); isDec = false;   }
        }
        else { $(".answer>input").val("0");  }
    }


    function dot() {
        $num = $(".answer>input").val();
        
        if ($num % 1 === 0) {
            if (userClick != false && num3 == "" && $num == "") { $(".answer>input").val("0."); $num = "0."; }
            else {
                if (isDec == false) {
                    isDec = true;
                    if ($(".answer>input").val() === "0") { $num = "0."; console.log($num); }
                    else {
                        $num = $num + '.';
                    }
                    $(".answer>input").val($num);

                }
            }
        }
        else if (isDec == false) {
            if (userClick != false && num3 == "") {
                $(".answer>input").val("0."); $num = $(".answer>input").val(); console.log("73"); isDec = true;
            }
        }
    }


    function answer() { //重複按等於的不執行
        if (operand.length > 1 && _exist == 0) { calc(squ); num3 = ""; } operand = []; userClick = false; console.log(operand);
    }


    function calc(e) {
        var operand_01 = operand.pop() * 1000;//防止JS的BUG
        var operand_02 = operand.pop() * 1000;
        switch (e) {
            case "+":
                display = operand_01 + operand_02;
                display = display / 1000;
                $(".answer>input").val(display);
                break;
            case "-":
                display = operand_02 - operand_01;
                display = display / 1000;
                $(".answer>input").val(display);
                break;
            case "*":
                display = operand_02 * operand_01;
                display = display / 1000000;
                $(".answer>input").val(display);
                break;
            case "/":
                display = operand_02 / operand_01;
                $(".answer>input").val(display);
                break;
        }
        operand = [];
        operand.push(display); console.log(operand);
        num3 = "";
    }

    //按下四則運算則存數字
    function calculator(num) {
        $num = $(".answer>input").val();   //$num計算機上的數字
        console.log(num);                  //num是符號

        if (userClick == false) { //還沒按過符號
            // operand = [];
            $num = $num * 1;
            operand.push($num);//先推一個數字在推計算機上的數字[123]
            squ = num;         //符號存起來
            _exist = 1;
            console.log(operand);
            userClick = true;
        }
        else {
            $num = $num * 1;
            operand.push($num * 1);
            console.log(operand);
            if (operand.length > 1) {
                if (_exist == 0) {
                    _exist = 1;//避免重複的加減乘除
                    calc(squ);
                    num3 = "";
                }
                squ = num;//存第二個符號
            }
        }
        display = 0;
        isDec = false;
        num3 = "";
        $num = "";
    }

    //單純的數字
    function displayNumber(num) {

        if (userClick == false) {
            if ($num == "0") { num3 = ""; }
            else if ($num === "0.") { num3 = "0."; }
            else { num3 = $num; }
            num3 += num;
            $num = num3;
            $(".answer>input").val($num);
        }

        else {

            if ($(".answer>input").val() === "0") { $num = ""; }
            else if ($(".answer>input").val() === "0.") { $num = "0."; }
            isDec = false;
            $num += num;
            $(".answer>input").val($num);

        }
    }

    //hover
    var $button = $(".btn");
    $button.hover(function () {
        $(this).css({ "opacity": "0.5" });
    }, function () { $(this).css({ "opacity": "1" }); });

})