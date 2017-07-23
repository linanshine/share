window.webtrendsAsyncInit=function(){ 
	var dcs=new Webtrends.dcs().init({ 
		dcsid:"webtrends",
		domain:"www.sn.10086.cn", 
		timezone:8, 
		i18n:true, 
		fpcdom:".10086.cn", 
		fpc:"WT_FPC",
		metanames: "",
		paidsearchparams: "gclid,ad_id",
		adimpressions:true,
		adsparam:"WT.ac",
		dcsdelay: 8000,
		plugins:{ 
		} 
	});
	
	dcs.track();
};

(function(){ 
var s=document.createElement("script"); s.async=true; s.src="../public/js/webtrend/webtrends.min.js";
var s2=document.getElementsByTagName("script")[0]; s2.parentNode.insertBefore(s,s2); 
}()); 


