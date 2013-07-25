var args = arguments[0] || {};
$.title.text = args.name || '';
$.title.link = args.link


var isTablet = (width > 899 || height > 899);
var deviceHeight = Ti.Platform.displayCaps.platformHeight;
var deviceWidth = Ti.Platform.displayCaps.platformWidth;

var height = 360;
$.container.height = height+'dp';
$.container.top = (height * args.row)+'dp';


var imageLink = Alloy.Globals.DOMAIN + Alloy.Globals.IMAGE_EVENT_DEFAULT;
if(args.image != null)
{
	imageLink = args.image;
	if(imageLink.substring(0,4) != 'http')
	{
		imageLink = Alloy.Globals.DOMAIN + imageLink;
	}
};

$.cover.image = imageLink;
$.cover.touchEnabled = false;

var pB=Titanium.UI.createProgressBar({
    top:0,
    width:'90%',
    height:'auto',
    min:0,
    max:10,
    value:4,
    color:'#000',
    font:{fontSize:14, fontWeight:'bold'},
    style:Titanium.UI.iPhone.ProgressBarStyle.PLAIN,
});
$.progressBar.add(pB);
pB.show();
$.accomplished.text = '$' + args.received + ' Pledged';
$.days.text = args.days + ' Days to go';
$.percentage.text = args.percent + ' % Funded';
//The cover view
	var shadowTop="0dp"
	if(Ti.Platform=='android'){shadowTop="7dp"}
	var theImageShadow=Ti.UI.createImageView({
		image:"/videoCover.png",
		top:shadowTop,
		left: 0,
		touchEnabled:false,
		width:'100%',
		height: '100%',
		zIndex: 5
	});
	
		$.videocover.add(theImageShadow);
	
$.videocover.addEventListener('click', function(e){
	var win = Alloy.createController('viewCampaign', args.link).getView();	
	if(Ti.Platform.osname == 'android')
	{
		win.fullscreen= false;
		win.open({
		        activityEnterAnimation: Ti.Android.R.anim.fade_in,
		        activityExitAnimation: Ti.Android.R.anim.fade_out
		    });	
	} else {
		var t = Ti.UI.iPhone.AnimationStyle.CURL_UP;
		win.open({transition:t});
	}
});		