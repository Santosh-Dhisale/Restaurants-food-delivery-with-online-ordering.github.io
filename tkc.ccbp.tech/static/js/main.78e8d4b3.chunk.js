(this["webpackJsonptasty-kitchens"] = this["webpackJsonptasty-kitchens"] || []).push([
    [0], {
        100: function(t, e, a) {},
        101: function(t, e, a) {},
        102: function(t, e, a) {},
        103: function(t, e, a) {
            "use strict";
            a.r(e);
            var n = a(2),
                s = a.n(n),
                c = a(24),
                r = a.n(c),
                i = a(5),
                o = a(40),
                l = a(12),
                u = a(7),
                j = a(8),
                d = a(9),
                m = a(10),
                b = a(4),
                h = a(18),
                O = a(16),
                p = a.n(O),
                x = a(11),
                g = a.n(x),
                f = (a(46), a(1)),
                v = function(t) {
                    Object(d.a)(a, t);
                    var e = Object(m.a)(a);

                    function a() {
                        var t;
                        Object(u.a)(this, a);
                        for (var n = arguments.length, s = new Array(n), c = 0; c < n; c++) s[c] = arguments[c];
                        return (t = e.call.apply(e, [this].concat(s))).state = {
                            username: "rahul",
                            password: "rahul@2021",
                            showSubmitError: !1,
                            errorMsg: ""
                        }, t.onChangeUsername = function(e) {
                            t.setState({
                                username: e.target.value
                            })
                        }, t.onChangePassword = function(e) {
                            t.setState({
                                password: e.target.value
                            })
                        }, t.onSubmitSuccess = function(e) {
                            var a = t.props.history;
                            g.a.set("jwt_token", e, {
                                expires: 30,
                                path: "/"
                            }), a.replace("/")
                        }, t.onSubmitFailure = function(e) {
                            t.setState({
                                showSubmitError: !0,
                                errorMsg: e
                            })
                        }, t.submitForm = function() {
                            var e = Object(h.a)(p.a.mark((function e(a) {
                                var n, s, c, r, i, o, l;
                                return p.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return a.preventDefault(), n = t.state, s = n.username, c = n.password, r = {
                                                username: s,
                                                password: c
                                            }, "https://apis.ccbp.in/login", i = {
                                                method: "POST",
                                                body: JSON.stringify(r)
                                            }, e.next = 7, fetch("https://apis.ccbp.in/login", i);
                                        case 7:
                                            return o = e.sent, e.next = 10, o.json();
                                        case 10:
                                            l = e.sent, !0 === o.ok ? t.onSubmitSuccess(l.jwt_token) : t.onSubmitFailure(l.error_msg);
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), t.renderPasswordField = function() {
                            var e = t.state.password;
                            return Object(f.jsxs)(f.Fragment, {
                                children: [Object(f.jsx)("label", {
                                    className: "input-label",
                                    htmlFor: "password",
                                    children: "PASSWORD"
                                }), Object(f.jsx)("input", {
                                    type: "password",
                                    id: "password",
                                    className: "password-input-field",
                                    value: e,
                                    onChange: t.onChangePassword
                                })]
                            })
                        }, t.renderUsernameField = function() {
                            var e = t.state.username;
                            return Object(f.jsxs)(f.Fragment, {
                                children: [Object(f.jsx)("label", {
                                    className: "input-label",
                                    htmlFor: "username",
                                    children: "USERNAME"
                                }), Object(f.jsx)("input", {
                                    type: "text",
                                    id: "username",
                                    className: "username-input-field",
                                    value: e,
                                    onChange: t.onChangeUsername
                                })]
                            })
                        }, t
                    }
                    return Object(j.a)(a, [{
                        key: "render",
                        value: function() {
                            var t = this.state,
                                e = t.showSubmitError,
                                a = t.errorMsg;
                            return void 0 !== g.a.get("jwt_token") ? Object(f.jsx)(b.a, {
                                to: "/"
                            }) : Object(f.jsxs)("div", {
                                className: "login-form-container",
                                children: [Object(f.jsx)("img", {
                                    src: "https://res.cloudinary.com/do4qwwms8/image/upload/v1644325768/tasty-restaurant-sm_fb2aqr.png",
                                    className: "login-logo-mobile-image",
                                    alt: "websiteLogo"
                                }), Object(f.jsx)("div", {
                                    className: "login-container",
                                    children: Object(f.jsxs)("form", {
                                        className: "form-container",
                                        onSubmit: this.submitForm,
                                        children: [Object(f.jsx)("img", {
                                            src: "https://res.cloudinary.com/do4qwwms8/image/upload/v1644325767/tasty-logo-dark_lt7es4.png",
                                            className: "login-logo-desktop-image",
                                            alt: "website logo"
                                        }), Object(f.jsx)("h1", {
                                            className: "logo-heading",
                                            children: "Tasty Kitchens"
                                        }), Object(f.jsx)("h1", {
                                            className: "login-heading",
                                            children: "Login"
                                        }), Object(f.jsx)("div", {
                                            className: "input-container",
                                            children: this.renderUsernameField()
                                        }), Object(f.jsx)("div", {
                                            className: "input-container",
                                            children: this.renderPasswordField()
                                        }), Object(f.jsx)("button", {
                                            type: "submit",
                                            className: "login-button",
                                            children: "Login"
                                        }), e && Object(f.jsxs)("p", {
                                            className: "error-message",
                                            children: ["*", a]
                                        })]
                                    })
                                }), Object(f.jsx)("img", {
                                    src: "https://res.cloudinary.com/do4qwwms8/image/upload/v1644325768/tasty-restaurant-lg_g1xmvt.png",
                                    className: "login-image",
                                    alt: "website login"
                                })]
                            })
                        }
                    }]), a
                }(n.Component),
                N = v,
                y = a(37),
                w = a(38),
                C = a(36),
                k = s.a.createContext({
                    cartList: [],
                    removeAllCartItems: function() {},
                    addCartItem: function() {},
                    removeCartItem: function() {},
                    incrementCartItemQuantity: function() {},
                    decrementCartItemQuantity: function() {}
                }),
                L = (a(52), Object(b.g)((function(t) {
                    var e = function() {
                            g.a.remove("jwt_token"), t.history.replace("/login")
                        },
                        a = function(e) {
                            return t.history.location.pathname === e ? "#f7931e" : "#334155"
                        };
                    return Object(f.jsx)("nav", {
                        className: "nav-header",
                        children: Object(f.jsxs)("div", {
                            className: "nav-bar-large-container",
                            children: [Object(f.jsxs)("div", {
                                className: "icon-container",
                                children: [Object(f.jsx)(i.b, {
                                    to: "/",
                                    className: "nav-link",
                                    children: Object(f.jsx)("img", {
                                        className: "website-logo",
                                        src: "https://res.cloudinary.com/do4qwwms8/image/upload/v1644325767/tasty-logo-dark_lt7es4.png",
                                        alt: "website logo"
                                    })
                                }), Object(f.jsx)("h1", {
                                    className: "icon-heading",
                                    children: "Tasty Kitchens"
                                })]
                            }), Object(f.jsxs)("ul", {
                                className: "nav-menu",
                                children: [Object(f.jsx)(i.b, {
                                    to: "/",
                                    className: "nav-link",
                                    children: Object(f.jsx)("li", {
                                        className: "nav-menu-item",
                                        style: {
                                            color: a("/")
                                        },
                                        children: "Home"
                                    })
                                }), Object(f.jsx)(i.b, {
                                    to: "/cart",
                                    className: "nav-link",
                                    children: Object(f.jsx)("li", {
                                        className: "nav-menu-item",
                                        style: {
                                            color: a("/cart")
                                        },
                                        children: "Cart"
                                    })
                                }), Object(f.jsx)("li", {
                                    children: Object(f.jsx)("button", {
                                        type: "button",
                                        className: "logout-desktop-btn",
                                        onClick: e,
                                        children: "Logout"
                                    })
                                })]
                            }), Object(f.jsx)(C.a, {
                                trigger: Object(f.jsx)("button", {
                                    type: "button",
                                    className: "hamburger-btn",
                                    children: Object(f.jsx)(y.a, {
                                        size: 25,
                                        className: "hamburger"
                                    })
                                }),
                                children: function(t) {
                                    return Object(f.jsxs)("div", {
                                        className: "modal-container",
                                        children: [Object(f.jsxs)("div", {
                                            className: "nav-link-container",
                                            children: [Object(f.jsx)(i.b, {
                                                to: "/",
                                                className: "nav-link",
                                                children: Object(f.jsx)("p", {
                                                    className: "nav-menu-item",
                                                    style: {
                                                        color: a("/")
                                                    },
                                                    children: "Home"
                                                })
                                            }), Object(f.jsx)(i.b, {
                                                to: "/cart",
                                                className: "nav-link",
                                                children: Object(f.jsxs)("p", {
                                                    className: "nav-menu-item",
                                                    style: {
                                                        color: a("/cart")
                                                    },
                                                    children: ["Cart", Object(f.jsx)(k.Consumer, {
                                                        children: function(t) {
                                                            var e = t.cartList,
                                                                a = e.length;
                                                            return console.log("cart length is", e.length), Object(f.jsx)(f.Fragment, {
                                                                children: a > 0 ? Object(f.jsx)("span", {
                                                                    className: "cart-count-badge",
                                                                    children: e.length
                                                                }) : null
                                                            })
                                                        }
                                                    })]
                                                })
                                            }), Object(f.jsx)("button", {
                                                type: "button",
                                                className: "logout-desktop-btn",
                                                onClick: e,
                                                children: "Logout"
                                            })]
                                        }), Object(f.jsx)("button", {
                                            type: "button",
                                            className: "close-btn",
                                            children: Object(f.jsx)(w.a, {
                                                size: 18,
                                                onClick: function() {
                                                    return t()
                                                }
                                            })
                                        })]
                                    })
                                }
                            })]
                        })
                    })
                }))),
                S = (a(53), function() {
                    return Object(f.jsxs)(f.Fragment, {
                        children: [Object(f.jsx)(L, {}), Object(f.jsxs)("div", {
                            className: "not-found-container",
                            children: [Object(f.jsx)("img", {
                                src: "https://res.cloudinary.com/do4qwwms8/image/upload/v1644325768/tasty-not-found_viqe59.png",
                                alt: "not found",
                                className: "not-found-image"
                            }), Object(f.jsx)("h1", {
                                className: "not-found-heading",
                                children: "Page Not Found"
                            }), Object(f.jsxs)("p", {
                                className: "not-found-text",
                                children: ["we are sorry, the page you requested could not be found ", Object(f.jsx)("br", {}), " Please go back to the homepage"]
                            }), Object(f.jsx)(i.b, {
                                to: "/",
                                children: Object(f.jsx)("button", {
                                    type: "button",
                                    className: "home-btn",
                                    children: "Home Page"
                                })
                            })]
                        })]
                    })
                }),
                I = a(39),
                q = a.n(I),
                P = a(21),
                _ = a.n(P),
                F = (a(87), function(t) {
                    Object(d.a)(a, t);
                    var e = Object(m.a)(a);

                    function a() {
                        var t;
                        Object(u.a)(this, a);
                        for (var n = arguments.length, s = new Array(n), c = 0; c < n; c++) s[c] = arguments[c];
                        return (t = e.call.apply(e, [this].concat(s))).state = {
                            offersList: [],
                            isLoading: !1
                        }, t.getCarousel = Object(h.a)(p.a.mark((function e() {
                            var a, n, s, c, r;
                            return p.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.setState({
                                            isLoading: !0
                                        }), a = g.a.get("jwt_token"), "https://apis.ccbp.in/restaurants-list/offers", n = {
                                            headers: {
                                                Authorization: "Bearer ".concat(a)
                                            },
                                            method: "GET"
                                        }, e.next = 6, fetch("https://apis.ccbp.in/restaurants-list/offers", n);
                                    case 6:
                                        return s = e.sent, e.next = 9, s.json();
                                    case 9:
                                        c = e.sent, r = c.offers.map((function(t) {
                                            return {
                                                id: t.id,
                                                imageUrl: t.image_url
                                            }
                                        })), t.setState({
                                            offersList: r,
                                            isLoading: !1
                                        });
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), t.renderCarousel = function() {
                            var e = t.state.offersList;
                            return Object(f.jsx)("ul", {
                                className: "carousel-container",
                                children: Object(f.jsx)(q.a, Object(l.a)(Object(l.a)({}, {
                                    dots: !0,
                                    infinite: !0,
                                    speed: 500,
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    autoplay: !0,
                                    autoplaySpeed: 2e3
                                }), {}, {
                                    className: "carousal",
                                    children: e.map((function(t) {
                                        return Object(f.jsx)("li", {
                                            children: Object(f.jsx)("img", {
                                                src: t.imageUrl,
                                                alt: "offer",
                                                className: "carousal-item-image"
                                            })
                                        }, t.id)
                                    }))
                                }))
                            })
                        }, t.renderLoader = function() {
                            return Object(f.jsx)("div", {
                                testid: "restaurants-offers-loader",
                                className: "restaurants-offers-loader",
                                children: Object(f.jsx)(_.a, {
                                    type: "ThreeDots",
                                    color: "#F7931E",
                                    height: 50,
                                    width: 50
                                })
                            })
                        }, t
                    }
                    return Object(j.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.getCarousel()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.isLoading ? this.renderLoader() : this.renderCarousel()
                        }
                    }]), a
                }(n.Component)),
                T = F,
                A = a(32),
                D = a(19),
                R = (a(88), function(t) {
                    var e = t.sortOption,
                        a = t.sortByOptions,
                        n = t.updateOption;
                    return Object(f.jsxs)("div", {
                        className: "restaurant-header",
                        children: [Object(f.jsx)("h1", {
                            className: "popular-heading",
                            children: "Popular Restaurants"
                        }), Object(f.jsxs)("div", {
                            className: "select-container",
                            children: [Object(f.jsx)("p", {
                                className: "select-text",
                                children: "Select Your favourite restaurant special dish and make your day happy..."
                            }), Object(f.jsxs)("div", {
                                className: "sort-container",
                                children: [Object(f.jsx)(D.b, {
                                    size: 20
                                }), Object(f.jsx)("p", {
                                    className: "sorted-text",
                                    children: "Sort By"
                                }), Object(f.jsx)("select", {
                                    value: e,
                                    className: "select-options",
                                    onChange: function(t) {
                                        n(t.target.value)
                                    },
                                    children: a.map((function(t) {
                                        return Object(f.jsx)("option", {
                                            value: t.value,
                                            className: "option",
                                            children: t.displayText
                                        }, t.id)
                                    }))
                                })]
                            })]
                        })]
                    })
                }),
                U = a(26),
                z = (a(89), function(t) {
                    var e = t.restaurant,
                        a = e.id,
                        n = e.cuisine,
                        s = e.imageUrl,
                        c = e.name,
                        r = e.rating,
                        o = e.totalReviews;
                    return Object(f.jsx)(i.b, {
                        to: "/restaurant/".concat(a),
                        className: "restaurant-link",
                        children: Object(f.jsxs)("li", {
                            testid: "restaurant-item",
                            className: "restaurant-card",
                            children: [Object(f.jsx)("img", {
                                src: s,
                                alt: "restaurant",
                                className: "restaurant-img"
                            }), Object(f.jsxs)("div", {
                                className: "restaurant-information",
                                children: [Object(f.jsx)("h1", {
                                    className: "restaurant-name",
                                    children: c
                                }), Object(f.jsx)("p", {
                                    className: "restaurant-cuisine",
                                    children: n
                                }), Object(f.jsxs)("div", {
                                    className: "star-rating",
                                    children: [Object(f.jsx)(U.a, {
                                        className: "star"
                                    }), Object(f.jsx)("p", {
                                        className: "total-rating",
                                        children: r
                                    }), Object(f.jsxs)("p", {
                                        className: "user-total-reviews",
                                        children: ["(", o, " rating)"]
                                    })]
                                })]
                            })]
                        })
                    })
                }),
                E = (a(90), [{
                    id: 0,
                    displayText: "Highest",
                    value: "Highest"
                }, {
                    id: 2,
                    displayText: "Lowest",
                    value: "Lowest"
                }]),
                Q = function(t) {
                    Object(d.a)(a, t);
                    var e = Object(m.a)(a);

                    function a() {
                        var t;
                        Object(u.a)(this, a);
                        for (var n = arguments.length, s = new Array(n), c = 0; c < n; c++) s[c] = arguments[c];
                        return (t = e.call.apply(e, [this].concat(s))).state = {
                            restaurantsList: [],
                            isLoading: !1,
                            activePage: 1,
                            sortOption: E[1].value,
                            totalPages: 0
                        }, t.getRestaurants = Object(h.a)(p.a.mark((function e() {
                            var a, n, s, c, r, i, o, l, u, j, d, m;
                            return p.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.setState({
                                            isLoading: !0
                                        }), a = t.state, n = a.activePage, s = a.sortOption, c = g.a.get("jwt_token"), i = "https://apis.ccbp.in/restaurants-list?offset=".concat((n - 1) * (r = 9), "&limit=").concat(r, "&sort_by_rating=").concat(s), o = {
                                            headers: {
                                                Authorization: "Bearer ".concat(c)
                                            },
                                            method: "GET"
                                        }, e.next = 9, fetch(i, o);
                                    case 9:
                                        return l = e.sent, e.next = 12, l.json();
                                    case 12:
                                        u = e.sent, console.log(u), j = u.total, d = Math.ceil(j / r), m = u.restaurants.map((function(t) {
                                            return {
                                                id: t.id,
                                                cuisine: t.cuisine,
                                                imageUrl: t.image_url,
                                                name: t.name,
                                                rating: t.user_rating.rating,
                                                totalReviews: t.user_rating.total_reviews
                                            }
                                        })), t.setState({
                                            restaurantsList: m,
                                            isLoading: !1,
                                            totalPages: d
                                        });
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), t.updateOption = function(e) {
                            t.setState({
                                sortOption: e
                            }, t.getRestaurants)
                        }, t.decrementPage = function() {
                            t.state.activePage > 1 && t.setState((function(t) {
                                return {
                                    activePage: t.activePage - 1
                                }
                            }), t.getRestaurants)
                        }, t.incrementPage = function() {
                            t.state.activePage < 4 && t.setState((function(t) {
                                return {
                                    activePage: t.activePage + 1
                                }
                            }), t.getRestaurants)
                        }, t.renderPopularRestaurants = function() {
                            var e = t.state,
                                a = e.restaurantsList,
                                n = e.sortOption,
                                s = e.activePage,
                                c = e.totalPages;
                            return Object(f.jsxs)(f.Fragment, {
                                children: [Object(f.jsx)(R, {
                                    sortOption: n,
                                    sortByOptions: E,
                                    updateOption: t.updateOption
                                }), Object(f.jsx)("hr", {
                                    className: "hr-line"
                                }), Object(f.jsx)("ul", {
                                    className: "restaurants-list",
                                    children: a.map((function(t) {
                                        return Object(f.jsx)(z, {
                                            restaurant: t
                                        }, t.id)
                                    }))
                                }), Object(f.jsxs)("div", {
                                    className: "pagination-container",
                                    children: [Object(f.jsx)("button", {
                                        type: "button",
                                        className: "pagination-button",
                                        onClick: t.decrementPage,
                                        testid: "pagination-left-button",
                                        children: Object(f.jsx)(A.a, {
                                            size: 20
                                        })
                                    }), Object(f.jsx)("p", {
                                        testid: "active-page-number",
                                        className: "page-count",
                                        children: s
                                    }), Object(f.jsx)("span", {
                                        className: "page-count",
                                        style: {
                                            marginLeft: "5px",
                                            marginRight: "5px"
                                        },
                                        children: "of"
                                    }), Object(f.jsxs)("p", {
                                        className: "page-count",
                                        children: [" ", c]
                                    }), Object(f.jsx)("button", {
                                        type: "button",
                                        className: "pagination-button",
                                        onClick: t.incrementPage,
                                        testid: "pagination-right-button",
                                        children: Object(f.jsx)(A.b, {
                                            size: 20
                                        })
                                    })]
                                })]
                            })
                        }, t.renderLoader = function() {
                            return Object(f.jsx)("div", {
                                className: "carousel-loader",
                                testid: "restaurants-list-loader",
                                children: Object(f.jsx)(_.a, {
                                    type: "ThreeDots",
                                    color: "#F7931E",
                                    height: 50,
                                    width: 50
                                })
                            })
                        }, t
                    }
                    return Object(j.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.getRestaurants()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.isLoading ? this.renderLoader() : this.renderPopularRestaurants()
                        }
                    }]), a
                }(n.Component),
                M = Q,
                B = a(13),
                H = (a(91), function() {
                    return Object(f.jsxs)("div", {
                        className: "footer-container",
                        children: [Object(f.jsxs)("div", {
                            className: "logo-container",
                            children: [Object(f.jsx)("img", {
                                src: "https://res.cloudinary.com/do4qwwms8/image/upload/v1644325768/tasty-logo-light_aonpbm.png",
                                alt: "website-footer-logo",
                                className: "logo"
                            }), Object(f.jsx)("h1", {
                                className: "footer-heading",
                                children: "Tasty Kitchens"
                            })]
                        }), Object(f.jsxs)("p", {
                            className: "footer-desc",
                            children: ["The only thing we are serious about is food.", Object(f.jsx)("br", {}), " Contact us on"]
                        }), Object(f.jsxs)("div", {
                            className: "social-icons-container",
                            children: [Object(f.jsx)(B.c, {
                                testid: "pintrest-social-icon",
                                className: "social-website-icon"
                            }), Object(f.jsx)(B.b, {
                                testid: "instagram-social-icon",
                                className: "social-website-icon"
                            }), Object(f.jsx)(B.f, {
                                testid: "twitter-social-icon",
                                className: "social-website-icon"
                            }), Object(f.jsx)(B.a, {
                                testid: "facebook-social-icon",
                                className: "social-website-icon"
                            })]
                        })]
                    })
                }),
                J = (a(92), function() {
                    return void 0 === g.a.get("jwt_token") ? Object(f.jsx)(b.a, {
                        to: "/login"
                    }) : Object(f.jsxs)(f.Fragment, {
                        children: [Object(f.jsx)(L, {}), Object(f.jsxs)("div", {
                            className: "home-container",
                            children: [Object(f.jsx)(T, {}), Object(f.jsx)(M, {})]
                        }), Object(f.jsx)(H, {})]
                    })
                }),
                G = (a(93), function(t) {
                    var e = t.restaurantData,
                        a = e.name,
                        n = e.imageUrl,
                        s = e.cuisine,
                        c = e.location,
                        r = e.rating,
                        i = e.costForTwo,
                        o = e.reviewsCount;
                    return Object(f.jsx)("div", {
                        className: "banner-bg",
                        children: Object(f.jsxs)("div", {
                            className: "banner-container",
                            children: [Object(f.jsx)("img", {
                                src: n,
                                alt: "restaurant",
                                className: "res-image"
                            }), Object(f.jsxs)("div", {
                                className: "res-info",
                                children: [Object(f.jsx)("h1", {
                                    className: "res-name",
                                    children: a
                                }), Object(f.jsx)("p", {
                                    className: "res-cuisine",
                                    children: s
                                }), Object(f.jsx)("p", {
                                    className: "res-location",
                                    children: c
                                }), Object(f.jsxs)("div", {
                                    className: "rating-rate-container",
                                    children: [Object(f.jsxs)("div", {
                                        className: "rating-container",
                                        children: [Object(f.jsxs)("p", {
                                            className: "rating",
                                            children: [Object(f.jsx)(B.e, {}), r]
                                        }), Object(f.jsxs)("p", {
                                            className: "sub-text",
                                            children: [o, "+ Ratings"]
                                        })]
                                    }), Object(f.jsx)("hr", {
                                        className: "separation-line"
                                    }), Object(f.jsxs)("div", {
                                        className: "rating-container",
                                        children: [Object(f.jsxs)("p", {
                                            className: "rating",
                                            children: [Object(f.jsx)(B.d, {}), i]
                                        }), Object(f.jsx)("p", {
                                            className: "sub-text",
                                            children: "Cost for two"
                                        })]
                                    })]
                                })]
                            })]
                        })
                    })
                }),
                Y = (a(94), function(t) {
                    Object(d.a)(a, t);
                    var e = Object(m.a)(a);

                    function a() {
                        var t;
                        Object(u.a)(this, a);
                        for (var n = arguments.length, s = new Array(n), c = 0; c < n; c++) s[c] = arguments[c];
                        return (t = e.call.apply(e, [this].concat(s))).state = {
                            quantity: 0
                        }, t
                    }
                    return Object(j.a)(a, [{
                        key: "render",
                        value: function() {
                            var t = this;
                            return Object(f.jsx)(k.Consumer, {
                                children: function(e) {
                                    var a = e.addCartItem,
                                        n = e.incrementCartItemQuantity,
                                        s = e.decrementCartItemQuantity,
                                        c = t.props.foodItem,
                                        r = c.id,
                                        i = c.imageUrl,
                                        o = c.name,
                                        u = c.cost,
                                        j = c.rating,
                                        d = t.state.quantity;
                                    return Object(f.jsxs)("li", {
                                        testid: "foodItem",
                                        className: "foodItem",
                                        children: [Object(f.jsx)("img", {
                                            src: i,
                                            alt: "food item",
                                            className: "food-item-image"
                                        }), Object(f.jsxs)("div", {
                                            className: "food-item-info",
                                            children: [Object(f.jsx)("h1", {
                                                className: "food-item-name",
                                                children: o
                                            }), Object(f.jsxs)("div", {
                                                className: "cost-cont",
                                                children: [Object(f.jsx)(B.d, {
                                                    size: 16,
                                                    color: "#334155"
                                                }), Object(f.jsx)("p", {
                                                    className: "food-item-cost",
                                                    children: u
                                                })]
                                            }), Object(f.jsxs)("div", {
                                                className: "rating-cont",
                                                children: [Object(f.jsx)(U.a, {
                                                    size: 16,
                                                    color: "#FFCC00"
                                                }), Object(f.jsx)("p", {
                                                    className: "food-item-rating",
                                                    children: j
                                                })]
                                            }), 0 === d ? Object(f.jsx)("button", {
                                                type: "button",
                                                className: "add-btn",
                                                onClick: function() {
                                                    t.setState((function(t) {
                                                        return {
                                                            quantity: t.quantity + 1
                                                        }
                                                    }), a(Object(l.a)(Object(l.a)({}, c), {}, {
                                                        quantity: d + 1
                                                    })))
                                                },
                                                children: "Add"
                                            }) : Object(f.jsxs)("div", {
                                                className: "cart-btn-qty-cont",
                                                children: [Object(f.jsx)("button", {
                                                    testid: "decrement-count",
                                                    type: "button",
                                                    className: "decrement-count",
                                                    onClick: function() {
                                                        t.setState((function(t) {
                                                            return {
                                                                quantity: t.quantity - 1
                                                            }
                                                        })), s(r)
                                                    },
                                                    children: Object(f.jsx)(D.a, {
                                                        className: "icon-btn"
                                                    })
                                                }), Object(f.jsx)("p", {
                                                    testid: "active-count",
                                                    className: "active-count",
                                                    children: d
                                                }), Object(f.jsx)("button", {
                                                    testid: "increment-count",
                                                    type: "button",
                                                    className: "increment-count",
                                                    onClick: function() {
                                                        t.setState((function(t) {
                                                            return {
                                                                quantity: t.quantity + 1
                                                            }
                                                        })), n(r)
                                                    },
                                                    children: Object(f.jsx)(D.c, {
                                                        className: "icon-btn"
                                                    })
                                                })]
                                            })]
                                        })]
                                    })
                                }
                            })
                        }
                    }]), a
                }(n.Component)),
                K = Y,
                W = (a(95), function(t) {
                    Object(d.a)(a, t);
                    var e = Object(m.a)(a);

                    function a() {
                        var t;
                        Object(u.a)(this, a);
                        for (var n = arguments.length, s = new Array(n), c = 0; c < n; c++) s[c] = arguments[c];
                        return (t = e.call.apply(e, [this].concat(s))).state = {
                            restaurantData: {},
                            foodItemsList: [],
                            isLoading: !1
                        }, t.getRestaurantDetails = Object(h.a)(p.a.mark((function e() {
                            var a, n, s, c, r, i, o, l, u, j;
                            return p.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.setState({
                                            isLoading: !0
                                        }), a = t.props.match, n = a.params, s = n.id, c = g.a.get("jwt_token"), r = " https://apis.ccbp.in/restaurants-list/".concat(s), i = {
                                            headers: {
                                                Authorization: "Bearer ".concat(c)
                                            },
                                            method: "GET"
                                        }, e.next = 9, fetch(r, i);
                                    case 9:
                                        return o = e.sent, e.next = 12, o.json();
                                    case 12:
                                        l = e.sent, u = {
                                            costForTwo: l.cost_for_two,
                                            cuisine: l.cuisine,
                                            foodItems: l.food_items,
                                            id: l.id,
                                            imageUrl: l.image_url,
                                            itemsCount: l.items_count,
                                            location: l.location,
                                            name: l.name,
                                            opensAt: l.opens_at,
                                            rating: l.rating,
                                            reviewsCount: l.reviews_count
                                        }, j = l.food_items.map((function(t) {
                                            return {
                                                cost: t.cost,
                                                foodType: t.food_type,
                                                id: t.id,
                                                imageUrl: t.image_url,
                                                name: t.name,
                                                rating: t.rating
                                            }
                                        })), t.setState({
                                            restaurantData: u,
                                            foodItemsList: j,
                                            isLoading: !1
                                        });
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), t.renderRestaurantDetails = function() {
                            var e = t.state,
                                a = e.restaurantData,
                                n = e.foodItemsList;
                            return Object(f.jsxs)(f.Fragment, {
                                children: [Object(f.jsx)(G, {
                                    restaurantData: a
                                }), Object(f.jsx)("ul", {
                                    className: "food-items-list",
                                    children: n.map((function(t) {
                                        return Object(f.jsx)(K, {
                                            foodItem: t
                                        }, t.id)
                                    }))
                                })]
                            })
                        }, t.renderLoader = function() {
                            return Object(f.jsx)("div", {
                                testid: "restaurant-details-loader",
                                className: "restaurant-loader",
                                children: Object(f.jsx)(_.a, {
                                    type: "ThreeDots",
                                    color: "#F7931E",
                                    height: 50,
                                    width: 50
                                })
                            })
                        }, t
                    }
                    return Object(j.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            this.getRestaurantDetails()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this.state.isLoading;
                            return Object(f.jsxs)(f.Fragment, {
                                children: [Object(f.jsx)(L, {}), t ? this.renderLoader() : this.renderRestaurantDetails(), Object(f.jsx)(H, {})]
                            })
                        }
                    }]), a
                }(n.Component)),
                V = W,
                X = (a(96), function() {
                    return Object(f.jsxs)("div", {
                        className: "empty-cart-container",
                        children: [Object(f.jsx)("img", {
                            src: "https://res.cloudinary.com/do4qwwms8/image/upload/v1644325768/tasty-empty-cart_bkexof.png",
                            className: "empty-cart-image",
                            alt: "empty cart"
                        }), Object(f.jsx)("h1", {
                            className: "no-order-heading",
                            children: "No Order Yet!"
                        }), Object(f.jsx)("p", {
                            className: "no-order-text",
                            children: "Your cart is empty. Add something from the menu."
                        }), Object(f.jsx)(i.b, {
                            to: "/",
                            children: Object(f.jsx)("button", {
                                type: "button",
                                className: "order-btn",
                                children: "Order Now"
                            })
                        })]
                    })
                }),
                Z = (a(97), function() {
                    return Object(f.jsx)(k.Consumer, {
                        children: function(t) {
                            var e = t.removeAllCartItems;
                            return Object(f.jsx)(f.Fragment, {
                                children: Object(f.jsx)("div", {
                                    className: "payment-container",
                                    children: Object(f.jsxs)("div", {
                                        className: "payment-card",
                                        children: [Object(f.jsx)("img", {
                                            src: "https://res.cloudinary.com/do4qwwms8/image/upload/v1644325768/tasty-success-tick_anqrey.png",
                                            alt: "success",
                                            className: "payment-image"
                                        }), Object(f.jsx)("h1", {
                                            className: "payment-heading",
                                            children: "Payment Successful"
                                        }), Object(f.jsx)("p", {
                                            className: "payment-text",
                                            children: "Thank you for ordering Your payment is successfully completed."
                                        }), Object(f.jsx)(i.b, {
                                            to: "/",
                                            children: Object(f.jsx)("button", {
                                                type: "button",
                                                className: "home-btn",
                                                onClick: function() {
                                                    e()
                                                },
                                                children: "Go To Home Page"
                                            })
                                        })]
                                    })
                                })
                            })
                        }
                    })
                }),
                $ = (a(98), function(t) {
                    return Object(f.jsx)(k.Consumer, {
                        children: function(e) {
                            var a = e.incrementCartItemQuantity,
                                n = e.decrementCartItemQuantity,
                                s = t.cartItem,
                                c = s.id,
                                r = s.name,
                                i = s.quantity,
                                o = s.cost,
                                l = s.imageUrl;
                            return Object(f.jsxs)("li", {
                                testid: "cartItem",
                                className: "cart-item",
                                children: [Object(f.jsxs)("div", {
                                    className: "cart-item-info",
                                    children: [Object(f.jsx)("img", {
                                        src: l,
                                        alt: r,
                                        className: "cart-item-image"
                                    }), Object(f.jsx)("h1", {
                                        className: "cart-item-desktop-name",
                                        children: r
                                    })]
                                }), Object(f.jsxs)("div", {
                                    className: "cart-qty-price-cont",
                                    children: [Object(f.jsx)("h1", {
                                        className: "cart-item-mobile-name",
                                        children: r
                                    }), Object(f.jsxs)("div", {
                                        className: "cart-qty-container",
                                        children: [Object(f.jsx)("button", {
                                            className: "decrement-quantity",
                                            type: "button",
                                            onClick: function() {
                                                n(c)
                                            },
                                            testid: "decrement-quantity",
                                            children: Object(f.jsx)(D.a, {
                                                size: 16
                                            })
                                        }), Object(f.jsx)("p", {
                                            testid: "item-quantity",
                                            className: "item-quantity",
                                            children: i
                                        }), Object(f.jsx)("button", {
                                            className: "increment-quantity",
                                            type: "button",
                                            onClick: function() {
                                                a(c)
                                            },
                                            testid: "increment-quantity",
                                            children: Object(f.jsx)(D.c, {
                                                size: 16
                                            })
                                        })]
                                    }), Object(f.jsxs)("p", {
                                        className: "price",
                                        children: [Object(f.jsx)(B.d, {}), " ", o * i, "/-"]
                                    })]
                                })]
                            })
                        }
                    })
                }),
                tt = (a(99), function(t) {
                    var e = t.orderPlaced;
                    return Object(f.jsx)(k.Consumer, {
                        children: function(t) {
                            var a = t.cartList,
                                n = 0;
                            a.forEach((function(t) {
                                n += t.cost * t.quantity
                            }));
                            return Object(f.jsxs)(f.Fragment, {
                                children: [Object(f.jsx)("hr", {
                                    className: "cart-hr-line"
                                }), Object(f.jsxs)("div", {
                                    className: "cart-total-container",
                                    children: [Object(f.jsx)("h1", {
                                        className: "total-text",
                                        children: "Order Total:"
                                    }), Object(f.jsxs)("div", {
                                        className: "total-container",
                                        children: [Object(f.jsxs)("p", {
                                            testid: "total-price",
                                            className: "total-price",
                                            children: [Object(f.jsx)(B.d, {
                                                size: 18
                                            }), " ", n]
                                        }), Object(f.jsx)("button", {
                                            type: "button",
                                            className: "order-button",
                                            onClick: function() {
                                                e()
                                            },
                                            children: "Place Order"
                                        })]
                                    })]
                                })]
                            })
                        }
                    })
                }),
                et = (a(100), function(t) {
                    Object(d.a)(a, t);
                    var e = Object(m.a)(a);

                    function a() {
                        var t;
                        Object(u.a)(this, a);
                        for (var n = arguments.length, s = new Array(n), c = 0; c < n; c++) s[c] = arguments[c];
                        return (t = e.call.apply(e, [this].concat(s))).state = {
                            isOrderPlaced: !1
                        }, t.orderPlaced = function() {
                            t.setState((function(t) {
                                return {
                                    isOrderPlaced: !t.isOrderPlaced
                                }
                            }))
                        }, t
                    }
                    return Object(j.a)(a, [{
                        key: "render",
                        value: function() {
                            var t = this,
                                e = this.state.isOrderPlaced;
                            return Object(f.jsx)(k.Consumer, {
                                children: function(a) {
                                    var n = localStorage.getItem("cartData"),
                                        s = JSON.parse(n);
                                    return e ? Object(f.jsx)(Z, {}) : Object(f.jsxs)("div", {
                                        className: "cart-list-container",
                                        children: [Object(f.jsxs)("div", {
                                            className: "cart-headers-cont",
                                            children: [Object(f.jsx)("p", {
                                                className: "cart-title-item",
                                                children: "Item"
                                            }), Object(f.jsxs)("div", {
                                                className: "qunatity-and-price",
                                                children: [Object(f.jsx)("p", {
                                                    className: "cart-header-qunatity",
                                                    children: "Quantity"
                                                }), Object(f.jsx)("p", {
                                                    className: "cart-price",
                                                    children: "Price"
                                                })]
                                            })]
                                        }), Object(f.jsx)("ul", {
                                            className: "cart-list",
                                            children: s.map((function(t) {
                                                return Object(f.jsx)($, {
                                                    cartItem: t,
                                                    value: a
                                                }, t.id)
                                            }))
                                        }), Object(f.jsx)(tt, {
                                            orderPlaced: t.orderPlaced
                                        })]
                                    })
                                }
                            })
                        }
                    }]), a
                }(n.Component)),
                at = et,
                nt = (a(101), function(t) {
                    Object(d.a)(a, t);
                    var e = Object(m.a)(a);

                    function a() {
                        return Object(u.a)(this, a), e.apply(this, arguments)
                    }
                    return Object(j.a)(a, [{
                        key: "render",
                        value: function() {
                            return Object(f.jsx)(k.Consumer, {
                                children: function(t) {
                                    var e = 0 === t.cartList.length;
                                    return Object(f.jsxs)(f.Fragment, {
                                        children: [Object(f.jsx)(L, {}), Object(f.jsx)("div", {
                                            className: "cart-container",
                                            children: e ? Object(f.jsx)(X, {}) : Object(f.jsx)(at, {})
                                        }), Object(f.jsx)(H, {})]
                                    })
                                }
                            })
                        }
                    }]), a
                }(n.Component)),
                st = nt,
                ct = function(t) {
                    return void 0 === g.a.get("jwt_token") ? Object(f.jsx)(b.a, {
                        to: "/login"
                    }) : Object(f.jsx)(b.b, Object(l.a)({}, t))
                },
                rt = (a(102), function() {
                    var t = localStorage.getItem("cartData"),
                        e = JSON.parse(t);
                    return null === e ? [] : e
                }),
                it = function(t) {
                    Object(d.a)(a, t);
                    var e = Object(m.a)(a);

                    function a() {
                        var t;
                        Object(u.a)(this, a);
                        for (var n = arguments.length, s = new Array(n), c = 0; c < n; c++) s[c] = arguments[c];
                        return (t = e.call.apply(e, [this].concat(s))).state = {
                            cartList: rt()
                        }, t.removeAllCartItems = function() {
                            t.setState({
                                cartList: []
                            })
                        }, t.incrementCartItemQuantity = function(e) {
                            t.setState((function(t) {
                                return {
                                    cartList: t.cartList.map((function(t) {
                                        if (e === t.id) {
                                            var a = t.quantity + 1;
                                            return Object(l.a)(Object(l.a)({}, t), {}, {
                                                quantity: a
                                            })
                                        }
                                        return t
                                    }))
                                }
                            }))
                        }, t.decrementCartItemQuantity = function(e) {
                            t.state.cartList.find((function(t) {
                                return t.id === e
                            })).quantity > 1 ? t.setState((function(t) {
                                return {
                                    cartList: t.cartList.map((function(t) {
                                        if (e === t.id) {
                                            var a = t.quantity - 1;
                                            return Object(l.a)(Object(l.a)({}, t), {}, {
                                                quantity: a
                                            })
                                        }
                                        return t
                                    }))
                                }
                            })) : t.removeCartItem(e)
                        }, t.removeCartItem = function(e) {
                            var a = t.state.cartList.filter((function(t) {
                                return t.id !== e
                            }));
                            t.setState({
                                cartList: a
                            })
                        }, t.addCartItem = function(e) {
                            var a = t.state.cartList,
                                n = a.find((function(t) {
                                    return t.id === e.id
                                }));
                            if (n) t.setState((function(t) {
                                return {
                                    cartList: t.cartList.map((function(t) {
                                        if (n.id === t.id) {
                                            var a = e.quantity;
                                            return Object(l.a)(Object(l.a)({}, t), {}, {
                                                quantity: a
                                            })
                                        }
                                        return t
                                    }))
                                }
                            }));
                            else {
                                var s = [].concat(Object(o.a)(a), [e]);
                                t.setState({
                                    cartList: s
                                })
                            }
                        }, t
                    }
                    return Object(j.a)(a, [{
                        key: "render",
                        value: function() {
                            var t = this.state.cartList;
                            return localStorage.setItem("cartData", JSON.stringify(t)), Object(f.jsx)(k.Provider, {
                                value: {
                                    cartList: t,
                                    addCartItem: this.addCartItem,
                                    removeCartItem: this.removeCartItem,
                                    incrementCartItemQuantity: this.incrementCartItemQuantity,
                                    decrementCartItemQuantity: this.decrementCartItemQuantity,
                                    removeAllCartItems: this.removeAllCartItems
                                },
                                children: Object(f.jsxs)(b.d, {
                                    children: [Object(f.jsx)(b.b, {
                                        exact: !0,
                                        path: "/login",
                                        component: N
                                    }), Object(f.jsx)(ct, {
                                        exact: !0,
                                        path: "/",
                                        component: J
                                    }), Object(f.jsx)(ct, {
                                        exact: !0,
                                        path: "/restaurant/:id",
                                        component: V
                                    }), Object(f.jsx)(ct, {
                                        exact: !0,
                                        path: "/cart",
                                        component: st
                                    }), Object(f.jsx)(b.b, {
                                        path: "/bad-path",
                                        component: S
                                    }), Object(f.jsx)(b.a, {
                                        to: "bad-path"
                                    })]
                                })
                            })
                        }
                    }]), a
                }(n.Component),
                ot = it;
            r.a.render(Object(f.jsx)(s.a.StrictMode, {
                children: Object(f.jsx)(i.a, {
                    children: Object(f.jsx)(ot, {})
                })
            }), document.getElementById("root"))
        },
        46: function(t, e, a) {},
        52: function(t, e, a) {},
        53: function(t, e, a) {},
        87: function(t, e, a) {},
        88: function(t, e, a) {},
        89: function(t, e, a) {},
        90: function(t, e, a) {},
        91: function(t, e, a) {},
        92: function(t, e, a) {},
        93: function(t, e, a) {},
        94: function(t, e, a) {},
        95: function(t, e, a) {},
        96: function(t, e, a) {},
        97: function(t, e, a) {},
        98: function(t, e, a) {},
        99: function(t, e, a) {}
    },
    [
        [103, 1, 2]
    ]
]);
//# sourceMappingURL=main.78e8d4b3.chunk.js.map