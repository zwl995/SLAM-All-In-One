$(function(){function e(){w="https://csdnimg.cn/release/download/images/pay_error.png",x="已扫码<br>请在手机端操作",$("#payCode").html('<div class="renovate"><img src="'+w+'"><span>'+x+"</span></div>"),$("#payCodeImg").html('<img class="repeat-again" src="'+w+'"><span class="text">'+x+"</span>")}function a(a){var i={goods_id:a,flag:17,request_type:4,success_function:t,error_function:o,timeout_function:s,get_pay_success_callback:n,is_use_balance:u,payment_function:e};$("#payCode").html(C),$("#payCodeImg").html(v),cart.qrPay(i)}function t(e,a){g?r("payCode",a.pay_url):r("payCodeImg",a.pay_url),y=a.pay_url}function n(){f.boxshadow.fadeOut(function(){showToast({text:"支付成功",bottom:"10%",zindex:9e3,speed:500,time:1500}),window.location.reload(),f.payCode.fadeOut(function(){window.location.reload()})})}function o(e){showToast({text:e.errorMessage,bottom:"10%",zindex:9e3,speed:500,time:1500})}function s(){g?f.payCode.find("#payCode").html(k):f.getPay.find("#payCodeImg").html(_)}function i(e){switch(e){case"column":u?(d(I,b)>0?($(".available-balance-0").text("¥"+b),$(".available-balance-1").text("¥"+d(I,b))):($(".available-balance-0").text("¥"+I),$(".available-balance-1").text("¥0")),$(".subscribe-price-box").css({display:"none"}),$(".subscribe-available-balance").css({display:"block"})):($(".now-price").text("¥"+I),$(".subscribe-available-balance").css({display:"none"}),$(".subscribe-price-box").css({display:"block"}));break;case"details":var a=$(".pay-money-span").attr("data-nowprice");u?d(a,b)>0?($(".pay-money-span").text(d(a,b)+"元"),c(!1,330)):($(".pay-money-span").text("0元"),c(!0,202)):($(".pay-money-span").text($(".pay-money-span").attr("data-nowprice")+"元"),c(!1,330))}}function c(e,a){f.payCode.css({height:a+"px"}),e?(f.payCode.find(".content-code").hide(),f.payCode.find(".content-blance").show()):(f.payCode.find(".content-blance").hide(),f.payCode.find(".content-code").show())}function d(e,a){var t=Number(e)-Number(a);return t>0?t.toFixed(2):t<0?t.toFixed(2):t}function l(e,t){$.ajax({type:"GET",url:"https://mall.csdn.net/mp/mallorder/api/internal/order/getBalance",xhrFields:{withCredentials:!0},crossDomain:!0,success:function(n){b=n.data.balance,P++,P<=1&&(0==b?(u=0,$(".pay-code-radio").prop("disabled",!0)):(u=1,$(".pay-code-radio").attr("data-flag","true"),$(".pay-code-radio").prop("checked",!0))),$(".pay-balance .balance").text(b),$(".pay-code-balance .balance").text(b),i(t),a(e)}})}function r(e,a){var t=qrcode(6,"M");t.addData(a),t.make(),$("#"+e).html(t.createImgTag(3,3)),$("#"+e).html($("#"+e).html()),g&&f.boxshadow.fadeIn(function(){f.payCode.fadeIn()})}function p(){var e=$(this),a=e.data("id");if(e.data("type"))var t=blogUrl+"phoenix/web/v1/subscribe/un-subscribe-study?columnId="+a;else var t=blogUrl+"phoenix/web/v1/subscribe/subscribe-study?columnId="+a;getCookie("UserName")?$.ajax({url:t,type:"post",dataType:"json",xhrFields:{withCredentials:!0},success:function(a){200==a.code&&a.data.status?e.data("type")?($(".studyvip-unsubscribe").css("display","inline-block"),$(".studyvip-subscribe").css("display","none")):($(".studyvip-subscribe").css("display","inline-block"),$(".studyvip-unsubscribe").css("display","none")):showToast({text:a.data.msg||"操作失败，请重试！",bottom:"10%",zindex:9e3,speed:500,time:1500})},error:function(e){showToast({text:e.data.msg||"操作失败，请重试！",bottom:"10%",zindex:9e3,speed:500,time:1500})}}):window.csdn.loginBox.show()}var u=0,b=0,y="";$(document).on("click",".tip-subscribe-column>span",function(){$(this).parent().find(".tip").fadeIn()}),$(document).on("click",".tip-subscribe-column .bt-close",function(){$(".tip-subscribe-column").find(".tip").fadeOut()});var m="",f={boxshadow:$(".skin-boxshadow"),btClose:$(".bt-close"),payCode:$(".pay-code"),btSubscribe:$(".bt-subscribe-article"),btSubscribeColumn:$(".bt-subscribe-text"),getPay:$(".get-pay")},g=!1,h=window.location.href;h.indexOf("category_")>-1&&!g&&getCookie("UserName")&&f.getPay.length&&(m=f.getPay.data("id"),l(f.getPay.data("id"),"column")),$(document).on("click",".bt-subscribe",function(){getCookie("UserName")||window.csdn.loginBox.show()}),f.getPay.on("click",function(){g=!1,m=$(this).data("id"),a(m)}),f.payCode.on("click",".renovate",function(){a(m||$(this).parent().data("id"))}),f.btClose.on("click",function(){f.payCode.fadeOut(function(){f.boxshadow.fadeOut()})});var w=blogStaticHost+"dist/pc/img/pay-time-out.png",x="获取中",v='<img class="repeat-again" src="'+w+'"><span class="text">'+x+"</span>",C='<div class="renov-men"><img src="'+w+'"><span>'+x+"</span></div>",k='<div class="renovate">    <img src="'+blogStaticHost+'dist/pc/img/pay-time-out.png">    <span>点击重新获取</span></div>',_='<img class="repeat-again" src="'+blogStaticHost+'dist/pc/img/pay-time-out.png"><span class="text">点击重新获取</span>';$(".now-price").text();$(".pay-code-radio").click(function(){var e=$(this).attr("data-flag");"true"==e?(u=0,$(this).attr("data-flag","false"),$(this).prop("checked",!1)):(u=1,$(this).attr("data-flag","true"),$(this).prop("checked",!0)),l(m,$(this).attr("data-type"))});var I=$(".subscribe-price .now-price").text().slice(1),P=0;f.payCode.on("click",".blance-bt",function(){window.open(y)}),$(document).on("click",".articleColumnBt",function(){if(getCookie("UserName")){if(window.csdn&&window.csdn.userOrderPayment){var e=$(this).data("id");window.csdn.userOrderPayment.show({goods_id:e,product_id:e,flag:17})}}else window.csdn.loginBox.show()}),$(document).on("click",".column-studyvip-pass",function(){getCookie("UserName")?window.open("https://vip.csdn.net/studyvip?utm_source=zhuanlan"):window.csdn.loginBox.show()}),$(document).on("click",".column-studyvip-ajax",p)});