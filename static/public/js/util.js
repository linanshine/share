/**
 * 公共的js
 */
const util=
{
	/**
	 * 访问接口的前缀
	 * 外网https访问地址：https://sn.clientaccess.10086.cn/html5/indivbusi/
	 * http访问地址：http://10.131.20.32:8088/indivbusi/
     */
    //hostport:"https://sn.clientaccess.10086.cn/html5/indivbusi/",
    // hostport:"http://10.131.20.114:8081/indivbusi/",
    //hostport:"http://10.131.20.126:8080/indivbusi/",
    hostport:"http://10.131.20.32:8088/indivbusi/",



    /**
     * 根据传过来的字符串返回时间格式的字符串：年月日时分秒
     * 201410101224,如果大于13位就显示秒，小于13位就不显示秒
     * return 2014-10-10 12:24
     */
    getDateString:function(da)
    {
    	var year=da.substring(0,4);
		var month=da.substring(4,6);
		var day=da.substring(6,8);
		var hour=da.substring(8,10);
		var minute=da.substring(10,12);
		var ordertime="";
		if(da.length>13)
		{
			var ss=da.substring(12,14);
			ordertime=year+"-"+month+"-"+day+"  "+hour+":"+minute+":"+ss;
		}
		else
		{
			ordertime=year+"-"+month+"-"+day+"  "+hour+":"+minute;
		}
		return ordertime;
    },
    /**
	* 小数点后两位处理办法
	* @param mon
	* eg1：mon = 50 return 50.00；
	* eg2 ：mon = 50.000 return 50.00
	*/
    floating: function (mon) {
        var mon = Math.floor(mon * 1000) / 1000;
        var sMon = String(mon);//把数字类型转换成字符串类型
        var demical = sMon.indexOf(".");//取得小数点号的位置
        if (demical > 0) {
            var subb = sMon.substring(0, demical + 3);//取开始位置到小数点后2位
            mon = (Number(subb));//转换成数字
        }
        mon = mon.toFixed(2);
        return mon;
    },
    /**
     * js获取项目根路径，如： http://localhost:8080/leadeon-cmcc-static
     */
    getRootPath:function()
    {
    	var hrefs=window.document.location.href;//得到地址的地址
    	var pos=hrefs.indexOf(window.document.location.pathname);
    	var localhostPaht=hrefs.substring(0,pos);
    	//获取主机地址之后的目录，如：leadeon-cmcc-static/v2.0/js/public/util.js
    	var pathName=window.document.location.pathname;
    	//获取带"/"的项目名，如：/leadeon-cmcc-static
    	var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);
    	return localhostPaht+projectName;
    },
    /**
     * 对ajax中data中的数据封装
     * @param objJson 手机客户端json对象
     * @param objPam reqBody里面的json对象
     */
    getAjaxData:function(objJson,objPam)
    {
    	return JSON.stringify({"cid":objJson.cid,
		"sn":objJson.sn,
		"cv":objJson.version,
		"sv":objJson.sv,
		"os":objJson.osType,
		"token":objJson.token,
		"phoneNum":objJson.phoneNumber,
		"reqBody":objPam});
    },
	/**
	 * 对ajax中data中的数据封装
	 * @param objJson 手机客户端json对象
	 * @param objPam reqBody里面的json对象
	 */
	getAjaxData_1:function(objJson,objPam)
	{
		var cid = !!objJson.CID ? objJson.CID : objJson.cid;
		var en = !!objJson.EN? objJson.EN : objJson.en;
		var t = !!objJson.TOKEN? objJson.TOKEN : objJson.token;
		var sn = !!objJson.SN ? objJson.SN : objJson.sn;
		var cv = !!objJson.VERSION ? objJson.VERSION : objJson.version;
		var st = !!objJson.ST ? objJson.ST : objJson.st;
		var sv = !!objJson.SV ? objJson.SV : objJson.sv;
		var sp = !!objJson.SP ? objJson.SP : objJson.sp;
		var xk = !!objJson.XK ? objJson.XK : objJson.xk;
		var xc = !!objJson.CHANNEL ? objJson.CHANNEL : objJson.channel;
		var imei=!!objJson.imei? objJson.imei:"";
		var nt=!!objJson.nt? objJson.nt:"";
		var sb=!!objJson.sb? objJson.sb:"";
		var prov=!!objJson.PROVINCE? objJson.PROVINCE:objJson.province;
		var city=!!objJson.CITY? objJson.CITY:objJson.city;
		var tel=!!objJson.USERPHONENUM? objJson.USERPHONENUM:objJson.phoneNumber;
		return JSON.stringify({
			"cid": cid,
			"en": en,
			"t": t,
			"sn": sn,
			"cv": cv,
			"st": st,
			"sv": sv,
			"sp": sp,
			"xk": xk,
			"xc":xc,
			"imei":imei,
			"nt":nt,
			"sb":sb,
			"prov":prov,
			"city":city,
			"tel":tel,
			"reqBody": objPam
		});
	},
    /**
     * 加载层
     */
 	showLoadPlug:function(isRemove){
 		if("undefined" == typeof ($(".load-plug").attr("id")) || undefined == $(".load-plug").attr("id")){ //加载层不存在
	    	var row = "<div class='load-plug' id='load-plug'><div class='o-wrap'><div class='o-lay'><div class='loading'></div>";
	    		row += "</div></div></div>";
	    	$("body").append(row);
			$(".load-plug").unbind(); //移除点击事件
			if(isRemove === true || isRemove === ""){
				$(".load-plug").unbind(); //移除点击事件
				$(".load-plug").on("click",function(){  //移除加载层
					$(this).remove();
				});
			}
    	}
 	 },
    /**
     * 关闭加载层(调用html5)
     */
    closeLoadPlug:function(){
		if("undefined" != typeof ($(".load-plug").attr("id")) && undefined != $(".load-plug").attr("id")){ //加载层存在

			$(".load-plug").remove();
		}
    },
    /**
     * 展示信息提示弹出框(调用html5)
     * @param msg 提示信息
     * @param bt 按钮上的文字
     */
    showDialogPlug:function(msg,bt){
    	window.scrollTo(0, 0);
    	if("undefined"  == typeof ($(".dialog-plug").attr("id")) || undefined == $(".dialog-plug").attr("id")){  //提示框不存在
	    	var row = "<div class='dialog-plug' id='dialog-plug'><div class='d-wrap'><div class='d-lay'><div class='d-con'>"
	    		    + "<p class='d-tex bor-bot'>" + msg + "</p><p class='d-btn'>" + bt + "</p></div></div></div></div>";
			$("body").append(row);
			$(".dialog-plug .d-btn").unbind();  //移除点击事件
			$(".dialog-plug .d-btn").click(function(e){  //移除加载层
//				alert(msg)
	        	$(".dialog-plug").remove();
	        	e.preventDefault();
	        });
    	}
    	else{
    		$(".dialog-plug .d-tex").html(msg);
    		$(".dialog-plug .d-btn").html(bt);
    	}
    },
	/**
	 * 展示信息提示弹出框(调用html5)
	 * @param msg 提示信息
	 * @param bt 按钮上的文字
	 * @param confirm1 按钮js事件名字
	 */
	showDialogConfirm:function(msg,bt,confirm1){

		if("undefined"  == typeof ($(".dialog-plug").attr("id")) || undefined == $(".dialog-plug").attr("id")){  //提示框不存在
			var row = "<div class='dialog-plug' id='dialog-plug'><div class='d-wrap'><div class='d-lay'><div class='d-con'>"
				+ "<p class='d-tex bor-bot'>" + msg + "</p><p class='d-btn'>" + bt + "</p></div></div></div></div>";
			$("body").append(row);
			$(".dialog-plug .d-btn").unbind();  //移除点击事件
			$(".dialog-plug .d-btn").click(function(e){  //移除加载层
				confirm(confirm1);
			});
		}
		else{
			$(".dialog-plug .d-tex").html(msg);
			$(".dialog-plug .d-btn").html(bt);
		}

		//通用的部分,confirmS方法名字
		function confirm(confirmS){
			if("delete"==confirmS||null==confirmS||""==confirmS){
				$(".dialog-plug").remove();
				$(".dialog-plug .d-btn").unbind();
			}
			else{
				$(".dialog-plug").remove();
				$(".dialog-plug .d-btn").unbind();
				confirmS();//执行js方法
			}
		}
	},
    /**
     * toast信息提示
     * @param {Object} msg 提示信息
     * @param {Object} time 设置显示时长  单位为毫秒
     */
    toastPlug:function(msg,time){
    	if("undefined"  == typeof ($(".toast").attr("id")) || undefined == $(".toast").attr("id")){  //提示框不存在
	    	var row = "<div class='toast' id='toast' style='width: 100%; position: fixed; bottom: 80px; text-align: center;'>";
				row +="<p id='toa-text' style='color:#FFFFFF;background-color:rgba(0,0,0,0.6); display: inline-block; margin: auto; border-radius: 3px; padding: 8px 10px;'>"+msg+"</p>";
				row += "</div>";
			$("body").append(row);
			setTimeout(function () {
	            $(".toast").remove();
	        }, time);
    	}
    	else{
    		  $("#toa-text").html(msg);
    		  setTimeout(function () {
	            $(".toast").remove();
	          }, time);
    	}
    },
    /**
     * 确认和取消插件
     * @param {Object} param1 左边按钮文字
     * @param {Object} param2 右边按钮文字
     * @param {Object} inform 提示信息
     * @param {Object} confirm1 左边按钮js事件名字
     * @param {Object} confirm2 右边按钮js事件名字
     */
    confirmPlug:function(param1,param2,inform,confirm1,confirm2){
		window.scrollTo(0, 0);
		var row ="<div id='confirmPlug' style='position: fixed;top: 0;z-index: 1001;width: 100%;height:100%;background-color:rgba(0,0,0,0.5);color:#333333;font-size:14px;'>";
			row += "<div style='width: 100%;height: 100%;display:table;'>";
			row += "<div style='vertical-align:middle; display:table-cell;'>";
			row += "<div id='inform' style='background-color: #FFFFFF; width: 280px; margin: auto; border-radius: 3px;word-wrap:break-word;word-break:break-all'>";
			row += "<p style='padding: 12px; border-bottom: 1px solid #EBEBEB;'>" + inform + "</p>";
			row += "<div style='width: 100%; color: #0085CF;'>";
			row += "<div style='float:left;width: 50%; text-align: center; margin-left: -1px;' id='c-left'><p style='padding: 12px 0;'>"+ param1 +"</p></div>";
			row += "<div style='float:left;width: 50%; text-align: center; border-left: 1px solid #EBEBEB;' id='c-right'><p style='padding: 12px 0;'>" + param2 + "</p></div>";
			row += "<div style='clear: both;'></div>";
			row += "</div></div></div></div></div>";
		if(!!$("#confirmPlug"))
		{
			$("#confirmPlug").remove();
			$("#c-left").unbind();
			$("#c-right").unbind();
		}
		$("body").append(row);
		 $("#c-left").click(function(e){ //点击左边按钮事件
		 	 confirm(confirm1);
		 });
		 $("#c-right").click(function(e){ //点击右边按钮事件
		 	 confirm(confirm2);
		 });
		 //通用的部分,confirmS方法名字
		 function confirm(confirmS){
		 	if("delete"==confirmS||null==confirmS||""==confirmS){
		   	 	$("#confirmPlug").remove();
		   	 	$("#c-left").unbind();
				$("#c-right").unbind();
		   	 }
		   	 else{
		   	 	$("#confirmPlug").remove();
		   	 	$("#c-left").unbind();
				$("#c-right").unbind();
		   	 	confirmS();//执行js方法

		   	 }
		 }

    },
  	/**
  	*判断客户端是iOS还是Android等移动终端
  	*/
  	versions:function(){
        var u = navigator.userAgent;
        return {
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios系统
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或系统
            wp:u.indexOf('IEMobile') > -1,//Windows Phone系统
            iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
            Safari:u.indexOf("Safari") > -1,//判断是否Safari浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') > -1 //是否web应该程序，没有头部与底部
        };
  	}(),
  	/**
  	 * js去除字符串内所有的空格
  	 */
  	removeSpace:function(obj)
  	{
  		if(null!=obj)
  		{
  			return obj.replace(/\s/ig,"");
  		}
  		else
  		{
  			return "";
  		}
  	},

    // 获取uid
	getUid: function(token) {
	    return token.match(/UID=\w+/g)[0];
	},

  	/**
	 * 截取url字符串
	 * @param {Object} name
	 */
	getQueryString:function(name)
	{
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if (null !=r ) return decodeURIComponent(r[2]); return null;
	},
	/**
	 * 对url进行解码
	 * @param {Object} url
	 * return 返回json对象
	 */
	curParam:function(url){
    	//对url进行解码
    	url = decodeURI(url);
    	var obj = new Object();
    	var paramStr =url.substring(url.indexOf("?")+1,url.length);
    	var paramArr = paramStr.split("&");
    	for(var i=0 ; i< paramArr.length ; i++){
    		var objArr = paramArr[i].split("=");
    		obj[$.trim(objArr[0])] = objArr[1] ? objArr[1] : "";
    	}
    	return obj;
   },
   /**
    * 序列化json为参数
    * <desc> 将json对象序列化为http get参数  </desc>
    * <desc> {"a":"123","b":"456"} 序列化为 a=123&b=456</desc>
    * @param {Object} jsonObject
    */
   serializeJson:function(jsonObject){
   		var str = "";
   		for(var name in jsonObject){
   			str += "&"+name+"="+ ((jsonObject[name])?jsonObject[name]:"");
   		}
   		if(null != str && "" != str){
	   		str = str.substring(1,str.length);
   		}
   		return str;
   },

   /**
    * 判断请求返回的状态码是否是session失效
    * 如果返回true，则需要调用util.repeatLogon();
    * 返回false，则各业务自己处理
    * @param {Object} retCode
    */
   sessionFailure:function(retCode){
   		var flag =false;
   		//以4开头的六位数字，即为会话失败
   		if(/^4\d{5}$/.test(retCode)){
   			flag = true;
   		}
   		return flag;
   },
   /**
    * 判断会话是否失效，如果失效跳转登陆，不失效提示信息
    * @param {Object} data 后台返回的json数据
    * @param {Object} btn 按钮的文字信息
    */
   sessionFailurePrompt:function(data,btn){
   		util.closeLoadPlug();//关闭加载
   		var flag =false;
   		//以4开头的六位数字，即为会话失败
   		if(/^4\d{5}$/.test(data.retCode)){
   			flag = true;
   		}
   		if(flag)
		{//先判断是否为会话校验失败
			util.repeatLogon();
		}
		else if("1"==data.retCode.substring(1,2))
		{//如果第二位是1就弹窗提示
			util.showDialogPlug(data.retDesc,btn?btn:"知道了");
		}
		else if("2"==data.retCode.substring(1,2))
		{//如果第二位是2就toast提示
			util.toastPlug(data.retDesc,3000);
		}
		else {
			util.showDialogPlug(data.retDesc,btn?btn:"知道了");
		}
   },
      /**
    * 获取历史记录
    * @param {Object} name  本地存储变量名称
    * @param {Object} amount  存储数目
    */
   getHistory:function(name,amount){
   		if (window.localStorage)//如果支持本地存储
        {

        	var his = localStorage.getItem(name);
//      	alert("getHistory="+his);
            if ( null != his && "" != his.trim())
            {//如果数据不为空
                var hisList = his.split("-");
                if (hisList.length > amount)
                {

                    var tt = hisList.length - amount;
                    for (var i = 0; i < tt; i++)
                    {
                        hisList.splice(0, 1);//移除数组前面多余的内容
                    }
                    for (var i = 0; i < hisList.length; i++)
                    {
                        if (i == 0)
                        {
                            his = hisList[i];
                        }
                        else
                        {
                            his = his + "-" + hisList[i];
                        }
                    }
                    localStorage.setItem(name, his);//把移除了多余的历史记录的手机号存储到本地
                }
                hisList.reverse();//倒序
                return hisList;
            }
            else
            {
                return null;
            }
        }
        else
        {
            return null;
        }
   },
   /**
    * 设置历史
    * @param {Object} name  定义变量名称
    * @param {Object} cont  历史内容
    */
   setHistory:function(name,cont){

        if (window.localStorage) {	//如果支持本地存储
            var his = "";      //历史记录的字符串
            var hisList = util.getHistory(name);    //获取历史记录集合
            if (null != hisList && 0 < hisList.length)
            { //如果号码历史记录不为null，则将历史内容去重复后添加至尾部；否则将直接存储。
                var tempHisList = new Array();
                for (var i = 0 ; i < hisList.length ; i++)
                {
                    if (hisList[i] != cont)
					{               //如果存储内容在历史记录中不存在，则添加到临时数组中
                        tempHisList.push(hisList[i]);
                    }
                }
                tempHisList.reverse(); 			//进行倒序排序，因为获取到的hisList是倒序排序后的集合。
                tempHisList.push(cont); 		//将当前号码添加到集合尾部
                his = tempHisList.join("-");     //用‘-’连接号码
            }
            else
            {
                his = cont; //直接存储
            }
            localStorage.setItem(name, his);   //本地存储
        }
   },
   /**
    * 插码
    * @param {Object} objJson 手机客户端json对象
    * @param {String} objID 当前点击元素的id
    * @param {Object} objADD 新增的json对象
    */
   setWebtrends:function(objJson,objID,objADD)
   {
		try{
			//代码兼容
			var cid="undefined"==(typeof objJson.CID)?objJson.cid:objJson.CID;
	    	var cv="undefined"==(typeof objJson.VERSION)?objJson.version:objJson.VERSION;
	    	var channel="undefined"==(typeof objJson.CHANNEL)?objJson.channel:objJson.CHANNEL;
   			var province="undefined"==(typeof objJson.PROVINCE)?objJson.province:objJson.PROVINCE;
   			var city="undefined"==(typeof objJson.CITY)?objJson.city:objJson.CITY;
   			var userphonenum="undefined"==(typeof objJson.USERPHONENUM)?objJson.userphonenum:objJson.USERPHONENUM;
   			var osType="undefined"==(typeof objJson.OSTYPE)?objJson.osType:objJson.OSTYPE;
   			if (!!objJson.ostype) {
				osType = objJson.ostype
			}
   			if(undefined!=channel&&""!=channel&&"web"!=channel)
	   		{
	   			var av="APP_"+osType+"_v"+cv;
	   			var argsSet={"WT.cid":cid,"WT.prov":province,"WT.city":city,"WT.mobile":userphonenum,"WT.channel":channel,"WT.aav":cv,"WT.av":av,"WT.event":objID};
	   			if(undefined!=objADD&&""!=objADD)
	   			{
	   				for(var key in objADD)
	   				{
	   					argsSet[key]=objADD[key];
	   				}
	   			}
	   			Webtrends.multiTrack({args:argsSet});
	   		}
	   		else
	   		{
	   			if(util.versions.mobile)
	   			{
	   				channel="web";
	   			}
	   			else
	   			{
	   				channel="pc";
	   			}
	   			//如果渠道号是web说明是在浏览器中，和杨杰协商的
	   			var argsSet={"WT.channel":channel,"WT.event":objID};
	   			Webtrends.multiTrack({args:argsSet});
	   		}
   		}catch(e){}
   },
	/**
	 * 广告点击量统计
	 * @param {Object} data  数组 data = [adverType，adverLocation，markId]
	 * @param {Object} jsons 获取的用户信息
	 */
	printLog: function(data,jsons) {
		var userphonenum="undefined"==(typeof jsons.USERPHONENUM)?jsons.userphonenum:jsons.USERPHONENUM;
		var cv="undefined"==(typeof jsons.VERSION)?jsons.version:jsons.VERSION;
		var province="undefined"==(typeof jsons.PROVINCE)?jsons.province:jsons.PROVINCE;
   		var city="undefined"==(typeof jsons.CITY)?jsons.city:jsons.CITY;
		var sysType = ""; //系统类型
		if (util.versions.ios) { //ios系统
			sysType = "2";
		} else if (util.versions.android) { //安卓系统
			sysType = "1";
		} else {}
		//未登录状态下取不到用户手机号码，手动赋空值
		if (undefined == userphonenum || "undefined" == userphonenum || null == userphonenum) {
			userphonenum = "";
		}
		var adverList = [];
		var adverJson = {
			"cellNum": userphonenum,
			"clientVer": cv,
			"sysType": sysType,
			"provinceCode": province,
			"cityCode": city,
			"adverType": data.adverType,
			"adverLocation": data.adverLocation,
			"markId":Number(data.markId)
		};
		adverList.push(adverJson);
		//		alert(util.getAjaxData(home.jsons,{"cellNum":home.jsons.USERPHONENUM,"clientVer":home.jsons.VERSION,"sysType":sysType,"provinceCode":home.jsons.PROVINCE,"cityCode":home.jsons.CITY,"adverType":adverType,"adverLocation":adverLocation,"sysTime":""}));
		$.ajax({
			type: "post",
			url: util.hostport + "SA/advertisingClickNew/printLog",
			data: util.getAjaxData(jsons, {
				"adverList": adverList
			}),
			dataType: "json",
			timeout: 50000,
			success: function() {

			},
			error: function(xhr, type) {}
		});
	},
	/**
	 * 功能点击量,统计
	 * @param {String} businessSteps 业务步骤
	 * @param {Object} jsons 获取的用户信息
	 */
	functionOfClicks: function(businessSteps,objJson) {
		var userphonenum="undefined"==(typeof objJson.USERPHONENUM)?objJson.userphonenum:objJson.USERPHONENUM;
		var province="undefined"==(typeof objJson.PROVINCE)?objJson.province:objJson.PROVINCE;
   		var city="undefined"==(typeof objJson.CITY)?objJson.city:objJson.CITY;
		var channel="undefined"==(typeof objJson.CHANNEL)?objJson.channel:objJson.CHANNEL;
		//未登录状态下取不到用户手机号码，手动赋99999999999
		if ('undefined' == typeof userphonenum ) {
			userphonenum = "99999999999";
		}
		if('undefined' == typeof channel)
		{
			channel="#";
		}
		var funcList = [];
		var funcListJson = {
			"businessCode":"#",
			"businessSteps":businessSteps,
			"channel":channel,
			"provinceCode": province,
			"cityCode": city,
			"event": "#",
			"event": "#",
			"pageInfo":"#",
			"pageInfo":"#",
			"phoneNumber": userphonenum,
			"title":"#"
		};
		funcList.push(funcListJson);
		//		alert(util.getAjaxData(home.jsons,{"cellNum":home.jsons.USERPHONENUM,"clientVer":home.jsons.VERSION,"sysType":sysType,"provinceCode":home.jsons.PROVINCE,"cityCode":home.jsons.CITY,"adverType":adverType,"adverLocation":adverLocation,"sysTime":""}));
		$.ajax({
			type: "post",
			url: util.hostport + "SA/funcClickNew/printLog",
			data: util.getAjaxData(objJson, {
				"funcList": funcList
			}),
			dataType: "json",
			timeout: 50000,
			success: function() {

			},
			error: function(xhr, type) {}
		});
	},
	/**
	 * 拉起客户端并且打开下载页面
	 * @param {String} urls 需要在客户端内部打开的网址
	 */
	pullAppDownload:function(urls)
	{
        if(util.versions.android)
		{
			if(undefined==urls||""==urls)
			{
				location.href = 'com.greenpoint://android.mc10086.activity';
			}
			else
			{
				location.href = 'com.greenpoint://android.mc10086.activity?url='+urls;
			}
		}
		else if(util.versions.ios)
		{
			if(undefined==urls||""==urls)
			{
				location.href = 'cn.10086.app://';
			}
			else
			{
				location.href = 'cn.10086.app://'+urls;
			}
		}
		setTimeout(function() {
	        location.href = 'http://www.10086.cn/cmccclient/download';
	    }, 3000);
	    setTimeout(function() {
	        location.reload();
	    }, 5000);
	}
};
