// ==UserScript==
// @name          Chatra Improved: Dark
// @namespace     chatra_improved_dark
// @description	  a dark chatra skin
// @author        Blumlaut
// @homepage      https://github.com/Blumlaut/userstyles-tamperscripts
// @include       http://app.chatra.io/*
// @include       https://app.chatra.io/*
// @include       http://*.app.chatra.io/*
// @include       https://*.app.chatra.io/*
// @include       https://zap-hosting.com/*/administrator/index.php?module=customer*autoLogin=true
// @require            https://openuserjs.org/src/libs/sizzle/GM_config.js
// @grant              GM_getValue
// @grant              GM_setValue
// @grant          GM_addStyle
// @run-at        document-start
// @version 45
// @updateURL https://raw.githubusercontent.com/Blumlaut/userstyles-tamperscripts/main/chatra/chatra.user.js
// @downloadURL https://raw.githubusercontent.com/Blumlaut/userstyles-tamperscripts/main/chatra/chatra.user.js
// ==/UserScript==


var WarningIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAbsAAAG7AEedTg1AAAAB3RJTUUH5AsFEAUf7VZo1wAABIlJREFUWMPF102MXWUdx/HP85xz3+cOM6WAKAr1rUiLGk2k2kZkYUPAaEI0RAzS4grEF9Lu3ODCBb7GpQlGFiYkJmBMTHTpEim+LNSNEaGZmdoW2jKd6czc8/K4uLfT26ade1sk/lbn5Nzzf/2e//O//J8VrvaFRTshBLYNpFuOGcSKxZZwsibd5d9vXwAj5z0cxMFCum3RIJbS0cizUXgmcXafV//3AYycN/FdHIpCg+iYDasqtVQGftoQvlOzsXfKIKYKYOQcPo9fZrL+rJ5MdMqyFaWTCoW0Gnmk4vmOaJp2xKvowA04HOjP6GhrCIKAruh6uUAvcaghvKOQpjI6MYCx7A9gb1NTW1NCUKFC0pPpyST2VNKjLzjlRbe9tRaMOb8Tv4nijjl9TbnU6zi35yPeqNbkR/4oW12xjiUDlXQ0E76QpL/eommHf76lFjTxLezoaGnKCcHZx77s9Z99z4mnf+DNA1+TYqYluE4G76mlJ3OhtaS4thaMZb8fX8plutqg7nWt33OX1G5KzZa1T+xRd7tIZmVaosQDpXRfKXnJjmuuwHYcxmxPRyYiEQNZNvpJGo6lMOxmLpiTCcwkDuXCjYMtgLxsAGPZfxX7WiPwLla64u3MBSA/WUkH/2XNi1eowlYV2IWvRyHraY8+uOkUMCeXCTHx2Pt0PlyobbhzcgCj7Bv4Jt7b0dbUmNr5ebUvAHlrLX07F1p/cnbrAMZK/1k8OA7etWgMyC+W0r2F5MglrbhcC643BO+6C+Bdm8aA7I+AvGHjEnY2rY9l/zA+fXnwxhUuvr4CImNA7q2lR44rLgLy0vQ+ZCJ4QdgYiK+fJotSlsmW3xSKyw+cIZCZTIg1j9+ksbtQbz7PxrJv4Cns72pv2ftQlbKlE8rt2xSvvGb2F89oHH3VlcqQC2qsq+fRagq/f9Rc9XNnhLHS34vnctncvL5MZmvVymbulLPqwTmTZlopOaawoV6OfKXmt11x861thuDNdbWncJ6k/oxi106DO+5Q92eZcPyOATmbOJwL2zck+ej5Q7i7paGjNdF59e6bnXnqG1b3fMzJ07XGS0ds+/HT8oWjW1ZiRmZFbVW1r5YePqP6ScRuPBGFvKczxcQLVg48YO3+z0j9rrrTsXr3PZYffGhiGwLmh0BmNY/Pyz8aDY/anW2tqSZeajUNdn9gWPKElEjJ4IO3S+3JQ6stmh22+P219GTE56I49cQLg0L+2tLm6TecAUFjcUEYDKay0ZfJBYn7I7ZHYYzHSSWozDz7gubLfyMlQdL6x9/1f/UcdTmViVwY4si2sGjnQhTeNW9WY5PJiVGo3nmTcx/f5Y1qXf6XP8uPLZpmyQ5Yl86vbsdzPF9LT6xYi33dISJTmMmW/qO7tGDdskoyzXaXUEhOK1VSCvw6x49w+4bB/lIpl02dSSk5rlJKhtvx5AAGaoUk8IcofP/8JLwVh3Cf4Ro22r22ViGFRYMwMjiNapwK/C4KP6ykVwKbZ0GOm3Hj6HpiQqUUlgyycliQSQEHUhGEExkLifJTV/Ef8m3TfwFgEIPcJhzE4wAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0xMS0wNVQxNjowNTozMS0wNTowMNb86m0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMTEtMDVUMTY6MDU6MzEtMDU6MDCnoVLRAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="


// these both **need** to be lowercase
var awaitingAnswerPhrases = [
    "moment",
    "let me check",
    "augenblick",
    "warte kurz",
    "sekunde"
]

var ignoredPhrases = [
    "supporter aus amerika",
    "eingehende ddos angriffe"
]


var presets = {
    "None": {
        options : {}
    },
    "Default" : {
        options : {
            'general-bg-color' : '#454545',
            'aside-background-col' : '#3E3E3E',
            'sidebar-bg-color' : '#454545',
            'new-background-hover' : '#4F5E6B',
            'new-background-color': '#59582B',
            'parsed-bg-color': '#4F4F4F',
            'note-bg-color': '#5e5b2c',
            'general-txt-color': '#DCDCDC',
            'sidebar-text-color': '#DFDFDF',
            'open-txt-color': '#DFDFDF',
            'attended-color': '#3E3E3E',
            'attended-unread-color': '#404040',
            'attended-hover-color': '#5D6C7B',
            'new-active-color': '#27656D',
            'agent-txt-accent': '#3B99FC',
            'banned-color': '#FF3D54',
            'chat-input-color-off': '#737373',
            'chat-input-color-on': '#3B99FC',
            'parsed-brd-color': '#5F5F5F',
            'editing-colour': '#535353',
            'note-txt-color': '#f6ff4c',
            'navitem-border-radius': '0',
            'sidebar-chat-padding': '5',
            'navitem-padding': '0',
        }
    },
    "Florians Darkmode" : {
        options: {
          "general-bg-color": "#2f3136",
          "aside-background-col": "#373a40",
          "sidebar-bg-color": "#373a40",
          "new-background-hover": "#0089ff",
          "new-background-color": "#4f4a00",
          "parsed-bg-color": "#4F4F4F",
          "note-bg-color": "#7c7d31",
          "general-txt-color": "#d9d9d9",
          "sidebar-text-color": "#d9d9d9",
          "open-txt-color": "#DFDFDF",
          "attended-color": "#333333",
          "attended-unread-color": "#404040",
          "attended-hover-color": "#507fad",
          "new-active-color": "#3b7880",
          "agent-txt-accent": "#3B99FC",
          "banned-color": "#FF3D54",
          "chat-input-color-off": "#3e3f42",
          "chat-input-color-on": "#2a78c9",
          "parsed-brd-color": "#5F5F5F",
          "editing-colour": "#535353",
          "note-txt-color": "#f6ff4c",
          "navitem-border-radius": 0,
          "sidebar-chat-padding": 5
        }
    }
}


