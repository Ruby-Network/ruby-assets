(() => {
    var e = function (e) {
            var n = RegExp("[?&]" + e + "=([^&]*)").exec(window.location.search);
            return n && decodeURIComponent(n[1].replace(/\+/g, " "));
        },
        n = "kids" === e("tag"),
        o = new ((function () {
            function e() {
                var e = this;
                (this.queue = []),
                    (this.init = function (n) {
                        return (
                            void 0 === n && (n = {}),
                            new Promise(function (o, t) {
                                e.enqueue("init", n, o, t);
                            })
                        );
                    }),
                    (this.rewardedBreak = function () {
                        return new Promise(function (e) {
                            e(!1);
                        });
                    }),
                    (this.noArguments = function (n) {
                        return function () {
                            e.enqueue(n);
                        };
                    }),
                    (this.oneArgument = function (n) {
                        return function (o) {
                            e.enqueue(n, o);
                        };
                    }),
                    (this.handleAutoResolvePromise = function () {
                        return new Promise(function (e) {
                            e();
                        });
                    }),
                    (this.handleAutoResolvePromiseObj = function () {
                        return new Promise(function (e) {
                            e();
                        });
                    }),
                    (this.throwNotLoaded = function () {
                        console.debug("PokiSDK is not loaded yet. Not all methods are available.");
                    });
            }
            return (
                (e.prototype.enqueue = function (e, o, t, i) {
                    var r = { fn: e, options: o, resolveFn: t, rejectFn: i };
                    n ? i && i() : this.queue.push(r);
                }),
                e
            );
        })())();
    (window.PokiSDK = {
        init: o.init,
    }),
        ["disableProgrammatic", "gameLoadingStart", "gameLoadingFinished", "gameInteractive", "roundStart", "roundEnd", "muteAd"].forEach(function (
            e
        ) {
            window.PokiSDK[e] = o.noArguments(e);
        }),
        [
            "setDebug",
            "gameplayStart",
            "gameplayStop",
            "gameLoadingProgress",
            "happyTime",
            "setPlayerAge",
            "togglePlayerAdvertisingConsent",
            "toggleNonPersonalized",
            "setConsentString",
            "logError",
            "sendHighscore",
            "setDebugTouchOverlayController",
        ].forEach(function (e) {
            window.PokiSDK[e] = o.oneArgument(e);
        });
})();
