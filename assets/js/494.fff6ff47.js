(window.webpackJsonp=window.webpackJsonp||[]).push([[494],{940:function(e,t,r){"use strict";r.r(t);var s=r(1),n=Object(s.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"influxdb-0-9-and-newer-persistence"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#influxdb-0-9-and-newer-persistence","aria-hidden":"true"}},[e._v("#")]),e._v(" InfluxDB (0.9 and newer) Persistence "),r("Badge",{attrs:{type:"warn",text:"v1"}})],1),e._v(" "),r("AddonLogo"),e._v(" "),r("p",[e._v("This service allows you to persist and query states using the "),r("a",{attrs:{href:"http://influxdb.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("InfluxDB"),r("OutboundLink")],1),e._v(" time series database. The persisted values can be queried from within openHAB. There also are nice tools on the web for visualizing InfluxDB time series, such as "),r("a",{attrs:{href:"http://grafana.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Grafana"),r("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),r("p",[e._v('An example entry for an item with the name "AmbientLight" would look like this:')]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),r("p",[e._v("First of all you have to setup and run an InfluxDB server. This is very easy and you will find good documentation on it on the "),r("a",{attrs:{href:"https://docs.influxdata.com/influxdb/v1.7/",target:"_blank",rel:"noopener noreferrer"}},[e._v("InfluxDB web site"),r("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),r("table",[e._m(8),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("url")]),e._v(" "),r("td",[r("a",{attrs:{href:"http://127.0.0.1:8086",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://127.0.0.1:8086"),r("OutboundLink")],1)]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("No")]),e._v(" "),r("td",[e._v("database URL")])]),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12)])]),e._v(" "),e._m(13),e._v(" "),r("DocPreviousVersions"),e._v(" "),r("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("There are two Influxdb persistence bundles which support different InfluxDB versions.  This service, named "),t("code",[this._v("influxdb")]),this._v(", supports InfluxDB 0.9 and newer, and the "),t("code",[this._v("influxdb08")]),this._v(" service supports InfluxDB up to version 0.8.x.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"database-structure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#database-structure","aria-hidden":"true"}},[this._v("#")]),this._v(" Database Structure")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('The states of an item are persisted in time series with names equal to the name of the item.  All values are stored in a field called "value" using integers or doubles, '),t("code",[this._v("OnOffType")]),this._v(" and "),t("code",[this._v("OpenClosedType")]),this._v(" values are stored using 0 or 1. The times for the entries are calculated by InfluxDB.")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[e._v("time")]),e._v(" "),r("th",[e._v("sequence_number")]),e._v(" "),r("th",[e._v("value")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("1402243200072")]),e._v(" "),r("td",[e._v("79370001")]),e._v(" "),r("td",[e._v("6")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Then database and the user must be created. This can be done using the InfluxDB admin web interface. If you want to use the defaults, then create a database called "),t("code",[this._v("openhab")]),this._v(" and a user with write access on the database called "),t("code",[this._v("openhab")]),this._v(". Choose a password and remember it.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This service can be configured in the file "),t("code",[this._v("services/influxdb.cfg")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",[this._v("Property")]),this._v(" "),t("th",[this._v("Default")]),this._v(" "),t("th",{staticStyle:{"text-align":"center"}},[this._v("Required")]),this._v(" "),t("th",[this._v("Description")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("tr",[r("td",[e._v("user")]),e._v(" "),r("td",[e._v("openhab")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("No")]),e._v(" "),r("td",[e._v("name of the database user, e.g. "),r("code",[e._v("openhab")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("tr",[r("td",[e._v("password")]),e._v(" "),r("td"),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("Yes")]),e._v(" "),r("td",[e._v("password of the database user that you chose in "),r("a",{attrs:{href:"#prerequisites"}},[e._v("Prerequisites")]),e._v(" above")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[this._v("db")]),this._v(" "),t("td",[this._v("openhab")]),this._v(" "),t("td",{staticStyle:{"text-align":"center"}},[this._v("No")]),this._v(" "),t("td",[this._v("name of the database")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("tr",[r("td",[e._v("retentionPolicy")]),e._v(" "),r("td",[e._v("autogen")]),e._v(" "),r("td",{staticStyle:{"text-align":"center"}},[e._v("No")]),e._v(" "),r("td",[e._v("name of the retentionPolicy. Please note starting with InfluxDB >= 1.0, the default retention policy name is no longer "),r("code",[e._v("default")]),e._v(" but "),r("code",[e._v("autogen")]),e._v(".")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("All item- and event-related configuration is defined in the file "),t("code",[this._v("persistence/influxdb.persist")]),this._v(".")])}],!1,null,null,null);t.default=n.exports}}]);