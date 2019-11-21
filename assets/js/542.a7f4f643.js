(window.webpackJsonp=window.webpackJsonp||[]).push([[542],{778:function(e,t,a){"use strict";a.r(t);var s=a(1),r=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("p",[e._v('openHAB has a strict separation between the physical world (the "Things", see below) and the application, which is built around the notion of "Items" (also called the virtual layer).')]),e._v(" "),a("p",[e._v("Items represent functionality that is used by the application (mainly user interfaces or automation logic).\nItems have a state and are used through events.")]),e._v(" "),a("p",[e._v("The following Item types are currently available (alphabetical order):")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),a("p",[e._v("Group Items collect other Items into Groups.\nGroup Items can themselves be members of other Group Items.\nCyclic membership is not forbidden but strongly not recommended.\nUser interfaces might display Group Items as single entries and provide navigation to its members.")]),e._v(" "),a("p",[e._v("Example for a Group Item as a simple collection of other Items:")]),e._v(" "),e._m(3),e._m(4),e._v(" "),a("p",[e._v("Group Items can derive their own state from their member Items.\nTo derive a state the Group Item must be constructed using a base Item and a Group function.\nWhen calculating the state, Group functions recursively traverse the Group's members and also take members of subgroups into account.\nIf a subgroup however defines a state on its own (having base Item & Group function set) traversal stops and the state of the subgroup member is taken.")]),e._v(" "),a("p",[e._v("Available Group functions:")]),e._v(" "),e._m(5),e._v(" "),a("p",[e._v("Examples for derived states on Group Items when declared in the Item DSL:")]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),a("p",[e._v("A numerical type which carries a unit in addition to its value.\nThe framework is capable of automatic conversion between units depending on the users locale settings.\nSee the concept on "),a("router-link",{attrs:{to:"./units-of-measurement.html"}},[e._v("Units of Measurement")]),e._v(" for more details.")],1),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),e._m(24),e._v(" "),a("p",[e._v("Here is a short table demonstrating conversions for the examples above:")]),e._v(" "),e._m(25),e._v(" "),e._m(26),e._v(" "),a("p",[e._v('Sometimes additional information is required to be attached to Items for certain use-cases.\nThis could be an application which needs some hints in order to render the Items in a generic way, or an integration with voice controlled assistants, or any other services which access the Items and need to understand their "meaning".')]),e._v(" "),a("p",[e._v("Such metadata can be attached to Items using disjunct namespaces so they won't conflict with each other.\nEach metadata entry has a main value and optionally additional key/value pairs.\nThere can be metadata attached to an Item for as many namespaces as desired, like in the following example:")]),e._v(" "),e._m(27),e._v(" "),e._m(28),e._v(" "),e._m(29),e._v(" "),e._m(30),e._v(" "),a("DocPreviousVersions"),e._v(" "),a("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"items"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#items","aria-hidden":"true"}},[this._v("#")]),this._v(" Items")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[e._v("Item Name")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Command Types")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Color")]),e._v(" "),a("td",[e._v("Color information (RGB)")]),e._v(" "),a("td",[e._v("OnOff, IncreaseDecrease, Percent, HSB")])]),e._v(" "),a("tr",[a("td",[e._v("Contact")]),e._v(" "),a("td",[e._v("Item storing status of e.g. door/window contacts")]),e._v(" "),a("td",[e._v("OpenClosed")])]),e._v(" "),a("tr",[a("td",[e._v("DateTime")]),e._v(" "),a("td",[e._v("Stores date and time")]),e._v(" "),a("td",[e._v("-")])]),e._v(" "),a("tr",[a("td",[e._v("Dimmer")]),e._v(" "),a("td",[e._v("Item carrying a percentage value for dimmers")]),e._v(" "),a("td",[e._v("OnOff, IncreaseDecrease, Percent")])]),e._v(" "),a("tr",[a("td",[e._v("Group")]),e._v(" "),a("td",[e._v("Item to nest other Items / collect them in Groups")]),e._v(" "),a("td",[e._v("-")])]),e._v(" "),a("tr",[a("td",[e._v("Image")]),e._v(" "),a("td",[e._v("Holds the binary data of an image")]),e._v(" "),a("td",[e._v("-")])]),e._v(" "),a("tr",[a("td",[e._v("Location")]),e._v(" "),a("td",[e._v("Stores GPS coordinates")]),e._v(" "),a("td",[e._v("Point")])]),e._v(" "),a("tr",[a("td",[e._v("Number")]),e._v(" "),a("td",[e._v("Stores values in number format, takes an optional dimension suffix")]),e._v(" "),a("td",[e._v("Decimal")])]),e._v(" "),a("tr",[a("td",[e._v("Number:<dimension>")]),e._v(" "),a("td",[e._v("like Number, additional dimension information for unit support")]),e._v(" "),a("td",[e._v("Quantity")])]),e._v(" "),a("tr",[a("td",[e._v("Player")]),e._v(" "),a("td",[e._v("Allows to control players (e.g. audio players)")]),e._v(" "),a("td",[e._v("PlayPause, NextPrevious, RewindFastforward")])]),e._v(" "),a("tr",[a("td",[e._v("Rollershutter")]),e._v(" "),a("td",[e._v("Typically used for blinds")]),e._v(" "),a("td",[e._v("UpDown, StopMove, Percent")])]),e._v(" "),a("tr",[a("td",[e._v("String")]),e._v(" "),a("td",[e._v("Stores texts")]),e._v(" "),a("td",[e._v("String")])]),e._v(" "),a("tr",[a("td",[e._v("Switch")]),e._v(" "),a("td",[e._v("Typically used for lights (on/off)")]),e._v(" "),a("td",[e._v("OnOff")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"group-items"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#group-items","aria-hidden":"true"}},[this._v("#")]),this._v(" Group Items")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[e._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Group")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("groundFloor")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Switch")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("kitchenLight")]),a("span",{pre:!0,attrs:{class:"token tag"}},[e._v(" (groundFloor)")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Switch")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("livingroomLight")]),a("span",{pre:!0,attrs:{class:"token tag"}},[e._v(" (groundFloor)")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"derive-group-state-from-member-items"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#derive-group-state-from-member-items","aria-hidden":"true"}},[this._v("#")]),this._v(" Derive Group State from Member Items")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[e._v("Function")]),e._v(" "),a("th",[e._v("Parameters")]),e._v(" "),a("th",[e._v("Base Item")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("EQUALITY")]),e._v(" "),a("td",[e._v("-")]),e._v(" "),a("td",[e._v("<all>")]),e._v(" "),a("td",[e._v("Sets the state of the members if all have equal state. Otherwise UNDEF is set. In the Item DSL "),a("code",[e._v("EQUALITY")]),e._v(" is the default and may be omitted.")])]),e._v(" "),a("tr",[a("td",[e._v("AND, OR, NAND, NOR")]),e._v(" "),a("td",[e._v("<activeState>, <passiveState>")]),e._v(" "),a("td",[e._v("<all> (must match active & passive state)")]),e._v(" "),a("td",[e._v("Sets the <activeState>, if the member state <activeState> evaluates to "),a("code",[e._v("true")]),e._v(" under the boolean term. Otherwise the <passiveState> is set.")])]),e._v(" "),a("tr",[a("td",[e._v("SUM, AVG, MIN, MAX")]),e._v(" "),a("td",[e._v("-")]),e._v(" "),a("td",[e._v("Number")]),e._v(" "),a("td",[e._v("Sets the state according to the arithmetic function over all member states.")])]),e._v(" "),a("tr",[a("td",[e._v("COUNT")]),e._v(" "),a("td",[e._v("<regular expression>")]),e._v(" "),a("td",[e._v("Number")]),e._v(" "),a("td",[e._v("Sets the state to the number of members matching the given regular expression with their states.")])]),e._v(" "),a("tr",[a("td",[e._v("LATEST, EARLIEST")]),e._v(" "),a("td",[e._v("-")]),e._v(" "),a("td",[e._v("DateTime")]),e._v(" "),a("td",[e._v("Sets the state to the latest/earliest date from all member states")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("code",[e._v('Group:Number:COUNT(".*")')]),e._v(" counts all members of the Group matching the given regular expression, here any character or state (simply count all members).")]),e._v(" "),a("li",[a("code",[e._v("Group:Number:AVG")]),e._v(" calculates the average value over all member states which can be interpreted as "),a("code",[e._v("DecimalTypes")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("Group:Switch:OR(ON,OFF)")]),e._v(" sets the Group state to "),a("code",[e._v("ON")]),e._v(" if any of its members has the state "),a("code",[e._v("ON")]),e._v(", "),a("code",[e._v("OFF")]),e._v(" if all are off.")]),e._v(" "),a("li",[a("code",[e._v("Group:Switch:AND(ON,OFF)")]),e._v(" sets the Group state to "),a("code",[e._v("ON")]),e._v(" if all of its members have the state "),a("code",[e._v("ON")]),e._v(", "),a("code",[e._v("OFF")]),e._v(" if any of the Group members has a different state than "),a("code",[e._v("ON")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("Group:DateTime:LATEST")]),e._v(" sets the Group state to the latest date from all its members states.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"state-and-command-type-formatting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#state-and-command-type-formatting","aria-hidden":"true"}},[this._v("#")]),this._v(" State and Command Type Formatting")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"stringtype"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stringtype","aria-hidden":"true"}},[this._v("#")]),this._v(" StringType")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("StringType")]),this._v(" objects store a simple Java String.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"datetimetype"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#datetimetype","aria-hidden":"true"}},[this._v("#")]),this._v(" DateTimeType")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("DateTimeType")]),this._v(" objects are parsed using Java's "),t("code",[this._v("SimpleDateFormat.parse()")]),this._v(" using the first matching pattern:")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ol",[a("li",[a("code",[e._v("yyyy-MM-dd'T'HH:mm:ss.SSSZ")])]),e._v(" "),a("li",[a("code",[e._v("yyyy-MM-dd'T'HH:mm:ss.SSSz")])]),e._v(" "),a("li",[a("code",[e._v("yyyy-MM-dd'T'HH:mm:ss.SSSX")])]),e._v(" "),a("li",[a("code",[e._v("yyyy-MM-dd'T'HH:mm:ssz")])]),e._v(" "),a("li",[a("code",[e._v("yyyy-MM-dd'T'HH:mm:ss")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[e._v("Literal")]),e._v(" "),a("th",[e._v("Standard")]),e._v(" "),a("th",[e._v("Example")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("z")]),e._v(" "),a("td",[e._v("General time zone")]),e._v(" "),a("td",[e._v("Pacific Standard Time; PST; GMT-08:00")])]),e._v(" "),a("tr",[a("td",[e._v("Z")]),e._v(" "),a("td",[e._v("RFC 822 time zone")]),e._v(" "),a("td",[e._v("-0800")])]),e._v(" "),a("tr",[a("td",[e._v("X")]),e._v(" "),a("td",[e._v("ISO 8601 time zone")]),e._v(" "),a("td",[e._v("-08; -0800; -08:00")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"decimaltype-percenttype"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#decimaltype-percenttype","aria-hidden":"true"}},[this._v("#")]),this._v(" DecimalType, PercentType")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("code",[e._v("DecimalType")]),e._v(" and "),a("code",[e._v("PercentType")]),e._v(" objects use Java's "),a("code",[e._v("BigDecimal")]),e._v(" constructor for conversion.\n"),a("code",[e._v("PercentType")]),e._v(" values range from 0 to 100.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"quantitytype"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quantitytype","aria-hidden":"true"}},[this._v("#")]),this._v(" QuantityType")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"hsbtype"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hsbtype","aria-hidden":"true"}},[this._v("#")]),this._v(" HSBType")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("HSB string values consist of three comma-separated values for hue (0-360°), saturation (0-100%), and value (0-100%) respectively, e.g. "),t("code",[this._v("240,100,100")]),this._v(" for blue.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"pointtype"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pointtype","aria-hidden":"true"}},[this._v("#")]),this._v(" PointType")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("PointType")]),this._v(" strings consist of three "),t("code",[this._v("DecimalType")]),this._v("s separated by commas, indicating latitude and longitude in degrees, and altitude in meters respectively.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"enum-types"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enum-types","aria-hidden":"true"}},[this._v("#")]),this._v(" Enum Types")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Supported Values")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("IncreaseDecreaseType")]),e._v(" "),a("td",[a("code",[e._v("INCREASE")]),e._v(", "),a("code",[e._v("DECREASE")])])]),e._v(" "),a("tr",[a("td",[e._v("NextPreviousType")]),e._v(" "),a("td",[a("code",[e._v("NEXT")]),e._v(", "),a("code",[e._v("PREVIOUS")])])]),e._v(" "),a("tr",[a("td",[e._v("OnOffType")]),e._v(" "),a("td",[a("code",[e._v("ON")]),e._v(", "),a("code",[e._v("OFF")])])]),e._v(" "),a("tr",[a("td",[e._v("OpenClosedType")]),e._v(" "),a("td",[a("code",[e._v("OPEN")]),e._v(", "),a("code",[e._v("CLOSED")])])]),e._v(" "),a("tr",[a("td",[e._v("PlayPauseType")]),e._v(" "),a("td",[a("code",[e._v("PLAY")]),e._v(", "),a("code",[e._v("PAUSE")])])]),e._v(" "),a("tr",[a("td",[e._v("RewindFastforwardType")]),e._v(" "),a("td",[a("code",[e._v("REWIND")]),e._v(", "),a("code",[e._v("FASTFORWARD")])])]),e._v(" "),a("tr",[a("td",[e._v("StopMoveType")]),e._v(" "),a("td",[a("code",[e._v("STOP")]),e._v(", "),a("code",[e._v("MOVE")])])]),e._v(" "),a("tr",[a("td",[e._v("UpDownType")]),e._v(" "),a("td",[a("code",[e._v("UP")]),e._v(", "),a("code",[e._v("DOWN")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"a-note-on-items-which-accept-multiple-state-data-types"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#a-note-on-items-which-accept-multiple-state-data-types","aria-hidden":"true"}},[this._v("#")]),this._v(" A note on Items which accept multiple state data types")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("There are a number of Items which accept multiple state data types, for example "),a("code",[e._v("DimmerItem")]),e._v(", which accepts "),a("code",[e._v("OnOffType")]),e._v(" and "),a("code",[e._v("PercentType")]),e._v(", "),a("code",[e._v("RollershutterItem")]),e._v(", which  accepts "),a("code",[e._v("PercentType")]),e._v(" and "),a("code",[e._v("UpDownType")]),e._v(", or "),a("code",[e._v("ColorItem")]),e._v(", which accepts "),a("code",[e._v("HSBType")]),e._v(", "),a("code",[e._v("OnOffType")]),e._v(" and "),a("code",[e._v("PercentType")]),e._v(".\nSince an Item has a SINGLE state, these multiple data types can be considered different views to this state.\nThe data type carrying the most information about the state is usually used to keep the internal state for the Item, and other datatypes are converted from this main data type.\nThis main data type is normally the first element in the list returned by "),a("code",[e._v("Item.getAcceptedDataTypes()")]),e._v(".")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[e._v("Item Name")]),e._v(" "),a("th",[e._v("Main Data Type")]),e._v(" "),a("th",[e._v("Additional Data Types Conversions")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Color")]),e._v(" "),a("td",[a("code",[e._v("HSBType")])]),e._v(" "),a("td",[e._v("• "),a("code",[e._v("OnOffType")]),e._v(" - "),a("code",[e._v("OFF")]),e._v(" if the brightness level in the "),a("code",[e._v("HSBType")]),e._v(" equals 0, "),a("code",[e._v("ON")]),e._v(" otherwise "),a("br"),e._v(" • "),a("code",[e._v("PercentType")]),e._v(" - the value for the brightness level in the "),a("code",[e._v("HSBType")])])]),e._v(" "),a("tr",[a("td",[e._v("Dimmer")]),e._v(" "),a("td",[a("code",[e._v("PercentType")])]),e._v(" "),a("td",[a("code",[e._v("OnOffType")]),e._v(" - "),a("code",[e._v("OFF")]),e._v(" if the brightness level indicated by the percent type equals 0, "),a("code",[e._v("ON")]),e._v(" otherwise")])]),e._v(" "),a("tr",[a("td",[e._v("Rollershutter")]),e._v(" "),a("td",[a("code",[e._v("PercentType")])]),e._v(" "),a("td",[a("code",[e._v("UpDownType")]),e._v(" - "),a("code",[e._v("UP")]),e._v(" if the shutter level indicated by the percent type equals 0, "),a("code",[e._v("DOWN")]),e._v(" if it equals 100, and "),a("code",[e._v("UnDefType.UNDEF")]),e._v(" for any other value")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"item-metadata"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#item-metadata","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Metadata")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v('Switch MyFan "My Fan" { homekit="Fan.v2", alexa="Fan" [ type="oscillating", speedSteps=3 ] }\n')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The metadata can be maintained via a dedicated REST endpoint and is included in the "),t("code",[this._v("EnrichedItemDTO")]),this._v(" responses.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Extensions which can infer some metadata automatically need to implement and register a "),t("code",[this._v("MetadataProvider")]),this._v(" service in order to make them available to the system.\nThey may provision them from any source they like and also dynamically remove or add data.\nThey are also not restricted to a single namespace.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",[this._v("MetadataRegistry")]),this._v(" provides access for all extensions which need to read the Item metadata programmatically.\nIt is the central place where additional information about Items is kept.")])}],!1,null,null,null);t.default=r.exports}}]);