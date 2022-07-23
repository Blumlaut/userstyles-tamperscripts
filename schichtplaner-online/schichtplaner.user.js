// ==UserScript==
// @name         schichtplaner
// @namespace    schichtplaner_online
// @description  adds "enter all/homeoffice/support" button for schichtplaner website
// @author       Blumlaut
// @match https://schichtplaner-online.de/*schedule/*
// @updateURL     https://raw.githubusercontent.com/Blumlaut/userstyles-tamperscripts/main/schichtplaner-online/schichtplaner.user.js
// @require     https://code.jquery.com/jquery-3.5.1.min.js
// @version       5
// @updateURL     https://raw.githubusercontent.com/Blumlaut/userstyles-tamperscripts/main/schichtplaner-online/schichtplaner.user.js
// @downloadURL   https://raw.githubusercontent.com/Blumlaut/userstyles-tamperscripts/main/schichtplaner-online/schichtplaner.user.js
// ==/UserScript==

(function() {
    'use strict';

    var blacklistedTimes = ['18:30 - 23:00']

    var ButtonTypes = [
        [
            "HOMEOFFICE",
            "btn-warning"
        ],
        [
            "SUPPORT",
            "btn-success"
        ],
        [
            "All",
            "btn-primary"
        ]
    ]

    function getShiftString(day) {
        var fromToTime = day.querySelector('.shiftFromToTime')
        var children = undefined
        if (fromToTime) {
            children = fromToTime.children
            return children[0].innerText + " - " + children[1].innerText
        } else {
            return day.querySelector('.pull-right').nextElementSibling.innerText
        }
    }

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
        allDays = document.querySelectorAll(".dayShiftItem")
        for (var i = 0; i < allDays.length; ++i) {
            if(allDays[i].innerHTML.indexOf(filter) !== -1) {
                var checkIn = allDays[i].querySelector('.action_container');
                if (checkIn != null && allDays[i].innerHTML.indexOf("EINTRAGEN") !== -1 && !blacklistedTimes.includes(getShiftString(allDays[i])) ) {
                    checkIn.click();
                }
            }
        }

        // month mode
        if (filter == "SUPPORT") {
            filter = "Support"
        } else if (filter == "HOMEOFFICE") {
            filter = "HomeOffice"
        }
        allDays = document.querySelectorAll(".shiftItem")
        for (var i = 0; i < allDays.length; ++i) {
            if(allDays[i].innerHTML.indexOf(filter) !== -1) {
                var checkIn = allDays[i].querySelector('.btn');
                if (checkIn != null && allDays[i].innerHTML.indexOf("Mich hier eintragen") !== -1 && !blacklistedTimes.includes(getShiftString(allDays[i])) ) {
                    checkIn.click();
                }
            }
        }
        console.log("hehe OwO")
    }


    // generate button
    var mydiv = document.querySelector('.live_head_item');
    if (!mydiv) {
        mydiv = document.querySelector('.clearfix');
    } else {
        mydiv = mydiv.parentNode
    }

    var newline = document.createElement("br");

    mydiv.appendChild(newline)

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
