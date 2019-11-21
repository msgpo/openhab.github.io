(window.webpackJsonp=window.webpackJsonp||[]).push([[450],{1085:function(t,e,s){"use strict";s.r(e);var i=s(1),n=Object(i.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"somfy-urtsi-ii-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#somfy-urtsi-ii-binding","aria-hidden":"true"}},[t._v("#")]),t._v(" Somfy URTSI II Binding "),s("Badge",{attrs:{type:"warn",text:"v1"}})],1),t._v(" "),s("div",{staticClass:"danger custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("OBSOLETE BINDING")]),t._v(" "),s("p",[t._v("This 1.x binding is obsolete; it has been replaced by the 2.x "),s("router-link",{attrs:{to:"./../urtsi/"}},[t._v("urtsi")]),t._v(" binding which you should use instead.")],1)]),t._v(" "),s("AddonLogo"),t._v(" "),s("p",[t._v("This binding communicates with Somfy URTSI II devices over a serial connection.")]),t._v(" "),s("p",[t._v("There is also a binding specifically for openHAB 2 "),s("a",{attrs:{href:"https://www.openhab.org/addons/bindings/urtsi/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("where:")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("The format of the binding configuration is simple and looks like this:")]),t._v(" "),t._m(5),s("p",[t._v("where:")]),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("Only Rollershutter items are allowed to use this binding. The binding is able to handle UP, DOWN and MOVE commands.")]),t._v(" "),s("p",[t._v("As a result, your lines in the items file might look like the following:")]),t._v(" "),t._m(7),s("DocPreviousVersions"),t._v(" "),s("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This binding can be configured in the file "),e("code",[this._v("services/urtsi.cfg")]),this._v(".")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Property")]),t._v(" "),s("th",[t._v("Default")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("<deviceId>")]),t._v(".port")]),t._v(" "),s("td"),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),s("td",[t._v('identification of the serial port on the host system, e.g. "COM1" on Windows, "/dev/ttyS0" on Linux or "/dev/tty.PL2303-0000103D" on Mac.')])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("<deviceId>")]),this._v(" is a name you choose to identify which device you want to control via your items.  You can specify multiple devices in the configuration.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"item-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('urtsi="<deviceId>:<channelId>"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("<deviceId>")]),this._v(" corresponds device which is introduced in "),e("code",[this._v("services/urtsi.cfg")]),this._v(".")]),this._v(" "),e("li",[e("code",[this._v("<channelId>")]),this._v(" is the configured RTS channel you want the item to bind to. Each URTSI device supports up to 16 channels (1 - 16).")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Rollershutter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RollershutterKitchen")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Kitchen"')]),t._v("         "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" urtsi"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"device1:1"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Rollershutter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RollershutterLivingRoom")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Living room"')]),t._v("     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" urtsi"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"device1:2"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.default=n.exports}}]);