var red = '#900A05';
var brightred = '#B00C07';
var black = '#000000';
var gray = '#888888';
var width = (Ti.Platform.displayCaps.platformWidth-30)/2;
var height = (Ti.Platform.displayCaps.platformWidth-30)/4;

var actionBar;
$.index.addEventListener("open", function() {
    
        if (! $.index.activity) {
            Ti.API.error("Can't access action bar on a lightweight window.");
        } else {
            actionBar = $.index.activity.actionBar;
            if (actionBar) {
               actionBar.hide();
            }
        }
    
});

$.liveShows.addEventListener('click', function (e) { 
	var win = Alloy.createController('feed', 1).getView();
	
	win.open(); 
	});
	
$.Campaigns.addEventListener('click', function (e) { 
	var win = Alloy.createController('feed', 2).getView();
	win.open(); 
	});
	
$.upcomingEvents.addEventListener('click', function (e) { 
	var win = Alloy.createController('feed', 3).getView();
	win.open(); 
	});

$.artists.addEventListener('click', function (e) { 
	var win = Alloy.createController('feed', 4).getView();
	win.open(); 
	});
	
$.overlay.setBackgroundGradient({
    
        type: 'linear',
        startPoint: { x: '50%', y: '0%' },
        endPoint: { x: '50%', y: '100%' },
        colors: [ { color: '#282139', offset: 0.25}, { color: '#534377', offset: 0.45 }, { color: '#745DA8', offset: 0.6 } ],
    
});	


$.index.open();