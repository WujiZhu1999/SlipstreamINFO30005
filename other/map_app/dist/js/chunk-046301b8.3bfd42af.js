(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
	['chunk-046301b8'],
	{
		6981: function (e, t, r) {
			'use strict';
			var a = r('80e8'),
				s = r.n(a);
			s.a;
		},
		'80e8': function (e, t, r) {},
		d5c2: function (e, t, r) {
			'use strict';
			r.r(t);
			var a = function () {
					var e = this,
						t = e.$createElement,
						r = e._self._c || t;
					return r('div', { staticClass: 'login' }, [
						r('p', [e._v('User registration')]),
						r('div', { staticClass: 'login-form' }, [
							r('div', { staticClass: 'form-item' }, [
								r('input', {
									directives: [
										{
											name: 'model',
											rawName: 'v-model.trim',
											value: e.forms.nickname,
											expression: 'forms.nickname',
											modifiers: { trim: !0 },
										},
									],
									attrs: {
										maxlength: '15',
										placeholder: 'Please enter a nickname',
									},
									domProps: { value: e.forms.nickname },
									on: {
										input: function (t) {
											t.target.composing ||
												e.$set(e.forms, 'nickname', t.target.value.trim());
										},
										blur: function (t) {
											return e.$forceUpdate();
										},
									},
								}),
							]),
							r('div', { staticClass: 'form-item' }, [
								r('input', {
									directives: [
										{
											name: 'model',
											rawName: 'v-model.trim',
											value: e.forms.userName,
											expression: 'forms.userName',
											modifiers: { trim: !0 },
										},
									],
									attrs: {
										maxlength: '15',
										placeholder: 'Please enter your account number',
									},
									domProps: { value: e.forms.userName },
									on: {
										input: function (t) {
											t.target.composing ||
												e.$set(e.forms, 'userName', t.target.value.trim());
										},
										blur: function (t) {
											return e.$forceUpdate();
										},
									},
								}),
							]),
							r('div', { staticClass: 'form-item' }, [
								r('input', {
									directives: [
										{
											name: 'model',
											rawName: 'v-model.trim',
											value: e.forms.password,
											expression: 'forms.password',
											modifiers: { trim: !0 },
										},
									],
									attrs: {
										maxlength: '15',
										placeholder: 'Please input a password',
										type: 'password',
									},
									domProps: { value: e.forms.password },
									on: {
										input: function (t) {
											t.target.composing ||
												e.$set(e.forms, 'password', t.target.value.trim());
										},
										blur: function (t) {
											return e.$forceUpdate();
										},
									},
								}),
							]),
							r('div', { staticClass: 'form-item' }, [
								r(
									'button',
									{
										attrs: { disabled: e.disabled },
										on: { click: e.handlerSubmit },
									},
									[e._v('REGISTER')],
								),
							]),
							r('div', { staticClass: 'footer' }, [
								r(
									'span',
									{
										on: {
											click: function (t) {
												return e.$router.push({ name: 'login' });
											},
										},
									},
									[e._v('>> login')],
								),
							]),
						]),
					]);
				},
				s = [],
				n = (r('a481'), r('96cf'), r('3b8d')),
				i = {
					components: {},
					data: function () {
						return {
							disabled: !1,
							forms: { userName: '', password: '', nickname: '' },
						};
					},
					watch: {
						forms: {
							deep: !0,
							immediate: !0,
							handler: function () {
								var e = this;
								this.validateFields()
									.then(function () {
										e.disabled = !1;
									})
									.catch(function () {
										e.disabled = !0;
									});
							},
						},
					},
					methods: {
						validateFields: function () {
							var e = this,
								t =
									arguments.length > 0 &&
									void 0 !== arguments[0] &&
									arguments[0];
							return new Promise(function (r, a) {
								var s = e.forms,
									n = s.userName,
									i = s.password,
									o = s.nickname;
								return (
									(n = n.trim()),
									(i = i.trim()),
									(o = o.trim()),
									o
										? n
											? i
												? void r({ userName: n, password: i, nickname: o })
												: (t && e.$toast('Please input a password'), a())
											: (t && e.$toast('Please enter your account number'), a())
										: (t && e.$toast('Please enter a nickname'), a())
								);
							});
						},
						handlerSubmit: (function () {
							var e = Object(n['a'])(
								regeneratorRuntime.mark(function e() {
									var t,
										r,
										a = this;
									return regeneratorRuntime.wrap(
										function (e) {
											while (1)
												switch ((e.prev = e.next)) {
													case 0:
														return (e.next = 2), this.validateFields(!0);
													case 2:
														return (
															(t = e.sent),
															(e.prev = 3),
															this.$toast.loading({ duration: 0 }),
															(e.next = 7),
															this.$http({
																method: 'post',
																url: this.$api.register,
																data: t,
															})
														);
													case 7:
														(r = e.sent),
															r.data,
															this.$router.replace({ name: 'login' }),
															setTimeout(function () {
																a.$toast('register successful');
															});
													case 11:
														return (
															(e.prev = 11), this.$toast.clear(!0), e.finish(11)
														);
													case 14:
													case 'end':
														return e.stop();
												}
										},
										e,
										this,
										[[3, , 11, 14]],
									);
								}),
							);
							function t() {
								return e.apply(this, arguments);
							}
							return t;
						})(),
					},
				},
				o = i,
				m = (r('6981'), r('2877')),
				u = Object(m['a'])(o, a, s, !1, null, '9f92ab34', null);
			t['default'] = u.exports;
		},
	},
]);
