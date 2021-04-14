(window.webpackJsonp = window.webpackJsonp || []).push([
	[0],
	[, , , , function(e, n, t) {
		e.exports = t(12)
	}, , , , , , function(e, n, t) {}, function(e, n, t) {}, function(e, n, t) {
		"use strict";
		t.r(n);
		var a = t(1),
			o = t.n(a),
			i = t(3),
			r = t.n(i),
			c = (t(10), t(11), t(0)),
			s = t.n(c);
		s()(document).ready(function() {
			s()("h1").fadeOut(0, function() {
				s()(this).html('looking for me?')
			}), s()("h1").fadeToggle(1e3, function() {
				s()(this).delay(3e3).fadeToggle(1e3, function() {
					
						s()(".App-header").addClass("cycle"), s()(this).html("<a href='https://drgn.social/@eric' style='text-decoration: none;color: #fff'>social</a> <br> <a href='https://matrix.to/#/@eric:drgn.im?action=chat' style='text-decoration: none;color: #fff'>matrix</a> <br> <a href='mailto:hello@drgn.email' style='text-decoration: none;color: #fff'>email</a>"), s()(this).fadeToggle(1e3)
					})
				
			})
		});
		var l = function() {
			return o.a.createElement("div", {
				className: "App"
			}, o.a.createElement("header", {
				className: "App-header"
			}, o.a.createElement("h1", null)))
		};
		Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
		r.a.render(o.a.createElement(l, null), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then(function(e) {
			e.unregister()
		})
	}],
	[
		[4, 1, 2]
	]
]);
//# sourceMappingURL=main.2a79dabc.chunk.js.map