var presetNames = []

Object.keys(presets).forEach(key => {
  presetNames.push(key);
});



// util function to allow copying to clipboard
function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
        return window.clipboardData.setData("Text", text);

    }
    else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in Microsoft Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        }
        catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        }
        finally {
            document.body.removeChild(textarea);
        }
    }
}




GM_config.init({
    'id': 'Chatra_improved_dark', // The id used for this instance of GM_config
    'fields': // Fields object
    {
        'section-settings': {
            'section': "Settings",
            'type': 'hidden',
        },
        'enable-darkmode': {
            'label': 'Enable Colour Changes (refresh required)',
            'type': 'checkbox',
            'default': true
        },
        'enable-stylechanges': {
            'label': 'Enable Layout Changes (refresh required)',
            'type': 'checkbox',
            'default': true
        },
        'moment-warning': {
            'label': 'Enable "One Moment" Warning Icon ( can be removed by clicking it )',
            'type': 'checkbox',
            'default': true
        },
        'hide-location': {
            'label': 'Hide Locations',
            'type': 'select',
            'options': ['none', 'content'],
            'default': 'none'
        },
        'autoleave': {
            'label': 'Autoleave Chats after Specified Time (HIGHLY EXPERIMENTAL/UNSTABLE)',
            'type': 'checkbox',
            'default': false
        },
        'autoleave-time': {
            'label': 'Autoleave after Minutes: ',
            'type': 'int',
            'default': "11"
        },
        'autoleave-ignore-moment': {
            'label': 'Autoleave: Don\'t leave when "One Moment" Warning is set?',
            'type': 'checkbox',
            'default': true
        },
        'section-colors': {
            'section': "Colors",
            'type': 'hidden',
        },
        'theme-preset': {
            'label': 'Theme Preset (refresh after applying!)',
            'type': 'select',
            'options': presetNames,
            'default': 'None'
        },
        'general-bg-color': {
            'label': 'General Background Color',
            'type': 'text',
            'default': '#454545',
        },
        'aside-background-col': {
            'label': 'Right Sidebar: Background Color',
            'type': 'text',
            'default': '#3E3E3E'
        },
        'sidebar-bg-color': {
            'label': 'Sidebar: Background Color',
            'type': 'text',
            'default': '#454545'
        },
        'new-background-hover': {
            'label': 'Sidebar: New Chat Hover Color',
            'type': 'text',
            'default': '#4F5E6B'
        },
        'new-background-color': {
            'label': 'Sidebar: New Chat Background Color',
            'type': 'text',
            'default': '#59582B'
        },
        'parsed-bg-color': {
            'label': '`Parsed Text` Background Color',
            'type': 'text',
            'default': '#4F4F4F'
        },
        'note-bg-color': {
            'label': 'Note Background Colour',
            'type': 'text',
            'default': '#5e5b2c'
        },
        'general-txt-color': {
            'label': 'General Text Color',
            'type': 'text',
            'default': '#DCDCDC'
        },
        'sidebar-text-color': {
            'label': 'Sidebar: Text Color',
            'type': 'text',
            'default': '#DFDFDF'
        },
        'open-txt-color': {
            'label': 'Sidebar: Open Chat Text Color',
            'type': 'text',
            'default': '#DFDFDF'
        },
        'attended-color': {
            'label': 'Sidebar: Attended Chat Color',
            'type': 'text',
            'default': '#3E3E3E'
        },
         'attended-unread-color': {
            'label': 'Sidebar: Attended Unread Chat Color',
            'type': 'text',
            'default': '#404040'
        },
        'attended-hover-color': {
            'label': 'Sidebar: Attended Chat Hover Color',
            'type': 'text',
            'default': '#5D6C7B'
        },
        'new-active-color': {
            'label': 'Sidebar: Open Chat Color',
            'type': 'text',
            'default': '#27656D'
        },
        'agent-txt-accent': {
            'label': 'Sidebar: Agent Name Accent',
            'type': 'text',
            'default': '#3B99FC'
        },
        'banned-color': {
            'label': 'Banned Color',
            'type': 'text',
            'default': '#FF3D54'
        },
        'chat-input-color-off': {
            'label': 'Chat Input Color Inactive',
            'type': 'text',
            'default': '#737373'
        },
        'chat-input-color-on': {
            'label': 'Chat Input Color Active',
            'type': 'text',
            'default': '#3B99FC'
        },
        'parsed-brd-color': {
            'label': '`Parsed Text` Border Color',
            'type': 'text',
            'default': '#5F5F5F'
        },
        'editing-colour': {
            'label': 'Editing Colour',
            'type': 'text',
            'default': '#535353'
        },
        'note-txt-color': {
            'label': 'Note Input Text Colour',
            'type': 'text',
            'default': '#f6ff4c'
        },
        'navitem-border-radius': {
            'label': 'Chat Border Radius (pixels)',
            'type': 'int',
            'default': '0'
        },
        "sidebar-chat-padding": {
            'label': 'Sidebar Upper&Lower Chat Padding',
            'type': 'int',
            'default': '5'
        },
        "navitem-padding": {
            'label': 'Padding between Chats',
            'type': 'int',
            'default': '0'
        },
        "export-as-preset": {
            'label': 'Export Settings to Clipboard (save first!)',
            'type': 'button',
            'click': function() { // Function to call when button is clicked
                let name = prompt('Give your preset a name.');
                if (name) {
                    let preset = {[name] : {
                        options : {
                            'enable-darkmode': GM_config.get('enable-darkmode'),
                            'enable-stylechanges': GM_config.get('enable-stylechanges'),
                            'moment-warning': GM_config.get('moment-warning'),
                            'general-bg-color' : GM_config.get('general-bg-color'),
                            'aside-background-col' : GM_config.get('aside-background-col'),
                            'sidebar-bg-color' : GM_config.get('sidebar-bg-color'),
                            'new-background-hover' : GM_config.get('new-background-hover'),
                            'new-background-color': GM_config.get('new-background-color'),
                            'parsed-bg-color': GM_config.get('parsed-bg-color'),
                            'note-bg-color': GM_config.get('note-bg-color'),
                            'general-txt-color': GM_config.get('general-txt-color'),
                            'sidebar-text-color': GM_config.get('sidebar-text-color'),
                            'open-txt-color': GM_config.get('open-txt-color'),
                            'attended-color': GM_config.get('attended-color'),
                            'attended-unread-color': GM_config.get('attended-unread-color'),
                            'attended-hover-color': GM_config.get('attended-hover-color'),
                            'new-active-color': GM_config.get('new-active-color'),
                            'agent-txt-accent': GM_config.get('agent-txt-accent'),
                            'banned-color': GM_config.get('banned-color'),
                            'chat-input-color-off': GM_config.get('chat-input-color-off'),
                            'chat-input-color-on': GM_config.get('chat-input-color-on'),
                            'parsed-brd-color': GM_config.get('parsed-brd-color'),
                            'editing-colour': GM_config.get('editing-colour'),
                            'note-txt-color': GM_config.get('note-txt-color'),
                            'navitem-border-radius': GM_config.get('navitem-border-radius'),
                            'sidebar-chat-padding': GM_config.get('sidebar-chat-padding'),
                            'navitem-padding': GM_config.get('navitem-padding'),
                        }
                    }}
                    let copied = copyToClipboard(JSON.stringify(preset));
                    if (copied) {
                        alert("Preset copied to clipboard!")
                    } else {
                        alert(preset)
                    }
                }
            }
        },
        "import-as-preset": {
            'label': 'Import Settings',
            'type': 'button',
            'click': function() { // Function to call when button is clicked
                let preset = JSON.parse(prompt('Paste your preset here.'))
                if (preset) {
                    loadPreset(Object.entries(preset)[0][1]);
                }
            }
        }
    },
      'events': // Callback functions object
  {
    'save': function() {
        Object.keys(presets).forEach(key => {
            if (key == GM_config.get('theme-preset')) {
                loadPreset(presets[key])
            }
        });
        GM_config.set('theme-preset', "None")
        generateStyling();
    },

  }
});
var css = ""
var stylingchanges = ""

