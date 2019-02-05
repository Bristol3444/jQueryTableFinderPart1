"use strict";
$(document).ready(() => {
let tableOne = 1; let tableTwo = 2; let tableThree = 3;
let tableFour = 4; let tableFive = 5; let tableSix = 6;
let tableSeven = 7; let tableEight = 8; let tableNine = 9;

$("#one").on("click", function(){
    $("#info").addClass("active");
    $(".sub-header").append(`<p>Table Number: ${tableOne}</p>`);
    
    $("button").on("click", function(){
        $("#info").removeClass("active");
        $("#one").addClass("reserved");
        $(".sub-header").text("");
    });
});
$("#two").on("click", function(){
        $("#info").addClass("active");
        $(".sub-header").append(`<p>Table Number: ${tableTwo}</p>`);
    
        $("button").on("click", function(){
            $("#info").removeClass("active");
            $("#two").addClass("reserved");
            $(".sub-header").text("");
        });
});
$("#three").on("click", function(){
    $("#info").addClass("active");
    $(".sub-header").append(`<p>Table Number: ${tableThree}`);

    $("button").on("click", function(){
        $("#info").removeClass("active");
        $("#three").addClass("reserved");
        $(".sub-header").text("");
    });
});
$("#four").on("click", function(){
    $("#info").addClass("active");
    $(".sub-header").append(`<p>Table Number: ${tableFour}`);

    $("button").on("click", function(){
        $("#info").removeClass("active");
        $("#four").addClass("reserved");
        $(".sub-header").text("");
    });
});
$("#five").on("click", function(){
    $("#info").addClass("active");
    $(".sub-header").append(`<p>Table Number: ${tableFive}`);

    $("button").on("click", function(){
        $("#info").removeClass("active");
        $("#five").addClass("reserved");
        $(".sub-header").text("");
    });
});
$("#six").on("click", function(){
    $("#info").addClass("active");
    $(".sub-header").append(`<p>Table Number: ${tableSix}`);

    $("button").on("click", function(){
        $("#info").removeClass("active");
        $("#six").addClass("reserved");
        $(".sub-header").text("");
    });
});
$("#seven").on("click", function(){
    $("#info").addClass("active");
    $(".sub-header").append(`<p>Table Number: ${tableSeven}`);

    $("button").on("click", function(){
        $("#info").removeClass("active");
        $("#seven").addClass("reserved");
        $(".sub-header").text("");
    });
});
$("#eight").on("click", function(){
    $("#info").addClass("active");
    $(".sub-header").append(`<p>Table Number: ${tableEight}`);

    $("button").on("click", function(){
        $("#info").removeClass("active");
        $("#eight").addClass("reserved");
        $(".sub-header").text("");
    });
});
$("#nine").on("click", function(){
    $("#info").addClass("active");
    $(".sub-header").append(`<p>Table Number: ${tableNine}`);

    $("button").on("click", function(){
        $("#info").removeClass("active");
        $("#nine").addClass("reserved");
        $(".sub-header").text("");
    });
});
$(".exit").on("click", function(){
    $("#info").removeClass("active");
    $("#nine").removeClass("reserved");
    $(".sub-header").text("");
});
$(".table reserved").on("hover", function(){
    $("#taken").show();
    console.log("showing");
})
});