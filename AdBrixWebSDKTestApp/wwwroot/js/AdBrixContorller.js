!function (e, r) {
    if (void 0 !== e && !e.adbrix) {
        var t = {queue: []}, o = navigator.userAgent.toLowerCase(), n = r.createElement("script"),
            i = "Netscape" === navigator.appName && -1 !== navigator.userAgent.search("Trident") || -1 !== o.indexOf("msie") ? "abx-web-sdk.ie.min.js" : "abx-web-sdk.min.js";
        n.type = "text/javascript", n.async = !0, n.src = "//static.adbrix.io/web-sdk/latest/" + i, n.onload = function () {
            e.adbrix.runQueuedFunctions ? e.adbrix.runQueuedFunctions() : console.log("[adbrix] Error: could not load SDK")
        };
        var a = r.getElementsByTagName("script")[0];
        a.parentNode.insertBefore(n, a);
        ["init", "onInitialized", "login", "getUserId", "logout", "userProperty.get", "userProperty.getAll", "userProperty.addOrUpdate", "userProperty.remove", "userProperty.removes", "common.signUp", "common.invite", "common.useCredit", "common.purchase", "event.send", "debug.traceListener", "commerceAttr.categories", "commerceAttr.product"].forEach(function (e) {
            var r = e.split("."), o = r.pop();
            r.reduce(function (e, r) {
                return e[r] = e[r] || {}
            }, t)[o] = function () {
                t.queue.push([e, arguments])
            }
        }), e.adbrix = t
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
        isincludeGclid: true,
    });
}
