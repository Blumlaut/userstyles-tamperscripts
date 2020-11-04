// ==UserScript==
// @name         schichtplaner
// @namespace    schichtplaner_online
// @version      03112020
// @description  adds "enter all/homeoffice/support" button for schichtplaner website
// @author       Blumlaut
// @match https://schichtplaner-online.de/dashboard/schedule/*
// @updateURL     https://raw.githubusercontent.com/Blumlaut/userstyles-tamperscripts/main/schichtplaner-online/schichtplaner.user.js
// @require     https://code.jquery.com/jquery-3.5.1.min.js
// @version       1
// @updateURL     https://raw.githubusercontent.com/Blumlaut/userstyles-tamperscripts/main/schichtplaner-online/schichtplaner.user.js
// @downloadURL   https://raw.githubusercontent.com/Blumlaut/userstyles-tamperscripts/main/schichtplaner-online/schichtplaner.user.js
// ==/UserScript==

(function() {
    'use strict';

    var ButtonTypes = [
        [
            "HomeOffice",
            "btn-warning"
        ],
        [
            "Support",
            "btn-success"
        ],
        [
            "All",
            "btn-primary"
        ]
    ]

    function Enter(type) {
        var filter = "Support"
        if (type == "All") {
            filter = ""
        } else {
            filter = type
        }
        // classic view
        var allDays = document.querySelectorAll("[class^=dayNum]")
        for (var i = 0; i < allDays.length; ++i) {
            if(allDays[i].innerHTML.indexOf(filter) !== -1) {
                var checkIn = allDays[i].querySelector('.fa.fa-check.fa-lg')
                if (checkIn != null) {
                    checkIn.click();
                }
            }
        };

        // flexible mode
        var allDays = document.querySelectorAll(".dayShiftItemHead")
        for (var i = 0; i < allDays.length; ++i) {
            if(allDays[i].innerHTML.indexOf(filter) !== -1) {
                var checkIn = allDays[i].querySelector('.fTooltip');
                if (checkIn != null && allDays[i].innerHTML.indexOf("nicht eingetragen") !== -1) {
                    checkIn.click();
                }
            }
        }
        console.log("hehe OwO")
    }


    // generate button
    var mydiv = document.querySelector('.pull-right');

    for (var i = 0; i < ButtonTypes.length; ++i) {
        var btn = document.createElement("BUTTON" );
        var button = ButtonTypes[i]
        btn.classList.add("btn")
        btn.classList.add(button[1])
        var text = document.createTextNode("Enter "+button[0]);
        btn.appendChild(text);
        mydiv.appendChild(btn);
        mydiv.appendChild(document.createTextNode("\xa0"));


        (function(index){
            btn.addEventListener("click", function() {
                var thisbutton = ButtonTypes[index]
                Enter(thisbutton[0])
            })
        })(i)
    }



})();
