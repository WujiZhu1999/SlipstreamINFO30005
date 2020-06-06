(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
	['chunk-b4bf0220'],
	{
		'09cf': function (t, e, n) {
			'use strict';
			var a = n('12fc'),
				r = n.n(a);
			r.a;
		},
		'12fc': function (t, e, n) {},
		c282: function (t, e, n) {},
		cc7a: function (t, e, n) {
			'use strict';
			var a = n('c282'),
				r = n.n(a);
			r.a;
		},
		f029: function (t, e, n) {
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
											return t.$router.replace({
												name: t.$route.query.back
													? t.$route.query.back
													: 'forum',
											});
										},
									},
								},
								[n('van-icon', { attrs: { name: 'arrow-left' } })],
								1,
							),
							n('div', { staticClass: 'map-header-title' }, [
								t._v(t._s(t.$route.meta.title)),
							]),
							n(
								'div',
								{ staticClass: 'action' },
								[
									n('van-icon', {
										staticStyle: { 'margin-right': '5px' },
										attrs: {
											name: 'good-job',
											color: t.data.isAgree ? '#0084ff' : '#b2bac2',
										},
										on: { click: t.onAgree },
									}),
									t.data.user && t.data.user._id !== t.user._id
										? n('van-icon', {
												attrs: {
													name: 'friends',
													color: t.data.isFollow ? '#0084ff' : '#b2bac2',
												},
												on: { click: t.onFollow },
										  })
										: t._e(),
								],
								1,
							),
						]),
						n(
							'div',
							{ staticClass: 'map-content' },
							[
								n('div', { staticClass: 'user' }, [
									n('h4', [t._v(t._s(t.data.user && t.data.user.nickname))]),
									n('span', [t._v(t._s(t._f('dateFormat')(t.data.createdAt)))]),
								]),
								n('div', {
									staticClass: 'content',
									domProps: { innerHTML: t._s(t.data.content) },
								}),
								n('h4', { staticClass: 'comment-title' }, [
									t._v('\n      Comments\n      '),
									n(
										'span',
										{ staticClass: 'user-num' },
										[
											n('van-icon', { attrs: { name: 'comment' } }),
											n('span', [t._v(t._s(t.data.commentNum))]),
										],
										1,
									),
								]),
								t._l(t.comments, function (t) {
									return n('CommentItem', { key: t._id, attrs: { data: t } });
								}),
								n('div', { staticClass: 'comment-input' }, [
									n('input', {
										directives: [
											{
												name: 'model',
												rawName: 'v-model',
												value: t.commentText,
												expression: 'commentText',
											},
										],
										attrs: {
											placeholder: 'Please enter comments',
											maxlength: '150',
										},
										domProps: { value: t.commentText },
										on: {
											input: function (e) {
												e.target.composing || (t.commentText = e.target.value);
											},
										},
									}),
									n('span', { on: { click: t.onSendComment } }, [t._v('SEND')]),
								]),
							],
							2,
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
							n('div', { staticClass: 'user' }, [
								t._v(t._s(t.data.user && t.data.user.nickname)),
							]),
							n('div', { staticClass: 'text' }, [t._v(t._s(t.data.content))]),
						]),
					]);
				},
				o = [],
				c = { props: { data: Object } },
				u = c,
				m = (n('09cf'), n('2877')),
				l = Object(m['a'])(u, i, o, !1, null, '5c52f339', null),
				d = l.exports,
				h = {
					components: { CommentItem: d },
					data: function () {
						return { data: {}, comments: [], commentText: '' };
					},
					computed: {
						user: function () {
							return this.$store.getters.user;
						},
					},
					created: function () {
						this.getInfo(), this.getComments();
					},
					methods: {
						onAgree: (function () {
							var t = Object(s['a'])(
								regeneratorRuntime.mark(function t() {
									var e = this;
									return regeneratorRuntime.wrap(
										function (t) {
											while (1)
												switch ((t.prev = t.next)) {
													case 0:
														return (
															(t.prev = 0),
															this.$toast.loading({ duration: 0 }),
															(t.next = 4),
															this.$http({
																url: this.$api.article_agree,
																method: 'post',
																data: { articleId: this.$route.query._id },
															})
														);
													case 4:
														return (t.next = 6), this.getInfo();
													case 6:
														setTimeout(function () {
															e.data.isAgree
																? e.$toast('agree successful')
																: e.$toast('cancel agree successful');
														});
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
						onFollow: (function () {
							var t = Object(s['a'])(
								regeneratorRuntime.mark(function t() {
									var e,
										n = this;
									return regeneratorRuntime.wrap(
										function (t) {
											while (1)
												switch ((t.prev = t.next)) {
													case 0:
														return (
															(t.prev = 0),
															this.$toast.loading({ duration: 0 }),
															(e = this.$store.getters.user),
															(t.next = 5),
															this.$http({
																url: this.data.isFollow
																	? this.$api.follow_remove
																	: this.$api.follow,
																method: 'post',
																data: { me: e._id, friend: this.data.user._id },
															})
														);
													case 5:
														return (t.next = 7), this.getInfo();
													case 7:
														setTimeout(function () {
															n.data.isFollow
																? n.$toast('follow successful')
																: n.$toast('cancel follow successful');
														});
													case 8:
														return (
															(t.prev = 8), this.$toast.clear(!0), t.finish(8)
														);
													case 11:
													case 'end':
														return t.stop();
												}
										},
										t,
										this,
										[[0, , 8, 11]],
									);
								}),
							);
							function e() {
								return t.apply(this, arguments);
							}
							return e;
						})(),
						getInfo: (function () {
							var t = Object(s['a'])(
								regeneratorRuntime.mark(function t() {
									var e, n;
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
																url: this.$api.article_info,
																params: { _id: this.$route.query._id },
															})
														);
													case 6:
														(e = t.sent), (n = e.data), (this.data = n);
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
										[[2, , 9, 12]],
									);
								}),
							);
							function e() {
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
																params: { article: this.$route.query._id },
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
						onSendComment: (function () {
							var t = Object(s['a'])(
								regeneratorRuntime.mark(function t() {
									var e,
										n = this;
									return regeneratorRuntime.wrap(
										function (t) {
											while (1)
												switch ((t.prev = t.next)) {
													case 0:
														if (this.commentText.length) {
															t.next = 2;
															break;
														}
														return t.abrupt(
															'return',
															this.$toast('Please enter comments'),
														);
													case 2:
														return (
															(t.prev = 2),
															this.$toast.loading({ duration: 0 }),
															(t.next = 6),
															this.$http({
																url: this.$api.comment_create,
																method: 'post',
																data: {
																	article: this.$route.query._id,
																	content: this.commentText,
																},
															})
														);
													case 6:
														(e = t.sent),
															e.data,
															(this.commentText = ''),
															setTimeout(function () {
																n.$toast('Comment success'), n.getComments();
															});
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
					},
				},
				p = h,
				f = (n('cc7a'), Object(m['a'])(p, a, r, !1, null, '25d3d444', null));
			e['default'] = f.exports;
		},
	},
]);
