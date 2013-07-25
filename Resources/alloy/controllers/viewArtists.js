function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.container = Ti.UI.createView({
        left: "3%",
        width: "94%",
        id: "container"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    $.__views.tile = Ti.UI.createView({
        width: "100%",
        left: 0,
        top: "2%",
        height: "96%",
        backgroundColor: "white",
        borderRadius: 4,
        borderWidth: .5,
        borderColor: "#c3c3c3",
        id: "tile"
    });
    $.__views.container.add($.__views.tile);
    $.__views.videocover = Ti.UI.createView({
        width: "100%",
        height: "67%",
        top: 0,
        borderRadius: 4,
        left: 0,
        zIndex: 1,
        id: "videocover"
    });
    $.__views.tile.add($.__views.videocover);
    $.__views.cover = Ti.UI.createImageView({
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        id: "cover"
    });
    $.__views.videocover.add($.__views.cover);
    $.__views.videoinfo = Ti.UI.createView({
        width: "100%",
        height: "34%",
        top: "66%",
        left: 0,
        backgroundColor: "white",
        zIndex: 10,
        id: "videoinfo"
    });
    $.__views.tile.add($.__views.videoinfo);
    $.__views.title = Ti.UI.createLabel({
        top: "2%",
        height: "60%",
        textAlign: "center",
        font: {
            fontSize: 14
        },
        id: "title"
    });
    $.__views.videoinfo.add($.__views.title);
    $.__views.progressBar = Ti.UI.createView({
        top: "62%",
        height: "5%",
        id: "progressBar"
    });
    $.__views.videoinfo.add($.__views.progressBar);
    $.__views.progressInfo = Ti.UI.createView({
        top: "67%",
        height: "33%",
        width: "90%",
        font: {
            fontSize: 11
        },
        id: "progressInfo"
    });
    $.__views.videoinfo.add($.__views.progressInfo);
    $.__views.accomplished = Ti.UI.createLabel({
        top: "10%",
        height: "100%",
        width: "30%",
        color: "gray",
        font: {
            fontSize: 11
        },
        textAlign: "left",
        left: "3%",
        id: "accomplished"
    });
    $.__views.progressInfo.add($.__views.accomplished);
    $.__views.percentage = Ti.UI.createLabel({
        top: "10%",
        height: "100%",
        width: "33%",
        color: "gray",
        font: {
            fontSize: 11
        },
        textAlign: "center",
        left: "33%",
        id: "percentage"
    });
    $.__views.progressInfo.add($.__views.percentage);
    $.__views.days = Ti.UI.createLabel({
        top: "10%",
        height: "100%",
        width: "32%",
        color: "gray",
        font: {
            fontSize: 11
        },
        textAlign: "right",
        left: "66%",
        id: "days"
    });
    $.__views.progressInfo.add($.__views.days);
    $.__views.videos = Ti.UI.createLabel({
        top: "10%",
        font: {
            fontSize: 11
        },
        height: "100%",
        color: "gray",
        left: "3%",
        id: "videos"
    });
    $.__views.videoinfo.add($.__views.videos);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.title.text = args.name || "";
    Ti.Platform.displayCaps.platformHeight;
    Ti.Platform.displayCaps.platformWidth;
    var height = 360;
    $.container.height = height + "dp";
    $.container.top = height * args.row + "dp";
    var imageLink = Alloy.Globals.DOMAIN + Alloy.Globals.IMAGE_EVENT_DEFAULT;
    if (null != args.image) {
        imageLink = args.image;
        "http" != imageLink.substring(0, 4) && (imageLink = Alloy.Globals.DOMAIN + imageLink);
    }
    $.cover.image = imageLink;
    if (null != args.campaing) {
        var pB = Titanium.UI.createProgressBar({
            top: 0,
            width: "90%",
            height: "auto",
            min: 0,
            max: 10,
            value: 4,
            color: "#000",
            font: {
                fontSize: 14,
                fontWeight: "bold"
            },
            style: Titanium.UI.iPhone.ProgressBarStyle.PLAIN
        });
        $.progressBar.add(pB);
        pB.show();
        $.accomplished.text = "$" + args.received + " Pledged";
        $.days.text = args.days + " Days to go";
        $.percentage.text = args.percent + " % Funded";
    } else $.videos.text = args.videos + " videos publised.";
    $.videocover.addEventListener("click", function() {
        var win = Alloy.createController("viewProfile", args.link).getView();
        if ("android" == Ti.Platform.osname) {
            win.fullscreen = false;
            win.open({
                activityEnterAnimation: Ti.Android.R.anim.fade_in,
                activityExitAnimation: Ti.Android.R.anim.fade_out
            });
        } else {
            var t = Ti.UI.iPhone.AnimationStyle.CURL_UP;
            win.open({
                transition: t
            });
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;