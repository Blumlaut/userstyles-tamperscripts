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
// @updateURL     https://raw.githubusercontent.com/Blumlaut/userstyles-tamperscripts/main/chatra/chatra.user.js
// @downloadURL   https://raw.githubusercontent.com/Blumlaut/userstyles-tamperscripts/main/chatra/chatra.user.js
// @require            https://openuserjs.org/src/libs/sizzle/GM_config.js
// @grant              GM_getValue
// @grant              GM_setValue
// @run-at        document-start
// @version       3
// ==/UserScript==

GM_config.init(
	{
		'id': 'Chatra_improved_dark', // The id used for this instance of GM_config
		'fields': // Fields object
		{
			'general-bg-color': 
			{
				'label': 'General Background Colour', 
				'type': 'text',
				'default': '#454545' 
			},
			'hide-location': 
			{
				'label': 'Hide Locations', 
				'type': 'select',
				'options': ['none', 'inline'],
				'default': 'none' 
			},
			'sidebar-text-color': 
			{
				'label': 'Sidebar Text Colour', 
				'type': 'text',
				'default': '#DFDFDF'
			},
			'aside-background-col':
			{
				'label': 'Right Sidebar Background Colour', 
				'type': 'text',
				'default': '#3E3E3E'
			}
		}
	});
	
	(function() {var css = [
		".nav-item__footer {",
		"      display: none;",
		"      color:#DFDFDF;",
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
		"      background-color:#454545;",
		"  }",
		"  .chat-message--forward-to-source-failed, .chat-message.is-not-seen:not(.chat-message--forwarded-to-client) {",
		"      background-color:#454545;",
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
		"  .chat-aside {",
		"      height:100%;",
		"      position:relative;",
		"      box-sizing:border-box;",
		"      overflow:auto;",
		"      -webkit-overflow-scrolling:touch;",
		"      font-size:15px;",
		"      line-height:20px;",
		"   background-color:#3E3E3E",
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
		"   background-color:#59582B",
		"  }",
		"  .nav-item.is-new .nav-item__inner:after {",
		"   background-image:-webkit-linear-gradient(left,#59582B,#59582B);",
		"   background-image:linear-gradient(90deg,#59582B,#59582B)",
		"  }",
		"",
		".nav-item.is-banned .nav-item__inner:after {",
		" background-image:-webkit-linear-gradient(left,#3E3E3E,#3E3E3E);",
		" background-image:linear-gradient(90deg,#3E3E3E,#3E3E3E)",
		"}",
		"",
		"  .nav-item.is-active,",
		"  html.hover .nav-item.is-active:hover {",
		"   border-color:#59582B;",
		"   color:#fff",
		"  }",
		"  ",
		"  html.hover .nav-item.is-new:hover .nav-item__inner,",
		"  html.hover .nav-item.is-unread:hover .nav-item__inner,",
		"  html.hover.nav-item:hover {",
		"    border-bottom-color:#4F5E6B",
		"  }",
		"  ",
		"  html.hover .nav-item.is-new:hover .nav-item__inner,",
		"  html.hover .nav-item.is-unread:hover .nav-item__inner,",
		"  html.hover.nav-item:hover .nav-item__inner {",
		"    background-color:#4F5E6B",
		"  }",
		"  ",
		"  .nav-item.is-unread .nav-item__inner {",
		"    background-color:#59582B",
		"  }",
		"",
		".nav-item.is-active .nav-item__inner,",
		"html.hover .nav-item.is-active:hover .nav-item__inner {",
		" background-color:#27656D",
		"}",
		"  ",
		"  .nav-item .nav-item__inner {",
		"    background-color:#3E3E3E",
		"  }",
		"",
		"",
		"",
		".content-layout {",
		" background-color:#454545",
		"}",
		"",
		".content-layout__main:before {",
		" top:0;",
		" background-image:-webkit-linear-gradient(#454545,hsla(0,0%,100%,0));",
		" background-image:linear-gradient(#454545,hsla(0,0%,100%,0))",
		"}",
		".content-layout__main:after {",
		" bottom:0;",
		" background-image:-webkit-linear-gradient(hsla(0,0%,100%,0),#454545);",
		" background-image:linear-gradient(hsla(0,0%,100%,0),#454545)",
		"}",
		"",
		".chat-message {",
		"    color:#DCDCDC",
		"}",
		"",
		".chat-bubble__normal {",
		" color:#DCDCDC;",
		" font-style:normal;",
		" font-weight:400",
		"}",
		".chat-date-block {",
		" text-align:center;",
		" padding:1rem 0;",
		" font-weight:600;",
		" overflow:hidden;",
		" color:#DCDCDC;",
		" background-color:#454545",
		"}",
		".navbar__title {",
		" color:#DCDCDC;",
		" background-color:#454545",
		"}",
		"",
		".content-layout__footer {",
		" color:#DCDCDC;",
		" background-color:#454545",
		"}",
		"",
		".content-layout__message {",
		" color:#DCDCDC;",
		" background-color:#454545",
		"}",
		"",
		".chat-input-away {",
		" color:#DCDCDC;",
		" background-color:#454545",
		"}",
		"",
		".chat-input-area__upload-button {",
		" color:#DCDCDC;",
		" background-color:#454545",
		"}",
		"",
		".chat-input-area__message {",
		" color:#DCDCDC;",
		" background-color:#454545",
		"}",
		".chat-input-area__button--emoji {",
		" color:#DCDCDC;",
		" background-color:#454545",
		"}",
		"",
		".nav-item__content  {",
		"    color:#DFDFDF",
		"}",
		"",
		".nav-item__last-message {",
		"    color:#DFDFDF",
		"}",
		"",
		" .nav-item {",
		"    background-color:#59582B;",
		"    border-bottom:0px;",
		"}",
		"",
		".nav-item .nav-item__inner:after {",
		" background-image:-webkit-linear-gradient(left,#3E3E3E,#3E3E3E);",
		" background-image:linear-gradient(90deg,#3E3E3E,#3E3E3E)",
		"}",
		"",
		"html.hover .nav-item.is-new:hover,",
		"html.hover .nav-item.is-unread:hover,",
		"html.hover .nav-item:hover {",
		" border-bottom-color:#5D6C7B",
		"}",
		"",
		"html.hover .nav-item.is-new:hover .nav-item__inner,",
		"html.hover .nav-item.is-unread:hover .nav-item__inner,",
		"html.hover .nav-item:hover .nav-item__inner {",
		" background-color:#5D6C7B",
		"}",
		"  ",
		"  .form-input {",
		"    color:#DCDCDC;",
		"    background-color:#454545;",
		"}",
		"",
		".meta__header {",
		"    color:#DCDCDC;",
		"}",
		".meta {",
		"    color:#DCDCDC;",
		"}",
		"",
		".path__item {",
		" padding:.2em .5em;",
		" border-bottom:1px solid #3E3E3E;",
		" max-width:100%;",
		" text-overflow:ellipsis;",
		" white-space:nowrap;",
		" word-wrap:normal;",
		" overflow:hidden",
		"}",
		".path__item:first-child {",
		" background-color:#3E3E3E;",
		"}",
		".path__item:nth-child(2) {",
		" background-color:#3E3E3E;",
		"}",
		".path__item:nth-child(3) {",
		" background-color:#3E3E3E;",
		"}",
		".path__item:nth-child(4) {",
		" background-color:#3E3E3E;",
		"}",
		".path__link {",
		"    color:#DCDCDC;",
		"}",
		".userpic__status {",
		"      color:inherit;",
		"}",
		"  ",
		".agents-stack__agent {",
		"    color:#454545;",
		"}",
		"",
		".nav {",
		"    background-color:#454545;",
		"}",
		"",
		".nav__nothing {",
		"    color:#DCDCDC;",
		"}",
		"",
		".nav-item.is-active:not(.is-banned) .nav-item__title {",
		"    color:#DFDFDF;",
		"}",
		"",
		".nav-item.is-active:not(.is-banned) .nav-item__last-message-text {",
		"    color:#DFDFDF;",
		"}",
		"",
		".nav-item.is-active .nav-item__accent,",
		".nav-item.is-active .nav-item__group-sharp,",
		".nav-item.is-active .nav-item__info,",
		".nav-item.is-active .nav-item__last-message,",
		".nav-item.is-active .nav-item__last-message-time {",
		" color:#DFDFDF!important",
		"}",
		"",
		".nav-item__accent {",
		" color:#3B99FC",
		"}",
		"  ",
		"    .nav-item.is-banned .nav-item__inner {",
		"    background-color:#3E3E3E",
		"  }",
		"",
		".nav-item.is-banned .nav-item__last-message-time {",
		" color:#FF3D54",
		"}",
		"",
		".navbar--banned:not(.navbar--disconnected) .navbar__title-text {",
		" color:#FF3D54",
		"}",
		"",
		".chat-bubble.is-settings-hovered,",
		".chat-bubble.is-settings-shown {",
		" background-color:#454545;",
		"}",
		"",
		".search {",
		" background-color:#454545;",
		"}",
		"",
		".chat-textarea {",
		"    color:#DCDCDC;",
		"}",
		"  ",
		"  .parsed-text code,",
		".parsed-text pre {",
		" font-size:85%;",
		" background-color:#4F4F4F;",
		" border:1px solid #5F5F5F;",
		" color:#DCDCDC;",
		" border-radius:.3em;",
		" font-family:Menlo,Monaco,Consolas,Courier New,monospace",
		"}",
		"  ",
		"  .chat-input-area__wrapper {",
		"    border-top:1px solid #737373;",
		"    border:1px solid #737373;",
		"    background-color:#454545 !important;",
		"    scrollbar-color: #4F4F4F #5F5F5F;",
		"}",
		"  ",
		"  @media screen and (min-width:768px) {",
		" .chat-input-area.is-focused:not(.is-inactive):not(.is-disconnected) .chat-input-area__wrapper {",
		"  box-shadow:inset 0 .08em .08em rgba(0,0,0,.08);",
		"  border-color:#3B99FC;",
		" }",
		"}",
		"",
		".js-start-chatting {",
		"    color:#DCDCDC;",
		"}",
		"",
		".chat-bubble.is-editing {",
		" background-color:#535353;",
		"}",
		"",
		"  .nav-item.is-unread:not(.is-new):not(.is-active) .nav-item__inner {",
		"    background-color:#3E3E3E;",
		"  }",
		"",
		"",
		".nav-item__swipeaction-inner {",
		"  color:#27656D;",
		"}",
		"",
		".nav-item.is-new, .nav-item.is-active .nav-item__inner:after {",
		" background-image:-webkit-linear-gradient(left,#27656D,#27656D);",
		" background-image:linear-gradient(90deg,#27656D,#27656D)",
		"}",
		"",
		".command-picker__inner {",
		" background:#454545;",
		" border:solid #454545;",
		" color:#fff;",
		"}",
		".command-picker__header {",
		" background:#454545;",
		" border:solid #454545;",
		" color:#DCDCDC;",
		"}",
		"",
		".icon-link__text {",
		" color:#DCDCDC;",
		"}",
		"",
		"",
		".nothing-pic {",
		"    filter: brightness(0) invert(0.8);",
		"}",
		"",
		".attachment-image__inner {",
		"	background-color:#454545;",
		"}",
		"  ",
		".chat-bubble__file {",
		"    background-color:#4F4F4F;",
		"}",
		".attachment__name, .attachment__size {",
		"	color:#DCDCDC;",
		"}",
		"  ",
		"  .emojipicker__category-title {",
		"    background-color:#454545;",
		"    color:#DCDCDC;",
		"    ",
		"}",
		"",
		".emojipicker__inner,",
		".emojipicker__category-list,",
		".emojipicker__category,",
		".emojipicker__scroller {",
		"    background-color:#454545;",
		"}",
		"  ",
		" .chat-message__smart {",
		" background-color:#535353;",
		"}",
		"",
		".hero-report__result, .conversation__title {",
		"	color:#DCDCDC;",
		"}",
		"",
		".hero-report__legend {",
		"    color:#DCDCDC;",
		"}",
		"",
		".table2__cell {",
		"    color:#DCDCDC;",
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
		"    color:#DCDCDC;",
		"}",
		".agent-header__name {",
		"    color:#DCDCDC;",
		"}",
		"",
		".conversation {",
		"    background-color:#454545;",
		"}",
		"",
		".header {",
		"    color:#DCDCDC;",
		"}",
		"",
		"p {",
		"    color:#DCDCDC;",
		"}",
		"",
		".checkbox__text {",
		"    color:#DCDCDC;",
		"}",
		".form-item__label {",
		"    color:#DCDCDC;",
		"}"
	].join("\n");
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

	setTimeout(function(){ 
		
		var superNavItems = document.querySelectorAll('.super-nav-section');
        var ChatInputTip = superNavItems[superNavItems.length- 2];

		var btn = document.createElement("BUTTON" );
		btn.classList.add("super-nav__item")
		var text = document.createTextNode("Theme Settings");
		btn.appendChild(text);
		ChatInputTip.appendChild(btn);
		btn.addEventListener("click", function() {
			GM_config.open();
		})
	
	}, 3000);

})();
