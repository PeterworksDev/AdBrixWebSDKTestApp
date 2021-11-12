!function (e, r) {
    if (void 0 !== e && !e.adbrix) {
        var o = {queue: []}, t = navigator.userAgent.toLowerCase(), c = r.createElement("script"),
            a = "Netscape" === navigator.appName && -1 !== navigator.userAgent.search("Trident") || -1 !== t.indexOf("msie") ? "abx-web-sdk.ie.min.js" : "abx-web-sdk.min.js";
        c.type = "text/javascript", c.async = !0, c.src = "//static.adbrix.io/web-sdk/latest/" + a, c.onload = function () {
            e.adbrix.runQueuedFunctions ? e.adbrix.runQueuedFunctions() : console.log("[adbrix] Error: could not load SDK")
        };
        var i = r.getElementsByTagName("script")[0];
        i.parentNode.insertBefore(c, i);
        ["init", "onInitialized", "login", "getUserId", "logout", "userProperty.get", "userProperty.getAll", "userProperty.addOrUpdate", "userProperty.remove", "userProperty.removes", "common.signUp", "common.invite", "common.useCredit", "common.purchase", "event.send", "debug.traceListener", "commerceAttr.categories", "commerceAttr.product", "commerce.viewHome", "commerce.categoryView", "commerce.productView", "commerce.addToCart", "commerce.addToWishList", "commerce.reviewOrder", "commerce.refund", "commerce.search", "commerce.share", "commerce.listView", "commerce.cartView", "commerce.paymentInfoAdded", "game.tutorialComplete", "game.characterCreated", "game.stageCleared", "game.levelAchieved"].forEach(function (e) {
            var r = e.split("."), t = r.pop();
            r.reduce(function (e, r) {
                return e[r] = e[r] || {}
            }, o)[t] = function () {
                o.queue.push([e, arguments])
            }
        }), e.adbrix = o
    }
}(window, document);

function AdBrixInit() {
    window.adbrix.init({
        appkey: 'fnbFMvaGgkGVcajnoIeUTw',
        webSecretkey: 'RHVbFIofrUm4JXSVWvc0mg',
        isOptOut: true,
        supportUrlQueryKeys: ['test_param1', 'test_param2'],
        isExecPageViewEvent: true,
        isIncludeUtm: true,
        isIncludeNaver: true,
        isIncludeReferrer: true,
        isIncludeGclid: true,
    });
}

function DeeplinkDivide() {
    var abx_tid = "1234abcdefg";
    window.onload = function () {
        setTimeout(function () {

            window.location.replace("https://apps.apple.com/kr/app/i-one-bank-%EA%B0%9C%EC%9D%B8%EA%B3%A0%EA%B0%9D%EC%9A%A9/id1460543865?abx_tid=" + abx_tid);

        }, 3000);
        try {
            window.location.replace("ionebank://openmenu?menuid=cos_evt_030000_1&event_id=2021090804&prescreen=cos_evt_030000_1&abx_tid=" + abx_tid);
        } catch (e) {

        }
    }
}