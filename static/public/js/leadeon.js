/**
 * js-sdk
 *
 * 错误码只进行大的分类，详细错误通过错误描述字段表述。
 * -1： 系统错误（系统接口错误，内存错误，异常错误）
 * -2： 网络错误（网络接口错误，网络数据错误）
 * -3： 数据错误（非合法数据）
 * -4： 用户取消操作（部分接口用户干预的操作）
 */

var leadeon={
	/**
	 * 获取用户登录状态
	 * @param {Object} obj
	 */
	userStatus:function(obj)
	{
		leadeon.sendToClient(obj,"userStatus");
	},
	/**
	 * 获取用户基础信息
	 * @param {Object} obj
	 */
	getUserInfo:function(obj)
	{
		leadeon.sendToClient(obj,"getUserInfo");
	},
	/**
	 * 获取详单数据
	 * @param {Object} obj
	 */
	getCallDetail:function(obj)
	{
		leadeon.sendToClient(obj,"getCallDetail");
	},
	/**
	 * 直接进入扫一扫功能
	 * @param {Object} obj
	 */
	qrScan:function(obj)
	{
		leadeon.sendToClient(obj,"qrScan");
	},
	/**
	 * 调用手机通信录
	 * @param {Object} obj
	 */
	getContacts:function(obj)
	{
		leadeon.sendToClient(obj,"getContacts");
	},
	/**
	 * 调用系统发短信功能
	 * @param {Object} obj
	 */
	sendSMS:function(obj)
	{
		leadeon.sendToClient(obj,"sendSMS");
	},
	/**
	 * 获取通信录联系人姓名
	 * @param {Object} obj
	 */
	getContactName:function(obj)
	{
		leadeon.sendToClient(obj,"getContactName");
	},
	/**
	 * 打开新页面
	 * @param {Object} obj
	 */
	newWebview:function(obj)
	{
		leadeon.sendToClient(obj,"newWebview");
	},
	/**
	 * 手机振动
	 * @param {Object} obj
	 */
	playSound:function(obj)
	{
		leadeon.sendToClient(obj,"playSound");
	},
	/**
	 * 获取网络状态
	 * @param {Object} obj
	 */
	getNetStatus:function(obj)
	{
		leadeon.sendToClient(obj,"getNetStatus");
	},
	/**
	 * 调用照相机
	 * @param {Object} obj
	 */
	pickPhoto:function(obj)
	{
		leadeon.sendToClient(obj,"pickPhoto");
	},
	/**
	 * 拨打手机电话
	 * @param {Object} obj
	 */
	callPhone:function(obj)
	{
		leadeon.sendToClient(obj,"callPhone");
	},
	/**
	 * H5调用native功能页面
	 * @param {Object} obj
	 */
	goNativePage:function(obj)
	{
		leadeon.sendToClient(obj,"goNativePage");
	},
	/**
	 * 查询用户营销活动信息
	 * @param {Object} obj
	 */
	getUserMarketInfo:function(obj)
	{
		leadeon.sendToClient(obj,"getUserMarketInfo");
	},

	/**
	 * 获取 IMEI
	 * @param {Object} obj
	 */
	getImei:function(obj)
	{
		leadeon.sendToClient(obj,"getImei");
	},
	/**
	 * 是否显示分享按钮
	 * @param {Object} obj
	 */
	enableShared:function(obj)
	{
		leadeon.sendToClient(obj,"enableShared");
	},
	/**
	 * 分享功能
	 * @param {Object} obj
	 */
	shareMessage:function(obj)
	{
		leadeon.sendToClient(obj,"shareMessage");
	},
	/**
	 * 查询交费历史
	 * @param {Object} obj
	 */
	payHistory:function(obj)
	{
		leadeon.sendToClient(obj,"payHistory");
	},
	/**
	 * 扫描充值卡密码(OCR)
	 * @param {Object} obj
	 */
	getOCR:function(obj)
	{
		leadeon.sendToClient(obj,"getOCR");
	},
	/**
	 * 传递OCR充值卡密码，属于客户端主调调用h5页面js
	 * @param {Object} obj
	 */
	setPrepaidCardTab:function(obj)
	{

	},
	/**
	 * 查询实体营业厅
	 * @param {Object} obj
	 */
	searchBizHall:function(obj)
	{
		leadeon.sendToClient(obj,"searchBizHall");
	},
	/**
	 * 附近营业厅
	 * @param {Object} obj
	 */
	nearBizHall:function(obj)
	{
		leadeon.sendToClient(obj,"nearBizHall");
	},
	/**
	 * 加密功能
	 * @param {Object} obj
	 */
	encryptString:function(obj)
	{
		leadeon.sendToClient(obj,"encryptString");
	},
	/**
	 * 新手引导
	 * @param {Object} obj
	 */
	newGuide:function(obj)
	{
		leadeon.sendToClient(obj,"newGuide");
	},
	/**
	 * 给我评分
	 * @param {Object} obj
	 */
	giveMeScore:function(obj)
	{
		leadeon.sendToClient(obj,"giveMeScore");
	},
	/**
	 * 版本检测
	 * @param {Object} obj
	 */
	checkVersion:function(obj)
	{
		leadeon.sendToClient(obj,"checkVersion");
	},
	/**
	 * 调用二次鉴权,说明：用户需要操作敏感用户信息时，需要进行二次鉴权操作
	 * @param {Object} obj
	 */
	showAuthentication:function(obj)
	{
		leadeon.sendToClient(obj,"showAuthentication");
	},
	/**
	 * 获取通信录信息,说明：获取通信录中所有人的手机号码和姓名
	 * @param {Object} obj
	 */
	getContactAll:function(obj)
	{
		leadeon.sendToClient(obj,"getContactAll");
	},
	/**
	 * 通知客户端浇花签到状态
	 * @param {Object} obj
	 */
	setWaterFlowerState:function(obj)
	{
		leadeon.sendToClient(obj,"setWaterFlowerState");
	},
	/**
	 * 保存图片到相册
	 * @param {Object} obj
	 */
	savePhoto:function(obj)
	{
		leadeon.sendToClient(obj,"savePhoto");
	},
	/**
	 * 网络请求体数字签名
	 * @param {Object} obj
	 */
	digitalSignature:function(obj)
	{
		leadeon.sendToClient(obj,"digitalSignature");
	},
	/**
	 * 调用登录接口
	 * @param {Object} obj
	 */
	showLogin:function(obj)
	{
		leadeon.sendToClient(obj,"showLogin");
	},
	/**
	 * 拉起统一支付
	 * @param {Object} obj
	 */
	getNewPay:function(obj)
	{
		leadeon.sendToClient(obj,"getNewPay");
	},
	/**
	 * 设置webView标题-V3.8新加
	 * @param {Object} obj
	 */
	setTitle:function(obj)
	{
		leadeon.sendToClient(obj,"setTitle");
	},
	/**
	 * 二级页面情感化插件-V3.8新加
	 * @param {Object} obj
	 */
	assistiveControl:function(obj)
	{
		leadeon.sendToClient(obj,"assistiveControl");
	},
	/**
	 * 导航栏返回及关闭按钮的显示状态-V3.8新加
	 * @param {Object} obj
	 */
	showNavBackAndCloseBtn:function(obj)
	{
		leadeon.sendToClient(obj,"showNavBackAndCloseBtn");
	},
	/**
	 * 客户端信息采集-V3.8新加
	 * @param {Object} obj
	 */
	getCatchInfo:function(obj)
	{
		leadeon.sendToClient(obj,"getCatchInfo");
	},
	/**
	 * 关闭当前webview-V3.8新加
	 * @param {Object} obj
	 */
	closeCurrentWebView:function(obj)
	{
		leadeon.sendToClient(obj,"closeCurrentWebView");
	},
	/**
	 * 清除缓存webview-V3.8新加
	 * @param {Object} obj
	 */
	cleanCache:function(obj)
	{
		leadeon.sendToClient(obj,"cleanCache");
	},
	/**
	 * 设置回调成功的函数,并给客户端发送json数据
	 * @param {Object} os 前端传递的对象
	 * @param {String} st 业务名称
	 */
	sendToClient:function(os,st)
	{
		if("undefined"===typeof os)
		{
			os={};
		}
		os.businessName=st;
		var obj=os;
		var u = navigator.userAgent;
		if('undefined'===typeof obj.debug)
		{
			obj.debug=false;
		}
		if('undefined'!==typeof obj.success)
		{
			leadeon["callbackChangeSuccess_"+obj.businessName]=obj.success;
			leadeon["callbackSuccess_"+obj.businessName]=function(dates){
				var jsonstr=dates;
				if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) { //android系统
					jsonstr=JSON.parse(jsonstr);//安卓不支持传递对象，需要对传递的字符串转换
				}
				leadeon["callbackChangeSuccess_"+obj.businessName](jsonstr);
			};
			delete obj.success;
		}
		else
		{
			leadeon["callbackSuccess_"+obj.businessName]=function(dates){};
		}
		obj.callbackSuccess="callbackSuccess_"+obj.businessName;
		if('undefined'!==typeof obj.error)
		{
			leadeon["callbackChangeError_"+obj.businessName]=obj.error;
			leadeon["callbackError_"+obj.businessName]=function(dates){
				var jsonstr=dates;
				if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) { //android系统
					jsonstr=JSON.parse(jsonstr);//安卓不支持传递对象，需要对传递的字符串转换
				}
				leadeon["callbackChangeError_"+obj.businessName](jsonstr);
			};
			delete obj.error;
		}
		else
		{
			leadeon["callbackError_"+obj.businessName]=function(dates){};
		}
		obj.callbackError="callbackError_"+obj.businessName;
		if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1)
		{
			newSdkInterface[obj.businessName](JSON.stringify(obj));
		}
		else
		{
			newSdkInterface[obj.businessName](obj);
		}

	}
};

