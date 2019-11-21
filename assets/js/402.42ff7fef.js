(window.webpackJsonp=window.webpackJsonp||[]).push([[402],{1186:function(_,v,i){"use strict";i.r(v);var t=i(1),e=Object(t.a)({},function(){var _=this,v=_.$createElement,i=_._self._c||v;return i("div",{staticClass:"content"},[i("h1",{attrs:{id:"samsung-tv-binding"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#samsung-tv-binding","aria-hidden":"true"}},[_._v("#")]),_._v(" Samsung TV Binding "),i("Badge",{attrs:{type:"warn",text:"v1"}})],1),_._v(" "),i("div",{staticClass:"danger custom-block"},[i("p",{staticClass:"custom-block-title"},[_._v("OBSOLETE BINDING")]),_._v(" "),i("p",[_._v("This 1.x binding is obsolete; it has been replaced by the 2.x "),i("router-link",{attrs:{to:"./../samsungtv/"}},[_._v("samsungtv")]),_._v(" binding which you should use instead.")],1)]),_._v(" "),i("AddonLogo"),_._v(" "),i("p",[_._v("This binding should be compatible with Samsung TV models which support Apple and Android remote applications.")]),_._v(" "),_._m(0),_._v(" "),_._m(1),_._v(" "),i("p",[_._v("There is also a binding specifically for openHAB 2 "),i("a",{attrs:{href:"https://www.openhab.org/addons/bindings/samsungtv/",target:"_blank",rel:"noopener noreferrer"}},[_._v("here"),i("OutboundLink")],1),_._v(".")]),_._v(" "),_._m(2),_._v(" "),_._m(3),_._v(" "),_._m(4),_._v(" "),_._m(5),_._v(" "),_._m(6),_._v(" "),_._m(7),_._m(8),_._v(" "),_._m(9),_._v(" "),i("p",[_._v("The syntax is:")]),_._v(" "),_._m(10),i("p",[_._v("where:")]),_._v(" "),_._m(11),_._v(" "),_._m(12),_._v(" "),_._m(13),_._v(" "),_._m(14),_._v(" "),_._m(15),i("DocPreviousVersions"),_._v(" "),i("EditPageLink")],1)},[function(){var _=this.$createElement,v=this._self._c||_;return v("h2",{attrs:{id:"limitations"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#limitations","aria-hidden":"true"}},[this._v("#")]),this._v(" Limitations")])},function(){var _=this.$createElement,v=this._self._c||_;return v("ul",[v("li",[this._v("The binding can send commands from openHAB to Samsung TV, but it does not signal any state changes issued by the Samsung TV remote. So creating a rule that triggers an action when the TV is switched on or off by the TV remote is not possible.")]),this._v(" "),v("li",[this._v("The KEY_POWERON command does not switch the TV on. Tested on Samsung UE40ES5700, maybe other models are working.")]),this._v(" "),v("li",[this._v("New models (H-Series TV´s like e.g. UEH5570 ) use a different (encrypted) protocol; they are not yet supported by this binding.")])])},function(){var _=this.$createElement,v=this._self._c||_;return v("h2",{attrs:{id:"binding-configuration"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var _=this.$createElement,v=this._self._c||_;return v("p",[this._v("This binding can be configured in the file "),v("code",[this._v("services/samsungtv.cfg")]),this._v(".")])},function(){var _=this,v=_.$createElement,i=_._self._c||v;return i("table",[i("thead",[i("tr",[i("th",[_._v("Key")]),_._v(" "),i("th",[_._v("Default")]),_._v(" "),i("th",{staticStyle:{"text-align":"center"}},[_._v("Required")]),_._v(" "),i("th",[_._v("Description")])])]),_._v(" "),i("tbody",[i("tr",[i("td",[i("code",[_._v("<id1>")]),_._v(".host")]),_._v(" "),i("td"),_._v(" "),i("td",{staticStyle:{"text-align":"center"}},[_._v("Yes")]),_._v(" "),i("td",[_._v("IP address of the first TV to control")])]),_._v(" "),i("tr",[i("td",[i("code",[_._v("<id1>")]),_._v(".port")]),_._v(" "),i("td",[_._v("55000")]),_._v(" "),i("td",{staticStyle:{"text-align":"center"}},[_._v("No")]),_._v(" "),i("td",[_._v("TCP Port number of the first TV to control")])]),_._v(" "),i("tr",[i("td",[i("code",[_._v("<id2>")]),_._v(".host")]),_._v(" "),i("td"),_._v(" "),i("td",{staticStyle:{"text-align":"center"}},[_._v("Yes")]),_._v(" "),i("td",[_._v("IP address of the second TV to control")])]),_._v(" "),i("tr",[i("td",[i("code",[_._v("<id2>")]),_._v(".port")]),_._v(" "),i("td",[_._v("55000")]),_._v(" "),i("td",{staticStyle:{"text-align":"center"}},[_._v("No")]),_._v(" "),i("td",[_._v("TCP Port number of the second TV to control")])])])])},function(){var _=this.$createElement,v=this._self._c||_;return v("p",[this._v("where "),v("code",[this._v("<id1>")]),this._v(" and "),v("code",[this._v("<id2>")]),this._v(' can be freely set to whatever name you want to give for a certain TV (e.g. "Livingroom" or "Bedroom").')])},function(){var _=this.$createElement,v=this._self._c||_;return v("h3",{attrs:{id:"example"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var _=this.$createElement,v=this._self._c||_;return v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[this._v('# Host and port of the first TV to control <Badge type="warn" text="v1"/>\nLivingroom.host=192.168.0.12\nLivingroom.port=55000\n    \n# Host and port of the second TV to control <Badge type="warn" text="v1"/>\nBedroom.host=192.168.0.13\nBedroom.port=55000\n')])])])},function(){var _=this.$createElement,v=this._self._c||_;return v("p",[this._v("During first connection attempt, the TV asks you to grant permission to the openHAB application. If you have missed the dialog, you can change permission options from the TV's menu (e.g. "),v("code",[this._v("Menu -> Network -> AllShare options")]),this._v("). If you have any problems to control you TV by openHAB, you could verify connection by the official Samsung iOS or Android remote control app.")])},function(){var _=this.$createElement,v=this._self._c||_;return v("h2",{attrs:{id:"item-configuration"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var _=this.$createElement,v=this._self._c||_;return v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[this._v('    samsungtv="<openHAB-command>:<id>:<device-command>[,<openHAB-command>:<device-id>:<device-command>][,...]"\n')])])])},function(){var _=this,v=_.$createElement,i=_._self._c||v;return i("ul",[i("li",[_._v("parts in brackets "),i("code",[_._v("[ ]")]),_._v(" is optional information.")]),_._v(" "),i("li",[i("code",[_._v("<openHAB-command>")]),_._v(" corresponds to an openHAB command.")]),_._v(" "),i("li",[i("code",[_._v("<id")]),_._v("> corresponds to the device which is introduced in the binding configuration.")]),_._v(" "),i("li",[i("code",[_._v("<device-command>")]),_._v(" corresponds to the TV command. See the complete list below.")])])},function(){var _=this.$createElement,v=this._self._c||_;return v("h3",{attrs:{id:"supported-tv-commands"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#supported-tv-commands","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported TV Commands")])},function(){var _=this,v=_.$createElement,i=_._self._c||v;return i("ul",[i("li",[_._v("KEY_0")]),_._v(" "),i("li",[_._v("KEY_1")]),_._v(" "),i("li",[_._v("KEY_2")]),_._v(" "),i("li",[_._v("KEY_3")]),_._v(" "),i("li",[_._v("KEY_4")]),_._v(" "),i("li",[_._v("KEY_5")]),_._v(" "),i("li",[_._v("KEY_6")]),_._v(" "),i("li",[_._v("KEY_7")]),_._v(" "),i("li",[_._v("KEY_8")]),_._v(" "),i("li",[_._v("KEY_9")]),_._v(" "),i("li",[_._v("KEY_11")]),_._v(" "),i("li",[_._v("KEY_12")]),_._v(" "),i("li",[_._v("KEY_3SPEED")]),_._v(" "),i("li",[_._v("KEY_4_3")]),_._v(" "),i("li",[_._v("KEY_16_9")]),_._v(" "),i("li",[_._v("KEY_AD")]),_._v(" "),i("li",[_._v("KEY_ADDDEL")]),_._v(" "),i("li",[_._v("KEY_ALT_MHP")]),_._v(" "),i("li",[_._v("KEY_ANGLE")]),_._v(" "),i("li",[_._v("KEY_ANTENA")]),_._v(" "),i("li",[_._v("KEY_ANYNET")]),_._v(" "),i("li",[_._v("KEY_ANYVIEW")]),_._v(" "),i("li",[_._v("KEY_APP_LIST")]),_._v(" "),i("li",[_._v("KEY_ASPECT")]),_._v(" "),i("li",[_._v("KEY_AUTO_ARC_ANTENNA_AIR")]),_._v(" "),i("li",[_._v("KEY_AUTO_ARC_ANTENNA_CABLE")]),_._v(" "),i("li",[_._v("KEY_AUTO_ARC_ANTENNA_SATELLITE")]),_._v(" "),i("li",[_._v("KEY_AUTO_ARC_ANYNET_AUTO_START")]),_._v(" "),i("li",[_._v("KEY_AUTO_ARC_ANYNET_MODE_OK")]),_._v(" "),i("li",[_._v("KEY_AUTO_ARC_CAPTION_ENG")]),_._v(" "),i("li",[_._v("KEY_AUTO_ARC_CAPTION_KOR")]),_._v(" "),i("li",[_._v("KEY_AUTO_ARC_CAPTION_OFF")]),_._v(" "),i("li",[_._v("KEY_AUTO_ARC_CAPTION_ON")]),_._v(" "),i("li",[_._v("KEY_AUTO_ARC_C_FORCE_AGING")]),_._v(" "),i("li",[_._v("KEY_AUTO_ARC_JACK_IDENT")]),_._v(" "),i("li",[_._v("KEY_AUTO_ARC_LNA_OFF")]),_._v(" "),i("li",[_._v("KEY_AUTO_ARC_LNA_ON")]),_._v(" "),i("li",[_._v("KEY_AUTO_ARC_PIP_CH_CHANGE")]),_._v(" "),i("li",[_._v("KEY_AUTO_ARC_PIP_DOUBLE")]),_._v(" "),i("li",[_._v("KEY_AUTO_ARC_PIP_LARGE")]),_._v(" "),i("li",[_._v("KEY_AUTO_ARC_PIP_LEFT_BOTTOM")]),_._v(" "),i("li",[_._v("KEY_AUTO_ARC_PIP_LEFT_TOP")]),_._v(" "),i("li",[_._v("KEY_AUTO_ARC_PIP_RIGHT_BOTTOM")]),_._v(" "),i("li",[_._v("KEY_AUTO_ARC_PIP_RIGHT_TOP")]),_._v(" "),i("li",[_._v("KEY_AUTO_ARC_PIP_SMALL")]),_._v(" "),i("li",[_._v("KEY_AUTO_ARC_PIP_SOURCE_CHANGE")]),_._v(" "),i("li",[_._v("KEY_AUTO_ARC_PIP_WIDE")]),_._v(" "),i("li",[_._v("KEY_AUTO_ARC_RESET")]),_._v(" "),i("li",[_._v("KEY_AUTO_ARC_USBJACK_INSPECT")]),_._v(" "),i("li",[_._v("KEY_AUTO_FORMAT")]),_._v(" "),i("li",[_._v("KEY_AUTO_PROGRAM")]),_._v(" "),i("li",[_._v("KEY_AV1")]),_._v(" "),i("li",[_._v("KEY_AV2")]),_._v(" "),i("li",[_._v("KEY_AV3")]),_._v(" "),i("li",[_._v("KEY_BACK_MHP")]),_._v(" "),i("li",[_._v("KEY_BOOKMARK")]),_._v(" "),i("li",[_._v("KEY_CALLER_ID")]),_._v(" "),i("li",[_._v("KEY_CAPTION")]),_._v(" "),i("li",[_._v("KEY_CATV_MODE")]),_._v(" "),i("li",[_._v("KEY_CHDOWN")]),_._v(" "),i("li",[_._v("KEY_CHUP")]),_._v(" "),i("li",[_._v("KEY_CH_LIST")]),_._v(" "),i("li",[_._v("KEY_CLEAR")]),_._v(" "),i("li",[_._v("KEY_CLOCK_DISPLAY")]),_._v(" "),i("li",[_._v("KEY_COMPONENT1")]),_._v(" "),i("li",[_._v("KEY_COMPONENT2")]),_._v(" "),i("li",[_._v("KEY_CONTENTS")]),_._v(" "),i("li",[_._v("KEY_CONVERGENCE")]),_._v(" "),i("li",[_._v("KEY_CONVERT_AUDIO_MAINSUB")]),_._v(" "),i("li",[_._v("KEY_CUSTOM")]),_._v(" "),i("li",[_._v("KEY_CYAN")]),_._v(" "),i("li",[_._v("KEY_BLUE(KEY_CYAN)")]),_._v(" "),i("li",[_._v("KEY_DEVICE_CONNECT")]),_._v(" "),i("li",[_._v("KEY_DISC_MENU")]),_._v(" "),i("li",[_._v("KEY_DMA")]),_._v(" "),i("li",[_._v("KEY_DNET")]),_._v(" "),i("li",[_._v("KEY_DNIe")]),_._v(" "),i("li",[_._v("KEY_DNSe")]),_._v(" "),i("li",[_._v("KEY_DOOR")]),_._v(" "),i("li",[_._v("KEY_DOWN")]),_._v(" "),i("li",[_._v("KEY_DSS_MODE")]),_._v(" "),i("li",[_._v("KEY_DTV")]),_._v(" "),i("li",[_._v("KEY_DTV_LINK")]),_._v(" "),i("li",[_._v("KEY_DTV_SIGNAL")]),_._v(" "),i("li",[_._v("KEY_DVD_MODE")]),_._v(" "),i("li",[_._v("KEY_DVI")]),_._v(" "),i("li",[_._v("KEY_DVR")]),_._v(" "),i("li",[_._v("KEY_DVR_MENU")]),_._v(" "),i("li",[_._v("KEY_DYNAMIC")]),_._v(" "),i("li",[_._v("KEY_ENTER")]),_._v(" "),i("li",[_._v("KEY_ENTERTAINMENT")]),_._v(" "),i("li",[_._v("KEY_ESAVING")]),_._v(" "),i("li",[_._v("KEY_EXIT")]),_._v(" "),i("li",[_._v("KEY_EXT1")]),_._v(" "),i("li",[_._v("KEY_EXT2")]),_._v(" "),i("li",[_._v("KEY_EXT3")]),_._v(" "),i("li",[_._v("KEY_EXT4")]),_._v(" "),i("li",[_._v("KEY_EXT5")]),_._v(" "),i("li",[_._v("KEY_EXT6")]),_._v(" "),i("li",[_._v("KEY_EXT7")]),_._v(" "),i("li",[_._v("KEY_EXT8")]),_._v(" "),i("li",[_._v("KEY_EXT9")]),_._v(" "),i("li",[_._v("KEY_EXT10")]),_._v(" "),i("li",[_._v("KEY_EXT11")]),_._v(" "),i("li",[_._v("KEY_EXT12")]),_._v(" "),i("li",[_._v("KEY_EXT13")]),_._v(" "),i("li",[_._v("KEY_EXT14")]),_._v(" "),i("li",[_._v("KEY_EXT15")]),_._v(" "),i("li",[_._v("KEY_EXT16")]),_._v(" "),i("li",[_._v("KEY_EXT17")]),_._v(" "),i("li",[_._v("KEY_EXT18")]),_._v(" "),i("li",[_._v("KEY_EXT19")]),_._v(" "),i("li",[_._v("KEY_EXT20")]),_._v(" "),i("li",[_._v("KEY_EXT21")]),_._v(" "),i("li",[_._v("KEY_EXT22")]),_._v(" "),i("li",[_._v("KEY_EXT23")]),_._v(" "),i("li",[_._v("KEY_EXT24")]),_._v(" "),i("li",[_._v("KEY_EXT25")]),_._v(" "),i("li",[_._v("KEY_EXT26")]),_._v(" "),i("li",[_._v("KEY_EXT27")]),_._v(" "),i("li",[_._v("KEY_EXT28")]),_._v(" "),i("li",[_._v("KEY_EXT29")]),_._v(" "),i("li",[_._v("KEY_EXT30")]),_._v(" "),i("li",[_._v("KEY_EXT31")]),_._v(" "),i("li",[_._v("KEY_EXT32")]),_._v(" "),i("li",[_._v("KEY_EXT33")]),_._v(" "),i("li",[_._v("KEY_EXT34")]),_._v(" "),i("li",[_._v("KEY_EXT35")]),_._v(" "),i("li",[_._v("KEY_EXT36")]),_._v(" "),i("li",[_._v("KEY_EXT37")]),_._v(" "),i("li",[_._v("KEY_EXT38")]),_._v(" "),i("li",[_._v("KEY_EXT39")]),_._v(" "),i("li",[_._v("KEY_EXT40")]),_._v(" "),i("li",[_._v("KEY_EXT41")]),_._v(" "),i("li",[_._v("KEY_FACTORY")]),_._v(" "),i("li",[_._v("KEY_FAVCH")]),_._v(" "),i("li",[_._v("KEY_FF")]),_._v(" "),i("li",[_._v("KEY_FF_")]),_._v(" "),i("li",[_._v("KEY_FM_RADIO")]),_._v(" "),i("li",[_._v("KEY_GAME")]),_._v(" "),i("li",[_._v("KEY_GREEN")]),_._v(" "),i("li",[_._v("KEY_GUIDE")]),_._v(" "),i("li",[_._v("KEY_HDMI")]),_._v(" "),i("li",[_._v("KEY_HDMI1")]),_._v(" "),i("li",[_._v("KEY_HDMI2")]),_._v(" "),i("li",[_._v("KEY_HDMI3")]),_._v(" "),i("li",[_._v("KEY_HDMI4")]),_._v(" "),i("li",[_._v("KEY_HELP")]),_._v(" "),i("li",[_._v("KEY_HOME")]),_._v(" "),i("li",[_._v("KEY_ID_INPUT")]),_._v(" "),i("li",[_._v("KEY_ID_SETUP")]),_._v(" "),i("li",[_._v("KEY_INFO")]),_._v(" "),i("li",[_._v("KEY_INSTANT_REPLAY")]),_._v(" "),i("li",[_._v("KEY_LEFT")]),_._v(" "),i("li",[_._v("KEY_LINK")]),_._v(" "),i("li",[_._v("KEY_LIVE")]),_._v(" "),i("li",[_._v("KEY_MAGIC_BRIGHT")]),_._v(" "),i("li",[_._v("KEY_MAGIC_CHANNEL")]),_._v(" "),i("li",[_._v("KEY_MDC")]),_._v(" "),i("li",[_._v("KEY_MENU")]),_._v(" "),i("li",[_._v("KEY_MIC")]),_._v(" "),i("li",[_._v("KEY_MORE")]),_._v(" "),i("li",[_._v("KEY_MOVIE1")]),_._v(" "),i("li",[_._v("KEY_MS")]),_._v(" "),i("li",[_._v("KEY_MTS")]),_._v(" "),i("li",[_._v("KEY_MUTE")]),_._v(" "),i("li",[_._v("KEY_NINE_SEPERATE")]),_._v(" "),i("li",[_._v("KEY_OPEN")]),_._v(" "),i("li",[_._v("KEY_PANNEL_CHDOWN")]),_._v(" "),i("li",[_._v("KEY_PANNEL_CHUP")]),_._v(" "),i("li",[_._v("KEY_PANNEL_ENTER")]),_._v(" "),i("li",[_._v("KEY_PANNEL_MENU")]),_._v(" "),i("li",[_._v("KEY_PANNEL_POWER")]),_._v(" "),i("li",[_._v("KEY_PANNEL_SOURCE")]),_._v(" "),i("li",[_._v("KEY_PANNEL_VOLDOW")]),_._v(" "),i("li",[_._v("KEY_PANNEL_VOLUP")]),_._v(" "),i("li",[_._v("KEY_PANORAMA")]),_._v(" "),i("li",[_._v("KEY_PAUSE")]),_._v(" "),i("li",[_._v("KEY_PCMODE")]),_._v(" "),i("li",[_._v("KEY_PERPECT_FOCUS")]),_._v(" "),i("li",[_._v("KEY_PICTURE_SIZE")]),_._v(" "),i("li",[_._v("KEY_PIP_CHDOWN")]),_._v(" "),i("li",[_._v("KEY_PIP_CHUP")]),_._v(" "),i("li",[_._v("KEY_PIP_ONOFF")]),_._v(" "),i("li",[_._v("KEY_PIP_SCAN")]),_._v(" "),i("li",[_._v("KEY_PIP_SIZE")]),_._v(" "),i("li",[_._v("KEY_PIP_SWAP")]),_._v(" "),i("li",[_._v("KEY_PLAY")]),_._v(" "),i("li",[_._v("KEY_PLUS100")]),_._v(" "),i("li",[_._v("KEY_PMODE")]),_._v(" "),i("li",[_._v("KEY_POWER")]),_._v(" "),i("li",[_._v("KEY_POWEROFF")]),_._v(" "),i("li",[_._v("KEY_POWERON")]),_._v(" "),i("li",[_._v("KEY_PRECH")]),_._v(" "),i("li",[_._v("KEY_PRINT")]),_._v(" "),i("li",[_._v("KEY_PROGRAM")]),_._v(" "),i("li",[_._v("KEY_QUICK_REPLAY")]),_._v(" "),i("li",[_._v("KEY_REC")]),_._v(" "),i("li",[_._v("KEY_RED")]),_._v(" "),i("li",[_._v("KEY_REPEAT")]),_._v(" "),i("li",[_._v("KEY_RESERVED1")]),_._v(" "),i("li",[_._v("KEY_RETURN")]),_._v(" "),i("li",[_._v("KEY_REWIND")]),_._v(" "),i("li",[_._v("KEY_REWIND_")]),_._v(" "),i("li",[_._v("KEY_RIGHT")]),_._v(" "),i("li",[_._v("KEY_RSS")]),_._v(" "),i("li",[_._v("KEY_INTERNET")]),_._v(" "),i("li",[_._v("KEY_RSURF")]),_._v(" "),i("li",[_._v("KEY_SCALE")]),_._v(" "),i("li",[_._v("KEY_SEFFECT")]),_._v(" "),i("li",[_._v("KEY_SETUP_CLOCK_TIMER")]),_._v(" "),i("li",[_._v("KEY_SLEEP")]),_._v(" "),i("li",[_._v("KEY_SOUND_MODE")]),_._v(" "),i("li",[_._v("KEY_SOURCE")]),_._v(" "),i("li",[_._v("KEY_SRS")]),_._v(" "),i("li",[_._v("KEY_STANDARD")]),_._v(" "),i("li",[_._v("KEY_STB_MODE")]),_._v(" "),i("li",[_._v("KEY_STILL_PICTURE")]),_._v(" "),i("li",[_._v("KEY_STOP")]),_._v(" "),i("li",[_._v("KEY_SUB_TITLE")]),_._v(" "),i("li",[_._v("KEY_SVIDEO1")]),_._v(" "),i("li",[_._v("KEY_SVIDEO2")]),_._v(" "),i("li",[_._v("KEY_SVIDEO3")]),_._v(" "),i("li",[_._v("KEY_TOOLS")]),_._v(" "),i("li",[_._v("KEY_TOPMENU")]),_._v(" "),i("li",[_._v("KEY_TTX_MIX")]),_._v(" "),i("li",[_._v("KEY_TTX_SUBFACE")]),_._v(" "),i("li",[_._v("KEY_TURBO")]),_._v(" "),i("li",[_._v("KEY_TV")]),_._v(" "),i("li",[_._v("KEY_TV_MODE")]),_._v(" "),i("li",[_._v("KEY_UP")]),_._v(" "),i("li",[_._v("KEY_VCHIP")]),_._v(" "),i("li",[_._v("KEY_VCR_MODE")]),_._v(" "),i("li",[_._v("KEY_VOLDOWN")]),_._v(" "),i("li",[_._v("KEY_VOLUP")]),_._v(" "),i("li",[_._v("KEY_WHEEL_LEFT")]),_._v(" "),i("li",[_._v("KEY_WHEEL_RIGHT")]),_._v(" "),i("li",[_._v("KEY_W_LINK")]),_._v(" "),i("li",[_._v("KEY_YELLOW")]),_._v(" "),i("li",[_._v("KEY_ZOOM1")]),_._v(" "),i("li",[_._v("KEY_ZOOM2")]),_._v(" "),i("li",[_._v("KEY_ZOOM_IN")]),_._v(" "),i("li",[_._v("KEY_ZOOM_MOVE")]),_._v(" "),i("li",[_._v("KEY_ZOOM_OUT")])])},function(){var _=this.$createElement,v=this._self._c||_;return v("h2",{attrs:{id:"examples"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var _=this,v=_.$createElement,i=_._self._c||v;return i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-dsl"}},[i("code",[i("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("Number")]),_._v("        "),i("span",{pre:!0,attrs:{class:"token class-name"}},[_._v("directChannel")]),_._v("  "),i("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),_._v("samsungtv"),i("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),i("span",{pre:!0,attrs:{class:"token string"}},[_._v('"1:Livingroom:KEY_1, 2:Livingroom:KEY_2, 3:Livingroom:KEY_3"')]),i("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("}")]),_._v("\n"),i("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("Dimmer")]),_._v("        "),i("span",{pre:!0,attrs:{class:"token class-name"}},[_._v("channel")]),_._v("        "),i("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),_._v("samsungtv"),i("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),i("span",{pre:!0,attrs:{class:"token string"}},[_._v('"INCREASE:Livingroom:KEY_CHUP, DECREASE:Livingroom:KEY_CHDOWN"')]),i("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("}")]),_._v("\n"),i("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("Switch")]),_._v("        "),i("span",{pre:!0,attrs:{class:"token class-name"}},[_._v("mute")]),_._v("           "),i("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),_._v("samsungtv"),i("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),i("span",{pre:!0,attrs:{class:"token string"}},[_._v('"ON:Livingroom:KEY_MUTE, OFF:Livingroom:KEY_MUTE"')]),i("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("}")]),_._v("\n"),i("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("Rollershutter")]),_._v(" "),i("span",{pre:!0,attrs:{class:"token class-name"}},[_._v("volume")]),_._v("         "),i("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("{")]),_._v("samsungtv"),i("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),i("span",{pre:!0,attrs:{class:"token string"}},[_._v('"UP:Livingroom:KEY_VOLUP, DOWN:Livingroom:KEY_VOLDOWN"')]),i("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("}")]),_._v("\n")])])])}],!1,null,null,null);v.default=e.exports}}]);