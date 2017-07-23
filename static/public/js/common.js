// true:线上 false:测试
const TEST_FLAG = false;

//等比缩放
!(function(doc, win) {
    var timer,
        docEle = doc.documentElement,
        evt = "onorientationchange" in window ? "orientationchange" : "resize",
        setFontSize = function() {
            var width = docEle.getBoundingClientRect().width;
            width && (docEle.style.fontSize = 20 * (width / 320) + "px");
        };

    win.addEventListener(evt, function() {
        clearTimeout(timer);
        timer = setTimeout(setFontSize, 1000);
    }, false);
    doc.addEventListener("DOMContentLoaded", setFontSize, false);
}(document, window));

//common.js旧版
//存储客户端返回数据
var ojsons = {
    cid: "58dv905egAc3Cl3J9NnAa1IyeU6Mm 2aDuwtpn40nFCKeaHCxAGRXoVnm0VJJ4zIEMR pA72GuAU6m5kjKfeSAP IlgJ2iMsrQtvsjQTljrjirUwAZMStGAPRa1b6/Lm",
    en: "0",
    sn: "0",
    version: "9",
    st: "1",
    sv: "9",
    sp: "1080x1920",
    osType: "0",
    token: "LOGINTOKEN=Gkr2GHWFgKH4bHK2AEdj0g--",
    phoneNumber: "18702906803"
        // phoneNumber: "13689198508"
        //phoneNumber: "15596401192"
        // phoneNumber: "13488323022"
        //phoneNumber: "18792716716"
        // phoneNumber: "13468673694"
};
//判断合法
function isIllegal(x) {
    var type = {
        'Number': '[object Number]',
        'String': '[object String]',
        'Array': '[object Array]',
        'Object': '[object Object]',
        'Null': '[object Null]',
        'Undefined': '[object Undefined]'
    };
    if (Object.prototype.toString.call(x) === type.Undefined || Object.prototype.toString.call(x) === type.Null) {
        return false;
    } else {
        switch (Object.prototype.toString.call(x)) {
            case type.Number:
                return [true, 'Number'];
            case type.String:
                if (x.length > 0) {
                    return [true, 'String'];
                } else {
                    return [false, 'String'];
                }
            case type.Array:
                if (x.length > 0) {
                    return [true, 'Array'];
                } else {
                    return [false, 'Array'];
                }
            case type.Object:
                for (var key in x) {
                    return [true, 'Object'];
                }
                return [false, 'Object'];
            default:
                return x;
        }
    }
}
/**
 * ajax请求
 * @param url 接口地址
 * @param bodyarray 需要传递的参数 false：本地调用 否则传递接口所用参数即可
 * @param success 回调函数
 * @param callback 返回220的回调函数
 */
function ajaxCommon(req) {
    util.closeLoadPlug();
    window.scrollTo(0, 0);

    if (req.param == false) {
        api.get(req.url).then(function(response) {
            if (isIllegal(response.data)[0] === true) {
                if (parseInt(response.data.resCode, 10) === 200) {
                    req.callback(response.data);
                } else {
                    util.closeLoadPlug();
                    switch (parseInt(response.data.resCode, 10)) {
                        case 201:
                            leadeon.showLogin();
                            return;
                        case 220:
                            if (callback2 == undefined || callback2 == false) {
                                if (response.data.hasOwnProperty(resDesc)) {
                                    util.showDialogPlug(response.data.resDesc, "知道了");
                                } else {
                                    util.showDialogPlug("现在参与的小伙伴太多了，请您稍后再试！", "知道了");
                                }
                            } else {
                                req.callback220(response.data);
                            }
                            return;
                        case 303:
                            util.showDialogPlug("仅限内蒙移动用户参加", "知道了");
                            return;
                        case 304:
                            util.showDialogPlug("您的号码存在欠费等异常！暂不能参加活动", "知道了");
                            return;
                        case 500:
                            util.showDialogPlug("服务异常，请稍后再试！", "知道了");
                            return;
                        default:
                            util.showDialogPlug("现在参与的小伙伴太多了，请您稍后再试！", "知道了");
                            return;
                    }
                }
            } else {
                util.showDialogPlug("现在参与的小伙伴太多了，请您稍后再试！", "知道了");
            }
        })
        return;
    };
    api.post(req.url, util.getAjaxData(ojsons, req.param)).then(function(response) {
        if (isIllegal(response.data)[0] === true) {
            if (parseInt(response.data.resCode, 10) === 200) {
                req.callback(response.data);
            } else {
                util.closeLoadPlug();
                switch (parseInt(response.data.resCode, 10)) {
                    case 201:
                        leadeon.showLogin();
                        return;
                    case 220:
                        if (callback2 == undefined || callback2 == false) {
                            if (response.data.hasOwnProperty(resDesc)) {
                                util.showDialogPlug(response.data.resDesc, "知道了");
                            } else {
                                util.showDialogPlug("现在参与的小伙伴太多了，请您稍后再试！", "知道了");
                            }
                        } else {
                            req.callback220(response.data);
                        }
                        return;
                    case 303:
                        util.showDialogPlug("仅限内蒙移动用户参加", "知道了");
                        return;
                    case 304:
                        util.showDialogPlug("您的号码存在欠费等异常！暂不能参加活动", "知道了");
                        return;
                    case 500:
                        util.showDialogPlug("服务异常，请稍后再试！", "知道了");
                        return;
                    default:
                        util.showDialogPlug("现在参与的小伙伴太多了，请您稍后再试！", "知道了");
                        return;
                }
            }
        } else {
            util.showDialogPlug("现在参与的小伙伴太多了，请您稍后再试！", "知道了");
        }
    })
}


