(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
	['chunk-579cb14e'],
	{
		'001f': function (t, e, n) {
			'use strict';
			var a = n('cb0f'),
				i = n.n(a);
			i.a;
		},
		'15fd': function (t, e, n) {
			'use strict';
			var a = n('9099'),
				i = n.n(a);
			i.a;
		},
		9099: function (t, e, n) {},
		cb0f: function (t, e, n) {},
		f525: function (t, e, n) {
			'use strict';
			n.r(e);
			var a = function () {
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
											return t.$router.push({ name: 'person' });
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
							{ staticClass: 'map-header map-header-tab' },
							[
								n(
									'van-tabs',
									{
										staticStyle: { width: '100%' },
										on: { change: t.onTabChange },
										model: {
											value: t.tabActive,
											callback: function (e) {
												t.tabActive = e;
											},
											expression: 'tabActive',
										},
									},
									[
										n('van-tab', { attrs: { title: 'Already begun' } }),
										n('van-tab', { attrs: { title: 'Completed' } }),
										n('van-tab', { attrs: { title: 'Incomplete' } }),
									],
									1,
								),
							],
							1,
						),
						n('div', { staticClass: 'map-content' }, [
							n(
								'div',
								{
									ref: 'list',
									staticStyle: { 'overflow-y': 'auto', height: '100%' },
								},
								[
									n(
										'van-pull-refresh',
										{
											staticStyle: { position: 'relative' },
											attrs: {
												'pulling-text': 'Pull down to refresh...',
												'loosing-text': 'Release to refresh...',
												'loading-text': 'loading...',
											},
											on: { refresh: t.onRefresh },
											model: {
												value: t.isLoading,
												callback: function (e) {
													t.isLoading = e;
												},
												expression: 'isLoading',
											},
										},
										[
											n(
												'van-list',
												{
													attrs: {
														'error-text': 'Request failed, click reload',
														'finished-text':
															0 === t.data.length ? '' : 'No more',
														'loading-text': 'loading...',
														error: t.error,
														finished: t.finished,
													},
													on: {
														'update:error': function (e) {
															t.error = e;
														},
														load: t.onLoad,
													},
													model: {
														value: t.loading,
														callback: function (e) {
															t.loading = e;
														},
														expression: 'loading',
													},
												},
												t._l(t.data, function (e) {
													return n('Item', {
														key: e._id,
														attrs: { item: e },
														on: { update: t.onSearch },
													});
												}),
												1,
											),
										],
										1,
									),
								],
								1,
							),
						]),
					]);
				},
				i = [],
				r = (n('96cf'), n('3b8d')),
				s = function () {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n('div', { staticClass: 'post' }, [
						n('p', { staticClass: 'header' }, [
							t._v('date: ' + t._s(t._f('dateFormat')(t.item.createdAt))),
						]),
						n('p', { staticClass: 'header' }, [
							t._v('origin: ' + t._s(t.item.originName)),
						]),
						n('p', { staticClass: 'header' }, [
							t._v('destination: ' + t._s(t.item.destinationName)),
						]),
						n('h3', { staticClass: 'text-ellipsis' }, [
							t._v(t._s(t.item.distance) + ' km'),
						]),
						n('div', { staticClass: 'post-content' }, [
							n(
								'span',
								{
									staticClass: 'action',
									on: {
										click: function (e) {
											return e.stopPropagation(), t.onDeleteConfirm(e);
										},
									},
								},
								[n('van-icon', { attrs: { name: 'delete' } })],
								1,
							),
							n(
								'span',
								{
									staticClass: 'fb-share-button action',
									attrs: {
										'data-href':
											'https://developers.facebook.com/docs/plugins/',
										'data-layout': 'button_count',
									},
									on: {
										click: function (e) {
											return e.stopPropagation(), t.onShare(e);
										},
									},
								},
								[
									n(
										'a',
										{
											staticClass: 'fb-xfbml-parse-ignore',
											staticStyle: {
												'font-size': '0',
												color: '#999',
												'line-height': '1',
											},
											attrs: { target: '_blank', href: t.getUrl() },
										},
										[
											n('van-icon', {
												staticStyle: { 'font-size': '0.42667rem' },
												attrs: { name: 'exchange' },
											}),
										],
										1,
									),
								],
							),
						]),
					]);
				},
				o = [],
				c = {
					props: { item: Object },
					computed: {
						user: function () {
							return this.$store.getters.user;
						},
					},
					methods: {
						getUrl: function () {
							var t = encodeURIComponent(
								window.location.protocol +
									'//' +
									window.location.host +
									'/#/share?_id=' +
									this.item._id,
							);
							return 'https://www.facebook.com/sharer/sharer.php?u='.concat(
								t,
								'&amp;src=sdkpreparse',
							);
						},
						onDeleteConfirm: (function () {
							var t = Object(r['a'])(
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
																Object(r['a'])(
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
																									url: e.$api.user_route_delete,
																									params: { _id: e.item._id },
																								})
																							);
																						case 4:
																							setTimeout(function () {
																								e.$toast('delete in success');
																							}),
																								e.$emit('update');
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
						onShare: function () {},
					},
				},
				u = c,
				l = (n('15fd'), n('2877')),
				h = Object(l['a'])(u, s, o, !1, null, '4d6c82fc', null),
				d = h.exports,
				p = {
					components: { Item: d },
					data: function () {
						return {
							data: [],
							loading: !1,
							finished: !1,
							pageNo: 0,
							isAjax: !1,
							error: !1,
							isLoading: !1,
							title: '',
							tabActive: 0,
						};
					},
					computed: {
						user: function () {
							return this.$store.getters.user;
						},
					},
					methods: {
						onLoad: function () {
							this.isAjax ||
								((this.isAjax = !0), this.pageNo++, this.list(!1, !1));
						},
						onRefresh: (function () {
							var t = Object(r['a'])(
								regeneratorRuntime.mark(function t() {
									var e = this;
									return regeneratorRuntime.wrap(
										function (t) {
											while (1)
												switch ((t.prev = t.next)) {
													case 0:
														return (
															(this.isAjax = !0),
															(t.prev = 1),
															(this.pageNo = 1),
															(this.finished = !1),
															(t.next = 6),
															this.list(!0)
														);
													case 6:
														return (
															(t.prev = 6),
															setTimeout(function () {
																(e.isLoading = !1), (e.isAjax = !1);
															}, 300),
															t.finish(6)
														);
													case 9:
													case 'end':
														return t.stop();
												}
										},
										t,
										this,
										[[1, , 6, 9]],
									);
								}),
							);
							function e() {
								return t.apply(this, arguments);
							}
							return e;
						})(),
						onSearch: (function () {
							var t = Object(r['a'])(
								regeneratorRuntime.mark(function t() {
									return regeneratorRuntime.wrap(
										function (t) {
											while (1)
												switch ((t.prev = t.next)) {
													case 0:
														if (!this.isAjax) {
															t.next = 2;
															break;
														}
														return t.abrupt('return');
													case 2:
														return (
															(this.isAjax = !0),
															(this.pageNo = 1),
															(this.finished = !1),
															(t.prev = 5),
															(t.next = 8),
															this.list(!0)
														);
													case 8:
														return (
															(t.prev = 8), (this.isAjax = !1), t.finish(8)
														);
													case 11:
													case 'end':
														return t.stop();
												}
										},
										t,
										this,
										[[5, , 8, 11]],
									);
								}),
							);
							function e() {
								return t.apply(this, arguments);
							}
							return e;
						})(),
						onTabChange: function () {
							this.onSearch();
						},
						list: (function () {
							var t = Object(r['a'])(
								regeneratorRuntime.mark(function t(e) {
									var n,
										a,
										i,
										r,
										s = this,
										o = arguments;
									return regeneratorRuntime.wrap(
										function (t) {
											while (1)
												switch ((t.prev = t.next)) {
													case 0:
														return (
															(n = !(o.length > 1 && void 0 !== o[1]) || o[1]),
															(t.prev = 1),
															n && this.$toast.loading({ duration: 0 }),
															(t.next = 5),
															this.$http({
																url: this.$api.user_route,
																params: {
																	pageNo: this.pageNo,
																	status: this.tabActive,
																},
															})
														);
													case 5:
														(a = t.sent),
															(i = a.data),
															(r = i.rows || []),
															e
																? ((this.data = r),
																  this.$nextTick(function () {
																		s.$refs.list.scrollTop = 0;
																  }))
																: (this.data = this.data.concat(r)),
															(this.pageNo = i.pageNo),
															r.length !== i.size && (this.finished = !0),
															(t.next = 17);
														break;
													case 13:
														(t.prev = 13),
															(t.t0 = t['catch'](1)),
															(this.error = !0),
															this.pageNo--;
													case 17:
														return (
															(t.prev = 17),
															n && this.$toast.clear(!0),
															(this.isLoad = !0),
															this.$nextTick(function () {
																(s.isAjax = !1), (s.loading = !1);
															}),
															t.finish(17)
														);
													case 22:
													case 'end':
														return t.stop();
												}
										},
										t,
										this,
										[[1, 13, 17, 22]],
									);
								}),
							);
							function e(e) {
								return t.apply(this, arguments);
							}
							return e;
						})(),
					},
				},
				f = p,
				m = (n('001f'), Object(l['a'])(f, a, i, !1, null, '41ce4df6', null));
			e['default'] = m.exports;
		},
	},
]);
