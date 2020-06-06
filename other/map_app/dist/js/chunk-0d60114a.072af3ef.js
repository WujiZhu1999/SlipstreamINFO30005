(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
	['chunk-0d60114a'],
	{
		'2ee0': function (t, e, a) {
			'use strict';
			var n = a('fa13'),
				r = a.n(n);
			r.a;
		},
		'45f8': function (t, e, a) {
			'use strict';
			a.r(e);
			var n = function () {
					var t = this,
						e = t.$createElement,
						a = t._self._c || e;
					return a('div', { staticClass: 'map-wrap' }, [
						a('div', { staticClass: 'map-header' }, [
							a(
								'div',
								{
									staticClass: 'left-icon',
									on: {
										click: function (e) {
											return t.$router.replace({
												name: t.$route.query.back
													? t.$route.query.back
													: 'active',
											});
										},
									},
								},
								[a('van-icon', { attrs: { name: 'arrow-left' } })],
								1,
							),
							a('div', { staticClass: 'map-header-title' }, [
								t._v(t._s(t.$route.meta.title)),
							]),
						]),
						a('div', { staticClass: 'map-content' }, [
							a('div', { staticClass: 'user' }, [
								a('h4', [
									t._v(t._s(t.data.promoter && t.data.promoter.nickname)),
									t.data.promoter._id === t.user._id
										? a('span', { staticClass: 'tag' }, [t._v('ME')])
										: t._e(),
									a('span', { staticClass: 'tag' }, [t._v(t._s(t.status[1]))]),
								]),
								a('span', [t._v(t._s(t._f('dateFormat')(t.data.createdAt)))]),
								a('br'),
								a('span', [
									t._v(
										'start date: ' + t._s(t._f('dateFormat')(t.data.startDate)),
									),
								]),
								a('br'),
								a('span', [
									t._v('end date: ' + t._s(t._f('dateFormat')(t.data.endDate))),
								]),
							]),
							a('div', {
								staticClass: 'content',
								domProps: { innerHTML: t._s(t.data.content) },
							}),
							a('div', { staticClass: 'post-content' }, [
								t.user._id === t.data.promoter._id ||
								t.isJoin ||
								2 === t.status[0]
									? t._e()
									: a(
											'span',
											{
												staticClass: 'action',
												on: {
													click: function (e) {
														return e.stopPropagation(), t.onAddActive(e);
													},
												},
											},
											[a('van-icon', { attrs: { name: 'plus' } })],
											1,
									  ),
								t.isJoin && 2 !== t.status[0]
									? a(
											'span',
											{
												staticClass: 'action',
												on: {
													click: function (e) {
														return e.stopPropagation(), t.onDeleteConfirm(e);
													},
												},
											},
											[a('van-icon', { attrs: { name: 'cross' } })],
											1,
									  )
									: t._e(),
							]),
							a('h4', { staticClass: 'comment-title' }, [
								t._v('\n      Users joined\n    '),
							]),
							a(
								'div',
								{ staticClass: 'enlist' },
								t._l(t.enlist, function (t) {
									return a('UserItem', { key: t._id, attrs: { data: t } });
								}),
								1,
							),
						]),
					]);
				},
				r = [],
				s = (a('96cf'), a('3b8d')),
				i =
					(a('7514'),
					function () {
						var t = this,
							e = t.$createElement,
							a = t._self._c || e;
						return a('div', { staticClass: 'comment-item' }, [
							a('div', { staticClass: 'left' }, [
								a('img', { attrs: { src: t.data.headImage, alt: '' } }),
							]),
							a('div', { staticClass: 'right' }, [
								a('div', { staticClass: 'text' }, [
									t._v(t._s(t.data.nickname)),
								]),
							]),
						]);
					}),
				o = [],
				c = { props: { data: Object } },
				u = c,
				d = (a('f413'), a('2877')),
				l = Object(d['a'])(u, i, o, !1, null, '57b86f54', null),
				p = l.exports,
				f = {
					components: { UserItem: p },
					data: function () {
						return { data: { promoter: {}, enlist: [] }, enlist: [] };
					},
					computed: {
						user: function () {
							return this.$store.getters.user;
						},
						isJoin: function () {
							var t = this;
							return !!this.enlist.find(function (e) {
								return e._id === t.user._id;
							});
						},
						status: function () {
							var t = +new Date(this.data.startDate),
								e = +new Date(this.data.endDate),
								a = +new Date();
							return t >= a
								? [0, 'Not yet begun']
								: a >= e
								? [2, 'Has ended']
								: [1, 'In activity'];
						},
					},
					created: function () {
						this.getInfo();
					},
					methods: {
						getInfo: (function () {
							var t = Object(s['a'])(
								regeneratorRuntime.mark(function t() {
									var e, a;
									return regeneratorRuntime.wrap(
										function (t) {
											while (1)
												switch ((t.prev = t.next)) {
													case 0:
														if (this.$route.query._id) {
															t.next = 2;
															break;
														}
														return t.abrupt('return');
													case 2:
														return (
															(t.prev = 2),
															this.$toast.loading({ duration: 0 }),
															(t.next = 6),
															this.$http({
																url: this.$api.active_info,
																params: { _id: this.$route.query._id },
															})
														);
													case 6:
														(e = t.sent),
															(a = e.data),
															(this.data = a),
															(this.enlist = a.enlist);
													case 10:
														return (
															(t.prev = 10), this.$toast.clear(!0), t.finish(10)
														);
													case 13:
													case 'end':
														return t.stop();
												}
										},
										t,
										this,
										[[2, , 10, 13]],
									);
								}),
							);
							function e() {
								return t.apply(this, arguments);
							}
							return e;
						})(),
						onDeleteConfirm: (function () {
							var t = Object(s['a'])(
								regeneratorRuntime.mark(function t() {
									var e = this;
									return regeneratorRuntime.wrap(
										function (t) {
											while (1)
												switch ((t.prev = t.next)) {
													case 0:
														this.$dialog
															.confirm({
																title: 'Message',
																message: 'confirm deletion?',
															})
															.then(
																Object(s['a'])(
																	regeneratorRuntime.mark(function t() {
																		return regeneratorRuntime.wrap(
																			function (t) {
																				while (1)
																					switch ((t.prev = t.next)) {
																						case 0:
																							return (
																								(t.prev = 0),
																								e.$toast.loading({
																									duration: 0,
																								}),
																								(t.next = 4),
																								e.$http({
																									url: e.$api.active_user_del,
																									method: 'post',
																									data: { _id: e.data._id },
																								})
																							);
																						case 4:
																							setTimeout(function () {
																								e.$toast('delete in success');
																							}),
																								e.getInfo();
																						case 6:
																							return (
																								(t.prev = 6),
																								e.$toast.clear(!0),
																								t.finish(6)
																							);
																						case 9:
																						case 'end':
																							return t.stop();
																					}
																			},
																			t,
																			null,
																			[[0, , 6, 9]],
																		);
																	}),
																),
															)
															.catch(function () {});
													case 1:
													case 'end':
														return t.stop();
												}
										},
										t,
										this,
									);
								}),
							);
							function e() {
								return t.apply(this, arguments);
							}
							return e;
						})(),
						onAddActive: (function () {
							var t = Object(s['a'])(
								regeneratorRuntime.mark(function t() {
									var e = this;
									return regeneratorRuntime.wrap(
										function (t) {
											while (1)
												switch ((t.prev = t.next)) {
													case 0:
														this.$dialog
															.confirm({
																title: 'Message',
																message: 'confirm to join the activity?',
															})
															.then(
																Object(s['a'])(
																	regeneratorRuntime.mark(function t() {
																		return regeneratorRuntime.wrap(
																			function (t) {
																				while (1)
																					switch ((t.prev = t.next)) {
																						case 0:
																							return (
																								(t.prev = 0),
																								e.$toast.loading({
																									duration: 0,
																								}),
																								(t.next = 4),
																								e.$http({
																									url: e.$api.active_user_add,
																									method: 'post',
																									data: { _id: e.data._id },
																								})
																							);
																						case 4:
																							setTimeout(function () {
																								e.$toast('join in success');
																							}),
																								e.getInfo();
																						case 6:
																							return (
																								(t.prev = 6),
																								e.$toast.clear(!0),
																								t.finish(6)
																							);
																						case 9:
																						case 'end':
																							return t.stop();
																					}
																			},
																			t,
																			null,
																			[[0, , 6, 9]],
																		);
																	}),
																),
															)
															.catch(function () {});
													case 1:
													case 'end':
														return t.stop();
												}
										},
										t,
										this,
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
				m = f,
				h = (a('2ee0'), Object(d['a'])(m, n, r, !1, null, '76e44d5c', null));
			e['default'] = h.exports;
		},
		6780: function (t, e, a) {},
		f413: function (t, e, a) {
			'use strict';
			var n = a('6780'),
				r = a.n(n);
			r.a;
		},
		fa13: function (t, e, a) {},
	},
]);
