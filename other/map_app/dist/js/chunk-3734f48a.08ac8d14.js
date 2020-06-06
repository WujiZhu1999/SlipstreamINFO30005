(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
	['chunk-3734f48a'],
	{
		'3ab7': function (t, e, n) {},
		'403e': function (t, e, n) {
			'use strict';
			var a = n('3ab7'),
				r = n.n(a);
			r.a;
		},
		7074: function (t, e, n) {
			'use strict';
			var a = n('f9ec'),
				r = n.n(a);
			r.a;
		},
		f9ec: function (t, e, n) {},
		fdcc: function (t, e, n) {
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
							t._l(t.comments, function (e) {
								return n('Item', {
									key: e._id,
									attrs: { data: e },
									on: { delete: t.onDeleteItem },
								});
							}),
							1,
						),
					]);
				},
				r = [],
				s = (n('96cf'), n('3b8d')),
				i = function () {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n('div', { staticClass: 'comment-item' }, [
						n('div', { staticClass: 'left' }, [
							n('img', { attrs: { src: t.data.user.headImage, alt: '' } }),
						]),
						n('div', { staticClass: 'right' }, [
							n(
								'div',
								{
									staticClass: 'text',
									on: {
										click: function (e) {
											return t.$router.push({
												name: 'postInfo',
												query: { back: 'mycomment', _id: t.data.article },
											});
										},
									},
								},
								[t._v(t._s(t.data.content))],
							),
							n('div', { staticClass: 'user' }, [
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
							]),
						]),
					]);
				},
				c = [],
				o = {
					props: { data: Object },
					methods: {
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
															.then(function () {
																e.$emit('delete', e.data);
															})
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
				u = o,
				m = (n('403e'), n('2877')),
				l = Object(m['a'])(u, i, c, !1, null, '23f44e60', null),
				f = l.exports,
				d = {
					components: { Item: f },
					data: function () {
						return { data: {}, comments: [] };
					},
					created: function () {
						this.getComments();
					},
					methods: {
						onDeleteItem: (function () {
							var t = Object(s['a'])(
								regeneratorRuntime.mark(function t(e) {
									var n,
										a,
										r,
										s = this;
									return regeneratorRuntime.wrap(
										function (t) {
											while (1)
												switch ((t.prev = t.next)) {
													case 0:
														return (
															(n = e._id),
															(a = e.article),
															(t.prev = 1),
															this.$toast.loading({ duration: 0 }),
															(t.next = 5),
															this.$http({
																url: this.$api.comment_remove,
																params: { _id: n, article: a },
															})
														);
													case 5:
														(r = t.sent),
															r.data,
															this.getComments(),
															setTimeout(function () {
																s.$toast('delete success');
															});
													case 9:
														return (
															(t.prev = 9), this.$toast.clear(!0), t.finish(9)
														);
													case 12:
													case 'end':
														return t.stop();
												}
										},
										t,
										this,
										[[1, , 9, 12]],
									);
								}),
							);
							function e(e) {
								return t.apply(this, arguments);
							}
							return e;
						})(),
						getComments: (function () {
							var t = Object(s['a'])(
								regeneratorRuntime.mark(function t() {
									var e, n;
									return regeneratorRuntime.wrap(
										function (t) {
											while (1)
												switch ((t.prev = t.next)) {
													case 0:
														return (
															(t.next = 2),
															this.$http({
																url: this.$api.comment,
																params: { user: !0 },
															})
														);
													case 2:
														(e = t.sent), (n = e.data), (this.comments = n);
													case 5:
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
				p = d,
				h = (n('7074'), Object(m['a'])(p, a, r, !1, null, '1fb24958', null));
			e['default'] = h.exports;
		},
	},
]);