function loadPreset(preset) {
    Object.keys(preset.options).forEach(key => {
        GM_config.set(key, preset.options[key]);
    })
}

function applyStylingChanges() {
   if (window.location.href.includes("chatra")) {
        if (typeof GM_addStyle != "undefined") {
            if (GM_config.get('enable-darkmode')) {
                GM_addStyle(css);
            }
            if (GM_config.get('enable-stylechanges')) {
                GM_addStyle(stylingchanges);
            }
            console.log("added style via GM_addStyle")
        } else if (typeof PRO_addStyle != "undefined") {
            if (GM_config.get('enable-darkmode')) {
                PRO_addStyle(css);
            }
            if (GM_config.get('enable-stylechanges')) {
                PRO_addStyle(stylingchanges);
            }
            console.log("added style via PRO_addStyle")
        } else if (typeof addStyle != "undefined") {
            if (GM_config.get('enable-darkmode')) {
                addStyle(css);
            }
            if (GM_config.get('enable-stylechanges')) {
                addStyle(stylingchanges);
            }
            console.log("added style via addStyle")
        } else {
            let node = document.createElement("style");
            node.type = "text/css";
            if (GM_config.get('enable-darkmode')) {
                node.appendChild(document.createTextNode(css));
            }
            if (GM_config.get('enable-stylechanges')) {
                node.appendChild(document.createTextNode(stylingchanges));
            }
            var heads = document.getElementsByTagName("head");
            if (heads.length > 0) {
                heads[0].appendChild(node);
            } else {
                document.documentElement.appendChild(node);
            }
            console.log("added style via html hack")
        }
    }
}

