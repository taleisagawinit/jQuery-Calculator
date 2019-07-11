$(document).ready(() => {

    // $("#add").on('click', function(e) {
    //     var val1 = Number($("#num_1").val());
    //     var val2 = Number($("#num_2").val());
    //     $("#answer").val(val1 + val2);
    // })

    // $("#subtract").on('click', function(e) {
    //     var val1 = Number($("#num_1").val());
    //     var val2 = Number($("#num_2").val());
    //     $("#answer").val(val1 - val2);
    // })

    // $("#multiply").on('click', function(e) {
    //     var val1 = Number($("#num_1").val());
    //     var val2 = Number($("#num_2").val());
    //     $("#answer").val(val1 * val2);
    // })


    // $("#divide").on('click', function(e) {
    //     var val1 = Number($("#num_1").val());
    //     var val2 = Number($("#num_2").val());
    //     $("#answer").val(val1 / val2);
        
    // })


    


    // $("#operators").on ('click', function(e) {
    //     //   Number(firstNum);
    //     $("#num_input").val(secondNum);
    //     $("#numbers").on('click', function(e) {
    //         secondNum += 1;
    //         $("#num_input").val(secondNum);
    //         console.log(secondNum);
    //     })

    // })
    


    
    // first numbers before operator is a string, add it one by one
    // then save string and convert it to number
    // then remember which operator was pressed
    // then build second string with second number
    // save second string and convert it to number
    // do operation on both saved numbers

    // $("#numbers").on('click', function(e) {
        
    // })    

    var num = "";
    
    $("#container").on('click', function(event) {
        var input = $(event.target).html()
        
        if (input === "c") {
            num = "";
            $("#num_input").val(num)
        } 
        else if (input === "=" && num.includes("+")) {
            var num1 = num.split("").splice(0, num.indexOf("+"),);
            var num2 = num.split("").splice(num.indexOf("+")+1, num.length-1);
            
            num = Number(num1.join("")) + Number(num2.join(""));
            $("#num_input").val(num);
        } 
        else if (input === "=" && num.includes("-")) {
            var num1 = num.split("").splice(0, num.indexOf("-"),);
            var num2 = num.split("").splice(num.indexOf("-")+1, num.length-1);
            
            num = Number(num1.join("")) - Number(num2.join(""));
            $("#num_input").val(num);
        } 
        else if (input === "=" && num.includes("x")) {
            var num1 = num.split("").splice(0, num.indexOf("x"),);
            var num2 = num.split("").splice(num.indexOf("x")+1, num.length-1);
            
            num = Number(num1.join("")) * Number(num2.join(""));
            $("#num_input").val(num);
        } 
        else if (input === "=" && num.includes("/")) {
            var num1 = num.split("").splice(0, num.indexOf("/"),);
            var num2 = num.split("").splice(num.indexOf("/")+1, num.length-1);
            
            num = Number(num1.join("")) / Number(num2.join(""));
            $("#num_input").val(num);
        }   
        else {
            num += input;
            $("#num_input").val(num)
            
            
        }
    });







})