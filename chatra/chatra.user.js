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
// @run-at        document-start
// @version 26
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
    "supporter aus amerika"

]

GM_config.init({
    'id': 'Chatra_improved_dark', // The id used for this instance of GM_config
    'fields': // Fields object
    {
        'section-settings': {
            'section': "Settings",
            'type': 'hidden',
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
        'general-bg-color': {
            'label': 'General Background Color',
            'type': 'text',
            'default': '#454545',
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
        'aside-background-col': {
            'label': 'Right Sidebar: Background Color',
            'type': 'text',
            'default': '#3E3E3E'
        },
        'new-background-color': {
            'label': 'Sidebar: New Chat Background Color',
            'type': 'text',
            'default': '#59582B'
        },
        'attended-color': {
            'label': 'Sidebar: Attended Chat Color',
            'type': 'text',
            'default': '#3E3E3E'
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
        'parsed-bg-color': {
            'label': '`Parsed Text` Background Color',
            'type': 'text',
            'default': '#4F4F4F'
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
        'note-bg-color': {
            'label': 'Note Background Colour',
            'type': 'text',
            'default': '#5e5b2c'
        },
        'navitem-border-radius': {
            'label': 'Chat Border Radius (pixels)',
            'type': 'int',
            'default': '0'
        }
    }
});

(function() {
    var css = [
        ".nav-item__footer {",
        "      display: " + GM_config.get('hide-location') + ";",
        "      color:" + GM_config.get('sidebar-text-color') + ";",
        "  }",
        "",
        "  ",
        "  ",
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
        "  .chat-bubble__typing-icon {",
        "      font-size:.8em;",
        "      margin-left:.2em",
        "  }",
        "  .chat-bubble__edited {",
        "      font-size:.8em;",
        "      color:#9e9ea6",
        "  }",
        "  .chat-bubble__settings {",
        "      opacity:0;",
        "      width:2em;",
        "      height:1.5em;",
        "      padding:.1em 0!important",
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
        "",
        "  .chat-message-loader {",
        "      position:relative;",
        "      min-height:64px;",
        "      text-align:center;",
        "      color:#9e9ea6;",
        "      font-weight:300;",
        "      line-height:64px;",
        "      max-width:100%;",
        "      text-overflow:ellipsis;",
        "      white-space:nowrap;",
        "      word-wrap:normal;",
        "      overflow:hidden",
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
        "      background-color:" + GM_config.get('general-bg-color') + ";",
        "  }",
        "  .chat-message--forward-to-source-failed, .chat-message.is-not-seen:not(.chat-message--forwarded-to-client) {",
        "      background-color:" + GM_config.get('general-bg-color') + ";",
        "  }",
        "  .chat-message.is-unready {",
        "      opacity:.4",
        "  }",
        "  .chat-message.is-group {",
        "      padding-top:.1rem;",
        "      margin-top:-.7rem",
        "  }",
        "  .chat-message.is-found:after {",
        "      content:\"\";",
        "      position:absolute;",
        "      top:0;",
        "      left:0;",
        "      width:100%;",
        "      height:100%;",
        "      background-color:#90ef90;",
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
        "      color:#fff;",
        "      width:2.125rem;",
        "      text-align:center",
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
        "  .chat-message--email .chat-message__meta:after {",
        "      content:\"\";",
        "      position:absolute;",
        "      bottom:0;",
        "      left:0;",
        "      right:.5rem;",
        "      height:1px;",
        "      background-color:#ddddde",
        "  }",
        "  .chat-message.is-group .chat-message__meta {",
        "      display:none",
        "  }",
        "  .chat-message__username {",
        "      font-weight:600;",
        "      margin-right:.33em",
        "  }",
        "  .chat-message__time {",
        "      display:block;",
        "      float:right;",
        "      font-size:.9em;",
        "      color:#9e9ea6",
        "  }",
        "  .chat-message__meta-component {",
        "      font-size:.9em;",
        "      margin-right:.2rem;",
        "      color:#9e9ea6",
        "  }",
        "  .chat-message__aside-status {",
        "      display:none;",
        "      position:absolute;",
        "      left:-1em;",
        "      top:.15em;",
        "      font-size:.9em;",
        "      color:#9e9ea6",
        "  }",
        "  .chat-message.is-group .chat-message__aside-status {",
        "      display:block",
        "  }",
        "  .chat-message.is-file .chat-message__aside-status {",
        "      top:.5em",
        "  }",
        "  .chat-message__unready {",
        "      font-size:.8em;",
        "      white-space:nowrap;",
        "      padding:.1em .5em;",
        "      background-color:#fef2cf",
        "  }",
        "  .chat-message__meta-notice {",
        "      margin-top:.3em;",
        "      margin-bottom:.3em",
        "  }",
        "",
        "  .nav-item__inner {",
        "      display:-webkit-box;",
        "      display:-ms-flexbox;",
        "      display:flex;",
        "      padding:5px 1rem;",
        "      -ms-touch-action:pan-y;",
        "      touch-action:pan-y",
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
        "  .nav-item__last-message {",
        "      font-size:13px;",
        "  }",
        ".flex__item.ellipsis {",
        "color: "+ GM_config.get('general-txt-color') + ";",
        "}",
        "  .chat-aside {",
        "      height:100%;",
        "      position:relative;",
        "      box-sizing:border-box;",
        "      overflow:auto;",
        "      -webkit-overflow-scrolling:touch;",
        "      font-size:15px;",
        "      line-height:20px;",
        "   background-color:" + GM_config.get('aside-background-col') + ";",
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
        "      color:#6e6e76",
        "  }",
        "",
        "  .chat-date-block {",
        "   text-align:center;",
        "   padding-top:0.0;",
        "   padding-bottom:0.0;",
        "   font-weight:600;",
        "   overflow:hidden",
        "  }",
        "",
        "  .chat-typing {",
        "   font-size:.8em;",
        "   height:1.5em;",
        "   line-height:1.3em;",
        "   position:relative;",
        "   color:#9e9ea6",
        "  }",
        "",
        "  @media screen and (min-width:768px) {",
        "   .chat-input-area {",
        "    margin:0 .5rem;",
        "    padding-bottom:1.3rem;",
        "    padding-top:0rem;",
        "    background:none!important",
        "   }",
        "  }",
        "",
        "",
        "  .nav-item.is-unread:not(.is-banned) .nav-item__title {",
        "   font-weight:600",
        "  }",
        "",
        "  .nav-item.is-new .nav-item__inner {",
        "   background-color:" + GM_config.get('new-background-color') + ";",
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
        " top:0;",
        " background-image:-webkit-linear-gradient(" + GM_config.get('general-bg-color') + ",hsla(0,0%,100%,0));",
        " background-image:linear-gradient(" + GM_config.get('general-bg-color') + ",hsla(0,0%,100%,0))",
        "}",
        ".content-layout__main:after {",
        " bottom:0;",
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
        " font-style:normal;",
        " font-weight:400",
        "}",
        ".chat-date-block {",
        " text-align:center;",
        " padding:1rem 0;",
        " font-weight:600;",
        " overflow:hidden;",
        " color:" + GM_config.get('general-txt-color') + ";",
        " background-color:" + GM_config.get('general-bg-color') + ";",
        "}",
        ".navbar__title {",
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
        "    border-bottom:0px;",
        "    border-radius:"+ GM_config.get('navitem-border-radius') +"px;",
        "    margin: 0 0px 0px !important;",
        "}",
        ".nav-item__inner {",
        "    border-bottom:0px;",
        "    border-radius:"+ GM_config.get('navitem-border-radius') +"px;",
        "    margin: 0 0px 0px !important;",
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
        " padding:.2em .5em;",
        " border-bottom:1px solid " + GM_config.get('aside-background-col') + ";",
        " max-width:100%;",
        " text-overflow:ellipsis;",
        " white-space:nowrap;",
        " word-wrap:normal;",
        " overflow:hidden",
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
        " font-size:85%;",
        " background-color:" + GM_config.get('parsed-bg-color') + ";",
        " border:1px solid " + GM_config.get('parsed-brd-color') + ";",
        " color:" + GM_config.get('general-txt-color') + ";",
        " border-radius:.3em;",
        " font-family:Menlo,Monaco,Consolas,Courier New,monospace",
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
        "    background-color:" + GM_config.get('attended-color') + ";",
        "  }",
        "",
        "",
        ".nav-item__swipeaction-inner {",
        "  color:" + GM_config.get('new-active-color') + ";",
        "}",
        "",
        ".nav-item__swipeaction-title {",
        " display: none;",
        "}",
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

    ].join("\n");
    if (window.location.href.includes("chatra")) {
        if (typeof GM_addStyle != "undefined") {
            GM_addStyle(css);
        } else if (typeof PRO_addStyle != "undefined") {
            PRO_addStyle(css);
        } else if (typeof addStyle != "undefined") {
            addStyle(css);
        } else {
            var node = document.createElement("style");
            node.type = "text/css";
            node.appendChild(document.createTextNode(css));
            var heads = document.getElementsByTagName("head");
            if (heads.length > 0) {
                heads[0].appendChild(node);
            } else {
                document.documentElement.appendChild(node);
            }
        }
    }
    setTimeout(function() {
        if (window.location.href.includes("chatra")) {
            var superNavItems = document.querySelectorAll('.super-nav-section');
            var ChatInputTip = superNavItems[superNavItems.length - 2];

            var btn = document.createElement("BUTTON");
            btn.classList.add("super-nav__item")
            var text = document.createTextNode("Theme Settings");
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
                            if ((allChats[i].innerHTML.toLowerCase().indexOf(awaitingAnswerPhrases[i_1]) !== -1)) {
                                var titleText = allChats[i].querySelector('.nav-item__title');
                                if (allChats[i].innerHTML.indexOf("awaitingAnswer") == -1) {
                                    titleText.appendChild(document.createTextNode("\xa0"));
                                    var elem = document.createElement("img");
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
                                    var elem = allChats[i].querySelector(".awaitingAnswer")
                                    elem.style = "";
                                }


                            }
                        }
                    }
                }

                var latestChat = allChats[allChats.length - 1]; // get latest chat
                var headerText = document.querySelector('.superbutton__title-text')
                if (latestChat) {
                    var awaitingAnswerElement = latestChat.querySelector(".awaitingAnswer")
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
                            var parent = Knr[i].parentElement;
                            var nextSibling = Knr[i].nextSibling.nextSibling
                            var customerId = nextSibling.innerText.substring(nextSibling.innerText.indexOf("zap")+3,nextSibling.innerText.lastIndexOf(" ("))
                            if (customerId != "") {
                                var elem = document.createElement("btn");
                                elem.classList.add("button");
                                elem.classList.add("button--chtr-o")
                                elem.classList.add("loginAsButton")
                                var elemInner = document.createElement("span")
                                elemInner.classList.add("button__inner")
                                elemInner.innerText = "Login as Customer"
                                elem.appendChild(elemInner)
                                // elem.removeAttribute("href")
                                parent.appendChild(elem);

                                $(elem).click(function() {
                                    //console.log('https://zap-hosting.com/de/customer/index.php?userLogin='+customerId)
                                    window.open("https://zap-hosting.com/en/administrator/index.php?module=customer&page=show&customer_id="+customerId+"&show=profile&autoLogin=true")
                                })
                            }
                            //elem2.setAttribute("href", "https://zap-hosting.com/de/customer/index.php?userLogin="+userid)

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