function generateStyling() {
css = [
        ".nav-item__footer {",
        "      display: " + GM_config.get('hide-location') + ";",
        "      color:" + GM_config.get('sidebar-text-color') + ";",
        "  }",
        "",
        "  ",
        "  ",
        "  .chat-bubble__edited {",
        "      color:#9e9ea6",
        "  }",
        "",
        "  .chat-message-loader {",
        "      color:#9e9ea6;",
        "  }",
        "  .chat-message {",
        "      background-color:" + GM_config.get('general-bg-color') + ";",
        "  }",
        "  .chat-message--forward-to-source-failed, .chat-message.is-not-seen:not(.chat-message--forwarded-to-client) {",
        "      background-color:" + GM_config.get('general-bg-color') + ";",
        "  }",
        "  .chat-message.is-found:after {",
        "      content:\"\";",
        "      background-color:#90ef90;",
        "  }",
        "  .chat-message__userpic {",
        "      color:#fff;",
        "  }",
        "  .chat-message--email .chat-message__meta:after {",
        "      content:\"\";",
        "      background-color:#ddddde",
        "  }",
        "  .chat-message__time {",
        "      color:#9e9ea6",
        "  }",
        "  .chat-message__meta-component {",
        "      color:#9e9ea6",
        "  }",
        "  .chat-message__aside-status {",
        "      color:#9e9ea6",
        "  }",
        "  .chat-message__unready {",
        "      background-color:#fef2cf",
        "  }",
        "",
        ".flex__item.ellipsis {",
        "color: "+ GM_config.get('general-txt-color') + ";",
        "}",
        "  .chat-aside {",
        "   background-color:" + GM_config.get('aside-background-col') + ";",
        "  }",
        "  .meta__header {",
        "      color:#6e6e76",
        "  }",
        "",
        "",
        "  .chat-typing {",
        "   color:#9e9ea6",
        "  }",
        "",
        "",
        "",
        "  .nav-item.is-new .nav-item__inner {",
        "   background-color:" + GM_config.get('new-background-color') + ";",
        "  }",
        "  .nav-item.js-contact:after {",
        "   background-color:" + GM_config.get('aside-background-col') + ";",
        "   color:" + GM_config.get('aside-background-col') + ";",
        "  }",
        "  .nav-item.is-new .nav-item__inner:after {",
        "   background-image:-webkit-linear-gradient(left," + GM_config.get('new-background-color') + "," + GM_config.get('new-background-color') + ");",
        "   background-image:linear-gradient(90deg," + GM_config.get('new-background-color') + "," + GM_config.get('new-background-color') + ")",
        "  }",
        "",
        ".nav-item.is-banned .nav-item__inner:after {",
        " background-image:-webkit-linear-gradient(left," + GM_config.get('attended-color') + "," + GM_config.get('attended-color') + ");",
        " background-image:linear-gradient(90deg," + GM_config.get('attended-color') + "," + GM_config.get('attended-color') + ")",
        "}",
        ".nav-item.is-active.is-banned .nav-item__inner:after {",
        " background-image:-webkit-linear-gradient(left," + GM_config.get('attended-color') + "," + GM_config.get('attended-color') + ");",
        " background-image:linear-gradient(90deg," + GM_config.get('attended-color') + "," + GM_config.get('attended-color') + ")",
        "}",
        "",
        "  .nav-item.is-active,",
        "  html.hover .nav-item.is-active:hover {",
        "   border-color:" + GM_config.get('new-background-color') + ";",
        "   color:#fff",
        "  }",
        "  ",
        "  html.hover .nav-item.is-new:hover .nav-item__inner,",
        "  html.hover .nav-item.is-unread:hover .nav-item__inner,",
        "  html.hover.nav-item:hover {",
        "    border-bottom-color:" + GM_config.get('new-background-hover') + ";",
        "  }",
        "  ",
        "  html.hover .nav-item.is-new:hover .nav-item__inner,",
        "  html.hover .nav-item.is-unread:hover .nav-item__inner,",
        "  html.hover.nav-item:hover .nav-item__inner {",
        "    background-color:" + GM_config.get('new-background-hover') + ";",
        "  }",
        "  ",
        "  .nav-item.is-unread .nav-item__inner {",
        "    background-color:" + GM_config.get('new-background-color') + ";",
        "  }",
        "",
        ".nav-item.is-active .nav-item__inner,",
        "html.hover .nav-item.is-active:hover .nav-item__inner {",
        " background-color:" + GM_config.get('new-active-color') + ";",
        "}",
        "  ",
        "  .nav-item .nav-item__inner {",
        "    background-color:" + GM_config.get('attended-color') + ";",
        "  }",
        "",
        "",
        "",
        ".content-layout {",
        " background-color:" + GM_config.get('general-bg-color') + ";",
        "}",
        "",
        ".content-layout__main:before {",
        " background-image:-webkit-linear-gradient(" + GM_config.get('general-bg-color') + ",hsla(0,0%,100%,0));",
        " background-image:linear-gradient(" + GM_config.get('general-bg-color') + ",hsla(0,0%,100%,0))",
        "}",
        ".content-layout__main:after {",
        " background-image:-webkit-linear-gradient(hsla(0,0%,100%,0)," + GM_config.get('general-bg-color') + ");",
        " background-image:linear-gradient(hsla(0,0%,100%,0)," + GM_config.get('general-bg-color') + ")",
        "}",
        "",
        ".chat-message {",
        "    color:" + GM_config.get('general-txt-color') + ";",
        "}",
        "",
        ".chat-bubble__normal {",
        " color:" + GM_config.get('general-txt-color') + ";",
        "}",
        ".chat-date-block {",
        " color:" + GM_config.get('general-txt-color') + ";",
        " background-color:" + GM_config.get('general-bg-color') + ";",
        "}",
        ".navbar__title {",
        " color:" + GM_config.get('general-txt-color') + ";",
        " background-color:" + GM_config.get('general-bg-color') + ";",
        "}",
        ".navbar__right-mobile-button {",
        " color:" + GM_config.get('general-txt-color') + ";",
        " background-color:" + GM_config.get('general-bg-color') + ";",
        "}",
        ".navbar__left-mobile-button {",
        " color:" + GM_config.get('general-txt-color') + ";",
        " background-color:" + GM_config.get('general-bg-color') + ";",
        "}",
        "",
        ".content-layout__footer {",
        " color:" + GM_config.get('general-txt-color') + ";",
        " background-color:" + GM_config.get('general-bg-color') + ";",
        "}",
        "",
        ".content-layout__message {",
        " color:" + GM_config.get('general-txt-color') + ";",
        " background-color:" + GM_config.get('general-bg-color') + ";",
        "}",
        "",
        ".chat-input-away {",
        " color:" + GM_config.get('general-txt-color') + ";",
        " background-color:" + GM_config.get('general-bg-color') + ";",
        "}",
        "",
        ".chat-input-area__upload-button {",
        " color:" + GM_config.get('general-txt-color') + ";",
        " background-color:" + GM_config.get('general-bg-color') + ";",
        "}",
        "",
        ".chat-input-area__message {",
        " color:" + GM_config.get('general-txt-color') + ";",
        " background-color:" + GM_config.get('general-bg-color') + ";",
        "}",
        ".chat-input-area__button--emoji {",
        " color:" + GM_config.get('general-txt-color') + ";",
        " background-color:" + GM_config.get('general-bg-color') + ";",
        "}",
        "",
        ".nav-item__content  {",
        "    color:" + GM_config.get('sidebar-text-color') + ";",
        "}",
        "",
        ".nav-item__last-message {",
        "    color:" + GM_config.get('sidebar-text-color') + ";",
        "}",
        ".nav-item__last-message-text {",
        "    color:" + GM_config.get('sidebar-text-color') + ";",
        "}",
        "",
        " .nav-item {",
        "    background-color:" + GM_config.get('new-background-color') + ";",
        "}",
        ".nav-item .nav-item__inner:after {",
        " background-image:-webkit-linear-gradient(left," + GM_config.get('attended-color') + "," + GM_config.get('attended-color') + ");",
        " background-image:linear-gradient(90deg," + GM_config.get('attended-color') + "," + GM_config.get('attended-color') + ")",
        "}",
        "",
        "html.hover .nav-item.is-new:hover,",
        "html.hover .nav-item.is-unread:hover,",
        "html.hover .nav-item:hover {",
        " border-bottom-color:" + GM_config.get('attended-hover-color') + ";",
        "}",
        "",
        "html.hover .nav-item.is-new:hover .nav-item__inner,",
        "html.hover .nav-item.is-unread:hover .nav-item__inner,",
        "html.hover .nav-item:hover .nav-item__inner {",
        " background-color:" + GM_config.get('attended-hover-color') + ";",
        "}",
        "  ",
        "  .form-input {",
        " color:" + GM_config.get('general-txt-color') + ";",
        " background-color:" + GM_config.get('general-bg-color') + ";",
        "}",
        "",
        ".meta__header {",
        " color:" + GM_config.get('general-txt-color') + ";",
        "}",
        ".meta {",
        " color:" + GM_config.get('general-txt-color') + ";",
        "}",
        "",
        ".path__item {",
        " border-bottom:1px solid " + GM_config.get('aside-background-col') + ";",
        "}",
        ".path__item:first-child {",
        " background-color:" + GM_config.get('aside-background-col') + ";",
        "}",
        ".path__item:nth-child(2) {",
        " background-color:" + GM_config.get('aside-background-col') + ";",
        "}",
        ".path__item:nth-child(3) {",
        " background-color:" + GM_config.get('aside-background-col') + ";",
        "}",
        ".path__item:nth-child(4) {",
        " background-color:" + GM_config.get('aside-background-col') + ";",
        "}",
        ".path__link {",
        " color:" + GM_config.get('general-txt-color') + ";",
        "}",
        ".userpic__status {",
        "      color:inherit;",
        "}",
        "  ",
        ".agents-stack__agent {",
        " color:" + GM_config.get('general-bg-color') + ";",
        "}",
        "",
        ".nav {",
        "    background-color:" + GM_config.get('sidebar-bg-color') + ";",
        "}",
        "",
        ".nav__nothing {",
        "    color:" + GM_config.get('general-txt-color') + ";",
        "}",
        "",
        ".nav-item.is-active:not(.is-banned) .nav-item__title {",
        "    color:" + GM_config.get('open-txt-color') + ";",
        "}",
        "",
        ".nav-item.is-active:not(.is-banned) .nav-item__last-message-text {",
        "    color:" + GM_config.get('open-txt-color') + ";",
        "}",
        "",
        ".nav-item.is-active .nav-item__accent,",
        ".nav-item.is-active .nav-item__group-sharp,",
        ".nav-item.is-active .nav-item__info,",
        ".nav-item.is-active .nav-item__last-message,",
        ".nav-item.is-active .nav-item__last-message-time {",
        " color:" + GM_config.get('open-txt-color') + "!important",
        "}",
        "",
        ".nav-item__accent {",
        " color:" + GM_config.get('agent-txt-accent') + "",
        "}",
        "  ",
        "    .nav-item.is-banned .nav-item__inner {",
        "    background-color:" + GM_config.get('attended-color') + "",
        "  }",
        "",
        ".nav-item.is-banned .nav-item__last-message-time {",
        " color:" + GM_config.get('banned-color') + "",
        "}",
        "",
        ".navbar--banned:not(.navbar--disconnected) .navbar__title-text {",
        " color:" + GM_config.get('banned-color') + "",
        "}",
        "",
        ".chat-bubble.is-settings-hovered,",
        ".chat-bubble.is-settings-shown {",
        " background-color:" + GM_config.get('general-bg-color') + ";",
        "}",
        "",
        ".search {",
        " background-color:" + GM_config.get('general-bg-color') + ";",
        "}",
        "",
        ".chat-textarea {",
        "    color:" + GM_config.get('general-txt-color') + ";",
        "}",
        "  ",
        "  .parsed-text code,",
        ".parsed-text pre {",
        " background-color:" + GM_config.get('parsed-bg-color') + ";",
        " border:1px solid " + GM_config.get('parsed-brd-color') + ";",
        " color:" + GM_config.get('general-txt-color') + ";",
        "}",
        "  ",
        "  .chat-input-area__wrapper {",
        "    border-top:1px solid " + GM_config.get('chat-input-color-off') + ";",
        "    border:1px solid " + GM_config.get('chat-input-color-off') + ";",
        "    background-color:" + GM_config.get('general-bg-color') + " !important;",
        "    scrollbar-color: " + GM_config.get('parsed-bg-color') + " " + GM_config.get('parsed-brd-color') + ";",
        "}",
        "  ",
        "  @media screen and (min-width:768px) {",
        " .chat-input-area.is-focused:not(.is-inactive):not(.is-disconnected) .chat-input-area__wrapper {",
        "  box-shadow:inset 0 .08em .08em rgba(0,0,0,.08);",
        "  border-color:" + GM_config.get('chat-input-color-on') + ";",
        " }",
        "}",
        "",
        ".js-start-chatting {",
        "    color:" + GM_config.get('general-txt-color') + ";",
        "}",
        "",
        ".chat-bubble.is-editing {",
        " background-color:" + GM_config.get('editing-colour') + ";",
        "}",
        "",
        "  .nav-item.is-unread:not(.is-new):not(.is-active) .nav-item__inner {",
        "    background-color:" + GM_config.get('attended-unread-color') + ";",
        "  }",
        "",
        "",
        ".nav-item__swipeaction-inner {",
        "  color:" + GM_config.get('new-active-color') + ";",
        "}",
        "",
        "",
        ".nav-item.is-new, .nav-item.is-active .nav-item__inner:after {",
        " background-image:-webkit-linear-gradient(left," + GM_config.get('new-active-color') + "," + GM_config.get('new-active-color') + ");",
        " background-image:linear-gradient(90deg," + GM_config.get('new-active-color') + "," + GM_config.get('new-active-color') + ")",
        "}",
        "",
        ".command-picker__inner {",
        " background:" + GM_config.get('general-bg-color') + ";",
        " border:solid " + GM_config.get('general-bg-color') + ";",
        " color:#fff;",
        "}",
        ".command-picker__header {",
        " background:" + GM_config.get('general-bg-color') + ";",
        " border:solid " + GM_config.get('general-bg-color') + ";",
        " color:" + GM_config.get('general-txt-color') + ";",
        "}",
        "",
        ".icon-link__text {",
        " color:" + GM_config.get('general-txt-color') + ";",
        "}",
        "",
        "",
        ".nothing-pic {",
        "    filter: brightness(0) invert(0.8);",
        "}",
        "",
        ".attachment-image__inner {",
        "	background-color:" + GM_config.get('general-bg-color') + ";",
        "}",
        "  ",
        ".chat-bubble__file {",
        "    background-color:" + GM_config.get('general-bg-color') + ";",
        "}",
        ".attachment__name, .attachment__size {",
        "	color:" + GM_config.get('general-txt-color') + ";",
        "}",
        "  ",
        "  .emojipicker__category-title {",
        "    background-color:" + GM_config.get('general-bg-color') + ";",
        "    color:" + GM_config.get('general-txt-color') + ";",
        "    ",
        "}",
        "",
        ".emojipicker__inner,",
        ".emojipicker__category-list,",
        ".emojipicker__category,",
        ".emojipicker__scroller {",
        "    background-color:" + GM_config.get('general-bg-color') + ";",
        "}",
        "  ",
        " .chat-message__smart {",
        " background-color:" + GM_config.get('editing-colour') + ";",
        "}",
        "",
        ".hero-report__result, .conversation__title {",
        "	color:" + GM_config.get('general-txt-color') + ";",
        "}",
        "",
        ".hero-report__legend {",
        "    color:" + GM_config.get('general-txt-color') + ";",
        "}",
        "",
        ".table2__cell {",
        "    color:" + GM_config.get('general-txt-color') + ";",
        "}",
        "",
        ".table2__cell.color--green.nowrap {",
        "	color:#54cd69;",
        "}",
        "",
        ".table2__cell.color--error.nowrap {",
        "	color:#fb4a46;",
        "}",
        "  ",
        " .agent-row__name-inner {",
        "    color:" + GM_config.get('general-txt-color') + ";",
        "}",
        ".agent-header__name {",
        "    color:" + GM_config.get('general-txt-color') + ";",
        "}",
        "",
        ".conversation {",
        "    background-color:" + GM_config.get('general-bg-color') + ";",
        "}",
        "",
        ".header {",
        "    color:" + GM_config.get('general-txt-color') + ";",
        "}",
        "",
        "p {",
        "    color:" + GM_config.get('general-txt-color') + ";",
        "}",
        "",
        ".checkbox__text {",
        "    color:" + GM_config.get('general-txt-color') + ";",
        "}",
        ".form-item__label {",
        "    color:" + GM_config.get('general-txt-color') + ";",
        "}",
        ".awaitingAnswer {",
        "   display:block;",
        "}",
        ".chat-textarea.is-note {",
        "  color: "+ GM_config.get('note-txt-color') +";",
        "}",
        ".chat-message.chat-message--note.is-operator {",
        "  background-color: "+ GM_config.get('note-bg-color') +";",
        "}",
        ".nav-wrapper__header {",
        "color: "+ GM_config.get('general-txt-color') + ";",
        " background-color: "+ GM_config.get('general-bg-color') + ";",
        "}",
        ".button-block__tab {",
        "color: "+ GM_config.get('general-txt-color') + ";",
        "}",
        ".tab-button.is-active {",
        "color: "+ GM_config.get('general-txt-color') + " !important;",
        "font-weight: normal!important;",
        "}",
        ".button__count.count.count--nav.test-unread-count {",
        "color: "+ GM_config.get('general-txt-color') + " !important;",
        "}",
        ".nav__title {",
        "color: "+ GM_config.get('general-txt-color') + " !important;",
        "}",
        ".nav__item-text {",
        "color: "+ GM_config.get('general-txt-color') + " !important;",
        "}",
        ".nav-item:before {",
        "content: none!important;",
        "}",
        ".toolbar-button {",
        "color: "+ GM_config.get('general-txt-color') +";",
        "}",
        ".toolbar-button--red {",
        "color: "+ GM_config.get('banned-color')  +";",
        "}",
    ].join("\n");
stylingchanges = [
        ".path__item {",
        " padding:.2em .5em;",
        " max-width:100%;",
        " text-overflow:ellipsis;",
        " white-space:nowrap;",
        " word-wrap:normal;",
        " overflow:hidden",
        "}",
        ".nav-item__inner {",
        "    border-bottom:0px;",
        "    border-radius:"+ GM_config.get('navitem-border-radius') +"px;",
        "    margin: 0 0px 0px !important;",
        "    display:-webkit-box;",
        "    display:-ms-flexbox;",
        "    display:flex;",
        "    padding:"+ GM_config.get('sidebar-chat-padding') +"px 1rem;",
        "    -ms-touch-action:pan-y;",
        "    touch-action:pan-y",
        "}",
        " .nav-item {",
        "    border-bottom:0px;",
        "    border-radius:"+ GM_config.get('navitem-border-radius') +"px;",
        "    margin: 0 0px "+GM_config.get('navitem-padding')+"px !important;",
        "}",
        "  .nav-item__last-message {",
        "      font-size:13px;",
        "  }",
        "  .chat-message__meta-notice {",
        "      margin-top:.3em;",
        "      margin-bottom:.3em",
        "  }",
        "  .chat-message__unready {",
        "      font-size:.8em;",
        "      white-space:nowrap;",
        "      padding:.1em .5em;",
        "  }",
        "  .chat-message.is-group .chat-message__aside-status {",
        "      display:block",
        "  }",
        "  .chat-message.is-file .chat-message__aside-status {",
        "      top:.5em",
        "  }",
        "  .chat-message.is-group .chat-message__meta {",
        "      display:none",
        "  }",
        "  .chat-message__username {",
        "      font-weight:600;",
        "      margin-right:.33em",
        "  }",
        "  .chat-message.is-group .chat-message__meta {",
        "      display:none",
        "  }",
        "  .chat-message--email .chat-message__meta:after {",
        "      content:\"\";",
        "      position:absolute;",
        "      bottom:0;",
        "      left:0;",
        "      right:.5rem;",
        "      height:1px;",
        "  }",
        "  .chat-message.is-group .chat-message__userpic {",
        "      visibility:hidden;",
        "      height:0;",
        "      padding:0",
        "  }",
        "  .chat-message__anonym {",
        "      display:none",
        "  }",
        "  .chat-message--first .chat-message__anonym {",
        "      display:inline",
        "  }",
        "  .chat-message__meta {",
        "      position:relative",
        "  }",
        "  .chat-message--email .chat-message__meta {",
        "      padding-bottom:.5rem;",
        "      margin-bottom:.5rem",
        "  }",
        "  .chat-message.is-unready {",
        "      opacity:.4",
        "  }",
        "  .chat-message.is-group {",
        "      padding-top:.1rem;",
        "      margin-top:-.7rem",
        "  }",
        "  .chat-message.is-unready {",
        "      opacity:.4",
        "  }",
        "  .chat-message.is-group {",
        "      padding-top:.1rem;",
        "      margin-top:-.7rem",
        "  }",
        "  .chat-message-loader {",
        "      position:relative;",
        "      min-height:64px;",
        "      text-align:center;",
        "      font-weight:300;",
        "      line-height:64px;",
        "      max-width:100%;",
        "      text-overflow:ellipsis;",
        "      white-space:nowrap;",
        "      word-wrap:normal;",
        "      overflow:hidden",
        "  }",
        "  .chat-bubble__edited {",
        "      font-size:.8em;",
        "  }",
        "  .chat-bubble__settings {",
        "      opacity:0;",
        "      width:2em;",
        "      height:1.5em;",
        "      padding:.1em 0!important",
        "  }",
        "  .chat-bubble__typing-icon {",
        "      font-size:.8em;",
        "      margin-left:.2em",
        "  }",
        ".nav-item__footer-opacity {",
        "    opacity:1",
        "}",
        "  .chat-bubble__message {",
        "      -webkit-box-flex:1;",
        "      -ms-flex:1;",
        "      flex:1;",
        "      padding:.0em;",
        "      margin:0 -.1em;",
        "      overflow:hidden",
        "  }",
        "  .chat-message-area-wrapper {",
        "      -webkit-transition:opacity .3s linear;",
        "      transition:opacity .3s linear;",
        "      opacity:1",
        "  }",
        "  .chat-message-area-wrapper .is-hiding {",
        "      opacity:0",
        "  }",
        "  .chat-message-area {",
        "      display:-webkit-box;",
        "      display:-ms-flexbox;",
        "      display:flex;",
        "      -webkit-box-orient:vertical;",
        "      -webkit-box-direction:normal;",
        "      -ms-flex-direction:column;",
        "      flex-direction:column;",
        "      padding:.5rem;",
        "      min-height:1px;",
        "      position:relative;",
        "      overflow:hidden",
        "  }",
        "  .chat-message-area__inner {",
        "      -webkit-transform:translate(0);",
        "      transform:translate(0);",
        "      -webkit-transition:-webkit-transform .2s ease-out;",
        "      transition:-webkit-transform .2s ease-out;",
        "      transition:transform .2s ease-out;",
        "      transition:transform .2s ease-out, -webkit-transform .2s ease-out;",
        "      position:relative",
        "  }",
        "  .chat-message-area__unready {",
        "      opacity:.6",
        "  }",
        "  .chat-message {",
        "      position:relative;",
        "      display:-webkit-box;",
        "      display:-ms-flexbox;",
        "      display:flex;",
        "      -webkit-box-align:start;",
        "      -ms-flex-align:start;",
        "      align-items:flex-start;",
        "      width:100%;",
        "      padding:.0rem;",
        "      padding-left:.5rem;",
        "      padding-bottom:.6rem;",
        "      margin-left:-.5rem;",
        "      font-size:.9em;",
        "      -webkit-user-select:text;",
        "      -moz-user-select:text;",
        "      -ms-user-select:text;",
        "      user-select:text;",
        "      box-sizing:content-box;",
        "  }",
        "  .chat-message.is-found:after {",
        "      content:\"\";",
        "      position:absolute;",
        "      top:0;",
        "      left:0;",
        "      width:100%;",
        "      height:100%;",
        "      pointer-events:none;",
        "      opacity:0;",
        "      -webkit-animation:is-found-fade-out 2s ease-in;",
        "      animation:is-found-fade-out 2s ease-in",
        "  }",
        "  .chat-message__userpic {",
        "      -ms-flex-negative:0;",
        "      flex-shrink:0;",
        "      display:-webkit-box;",
        "      display:-ms-flexbox;",
        "      display:flex;",
        "      top:1rem;",
        "      margin:0;",
        "      padding-top:1px;",
        "      padding-bottom:.25rem;",
        "      cursor:default;",
        "      -webkit-user-select:none;",
        "      -moz-user-select:none;",
        "      -ms-user-select:none;",
        "      user-select:none;",
        "      width:2.125rem;",
        "      text-align:center",
        "  }",
        "  .chat-message__time {",
        "      display:block;",
        "      float:right;",
        "      font-size:.9em;",
        "  }",
        "  .chat-message__meta-component {",
        "      font-size:.9em;",
        "      margin-right:.2rem;",
        "  }",
        "  .chat-message__aside-status {",
        "      display:none;",
        "      position:absolute;",
        "      left:-1em;",
        "      top:.15em;",
        "      font-size:.9em;",
        "  }",
        "  .nav-item.is-unread:not(.is-banned) .nav-item__title {",
        "   font-weight:600",
        "  }",
        "  .nav-item__last-message-time {",
        "      -ms-flex-negative:0;",
        "      flex-shrink:0;",
        "      margin-left:.5em;",
        "      font-size:11px;",
        "      line-height:22px;",
        "      position:relative;",
        "      opacity:.6",
        "  }",
        "  .chat-aside {",
        "      height:100%;",
        "      position:relative;",
        "      box-sizing:border-box;",
        "      overflow:auto;",
        "      -webkit-overflow-scrolling:touch;",
        "      font-size:15px;",
        "      line-height:20px;",
        "  }",
        "  .chat-aside__section+.chat-aside__section {",
        "      border-top:1px solid rgba(45, 44, 48, .15);",
        "      margin-bottom:1.2rem;",
        "      padding-top:.4rem",
        "  }",
        "  .chat-aside__inner {",
        "      position:relative;",
        "      z-index:2;",
        "      padding:0rem 1.5rem 1.5rem;",
        "      margin:4px 0 0;",
        "      min-height:calc(100% - 4px);",
        "      box-sizing:border-box",
        "  }",
        "  .meta--indented {",
        "      padding-top:0em",
        "  }",
        "  .meta__header {",
        "      display:block;",
        "      text-transform:uppercase;",
        "      font-size:13px;",
        "      letter-spacing:.1em;",
        "      margin-right:0.1em;",
        "      margin-bottom:0em;",
        "  }",
        "  .chat-date-block {",
        "   text-align:center;",
        "   padding-top:0.0;",
        "   padding-bottom:0.0;",
        "   font-weight:600;",
        "   overflow:hidden",
        "  }",
        "  .chat-typing {",
        "   font-size:.8em;",
        "   height:1.5em;",
        "   line-height:1.3em;",
        "   position:relative;",
        "  }",
        "  @media screen and (min-width:768px) {",
        "   .chat-input-area {",
        "    margin:0 .5rem;",
        "    padding-bottom:1.3rem;",
        "    padding-top:0rem;",
        "    background:none!important",
        "   }",
        "  }",
        ".content-layout__main:before {",
        " top:0;",
        "}",
        ".content-layout__main:after {",
        " bottom:0;",
        "}",
        ".chat-bubble__normal {",
        " font-style:normal;",
        " font-weight:400",
        "}",
        ".chat-date-block {",
        " text-align:center;",
        " padding:1rem 0;",
        " font-weight:600;",
        " overflow:hidden;",
        "}",
        "  .parsed-text code,",
        ".parsed-text pre {",
        " font-size:85%;",
        " border-radius:.3em;",
        " font-family:Menlo,Monaco,Consolas,Courier New,monospace",
        "}",
        ".nav-item__swipeaction-title {",
        " display: none;",
        "}",

    ].join("\n")
applyStylingChanges()
}

