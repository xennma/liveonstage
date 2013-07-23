function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.tabs = Ti.UI.createView({
        id: "tabs"
    });
    $.__views.tabs && $.addTopLevelView($.__views.tabs);
    $.__views.browse = Ti.UI.createView({
        bottom: "0dp",
        left: "0dp",
        width: "33%",
        backgroundColor: "#f5f5f5",
        height: "100%",
        id: "browse"
    });
    $.__views.tabs.add($.__views.browse);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        textAlign: "center",
        color: "#000000",
        font: {
            fontSize: 10,
            fontFamily: "Helvetica Neue"
        },
        bottom: "0dp",
        text: "Browse",
        id: "__alloyId8"
    });
    $.__views.browse.add($.__views.__alloyId8);
    $.__views.artist = Ti.UI.createView({
        bottom: "0dp",
        left: "33%",
        width: "33%",
        backgroundColor: "#f5f5f5",
        height: "100%",
        id: "artist"
    });
    $.__views.tabs.add($.__views.artist);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        textAlign: "center",
        color: "#000000",
        font: {
            fontSize: 10,
            fontFamily: "Helvetica Neue"
        },
        bottom: "0dp",
        text: "Artist Search",
        id: "__alloyId9"
    });
    $.__views.artist.add($.__views.__alloyId9);
    $.__views.stage = Ti.UI.createView({
        bottom: "0dp",
        width: "33%",
        left: "66%",
        backgroundColor: "#f5f5f5",
        height: "100%",
        id: "stage"
    });
    $.__views.tabs.add($.__views.stage);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        textAlign: "center",
        color: "#000000",
        font: {
            fontSize: 10,
            fontFamily: "Helvetica Neue"
        },
        bottom: "0dp",
        text: "My Stage",
        id: "__alloyId10"
    });
    $.__views.stage.add($.__views.__alloyId10);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.artist.addEventListener("click", function() {
        var win = Alloy.createController("feed").getView();
        win.open();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;