!function (e, r) {
    if (void 0 !== e && !e.adbrix) {
        var t = {
            queue: []
        },
            o = r.createElement("script");
        o.type = "text/javascript",
            o.async = !0,
            o.src = "https://s3-ap-northeast-1.amazonaws.com/abxrm.script/abx-web-sdk.dev.js",
            o.onload = function () {
                e.adbrix.runQueuedFunctions ? e.adbrix.runQueuedFunctions() : console.log("[adbrix] Error: could not load SDK")
            };
        var n = r.getElementsByTagName("script")[0];
        n.parentNode.insertBefore(o, n);
        ["init", "login", "getUserId", "logout", "userProperty.get", "userProperty.getAll", "userProperty.addOrUpdate", "userProperty.remove", "userProperty.removes", "common.signUp", "common.invite", "common.useCredit", "event.send", "debug.traceListener"].forEach(function (e) {
            var r = e.split("."),
                o = r.pop();
            r.reduce(function (e, r) {
                return e[r] = e[r] || {}
            },
                t)[o] = function () {
                    t.queue.push([e, arguments])
                }
        }),
            e.adbrix = t
    }
}(window, document);