(function() {
    generateStyling()
    setTimeout(function() {
        if (window.location.href.includes("chatra")) {
            var superNavItems = document.querySelectorAll('.super-nav-section');
            var ChatInputTip = superNavItems[superNavItems.length - 2];

            let btn = document.createElement("BUTTON");
            btn.classList.add("super-nav__item")
            let text = document.createTextNode("Theme Settings");
            btn.appendChild(text);
            ChatInputTip.appendChild(btn);
            btn.addEventListener("click", function() {
                GM_config.open();
            })
        }
    }, 3000);

    function LoopedThread() {
        setTimeout(function() {
            if (window.location.href.includes("chatra")) {
                var allChats = document.querySelectorAll(".nav-item.js-contact")
                if (GM_config.get('moment-warning') == true) {
                    allChatsLoop: for (var i = 0; i < allChats.length; ++i) {

                        ignoredPhrasesLoop: for (var i_a = 0; i_a < ignoredPhrases.length; ++i_a) {
                            if (allChats[i].innerHTML.toLowerCase().indexOf(ignoredPhrases[i_a]) !== -1) {
                                continue allChatsLoop;
                            }
                        }

                        awaitingAnswerPhrasesLoop: for (var i_1 = 0; i_1 < awaitingAnswerPhrases.length; ++i_1) {
                            if ((allChats[i].innerHTML.toLowerCase().indexOf(awaitingAnswerPhrases[i_1]) !== -1) && (allChats[i].innerHTML.toLowerCase().indexOf("you:") !== -1) ) {
                                var titleText = allChats[i].querySelector('.nav-item__title');
                                if (allChats[i].innerHTML.indexOf("awaitingAnswer") == -1) {
                                    titleText.appendChild(document.createTextNode("\xa0"));
                                    let elem = document.createElement("img");
                                    elem.classList.add("awaitingAnswer");
                                    elem.setAttribute("src", WarningIcon); // Icon made by Freepik from www.flaticon.com
                                    elem.setAttribute("height", "13");
                                    elem.setAttribute("width", "13");
                                    elem.removeAttribute("href")
                                    titleText.appendChild(elem);
                                    $(elem).click(function() {
                                        this.style.display = "none";
                                    })
                                } else {
                                    let elem = allChats[i].querySelector(".awaitingAnswer")
                                    elem.style = "";
                                }


                            }
                        }
                    }
                }

                var latestChat = allChats[allChats.length - 1]; // get latest chat
                var headerText = document.querySelector('.superbutton__title-text')
                if (latestChat) {
                    awaitingAnswerElement = latestChat.querySelector(".awaitingAnswer")
                }

                if((latestChat && headerText && headerText.innerText == " My") && (GM_config.get('autoleave') == true)) { // make sure we are in "My" tab
                    if ((latestChat.querySelector(".nav-item__accent") && latestChat.querySelector(".nav-item__accent").innerText == "you:") && (latestChat.querySelector(".nav-item__last-message-time").innerText == GM_config.get('autoleave-time')+" minutes")) { // check if latest chat exists, get last message time and compare with settings
                        if (GM_config.get('autoleave-ignore-moment') == false ) {
                            latestChat.querySelector(".nav-item__close-button-inner").click()
                        } else if ( ( GM_config.get('autoleave-ignore-moment') == true) && ((awaitingAnswerElement == undefined) || awaitingAnswerElement.style.display == "none")) {
                            latestChat.querySelector(".nav-item__close-button-inner").click()
                        }
                    }
                }

                var Knr = contains("h1", "Kundennummer")
                if(Knr) {
                    for (var i = 0; i < Knr.length; ++i) {
                        if (Knr[i].parentElement.innerHTML.indexOf("loginAsButton") == -1) {
                            let parent = Knr[i].parentElement;
                            let nextSibling = Knr[i].nextSibling.nextSibling
                            let customerURL = nextSibling.innerText.substring(nextSibling.innerText.indexOf("(")+1,nextSibling.innerText.lastIndexOf(")"))
                            if (customerURL != "") {
                                let elem = document.createElement("btn");
                                elem.classList.add("button");
                                elem.classList.add("button--chtr-o")
                                elem.classList.add("loginAsButton")
                                let elemInner = document.createElement("span")
                                elemInner.classList.add("button__inner")
                                elemInner.innerText = "Login as Customer"
                                elem.appendChild(elemInner)
                                // elem.removeAttribute("href")
                                parent.appendChild(elem);

                                $(elem).click(function() {
                                    window.open(customerURL+"&show=profile&autoLogin=true")
                                })
                            }

                        }
                    }
                }
            }

            LoopedThread();
        }, 1000);
    }
    LoopedThread()

    // if possible, be faster.
    if (window.location.href.includes("zap-hosting.com")&&window.location.href.includes("&autoLogin=true")) {
        function findLoginHref() {
            var a = document.querySelector("a[href^='../customer/index.php?userLogin=']")
            if (a) {
                window.location.replace(a.href)
            } else {
                setTimeout(findLoginHref, 10)
            }
        }
        findLoginHref()
    }

    function contains(selector, text) {
        var elements = document.querySelectorAll(selector);
        return Array.prototype.filter.call(elements, function(element){
            return RegExp(text).test(element.textContent);
        });
    }

})();
