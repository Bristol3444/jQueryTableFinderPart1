"use strict";
$(document).ready(() => {
    $(document).on("click", ".available", function (e) {
        $("#info").show();
        let table = $(e.target);
        let tableNum = table.text();
        $(".sub-header").append(`
        <p> Table Number: ${tableNum}</p>
        `) // on table click, store the event target and the text of the event target element in two variables. add the target element text to the form

        $(document).on("click", ".button", function (e) {
            $("#info").hide();
            $(table).addClass("reserved").removeClass("available");
            $(".sub-header").empty();
            // when save is clicked, hide the form, change the table to reserved class and clear out the appended sub-header
            $(table)
                .attr("name", $(".name").val())
                .attr("phone", $(".phone").val())
                .attr("guests", $(".guests").val());
                // $("input").each(function () {
                //     $(this).val("");
                });
                // added three attributes to table, or the DOM element that has been clicked. Each attribute is the value of the input (each with it's own class)
                $(document).on("mouseenter", ".reserved", (event) => {
                    if ($(event.target).attr("name") && $(event.target).attr("phone") && $(event.target).attr("guests")) {
                        $(event.target).append(`
                        <section class="tooltip">
                        Name: ${$(event.target).attr("name")}
                        Phone: ${$(event.target).attr("phone")}
                        Guests: ${$(event.target).attr("guests")}
                        </section>
                        `); 
                        
                        // if the mouse enters a table with the class of reserved, and has all the inputted fields, append the section tooltip
                    }
                $(document).on("mouseleave", ".reserved", (event) => {
                    $(".tooltip").remove();
                }) // when the mouse exits, remove the class
            });
        console.log(table);
            $(document).on("click", ".exit", function () {
                $("#info").hide();
                $(".sub-header").empty();
            }); // exit function removes the form and sub-header without doing anything to the tables
        
        });
     });
 // closing ready function