/**
 * 动画类
 */
function timeLine() {
    this.order = [];
    this.add = function(func, time) {
        this.order.push({
            func: func,
            timeout: time
        });
    };

    this.start = function() {
        for (var s in this.order) {
            (function(order) {
                var timeout = order.timeout;
                var func = order.func;

                setTimeout(func, timeout);
            })(this.order[s]);
        }
    }
}

function shake(obj, Rate, speed) {
    var oL = obj.offsetLeft;
    var oT = 0;
    this.stop = null;
    this.oTime = null;
    var om = this;
    this.start = function() {
        if (parseInt(obj.style.left) == oL - 1) {
            obj.style.top = oT + 0.5 + "px";
            setTimeout(function() {
                obj.style.left = oL + 1 + "px"
            }, Rate)
        } else {
            obj.style.top = oT - 0.5 + "px";
            setTimeout(function() {
                obj.style.left = oL - 1 + "px"
            }, Rate)
        }
        this.oTime = setTimeout(function() {
            om.start()
        }, speed);
    };
    this.stop = function() {
        clearTimeout(this.oTime);

    };
}
/**
 ** 除法函数，用来得到精确的除法结果
 ** 说明：javascript的除法结果会有误差，在两个浮点数相除的时候会比较明显。这个函数返回较为精确的除法结果。
 ** 调用：accDiv(arg1,arg2)
 ** 返回值：arg1除以arg2的精确结果
 **/
function accDiv(arg1, arg2) {
    var t1 = 0,
        t2 = 0,
        r1, r2;
    try {
        t1 = arg1.toString().split(".")[1].length;
    } catch (e) {}
    try {
        t2 = arg2.toString().split(".")[1].length;
    } catch (e) {}
    with(Math) {
        r1 = Number(arg1.toString().replace(".", ""));
        r2 = Number(arg2.toString().replace(".", ""));
        return (r1 / r2) * pow(10, t2 - t1);
    }
}


/**
 ** 乘法函数，用来得到精确的乘法结果
 ** 说明：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。
 ** 调用：accMul(arg1,arg2)
 ** 返回值：arg1乘以 arg2的精确结果
 **/
function accMul(arg1, arg2) {
    var m = 0,
        s1 = arg1.toString(),
        s2 = arg2.toString();
    try {
        m += s1.split(".")[1].length;
    } catch (e) {}
    try {
        m += s2.split(".")[1].length;
    } catch (e) {}
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}

/**
 ** 减法函数，用来得到精确的减法结果
 ** 说明：javascript的减法结果会有误差，在两个浮点数相减的时候会比较明显。这个函数返回较为精确的减法结果。
 ** 调用：accSub(arg1,arg2)
 ** 返回值：arg1加上arg2的精确结果
 **/
function accSub(arg1, arg2) {
    var r1, r2, m, n;
    try {
        r1 = arg1.toString().split(".")[1].length;
    } catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    } catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2)); //last modify by deeka //动态控制精度长度
    n = (r1 >= r2) ? r1 : r2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
}


