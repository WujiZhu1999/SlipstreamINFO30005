(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
	['chunk-4ca67e6c'],
	{
		'1fbf': function (t, n, e) {
			'use strict';
			var r = e('8c88'),
				i = e.n(r);
			i.a;
		},
		'8c88': function (t, n, e) {},
		fee5: function (t, n, e) {
			'use strict';
			e.r(n);
			var r = function () {
					var t = this,
						n = t.$createElement,
						e = t._self._c || n;
					return e(
						'div',
						{ staticClass: 'layout' },
						[
							e('div', { staticClass: 'header' }, [
								e('h3', [
									e('img', {
										staticClass: 'user-icon',
										attrs: { src: t.user.headImage },
										on: {
											click: function (n) {
												return t.$router.push({ name: 'userInfo' });
											},
										},
									}),
									e('span', { staticClass: 'user-text' }, [
										t._v(t._s(t.user.nickname)),
									]),
									e(
										'div',
										{
											staticClass: 'tag',
											on: {
												click: function (n) {
													return t.$router.push({ name: 'addUser' });
												},
											},
										},
										[
											e('van-icon', { attrs: { name: 'plus' } }),
											e('p', [t._v('Good friend')]),
										],
										1,
									),
								]),
								e('div', [
									e(
										'span',
										{
											on: {
												click: function (n) {
													return t.$router.push({
														name: 'userList',
														query: { type: 'Follow' },
													});
												},
											},
										},
										[e('i', [t._v(t._s(t.followTotal))]), t._v(' Follow')],
									),
									e(
										'span',
										{
											on: {
												click: function (n) {
													return t.$router.push({
														name: 'userList',
														query: { type: 'Fans' },
													});
												},
											},
										},
										[e('i', [t._v(t._s(t.fansTotal))]), t._v(' Fans')],
									),
								]),
							]),
							e(
								'van-cell-group',
								[
									e('van-cell', {
										attrs: { icon: 'user-o', title: 'User', 'is-link': '' },
										nativeOn: {
											click: function (n) {
												return t.$router.push({ name: 'userInfo' });
											},
										},
									}),
									e('van-cell', {
										attrs: { icon: 'orders-o', title: 'Post', 'is-link': '' },
										nativeOn: {
											click: function (n) {
												return t.$router.push({ name: 'myposts' });
											},
										},
									}),
									e('van-cell', {
										attrs: { icon: 'exchange', title: 'Route', 'is-link': '' },
										nativeOn: {
											click: function (n) {
												return t.$router.push({ name: 'myroute' });
											},
										},
									}),
									e('van-cell', {
										attrs: {
											icon: 'comment-o',
											title: 'Comment',
											'is-link': '',
										},
										nativeOn: {
											click: function (n) {
												return t.$router.push({ name: 'mycomment' });
											},
										},
									}),
									e('van-cell', {
										attrs: {
											icon: 'chart-trending-o',
											title: 'Report',
											'is-link': '',
										},
										nativeOn: {
											click: function (n) {
												return t.$router.push({ name: 'report' });
											},
										},
									}),
									e('van-cell', {
										attrs: { icon: 'home-o', title: 'Active', 'is-link': '' },
										nativeOn: {
											click: function (n) {
												return t.$router.push({ name: 'myactive' });
											},
										},
									}),
									e('van-cell', {
										attrs: { icon: 'label-o', title: 'Ranking', 'is-link': '' },
										nativeOn: {
											click: function (n) {
												return t.$router.push({ name: 'ranking' });
											},
										},
									}),
								],
								1,
							),
							e(
								'div',
								{ staticClass: 'logout-btn', on: { click: t.onLogOut } },
								[t._v('LOGOUT')],
							),
						],
						1,
					);
				},
				i = [],
				s = (e('96cf'), e('3b8d')),
				o = {
					data: function () {
						return { followTotal: 0, fansTotal: 0 };
					},
					computed: {
						user: function () {
							return this.$store.getters.user;
						},
					},
					created: function () {
						this.getList();
					},
					methods: {
						onLogOut: function () {
							this.$store.dispatch('users/logout');
						},
						getList: (function () {
							var t = Object(s['a'])(
								regeneratorRuntime.mark(function t() {
									var n, e;
									return regeneratorRuntime.wrap(
										function (t) {
											while (1)
												switch ((t.prev = t.next)) {
													case 0:
														return (
															(t.next = 2),
															this.$http({
																url: this.$api.user_fans,
																method: 'post',
																data: { me: this.user._id },
															})
														);
													case 2:
														(n = t.sent),
															(e = n.data),
															(this.followTotal = e.followTotal),
															(this.fansTotal = e.fansTotal);
													case 6:
													case 'end':
														return t.stop();
												}
										},
										t,
										this,
									);
								}),
							);
							function n() {
								return t.apply(this, arguments);
							}
							return n;
						})(),
					},
				},
				a = o,
				c = (e('1fbf'), e('2877')),
				u = Object(c['a'])(a, r, i, !1, null, '3918d558', null);
			n['default'] = u.exports;
		},
	},
]);
