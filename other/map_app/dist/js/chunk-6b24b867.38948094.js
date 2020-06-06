(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
	['chunk-6b24b867'],
	{
		'4d51': function (t, e, n) {
			'use strict';
			n.r(e);
			var r = function () {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n('div', { staticClass: 'map-wrap' }, [
						n('div', { staticClass: 'map-header' }, [
							n(
								'div',
								{
									staticClass: 'left-icon',
									on: {
										click: function (e) {
											return t.$router.replace({ name: 'person' });
										},
									},
								},
								[n('van-icon', { attrs: { name: 'arrow-left' } })],
								1,
							),
							n('div', { staticClass: 'map-header-title' }, [
								t._v(t._s(t.$route.meta.title)),
							]),
						]),
						n(
							'div',
							{ staticClass: 'map-content' },
							[
								n('h3', [t._v('Weekly Best Sellers')]),
								t._l(t.list, function (t, e) {
									return n('Item', {
										key: t._id,
										attrs: { data: t, index: e + 1 },
									});
								}),
							],
							2,
						),
					]);
				},
				a = [],
				i = (n('8e6e'), n('ac6a'), n('456d'), n('bd86')),
				s = (n('96cf'), n('3b8d')),
				c = function () {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n('div', { staticClass: 'comment-item' }, [
						n('span', { staticStyle: { 'padding-right': '15px' } }, [
							t._v(t._s(t.index)),
						]),
						n('div', { staticClass: 'left' }, [
							n('img', { attrs: { src: t.data.headImage, alt: '' } }),
						]),
						n('div', { staticClass: 'right' }, [
							n('div', { staticClass: 'text' }, [t._v(t._s(t.data.nickname))]),
							n('div', { staticClass: 'user' }, [
								t._v('\n      ' + t._s(t.data.distance_total) + 'km\n    '),
							]),
						]),
					]);
				},
				o = [],
				u =
					(n('c5f6'), { props: { data: Object, index: Number }, methods: {} }),
				d = u,
				l = (n('5f6d'), n('2877')),
				f = Object(l['a'])(d, c, o, !1, null, '29ff9fde', null),
				p = f.exports;
			function m(t, e) {
				var n = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(t);
					e &&
						(r = r.filter(function (e) {
							return Object.getOwnPropertyDescriptor(t, e).enumerable;
						})),
						n.push.apply(n, r);
				}
				return n;
			}
			function b(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {};
					e % 2
						? m(Object(n), !0).forEach(function (e) {
								Object(i['a'])(t, e, n[e]);
						  })
						: Object.getOwnPropertyDescriptors
						? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
						: m(Object(n)).forEach(function (e) {
								Object.defineProperty(
									t,
									e,
									Object.getOwnPropertyDescriptor(n, e),
								);
						  });
				}
				return t;
			}
			var v = {
					components: { Item: p },
					data: function () {
						return { list: [] };
					},
					created: function () {
						this.getList();
					},
					methods: {
						getList: (function () {
							var t = Object(s['a'])(
								regeneratorRuntime.mark(function t() {
									var e, n;
									return regeneratorRuntime.wrap(
										function (t) {
											while (1)
												switch ((t.prev = t.next)) {
													case 0:
														return (
															(t.prev = 0),
															this.$toast.loading({ duration: 0 }),
															(t.next = 4),
															this.$http({ url: this.$api.user_ranking })
														);
													case 4:
														(e = t.sent),
															(n = e.data),
															(this.list = n.map(function (t) {
																return b({}, t, {
																	_id: t._id.uid,
																	nickname: t._id.nickname,
																	headImage: t._id.headImage,
																});
															}));
													case 7:
														return (
															(t.prev = 7), this.$toast.clear(!0), t.finish(7)
														);
													case 10:
													case 'end':
														return t.stop();
												}
										},
										t,
										this,
										[[0, , 7, 10]],
									);
								}),
							);
							function e() {
								return t.apply(this, arguments);
							}
							return e;
						})(),
					},
				},
				h = v,
				O = (n('5379'), Object(l['a'])(h, r, a, !1, null, '47db70d6', null));
			e['default'] = O.exports;
		},
		5379: function (t, e, n) {
			'use strict';
			var r = n('ffb3'),
				a = n.n(r);
			a.a;
		},
		'5f6d': function (t, e, n) {
			'use strict';
			var r = n('fcb2'),
				a = n.n(r);
			a.a;
		},
		fcb2: function (t, e, n) {},
		ffb3: function (t, e, n) {},
	},
]);
