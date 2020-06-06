(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
	['chunk-39021a8d'],
	{
		'044f': function (t, e, i) {},
		'3cbd': function (t, e, i) {
			'use strict';
			var n = i('044f'),
				a = i.n(n);
			a.a;
		},
		d99d: function (t, e, i) {
			'use strict';
			i.r(e);
			var n = function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i('div', { staticClass: 'map-wrap' }, [
						i('div', { staticClass: 'map-header' }, [
							i(
								'div',
								{
									staticClass: 'left-icon',
									on: {
										click: function (e) {
											return t.$router.push({
												name: t.isEdit ? 'myposts' : 'forum',
											});
										},
									},
								},
								[i('van-icon', { attrs: { name: 'arrow-left' } })],
								1,
							),
							i('div', { staticClass: 'map-header-title' }, [
								t._v(t._s(t.$route.meta.title)),
							]),
						]),
						i(
							'div',
							{ staticClass: 'map-content' },
							[
								i('div', { staticClass: 'form-item' }, [
									i('input', {
										directives: [
											{
												name: 'model',
												rawName: 'v-model',
												value: t.title,
												expression: 'title',
											},
										],
										attrs: { placeholder: 'Please enter a title' },
										domProps: { value: t.title },
										on: {
											input: function (e) {
												e.target.composing || (t.title = e.target.value);
											},
										},
									}),
								]),
								i('quill-editor', {
									ref: 'myQuillEditor',
									attrs: { options: t.editorOption },
									model: {
										value: t.content,
										callback: function (e) {
											t.content = e;
										},
										expression: 'content',
									},
								}),
								i(
									'div',
									{ staticClass: 'post-btn', on: { click: t.onSubmit } },
									[t._v('SUBMIT')],
								),
							],
							1,
						),
					]);
				},
				a = [],
				r = (i('a481'), i('96cf'), i('3b8d')),
				s = i('2b0e'),
				o = i('9339'),
				c = i.n(o),
				u = i('953d'),
				l = i.n(u),
				d = (i('a753'), i('8096'), i('14e1'), i('5dde'));
			c.a.register('modules/container', d['c']),
				c.a.register('modules/ImageExtend', d['a']),
				c.a.register('modules/QuillWatch', d['b']),
				s['a'].use(l.a, { placeholder: 'Please enter content' });
			var p = {
					data: function () {
						return {
							content: '',
							title: '',
							editorOption: {
								modules: {
									ImageExtend: {
										name: 'file',
										size: 50,
										action: this.$api.upload,
										response: function (t) {
											return t.url;
										},
									},
									toolbar: {
										container: [
											['bold', 'italic', 'underline', 'strike'],
											['blockquote', 'code-block'],
											[{ header: 1 }, { header: 2 }],
											[{ list: 'ordered' }, { list: 'bullet' }],
											[{ script: 'sub' }, { script: 'super' }],
											[{ indent: '-1' }, { indent: '+1' }],
											[{ direction: 'rtl' }],
											[{ size: ['small', !1, 'large', 'huge'] }],
											[{ header: [1, 2, 3, 4, 5, 6, !1] }],
											[{ color: [] }, { background: [] }],
											[{ font: [] }],
											[{ align: [] }],
											['image'],
										],
										handlers: {
											image: function () {
												d['b'].emit(this.quill.id);
											},
										},
									},
								},
							},
						};
					},
					computed: {
						isEdit: function () {
							return 'postEdit' === this.$route.name;
						},
						_id: function () {
							return this.$route.query._id;
						},
					},
					created: function () {
						this.isEdit && this.getInfo();
					},
					mounted: function () {},
					methods: {
						getInfo: (function () {
							var t = Object(r['a'])(
								regeneratorRuntime.mark(function t() {
									var e, i;
									return regeneratorRuntime.wrap(
										function (t) {
											while (1)
												switch ((t.prev = t.next)) {
													case 0:
														return (
															(t.next = 2),
															this.$http({
																url: this.$api.article_info,
																params: { _id: this._id },
															})
														);
													case 2:
														(e = t.sent),
															(i = e.data),
															(this.content = i.content),
															(this.title = i.title);
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
							function e() {
								return t.apply(this, arguments);
							}
							return e;
						})(),
						onSubmit: (function () {
							var t = Object(r['a'])(
								regeneratorRuntime.mark(function t() {
									var e,
										i,
										n,
										a = this;
									return regeneratorRuntime.wrap(
										function (t) {
											while (1)
												switch ((t.prev = t.next)) {
													case 0:
														if (this.title) {
															t.next = 2;
															break;
														}
														return t.abrupt(
															'return',
															this.$toast('Please enter a title'),
														);
													case 2:
														if (this.content) {
															t.next = 4;
															break;
														}
														return t.abrupt(
															'return',
															this.$toast('Please enter content'),
														);
													case 4:
														if (
															((t.prev = 4),
															this.$toast.loading({ duration: 0 }),
															this.isEdit)
														) {
															t.next = 15;
															break;
														}
														return (
															(t.next = 9),
															this.$http({
																url: this.$api.article,
																method: 'post',
																data: {
																	title: this.title,
																	content: this.content,
																},
															})
														);
													case 9:
														(e = t.sent),
															(i = e.data),
															this.$router.replace({
																name: 'postInfo',
																query: { _id: i._id },
															}),
															setTimeout(function () {
																a.$toast('Create success');
															}),
															(t.next = 20);
														break;
													case 15:
														return (
															(t.next = 17),
															this.$http({
																url: this.$api.article_update,
																method: 'post',
																data: {
																	_id: this._id,
																	update: {
																		title: this.title,
																		content: this.content,
																	},
																},
															})
														);
													case 17:
														(n = t.sent),
															n.data,
															setTimeout(function () {
																a.$toast('Update success');
															});
													case 20:
														return (
															(t.prev = 20), this.$toast.clear(!0), t.finish(20)
														);
													case 23:
													case 'end':
														return t.stop();
												}
										},
										t,
										this,
										[[4, , 20, 23]],
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
				h = p,
				m = (i('3cbd'), i('2877')),
				f = Object(m['a'])(h, n, a, !1, null, '718949d7', null);
			e['default'] = f.exports;
		},
	},
]);
