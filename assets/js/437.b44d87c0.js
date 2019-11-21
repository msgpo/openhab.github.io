(window.webpackJsonp=window.webpackJsonp||[]).push([[437],{1130:function(e,t,a){"use strict";a.r(t);var s=a(1),n=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("AddonLogo"),e._v(" "),a("p",[e._v("The binding uses the Tankerkönig API "),a("a",{attrs:{href:"https://www.tankerkoenig.de",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.tankerkoenig.de"),a("OutboundLink")],1),e._v(" for collecting gas price data of German gas stations.\nSpecial thanks to the creators of Tankerkönig for providing an easy way to get data from the [MTS-K] (Markttransparenzstelle für Kraftstoffe).")]),e._v(" "),a("p",[e._v("Tankerkönig is providing this service for free, however they request to prevent overloading of their server by reducing the number of web-requests.\nThis binding handles those requests (minimum Refresh Interval is 10 minutes, a webserver does handle a maximum of 10 stations).\nThe data will be updated for each Station individually after the initialization and after each Refresh Interval for all (open) stations (Note: changing the Webservice will cause the Refresh Interval to restart).\nAdditionally one may select the mode Opening-Times in which only those Stations get polled which are actually open.\nFor a correct usage of opening times the binding needs the information if the actual day is a holiday.")]),e._v(" "),a("p",[e._v('Note:\nWhile using the mode Opening-Times the channel "station_open" will NOT show "close" because during such times no update is being requested from that Station!')]),e._v(" "),e._m(1),e._v(" "),a("p",[e._v("In order to use this binding one needs to prepare:")]),e._v(" "),e._m(2),e._v(" "),a("p",[e._v("Request a free Tankerkönig API key from: "),a("a",{attrs:{href:"https://creativecommons.tankerkoenig.de/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://creativecommons.tankerkoenig.de/"),a("OutboundLink")],1),e._v(' (Select the tab "API-Key").')]),e._v(" "),e._m(3),e._v(" "),a("p",[e._v("Search for the gas station IDs via the "),a("a",{attrs:{href:"https://creativecommons.tankerkoenig.de/TankstellenFinder/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("finder tool"),a("OutboundLink")],1),e._v(' (Select tab "Tools" -> "Tankstellenfinder").\nDrag the red marker on the map to the rough location of desired gas stations.\nSelect the gas stations and click "Tankstellen übernehmen" on the right.\nThis will download a file holding the location IDs.\nFor example: '),a("code",[e._v("a7cdd9cf-b467-4aac-8eab-d662f082511e")])]),e._v(" "),e._m(4),e._v(" "),a("p",[e._v("This binding supports:")]),e._v(" "),a("p",[e._v("-Webservice (bridge)")]),e._v(" "),a("p",[e._v("-Station (thing)")]),e._v(" "),e._m(5),e._v(" "),a("p",[e._v("The binding provides no discovery.\nThe desired Webservice and Stations must be configured manually or via a things file.")]),e._v(" "),e._m(6),e._v(" "),a("p",[e._v("The binding has no configuration options itself, all configuration is done at 'Bridge' and 'Things' level.")]),e._v(" "),e._m(7),e._v(" "),a("p",[e._v("The Webservice (bridge) needs to be configured with the personal API-Key, the desired Refresh Interval (the time interval between price-updates, default 60 minutes, minimum 10 minutes) and the Opening-Times mode selection (in this mode price-updates are only requested from stations that are actually open).\nA single Webservice can handle up to 10 Stations.")]),e._v(" "),a("p",[e._v("Each Station needs to be configured with a LocationID and the Webservice to which it is linked.")]),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),a("p",[e._v("Note: All apikeys and locationids are only examples!")]),e._v(" "),a("p",[e._v("tankerkoenig.things:")]),e._v(" "),e._m(12),a("p",[e._v("tankerkoenig.items:")]),e._v(" "),e._m(13),e._m(14),e._v(" "),a("p",[e._v("-The Webservice stays OFFLINE")]),e._v(" "),a("p",[e._v("If only a Webservice is configured, it will remain OFFLINE until a Station is configured as well.\nEach Station schedules a daily job to update detail-data, on completion of that job the Station and the Webservice will change to ONLINE.\nThe further price-updates for all Stations are scheduled by the Webservice using the Refresh Interval.")]),e._v(" "),a("p",[e._v("-The Station(s) and Webservice stay OFFLINE")]),e._v(" "),a("p",[e._v('Set the logging level for the binding to DEBUG (Karaf-Console command: "log:set DEBUG org.openhab.binding.tankerkoenig".\nCreate a new Station (in order to start the "initialize" routine).\nCheck the openhab.log for entries like:')]),e._v(" "),e._m(15),a("p",[e._v("This indicates a missing certificate of a certification authority (CA) in the certificate-store of the Java JDK under which openHAB is running.\nIn most cases, updating to the latest version of JDK solves this because the store of cacerts are maintained and updated in Java releases.")]),e._v(" "),a("p",[e._v("Note: You must restart openHAB after a Java update.")]),e._v(" "),a("p",[e._v("If you receive the error because you are running an old Linux installation which does not have the latest java-versions available in its package-repositories, you may be able to fix the issue using one of the three options below:")]),e._v(" "),a("p",[e._v("1.) Update the Linux system and install the latest Java version")]),e._v(" "),a("p",[e._v("2.) Download the most recent JDK and install it directly on to your system without using a pre-composed package")]),e._v(" "),a("p",[e._v("On Debian based systems one can use: "),a("a",{attrs:{href:"http://www.webupd8.org/2012/09/install-oracle-java-8-in-ubuntu-via-ppa.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.webupd8.org/2012/09/install-oracle-java-8-in-ubuntu-via-ppa.html"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("3.) Update the cacerts store by importing the missing certificate")]),e._v(" "),a("p",[e._v("Note: Using this version, loaded certificates will expire!\nIf you still want to import the missing certificate, the example below may help:\nCheck which Java package you have installed:")]),e._v(" "),e._m(16),a("p",[e._v("Find the ca-store of your JDK")]),e._v(" "),e._m(17),a("p",[e._v("Check which CA has validated the certificate")]),e._v(" "),a("p",[e._v("Navigate to "),a("a",{attrs:{href:"https://creativecommons.tankerkoenig.de/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://creativecommons.tankerkoenig.de/"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Check which CA has validated the certificate")]),e._v(" "),a("p",[e._v("Export the certificate of the certificate authority")]),e._v(" "),a("p",[e._v("Import the certificate to the CA-store which you have found")]),e._v(" "),e._m(18),a("p",[e._v('The required password is "changeit".')]),e._v(" "),a("p",[e._v("Restart your server")]),e._v(" "),a("p",[e._v("-The Station(s) and Webservice go to OFFLINE after being ONLINE")]),e._v(" "),a("p",[e._v("Either the web-request to Tankerkönig returned a failure or no valid response was received (this could be caused by a banned API-key).\nIn both cases the Webservice and the Station(s) go OFFLINE.\nIf the Tankerkönig return indicates an error a descriptive message (in German) is added next to the OFFLINE which will be displayed on the Webservice and Station(s) pages on Paper UI.\nOn the next receipt of a valid message Webservice and Station(s) will go ONLINE again.\nThe scheduled polling of price-data is canceled in case of no valid response.\nUsers should check the log for any reports to solve the reason for the OFFLINE status.\nIn order to restart the polling a change of the Webservice has to be saved (for example a change in the Refresh Interval).")]),e._v(" "),a("p",[e._v("Note: If the API-key is banned by Tankerkönig, the reason has to be cleared with Tankerkönig!")]),e._v(" "),a("p",[e._v("-How to set the switch item for the channel holiday?")]),e._v(" "),a("p",[e._v("The correct usage of opening times needs the information if the actual day is a holiday.\nThe binding expects a switch item linked to the Webservice channel holiday.\nThis switch can be set either manually (only suggested for testing!), by a rule [openHAB1-addons rules] or by the usage of the CALDAV binding with a calendar.")]),e._v(" "),e._m(19),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://creativecommons.tankerkoenig.de/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://creativecommons.tankerkoenig.de/"),a("OutboundLink")],1),e._v("  (sorry, only available in German)")])]),e._v(" "),a("li",[a("p",[e._v("[MTS-K]: "),a("a",{attrs:{href:"https://www.bundeskartellamt.de/DE/Wirtschaftsbereiche/Mineral%C3%B6l/MTS-Kraftstoffe/Verbraucher/verbraucher_node.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.bundeskartellamt.de/DE/Wirtschaftsbereiche/Mineralöl/MTS-Kraftstoffe/Verbraucher/verbraucher_node.html"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[e._v("[openhab1-addons rules]: "),a("a",{attrs:{href:"https://github.com/openhab/openhab1-addons/wiki/Samples-Rules#how-to-calculate-public-holidays",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/openhab/openhab1-addons/wiki/Samples-Rules#how-to-calculate-public-holidays"),a("OutboundLink")],1)])])]),e._v(" "),a("DocPreviousVersions"),e._v(" "),a("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"tankerkonig-binding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tankerkonig-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Tankerkönig Binding")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"preparation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preparation","aria-hidden":"true"}},[this._v("#")]),this._v(" Preparation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("p",[this._v("minimal Java Version is 1.8.0_101-b13 (otherwise the https request will not produce a usable return)")])]),this._v(" "),t("li",[t("p",[this._v("a personal API-Key")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("LocationIDs of the selected gas stations")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"supported-things"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"discovery"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"binding-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"thing-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"channels"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("The binding introduces the channel "),a("code",[e._v("holiday")]),e._v(" for the Webservice and the channels "),a("code",[e._v("e10")]),e._v(", "),a("code",[e._v("e5")]),e._v(", "),a("code",[e._v("diesel")]),e._v(" and "),a("code",[e._v("station_open")]),e._v(" for the Stations:")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[e._v("Channel ID")]),e._v(" "),a("th",[e._v("Channel Description")]),e._v(" "),a("th",[e._v("Supported item type")]),e._v(" "),a("th",[e._v("Advanced")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("holiday")]),e._v(" "),a("td",[e._v("ON if today is a holiday")]),e._v(" "),a("td",[e._v("Switch")]),e._v(" "),a("td",[e._v("False")])]),e._v(" "),a("tr",[a("td",[e._v("e10")]),e._v(" "),a("td",[e._v("price of e10")]),e._v(" "),a("td",[e._v("Number")]),e._v(" "),a("td",[e._v("False")])]),e._v(" "),a("tr",[a("td",[e._v("e5")]),e._v(" "),a("td",[e._v("price of e5")]),e._v(" "),a("td",[e._v("Number")]),e._v(" "),a("td",[e._v("False")])]),e._v(" "),a("tr",[a("td",[e._v("diesel")]),e._v(" "),a("td",[e._v("price of diesel")]),e._v(" "),a("td",[e._v("Number")]),e._v(" "),a("td",[e._v("False")])]),e._v(" "),a("tr",[a("td",[e._v("station_open")]),e._v(" "),a("td",[e._v("reported opening-state of the station")]),e._v(" "),a("td",[e._v("Contact")]),e._v(" "),a("td",[e._v("False")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Bridge")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("tankerkoenig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("webservice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("WebserviceName")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"MyWebserviceName"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" apikey"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("refresh")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" modeOpeningTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Thing")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("station")]),e._v(" StationName1 "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"MyStationName1"')]),e._v(" @ "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"GasStations"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" locationid "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Thing")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("station")]),e._v(" StationName2 "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"MyStationName2"')]),e._v(" @ "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"GasStations"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" locationid "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Switch")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Station_Holidays")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Today is holiday: [%s]"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tankerkoenig:webservice:WebserviceName:holiday"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("E10_1")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"E10 [%.3f €]"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tankerkoenig:station:WebserviceName:StationName1:e10"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("E5_1")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"E5 [%.3f €]"')]),e._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tankerkoenig:station:WebserviceName:StationName1:e5"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Diesel_1")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Diesel [%.3f €]"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tankerkoenig:station:WebserviceName:StationName1:diesel"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Contact")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Station_Open_1")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Station is [%s]"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tankerkoenig:station:WebserviceName:StationName1:station_open"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("E10_2")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"E10 [%.3f €]"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tankerkoenig:station:WebserviceName:StationName2:e10"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("E5_2")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"E5 [%.3f €]"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tankerkoenig:station:WebserviceName:StationName2:e5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Diesel_2")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Diesel [%.3f €]"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tankerkoenig:station:WebserviceName:StationName2:diesel"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Contact")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Station_Open_2")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Station is [%s]"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tankerkoenig:station:WebserviceName:StationName2:station_open"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"faq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#faq","aria-hidden":"true"}},[this._v("#")]),this._v(" FAQ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v(" 2017-06-25 16:02:12.679 [DEBUG] [ig.internal.data.TankerkoenigService] - getTankerkoenigDetailResult IOException:\njava.io.IOException: java.util.concurrent.ExecutionException: javax.net.ssl.SSLHandshakeException: General SSLEngine problem\n......\n")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" sudo dpkg "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("l "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" grep java\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" ii  oracle"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("java8"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("jdk                    "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8")]),e._v("u65                             armhf        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Java")]),e._v("™ "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Platform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Standard")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Edition")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Development")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Kit")]),e._v("\n")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" sudo dpkg "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("L")]),e._v(" oracle"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("java8"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("jdk "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" grep cacerts\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("lib"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("jvm"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("jdk"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("oracle"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("arm32"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("vfp"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("hflt"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("jre"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("lib"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("security"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("cacerts\n")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" cd "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("lib"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("jvm"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("jdk"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("oracle"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("arm32"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("vfp"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("hflt"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("jre"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("lib"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("security\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" keytool "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("keystore cacerts "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("alias "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("LetsEncrypt")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("file ca"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("crt\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"tankerkonig-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tankerkonig-api","aria-hidden":"true"}},[this._v("#")]),this._v(" Tankerkönig API")])}],!1,null,null,null);t.default=n.exports}}]);