/**
 ** 加法函数，用来得到精确的加法结果
 ** 说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
 ** 调用：accAdd(arg1,arg2)
 ** 返回值：arg1加上arg2的精确结果
 **/
function accAdd(arg1, arg2) {
    var r1, r2, m, c;
    try {
        r1 = arg1.toString().split(".")[1].length;
    } catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    } catch (e) {
        r2 = 0;
    }
    c = Math.abs(r1 - r2);
    m = Math.pow(10, Math.max(r1, r2));
    if (c > 0) {
        var cm = Math.pow(10, c);
        if (r1 > r2) {
            arg1 = Number(arg1.toString().replace(".", ""));
            arg2 = Number(arg2.toString().replace(".", "")) * cm;
        } else {
            arg1 = Number(arg1.toString().replace(".", "")) * cm;
            arg2 = Number(arg2.toString().replace(".", ""));
        }
    } else {
        arg1 = Number(arg1.toString().replace(".", ""));
        arg2 = Number(arg2.toString().replace(".", ""));
    }
    return (arg1 + arg2) / m;
}

Number.prototype.div = function(arg) {
    return accDiv(this, arg);
};
Number.prototype.add = function(arg) {
    return accAdd(arg, this);
};
Number.prototype.sub = function(arg) {
    return accMul(arg, this);
};
Number.prototype.mul = function(arg) {
    return accMul(arg, this);
};

/**
 * 微信分享
 * @param mainTitle 分享标题
 * @param mainDesc 分享内容
 * @param mainURL 分享页面链接
 * @param mainImgUrl 分享图片
 */
function onBridgeReady(mainTitle, mainDesc, mainURL, mainImgUrl) {

    //转发朋友圈【朋友圈分享显示的内容是title】
    WeixinJSBridge.on("menu:share:timeline", function(e) {
        var data = {
            img_url: mainImgUrl,
            img_width: "120",
            img_height: "120",
            link: mainURL,
            //desc这个属性要加上，虽然不会显示，但是不加暂时会导致无法转发至朋友圈，
            desc: mainDesc,
            title: mainTitle
        };
        WeixinJSBridge.invoke("shareTimeline", data, function(res) {
            WeixinJSBridge.log(res.err_msg)
        });
    });
    //同步到微博
    WeixinJSBridge.on("menu:share:weibo", function() {
        WeixinJSBridge.invoke("shareWeibo", {
            "content": mainDesc,
            "url": mainURL
        }, function(res) {
            WeixinJSBridge.log(res.err_msg);
        });
    });
    //分享给朋友
    WeixinJSBridge.on('menu:share:appmessage', function(argv) {
        WeixinJSBridge.invoke("sendAppMessage", {
            img_url: mainImgUrl,
            img_width: "120",
            img_height: "120",
            link: mainURL,
            desc: mainDesc,
            title: mainTitle
        }, function(res) {
            WeixinJSBridge.log(res.err_msg)
        });
    });
}

//在线客服
function zxkf(moduvarype) {
    var list = "<!-- 在线客服按钮-->" +
        "<img class='zxkf' style='width: 2.496rem; height: 2.496rem; position: fixed; top: 13rem; right: 0.5rem; z-index: 999;' src='https://sn.clientaccess.10086.cn/html5/sx/public/images/online.png'/>";
    $("body").append(list);
    $(".zxkf").off();
    $(".zxkf").on("click", function() {
        djl(moduvarype);
    });
}

//点击量
function djl(moduvarype) {
    ajaxCommon("userClick/add", { "moduvarype": moduvarype }, false, function() {
        location.href = "https://sn.clientaccess.10086.cn/html5/index.php/Home/Customer/index.html";
    });
}

// 修改页面标题
var setTitle = function(title){
    var titvarag = document.getElementsByTagName('title')[0];
    titvarag.innerHTML = title;
}


if (TEST_FLAG) {
    ojsons = {};
    setTimeout(function() {
        leadeon.userStatus({
            success: function(data) {
                var status = data.status; // 状态：0未登录；1服务密码登录；2短信验证码登录
                if (status == '0') {
                    leadeon.showLogin()
                } else {
                    leadeon.getUserInfo({
                        success: function(data) {
                            data.token = util.removeSpace(data.token);
                            ojsons = data;
                        },
                        error: function(data) {
                            util.showDialogPlug(data, '知道了')
                        }
                    })
                }
            },
            error: function(data) {
                util.showDialogPlug(data, '知道了')
            }
        })
    }, 500);
}