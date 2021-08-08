try {
    /*     setTimeout(function () {
            window.location.reload(1);
        }, 4000) */
    var expirementSession = JSON.parse('<?php echo addslashes($expirementSession) ?>');
    var expirementSessionVariants = JSON.parse('<?php echo addslashes($variantSessions) ?>');
    var shopifyProduct = expirementSession.product_shopify
    var dexterProduct = {
        "id": shopifyProduct.id,
        "title": shopifyProduct.title,
        "handle": shopifyProduct.handle,
        "published_at": shopifyProduct.published_at,
        "created_at": shopifyProduct.created_at,
        "vendor": shopifyProduct.vendor,
        "type": "",
        "tags": shopifyProduct.tags,
        "price": expirementSession.price_min,
        "price_min": expirementSession.price_min,
        "price_max": expirementSession.price_max,
        "available": true,
        "price_varies": expirementSession.price_varies,
        "compare_at_price": expirementSession.compare_at_price,
        "compare_at_price_min": expirementSession.compare_at_price_min,
        "compare_at_price_max": expirementSession.compare_at_price_max,
        "compare_at_price_varies": expirementSession.compare_at_price_varies,
        "variants": expirementSessionVariants.map(varaint => varaint.variant_shopify),
        "images": shopifyProduct.images.map(image => image.src),
        "content": shopifyProduct.body_html
    }
    var shopMoneyFormat = "{{amount}} dh"
    var shopMoneyWithCurrencyFormat = "Dh {{amount}} MAD"
    var storeDisplayId = "qynxce";

    var c = {
        [shopifyProduct.id]: {
            "eid": "zefzef",
            "opts": expirementSession.options,
            "dlmap": expirementSession.dlmap,
            "vids": expirementSession.vids,
            "v2v": expirementSession.v2v,
            "v2o": expirementSession.v2o,
            "v2pr": expirementSession.v2pr,
            "v2cmp": expirementSession.v2cmp,
            "ab": "0.75",
            "pid": shopifyProduct.id,
            "slug": shopifyProduct.handle,
            "dp_v0": expirementSession.dp_v0,
            "dp_v1": expirementSession.dp_v1,
            "cmp_v0": expirementSession.cmp_v0,
            "cmp_v1": expirementSession.cmp_v1,
        }
    }
    var v2p = expirementSession.v2p
    var shopMoneyFormat = "{{amount}} dh"
    var shopMoneyWithCurrencyFormat = "Dh {{amount}} MAD"
    var storeDisplayId = "qynxce";
    var html_ids = { "product_class": "product-single", "variant_selector_class": "selector-wrapper", "product_card_class": "product-card", "price_class": "price", "app_name": "dexter" };


    if (typeof html_ids !== undefined) var html_ids;
    !(function (t) {
        var e = {};
        function r(n) {
            if (e[n]) return e[n].exports;
            var o = (e[n] = { i: n, l: !1, exports: {} });
            return t[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
        }
        (r.m = t),
            (r.c = e),
            (r.d = function (t, e, n) {
                r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
            }),
            (r.r = function (t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
            }),
            (r.t = function (t, e) {
                if ((1 & e && (t = r(t)), 8 & e)) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var n = Object.create(null);
                if ((r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                    for (var o in t)
                        r.d(
                            n,
                            o,
                            function (e) {
                                return t[e];
                            }.bind(null, o)
                        );
                return n;
            }),
            (r.n = function (t) {
                var e =
                    t && t.__esModule
                        ? function () {
                            return t.default;
                        }
                        : function () {
                            return t;
                        };
                return r.d(e, "a", e), e;
            }),
            (r.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (r.p = ""),
            r((r.s = 47));
    })([
        function (t, e, r) {
            (function (e) {
                var r = function (t) {
                    return t && t.Math == Math && t;
                };
                t.exports = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof e && e) || Function("return this")();
            }.call(this, r(49)));
        },
        function (t, e, r) {
            var n = r(0),
                o = r(31),
                i = r(2),
                a = r(32),
                c = r(37),
                u = r(62),
                s = o("wks"),
                l = n.Symbol,
                d = u ? l : (l && l.withoutSetter) || a;
            t.exports = function (t) {
                return i(s, t) || (c && i(l, t) ? (s[t] = l[t]) : (s[t] = d("Symbol." + t))), s[t];
            };
        },
        function (t, e) {
            var r = {}.hasOwnProperty;
            t.exports = function (t, e) {
                return r.call(t, e);
            };
        },
        function (t, e, r) {
            var n = r(5);
            t.exports = function (t) {
                if (!n(t)) throw TypeError(String(t) + " is not an object");
                return t;
            };
        },
        function (t, e) {
            t.exports = function (t) {
                try {
                    return !!t();
                } catch (t) {
                    return !0;
                }
            };
        },
        function (t, e) {
            t.exports = function (t) {
                return "object" == typeof t ? null !== t : "function" == typeof t;
            };
        },
        function (t, e, r) {
            var n = r(4);
            t.exports = !n(function () {
                return (
                    7 !=
                    Object.defineProperty({}, 1, {
                        get: function () {
                            return 7;
                        },
                    })[1]
                );
            });
        },
        function (t, e, r) {
            var n = r(6),
                o = r(8),
                i = r(17);
            t.exports = n
                ? function (t, e, r) {
                    return o.f(t, e, i(1, r));
                }
                : function (t, e, r) {
                    return (t[e] = r), t;
                };
        },
        function (t, e, r) {
            var n = r(6),
                o = r(29),
                i = r(3),
                a = r(28),
                c = Object.defineProperty;
            e.f = n
                ? c
                : function (t, e, r) {
                    if ((i(t), (e = a(e, !0)), i(r), o))
                        try {
                            return c(t, e, r);
                        } catch (t) { }
                    if ("get" in r || "set" in r) throw TypeError("Accessors not supported");
                    return "value" in r && (t[e] = r.value), t;
                };
        },
        function (t, e) {
            var r = {}.toString;
            t.exports = function (t) {
                return r.call(t).slice(8, -1);
            };
        },
        function (t, e, r) {
            var n = r(55),
                o = r(0),
                i = function (t) {
                    return "function" == typeof t ? t : void 0;
                };
            t.exports = function (t, e) {
                return arguments.length < 2 ? i(n[t]) || i(o[t]) : (n[t] && n[t][e]) || (o[t] && o[t][e]);
            };
        },
        function (t, e) {
            t.exports = {};
        },
        function (t, e, r) {
            var n = r(51),
                o = r(27);
            t.exports = function (t) {
                return n(o(t));
            };
        },
        function (t, e, r) {
            var n = r(0),
                o = r(7),
                i = r(2),
                a = r(19),
                c = r(20),
                u = r(21),
                s = u.get,
                l = u.enforce,
                d = String(String).split("String");
            (t.exports = function (t, e, r, c) {
                var u = !!c && !!c.unsafe,
                    s = !!c && !!c.enumerable,
                    f = !!c && !!c.noTargetGet;
                "function" == typeof r && ("string" != typeof e || i(r, "name") || o(r, "name", e), (l(r).source = d.join("string" == typeof e ? e : ""))),
                    t !== n ? (u ? !f && t[e] && (s = !0) : delete t[e], s ? (t[e] = r) : o(t, e, r)) : s ? (t[e] = r) : a(e, r);
            })(Function.prototype, "toString", function () {
                return ("function" == typeof this && s(this).source) || c(this);
            });
        },
        function (t, e) {
            t.exports = !1;
        },
        function (t, e) {
            t.exports = function (t) {
                if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
                return t;
            };
        },
        function (t, e, r) {
            var n = r(6),
                o = r(50),
                i = r(17),
                a = r(12),
                c = r(28),
                u = r(2),
                s = r(29),
                l = Object.getOwnPropertyDescriptor;
            e.f = n
                ? l
                : function (t, e) {
                    if (((t = a(t)), (e = c(e, !0)), s))
                        try {
                            return l(t, e);
                        } catch (t) { }
                    if (u(t, e)) return i(!o.f.call(t, e), t[e]);
                };
        },
        function (t, e) {
            t.exports = function (t, e) {
                return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e };
            };
        },
        function (t, e, r) {
            var n = r(0),
                o = r(5),
                i = n.document,
                a = o(i) && o(i.createElement);
            t.exports = function (t) {
                return a ? i.createElement(t) : {};
            };
        },
        function (t, e, r) {
            var n = r(0),
                o = r(7);
            t.exports = function (t, e) {
                try {
                    o(n, t, e);
                } catch (r) {
                    n[t] = e;
                }
                return e;
            };
        },
        function (t, e, r) {
            var n = r(30),
                o = Function.toString;
            "function" != typeof n.inspectSource &&
                (n.inspectSource = function (t) {
                    return o.call(t);
                }),
                (t.exports = n.inspectSource);
        },
        function (t, e, r) {
            var n,
                o,
                i,
                a = r(52),
                c = r(0),
                u = r(5),
                s = r(7),
                l = r(2),
                d = r(22),
                f = r(23),
                p = c.WeakMap;
            if (a) {
                var _ = new p(),
                    v = _.get,
                    h = _.has,
                    m = _.set;
                (n = function (t, e) {
                    return m.call(_, t, e), e;
                }),
                    (o = function (t) {
                        return v.call(_, t) || {};
                    }),
                    (i = function (t) {
                        return h.call(_, t);
                    });
            } else {
                var y = d("state");
                (f[y] = !0),
                    (n = function (t, e) {
                        return s(t, y, e), e;
                    }),
                    (o = function (t) {
                        return l(t, y) ? t[y] : {};
                    }),
                    (i = function (t) {
                        return l(t, y);
                    });
            }
            t.exports = {
                set: n,
                get: o,
                has: i,
                enforce: function (t) {
                    return i(t) ? o(t) : n(t, {});
                },
                getterFor: function (t) {
                    return function (e) {
                        var r;
                        if (!u(e) || (r = o(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                        return r;
                    };
                },
            };
        },
        function (t, e, r) {
            var n = r(31),
                o = r(32),
                i = n("keys");
            t.exports = function (t) {
                return i[t] || (i[t] = o(t));
            };
        },
        function (t, e) {
            t.exports = {};
        },
        function (t, e) {
            t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
        },
        function (t, e, r) {
            var n = r(8).f,
                o = r(2),
                i = r(1)("toStringTag");
            t.exports = function (t, e, r) {
                t && !o((t = r ? t : t.prototype), i) && n(t, i, { configurable: !0, value: e });
            };
        },
        function (t, e, r) {
            var n = r(0),
                o = r(16).f,
                i = r(7),
                a = r(13),
                c = r(19),
                u = r(53),
                s = r(36);
            t.exports = function (t, e) {
                var r,
                    l,
                    d,
                    f,
                    p,
                    _ = t.target,
                    v = t.global,
                    h = t.stat;
                if ((r = v ? n : h ? n[_] || c(_, {}) : (n[_] || {}).prototype))
                    for (l in e) {
                        if (((f = e[l]), (d = t.noTargetGet ? (p = o(r, l)) && p.value : r[l]), !s(v ? l : _ + (h ? "." : "#") + l, t.forced) && void 0 !== d)) {
                            if (typeof f == typeof d) continue;
                            u(f, d);
                        }
                        (t.sham || (d && d.sham)) && i(f, "sham", !0), a(r, l, f, t);
                    }
            };
        },
        function (t, e) {
            t.exports = function (t) {
                if (null == t) throw TypeError("Can't call method on " + t);
                return t;
            };
        },
        function (t, e, r) {
            var n = r(5);
            t.exports = function (t, e) {
                if (!n(t)) return t;
                var r, o;
                if (e && "function" == typeof (r = t.toString) && !n((o = r.call(t)))) return o;
                if ("function" == typeof (r = t.valueOf) && !n((o = r.call(t)))) return o;
                if (!e && "function" == typeof (r = t.toString) && !n((o = r.call(t)))) return o;
                throw TypeError("Can't convert object to primitive value");
            };
        },
        function (t, e, r) {
            var n = r(6),
                o = r(4),
                i = r(18);
            t.exports =
                !n &&
                !o(function () {
                    return (
                        7 !=
                        Object.defineProperty(i("div"), "a", {
                            get: function () {
                                return 7;
                            },
                        }).a
                    );
                });
        },
        function (t, e, r) {
            var n = r(0),
                o = r(19),
                i = n["__core-js_shared__"] || o("__core-js_shared__", {});
            t.exports = i;
        },
        function (t, e, r) {
            var n = r(14),
                o = r(30);
            (t.exports = function (t, e) {
                return o[t] || (o[t] = void 0 !== e ? e : {});
            })("versions", []).push({ version: "3.6.5", mode: n ? "pure" : "global", copyright: "© 2020 Denis Pushkarev (zloirock.ru)" });
        },
        function (t, e) {
            var r = 0,
                n = Math.random();
            t.exports = function (t) {
                return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++r + n).toString(36);
            };
        },
        function (t, e, r) {
            var n = r(2),
                o = r(12),
                i = r(57).indexOf,
                a = r(23);
            t.exports = function (t, e) {
                var r,
                    c = o(t),
                    u = 0,
                    s = [];
                for (r in c) !n(a, r) && n(c, r) && s.push(r);
                for (; e.length > u;) n(c, (r = e[u++])) && (~i(s, r) || s.push(r));
                return s;
            };
        },
        function (t, e, r) {
            var n = r(35),
                o = Math.min;
            t.exports = function (t) {
                return t > 0 ? o(n(t), 9007199254740991) : 0;
            };
        },
        function (t, e) {
            var r = Math.ceil,
                n = Math.floor;
            t.exports = function (t) {
                return isNaN((t = +t)) ? 0 : (t > 0 ? n : r)(t);
            };
        },
        function (t, e, r) {
            var n = r(4),
                o = /#|\.prototype\./,
                i = function (t, e) {
                    var r = c[a(t)];
                    return r == s || (r != u && ("function" == typeof e ? n(e) : !!e));
                },
                a = (i.normalize = function (t) {
                    return String(t).replace(o, ".").toLowerCase();
                }),
                c = (i.data = {}),
                u = (i.NATIVE = "N"),
                s = (i.POLYFILL = "P");
            t.exports = i;
        },
        function (t, e, r) {
            var n = r(4);
            t.exports =
                !!Object.getOwnPropertySymbols &&
                !n(function () {
                    return !String(Symbol());
                });
        },
        function (t, e, r) {
            var n = r(15);
            t.exports = function (t, e, r) {
                if ((n(t), void 0 === e)) return t;
                switch (r) {
                    case 0:
                        return function () {
                            return t.call(e);
                        };
                    case 1:
                        return function (r) {
                            return t.call(e, r);
                        };
                    case 2:
                        return function (r, n) {
                            return t.call(e, r, n);
                        };
                    case 3:
                        return function (r, n, o) {
                            return t.call(e, r, n, o);
                        };
                }
                return function () {
                    return t.apply(e, arguments);
                };
            };
        },
        function (t, e, r) {
            var n,
                o,
                i,
                a = r(0),
                c = r(4),
                u = r(9),
                s = r(38),
                l = r(40),
                d = r(18),
                f = r(41),
                p = a.location,
                _ = a.setImmediate,
                v = a.clearImmediate,
                h = a.process,
                m = a.MessageChannel,
                y = a.Dispatch,
                g = 0,
                b = {},
                x = function (t) {
                    if (b.hasOwnProperty(t)) {
                        var e = b[t];
                        delete b[t], e();
                    }
                },
                w = function (t) {
                    return function () {
                        x(t);
                    };
                },
                A = function (t) {
                    x(t.data);
                },
                E = function (t) {
                    a.postMessage(t + "", p.protocol + "//" + p.host);
                };
            (_ && v) ||
                ((_ = function (t) {
                    for (var e = [], r = 1; arguments.length > r;) e.push(arguments[r++]);
                    return (
                        (b[++g] = function () {
                            ("function" == typeof t ? t : Function(t)).apply(void 0, e);
                        }),
                        n(g),
                        g
                    );
                }),
                    (v = function (t) {
                        delete b[t];
                    }),
                    "process" == u(h)
                        ? (n = function (t) {
                            h.nextTick(w(t));
                        })
                        : y && y.now
                            ? (n = function (t) {
                                y.now(w(t));
                            })
                            : m && !f
                                ? ((i = (o = new m()).port2), (o.port1.onmessage = A), (n = s(i.postMessage, i, 1)))
                                : !a.addEventListener || "function" != typeof postMessage || a.importScripts || c(E) || "file:" === p.protocol
                                    ? (n =
                                        "onreadystatechange" in d("script")
                                            ? function (t) {
                                                l.appendChild(d("script")).onreadystatechange = function () {
                                                    l.removeChild(this), x(t);
                                                };
                                            }
                                            : function (t) {
                                                setTimeout(w(t), 0);
                                            })
                                    : ((n = E), a.addEventListener("message", A, !1))),
                (t.exports = { set: _, clear: v });
        },
        function (t, e, r) {
            var n = r(10);
            t.exports = n("document", "documentElement");
        },
        function (t, e, r) {
            var n = r(42);
            t.exports = /(iphone|ipod|ipad).*applewebkit/i.test(n);
        },
        function (t, e, r) {
            var n = r(10);
            t.exports = n("navigator", "userAgent") || "";
        },
        function (t, e, r) {
            "use strict";
            var n = r(15),
                o = function (t) {
                    var e, r;
                    (this.promise = new t(function (t, n) {
                        if (void 0 !== e || void 0 !== r) throw TypeError("Bad Promise constructor");
                        (e = t), (r = n);
                    })),
                        (this.resolve = n(e)),
                        (this.reject = n(r));
                };
            t.exports.f = function (t) {
                return new o(t);
            };
        },
        function (t, e, r) {
            var n,
                o = r(3),
                i = r(80),
                a = r(24),
                c = r(23),
                u = r(40),
                s = r(18),
                l = r(22),
                d = l("IE_PROTO"),
                f = function () { },
                p = function (t) {
                    return "<script>" + t + "</script>";
                },
                _ = function () {
                    try {
                        n = document.domain && new ActiveXObject("htmlfile");
                    } catch (t) { }
                    var t, e;
                    _ = n
                        ? (function (t) {
                            t.write(p("")), t.close();
                            var e = t.parentWindow.Object;
                            return (t = null), e;
                        })(n)
                        : (((e = s("iframe")).style.display = "none"), u.appendChild(e), (e.src = String("javascript:")), (t = e.contentWindow.document).open(), t.write(p("document.F=Object")), t.close(), t.F);
                    for (var r = a.length; r--;) delete _.prototype[a[r]];
                    return _();
                };
            (c[d] = !0),
                (t.exports =
                    Object.create ||
                    function (t, e) {
                        var r;
                        return null !== t ? ((f.prototype = o(t)), (r = new f()), (f.prototype = null), (r[d] = t)) : (r = _()), void 0 === e ? r : i(r, e);
                    });
        },
        function (t, e, r) {
            "use strict";
            var n,
                o,
                i,
                a = r(46),
                c = r(7),
                u = r(2),
                s = r(1),
                l = r(14),
                d = s("iterator"),
                f = !1;
            [].keys && ("next" in (i = [].keys()) ? (o = a(a(i))) !== Object.prototype && (n = o) : (f = !0)),
                null == n && (n = {}),
                l ||
                u(n, d) ||
                c(n, d, function () {
                    return this;
                }),
                (t.exports = { IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: f });
        },
        function (t, e, r) {
            var n = r(2),
                o = r(84),
                i = r(22),
                a = r(85),
                c = i("IE_PROTO"),
                u = Object.prototype;
            t.exports = a
                ? Object.getPrototypeOf
                : function (t) {
                    return (t = o(t)), n(t, c) ? t[c] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null;
                };
        },
        function (t, e, r) {
            r(48), r(78), (t.exports = r(88));
        },
        function (t, e, r) {
            "use strict";
            var n,
                o,
                i,
                a,
                c = r(26),
                u = r(14),
                s = r(0),
                l = r(10),
                d = r(60),
                f = r(13),
                p = r(61),
                _ = r(25),
                v = r(63),
                h = r(5),
                m = r(15),
                y = r(64),
                g = r(9),
                b = r(20),
                x = r(65),
                w = r(71),
                A = r(72),
                E = r(39).set,
                O = r(73),
                S = r(74),
                j = r(75),
                T = r(43),
                I = r(76),
                N = r(21),
                P = r(36),
                k = r(1),
                C = r(77),
                M = k("species"),
                F = "Promise",
                R = N.get,
                L = N.set,
                q = N.getterFor(F),
                z = d,
                B = s.TypeError,
                D = s.document,
                U = s.process,
                W = l("fetch"),
                H = T.f,
                G = H,
                J = "process" == g(U),
                X = !!(D && D.createEvent && s.dispatchEvent),
                $ = P(F, function () {
                    if (!(b(z) !== String(z))) {
                        if (66 === C) return !0;
                        if (!J && "function" != typeof PromiseRejectionEvent) return !0;
                    }
                    if (u && !z.prototype.finally) return !0;
                    if (C >= 51 && /native code/.test(z)) return !1;
                    var t = z.resolve(1),
                        e = function (t) {
                            t(
                                function () { },
                                function () { }
                            );
                        };
                    return ((t.constructor = {})[M] = e), !(t.then(function () { }) instanceof e);
                }),
                Y =
                    $ ||
                    !w(function (t) {
                        z.all(t).catch(function () { });
                    }),
                K = function (t) {
                    var e;
                    return !(!h(t) || "function" != typeof (e = t.then)) && e;
                },
                V = function (t, e, r) {
                    if (!e.notified) {
                        e.notified = !0;
                        var n = e.reactions;
                        O(function () {
                            for (var o = e.value, i = 1 == e.state, a = 0; n.length > a;) {
                                var c,
                                    u,
                                    s,
                                    l = n[a++],
                                    d = i ? l.ok : l.fail,
                                    f = l.resolve,
                                    p = l.reject,
                                    _ = l.domain;
                                try {
                                    d
                                        ? (i || (2 === e.rejection && et(t, e), (e.rejection = 1)),
                                            !0 === d ? (c = o) : (_ && _.enter(), (c = d(o)), _ && (_.exit(), (s = !0))),
                                            c === l.promise ? p(B("Promise-chain cycle")) : (u = K(c)) ? u.call(c, f, p) : f(c))
                                        : p(o);
                                } catch (t) {
                                    _ && !s && _.exit(), p(t);
                                }
                            }
                            (e.reactions = []), (e.notified = !1), r && !e.rejection && Z(t, e);
                        });
                    }
                },
                Q = function (t, e, r) {
                    var n, o;
                    X ? (((n = D.createEvent("Event")).promise = e), (n.reason = r), n.initEvent(t, !1, !0), s.dispatchEvent(n)) : (n = { promise: e, reason: r }),
                        (o = s["on" + t]) ? o(n) : "unhandledrejection" === t && j("Unhandled promise rejection", r);
                },
                Z = function (t, e) {
                    E.call(s, function () {
                        var r,
                            n = e.value;
                        if (
                            tt(e) &&
                            ((r = I(function () {
                                J ? U.emit("unhandledRejection", n, t) : Q("unhandledrejection", t, n);
                            })),
                                (e.rejection = J || tt(e) ? 2 : 1),
                                r.error)
                        )
                            throw r.value;
                    });
                },
                tt = function (t) {
                    return 1 !== t.rejection && !t.parent;
                },
                et = function (t, e) {
                    E.call(s, function () {
                        J ? U.emit("rejectionHandled", t) : Q("rejectionhandled", t, e.value);
                    });
                },
                rt = function (t, e, r, n) {
                    return function (o) {
                        t(e, r, o, n);
                    };
                },
                nt = function (t, e, r, n) {
                    e.done || ((e.done = !0), n && (e = n), (e.value = r), (e.state = 2), V(t, e, !0));
                },
                ot = function (t, e, r, n) {
                    if (!e.done) {
                        (e.done = !0), n && (e = n);
                        try {
                            if (t === r) throw B("Promise can't be resolved itself");
                            var o = K(r);
                            o
                                ? O(function () {
                                    var n = { done: !1 };
                                    try {
                                        o.call(r, rt(ot, t, n, e), rt(nt, t, n, e));
                                    } catch (r) {
                                        nt(t, n, r, e);
                                    }
                                })
                                : ((e.value = r), (e.state = 1), V(t, e, !1));
                        } catch (r) {
                            nt(t, { done: !1 }, r, e);
                        }
                    }
                };
            $ &&
                ((z = function (t) {
                    y(this, z, F), m(t), n.call(this);
                    var e = R(this);
                    try {
                        t(rt(ot, this, e), rt(nt, this, e));
                    } catch (t) {
                        nt(this, e, t);
                    }
                }),
                    ((n = function (t) {
                        L(this, { type: F, done: !1, notified: !1, parent: !1, reactions: [], rejection: !1, state: 0, value: void 0 });
                    }).prototype = p(z.prototype, {
                        then: function (t, e) {
                            var r = q(this),
                                n = H(A(this, z));
                            return (n.ok = "function" != typeof t || t), (n.fail = "function" == typeof e && e), (n.domain = J ? U.domain : void 0), (r.parent = !0), r.reactions.push(n), 0 != r.state && V(this, r, !1), n.promise;
                        },
                        catch: function (t) {
                            return this.then(void 0, t);
                        },
                    })),
                    (o = function () {
                        var t = new n(),
                            e = R(t);
                        (this.promise = t), (this.resolve = rt(ot, t, e)), (this.reject = rt(nt, t, e));
                    }),
                    (T.f = H = function (t) {
                        return t === z || t === i ? new o(t) : G(t);
                    }),
                    u ||
                    "function" != typeof d ||
                    ((a = d.prototype.then),
                        f(
                            d.prototype,
                            "then",
                            function (t, e) {
                                var r = this;
                                return new z(function (t, e) {
                                    a.call(r, t, e);
                                }).then(t, e);
                            },
                            { unsafe: !0 }
                        ),
                        "function" == typeof W &&
                        c(
                            { global: !0, enumerable: !0, forced: !0 },
                            {
                                fetch: function (t) {
                                    return S(z, W.apply(s, arguments));
                                },
                            }
                        ))),
                c({ global: !0, wrap: !0, forced: $ }, { Promise: z }),
                _(z, F, !1, !0),
                v(F),
                (i = l(F)),
                c(
                    { target: F, stat: !0, forced: $ },
                    {
                        reject: function (t) {
                            var e = H(this);
                            return e.reject.call(void 0, t), e.promise;
                        },
                    }
                ),
                c(
                    { target: F, stat: !0, forced: u || $ },
                    {
                        resolve: function (t) {
                            return S(u && this === i ? z : this, t);
                        },
                    }
                ),
                c(
                    { target: F, stat: !0, forced: Y },
                    {
                        all: function (t) {
                            var e = this,
                                r = H(e),
                                n = r.resolve,
                                o = r.reject,
                                i = I(function () {
                                    var r = m(e.resolve),
                                        i = [],
                                        a = 0,
                                        c = 1;
                                    x(t, function (t) {
                                        var u = a++,
                                            s = !1;
                                        i.push(void 0),
                                            c++,
                                            r.call(e, t).then(function (t) {
                                                s || ((s = !0), (i[u] = t), --c || n(i));
                                            }, o);
                                    }),
                                        --c || n(i);
                                });
                            return i.error && o(i.value), r.promise;
                        },
                        race: function (t) {
                            var e = this,
                                r = H(e),
                                n = r.reject,
                                o = I(function () {
                                    var o = m(e.resolve);
                                    x(t, function (t) {
                                        o.call(e, t).then(r.resolve, n);
                                    });
                                });
                            return o.error && n(o.value), r.promise;
                        },
                    }
                );
        },
        function (t, e) {
            var r;
            r = (function () {
                return this;
            })();
            try {
                r = r || new Function("return this")();
            } catch (t) {
                "object" == typeof window && (r = window);
            }
            t.exports = r;
        },
        function (t, e, r) {
            "use strict";
            var n = {}.propertyIsEnumerable,
                o = Object.getOwnPropertyDescriptor,
                i = o && !n.call({ 1: 2 }, 1);
            e.f = i
                ? function (t) {
                    var e = o(this, t);
                    return !!e && e.enumerable;
                }
                : n;
        },
        function (t, e, r) {
            var n = r(4),
                o = r(9),
                i = "".split;
            t.exports = n(function () {
                return !Object("z").propertyIsEnumerable(0);
            })
                ? function (t) {
                    return "String" == o(t) ? i.call(t, "") : Object(t);
                }
                : Object;
        },
        function (t, e, r) {
            var n = r(0),
                o = r(20),
                i = n.WeakMap;
            t.exports = "function" == typeof i && /native code/.test(o(i));
        },
        function (t, e, r) {
            var n = r(2),
                o = r(54),
                i = r(16),
                a = r(8);
            t.exports = function (t, e) {
                for (var r = o(e), c = a.f, u = i.f, s = 0; s < r.length; s++) {
                    var l = r[s];
                    n(t, l) || c(t, l, u(e, l));
                }
            };
        },
        function (t, e, r) {
            var n = r(10),
                o = r(56),
                i = r(59),
                a = r(3);
            t.exports =
                n("Reflect", "ownKeys") ||
                function (t) {
                    var e = o.f(a(t)),
                        r = i.f;
                    return r ? e.concat(r(t)) : e;
                };
        },
        function (t, e, r) {
            var n = r(0);
            t.exports = n;
        },
        function (t, e, r) {
            var n = r(33),
                o = r(24).concat("length", "prototype");
            e.f =
                Object.getOwnPropertyNames ||
                function (t) {
                    return n(t, o);
                };
        },
        function (t, e, r) {
            var n = r(12),
                o = r(34),
                i = r(58),
                a = function (t) {
                    return function (e, r, a) {
                        var c,
                            u = n(e),
                            s = o(u.length),
                            l = i(a, s);
                        if (t && r != r) {
                            for (; s > l;) if ((c = u[l++]) != c) return !0;
                        } else for (; s > l; l++) if ((t || l in u) && u[l] === r) return t || l || 0;
                        return !t && -1;
                    };
                };
            t.exports = { includes: a(!0), indexOf: a(!1) };
        },
        function (t, e, r) {
            var n = r(35),
                o = Math.max,
                i = Math.min;
            t.exports = function (t, e) {
                var r = n(t);
                return r < 0 ? o(r + e, 0) : i(r, e);
            };
        },
        function (t, e) {
            e.f = Object.getOwnPropertySymbols;
        },
        function (t, e, r) {
            var n = r(0);
            t.exports = n.Promise;
        },
        function (t, e, r) {
            var n = r(13);
            t.exports = function (t, e, r) {
                for (var o in e) n(t, o, e[o], r);
                return t;
            };
        },
        function (t, e, r) {
            var n = r(37);
            t.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator;
        },
        function (t, e, r) {
            "use strict";
            var n = r(10),
                o = r(8),
                i = r(1),
                a = r(6),
                c = i("species");
            t.exports = function (t) {
                var e = n(t),
                    r = o.f;
                a &&
                    e &&
                    !e[c] &&
                    r(e, c, {
                        configurable: !0,
                        get: function () {
                            return this;
                        },
                    });
            };
        },
        function (t, e) {
            t.exports = function (t, e, r) {
                if (!(t instanceof e)) throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
                return t;
            };
        },
        function (t, e, r) {
            var n = r(3),
                o = r(66),
                i = r(34),
                a = r(38),
                c = r(67),
                u = r(70),
                s = function (t, e) {
                    (this.stopped = t), (this.result = e);
                };
            (t.exports = function (t, e, r, l, d) {
                var f,
                    p,
                    _,
                    v,
                    h,
                    m,
                    y,
                    g = a(e, r, l ? 2 : 1);
                if (d) f = t;
                else {
                    if ("function" != typeof (p = c(t))) throw TypeError("Target is not iterable");
                    if (o(p)) {
                        for (_ = 0, v = i(t.length); v > _; _++) if ((h = l ? g(n((y = t[_]))[0], y[1]) : g(t[_])) && h instanceof s) return h;
                        return new s(!1);
                    }
                    f = p.call(t);
                }
                for (m = f.next; !(y = m.call(f)).done;) if ("object" == typeof (h = u(f, g, y.value, l)) && h && h instanceof s) return h;
                return new s(!1);
            }).stop = function (t) {
                return new s(!0, t);
            };
        },
        function (t, e, r) {
            var n = r(1),
                o = r(11),
                i = n("iterator"),
                a = Array.prototype;
            t.exports = function (t) {
                return void 0 !== t && (o.Array === t || a[i] === t);
            };
        },
        function (t, e, r) {
            var n = r(68),
                o = r(11),
                i = r(1)("iterator");
            t.exports = function (t) {
                if (null != t) return t[i] || t["@@iterator"] || o[n(t)];
            };
        },
        function (t, e, r) {
            var n = r(69),
                o = r(9),
                i = r(1)("toStringTag"),
                a =
                    "Arguments" ==
                    o(
                        (function () {
                            return arguments;
                        })()
                    );
            t.exports = n
                ? o
                : function (t) {
                    var e, r, n;
                    return void 0 === t
                        ? "Undefined"
                        : null === t
                            ? "Null"
                            : "string" ==
                                typeof (r = (function (t, e) {
                                    try {
                                        return t[e];
                                    } catch (t) { }
                                })((e = Object(t)), i))
                                ? r
                                : a
                                    ? o(e)
                                    : "Object" == (n = o(e)) && "function" == typeof e.callee
                                        ? "Arguments"
                                        : n;
                };
        },
        function (t, e, r) {
            var n = {};
            (n[r(1)("toStringTag")] = "z"), (t.exports = "[object z]" === String(n));
        },
        function (t, e, r) {
            var n = r(3);
            t.exports = function (t, e, r, o) {
                try {
                    return o ? e(n(r)[0], r[1]) : e(r);
                } catch (e) {
                    var i = t.return;
                    throw (void 0 !== i && n(i.call(t)), e);
                }
            };
        },
        function (t, e, r) {
            var n = r(1)("iterator"),
                o = !1;
            try {
                var i = 0,
                    a = {
                        next: function () {
                            return { done: !!i++ };
                        },
                        return: function () {
                            o = !0;
                        },
                    };
                (a[n] = function () {
                    return this;
                }),
                    Array.from(a, function () {
                        throw 2;
                    });
            } catch (t) { }
            t.exports = function (t, e) {
                if (!e && !o) return !1;
                var r = !1;
                try {
                    var i = {};
                    (i[n] = function () {
                        return {
                            next: function () {
                                return { done: (r = !0) };
                            },
                        };
                    }),
                        t(i);
                } catch (t) { }
                return r;
            };
        },
        function (t, e, r) {
            var n = r(3),
                o = r(15),
                i = r(1)("species");
            t.exports = function (t, e) {
                var r,
                    a = n(t).constructor;
                return void 0 === a || null == (r = n(a)[i]) ? e : o(r);
            };
        },
        function (t, e, r) {
            var n,
                o,
                i,
                a,
                c,
                u,
                s,
                l,
                d = r(0),
                f = r(16).f,
                p = r(9),
                _ = r(39).set,
                v = r(41),
                h = d.MutationObserver || d.WebKitMutationObserver,
                m = d.process,
                y = d.Promise,
                g = "process" == p(m),
                b = f(d, "queueMicrotask"),
                x = b && b.value;
            x ||
                ((n = function () {
                    var t, e;
                    for (g && (t = m.domain) && t.exit(); o;) {
                        (e = o.fn), (o = o.next);
                        try {
                            e();
                        } catch (t) {
                            throw (o ? a() : (i = void 0), t);
                        }
                    }
                    (i = void 0), t && t.enter();
                }),
                    g
                        ? (a = function () {
                            m.nextTick(n);
                        })
                        : h && !v
                            ? ((c = !0),
                                (u = document.createTextNode("")),
                                new h(n).observe(u, { characterData: !0 }),
                                (a = function () {
                                    u.data = c = !c;
                                }))
                            : y && y.resolve
                                ? ((s = y.resolve(void 0)),
                                    (l = s.then),
                                    (a = function () {
                                        l.call(s, n);
                                    }))
                                : (a = function () {
                                    _.call(d, n);
                                })),
                (t.exports =
                    x ||
                    function (t) {
                        var e = { fn: t, next: void 0 };
                        i && (i.next = e), o || ((o = e), a()), (i = e);
                    });
        },
        function (t, e, r) {
            var n = r(3),
                o = r(5),
                i = r(43);
            t.exports = function (t, e) {
                if ((n(t), o(e) && e.constructor === t)) return e;
                var r = i.f(t);
                return (0, r.resolve)(e), r.promise;
            };
        },
        function (t, e, r) {
            var n = r(0);
            t.exports = function (t, e) {
                var r = n.console;
                r && r.error && (1 === arguments.length ? r.error(t) : r.error(t, e));
            };
        },
        function (t, e) {
            t.exports = function (t) {
                try {
                    return { error: !1, value: t() };
                } catch (t) {
                    return { error: !0, value: t };
                }
            };
        },
        function (t, e, r) {
            var n,
                o,
                i = r(0),
                a = r(42),
                c = i.process,
                u = c && c.versions,
                s = u && u.v8;
            s ? (o = (n = s.split("."))[0] + n[1]) : a && (!(n = a.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = a.match(/Chrome\/(\d+)/)) && (o = n[1]), (t.exports = o && +o);
        },
        function (t, e, r) {
            "use strict";
            var n = r(12),
                o = r(79),
                i = r(11),
                a = r(21),
                c = r(82),
                u = a.set,
                s = a.getterFor("Array Iterator");
            (t.exports = c(
                Array,
                "Array",
                function (t, e) {
                    u(this, { type: "Array Iterator", target: n(t), index: 0, kind: e });
                },
                function () {
                    var t = s(this),
                        e = t.target,
                        r = t.kind,
                        n = t.index++;
                    return !e || n >= e.length ? ((t.target = void 0), { value: void 0, done: !0 }) : "keys" == r ? { value: n, done: !1 } : "values" == r ? { value: e[n], done: !1 } : { value: [n, e[n]], done: !1 };
                },
                "values"
            )),
                (i.Arguments = i.Array),
                o("keys"),
                o("values"),
                o("entries");
        },
        function (t, e, r) {
            var n = r(1),
                o = r(44),
                i = r(8),
                a = n("unscopables"),
                c = Array.prototype;
            null == c[a] && i.f(c, a, { configurable: !0, value: o(null) }),
                (t.exports = function (t) {
                    c[a][t] = !0;
                });
        },
        function (t, e, r) {
            var n = r(6),
                o = r(8),
                i = r(3),
                a = r(81);
            t.exports = n
                ? Object.defineProperties
                : function (t, e) {
                    i(t);
                    for (var r, n = a(e), c = n.length, u = 0; c > u;) o.f(t, (r = n[u++]), e[r]);
                    return t;
                };
        },
        function (t, e, r) {
            var n = r(33),
                o = r(24);
            t.exports =
                Object.keys ||
                function (t) {
                    return n(t, o);
                };
        },
        function (t, e, r) {
            "use strict";
            var n = r(26),
                o = r(83),
                i = r(46),
                a = r(86),
                c = r(25),
                u = r(7),
                s = r(13),
                l = r(1),
                d = r(14),
                f = r(11),
                p = r(45),
                _ = p.IteratorPrototype,
                v = p.BUGGY_SAFARI_ITERATORS,
                h = l("iterator"),
                m = function () {
                    return this;
                };
            t.exports = function (t, e, r, l, p, y, g) {
                o(r, e, l);
                var b,
                    x,
                    w,
                    A = function (t) {
                        if (t === p && T) return T;
                        if (!v && t in S) return S[t];
                        switch (t) {
                            case "keys":
                            case "values":
                            case "entries":
                                return function () {
                                    return new r(this, t);
                                };
                        }
                        return function () {
                            return new r(this);
                        };
                    },
                    E = e + " Iterator",
                    O = !1,
                    S = t.prototype,
                    j = S[h] || S["@@iterator"] || (p && S[p]),
                    T = (!v && j) || A(p),
                    I = ("Array" == e && S.entries) || j;
                if (
                    (I && ((b = i(I.call(new t()))), _ !== Object.prototype && b.next && (d || i(b) === _ || (a ? a(b, _) : "function" != typeof b[h] && u(b, h, m)), c(b, E, !0, !0), d && (f[E] = m))),
                        "values" == p &&
                        j &&
                        "values" !== j.name &&
                        ((O = !0),
                            (T = function () {
                                return j.call(this);
                            })),
                        (d && !g) || S[h] === T || u(S, h, T),
                        (f[e] = T),
                        p)
                )
                    if (((x = { values: A("values"), keys: y ? T : A("keys"), entries: A("entries") }), g)) for (w in x) (v || O || !(w in S)) && s(S, w, x[w]);
                    else n({ target: e, proto: !0, forced: v || O }, x);
                return x;
            };
        },
        function (t, e, r) {
            "use strict";
            var n = r(45).IteratorPrototype,
                o = r(44),
                i = r(17),
                a = r(25),
                c = r(11),
                u = function () {
                    return this;
                };
            t.exports = function (t, e, r) {
                var s = e + " Iterator";
                return (t.prototype = o(n, { next: i(1, r) })), a(t, s, !1, !0), (c[s] = u), t;
            };
        },
        function (t, e, r) {
            var n = r(27);
            t.exports = function (t) {
                return Object(n(t));
            };
        },
        function (t, e, r) {
            var n = r(4);
            t.exports = !n(function () {
                function t() { }
                return (t.prototype.constructor = null), Object.getPrototypeOf(new t()) !== t.prototype;
            });
        },
        function (t, e, r) {
            var n = r(3),
                o = r(87);
            t.exports =
                Object.setPrototypeOf ||
                ("__proto__" in {}
                    ? (function () {
                        var t,
                            e = !1,
                            r = {};
                        try {
                            (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(r, []), (e = r instanceof Array);
                        } catch (t) { }
                        return function (r, i) {
                            return n(r), o(i), e ? t.call(r, i) : (r.__proto__ = i), r;
                        };
                    })()
                    : void 0);
        },
        function (t, e, r) {
            var n = r(5);
            t.exports = function (t) {
                if (!n(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
                return t;
            };
        },
        function (t, e) {
            function r(t) {
                return "none" === window.getComputedStyle(t).display;
            }
            function n() {
                var t = window.localStorage.getItem("auid");
                return (
                    null === t &&
                    ((t = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (t) {
                        return (t ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (t / 4)))).toString(16);
                    })),
                        window.localStorage.setItem("auid", t)),
                    t
                );
            }
            function o() {
                return {
                    sid: storeDisplayId,
                    auid: n(),
                    e: "pe",
                    r: encodeURIComponent(document.referrer),
                    ts: Date.now(),
                    l: encodeURIComponent(window.location.href),
                    t: encodeURIComponent(document.title),
                    ua: encodeURIComponent(navigator.userAgent),
                    b: navigator.appName,
                    p: navigator.platform,
                    ce: navigator.cookieEnabled,
                    ct:
                        ((t = ""),
                            document.cookie &&
                            (cart_cookies = document.cookie.split(";").forEach(function (e) {
                                (data = e.trim().split("=")), 2 == data.length && "cart" === data[0] && (t = data[1]);
                            })),
                            t),
                };
                var t;
            }
            var i = Math.round(1e12 * Math.random());
            function a(t) {
                api_url = "https://analytics.aarzoo.app/observe?";
                var e,
                    r,
                    n,
                    o = JSON.stringify(t),
                    a = btoa(o);
                (queryParams = ["ed=" + a, "z=" + i]),
                    (api_url += queryParams.join("&")),
                    (e = api_url),
                    (n = new XMLHttpRequest()).open("GET", e, (async = !0)),
                    (n.onload = function (t) {
                        4 === n.readyState && (200 === n.status ? (r && r(), console.log(n.responseText)) : console.error(n.statusText));
                    }),
                    (n.onerror = function (t) {
                        console.error(n.statusText);
                    }),
                    n.send(null);
            }
            function u(t) {
                if (!(t.indexOf("span") > -1)) return t;
                try {
                    return t.split("<")[1].split(">")[1];
                } catch (e) {
                    return t;
                }
            }
            function s(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "data-dexter-loading";
                t.setAttribute(e, "false");
            }
            function l(t) {
                "complete" === document.readyState ? (console.log("Window load already fired. Executing directly."), t()) : window.addEventListener("load", t, !1);
            }
            function d(t, e, r) {
                for (
                    var n,
                    o = t.querySelector('[name="quantity"]'),
                    i = document.createNodeIterator(t, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: function (t) {
                            return (
                                (node_values = r.map(function (e) {
                                    return t.getAttribute(e);
                                })),
                                node_values.push(t.innerText),
                                node_values.some(function (t) {
                                    return e.includes(t);
                                })
                                    ? NodeFilter.FILTER_ACCEPT
                                    : NodeFilter.FILTER_REJECT
                            );
                        },
                    });
                    (n = i.nextNode());

                )
                    "true" === n.getAttribute("data-dexter-label-mutated") ||
                        n.contains(o) ||
                        -1 !== n.outerHTML.indexOf("data-dexter-label-mutated") ||
                        "id" === n.getAttribute("name") ||
                        (n.labels &&
                            n.labels.forEach(function (t) {
                                return t.remove();
                            }),
                            n.remove());
            }
            function f(t, e) {
                for (
                    var r,
                    n = Object.keys(e),
                    o = document.createNodeIterator(t, NodeFilter.SHOW_TEXT, {
                        acceptNode: function (t) {
                            return n.includes(t.textContent.trim()) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
                        },
                    });
                    (r = o.nextNode());

                ) {
                    var i = r.parentElement;
                    if ("true" !== i.getAttribute("data-dexter-label-mutated")) {
                        var a = r.textContent.trim(),
                            c = e[a];
                        c && (r.textContent = r.textContent.replace(a, c)), "setAttribute" in i && i.setAttribute("data-dexter-label-mutated", "true");
                    }
                }
            }
            function p(t, e) {
                (classes_selector = "." + e.split(",").join(",.")),
                    (selector_els = t.querySelectorAll(classes_selector)),
                    selector_els.forEach(function (t) {
                        return (t.style.display = "none");
                    });
            }
            function _(t, e, r) {
                function n(t) {
                    t.dispatchEvent(new Event("change", { bubbles: !0 }));
                }
                t.querySelectorAll("[value]").forEach(function (t) {
                    !(function (t, e) {
                        t.removeAttribute("selected"), t.removeAttribute("checked"), "selected" in t && (t.selected = !1), "checked" in t && (t.checked = !1), e && n(t);
                    })(t, (triggerChange = !1));
                }),
                    (selector = [e, r]
                        .map(function (t) {
                            return '[value="'.concat(t, '"]');
                        })
                        .join(",")),
                    t.querySelectorAll(selector).forEach(function (t) {
                        !(function (t, e) {
                            t.setAttribute("selected", "selected"), t.setAttribute("checked", "checked"), "selected" in t && (t.selected = !0), "checked" in t && (t.checked = !0), e && n(t);
                        })(t, (triggerChange = !0));
                    });
            }
            function v(t, e, r, n) {
                function o(t) {
                    return t.replaceAll(" ", "");
                }
                function i(t) {
                    return t.replaceAll(".", ",");
                }
                function a(t) {
                    return (num_str = t.match(/\d/g).join("")), num_str.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
                }
                function c(t, e, r) {
                    console.log(e, r)
                    var n = e.replace(".00", ""),
                        c = r.replace(".00", "");
                    return (
                        t.indexOf(r) > -1
                            ? (t = t.replaceAll(r, e))
                            : t.indexOf(c) > -1
                                ? (t = t.replaceAll(c, n))
                                : t.indexOf(o(r)) > -1
                                    ? (t = t.replaceAll(o(r), o(e)))
                                    : t.indexOf(o(c)) > -1
                                        ? (t = t.replaceAll(o(c), o(n)))
                                        : t.indexOf(i(r)) > -1
                                            ? (t = t.replaceAll(i(r), i(e)))
                                            : t.indexOf(i(c)) > -1
                                                ? (t = t.replaceAll(i(c), i(n)))
                                                : t.indexOf(a(r)) > -1
                                                    ? (t = t.replaceAll(a(r), a(e)))
                                                    : t.indexOf(a(c)) > -1 && (t = t.replaceAll(a(c), a(n))),
                        (t = t.replace(/From |from |From|from/gi, ""))
                    );
                }
                if (((price_selector = "." + n.split(",").join(",.")), (price_els = n ? t.querySelectorAll(price_selector) : null), price_els))
                    price_els.forEach(function (t) {
                        (t.innerHTML = c(t.innerHTML, e, r)), "setAttribute" in t && t.setAttribute("data-dexter-price-mutated", "true");
                    });
                else
                    for (
                        var u,
                        s = document.createNodeIterator(t, NodeFilter.SHOW_TEXT, {
                            acceptNode: function (t) {
                                return (e = t.textContent), /\d/.test(e);
                                var e;
                            },
                        });
                        (u = s.nextNode());

                    ) {
                        var l = u.parentElement;
                        "true" !== l.getAttribute("data-dexter-price-mutated") && ((u.textContent = c(u.textContent, e, r)), "setAttribute" in l && l.setAttribute("data-dexter-price-mutated", "true"));
                    }
            }
            function h(t, e) {
                for (
                    var r,
                    n = Object.keys(e),
                    o = document.createNodeIterator(t, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: function (t) {
                            return (
                                (node_values = T.option_value_keys.map(function (e) {
                                    return t.getAttribute(e);
                                })),
                                node_values.some(function (t) {
                                    return n.includes(t);
                                })
                                    ? NodeFilter.FILTER_ACCEPT
                                    : NodeFilter.FILTER_REJECT
                            );
                        },
                    });
                    (r = o.nextNode());

                )
                    "true" !== r.getAttribute("data-dexter-val-mutated") &&
                        (T.option_value_keys.forEach(function (t) {
                            var o = r.getAttribute(t);
                            o && n.includes(o) && r.setAttribute(t, e[o]);
                        }),
                            r.dispatchEvent(new Event("change", { bubbles: !0 })),
                            r.setAttribute("data-dexter-val-mutated", "true"));
            }
            function m(t) {
                try {
                    return t.split("/products/")[1].split("?")[0].split("#")[0];
                } catch (t) {
                    return "";
                }
            }
            function y(t, e) {
                var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                    c = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                if ("true" !== t.getAttribute("data-dexter-processed")) {
                    var u = function () {
                        r && ((show_price = e["dp_" + e.z]), (hide_price = e["dp_" + e.z_]), v(t, show_price, hide_price, T.price_class)),
                            n && e.variantIdToSelect && _(t, e.variantIdToSelect, e.v2o[e.variantIdToSelect]),
                            c
                                ? ((form_el = "FORM" === t.nodeName ? t : t.querySelector('form[action="/cart/add"]')),
                                    (form_el = form_el || t),
                                    form_el && h(form_el, e.v_map),
                                    form_el.setAttribute("data-dexter-form-submission", "overwritten"))
                                : (d(t, e.options_to_hide, T.option_value_keys), e.hide_variant_selector || f(t, e.dlmap)),
                            T.empty_variant_option_query_selector &&
                            t.querySelectorAll(T.empty_variant_option_query_selector).forEach(function (t) {
                                0 === t.childElementCount && (t.style.display = "none");
                            }),
                            (e.hide_variant_selector || c) &&
                            T.variant_selector_class &&
                            ((variant_selector_classes = T.variant_selector_class ? "selector-wrapper,radio-wrapper," + T.variant_selector_class : "selector-wrapper,radio-wrapper"), p(t, variant_selector_classes)),
                            s(T.dom_html_el);
                    };
                    t.setAttribute("data-dexter-processed", "true"),
                        0 == e.pings && ((analytics_data = o()), (analytics_data.v = e.z), (analytics_data.eid = e.eid), a(analytics_data), (e.pings += 1)),
                        0 != i ? (setTimeout(u, i), setTimeout(u, i + 500)) : u();
                }
            }
            function g(t, e, r) {
                T.live[t] || (T.live[t] = "form" === t ? document.forms : document.getElementsByClassName(t)), T.snapshot[t] || (T.snapshot[t] = []);
                var n = Array.from(T.live[t]);
                if (n !== T.snapshot[t]) for (var o = 0; o < n.length; o++) e(n[o], r);
                T.snapshot[t] = n;
            }
            function b(t, e) {
                "true" !== t.getAttribute("data-dexter-handled") &&
                    (t.setAttribute("data-dexter-handled", "true"),
                        (product_handle = (function (t) {
                            var e = t.getAttribute("href") ? m(t.getAttribute("href")) : "";
                            if (!e) {
                                var r = t.getElementsByTagName("a")[0];
                                e = r ? m(r.getAttribute("href")) : "";
                            }
                            return decodeURI(e);
                        })(t)),
                        (product_config = e[product_handle]),
                        product_config &&
                        (y(t, product_config, (replace_price = !0), (preselect_variant = !0), (delay = T.product_card_delay), (remap_variants = T.remap_product_card_variants)),
                            T.hide_product_card_variant_selector && T.product_card_variant_selector_class && ((var_selector = t.querySelector("." + T.product_card_variant_selector_class)), var_selector && (var_selector.style.display = "none")),
                            t.setAttribute("data-dexter-product-handle", product_handle)));
            }
            function x(t, e) {
                if (t.action.indexOf("/cart/add") > -1 && "true" !== t.getAttribute("data-dexter-handled")) {
                    var r;
                    t.setAttribute("data-dexter-handled", "true");
                    for (var n = 0; n < t.elements.length && !(r = v2p_[Number(t.elements[n].value)]); n++);
                    (product_config = e[r]),
                        product_config && (r !== T.shopify_product_handle && y(t, product_config, (replace_price = !0), (preselect_variant = !0), (delay = T.main_product_delay)), t.setAttribute("data-dexter-product-handle", r));
                }
            }
            function w(t, e) {
                (root_el = t),
                    (product_el = t.getElementsByClassName(T.product_modal_product_class)[0]),
                    (t = product_el || t),
                    ["ignore", "processing", "finished"].includes(t.getAttribute("data-dexter-status")) ||
                    (!r(t) &&
                        t.querySelector("[name=id]") &&
                        setTimeout(function () {
                            t.setAttribute("data-dexter-status", "processing");
                            var r = t.getAttribute("data-dexter-product-handle"),
                                n = !0;
                            if (!r)
                                if (((n = !1), (form_el = t.getElementsByTagName("form")[0]), form_el)) for (var o = 0; o < form_el.elements.length && !(r = v2p_[form_el.elements[o].value]); o++);
                                else {
                                    possible_variant_ids = Array.from(t.querySelectorAll("[value]")).map(function (t) {
                                        return t.getAttribute("value");
                                    });
                                    for (var i = 0; i < possible_variant_ids.length && !(r = v2p_[possible_variant_ids[i]]); i++);
                                }
                            (product_config = e[r]),
                                product_config
                                    ? ((preselect_variant = !n),
                                        y(t, product_config, (replace_price = !0), (preselect_variant = preselect_variant), (delay = T.product_modal_delay)),
                                        t.setAttribute("data-dexter-product-handle", r),
                                        t.setAttribute("data-dexter-status", "finished"))
                                    : r
                                        ? t.setAttribute("data-dexter-status", "ignore")
                                        : t.setAttribute("data-dexter-status", "finished");
                        }, 500));
            }
            function A(t, e) {
                "true" !== t.getAttribute("data-dexter-handled") &&
                    (r(t) ||
                        setTimeout(function () {
                            y(t, e, (replace_price = T.update_product_page_price_manually), (preselect_variant = !0), (delay = T.main_product_modal_delay), (remap_variants = !1));
                        }, 200));
            }
            function E() {
                if ("product" === T.page_type && T.product_page_test) {
                    console.log(T.shopify_product_handle)
                    var t = cfg_[T.shopify_product_handle];
                    (is_variant_mismatch = (function (t, e) {
                        if (!Array.isArray(t) || !Array.isArray(e) || t.length !== e.length) return !0;
                        for (var r = t.concat().sort(), n = e.concat().sort(), o = 0; o < r.length; o++) if (r[o] !== n[o]) return !0;
                        return !1;
                    })(T.shopify_variant_ids, t.vids.all)),
                        is_variant_mismatch ||
                        ((product_el = T.product_class ? document.getElementsByClassName(T.product_class)[0] : document.querySelectorAll('form[action="/cart/add"]')[0]),
                            y(product_el, t, (replace_price = T.update_product_page_price_manually), (preselect_variant = !T.redirect), (delay = T.main_product_delay), (remap_variants = T.remap_main_product_variants)));
                }
                (mutation_observer = new MutationObserver(function (t) {
                    T.product_card_class &&
                        T.product_card_class.split(",").forEach(function (t) {
                            return g(t, b, cfg_);
                        }),
                        "index" === T.page_type && g("form", x, cfg_),
                        T.product_modal_class &&
                        T.product_modal_class.split(",").forEach(function (t) {
                            return g(t, w, cfg_);
                        }),
                        "product" === T.page_type &&
                        T.other_variant_selector_classes &&
                        T.product_page_test &&
                        T.other_variant_selector_classes.split(",").forEach(function (t) {
                            return g(t, A, cfg_[T.shopify_product_handle]);
                        }),
                        "product" === T.page_type &&
                        T.other_variant_selector_ids &&
                        T.product_page_test &&
                        T.other_variant_selector_ids.split(",").forEach(function (t) {
                            w
                                (el = document.getElementById(t)), el && A(el, cfg_[T.shopify_product_handle]);
                        });
                })),
                    mutation_observer.observe(document.body, { subtree: !0, childList: !0 });
            }
            var O,
                S,
                j,
                T = {
                    shopify_product_id: shopifyProduct.id,
                    shopify_product_handle: shopifyProduct.handle,
                    page_type: "product",
                    shopify_selected_or_first_available_variant_id: shopifyProduct.variants[0].id,
                    shopify_variant_ids: dexterProduct
                        ? dexterProduct.variants.map(function (t) {
                            return String(t.id);
                        })
                        : [],
                    out_of_stock_variant_ids: dexterProduct
                        ? dexterProduct.variants
                            .filter(function (t) {
                                return !t.available;
                            })
                            .map(function (t) {
                                return String(t.id);
                            })
                        : [],
                    test: !1,
                    product_page_test: !1,
                    landing_url: window.location.href,
                    dom_html_el: document.querySelector("html"),
                    live: {},
                    snapshot: {},
                    product_class: html_ids ? html_ids.product_class : null,
                    product_card_class: html_ids && html_ids.product_card_class ? html_ids.product_card_class : null,
                    price_class: html_ids ? html_ids.price_class : null,
                    variant_selector_class: html_ids ? html_ids.variant_selector_class : null,
                    product_card_variant_selector_class: html_ids ? html_ids.product_card_variant_selector_class : null,
                    update_product_page_price_manually: "true" === html_ids.update_product_page_price_manually,
                    redirect: "true" === html_ids.redirect,
                    product_modal_class: html_ids.product_modal_class,
                    other_variant_selector_classes: html_ids.other_variant_selector_classes,
                    other_variant_selector_ids: html_ids.other_variant_selector_ids,
                    remap_main_product_variants: "true" === html_ids.remap_main_product_variants,
                    remap_product_card_variants: "true" === html_ids.remap_product_card_variants,
                    main_product_delay: html_ids.main_product_delay ? Number(html_ids.main_product_delay) : 500,
                    product_card_delay: html_ids.product_card_delay ? Number(html_ids.product_card_delay) : 0,
                    product_modal_delay: html_ids.product_modal_delay ? Number(html_ids.product_modal_delay) : 500,
                    product_modal_product_class: html_ids.product_modal_product_class,
                    trigger_on_winload: "true" === html_ids.trigger_on_winload,
                    option_value_keys: ["value", "data-value", "data-tooltip", "data-escape", "data-variant-id", "data-vid", "data-popup", "v_id", "data-id"],
                    hide_product_card_variant_selector: "true" === html_ids.hide_product_card_variant_selector,
                    enable_same_variation_for_all_products: "true" === html_ids.enable_same_variation_for_all_products,
                    empty_variant_option_query_selector: html_ids.empty_variant_option_query_selector,
                };
            if (
                ((function (t) {
                    var e = {},
                        r = function () {
                            var r = t[key];
                            r.vids.all.forEach(function (t) {
                                e[t] = r.slug;
                            });
                        };
                    for (key in t) r();
                    var n = {},
                        o = function () {
                            var e,
                                r = t[key],
                                o = T.enable_same_variation_for_all_products ? "dexter_" + storeDisplayId : "dexter_" + r.eid,
                                i = (function (t, e) {
                                    e || (e = window.location.href), (t = t.replace(/[\[\]]/g, "\\$&"));
                                    var r = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(e);
                                    return r ? (r[2] ? decodeURIComponent(r[2].replace(/\+/g, " ")) : "") : null;
                                })("z", window.location.href);
                            ["v0", "v1"].includes(i) || ((i = window.localStorage.getItem(o)), ["v0", "v1"].includes(i) || ((i = "v" + ((e = Number(r.ab)), Math.random() < e ? 1 : 0)), window.localStorage.setItem(o, i)));
                            var a = "v1" === i ? "v0" : "v1";
                            if (
                                ((r.z = i),
                                    (r.z_ = a),
                                    (r.options_to_hide = [].concat(r.opts[a], r.vids[a])),
                                    (r.options_to_show = [].concat(r.opts[i], r.vids[i])),
                                    (r.hide_variant_selector = r.opts.all.includes("Default Title") && 2 === r.opts.all.length),
                                    r.hide_variant_selector && T.product_class && T.variant_selector_class)
                            ) {
                                var c = document.getElementsByClassName(T.product_class)[0];
                                if (c) {
                                    var s = c.getElementsByClassName(T.variant_selector_class)[0];
                                    s && ((s.style.display = "none"), console.log(s), console.log("setting display to none in config"));
                                }
                            }
                            r.update_display_labels = "v1" === i;
                            var l = T.shopify_selected_or_first_available_variant_id;
                            (r.variantIdToSelect = r.vids[a].includes(l) ? r.v2v[l] : l || ("v1" === i ? r.vids.v1[0] : null)),
                                (r.oosv = []),
                                (r.pings = 0),
                                (r.rdl_map = (function (t) {
                                    var e = {};
                                    for (var r in t) e[t[r]] = r;
                                    return e;
                                })(r.dl_map)),
                                (r.dp_v0 = u(r.dp_v0)),
                                (r.dp_v1 = u(r.dp_v1)),
                                (r.v_map = {}),
                                r.vids[a].forEach(function (t) {
                                    r.v_map[t] = r.v2v[t];
                                }),
                                (r.o_map = {}),
                                (n[r.slug] = r);
                        };
                    for (key in t) o();
                    (window.cfg_ = n), (window.v2p_ = e);
                })(c),
                    "product" === T.page_type && T.shopify_product_handle && Object.keys(cfg_).includes(T.shopify_product_handle))
            ) {
                var I = cfg_[T.shopify_product_handle];
                (T.product_page_test = !0),
                    T.redirect &&
                    I.variantIdToSelect &&
                    I.variantIdToSelect != T.shopify_selected_or_first_available_variant_id &&
                    ((O = I.variantIdToSelect), (S = new URLSearchParams(window.location.search)).set("variant", O), (window.location.search = S)),
                    (function () {
                        var t = document.head || document.getElementsByTagName("head")[0],
                            e = document.createElement("style");
                        t.appendChild(e);
                        var r = document.createTextNode("\n   *[data-dexter-loading=true] * * *  {\n      visibility: hidden !important;\n    }\n  ");
                        e.appendChild(r);
                    })(),
                    (function (t, e) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "data-dexter-loading";
                        t.setAttribute(r, "true");
                        var n = e || 2e3;
                        setTimeout(function () {
                            t.setAttribute(r, "false");
                        }, n);
                    })(T.dom_html_el, 5e3),
                    l(function () {
                        return s(T.dom_html_el);
                    });
            }
            T.trigger_on_winload ? l(E) : ((j = E), "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", j, !1) : (console.log("DOMContentLoaded has already fired. Executing directly."), j()));
        },
    ]);

} catch (t) {
    console.log("dexter global error.", t)
    document.querySelector("html").setAttribute("data-dexter-loading", "false")
}

