function Controller() {
    function getName(name) {
        var names = name.split("_");
        name = names[0] + "_" + Alloy.Globals.RESOLUCION_VIDEO;
        null != names[1] && (name = name + "_" + names[1]);
        return name;
    }
    function getPathVideo(type, path) {
        $.vp.sourceType = Titanium.Media.VIDEO_SOURCE_TYPE_STREAMING;
        $.vp.scalingMode = Titanium.Media.VIDEO_SCALING_ASPECT_FIT;
        $.vp.mediaControlStyle = Titanium.Media.VIDEO_CONTROL_DEFAULT;
        var name = getName(path);
        url = "vod" == type ? Alloy.Globals.URL_VOD + name + Alloy.Globals.URL_VOD_END + Alloy.Globals.URL_VIDEO_END : Alloy.Globals.URL_LIVE + name + Alloy.Globals.URL_VIDEO_END;
        return url;
    }
    function getUrlYoutube(video_id, vp) {
        vdldr = Ti.Network.createHTTPClient();
        vdldr.onload = function() {
            x = decodeURIComponent(decodeURIComponent(decodeURIComponent(decodeURIComponent(this.responseText.substring(4, this.responseText.length)))));
            y = JSON.parse(x).content.video["fmt_stream_map"][0].url;
            vp.url = y;
        };
        if ("android" != Ti.Platform.osname) {
            vdldr.setRequestHeader("Referer", "http://www.youtube.com/watch?v=" + video_id);
            vdldr.setRequestHeader("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/536.26.14 (KHTML, like Gecko) Version/6.0.1 Safari/536.26.14");
        }
        vdldr.open("GET", "http://m.youtube.com/watch?ajax=1&feature=related&layout=mobile&tsp=1&&v=" + video_id);
        if ("android" == Ti.Platform.osname) {
            vdldr.setRequestHeader("Referer", "http://www.youtube.com/watch?v=" + video_id);
            vdldr.setRequestHeader("User-Agent", "Mozilla/5.0 (Linux; U; Android 2.2.1; en-gb; GT-I9003 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1");
        }
        vdldr.send();
    }
    function openWindows(arg) {
        var win = Alloy.createController("viewListOfProfile", arg).getView();
        win.fullscreen = false;
        if ("android" == Ti.Platform.osname) win.open({
            activityEnterAnimation: Ti.Android.R.anim.fade_in,
            activityExitAnimation: Ti.Android.R.anim.fade_out
        }); else {
            var t = Ti.UI.iPhone.AnimationStyle.CURL_UP;
            win.open({
                transition: t
            });
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.viewProfile = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: Alloy.Globals.NAME_PAGE,
        id: "viewProfile"
    });
    $.__views.viewProfile && $.addTopLevelView($.__views.viewProfile);
    $.__views.activity = Ti.UI.createActivityIndicator({
        color: "#6cb1d5",
        font: {
            fontFamily: "Helvetica Neue",
            fontSize: 20,
            fontWeight: "bold"
        },
        message: "Loading...",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "activity"
    });
    $.__views.viewProfile.add($.__views.activity);
    $.__views.container = Ti.UI.createView({
        id: "container"
    });
    $.__views.viewProfile.add($.__views.container);
    $.__views.vp = Ti.Media.createVideoPlayer({
        top: "25dp",
        autoplay: true,
        backgroundColor: "black",
        height: "55%",
        width: "95%",
        id: "vp"
    });
    $.__views.container.add($.__views.vp);
    $.__views.data = Ti.UI.createView({
        top: "61%",
        height: "20%",
        id: "data"
    });
    $.__views.container.add($.__views.data);
    $.__views.author = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        },
        height: "auto",
        left: "5dp",
        top: "5dp",
        color: "#717777",
        id: "author"
    });
    $.__views.data.add($.__views.author);
    $.__views.views = Ti.UI.createLabel({
        font: {
            fontSize: "14dp"
        },
        height: "auto",
        left: "5dp",
        top: "45dp",
        color: "#717777",
        id: "views"
    });
    $.__views.data.add($.__views.views);
    $.__views.videos = Ti.UI.createLabel({
        font: {
            fontSize: "14dp"
        },
        height: "auto",
        left: "5dp",
        top: "65dp",
        color: "#717777",
        id: "videos"
    });
    $.__views.data.add($.__views.videos);
    $.__views.links = Ti.UI.createView({
        top: "80%",
        left: "0dp",
        height: "22dp",
        id: "links"
    });
    $.__views.container.add($.__views.links);
    $.__views.event = Ti.UI.createView({
        top: "0",
        left: "0dp",
        backgroundColor: "#f2f2f2",
        width: "32%",
        id: "event"
    });
    $.__views.links.add($.__views.event);
    $.__views.labelLink = Ti.UI.createLabel({
        font: {
            fontSize: "14dp",
            fontWeight: "bold"
        },
        height: "auto",
        top: "0dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "Upcoming",
        id: "labelLink"
    });
    $.__views.event.add($.__views.labelLink);
    $.__views.video = Ti.UI.createView({
        top: "0",
        left: "33%",
        backgroundColor: "#f2f2f2",
        width: "32%",
        id: "video"
    });
    $.__views.links.add($.__views.video);
    $.__views.labelLink = Ti.UI.createLabel({
        font: {
            fontSize: "14dp",
            fontWeight: "bold"
        },
        height: "auto",
        top: "0dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "Videos",
        id: "labelLink"
    });
    $.__views.video.add($.__views.labelLink);
    $.__views.campaign = Ti.UI.createView({
        top: "0",
        left: "66%",
        backgroundColor: "#f2f2f2",
        width: "32%",
        id: "campaign"
    });
    $.__views.links.add($.__views.campaign);
    $.__views.labelLink = Ti.UI.createLabel({
        font: {
            fontSize: "14dp",
            fontWeight: "bold"
        },
        height: "auto",
        top: "0dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        text: "Campaigns",
        id: "labelLink"
    });
    $.__views.campaign.add($.__views.labelLink);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var id = arguments[0] || {};
    if ("android" == Ti.Platform.osname) {
        var actionBar;
        $.viewProfile.addEventListener("open", function() {
            if ($.viewProfile.activity) {
                actionBar = $.viewProfile.activity.actionBar;
                if (actionBar) {
                    actionBar.backgroundImage = "/bg.png";
                    actionBar.title = Alloy.Globals.NAME_PAGE + " - Artist";
                    actionBar.displayHomeAsUp = true;
                    actionBar.onHomeIconItemSelected = function() {
                        $.vp.hide();
                        $.vp.release();
                        $.vp = null;
                        $.viewProfile.close();
                    };
                }
            } else Ti.API.error("Can't access action bar on a lightweight window.");
        });
    } else {
        var backArrow = Ti.UI.createLabel({
            color: "Gray",
            text: "◃"
        });
        $.backArrow.add(backArrow);
    }
    Ti.Gesture.addEventListener("orientationchange", function() {
        var orientation = Ti.Gesture.orientation;
        (3 === orientation || 4 === orientation) && ($.vp.fullscreen = true);
        (1 === orientation || 2 === orientation) && ($.vp.fullscreen = false);
    });
    var client = Ti.Network.createHTTPClient();
    var url = Alloy.Globals.DOMAIN + Alloy.Globals.URL_PROFILE;
    client.open("POST", url);
    client.ondatastream = function() {
        $.activity.show();
    };
    client.onload = function() {
        var json = this.responseText;
        var responses = JSON.parse(json);
        var url = "";
        if ("vod" == responses.type || "live" == responses.type) {
            url = getPathVideo(responses.type, responses.path);
            $.vp.url = url;
        } else url = getUrlYoutube(responses.video_id, $.vp);
        $.author.text = responses.name;
        $.videos.text = responses.num_videos + " videos publised.";
        $.views.text = responses.views;
        $.activity.hide();
        $.event.addEventListener("click", function() {
            var args = {
                author: responses.creator,
                view: "Events"
            };
            openWindows(args);
        });
        $.video.addEventListener("click", function() {
            var args = {
                author: responses.creator,
                view: "Videos"
            };
            openWindows(args);
        });
        $.campaign.addEventListener("click", function() {
            var args = {
                author: responses.creator,
                view: "Campaigns"
            };
            openWindows(args);
        });
    };
    client.onerror = function(e) {
        alert("Transmission error: " + e.error);
    };
    var params = {
        item_id: id,
        tc: Alloy.Globals.USER_MOBILE.toString()
    };
    client.send(params);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;