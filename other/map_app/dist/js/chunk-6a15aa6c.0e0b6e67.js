(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
	['chunk-6a15aa6c'],
	{
		'017a': function (t, e, n) {
			'use strict';
			var r = n('a36e'),
				i = n.n(r);
			i.a;
		},
		2095: function (t, e, n) {
			(function (e, n) {
				t.exports = n();
			})(0, function () {
				return (function (t) {
					var e = {};
					function n(r) {
						if (e[r]) return e[r].exports;
						var i = (e[r] = { i: r, l: !1, exports: {} });
						return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
					}
					return (
						(n.m = t),
						(n.c = e),
						(n.d = function (t, e, r) {
							n.o(t, e) ||
								Object.defineProperty(t, e, {
									configurable: !1,
									enumerable: !0,
									get: r,
								});
						}),
						(n.n = function (t) {
							var e =
								t && t.__esModule
									? function () {
											return t['default'];
									  }
									: function () {
											return t;
									  };
							return n.d(e, 'a', e), e;
						}),
						(n.o = function (t, e) {
							return Object.prototype.hasOwnProperty.call(t, e);
						}),
						(n.p = ''),
						n((n.s = 246))
					);
				})([
					function (t, e, n) {
						'use strict';
						var r = n(49);
						e.__esModule = !0;
						var i = {
							isObjectValueEqual: !0,
							parsePadding: !0,
							directionEnabled: !0,
							upperFirst: !0,
							lowerFirst: !0,
							isString: !0,
							isNumber: !0,
							isBoolean: !0,
							isFunction: !0,
							isDate: !0,
							isArray: !0,
							isNil: !0,
							isObject: !0,
							isPlainObject: !0,
							isEqual: !0,
							deepMix: !0,
							mix: !0,
							each: !0,
							uniq: !0,
							find: !0,
							Array: !0,
						};
						(e.isObjectValueEqual = u),
							(e.parsePadding = c),
							(e.directionEnabled = f),
							(e.Array = void 0);
						var a = n(20);
						(e.upperFirst = a.upperFirst),
							(e.lowerFirst = a.lowerFirst),
							(e.isString = a.isString),
							(e.isNumber = a.isNumber),
							(e.isBoolean = a.isBoolean),
							(e.isFunction = a.isFunction),
							(e.isDate = a.isDate),
							(e.isArray = a.isArray),
							(e.isNil = a.isNil),
							(e.isObject = a.isObject),
							(e.isPlainObject = a.isPlainObject),
							(e.isEqual = a.isEqual),
							(e.deepMix = a.deepMix),
							(e.mix = a.mix),
							(e.each = a.each),
							(e.uniq = a.uniq),
							(e.find = a.find);
						var o = r(n(75));
						e.Array = o;
						var s = n(62);
						function u(t, e) {
							(t = Object.assign({}, t)), (e = Object.assign({}, e));
							var n = Object.getOwnPropertyNames(t),
								r = Object.getOwnPropertyNames(e);
							if (n.length !== r.length) return !1;
							for (var i = 0, a = n.length; i < a; i++) {
								var o = n[i];
								if (t[o] !== e[o]) return !1;
							}
							return !0;
						}
						function c(t) {
							var e, n, r, i;
							return (
								(0, a.isNumber)(t) || (0, a.isString)(t)
									? (e = r = i = n = t)
									: (0, a.isArray)(t) &&
									  ((e = t[0]),
									  (n = (0, a.isNil)(t[1]) ? t[0] : t[1]),
									  (r = (0, a.isNil)(t[2]) ? t[0] : t[2]),
									  (i = (0, a.isNil)(t[3]) ? n : t[3])),
								[e, n, r, i]
							);
						}
						function f(t, e) {
							return (
								void 0 === t || ('string' === typeof t && -1 !== t.indexOf(e))
							);
						}
						Object.keys(s).forEach(function (t) {
							'default' !== t &&
								'__esModule' !== t &&
								(Object.prototype.hasOwnProperty.call(i, t) || (e[t] = s[t]));
						});
					},
					function (t, e) {
						function n(t) {
							return t && t.__esModule ? t : { default: t };
						}
						t.exports = n;
					},
					function (t, e, n) {
						var r = n(50),
							i = n(22);
						function a(t, e) {
							return !e || ('object' !== r(e) && 'function' !== typeof e)
								? i(t)
								: e;
						}
						t.exports = a;
					},
					function (t, e) {
						function n(e) {
							return (
								(t.exports = n = Object.setPrototypeOf
									? Object.getPrototypeOf
									: function (t) {
											return t.__proto__ || Object.getPrototypeOf(t);
									  }),
								n(e)
							);
						}
						t.exports = n;
					},
					function (t, e) {
						function n(t, e) {
							(t.prototype = Object.create(e.prototype)),
								(t.prototype.constructor = t),
								(t.__proto__ = e);
						}
						t.exports = n;
					},
					function (t, e, n) {
						'use strict';
						var r = n(11);
						e['a'] = function (t) {
							return Array.isArray
								? Array.isArray(t)
								: Object(r['a'])(t, 'Array');
						};
					},
					function (t, e, n) {
						'use strict';
						var r = n(78),
							i = n(0),
							a = {
								version: '3.6.3',
								scales: {},
								widthRatio: { column: 0.5, rose: 0.999999, multiplePie: 3 / 4 },
								lineDash: [4, 4],
								setTheme: function (t) {
									i.deepMix(this, t);
								},
							};
						a.setTheme(r), (t.exports = a);
					},
					function (t, e, n) {
						'use strict';
						var r = function (t) {
							return (
								null !== t && 'function' !== typeof t && isFinite(t.length)
							);
						};
						e['a'] = r;
					},
					function (t, e, n) {
						'use strict';
						var r = n(5),
							i = n(29);
						function a(t, e) {
							var n;
							if (t)
								if (Object(r['a'])(t)) {
									for (var a = 0, o = t.length; a < o; a++)
										if (((n = e(t[a], a)), !1 === n)) break;
								} else if (Object(i['a'])(t))
									for (var s in t)
										if (t.hasOwnProperty(s) && ((n = e(t[s], s)), !1 === n))
											break;
						}
						e['a'] = a;
					},
					function (t, e, n) {
						'use strict';
						var r = n(11);
						e['a'] = function (t) {
							return Object(r['a'])(t, 'Function');
						};
					},
					function (t, e, n) {
						'use strict';
						var r = n(1),
							i = r(n(2)),
							a = r(n(3)),
							o = r(n(4));
						function s(t) {
							return function () {
								var e,
									n = (0, a['default'])(t);
								if (u()) {
									var r = (0, a['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, i['default'])(this, e);
							};
						}
						function u() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var c = n(0),
							f = n(46),
							l = (function (t) {
								(0, o['default'])(e, t);
								s(e);
								function e() {
									return t.apply(this, arguments) || this;
								}
								var n = e.prototype;
								return (
									(n._initProperties = function () {
										this._attrs = {
											zIndex: 0,
											visible: !0,
											destroyed: !1,
											isShape: !0,
											attrs: {},
										};
									}),
									(n.getType = function () {
										return this._attrs.type;
									}),
									(n.drawInner = function (t) {
										var e = this,
											n = e.get('attrs');
										e.createPath(t);
										var r = t.globalAlpha;
										if (e.hasFill()) {
											var i = n.fillOpacity;
											c.isNil(i) || 1 === i
												? t.fill()
												: ((t.globalAlpha = i), t.fill(), (t.globalAlpha = r));
										}
										if (e.hasStroke()) {
											var a = n.lineWidth;
											if (a > 0) {
												var o = n.strokeOpacity;
												c.isNil(o) || 1 === o || (t.globalAlpha = o),
													t.stroke();
											}
										}
									}),
									(n.getBBox = function () {
										var t = this._attrs.bbox;
										return (
											t ||
												((t = this.calculateBox()),
												t &&
													((t.x = t.minX),
													(t.y = t.minY),
													(t.width = t.maxX - t.minX),
													(t.height = t.maxY - t.minY)),
												(this._attrs.bbox = t)),
											t
										);
									}),
									(n.calculateBox = function () {
										return null;
									}),
									(n.createPath = function () {}),
									e
								);
							})(f);
						t.exports = l;
					},
					function (t, e, n) {
						'use strict';
						var r = {}.toString,
							i = function (t, e) {
								return r.call(t) === '[object ' + e + ']';
							};
						e['a'] = i;
					},
					function (t, e, n) {
						'use strict';
						var r = n(11),
							i = function (t) {
								return Object(r['a'])(t, 'Number');
							};
						e['a'] = i;
					},
					function (t, e, n) {
						'use strict';
						t.exports = {
							create: function () {
								return [0, 0];
							},
							length: function (t) {
								var e = t[0],
									n = t[1];
								return Math.sqrt(e * e + n * n);
							},
							normalize: function (t, e) {
								var n = this.length(e);
								return (
									0 === n
										? ((t[0] = 0), (t[1] = 0))
										: ((t[0] = e[0] / n), (t[1] = e[1] / n)),
									t
								);
							},
							add: function (t, e, n) {
								return (t[0] = e[0] + n[0]), (t[1] = e[1] + n[1]), t;
							},
							sub: function (t, e, n) {
								return (t[0] = e[0] - n[0]), (t[1] = e[1] - n[1]), t;
							},
							scale: function (t, e, n) {
								return (t[0] = e[0] * n), (t[1] = e[1] * n), t;
							},
							dot: function (t, e) {
								return t[0] * e[0] + t[1] * e[1];
							},
							direction: function (t, e) {
								return t[0] * e[1] - e[0] * t[1];
							},
							angle: function (t, e) {
								var n = this.dot(t, e) / (this.length(t) * this.length(e));
								return Math.acos(n);
							},
							angleTo: function (t, e, n) {
								var r = this.angle(t, e),
									i = this.direction(t, e) >= 0;
								return n ? (i ? 2 * Math.PI - r : r) : i ? r : 2 * Math.PI - r;
							},
							zero: function (t) {
								return 0 === t[0] && 0 === t[1];
							},
							distance: function (t, e) {
								var n = e[0] - t[0],
									r = e[1] - t[1];
								return Math.sqrt(n * n + r * r);
							},
							clone: function (t) {
								return [t[0], t[1]];
							},
							min: function (t, e, n) {
								return (
									(t[0] = Math.min(e[0], n[0])),
									(t[1] = Math.min(e[1], n[1])),
									t
								);
							},
							max: function (t, e, n) {
								return (
									(t[0] = Math.max(e[0], n[0])),
									(t[1] = Math.max(e[1], n[1])),
									t
								);
							},
							transformMat2d: function (t, e, n) {
								var r = e[0],
									i = e[1];
								return (
									(t[0] = n[0] * r + n[2] * i + n[4]),
									(t[1] = n[1] * r + n[3] * i + n[5]),
									t
								);
							},
						};
					},
					function (t, e, n) {
						'use strict';
						var r = function (t) {
							return null === t || void 0 === t;
						};
						e['a'] = r;
					},
					function (t, e, n) {
						var r = n(44),
							i = n(34),
							a = function (t, e) {
								if (t) {
									var n = void 0;
									if (i(t)) {
										for (var a = 0, o = t.length; a < o; a++)
											if (((n = e(t[a], a)), !1 === n)) break;
									} else if (r(t))
										for (var s in t)
											if (t.hasOwnProperty(s) && ((n = e(t[s], s)), !1 === n))
												break;
								}
							};
						t.exports = a;
					},
					function (t, e, n) {
						'use strict';
						var r = {
							Canvas: n(176),
							Group: n(67),
							Shape: n(10),
							Matrix: n(31),
							Vector2: n(13),
						};
						n(180),
							n(181),
							n(182),
							n(183),
							n(184),
							n(185),
							n(186),
							n(187),
							n(189),
							(t.exports = r);
					},
					function (t, e, n) {
						'use strict';
						var r = n(49),
							i = n(1),
							a = i(n(2)),
							o = i(n(3)),
							s = i(n(4)),
							u = r(n(161));
						function c(t) {
							return function () {
								var e,
									n = (0, o['default'])(t);
								if (f()) {
									var r = (0, o['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, a['default'])(this, e);
							};
						}
						function f() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var l = n(0),
							h = n(63),
							p = ['color', 'size', 'shape'],
							d = '_origin',
							v = '_originY',
							g = n(6),
							y = n(19),
							x = n(33);
						function m(t) {
							return l.isArray(t) ? t : l.isString(t) ? t.split('*') : [t];
						}
						var _ = (function (t) {
							(0, s['default'])(e, t);
							c(e);
							function e() {
								return t.apply(this, arguments) || this;
							}
							var n = e.prototype;
							return (
								(n.getDefaultCfg = function () {
									return {
										type: null,
										data: null,
										attrs: {},
										scales: {},
										container: null,
										styleOptions: null,
										chart: null,
										shapeType: '',
										generatePoints: !1,
										attrOptions: {},
										sortable: !1,
										startOnZero: !0,
										visible: !0,
										connectNulls: !1,
										ignoreEmptyGroup: !1,
									};
								}),
								(n.init = function () {
									var t = this;
									t._initAttrs(), t._processData();
								}),
								(n._getGroupScales = function () {
									var t = this,
										e = [];
									return (
										l.each(p, function (n) {
											var r = t.getAttr(n);
											if (r) {
												var i = r.scales;
												l.each(i, function (t) {
													t && t.isCategory && -1 === e.indexOf(t) && e.push(t);
												});
											}
										}),
										e
									);
								}),
								(n._groupData = function (t) {
									var e = this,
										n = e.get('colDefs'),
										r = e._getGroupScales();
									if (r.length) {
										var i = {},
											a = [];
										return (
											l.each(r, function (t) {
												var e = t.field;
												a.push(e),
													n &&
														n[e] &&
														n[e].values &&
														(i[t.field] = n[e].values);
											}),
											l.Array.group(t, a, i)
										);
									}
									return [t];
								}),
								(n._setAttrOptions = function (t, e) {
									var n = this.get('attrOptions');
									n[t] = e;
									var r = this.get('attrs');
									Object.keys(r).length && this._createAttr(t, e);
								}),
								(n._createAttrOption = function (t, e, n, r) {
									var i = {};
									(i.field = e),
										n
											? l.isFunction(n)
												? (i.callback = n)
												: (i.values = n)
											: (i.values = r),
										this._setAttrOptions(t, i);
								}),
								(n._createAttr = function (t, e) {
									var n = this,
										r = n.get('attrs'),
										i = n.get('coord'),
										a = l.upperFirst(t),
										o = m(e.field);
									'position' === t && (e.coord = i);
									for (var s = [], c = 0, f = o.length; c < f; c++) {
										var h = o[c],
											p = n._createScale(h);
										s.push(p);
									}
									if ('position' === t) {
										var d = s[1];
										'polar' === i.type &&
											i.transposed &&
											n.hasAdjust('stack') &&
											d.values.length &&
											d.change({
												nice: !1,
												min: 0,
												max: Math.max.apply(null, d.values),
											});
									}
									e.scales = s;
									var v = new u[a](e);
									return (r[t] = v), v;
								}),
								(n._initAttrs = function () {
									var t = this,
										e = t.get('attrOptions');
									for (var n in e)
										e.hasOwnProperty(n) && this._createAttr(n, e[n]);
								}),
								(n._createScale = function (t) {
									var e = this.get('scales'),
										n = e[t];
									return (
										n || ((n = this.get('chart').createScale(t)), (e[t] = n)), n
									);
								}),
								(n._processData = function () {
									var t = this,
										e = this.get('data'),
										n = [],
										r = this._groupData(e);
									if (this.get('ignoreEmptyGroup')) {
										var i = this.getYScale();
										r = r.filter(function (t) {
											return t.some(function (t) {
												return 'undefined' !== typeof t[i.field];
											});
										});
									}
									for (var a = 0, o = r.length; a < o; a++) {
										var s = r[a],
											u = t._saveOrigin(s);
										this.hasAdjust('dodge') && t._numberic(u), n.push(u);
									}
									return (
										t.get('adjust') && t._adjustData(n),
										t.get('sortable') && t._sort(n),
										t.set('dataArray', n),
										n
									);
								}),
								(n._saveOrigin = function (t) {
									for (var e = [], n = 0, r = t.length; n < r; n++) {
										var i = t[n],
											a = {};
										for (var o in i) a[o] = i[o];
										(a[d] = i), e.push(a);
									}
									return e;
								}),
								(n._numberic = function (t) {
									for (
										var e = this.getAttr('position'),
											n = e.scales,
											r = 0,
											i = t.length;
										r < i;
										r++
									)
										for (
											var a = t[r], o = Math.min(2, n.length), s = 0;
											s < o;
											s++
										) {
											var u = n[s];
											if (u.isCategory) {
												var c = u.field;
												a[c] = u.translate(a[c]);
											}
										}
								}),
								(n._adjustData = function (t) {
									var e = this,
										n = e.get('adjust');
									if (n) {
										var r = l.upperFirst(n.type);
										if (!x[r])
											throw new Error('not support such adjust : ' + n);
										var i = e.getXScale(),
											a = e.getYScale(),
											o = l.mix({ xField: i.field, yField: a.field }, n),
											s = new x[r](o);
										s.processAdjust(t),
											'Stack' === r && e._updateStackRange(a.field, a, t);
									}
								}),
								(n._updateStackRange = function (t, e, n) {
									for (
										var r = l.Array.merge(n),
											i = e.min,
											a = e.max,
											o = 0,
											s = r.length;
										o < s;
										o++
									) {
										var u = r[o],
											c = Math.min.apply(null, u[t]),
											f = Math.max.apply(null, u[t]);
										c < i && (i = c), f > a && (a = f);
									}
									(i < e.min || a > e.max) && e.change({ min: i, max: a });
								}),
								(n._sort = function (t) {
									var e = this,
										n = e.getXScale(),
										r = n.field,
										i = n.type;
									'identity' !== i &&
										n.values.length > 1 &&
										l.each(t, function (t) {
											t.sort(function (t, e) {
												return 'timeCat' === i
													? n._toTimeStamp(t[d][r]) - n._toTimeStamp(e[d][r])
													: n.translate(t[d][r]) - n.translate(e[d][r]);
											});
										}),
										e.set('hasSorted', !0),
										e.set('dataArray', t);
								}),
								(n.paint = function () {
									var t = this,
										e = t.get('dataArray'),
										n = [],
										r = t.getShapeFactory();
									r.setCoord(t.get('coord')), t._beforeMapping(e);
									for (var i = 0, a = e.length; i < a; i++) {
										var o = e[i];
										o.length && ((o = t._mapping(o)), n.push(o), t.draw(o, r));
									}
									t.set('dataArray', n);
								}),
								(n.getShapeFactory = function () {
									var t = this.get('shapeFactory');
									if (!t) {
										var e = this.get('shapeType');
										(t = y.getShapeFactory(e)), this.set('shapeFactory', t);
									}
									return t;
								}),
								(n._mapping = function (t) {
									var e = this,
										n = e.get('attrs'),
										r = e.getYScale().field,
										i = {};
									for (var a in n)
										if (n.hasOwnProperty(a))
											for (
												var o = n[a],
													s = o.names,
													u = o.scales,
													c = 0,
													f = t.length;
												c < f;
												c++
											) {
												var h = t[c];
												if (((h[v] = h[r]), 'position' === o.type))
													for (
														var p = e._getAttrValues(o, h), d = 0, g = p.length;
														d < g;
														d++
													) {
														var y = p[d],
															x = s[d];
														h[x] = l.isArray(y) && 1 === y.length ? y[0] : y;
													}
												else {
													var m = s[0],
														_ = u[0].field,
														b = h[_],
														S = '' + m + b,
														P = i[S];
													P || ((P = e._getAttrValues(o, h)), (i[S] = P)),
														(h[m] = P[0]);
												}
											}
									return t;
								}),
								(n._getAttrValues = function (t, e) {
									for (
										var n = t.scales, r = [], i = 0, a = n.length;
										i < a;
										i++
									) {
										var o = n[i],
											s = o.field;
										'identity' === o.type ? r.push(o.value) : r.push(e[s]);
									}
									var u = t.mapping.apply(t, r);
									return u;
								}),
								(n.getAttrValue = function (t, e) {
									var n = this.getAttr(t),
										r = null;
									if (n) {
										var i = this._getAttrValues(n, e);
										r = i[0];
									}
									return r;
								}),
								(n._beforeMapping = function (t) {
									var e = this;
									e.get('generatePoints') && e._generatePoints(t);
								}),
								(n.isInCircle = function () {
									var t = this.get('coord');
									return t && t.isPolar;
								}),
								(n.getCallbackCfg = function (t, e, n) {
									if (!t) return e;
									var r = {},
										i = t.map(function (t) {
											return n[t];
										});
									return (
										l.each(e, function (t, e) {
											l.isFunction(t) ? (r[e] = t.apply(null, i)) : (r[e] = t);
										}),
										r
									);
								}),
								(n.getDrawCfg = function (t) {
									var e = this,
										n = e.isInCircle(),
										r = {
											origin: t,
											x: t.x,
											y: t.y,
											color: t.color,
											size: t.size,
											shape: t.shape,
											isInCircle: n,
											opacity: t.opacity,
										},
										i = e.get('styleOptions');
									return (
										i &&
											i.style &&
											(r.style = e.getCallbackCfg(i.fields, i.style, t[d])),
										e.get('generatePoints') &&
											((r.points = t.points), (r.nextPoints = t.nextPoints)),
										n && (r.center = e.get('coord').center),
										r
									);
								}),
								(n.draw = function (t, e) {
									var n = this,
										r = n.get('container'),
										i = n.getYScale();
									l.each(t, function (t, a) {
										if (!i || !l.isNil(t._origin[i.field])) {
											t.index = a;
											var o = n.getDrawCfg(t),
												s = t.shape;
											n.drawShape(s, t, o, r, e);
										}
									});
								}),
								(n.drawShape = function (t, e, n, r, i) {
									var a = i.drawShape(t, n, r);
									a &&
										l.each([].concat(a), function (t) {
											t.set('origin', e);
										});
								}),
								(n._generatePoints = function (t) {
									var e = this,
										n = e.getShapeFactory(),
										r = e.getAttr('shape');
									l.each(t, function (t) {
										for (var i = 0, a = t.length; i < a; i++) {
											var o = t[i],
												s = e.createShapePointsCfg(o),
												u = r ? e._getAttrValues(r, o) : null,
												c = n.getShapePoints(u, s);
											o.points = c;
										}
									}),
										l.each(t, function (e, n) {
											var r = t[n + 1];
											r && (e[0].nextPoints = r[0].points);
										});
								}),
								(n.createShapePointsCfg = function (t) {
									var e,
										n = this.getXScale(),
										r = this.getYScale(),
										i = this._normalizeValues(t[n.field], n);
									return (
										(e = r
											? this._normalizeValues(t[r.field], r)
											: t.y
											? t.y
											: 0.1),
										{
											x: i,
											y: e,
											y0: r ? r.scale(this.getYMinValue()) : void 0,
										}
									);
								}),
								(n.getYMinValue = function () {
									var t,
										e = this.getYScale(),
										n = e.min,
										r = e.max;
									return (
										(t = this.get('startOnZero')
											? r <= 0 && n <= 0
												? r
												: n >= 0
												? n
												: 0
											: n),
										t
									);
								}),
								(n._normalizeValues = function (t, e) {
									var n = [];
									if (l.isArray(t))
										for (var r = 0, i = t.length; r < i; r++) {
											var a = t[r];
											n.push(e.scale(a));
										}
									else n = e.scale(t);
									return n;
								}),
								(n.getAttr = function (t) {
									return this.get('attrs')[t];
								}),
								(n.getXScale = function () {
									return this.getAttr('position').scales[0];
								}),
								(n.getYScale = function () {
									return this.getAttr('position').scales[1];
								}),
								(n.hasAdjust = function (t) {
									return this.get('adjust') && this.get('adjust').type === t;
								}),
								(n._getSnap = function (t, e, n) {
									var r,
										i = 0,
										a = this.getYScale().field;
									if (this.hasAdjust('stack') && t.field === a) {
										(r = []),
											n.forEach(function (t) {
												r.push(t[v]);
											});
										for (var o = r.length; i < o; i++) {
											if (r[0][0] > e) break;
											if (r[r.length - 1][1] <= e) {
												i = r.length - 1;
												break;
											}
											if (r[i][0] <= e && r[i][1] > e) break;
										}
									} else {
										(r = t.values),
											r.sort(function (t, e) {
												return t - e;
											});
										for (var s = r.length; i < s; i++) {
											if (s <= 1) break;
											if ((r[0] + r[1]) / 2 > e) break;
											if (
												(r[i - 1] + r[i]) / 2 <= e &&
												(r[i + 1] + r[i]) / 2 > e
											)
												break;
											if ((r[r.length - 2] + r[r.length - 1]) / 2 <= e) {
												i = r.length - 1;
												break;
											}
										}
									}
									var u = r[i];
									return u;
								}),
								(n.getSnapRecords = function (t) {
									var e = this,
										n = e.get('coord'),
										r = e.getXScale(),
										i = e.getYScale(),
										a = r.field,
										o = e.get('dataArray');
									this.get('hasSorted') || this._sort(o);
									var s = [],
										u = n.invertPoint(t),
										c = u.x;
									e.isInCircle() &&
										!n.transposed &&
										c > (1 + r.rangeMax()) / 2 &&
										(c = r.rangeMin());
									var f = r.invert(c);
									r.isCategory || (f = e._getSnap(r, f));
									var h = [];
									if (
										(o.forEach(function (t) {
											t.forEach(function (t) {
												var n = l.isNil(t[d]) ? t[a] : t[d][a];
												e._isEqual(n, f, r) && h.push(t);
											});
										}),
										this.hasAdjust('stack') && n.isPolar && n.transposed)
									) {
										if (c >= 0 && c <= 1) {
											var p = i.invert(u.y);
											(p = e._getSnap(i, p, h)),
												h.forEach(function (t) {
													(l.isArray(p)
														? t[v].toString() === p.toString()
														: t[v] === p) && s.push(t);
												});
										}
									} else s = h;
									return s;
								}),
								(n._isEqual = function (t, e, n) {
									return 'timeCat' === n.type
										? n._toTimeStamp(t) === e
										: e === t;
								}),
								(n.position = function (t) {
									return this._setAttrOptions('position', { field: t }), this;
								}),
								(n.color = function (t, e) {
									return this._createAttrOption('color', t, e, g.colors), this;
								}),
								(n.size = function (t, e) {
									return this._createAttrOption('size', t, e, g.sizes), this;
								}),
								(n.shape = function (t, e) {
									var n = this.get('type'),
										r = g.shapes[n] || [];
									return this._createAttrOption('shape', t, e, r), this;
								}),
								(n.style = function (t, e) {
									var n,
										r = this.get('styleOptions');
									return (
										r || ((r = {}), this.set('styleOptions', r)),
										l.isObject(t) && ((e = t), (t = null)),
										t && (n = m(t)),
										(r.fields = n),
										(r.style = e),
										this
									);
								}),
								(n.adjust = function (t) {
									return (
										l.isString(t) && (t = { type: t }),
										this.set('adjust', t),
										this
									);
								}),
								(n.animate = function (t) {
									return this.set('animateCfg', t), this;
								}),
								(n.changeData = function (t) {
									this.set('data', t), this.set('scales', {}), this.init();
								}),
								(n.clearInner = function () {
									var t = this.get('container');
									t && t.clear();
								}),
								(n.reset = function () {
									this.set('attrs', {}),
										this.set('attrOptions', {}),
										this.set('adjust', null),
										this.clearInner();
								}),
								(n.clear = function () {
									this.clearInner();
								}),
								(n.destroy = function () {
									this.clear(), t.prototype.destroy.call(this);
								}),
								(n._display = function (t) {
									this.set('visible', t);
									var e = this.get('container'),
										n = e.get('canvas');
									e.set('visible', t), n.draw();
								}),
								(n.show = function () {
									this._display(!0);
								}),
								(n.hide = function () {
									this._display(!1);
								}),
								e
							);
						})(h);
						t.exports = _;
					},
					function (t, e, n) {
						'use strict';
						var r = n(11);
						e['a'] = function (t) {
							return Object(r['a'])(t, 'String');
						};
					},
					function (t, e, n) {
						'use strict';
						var r = n(0),
							i = n(6),
							a = {},
							o = {
								_coord: null,
								draw: function (t, e) {
									this.drawShape && this.drawShape(t, e);
								},
								setCoord: function (t) {
									this._coord = t;
								},
								parsePoint: function (t) {
									var e = this._coord;
									return (
										e.isPolar &&
											(1 === t.x && (t.x = 0.9999999),
											1 === t.y && (t.y = 0.9999999)),
										e.convertPoint(t)
									);
								},
								parsePoints: function (t) {
									if (!t) return !1;
									var e = this,
										n = [];
									return (
										t.forEach(function (t) {
											n.push(e.parsePoint(t));
										}),
										n
									);
								},
							},
							s = {
								defaultShapeType: null,
								setCoord: function (t) {
									this._coord = t;
								},
								getShape: function (t) {
									var e = this;
									r.isArray(t) && (t = t[0]);
									var n = e[t] || e[e.defaultShapeType];
									return (n._coord = e._coord), n;
								},
								getShapePoints: function (t, e) {
									var n = this.getShape(t),
										r =
											n.getPoints || n.getShapePoints || this.getDefaultPoints,
										i = r(e);
									return i;
								},
								getDefaultPoints: function () {
									return [];
								},
								drawShape: function (t, e, n) {
									var r = this.getShape(t);
									return e.color || (e.color = i.colors[0]), r.draw(e, n);
								},
							};
						(a.registerFactory = function (t, e) {
							var n = r.upperFirst(t),
								i = r.mix({}, s, e);
							return (a[n] = i), (i.name = t), i;
						}),
							(a.registerShape = function (t, e, n) {
								var i = r.upperFirst(t),
									s = a[i],
									u = r.mix({}, o, n);
								return (s[e] = u), u;
							}),
							(a.registShape = a.registerShape),
							(a.getShapeFactory = function (t) {
								var e = this;
								t = t || 'point';
								var n = r.upperFirst(t);
								return e[n];
							}),
							(t.exports = a);
					},
					function (t, e, n) {
						'use strict';
						Object.defineProperty(e, '__esModule', { value: !0 });
						var r = n(28);
						n.d(e, 'contains', function () {
							return r['a'];
						}),
							n.d(e, 'includes', function () {
								return r['a'];
							});
						var i = n(79);
						n.d(e, 'difference', function () {
							return i['a'];
						});
						var a = n(80);
						n.d(e, 'find', function () {
							return a['a'];
						});
						var o = n(81);
						n.d(e, 'findIndex', function () {
							return o['a'];
						});
						var s = n(82);
						n.d(e, 'firstValue', function () {
							return s['a'];
						});
						var u = n(83);
						n.d(e, 'flatten', function () {
							return u['a'];
						});
						var c = n(84);
						n.d(e, 'flattenDeep', function () {
							return c['a'];
						});
						var f = n(85);
						n.d(e, 'getRange', function () {
							return f['a'];
						});
						var l = n(86);
						n.d(e, 'pull', function () {
							return l['a'];
						});
						var h = n(53);
						n.d(e, 'pullAt', function () {
							return h['a'];
						});
						var p = n(87);
						n.d(e, 'reduce', function () {
							return p['a'];
						});
						var d = n(88);
						n.d(e, 'remove', function () {
							return d['a'];
						});
						var v = n(89);
						n.d(e, 'sortBy', function () {
							return v['a'];
						});
						var g = n(90);
						n.d(e, 'union', function () {
							return g['a'];
						});
						var y = n(54);
						n.d(e, 'uniq', function () {
							return y['a'];
						});
						var x = n(91);
						n.d(e, 'valuesOfKey', function () {
							return x['a'];
						});
						var m = n(92);
						n.d(e, 'head', function () {
							return m['a'];
						});
						var _ = n(93);
						n.d(e, 'last', function () {
							return _['a'];
						});
						var b = n(94);
						n.d(e, 'startsWith', function () {
							return b['a'];
						});
						var S = n(95);
						n.d(e, 'endsWith', function () {
							return S['a'];
						});
						var P = n(39);
						n.d(e, 'filter', function () {
							return P['a'];
						});
						var w = n(96);
						n.d(e, 'every', function () {
							return w['a'];
						});
						var C = n(97);
						n.d(e, 'some', function () {
							return C['a'];
						});
						var M = n(98);
						n.d(e, 'group', function () {
							return M['a'];
						});
						var A = n(56);
						n.d(e, 'groupBy', function () {
							return A['a'];
						});
						var O = n(55);
						n.d(e, 'groupToMap', function () {
							return O['a'];
						});
						var R = n(99);
						n.d(e, 'getWrapBehavior', function () {
							return R['a'];
						});
						var T = n(100);
						n.d(e, 'wrapBehavior', function () {
							return T['a'];
						});
						var D = n(101);
						n.d(e, 'number2color', function () {
							return D['a'];
						});
						var k = n(102);
						n.d(e, 'parseRadius', function () {
							return k['a'];
						});
						var E = n(103);
						n.d(e, 'clamp', function () {
							return E['a'];
						});
						var N = n(104);
						n.d(e, 'fixedBase', function () {
							return N['a'];
						});
						var j = n(105);
						n.d(e, 'isDecimal', function () {
							return j['a'];
						});
						var I = n(106);
						n.d(e, 'isEven', function () {
							return I['a'];
						});
						var F = n(107);
						n.d(e, 'isInteger', function () {
							return F['a'];
						});
						var Y = n(108);
						n.d(e, 'isNegative', function () {
							return Y['a'];
						});
						var B = n(109);
						n.d(e, 'isNumberEqual', function () {
							return B['a'];
						});
						var X = n(110);
						n.d(e, 'isOdd', function () {
							return X['a'];
						});
						var z = n(111);
						n.d(e, 'isPositive', function () {
							return z['a'];
						});
						var G = n(112);
						n.d(e, 'maxBy', function () {
							return G['a'];
						});
						var L = n(113);
						n.d(e, 'minBy', function () {
							return L['a'];
						});
						var V = n(114);
						n.d(e, 'mod', function () {
							return V['a'];
						});
						var H = n(115);
						n.d(e, 'toDegree', function () {
							return H['a'];
						});
						var W = n(116);
						n.d(e, 'toInteger', function () {
							return W['a'];
						});
						var q = n(117);
						n.d(e, 'toRadian', function () {
							return q['a'];
						});
						var Z = n(118);
						n.d(e, 'forIn', function () {
							return Z['a'];
						});
						var U = n(57);
						n.d(e, 'has', function () {
							return U['a'];
						});
						var J = n(119);
						n.d(e, 'hasKey', function () {
							return J['a'];
						});
						var $ = n(120);
						n.d(e, 'hasValue', function () {
							return $['a'];
						});
						var K = n(52);
						n.d(e, 'keys', function () {
							return K['a'];
						});
						var Q = n(51);
						n.d(e, 'isMatch', function () {
							return Q['a'];
						});
						var tt = n(58);
						n.d(e, 'values', function () {
							return tt['a'];
						});
						var et = n(121);
						n.d(e, 'lowerCase', function () {
							return et['a'];
						});
						var nt = n(122);
						n.d(e, 'lowerFirst', function () {
							return nt['a'];
						});
						var rt = n(123);
						n.d(e, 'substitute', function () {
							return rt['a'];
						});
						var it = n(124);
						n.d(e, 'upperCase', function () {
							return it['a'];
						});
						var at = n(125);
						n.d(e, 'upperFirst', function () {
							return at['a'];
						});
						var ot = n(59);
						n.d(e, 'getType', function () {
							return ot['a'];
						});
						var st = n(126);
						n.d(e, 'isArguments', function () {
							return st['a'];
						});
						var ut = n(5);
						n.d(e, 'isArray', function () {
							return ut['a'];
						});
						var ct = n(7);
						n.d(e, 'isArrayLike', function () {
							return ct['a'];
						});
						var ft = n(127);
						n.d(e, 'isBoolean', function () {
							return ft['a'];
						});
						var lt = n(128);
						n.d(e, 'isDate', function () {
							return lt['a'];
						});
						var ht = n(129);
						n.d(e, 'isError', function () {
							return ht['a'];
						});
						var pt = n(9);
						n.d(e, 'isFunction', function () {
							return pt['a'];
						});
						var dt = n(130);
						n.d(e, 'isFinite', function () {
							return dt['a'];
						});
						var vt = n(14);
						n.d(e, 'isNil', function () {
							return vt['a'];
						});
						var gt = n(131);
						n.d(e, 'isNull', function () {
							return gt['a'];
						});
						var yt = n(12);
						n.d(e, 'isNumber', function () {
							return yt['a'];
						});
						var xt = n(29);
						n.d(e, 'isObject', function () {
							return xt['a'];
						});
						var mt = n(40);
						n.d(e, 'isObjectLike', function () {
							return mt['a'];
						});
						var _t = n(24);
						n.d(e, 'isPlainObject', function () {
							return _t['a'];
						});
						var bt = n(60);
						n.d(e, 'isPrototype', function () {
							return bt['a'];
						});
						var St = n(132);
						n.d(e, 'isRegExp', function () {
							return St['a'];
						});
						var Pt = n(18);
						n.d(e, 'isString', function () {
							return Pt['a'];
						});
						var wt = n(11);
						n.d(e, 'isType', function () {
							return wt['a'];
						});
						var Ct = n(133);
						n.d(e, 'isUndefined', function () {
							return Ct['a'];
						});
						var Mt = n(134);
						n.d(e, 'isElement', function () {
							return Mt['a'];
						});
						var At = n(135);
						n.d(e, 'requestAnimationFrame', function () {
							return At['a'];
						});
						var Ot = n(136);
						n.d(e, 'clearAnimationFrame', function () {
							return Ot['a'];
						});
						var Rt = n(137);
						n.d(e, 'augment', function () {
							return Rt['a'];
						});
						var Tt = n(138);
						n.d(e, 'clone', function () {
							return Tt['a'];
						});
						var Dt = n(139);
						n.d(e, 'debounce', function () {
							return Dt['a'];
						});
						var kt = n(140);
						n.d(e, 'memoize', function () {
							return kt['a'];
						});
						var Et = n(141);
						n.d(e, 'deepMix', function () {
							return Et['a'];
						});
						var Nt = n(8);
						n.d(e, 'each', function () {
							return Nt['a'];
						});
						var jt = n(142);
						n.d(e, 'extend', function () {
							return jt['a'];
						});
						var It = n(143);
						n.d(e, 'indexOf', function () {
							return It['a'];
						});
						var Ft = n(144);
						n.d(e, 'isEmpty', function () {
							return Ft['a'];
						});
						var Yt = n(61);
						n.d(e, 'isEqual', function () {
							return Yt['a'];
						});
						var Bt = n(145);
						n.d(e, 'isEqualWith', function () {
							return Bt['a'];
						});
						var Xt = n(146);
						n.d(e, 'map', function () {
							return Xt['a'];
						});
						var zt = n(147);
						n.d(e, 'mapValues', function () {
							return zt['a'];
						});
						var Gt = n(41);
						n.d(e, 'mix', function () {
							return Gt['a'];
						}),
							n.d(e, 'assign', function () {
								return Gt['a'];
							});
						var Lt = n(148);
						n.d(e, 'get', function () {
							return Lt['a'];
						});
						var Vt = n(149);
						n.d(e, 'set', function () {
							return Vt['a'];
						});
						var Ht = n(150);
						n.d(e, 'pick', function () {
							return Ht['a'];
						});
						var Wt = n(151);
						n.d(e, 'throttle', function () {
							return Wt['a'];
						});
						var qt = n(152);
						n.d(e, 'toArray', function () {
							return qt['a'];
						});
						var Zt = n(25);
						n.d(e, 'toString', function () {
							return Zt['a'];
						});
						var Ut = n(153);
						n.d(e, 'uniqueId', function () {
							return Ut['a'];
						});
						var Jt = n(154);
						n.d(e, 'noop', function () {
							return Jt['a'];
						});
						var $t = n(155);
						n.d(e, 'identity', function () {
							return $t['a'];
						});
						var Kt = n(156);
						n.d(e, 'size', function () {
							return Kt['a'];
						});
						var Qt = n(157);
						n.d(e, 'Cache', function () {
							return Qt['a'];
						});
					},
					function (t, e, n) {
						'use strict';
						var r = n(13),
							i = r.create(),
							a = r.create(),
							o = r.create();
						function s(t, e, n, r, i) {
							var a = u(i, t.x, e.x, n.x, r.x),
								o = u(i, t.y, e.y, n.y, r.y);
							return { x: a, y: o };
						}
						function u(t, e, n, r, i) {
							var a = t * t,
								o = a * t;
							return (
								e +
								(3 * -e + t * (3 * e - e * t)) * t +
								(3 * n + t * (-6 * n + 3 * n * t)) * t +
								(3 * r - 3 * r * t) * a +
								i * o
							);
						}
						function c(t) {
							for (
								var e = 1 / 0,
									n = -1 / 0,
									r = 1 / 0,
									i = -1 / 0,
									a = { x: t[0], y: t[1] },
									o = { x: t[2], y: t[3] },
									u = { x: t[4], y: t[5] },
									c = { x: t[6], y: t[7] },
									f = 0;
								f < 100;
								f++
							) {
								var l = s(a, o, u, c, f / 100);
								l.x < e && (e = l.x),
									l.x > n && (n = l.x),
									l.y < r && (r = l.y),
									l.y > i && (i = l.y);
							}
							return { minX: e, minY: r, maxX: n, maxY: i };
						}
						t.exports = {
							getBBoxFromPoints: function (t, e) {
								if (0 !== t.length) {
									for (
										var n = t[0],
											r = n.x,
											i = n.x,
											a = n.y,
											o = n.y,
											s = t.length,
											u = 1;
										u < s;
										u++
									)
										(n = t[u]),
											(r = Math.min(r, n.x)),
											(i = Math.max(i, n.x)),
											(a = Math.min(a, n.y)),
											(o = Math.max(o, n.y));
									return (
										(e = e / 2 || 0),
										{ minX: r - e, minY: a - e, maxX: i + e, maxY: o + e }
									);
								}
							},
							getBBoxFromLine: function (t, e, n, r, i) {
								return (
									(i = i / 2 || 0),
									{
										minX: Math.min(t, n) - i,
										minY: Math.min(e, r) - i,
										maxX: Math.max(t, n) + i,
										maxY: Math.max(e, r) + i,
									}
								);
							},
							getBBoxFromArc: function (t, e, n, s, u, c) {
								var f = Math.abs(s - u);
								if (f % (2 * Math.PI) < 1e-4 && f > 1e-4)
									return { minX: t - n, minY: e - n, maxX: t + n, maxY: e + n };
								(i[0] = Math.cos(s) * n + t),
									(i[1] = Math.sin(s) * n + e),
									(a[0] = Math.cos(u) * n + t),
									(a[1] = Math.sin(u) * n + e);
								var l = [0, 0],
									h = [0, 0];
								if (
									(r.min(l, i, a),
									r.max(h, i, a),
									(s %= 2 * Math.PI),
									s < 0 && (s += 2 * Math.PI),
									(u %= 2 * Math.PI),
									u < 0 && (u += 2 * Math.PI),
									s > u && !c
										? (u += 2 * Math.PI)
										: s < u && c && (s += 2 * Math.PI),
									c)
								) {
									var p = u;
									(u = s), (s = p);
								}
								for (var d = 0; d < u; d += Math.PI / 2)
									d > s &&
										((o[0] = Math.cos(d) * n + t),
										(o[1] = Math.sin(d) * n + e),
										r.min(l, o, l),
										r.max(h, o, h));
								return { minX: l[0], minY: l[1], maxX: h[0], maxY: h[1] };
							},
							getBBoxFromBezierGroup: function (t, e) {
								for (
									var n = 1 / 0,
										r = -1 / 0,
										i = 1 / 0,
										a = -1 / 0,
										o = 0,
										s = t.length;
									o < s;
									o++
								) {
									var u = c(t[o]);
									u.minX < n && (n = u.minX),
										u.maxX > r && (r = u.maxX),
										u.minY < i && (i = u.minY),
										u.maxY > a && (a = u.maxY);
								}
								return (
									(e = e / 2 || 0),
									{ minX: n - e, minY: i - e, maxX: r + e, maxY: a + e }
								);
							},
						};
					},
					function (t, e) {
						function n(t) {
							if (void 0 === t)
								throw new ReferenceError(
									"this hasn't been initialised - super() hasn't been called",
								);
							return t;
						}
						t.exports = n;
					},
					function (t, e, n) {
						'use strict';
						var r = n(0),
							i = { min: 0, median: 0.5, max: 1 },
							a = (function () {
								var t = e.prototype;
								function e(t) {
									this._initDefaultCfg(), r.deepMix(this, t);
								}
								return (
									(t._initDefaultCfg = function () {}),
									(t._getNormalizedValue = function (t, e) {
										var n;
										return (n = r.isNil(i[t]) ? e.scale(t) : i[t]), n;
									}),
									(t.parsePercentPoint = function (t, e) {
										var n = parseFloat(e[0]) / 100,
											r = parseFloat(e[1]) / 100,
											i = t.start,
											a = t.end,
											o = Math.abs(i.x - a.x),
											s = Math.abs(i.y - a.y),
											u = o * n + Math.min(i.x, a.x),
											c = s * r + Math.min(i.y, a.y);
										return { x: u, y: c };
									}),
									(t.parsePoint = function (t, e) {
										var n = this,
											i = n.xScale,
											a = n.yScales;
										if (
											(r.isFunction(e) && (e = e(i, a)),
											r.isString(e[0]) &&
												-1 !== e[0].indexOf('%') &&
												!isNaN(e[0].slice(0, -1)))
										)
											return this.parsePercentPoint(t, e);
										var o = n._getNormalizedValue(e[0], i),
											s = n._getNormalizedValue(e[1], a[0]),
											u = t.convertPoint({ x: o, y: s });
										return n.limitInPlot
											? o >= 0 && o <= 1 && s >= 0 && s <= 1
												? u
												: null
											: u;
									}),
									(t.render = function () {}),
									(t.repaint = function () {
										this.remove();
										var t = this.coord,
											e = this.container,
											n = this.canvas;
										e && !e.isDestroyed() && (this.render(t, e), n.draw());
									}),
									(t.remove = function () {
										var t = this.element;
										t && t.remove(!0);
									}),
									(t.changeVisible = function (t) {
										var e = this;
										e.visible = t;
										var n = e.element;
										n &&
											(n.set
												? n.set('visible', t)
												: (n.style.display = t ? '' : 'none'));
									}),
									e
								);
							})();
						t.exports = a;
					},
					function (t, e, n) {
						'use strict';
						var r = n(40),
							i = n(11),
							a = function (t) {
								if (!Object(r['a'])(t) || !Object(i['a'])(t, 'Object'))
									return !1;
								if (null === Object.getPrototypeOf(t)) return !0;
								var e = t;
								while (null !== Object.getPrototypeOf(e))
									e = Object.getPrototypeOf(e);
								return Object.getPrototypeOf(t) === e;
							};
						e['a'] = a;
					},
					function (t, e, n) {
						'use strict';
						var r = n(14);
						e['a'] = function (t) {
							return Object(r['a'])(t) ? '' : t.toString();
						};
					},
					function (t, e, n) {
						var r = n(64),
							i = n(15),
							a = n(44),
							o = n(35),
							s = (function () {
								var t = e.prototype;
								function e(t) {
									this._initDefaultCfg(), r(this, t), this.init();
								}
								return (
									(t._initDefaultCfg = function () {
										(this.type = 'base'),
											(this.formatter = null),
											(this.range = [0, 1]),
											(this.ticks = null),
											(this.values = []);
									}),
									(t.init = function () {}),
									(t.getTicks = function () {
										var t = this,
											e = t.ticks,
											n = [];
										return (
											i(e, function (e) {
												var r;
												(r = a(e)
													? e
													: {
															text: t.getText(e),
															tickValue: e,
															value: t.scale(e),
													  }),
													n.push(r);
											}),
											n
										);
									}),
									(t.getText = function (t, e) {
										var n = this.formatter;
										return (
											(t = n ? n(t, e) : t),
											(!o(t) && t.toString) || (t = ''),
											t.toString()
										);
									}),
									(t.rangeMin = function () {
										return this.range[0];
									}),
									(t.rangeMax = function () {
										var t = this.range;
										return t[t.length - 1];
									}),
									(t.invert = function (t) {
										return t;
									}),
									(t.translate = function (t) {
										return t;
									}),
									(t.scale = function (t) {
										return t;
									}),
									(t.clone = function () {
										var t = this,
											e = t.constructor,
											n = {};
										return (
											i(t, function (e, r) {
												n[r] = t[r];
											}),
											new e(n)
										);
									}),
									(t.change = function (t) {
										return (this.ticks = null), r(this, t), this.init(), this;
									}),
									e
								);
							})();
						t.exports = s;
					},
					function (t, e) {
						var n = {}.toString,
							r = function (t, e) {
								return n.call(t) === '[object ' + e + ']';
							};
						t.exports = r;
					},
					function (t, e, n) {
						'use strict';
						var r = n(7),
							i = function (t, e) {
								return !!Object(r['a'])(t) && t.indexOf(e) > -1;
							};
						e['a'] = i;
					},
					function (t, e, n) {
						'use strict';
						e['a'] = function (t) {
							var e = typeof t;
							return (null !== t && 'object' === e) || 'function' === e;
						};
					},
					function (t, e, n) {
						'use strict';
						var r = n(1),
							i = r(n(22)),
							a = r(n(2)),
							o = r(n(3)),
							s = r(n(4)),
							u = n(47);
						function c(t) {
							return function () {
								var e,
									n = (0, o['default'])(t);
								if (f()) {
									var r = (0, o['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, a['default'])(this, e);
							};
						}
						function f() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var l = n(63),
							h = n(158),
							p = n(0),
							d = n(159),
							v = n(17),
							g = n(167),
							y = n(173),
							x = n(6),
							m = n(16),
							_ = m.Canvas,
							b = n(37);
						function S(t, e) {
							return t - e;
						}
						function P(t, e) {
							var n = !1;
							return (
								p.each(t, function (t) {
									var r = [].concat(t.values),
										i = [].concat(e.values);
									t.type !== e.type ||
										t.field !== e.field ||
										r.sort(S).toString() !== i.sort(S).toString() ||
										(n = !0);
								}),
								n
							);
						}
						var w = (function (t) {
							(0, s['default'])(n, t);
							c(n);
							n.initPlugins = function () {
								return {
									_plugins: [],
									_cacheId: 0,
									register: function (t) {
										var e = this._plugins;
										[].concat(t).forEach(function (t) {
											-1 === e.indexOf(t) && e.push(t);
										}),
											this._cacheId++;
									},
									unregister: function (t) {
										var e = this._plugins;
										[].concat(t).forEach(function (t) {
											var n = e.indexOf(t);
											-1 !== n && e.splice(n, 1);
										}),
											this._cacheId++;
									},
									clear: function () {
										(this._plugins = []), this._cacheId++;
									},
									count: function () {
										return this._plugins.length;
									},
									getAll: function () {
										return this._plugins;
									},
									notify: function (t, e, n) {
										var r,
											i,
											a,
											o,
											s,
											u = this.descriptors(t),
											c = u.length;
										for (r = 0; r < c; ++r)
											if (
												((i = u[r]),
												(a = i.plugin),
												(s = a[e]),
												'function' === typeof s &&
													((o = [t].concat(n || [])), !1 === s.apply(a, o)))
											)
												return !1;
										return !0;
									},
									descriptors: function (t) {
										var e = t._plugins || (t._plugins = {});
										if (e.id === this._cacheId) return e.descriptors;
										var n = [],
											r = [];
										return (
											this._plugins
												.concat((t && t.get('plugins')) || [])
												.forEach(function (t) {
													var e = n.indexOf(t);
													-1 === e && (n.push(t), r.push({ plugin: t }));
												}),
											(e.descriptors = r),
											(e.id = this._cacheId),
											r
										);
									},
								};
							};
							var e = n.prototype;
							function n(e) {
								var n;
								n = t.call(this, e) || this;
								var r = (0, i['default'])(n);
								return (
									p.each(v, function (t, e) {
										var n = p.lowerFirst(e);
										r[n] = function (e) {
											var n = new t(e);
											return r.addGeom(n), n;
										};
									}),
									r._init(),
									n
								);
							}
							return (
								(e.getDefaultCfg = function () {
									return {
										id: null,
										rendered: !1,
										padding: x.padding,
										data: null,
										scales: {},
										geoms: [],
										colDefs: null,
										pixelRatio: x.pixelRatio,
										filters: null,
										appendPadding: x.appendPadding,
									};
								}),
								(e._syncYScales = function () {
									var t = this.get('syncY');
									if (t) {
										var e = this.get('geoms'),
											n = [],
											r = [],
											i = [];
										p.each(e, function (t) {
											var e = t.getYScale();
											e.isLinear && (n.push(e), r.push(e.min), i.push(e.max));
										}),
											(r = Math.min.apply(null, r)),
											(i = Math.max.apply(null, i)),
											p.each(n, function (t) {
												t.change({ min: r }), t.change({ max: i });
											});
									}
								}),
								(e._getFieldsForLegend = function () {
									var t = [],
										e = this.get('geoms');
									return (
										p.each(e, function (e) {
											var n = e.get('attrOptions'),
												r = n.color;
											if (r && r.field && p.isString(r.field)) {
												var i = r.field.split('*');
												p.each(i, function (e) {
													-1 === t.indexOf(e) && t.push(e);
												});
											}
										}),
										t
									);
								}),
								(e._getScaleData = function (t) {
									var e = this.get('data'),
										n = this.get('filteredData');
									if (n.length) {
										var r = this._getFieldsForLegend();
										-1 === r.indexOf(t) && (e = n);
									}
									return e;
								}),
								(e._adjustScale = function () {
									for (
										var t = this,
											e = t.get('scaleController'),
											n = this.get('geoms'),
											r = 0;
										r < n.length;
										r++
									) {
										var i = n[r];
										if ('interval' === i.get('type')) {
											var a = i.getYScale();
											e.adjustStartZero(a);
										}
									}
								}),
								(e._removeGeoms = function () {
									var t = this.get('geoms');
									while (t.length > 0) {
										var e = t.shift();
										e.destroy();
									}
								}),
								(e._clearGeoms = function () {
									for (
										var t = this.get('geoms'), e = 0, n = t.length;
										e < n;
										e++
									) {
										var r = t[e];
										r.clear();
									}
								}),
								(e._clearInner = function () {
									this._clearGeoms(),
										n.plugins.notify(this, 'clearInner'),
										this.get('axisController') &&
											this.get('axisController').clear();
								}),
								(e._initFilteredData = function () {
									var t = this.get('filters'),
										e = this.get('data') || [];
									t &&
										(e = e.filter(function (e) {
											var n = !0;
											return (
												p.each(t, function (t, r) {
													if (t && ((n = t(e[r], e)), !n)) return !1;
												}),
												n
											);
										})),
										this.set('filteredData', e);
								}),
								(e._changeGeomsData = function () {
									for (
										var t = this.get('geoms'),
											e = this.get('filteredData'),
											n = 0,
											r = t.length;
										n < r;
										n++
									) {
										var i = t[n];
										i.changeData(e);
									}
								}),
								(e._initGeom = function (t) {
									var e = this.get('coord'),
										n = this.get('filteredData'),
										r = this.get('colDefs'),
										i = this.get('middlePlot');
									t.set('chart', this),
										t.set('container', i.addGroup()),
										t.set('data', n),
										t.set('coord', e),
										t.set('colDefs', r),
										t.init(),
										this.emit(u.EVENT_AFTER_GEOM_INIT, t);
								}),
								(e._initGeoms = function () {
									for (
										var t = this.get('geoms'), e = 0, n = t.length;
										e < n;
										e++
									)
										this._initGeom(t[e]);
								}),
								(e._initCoord = function () {
									var t = this.get('plotRange'),
										e = p.mix({ type: 'cartesian' }, this.get('coordCfg'), {
											plot: t,
										}),
										n = e.type,
										r = d[p.upperFirst(n)],
										i = new r(e);
									this.set('coord', i);
								}),
								(e._initLayout = function () {
									var t = this.get('_padding');
									t ||
										((t = this.get('margin') || this.get('padding')),
										(t = p.parsePadding(t)));
									var e = 'auto' === t[0] ? 0 : t[0],
										n = 'auto' === t[1] ? 0 : t[1],
										r = 'auto' === t[2] ? 0 : t[2],
										i = 'auto' === t[3] ? 0 : t[3],
										a = this.get('width'),
										o = this.get('height'),
										s = { x: i, y: e },
										u = { x: a - n, y: o - r },
										c = this.get('plot');
									if (c) c.reset(s, u);
									else {
										var f = new h({ start: s, end: u });
										this.set('plotRange', f), this.set('plot', f);
									}
								}),
								(e._initCanvas = function () {
									var t = this;
									try {
										var e = new _({
											el: t.get('el') || t.get('id'),
											context: t.get('context'),
											pixelRatio: t.get('pixelRatio'),
											width: t.get('width'),
											height: t.get('height'),
											fontFamily: x.fontFamily,
										});
										t.set('canvas', e),
											t.set('el', e.get('el')),
											t.set('width', e.get('width')),
											t.set('height', e.get('height'));
									} catch (r) {
										throw r;
									}
									n.plugins.notify(t, 'afterCanvasInit');
								}),
								(e._initLayers = function () {
									var t = this.get('canvas');
									this.set('backPlot', t.addGroup()),
										this.set('middlePlot', t.addGroup({ zIndex: 10 })),
										this.set('frontPlot', t.addGroup({ zIndex: 20 }));
								}),
								(e._initEvents = function () {
									var t = this;
									this.on(u.EVENT_AFTER_DATA_CHANGE, function () {
										t._initFilteredData(),
											t._changeGeomsData(),
											t._adjustScale();
									}),
										this.on(u.EVENT_AFTER_SIZE_CHANGE, function () {
											t._initLayout();
											var e = t.get('coord');
											e && e.reset(t.get('plot'));
										});
								}),
								(e._initScaleController = function () {
									var t = new g({ chart: this });
									this.set('colDefs', t.defs),
										this.set('scales', t.scales),
										this.set('scaleController', t);
								}),
								(e._clearScaleController = function () {
									var t = this.get('scaleController');
									t.clear();
								}),
								(e._init = function () {
									var t = this;
									t._initCanvas(),
										t._initLayout(),
										t._initLayers(),
										t._initEvents(),
										t._initScaleController(),
										t.set(
											'axisController',
											new y({
												frontPlot: t
													.get('frontPlot')
													.addGroup({ className: 'axisContainer' }),
												backPlot: t
													.get('backPlot')
													.addGroup({ className: 'axisContainer' }),
												chart: t,
											}),
										),
										n.plugins.notify(t, 'init');
								}),
								(e.init = function () {
									this._initFilteredData(),
										this._initCoord(),
										n.plugins.notify(this, 'beforeGeomInit'),
										this._initGeoms(),
										this._syncYScales(),
										this._adjustScale(),
										this.emit(u.EVENT_AFTER_INIT);
								}),
								(e.source = function (t, e) {
									return this.set('data', t), e && this.scale(e), this;
								}),
								(e.scale = function (t, e) {
									var n = this.get('scaleController');
									return n.setFieldDef(t, e), this;
								}),
								(e.axis = function (t, e) {
									var n = this.get('axisController');
									return (
										t
											? ((n.axisCfg = n.axisCfg || {}), (n.axisCfg[t] = e))
											: (n.axisCfg = null),
										this
									);
								}),
								(e.coord = function (t, e) {
									var n;
									return (
										p.isObject(t)
											? (n = t)
											: ((n = e || {}), (n.type = t || 'cartesian')),
										this.set('coordCfg', n),
										this
									);
								}),
								(e.filter = function (t, e) {
									var n = this.get('filters') || {};
									(n[t] = e),
										this.set('filters', n),
										this.get('rendered') &&
											this.emit(u.EVENT_AFTER_DATA_CHANGE, this.get('data'));
								}),
								(e.render = function () {
									var t = this.get('rendered'),
										e = this.get('canvas'),
										r = this.get('geoms');
									t || (this.init(), this.set('rendered', !0)),
										this.emit(u.EVENT_BEFORE_RENDER),
										n.plugins.notify(this, 'beforeGeomDraw'),
										this._renderAxis();
									var i = this.get('middlePlot');
									if (this.get('limitInPlot') && !i.attr('clip')) {
										var a = this.get('coord'),
											o = b.getClip(a);
										o.set('canvas', i.get('canvas')), i.attr('clip', o);
									}
									for (var s = 0, c = r.length; s < c; s++) {
										var f = r[s];
										f.paint();
									}
									return (
										n.plugins.notify(this, 'afterGeomDraw'),
										e.sort(),
										this.get('frontPlot').sort(),
										n.plugins.notify(this, 'beforeCanvasDraw'),
										e.draw(),
										this.emit(u.EVENT_AFTER_RENDER),
										this
									);
								}),
								(e.clear = function () {
									n.plugins.notify(this, 'clear'),
										this._clearInner(),
										this._removeGeoms(),
										this._clearScaleController(),
										this.set('legendItems', null),
										this.set('filters', null),
										this.set('isUpdate', !1),
										this.set('_padding', null),
										this.set('rendered', !1);
									var t = this.get('canvas');
									return t.draw(), this;
								}),
								(e.repaint = function () {
									var t = this.get('rendered');
									t &&
										(this.set('isUpdate', !0),
										this.set('legendItems', null),
										n.plugins.notify(this, 'repaint'),
										this._clearInner(),
										this.render());
								}),
								(e.changeData = function (t) {
									this.emit(u.EVENT_BEFORE_DATA_CHANGE, t),
										this.set('data', t),
										n.plugins.notify(this, 'changeData'),
										this.emit(u.EVENT_AFTER_DATA_CHANGE, t),
										this.set('_padding', null),
										this.repaint();
								}),
								(e.changeSize = function (t, e) {
									t ? this.set('width', t) : (t = this.get('width')),
										e ? this.set('height', e) : (e = this.get('height'));
									var n = this.get('canvas');
									return (
										n.changeSize(t, e),
										this.emit(u.EVENT_AFTER_SIZE_CHANGE, {
											width: t,
											height: e,
										}),
										this.repaint(),
										this
									);
								}),
								(e.destroy = function () {
									this.clear();
									var e = this.get('canvas');
									e.destroy(),
										n.plugins.notify(this, 'afterCanvasDestroyed'),
										this._interactions &&
											p.each(this._interactions, function (t) {
												t.destroy();
											}),
										t.prototype.destroy.call(this);
								}),
								(e.getPosition = function (t) {
									var e = this,
										n = e.get('coord'),
										r = e.getXScale(),
										i = e.getYScales()[0],
										a = r.field,
										o = r.scale(t[a]),
										s = i.field,
										u = i.scale(t[s]);
									return n.convertPoint({ x: o, y: u });
								}),
								(e.getRecord = function (t) {
									var e = this,
										n = e.get('coord'),
										r = e.getXScale(),
										i = e.getYScales()[0],
										a = n.invertPoint(t),
										o = {};
									return (
										(o[r.field] = r.invert(a.x)),
										(o[i.field] = i.invert(a.y)),
										o
									);
								}),
								(e.getSnapRecords = function (t) {
									var e = this.get('geoms')[0],
										n = [];
									return e && (n = e.getSnapRecords(t)), n;
								}),
								(e.createScale = function (t) {
									var e = this._getScaleData(t),
										n = this.get('scaleController');
									return n.createScale(t, e);
								}),
								(e.addGeom = function (t) {
									var e = this.get('rendered'),
										n = this.get('geoms');
									n.push(t), e && this._initGeom(t);
								}),
								(e.getXScale = function () {
									var t = this,
										e = t.get('geoms'),
										n = e[0].getXScale();
									return n;
								}),
								(e.getYScales = function () {
									var t = this.get('geoms'),
										e = [];
									return (
										p.each(t, function (t) {
											var n = t.getYScale();
											-1 === e.indexOf(n) && e.push(n);
										}),
										e
									);
								}),
								(e.getLegendItems = function () {
									if (this.get('legendItems')) return this.get('legendItems');
									var t = {},
										e = [],
										n = this.get('geoms');
									return (
										p.each(n, function (n) {
											var r = n.getAttr('color');
											if (r) {
												var i = r.getScale('color');
												if (i.isCategory && !P(e, i)) {
													e.push(i);
													var a = i.field,
														o = i.getTicks(),
														s = [];
													p.each(o, function (t) {
														var e = t.text,
															n = e,
															a = t.value,
															o = i.invert(a),
															u = r.mapping(o).join('') || x.defaultColor,
															c = {
																fill: u,
																radius: 3,
																symbol: 'circle',
																stroke: '#fff',
															};
														s.push({
															name: n,
															dataValue: o,
															checked: !0,
															marker: c,
														});
													}),
														(t[a] = s);
												}
											}
										}),
										this.set('legendItems', t),
										t
									);
								}),
								(e.registerPlugins = function (t) {
									var e = this,
										r = e.get('plugins') || [];
									p.isArray(r) || (r = [r]),
										[].concat(t).forEach(function (t) {
											-1 === r.indexOf(t) && (t.init && t.init(e), r.push(t));
										}),
										n.plugins._cacheId++,
										e.set('plugins', r);
								}),
								(e._renderAxis = function () {
									var t = this.get('axisController'),
										e = this.getXScale(),
										r = this.getYScales(),
										i = this.get('coord');
									n.plugins.notify(this, 'beforeRenderAxis'),
										t.createAxis(i, e, r);
								}),
								(e._isAutoPadding = function () {
									if (this.get('_padding')) return !1;
									var t = this.get('padding');
									return p.isArray(t) ? -1 !== t.indexOf('auto') : 'auto' === t;
								}),
								(e._updateLayout = function (t) {
									var e = this.get('width'),
										n = this.get('height'),
										r = { x: t[3], y: t[0] },
										i = { x: e - t[1], y: n - t[2] },
										a = this.get('plot'),
										o = this.get('coord');
									a.reset(r, i), o.reset(a);
								}),
								n
							);
						})(l);
						(w.plugins = w.initPlugins()), (t.exports = w);
					},
					function (t, e, n) {
						'use strict';
						var r = {
							multiply: function (t, e) {
								var n = t[0] * e[0] + t[2] * e[1],
									r = t[1] * e[0] + t[3] * e[1],
									i = t[0] * e[2] + t[2] * e[3],
									a = t[1] * e[2] + t[3] * e[3],
									o = t[0] * e[4] + t[2] * e[5] + t[4],
									s = t[1] * e[4] + t[3] * e[5] + t[5];
								return [n, r, i, a, o, s];
							},
							scale: function (t, e, n) {
								return (
									(t[0] = e[0] * n[0]),
									(t[1] = e[1] * n[0]),
									(t[2] = e[2] * n[1]),
									(t[3] = e[3] * n[1]),
									(t[4] = e[4]),
									(t[5] = e[5]),
									t
								);
							},
							rotate: function (t, e, n) {
								var r = Math.cos(n),
									i = Math.sin(n),
									a = e[0] * r + e[2] * i,
									o = e[1] * r + e[3] * i,
									s = e[0] * -i + e[2] * r,
									u = e[1] * -i + e[3] * r;
								return (
									(t[0] = a),
									(t[1] = o),
									(t[2] = s),
									(t[3] = u),
									(t[4] = e[4]),
									(t[5] = e[5]),
									t
								);
							},
							translate: function (t, e, n) {
								return (
									(t[0] = e[0]),
									(t[1] = e[1]),
									(t[2] = e[2]),
									(t[3] = e[3]),
									(t[4] = e[4] + e[0] * n[0] + e[2] * n[1]),
									(t[5] = e[5] + e[1] * n[0] + e[3] * n[1]),
									t
								);
							},
							transform: function (t, e) {
								for (var n = [].concat(t), i = 0, a = e.length; i < a; i++) {
									var o = e[i];
									switch (o[0]) {
										case 't':
											r.translate(n, n, [o[1], o[2]]);
											break;
										case 's':
											r.scale(n, n, [o[1], o[2]]);
											break;
										case 'r':
											r.rotate(n, n, o[1]);
											break;
										default:
											break;
									}
								}
								return n;
							},
						};
						t.exports = r;
					},
					function (t, e, n) {
						'use strict';
						(e.__esModule = !0), (e['default'] = void 0);
						var r = n(20);
						function i(t, e) {
							return (0, r.isString)(e) ? e : t.invert(t.scale(e));
						}
						var a = (function () {
								function t(t) {
									var e = this;
									(this.type = 'base'),
										(this.name = null),
										(this.method = null),
										(this.values = []),
										(this.scales = []),
										(this.linear = null);
									var n = null,
										i = this.callback;
									if (t.callback) {
										var a = t.callback;
										n = function () {
											for (
												var t = arguments.length, n = new Array(t), o = 0;
												o < t;
												o++
											)
												n[o] = arguments[o];
											var s = a.apply(void 0, n);
											return (0, r.isNil)(s) && (s = i.apply(e, n)), s;
										};
									}
									(0, r.mix)(this, t), n && (0, r.mix)(this, { callback: n });
								}
								var e = t.prototype;
								return (
									(e._getAttrValue = function (t, e) {
										var n = this.values;
										if (t.isCategory && !this.linear) {
											var r = t.translate(e);
											return n[r % n.length];
										}
										var i = t.scale(e);
										return this.getLinearValue(i);
									}),
									(e.getLinearValue = function (t) {
										var e = this.values,
											n = e.length - 1,
											r = Math.floor(n * t),
											i = n * t - r,
											a = e[r],
											o = r === n ? a : e[r + 1],
											s = a + (o - a) * i;
										return s;
									}),
									(e.callback = function (t) {
										var e = this,
											n = e.scales[0],
											r = null;
										return (
											(r =
												'identity' === n.type
													? n.value
													: e._getAttrValue(n, t)),
											r
										);
									}),
									(e.getNames = function () {
										for (
											var t = this.scales,
												e = this.names,
												n = Math.min(t.length, e.length),
												r = [],
												i = 0;
											i < n;
											i++
										)
											r.push(e[i]);
										return r;
									}),
									(e.getFields = function () {
										var t = this.scales,
											e = [];
										return (
											(0, r.each)(t, function (t) {
												e.push(t.field);
											}),
											e
										);
									}),
									(e.getScale = function (t) {
										var e = this.scales,
											n = this.names,
											r = n.indexOf(t);
										return e[r];
									}),
									(e.mapping = function () {
										for (
											var t = this.scales,
												e = this.callback,
												n = arguments.length,
												r = new Array(n),
												i = 0;
											i < n;
											i++
										)
											r[i] = arguments[i];
										var a = r;
										if (e) {
											for (var o = 0, s = r.length; o < s; o++)
												r[o] = this._toOriginParam(r[o], t[o]);
											a = e.apply(this, r);
										}
										return (a = [].concat(a)), a;
									}),
									(e._toOriginParam = function (t, e) {
										var n = t;
										if (!e.isLinear)
											if ((0, r.isArray)(t)) {
												n = [];
												for (var a = 0, o = t.length; a < o; a++)
													n.push(i(e, t[a]));
											} else n = i(e, t);
										return n;
									}),
									t
								);
							})(),
							o = a;
						e['default'] = o;
					},
					function (t, e, n) {
						var r = n(64),
							i = (function () {
								var t = e.prototype;
								function e(t) {
									this._initDefaultCfg(), r(this, t);
								}
								return (
									(t._initDefaultCfg = function () {
										this.adjustNames = ['x', 'y'];
									}),
									(t.processAdjust = function () {}),
									e
								);
							})();
						t.exports = i;
					},
					function (t, e, n) {
						var r = n(27),
							i = Array.isArray
								? Array.isArray
								: function (t) {
										return r(t, 'Array');
								  };
						t.exports = i;
					},
					function (t, e) {
						var n = function (t) {
							return null === t || void 0 === t;
						};
						t.exports = n;
					},
					function (t, e, n) {
						var r = n(27),
							i = function (t) {
								return r(t, 'Number');
							};
						t.exports = i;
					},
					function (t, e, n) {
						'use strict';
						(e.__esModule = !0), (e.getClip = a), (e.isPointInPlot = o);
						var r = n(16),
							i = r.Shape;
						function a(t) {
							var e,
								n = t.start,
								r = t.end,
								a = r.x - n.x,
								o = Math.abs(r.y - n.y),
								s = 10;
							if (t.isPolar) {
								var u = t.circleRadius,
									c = t.center,
									f = t.startAngle,
									l = t.endAngle;
								e = new i.Sector({
									attrs: {
										x: c.x,
										y: c.y,
										r: u,
										r0: 0,
										startAngle: f,
										endAngle: l,
									},
								});
							} else
								e = new i.Rect({
									attrs: { x: n.x, y: r.y - s, width: a, height: o + 2 * s },
								});
							return (e.isClip = !0), e;
						}
						function o(t, e) {
							var n = t.x,
								r = t.y,
								i = e.tl,
								a = e.tr,
								o = e.br;
							return n >= i.x && n <= a.x && r >= i.y && r <= o.y;
						}
					},
					function (t, e, n) {
						'use strict';
						var r = n(0),
							i = {
								splitPoints: function (t) {
									var e = [],
										n = t.x,
										i = t.y;
									return (
										(i = r.isArray(i) ? i : [i]),
										i.forEach(function (t, i) {
											var a = { x: r.isArray(n) ? n[i] : n, y: t };
											e.push(a);
										}),
										e
									);
								},
								splitArray: function (t, e, n) {
									if (!t.length) return [];
									var i,
										a = [],
										o = [];
									return (
										r.each(t, function (t) {
											(i = t._origin ? t._origin[e] : t[e]),
												n
													? r.isNil(i) || o.push(t)
													: (r.isArray(i) && r.isNil(i[0])) || r.isNil(i)
													? o.length && (a.push(o), (o = []))
													: o.push(t);
										}),
										o.length && a.push(o),
										a
									);
								},
							};
						t.exports = i;
					},
					function (t, e, n) {
						'use strict';
						var r = n(8),
							i = n(7),
							a = function (t, e) {
								if (!Object(i['a'])(t)) return t;
								var n = [];
								return (
									Object(r['a'])(t, function (t, r) {
										e(t, r) && n.push(t);
									}),
									n
								);
							};
						e['a'] = a;
					},
					function (t, e, n) {
						'use strict';
						var r = function (t) {
							return 'object' === typeof t && null !== t;
						};
						e['a'] = r;
					},
					function (t, e, n) {
						'use strict';
						function r(t, e) {
							for (var n in e)
								e.hasOwnProperty(n) &&
									'constructor' !== n &&
									void 0 !== e[n] &&
									(t[n] = e[n]);
						}
						function i(t, e, n, i) {
							return e && r(t, e), n && r(t, n), i && r(t, i), t;
						}
						e['a'] = i;
					},
					function (t, e, n) {
						'use strict';
						(e.__esModule = !0), (e['default'] = void 0);
						var r = n(0),
							i = (function () {
								function t() {
									this.__events = {};
								}
								var e = t.prototype;
								return (
									(e.on = function (t, e) {
										if (t && e) {
											var n = this.__events[t] || [];
											n.push(e), (this.__events[t] = n);
										}
									}),
									(e.emit = function (t, e) {
										var n = this;
										if (
											((0, r.isObject)(t) && ((e = t), (t = e && e.type)), t)
										) {
											var i = this.__events[t];
											i &&
												i.length &&
												i.forEach(function (t) {
													t.call(n, e);
												});
										}
									}),
									(e.off = function (t, e) {
										var n = this.__events,
											r = n[t];
										if (r && r.length)
											if (e)
												for (var i = 0, a = r.length; i < a; i++)
													r[i] === e && r.splice(i, 1);
											else delete n[t];
									}),
									t
								);
							})(),
							a = i;
						e['default'] = a;
					},
					function (t, e, n) {
						'use strict';
						var r = n(0),
							i = n(31),
							a = n(13),
							o = [1, 0, 0, 1, 0, 0],
							s = (function () {
								var t = e.prototype;
								function e(t) {
									var e, n;
									this._initDefaultCfg(),
										r.mix(this, t),
										this.plot
											? ((e = this.plot.bl),
											  (n = this.plot.tr),
											  (this.start = e),
											  (this.end = n))
											: ((e = this.start), (n = this.end)),
										this.init(e, n);
								}
								return (
									(t._initDefaultCfg = function () {}),
									(t._scale = function (t, e) {
										var n = this.matrix,
											r = this.center;
										i.translate(n, n, [r.x, r.y]),
											i.scale(n, n, [t, e]),
											i.translate(n, n, [-r.x, -r.y]);
									}),
									(t.init = function (t, e) {
										(this.matrix = [].concat(o)),
											(this.center = {
												x: (e.x - t.x) / 2 + t.x,
												y: (e.y - t.y) / 2 + t.y,
											}),
											this.scale && this._scale(this.scale[0], this.scale[1]);
									}),
									(t.convertPoint = function (t) {
										var e = this._convertPoint(t),
											n = e.x,
											r = e.y,
											i = [n, r];
										return (
											a.transformMat2d(i, i, this.matrix), { x: i[0], y: i[1] }
										);
									}),
									(t.invertPoint = function (t) {
										return this._invertPoint(t);
									}),
									(t._convertPoint = function (t) {
										return t;
									}),
									(t._invertPoint = function (t) {
										return t;
									}),
									(t.reset = function (t) {
										this.plot = t;
										var e = t.bl,
											n = t.tr;
										(this.start = e), (this.end = n), this.init(e, n);
									}),
									e
								);
							})();
						t.exports = s;
					},
					function (t, e) {
						var n =
								'function' === typeof Symbol &&
								'symbol' === typeof Symbol.iterator
									? function (t) {
											return typeof t;
									  }
									: function (t) {
											return t &&
												'function' === typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t;
									  },
							r = function (t) {
								var e = 'undefined' === typeof t ? 'undefined' : n(t);
								return (null !== t && 'object' === e) || 'function' === e;
							};
						t.exports = r;
					},
					function (t, e, n) {
						'use strict';
						var r = n(0),
							i = n(6),
							a = n(13),
							o = (function () {
								var t = e.prototype;
								function e(t) {
									this._initDefaultCfg(), r.mix(this, t), this.draw();
								}
								return (
									(t._initDefaultCfg = function () {
										(this.ticks = []),
											(this.tickLine = {}),
											(this.offsetFactor = 1),
											(this.frontContainer = null),
											(this.backContainer = null),
											(this.gridPoints = []);
									}),
									(t.draw = function () {
										var t = this.line,
											e = this.tickLine,
											n = this.label,
											r = this.grid;
										r && this.drawGrid(r),
											e && this.drawTicks(e),
											t && this.drawLine(t),
											n && this.drawLabels();
									}),
									(t.drawTicks = function (t) {
										var e = this,
											n = e.ticks,
											i = t.length,
											a = e.getContainer(t.top);
										r.each(n, function (n) {
											var o = e.getOffsetPoint(n.value),
												s = e.getSidePoint(o, i),
												u = a.addShape('line', {
													className: 'axis-tick',
													attrs: r.mix(
														{ x1: o.x, y1: o.y, x2: s.x, y2: s.y },
														t,
													),
												});
											u._id = e._id + '-ticks';
										});
									}),
									(t.drawLabels = function () {
										var t = this,
											e = t.labelOffset,
											n = t.labels;
										r.each(n, function (n) {
											var i = t.getContainer(n.get('top')),
												a = t.getOffsetPoint(n.get('value')),
												o = t.getSidePoint(a, e),
												s = o.x,
												u = o.y;
											n.attr(
												r.mix(
													{ x: s, y: u },
													t.getTextAlignInfo(a, e),
													n.get('textStyle'),
												),
											),
												(n._id = t._id + '-' + n.attr('text')),
												i.add(n);
										});
									}),
									(t.drawLine = function () {}),
									(t.drawGrid = function (t) {
										var e = this,
											n = e.gridPoints,
											o = e.ticks,
											s = t,
											u = n.length;
										r.each(n, function (n, c) {
											if (r.isFunction(t)) {
												var f = o[c] || {},
													l = t(f.text, c, u);
												s = l ? r.mix({}, i._defaultAxis.grid, l) : null;
											}
											if (s) {
												var h,
													p = s.type,
													d = n.points,
													v = e.getContainer(s.top);
												if ('arc' === p) {
													var g = e.center,
														y = e.startAngle,
														x = e.endAngle,
														m = a.length([d[0].x - g.x, d[0].y - g.y]);
													h = v.addShape('Arc', {
														className: 'axis-grid',
														attrs: r.mix(
															{
																x: g.x,
																y: g.y,
																startAngle: y,
																endAngle: x,
																r: m,
															},
															s,
														),
													});
												} else
													h = v.addShape('Polyline', {
														className: 'axis-grid',
														attrs: r.mix({ points: d }, s),
													});
												h._id = n._id;
											}
										});
									}),
									(t.getOffsetPoint = function () {}),
									(t.getAxisVector = function () {}),
									(t.getOffsetVector = function (t, e) {
										var n = this,
											r = n.getAxisVector(t),
											i = a.normalize([], r),
											o = n.offsetFactor,
											s = [-1 * i[1] * o, i[0] * o];
										return a.scale([], s, e);
									}),
									(t.getSidePoint = function (t, e) {
										var n = this,
											r = n.getOffsetVector(t, e);
										return { x: t.x + r[0], y: t.y + r[1] };
									}),
									(t.getTextAlignInfo = function (t, e) {
										var n,
											r,
											i = this,
											a = i.getOffsetVector(t, e);
										return (
											(n = a[0] > 0 ? 'left' : a[0] < 0 ? 'right' : 'center'),
											(r = a[1] > 0 ? 'top' : a[1] < 0 ? 'bottom' : 'middle'),
											{ textAlign: n, textBaseline: r }
										);
									}),
									(t.getContainer = function (t) {
										var e = this.frontContainer,
											n = this.backContainer;
										return t ? e : n;
									}),
									e
								);
							})();
						t.exports = o;
					},
					function (t, e, n) {
						'use strict';
						var r = n(0),
							i = n(31),
							a = n(13),
							o = n(179);
						function s(t) {
							return (
								1 === t[0] &&
								0 === t[1] &&
								0 === t[2] &&
								1 === t[3] &&
								0 === t[4] &&
								0 === t[5]
							);
						}
						var u = {
								stroke: 'strokeStyle',
								fill: 'fillStyle',
								opacity: 'globalAlpha',
							},
							c = [
								'fillStyle',
								'font',
								'globalAlpha',
								'lineCap',
								'lineWidth',
								'lineJoin',
								'miterLimit',
								'shadowBlur',
								'shadowColor',
								'shadowOffsetX',
								'shadowOffsetY',
								'strokeStyle',
								'textAlign',
								'textBaseline',
								'lineDash',
								'shadow',
							],
							f = ['circle', 'sector', 'polygon', 'rect', 'polyline'],
							l = (function () {
								var t = e.prototype;
								function e(t) {
									this._initProperties(), r.mix(this._attrs, t);
									var e = this._attrs.attrs;
									e && this.initAttrs(e), this.initTransform();
								}
								return (
									(t._initProperties = function () {
										this._attrs = { zIndex: 0, visible: !0, destroyed: !1 };
									}),
									(t.get = function (t) {
										return this._attrs[t];
									}),
									(t.set = function (t, e) {
										this._attrs[t] = e;
									}),
									(t.isGroup = function () {
										return this.get('isGroup');
									}),
									(t.isShape = function () {
										return this.get('isShape');
									}),
									(t.initAttrs = function (t) {
										this.attr(r.mix(this.getDefaultAttrs(), t));
									}),
									(t.getDefaultAttrs = function () {
										return {};
									}),
									(t._setAttr = function (t, e) {
										var n = this._attrs.attrs;
										if ('clip' === t) e = this._setAttrClip(e);
										else {
											var r = u[t];
											r && (n[r] = e);
										}
										n[t] = e;
									}),
									(t._getAttr = function (t) {
										return this._attrs.attrs[t];
									}),
									(t._setAttrClip = function (t) {
										return t && f.indexOf(t._attrs.type) > -1
											? (null === t.get('canvas') && (t = Object.assign({}, t)),
											  t.set('parent', this.get('parent')),
											  t.set('context', this.get('context')),
											  t)
											: null;
									}),
									(t.attr = function (t, e) {
										var n = this;
										if (n.get('destroyed')) return null;
										var i = arguments.length;
										if (0 === i) return n._attrs.attrs;
										if (r.isObject(t)) {
											for (var a in ((this._attrs.bbox = null), t))
												n._setAttr(a, t[a]);
											return n._afterAttrsSet && n._afterAttrsSet(), n;
										}
										return 2 === i
											? ((this._attrs.bbox = null),
											  n._setAttr(t, e),
											  n._afterAttrsSet && n._afterAttrsSet(),
											  n)
											: n._getAttr(t);
									}),
									(t.getParent = function () {
										return this.get('parent');
									}),
									(t.draw = function (t) {
										this.get('destroyed') ||
											(this.get('visible') &&
												(this.setContext(t),
												this.drawInner(t),
												this.restoreContext(t)));
									}),
									(t.setContext = function (t) {
										var e = this._attrs.attrs.clip;
										t.save(),
											e && (e.resetTransform(t), e.createPath(t), t.clip()),
											this.resetContext(t),
											this.resetTransform(t);
									}),
									(t.restoreContext = function (t) {
										t.restore();
									}),
									(t.resetContext = function (t) {
										var e = this._attrs.attrs;
										if (!this._attrs.isGroup)
											for (var n in e)
												if (c.indexOf(n) > -1) {
													var i = e[n];
													('fillStyle' !== n && 'strokeStyle' !== n) ||
														(i = o.parseStyle(i, this, t)),
														'lineDash' === n && t.setLineDash && r.isArray(i)
															? t.setLineDash(i)
															: (t[n] = i);
												}
									}),
									(t.hasFill = function () {
										return this.get('canFill') && this._attrs.attrs.fillStyle;
									}),
									(t.hasStroke = function () {
										return (
											this.get('canStroke') && this._attrs.attrs.strokeStyle
										);
									}),
									(t.drawInner = function () {}),
									(t.show = function () {
										return this.set('visible', !0), this;
									}),
									(t.hide = function () {
										return this.set('visible', !1), this;
									}),
									(t.isVisible = function () {
										return this.get('visible');
									}),
									(t._removeFromParent = function () {
										var t = this.get('parent');
										if (t) {
											var e = t.get('children');
											r.Array.remove(e, this);
										}
										return this;
									}),
									(t.remove = function (t) {
										t ? this.destroy() : this._removeFromParent();
									}),
									(t.destroy = function () {
										var t = this.get('destroyed');
										if (t) return null;
										this._removeFromParent(),
											(this._attrs = {}),
											this.set('destroyed', !0);
									}),
									(t.getBBox = function () {
										return {
											minX: 0,
											maxX: 0,
											minY: 0,
											maxY: 0,
											width: 0,
											height: 0,
										};
									}),
									(t.initTransform = function () {
										var t = this._attrs.attrs || {};
										t.matrix || (t.matrix = [1, 0, 0, 1, 0, 0]),
											(this._attrs.attrs = t);
									}),
									(t.getMatrix = function () {
										return this._attrs.attrs.matrix;
									}),
									(t.setMatrix = function (t) {
										this._attrs.attrs.matrix = [
											t[0],
											t[1],
											t[2],
											t[3],
											t[4],
											t[5],
										];
									}),
									(t.transform = function (t) {
										var e = this._attrs.attrs.matrix;
										return (this._attrs.attrs.matrix = i.transform(e, t)), this;
									}),
									(t.setTransform = function (t) {
										return (
											(this._attrs.attrs.matrix = [1, 0, 0, 1, 0, 0]),
											this.transform(t)
										);
									}),
									(t.translate = function (t, e) {
										var n = this._attrs.attrs.matrix;
										i.translate(n, n, [t, e]);
									}),
									(t.rotate = function (t) {
										var e = this._attrs.attrs.matrix;
										i.rotate(e, e, t);
									}),
									(t.scale = function (t, e) {
										var n = this._attrs.attrs.matrix;
										i.scale(n, n, [t, e]);
									}),
									(t.moveTo = function (t, e) {
										var n = this._attrs.x || 0,
											r = this._attrs.y || 0;
										this.translate(t - n, e - r),
											this.set('x', t),
											this.set('y', e);
									}),
									(t.apply = function (t) {
										var e = this._attrs.attrs.matrix;
										return a.transformMat2d(t, t, e), this;
									}),
									(t.resetTransform = function (t) {
										var e = this._attrs.attrs.matrix;
										s(e) || t.transform(e[0], e[1], e[2], e[3], e[4], e[5]);
									}),
									(t.isDestroyed = function () {
										return this.get('destroyed');
									}),
									e
								);
							})();
						t.exports = l;
					},
					function (t, e, n) {
						'use strict';
						(e.__esModule = !0),
							(e.EVENT_AFTER_GEOM_INIT = e.EVENT_AFTER_SIZE_CHANGE = e.EVENT_AFTER_DATA_CHANGE = e.EVENT_BEFORE_DATA_CHANGE = e.EVENT_AFTER_RENDER = e.EVENT_BEFORE_RENDER = e.EVENT_AFTER_INIT = void 0);
						var r = 'afterinit';
						e.EVENT_AFTER_INIT = r;
						var i = 'beforerender';
						e.EVENT_BEFORE_RENDER = i;
						var a = 'afterrender';
						e.EVENT_AFTER_RENDER = a;
						var o = 'beforedatachange';
						e.EVENT_BEFORE_DATA_CHANGE = o;
						var s = 'afterdatachange';
						e.EVENT_AFTER_DATA_CHANGE = s;
						var u = '_aftersizechange';
						e.EVENT_AFTER_SIZE_CHANGE = u;
						var c = '_aftergeominit';
						e.EVENT_AFTER_GEOM_INIT = c;
					},
					function (t, e, n) {
						var r = n(27),
							i = function (t) {
								return r(t, 'String');
							};
						t.exports = i;
					},
					function (t, e, n) {
						var r = n(50);
						function i() {
							if ('function' !== typeof WeakMap) return null;
							var t = new WeakMap();
							return (
								(i = function () {
									return t;
								}),
								t
							);
						}
						function a(t) {
							if (t && t.__esModule) return t;
							if (null === t || ('object' !== r(t) && 'function' !== typeof t))
								return { default: t };
							var e = i();
							if (e && e.has(t)) return e.get(t);
							var n = {},
								a = Object.defineProperty && Object.getOwnPropertyDescriptor;
							for (var o in t)
								if (Object.prototype.hasOwnProperty.call(t, o)) {
									var s = a ? Object.getOwnPropertyDescriptor(t, o) : null;
									s && (s.get || s.set)
										? Object.defineProperty(n, o, s)
										: (n[o] = t[o]);
								}
							return (n['default'] = t), e && e.set(t, n), n;
						}
						t.exports = a;
					},
					function (t, e) {
						function n(e) {
							return (
								'function' === typeof Symbol &&
								'symbol' === typeof Symbol.iterator
									? (t.exports = n = function (t) {
											return typeof t;
									  })
									: (t.exports = n = function (t) {
											return t &&
												'function' === typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t;
									  }),
								n(e)
							);
						}
						t.exports = n;
					},
					function (t, e, n) {
						'use strict';
						var r = n(14),
							i = n(52);
						function a(t, e) {
							var n = Object(i['a'])(e),
								a = n.length;
							if (Object(r['a'])(t)) return !a;
							for (var o = 0; o < a; o += 1) {
								var s = n[o];
								if (e[s] !== t[s] || !(s in t)) return !1;
							}
							return !0;
						}
						e['a'] = a;
					},
					function (t, e, n) {
						'use strict';
						var r = n(8),
							i = n(9),
							a = Object.keys
								? function (t) {
										return Object.keys(t);
								  }
								: function (t) {
										var e = [];
										return (
											Object(r['a'])(t, function (n, r) {
												(Object(i['a'])(t) && 'prototype' === r) || e.push(r);
											}),
											e
										);
								  };
						e['a'] = a;
					},
					function (t, e, n) {
						'use strict';
						var r = n(7),
							i = Array.prototype.splice,
							a = function (t, e) {
								if (!Object(r['a'])(t)) return [];
								var n = t ? e.length : 0,
									a = n - 1;
								while (n--) {
									var o = void 0,
										s = e[n];
									(n !== a && s === o) || ((o = s), i.call(t, s, 1));
								}
								return t;
							};
						e['a'] = a;
					},
					function (t, e, n) {
						'use strict';
						var r = n(28),
							i = n(8),
							a = function (t) {
								var e = [];
								return (
									Object(i['a'])(t, function (t) {
										Object(r['a'])(e, t) || e.push(t);
									}),
									e
								);
							};
						e['a'] = a;
					},
					function (t, e, n) {
						'use strict';
						var r = n(5),
							i = n(9),
							a = n(56),
							o = function (t, e) {
								if (!e) return { 0: t };
								if (!Object(i['a'])(e)) {
									var n = Object(r['a'])(e)
										? e
										: e.replace(/\s+/g, '').split('*');
									e = function (t) {
										for (var e = '_', r = 0, i = n.length; r < i; r++)
											e += t[n[r]] && t[n[r]].toString();
										return e;
									};
								}
								var o = Object(a['a'])(t, e);
								return o;
							};
						e['a'] = o;
					},
					function (t, e, n) {
						'use strict';
						var r = n(8),
							i = n(5),
							a = n(9),
							o = Object.prototype.hasOwnProperty;
						function s(t, e) {
							if (!e || !Object(i['a'])(t)) return {};
							var n,
								s = {},
								u = Object(a['a'])(e)
									? e
									: function (t) {
											return t[e];
									  };
							return (
								Object(r['a'])(t, function (t) {
									(n = u(t)), o.call(s, n) ? s[n].push(t) : (s[n] = [t]);
								}),
								s
							);
						}
						e['a'] = s;
					},
					function (t, e, n) {
						'use strict';
						e['a'] = function (t, e) {
							return t.hasOwnProperty(e);
						};
					},
					function (t, e, n) {
						'use strict';
						var r = n(8),
							i = n(9),
							a = Object.values
								? function (t) {
										return Object.values(t);
								  }
								: function (t) {
										var e = [];
										return (
											Object(r['a'])(t, function (n, r) {
												(Object(i['a'])(t) && 'prototype' === r) || e.push(n);
											}),
											e
										);
								  };
						e['a'] = a;
					},
					function (t, e, n) {
						'use strict';
						var r = {}.toString,
							i = function (t) {
								return r
									.call(t)
									.replace(/^\[object /, '')
									.replace(/]$/, '');
							};
						e['a'] = i;
					},
					function (t, e, n) {
						'use strict';
						var r = Object.prototype,
							i = function (t) {
								var e = t && t.constructor,
									n = ('function' === typeof e && e.prototype) || r;
								return t === n;
							};
						e['a'] = i;
					},
					function (t, e, n) {
						'use strict';
						var r = n(40),
							i = n(7),
							a = n(18),
							o = function (t, e) {
								if (t === e) return !0;
								if (!t || !e) return !1;
								if (Object(a['a'])(t) || Object(a['a'])(e)) return !1;
								if (Object(i['a'])(t) || Object(i['a'])(e)) {
									if (t.length !== e.length) return !1;
									for (var n = !0, s = 0; s < t.length; s++)
										if (((n = o(t[s], e[s])), !n)) break;
									return n;
								}
								if (Object(r['a'])(t) || Object(r['a'])(e)) {
									var u = Object.keys(t),
										c = Object.keys(e);
									if (u.length !== c.length) return !1;
									for (n = !0, s = 0; s < u.length; s++)
										if (((n = o(t[u[s]], e[u[s]])), !n)) break;
									return n;
								}
								return !1;
							};
						e['a'] = o;
					},
					function (t, e, n) {
						'use strict';
						(e.__esModule = !0),
							(e.isCanvasElement = c),
							(e.getPixelRatio = f),
							(e.getStyle = l),
							(e.getWidth = h),
							(e.getHeight = p),
							(e.getDomById = d),
							(e.getRelativePosition = v),
							(e.addEventListener = g),
							(e.removeEventListener = y),
							(e.createEvent = m),
							(e.measureText = _),
							(e.isBrowser = e.isNode = e.isMy = e.isWx = void 0);
						var r = (function () {
								var t = !1;
								try {
									var e = Object.defineProperty({}, 'passive', {
										get: function () {
											t = !0;
										},
									});
									window.addEventListener('e', null, e);
								} catch (n) {}
								return t;
							})(),
							i = !!r && { passive: !0 },
							a =
								'object' === typeof wx &&
								'function' === typeof wx.getSystemInfoSync;
						e.isWx = a;
						var o =
							'object' === typeof my &&
							'function' === typeof my.getSystemInfoSync;
						e.isMy = o;
						var s =
							'undefined' !== typeof t && 'undefined' !== typeof t.exports;
						e.isNode = s;
						var u =
							'undefined' !== typeof window &&
							'undefined' !== typeof window.document &&
							'undefined' !== typeof window.sessionStorage;
						function c(t) {
							return (
								!(!t || 'object' !== typeof t) &&
								(!(1 !== t.nodeType || !t.nodeName) || !!t.isCanvasElement)
							);
						}
						function f() {
							return (window && window.devicePixelRatio) || 1;
						}
						function l(t, e) {
							return t.currentStyle
								? t.currentStyle[e]
								: document.defaultView
										.getComputedStyle(t, null)
										.getPropertyValue(e);
						}
						function h(t) {
							var e = l(t, 'width');
							return 'auto' === e && (e = t.offsetWidth), parseFloat(e);
						}
						function p(t) {
							var e = l(t, 'height');
							return 'auto' === e && (e = t.offsetHeight), parseFloat(e);
						}
						function d(t) {
							return t ? document.getElementById(t) : null;
						}
						function v(t, e) {
							var n = e.get('el');
							if (!n) return t;
							var r = n.getBoundingClientRect(),
								i = r.top,
								a = r.right,
								o = r.bottom,
								s = r.left,
								u = parseFloat(l(n, 'padding-left')),
								c = parseFloat(l(n, 'padding-top')),
								f = parseFloat(l(n, 'padding-right')),
								h = parseFloat(l(n, 'padding-bottom')),
								p = a - s - u - f,
								d = o - i - c - h,
								v = e.get('pixelRatio'),
								g = (((t.x - s - u) / p) * n.width) / v,
								y = (((t.y - i - c) / d) * n.height) / v;
							return { x: g, y: y };
						}
						function g(t, e, n) {
							t.addEventListener(e, n, i);
						}
						function y(t, e, n) {
							t.removeEventListener(e, n, i);
						}
						function x(t, e, n, r, i) {
							return {
								type: t,
								chart: e,
								native: i || null,
								x: void 0 !== n ? n : null,
								y: void 0 !== r ? r : null,
							};
						}
						function m(t, e) {
							var n,
								r = t.type;
							if (t.touches) {
								var i = t.changedTouches[0] || {},
									a = i.x,
									o = i.y,
									s = i.clientX,
									u = i.clientY;
								if (a && o) return x(r, e, a, o, t);
								n = { x: s, y: u };
							} else n = { x: t.clientX, y: t.clientY };
							var c = e.get('canvas'),
								f = v(n, c);
							return x(r, e, f.x, f.y, t);
						}
						function _(t, e, n) {
							return (
								n || (n = document.createElement('canvas').getContext('2d')),
								(n.font = e || '12px sans-serif'),
								n.measureText(t)
							);
						}
						e.isBrowser = u;
					},
					function (t, e, n) {
						'use strict';
						var r = n(1),
							i = r(n(2)),
							a = r(n(3)),
							o = r(n(4)),
							s = r(n(42));
						function u(t) {
							return function () {
								var e,
									n = (0, a['default'])(t);
								if (c()) {
									var r = (0, a['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, i['default'])(this, e);
							};
						}
						function c() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var f = n(0),
							l = (function (t) {
								(0, o['default'])(n, t);
								u(n);
								var e = n.prototype;
								function n(e) {
									var n;
									n = t.call(this) || this;
									var r = {},
										i = n.getDefaultCfg();
									return (n._attrs = r), f.mix(r, i, e), n;
								}
								return (
									(e.getDefaultCfg = function () {
										return {};
									}),
									(e.get = function (t) {
										return this._attrs[t];
									}),
									(e.set = function (t, e) {
										this._attrs[t] = e;
									}),
									(e.destroy = function () {
										(this._attrs = {}), (this.destroyed = !0);
									}),
									n
								);
							})(s['default']);
						t.exports = l;
					},
					function (t, e) {
						function n(t, e) {
							for (var n in e)
								e.hasOwnProperty(n) &&
									'constructor' !== n &&
									void 0 !== e[n] &&
									(t[n] = e[n]);
						}
						var r = function (t, e, r, i) {
							return e && n(t, e), r && n(t, r), i && n(t, i), t;
						};
						t.exports = r;
					},
					function (t, e, n) {
						var r = n(15),
							i = 8,
							a = 4;
						function o(t) {
							var e = [];
							return (
								r(t, function (t) {
									e = e.concat(t);
								}),
								e
							);
						}
						function s(t, e) {
							var n;
							for (n = e; n > 0; n--) if (t % n === 0) break;
							if (1 === n) for (n = e; n > 0; n--) if ((t - 1) % n === 0) break;
							return n;
						}
						t.exports = function (t) {
							var e,
								n = {},
								r = [],
								u = t.isRounding,
								c = o(t.data),
								f = c.length,
								l = t.maxCount || i;
							if (
								(u
									? ((e = s(f - 1, l - 1) + 1),
									  2 === e ? (e = l) : e < l - a && (e = l - a))
									: (e = l),
								!u && f <= e + e / 2)
							)
								r = [].concat(c);
							else {
								for (
									var h = parseInt(f / (e - 1), 10),
										p = c
											.map(function (t, e) {
												return e % h === 0 ? c.slice(e, e + h) : null;
											})
											.filter(function (t) {
												return t;
											}),
										d = 1,
										v = p.length;
									d < v && (u ? d * h < f - h : d < e - 1);
									d++
								)
									r.push(p[d][0]);
								if (c.length) {
									r.unshift(c[0]);
									var g = c[f - 1];
									-1 === r.indexOf(g) && r.push(g);
								}
							}
							return (n.categories = c), (n.ticks = r), n;
						};
					},
					function (t, e, n) {
						'use strict';
						var r = n(0),
							i = n(10),
							a = {},
							o = '_INDEX';
						function s(t) {
							return function (e, n) {
								var r = t(e, n);
								return 0 === r ? e[o] - n[o] : r;
							};
						}
						t.exports = {
							getGroupClass: function () {},
							getChildren: function () {
								return this.get('children');
							},
							addShape: function (t, e) {
								void 0 === e && (e = {});
								var n = this.get('canvas'),
									o = a[t];
								o || ((o = r.upperFirst(t)), (a[t] = o)),
									(e.canvas = n),
									'Text' === o &&
										n &&
										n.get('fontFamily') &&
										(e.attrs.fontFamily =
											e.attrs.fontFamily || n.get('fontFamily'));
								var s = new i[o](e);
								return this.add(s), s;
							},
							addGroup: function (t) {
								var e = this.get('canvas'),
									n = this.getGroupClass();
								(t = r.mix({}, t)), (t.canvas = e), (t.parent = this);
								var i = new n(t);
								return this.add(i), i;
							},
							contain: function (t) {
								var e = this.get('children');
								return e.indexOf(t) > -1;
							},
							sort: function () {
								for (
									var t = this.get('children'), e = 0, n = t.length;
									e < n;
									e++
								) {
									var r = t[e];
									r[o] = e;
								}
								return (
									t.sort(
										s(function (t, e) {
											return t.get('zIndex') - e.get('zIndex');
										}),
									),
									this
								);
							},
							clear: function () {
								var t = this.get('children');
								while (0 !== t.length) t[t.length - 1].remove(!0);
								return this;
							},
							add: function (t) {
								var e = this,
									n = e.get('children');
								r.isArray(t) || (t = [t]);
								for (var i = 0, a = t.length; i < a; i++) {
									var o = t[i],
										s = o.get('parent');
									if (s) {
										var u = s.get('children');
										r.Array.remove(u, o);
									}
									e._setEvn(o), n.push(o);
								}
								return e;
							},
							_setEvn: function (t) {
								var e = this;
								(t._attrs.parent = e),
									(t._attrs.context = e._attrs.context),
									(t._attrs.canvas = e._attrs.canvas);
								var n = t._attrs.attrs.clip;
								if (
									(n &&
										(n.set('parent', e), n.set('context', e.get('context'))),
									t._attrs.isGroup)
								)
									for (
										var r = t._attrs.children, i = 0, a = r.length;
										i < a;
										i++
									)
										t._setEvn(r[i]);
							},
						};
					},
					function (t, e, n) {
						'use strict';
						var r = n(1),
							i = r(n(2)),
							a = r(n(3)),
							o = r(n(4));
						function s(t) {
							return function () {
								var e,
									n = (0, a['default'])(t);
								if (u()) {
									var r = (0, a['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, i['default'])(this, e);
							};
						}
						function u() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var c = n(0),
							f = n(46),
							l = n(66),
							h = n(13),
							p = (function (t) {
								(0, o['default'])(e, t);
								s(e);
								function e() {
									return t.apply(this, arguments) || this;
								}
								var n = e.prototype;
								return (
									(n._initProperties = function () {
										this._attrs = {
											zIndex: 0,
											visible: !0,
											destroyed: !1,
											isGroup: !0,
											children: [],
										};
									}),
									(n.drawInner = function (t) {
										for (
											var e = this.get('children'), n = 0, r = e.length;
											n < r;
											n++
										) {
											var i = e[n];
											i.draw(t);
										}
										return this;
									}),
									(n.getBBox = function () {
										for (
											var t = this,
												e = 1 / 0,
												n = -1 / 0,
												r = 1 / 0,
												i = -1 / 0,
												a = t.get('children'),
												o = 0,
												s = a.length;
											o < s;
											o++
										) {
											var u = a[o];
											if (u.get('visible')) {
												var c = u.getBBox();
												if (!c) continue;
												var f = [c.minX, c.minY],
													l = [c.minX, c.maxY],
													p = [c.maxX, c.minY],
													d = [c.maxX, c.maxY],
													v = u.attr('matrix');
												h.transformMat2d(f, f, v),
													h.transformMat2d(l, l, v),
													h.transformMat2d(p, p, v),
													h.transformMat2d(d, d, v),
													(e = Math.min(f[0], l[0], p[0], d[0], e)),
													(n = Math.max(f[0], l[0], p[0], d[0], n)),
													(r = Math.min(f[1], l[1], p[1], d[1], r)),
													(i = Math.max(f[1], l[1], p[1], d[1], i));
											}
										}
										return {
											minX: e,
											minY: r,
											maxX: n,
											maxY: i,
											x: e,
											y: r,
											width: n - e,
											height: i - r,
										};
									}),
									(n.destroy = function () {
										this.get('destroyed') ||
											(this.clear(), t.prototype.destroy.call(this));
									}),
									e
								);
							})(f);
						c.mix(p.prototype, l, {
							getGroupClass: function () {
								return p;
							},
						}),
							(t.exports = p);
					},
					function (t, e, n) {
						'use strict';
						var r = n(0),
							i = n(19),
							a = n(38),
							o = n(6),
							s = i.registerFactory('line', { defaultShapeType: 'line' });
						function u(t) {
							var e = { strokeStyle: t.color };
							return (
								t.size >= 0 && (e.lineWidth = t.size),
								r.mix(e, t.style),
								r.mix({}, o.shape.line, e)
							);
						}
						function c(t, e, n, i) {
							var o = t.points;
							if (o.length && r.isArray(o[0].y)) {
								for (var s = [], u = [], c = 0, f = o.length; c < f; c++) {
									var l = o[c],
										h = a.splitPoints(l);
									u.push(h[0]), s.push(h[1]);
								}
								if ((t.isInCircle && (s.push(s[0]), u.push(u[0])), t.isStack))
									return e.addShape('Polyline', {
										className: 'line',
										attrs: r.mix({ points: s, smooth: i }, n),
									});
								var p = e.addShape('Polyline', {
										className: 'line',
										attrs: r.mix({ points: s, smooth: i }, n),
									}),
									d = e.addShape('Polyline', {
										className: 'line',
										attrs: r.mix({ points: u, smooth: i }, n),
									});
								return [p, d];
							}
							return (
								t.isInCircle && o.push(o[0]),
								e.addShape('Polyline', {
									className: 'line',
									attrs: r.mix({ points: o, smooth: i }, n),
								})
							);
						}
						var f = ['line', 'smooth', 'dash'];
						r.each(f, function (t) {
							i.registerShape('line', t, {
								draw: function (e, n) {
									var r = 'smooth' === t,
										i = u(e);
									return (
										'dash' === t && (i.lineDash = o.lineDash), c(e, n, i, r)
									);
								},
							});
						}),
							(t.exports = s);
					},
					function (t, e, n) {
						function r(t, e) {
							(t.prototype = Object.create(e.prototype)),
								(t.prototype.constructor = t),
								(t.__proto__ = e);
						}
						var i = n(26),
							a = n(65),
							o = n(15),
							s = n(36),
							u = n(48),
							c = (function (t) {
								function e() {
									return t.apply(this, arguments) || this;
								}
								r(e, t);
								var n = e.prototype;
								return (
									(n._initDefaultCfg = function () {
										t.prototype._initDefaultCfg.call(this),
											(this.type = 'cat'),
											(this.isCategory = !0),
											(this.isRounding = !0);
									}),
									(n.init = function () {
										var t = this,
											e = t.values,
											n = t.tickCount;
										if (
											(o(e, function (t, n) {
												e[n] = t.toString();
											}),
											!t.ticks)
										) {
											var r = e;
											if (n) {
												var i = a({
													maxCount: n,
													data: e,
													isRounding: t.isRounding,
												});
												r = i.ticks;
											}
											this.ticks = r;
										}
									}),
									(n.getText = function (e) {
										return (
											-1 === this.values.indexOf(e) &&
												s(e) &&
												(e = this.values[Math.round(e)]),
											t.prototype.getText.call(this, e)
										);
									}),
									(n.translate = function (t) {
										var e = this.values.indexOf(t);
										return (
											-1 === e && s(t) ? (e = t) : -1 === e && (e = NaN), e
										);
									}),
									(n.scale = function (t) {
										var e,
											n = this.rangeMin(),
											r = this.rangeMax();
										return (
											(u(t) || -1 !== this.values.indexOf(t)) &&
												(t = this.translate(t)),
											(e =
												this.values.length > 1
													? t / (this.values.length - 1)
													: t),
											n + e * (r - n)
										);
									}),
									(n.invert = function (t) {
										if (u(t)) return t;
										var e = this.rangeMin(),
											n = this.rangeMax();
										t < e && (t = e), t > n && (t = n);
										var r = (t - e) / (n - e),
											i =
												Math.round(r * (this.values.length - 1)) %
												this.values.length;
										return (i = i || 0), this.values[i];
									}),
									e
								);
							})(i);
						(i.Cat = c), (t.exports = c);
					},
					function (t, e, n) {
						'use strict';
						t.exports = {
							requestAnimationFrame:
								'object' === typeof window && window.requestAnimationFrame
									? window.requestAnimationFrame
									: function (t) {
											return setTimeout(t, 16);
									  },
						};
					},
					function (t, e, n) {
						'use strict';
						var r = n(13);
						function i(t) {
							return [t.x, t.y];
						}
						function a(t, e, n, a) {
							var o,
								s,
								u,
								c,
								f,
								l,
								h,
								p,
								d = [],
								v = !!a;
							if (v) {
								for (
									u = [1 / 0, 1 / 0], c = [-1 / 0, -1 / 0], p = 0, h = t.length;
									p < h;
									p++
								)
									(f = i(t[p])), r.min(u, u, f), r.max(c, c, f);
								r.min(u, u, a[0]), r.max(c, c, a[1]);
							}
							for (p = 0, l = t.length; p < l; p++) {
								if (((f = i(t[p])), n))
									(o = i(t[p ? p - 1 : l - 1])), (s = i(t[(p + 1) % l]));
								else {
									if (0 === p || p === l - 1) {
										d.push([f[0], f[1]]);
										continue;
									}
									(o = i(t[p - 1])), (s = i(t[p + 1]));
								}
								var g = r.sub([], s, o);
								r.scale(g, g, e);
								var y = r.distance(f, o),
									x = r.distance(f, s),
									m = y + x;
								0 !== m && ((y /= m), (x /= m));
								var _ = r.scale([], g, -y),
									b = r.scale([], g, x),
									S = r.add([], f, _),
									P = r.add([], f, b);
								v &&
									(r.max(S, S, u),
									r.min(S, S, c),
									r.max(P, P, u),
									r.min(P, P, c)),
									d.push([S[0], S[1]]),
									d.push([P[0], P[1]]);
							}
							return n && d.push(d.shift()), d;
						}
						function o(t, e, n) {
							for (
								var r,
									i,
									o,
									s = !!e,
									u = a(t, 0.4, s, n),
									c = t.length,
									f = [],
									l = 0;
								l < c - 1;
								l++
							)
								(r = u[2 * l]),
									(i = u[2 * l + 1]),
									(o = t[l + 1]),
									f.push(['C', r[0], r[1], i[0], i[1], o.x, o.y]);
							return (
								s &&
									((r = u[c]),
									(i = u[c + 1]),
									(o = t[0]),
									f.push(['C', r[0], r[1], i[0], i[1], o.x, o.y])),
								f
							);
						}
						t.exports = { smooth: o };
					},
					function (t, e, n) {
						'use strict';
						var r = n(1),
							i = r(n(2)),
							a = r(n(3)),
							o = r(n(4));
						function s(t) {
							return function () {
								var e,
									n = (0, a['default'])(t);
								if (u()) {
									var r = (0, a['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, i['default'])(this, e);
							};
						}
						function u() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var c = n(17),
							f = n(38),
							l = n(0);
						n(68);
						var h = (function (t) {
							(0, o['default'])(e, t);
							s(e);
							function e() {
								return t.apply(this, arguments) || this;
							}
							var n = e.prototype;
							return (
								(n.getDefaultCfg = function () {
									var e = t.prototype.getDefaultCfg.call(this);
									return (e.type = 'path'), (e.shapeType = 'line'), e;
								}),
								(n.getDrawCfg = function (e) {
									var n = t.prototype.getDrawCfg.call(this, e);
									return (n.isStack = this.hasAdjust('stack')), n;
								}),
								(n.draw = function (t, e) {
									var n = this,
										r = n.get('container'),
										i = n.getYScale(),
										a = n.get('connectNulls'),
										o = f.splitArray(t, i.field, a),
										s = this.getDrawCfg(t[0]);
									(s.origin = t),
										l.each(o, function (i, a) {
											(s.splitedIndex = a),
												(s.points = i),
												n.drawShape(s.shape, t[0], s, r, e);
										});
								}),
								e
							);
						})(c);
						(c.Path = h), (t.exports = h);
					},
					function (t, e, n) {
						'use strict';
						var r = n(47),
							i = n(6),
							a = n(0),
							o = {
								initEvent: function () {
									var t = this,
										e = this.get('chart');
									e &&
										e.on(r.EVENT_AFTER_SIZE_CHANGE, function () {
											t.set('_width', null);
										});
								},
								getDefalutSize: function () {
									var t = this.get('defaultSize');
									if (!t) {
										var e = this.get('coord'),
											n = this.getXScale(),
											r = this.get('dataArray'),
											o = a.uniq(n.values),
											s = o.length,
											u = n.range,
											c = 1 / s,
											f = 1;
										e && e.isPolar
											? (f =
													e.transposed && s > 1
														? i.widthRatio.multiplePie
														: i.widthRatio.rose)
											: (n.isLinear && (c *= u[1] - u[0]),
											  (f = i.widthRatio.column)),
											(c *= f),
											this.hasAdjust('dodge') && (c /= r.length),
											(t = c),
											this.set('defaultSize', t);
									}
									return t;
								},
								getDimWidth: function (t) {
									var e = this.get('coord'),
										n = e.convertPoint({ x: 0, y: 0 }),
										r = e.convertPoint({
											x: 'x' === t ? 1 : 0,
											y: 'x' === t ? 0 : 1,
										}),
										i = 0;
									return (
										n &&
											r &&
											(i = Math.sqrt(
												Math.pow(r.x - n.x, 2) + Math.pow(r.y - n.y, 2),
											)),
										i
									);
								},
								_getWidth: function () {
									var t = this.get('_width');
									if (!t) {
										var e = this.get('coord');
										(t =
											e && e.isPolar && !e.transposed
												? (e.endAngle - e.startAngle) * e.circleRadius
												: this.getDimWidth('x')),
											this.set('_width', t);
									}
									return t;
								},
								_toNormalizedSize: function (t) {
									var e = this._getWidth();
									return t / e;
								},
								_toCoordSize: function (t) {
									var e = this._getWidth();
									return e * t;
								},
								getNormalizedSize: function (t) {
									var e = this.getAttrValue('size', t);
									return (
										(e = a.isNil(e)
											? this.getDefalutSize()
											: this._toNormalizedSize(e)),
										e
									);
								},
								getSize: function (t) {
									var e = this.getAttrValue('size', t);
									if (a.isNil(e)) {
										var n = this.getDefalutSize();
										e = this._toCoordSize(n);
									}
									return e;
								},
							};
						t.exports = o;
					},
					,
					function (t, e, n) {
						'use strict';
						(e.__esModule = !0),
							(e.merge = i),
							(e.values = a),
							(e.firstValue = o),
							(e.group = u),
							(e.groupToMap = s),
							(e.remove = c),
							(e.getRange = f);
						var r = n(20);
						function i(t) {
							for (var e = [], n = 0, r = t.length; n < r; n++)
								e = e.concat(t[n]);
							return e;
						}
						function a(t, e) {
							for (var n = [], i = {}, a = 0, o = t.length; a < o; a++) {
								var s = t[a],
									u = s[e];
								(0, r.isNil)(u) ||
									((0, r.isArray)(u)
										? (0, r.each)(u, function (t) {
												i[t] || (n.push(t), (i[t] = !0));
										  })
										: i[u] || (n.push(u), (i[u] = !0)));
							}
							return n;
						}
						function o(t, e) {
							for (var n = null, i = 0, a = t.length; i < a; i++) {
								var o = t[i],
									s = o[e];
								if (!(0, r.isNil)(s)) {
									n = (0, r.isArray)(s) ? s[0] : s;
									break;
								}
							}
							return n;
						}
						function s(t, e) {
							if (!e) return { 0: t };
							for (
								var n = function (t) {
										for (var n = '_', r = 0, i = e.length; r < i; r++)
											n += t[e[r]] && t[e[r]].toString();
										return n;
									},
									r = {},
									i = 0,
									a = t.length;
								i < a;
								i++
							) {
								var o = t[i],
									s = n(o);
								r[s] ? r[s].push(o) : (r[s] = [o]);
							}
							return r;
						}
						function u(t, e, n) {
							if ((void 0 === n && (n = {}), !e)) return [t];
							var i = s(t, e),
								a = [];
							if (1 === e.length && n[e[0]]) {
								var o = n[e[0]];
								(0, r.each)(o, function (t) {
									(t = '_' + t), a.push(i[t]);
								});
							} else for (var u in i) a.push(i[u]);
							return a;
						}
						function c(t, e) {
							if (t) {
								var n = t.indexOf(e);
								-1 !== n && t.splice(n, 1);
							}
						}
						function f(t) {
							if (!t.length) return { min: 0, max: 0 };
							var e = Math.max.apply(null, t),
								n = Math.min.apply(null, t);
							return { min: n, max: e };
						}
					},
					function (t, e, n) {
						'use strict';
						var r = n(1),
							i = r(n(2)),
							a = r(n(3)),
							o = r(n(4));
						function s(t) {
							return function () {
								var e,
									n = (0, a['default'])(t);
								if (u()) {
									var r = (0, a['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, i['default'])(this, e);
							};
						}
						function u() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var c = n(0),
							f = n(16),
							l = f.Shape,
							h = {
								circle: function (t, e, n, r) {
									r.arc(t, e, n, 0, 2 * Math.PI, !1);
								},
								square: function (t, e, n, r) {
									r.moveTo(t - n, e - n),
										r.lineTo(t + n, e - n),
										r.lineTo(t + n, e + n),
										r.lineTo(t - n, e + n),
										r.closePath();
								},
							},
							p = (function (t) {
								(0, o['default'])(e, t);
								s(e);
								function e() {
									return t.apply(this, arguments) || this;
								}
								var n = e.prototype;
								return (
									(n._initProperties = function () {
										t.prototype._initProperties.call(this),
											(this._attrs.canFill = !0),
											(this._attrs.canStroke = !0),
											(this._attrs.type = 'marker');
									}),
									(n.getDefaultAttrs = function () {
										return { x: 0, y: 0, lineWidth: 0 };
									}),
									(n.createPath = function (t) {
										var e,
											n = this.get('attrs'),
											r = n.x,
											i = n.y,
											a = n.radius,
											o = n.symbol || 'circle';
										(e = c.isFunction(o) ? o : h[o]),
											t.beginPath(),
											e(r, i, a, t, this);
									}),
									(n.calculateBox = function () {
										var t = this.get('attrs'),
											e = t.x,
											n = t.y,
											r = t.radius;
										return {
											minX: e - r,
											minY: n - r,
											maxX: e + r,
											maxY: n + r,
										};
									}),
									e
								);
							})(l);
						t.exports = p;
					},
					function (t, e, n) {
						'use strict';
						var r = {},
							i = n(6);
						(r.Global = i),
							(r.version = i.version),
							(r.Chart = n(30)),
							(r.Shape = n(19)),
							(r.G = n(16)),
							(r.Util = n(0)),
							(r.Helper = n(37)),
							(r.track = function () {
								return null;
							}),
							(t.exports = r);
					},
					function (t, e, n) {
						'use strict';
						var r = n(0),
							i = '#E8E8E8',
							a = '#808080',
							o = {
								label: { fill: a, fontSize: 10 },
								line: { stroke: i, lineWidth: 1 },
								grid: { type: 'line', stroke: i, lineWidth: 1, lineDash: [2] },
								tickLine: null,
								labelOffset: 7.5,
							},
							s = {
								fontFamily:
									'"Helvetica Neue", "San Francisco", Helvetica, Tahoma, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", sans-serif',
								defaultColor: '#1890FF',
								pixelRatio: 1,
								padding: 'auto',
								appendPadding: 15,
								colors: [
									'#1890FF',
									'#2FC25B',
									'#FACC14',
									'#223273',
									'#8543E0',
									'#13C2C2',
									'#3436C7',
									'#F04864',
								],
								shapes: {
									line: ['line', 'dash'],
									point: ['circle', 'hollowCircle'],
								},
								sizes: [4, 10],
								axis: {
									common: o,
									bottom: r.mix({}, o, { grid: null }),
									left: r.mix({}, o, { line: null }),
									right: r.mix({}, o, { line: null }),
									circle: r.mix({}, o, { line: null }),
									radius: r.mix({}, o, { labelOffset: 4 }),
								},
								shape: {
									line: { lineWidth: 2, lineJoin: 'round', lineCap: 'round' },
									point: { lineWidth: 0, size: 3 },
									area: { fillOpacity: 0.1 },
								},
								_defaultAxis: o,
							};
						t.exports = s;
					},
					function (t, e, n) {
						'use strict';
						var r = n(39),
							i = n(28),
							a = function (t, e) {
								return (
									void 0 === e && (e = []),
									Object(r['a'])(t, function (t) {
										return !Object(i['a'])(e, t);
									})
								);
							};
						e['a'] = a;
					},
					function (t, e, n) {
						'use strict';
						var r = n(9),
							i = n(51),
							a = n(5),
							o = n(24);
						function s(t, e) {
							if (!Object(a['a'])(t)) return null;
							var n;
							if (
								(Object(r['a'])(e) && (n = e),
								Object(o['a'])(e) &&
									(n = function (t) {
										return Object(i['a'])(t, e);
									}),
								n)
							)
								for (var s = 0; s < t.length; s += 1) if (n(t[s])) return t[s];
							return null;
						}
						e['a'] = s;
					},
					function (t, e, n) {
						'use strict';
						function r(t, e, n) {
							void 0 === n && (n = 0);
							for (var r = n; r < t.length; r++) if (e(t[r], r)) return r;
							return -1;
						}
						e['a'] = r;
					},
					function (t, e, n) {
						'use strict';
						var r = n(14),
							i = n(5),
							a = function (t, e) {
								for (var n = null, a = 0; a < t.length; a++) {
									var o = t[a],
										s = o[e];
									if (!Object(r['a'])(s)) {
										n = Object(i['a'])(s) ? s[0] : s;
										break;
									}
								}
								return n;
							};
						e['a'] = a;
					},
					function (t, e, n) {
						'use strict';
						var r = n(5),
							i = function (t) {
								if (!Object(r['a'])(t)) return [];
								for (var e = [], n = 0; n < t.length; n++) e = e.concat(t[n]);
								return e;
							};
						e['a'] = i;
					},
					function (t, e, n) {
						'use strict';
						var r = n(5),
							i = function (t, e) {
								if ((void 0 === e && (e = []), Object(r['a'])(t)))
									for (var n = 0; n < t.length; n += 1) i(t[n], e);
								else e.push(t);
								return e;
							};
						e['a'] = i;
					},
					function (t, e, n) {
						'use strict';
						var r = n(5),
							i = n(39),
							a = function (t) {
								if (
									((t = Object(i['a'])(t, function (t) {
										return !isNaN(t);
									})),
									!t.length)
								)
									return { min: 0, max: 0 };
								if (Object(r['a'])(t[0])) {
									for (var e = [], n = 0; n < t.length; n++) e = e.concat(t[n]);
									t = e;
								}
								var a = Math.max.apply(null, t),
									o = Math.min.apply(null, t);
								return { min: o, max: a };
							};
						e['a'] = a;
					},
					function (t, e, n) {
						'use strict';
						var r = Array.prototype,
							i = r.splice,
							a = r.indexOf,
							o = function (t) {
								for (var e = [], n = 1; n < arguments.length; n++)
									e[n - 1] = arguments[n];
								for (var r = 0; r < e.length; r++) {
									var o = e[r],
										s = -1;
									while ((s = a.call(t, o)) > -1) i.call(t, s, 1);
								}
								return t;
							};
						e['a'] = o;
					},
					function (t, e, n) {
						'use strict';
						var r = n(8),
							i = n(5),
							a = n(24),
							o = function (t, e, n) {
								if (!Object(i['a'])(t) && !Object(a['a'])(t)) return t;
								var o = n;
								return (
									Object(r['a'])(t, function (t, n) {
										o = e(o, t, n);
									}),
									o
								);
							};
						e['a'] = o;
					},
					function (t, e, n) {
						'use strict';
						var r = n(7),
							i = n(53),
							a = function (t, e) {
								var n = [];
								if (!Object(r['a'])(t)) return n;
								var a = -1,
									o = [],
									s = t.length;
								while (++a < s) {
									var u = t[a];
									e(u, a, t) && (n.push(u), o.push(a));
								}
								return Object(i['a'])(t, o), n;
							};
						e['a'] = a;
					},
					function (t, e, n) {
						'use strict';
						var r = n(5),
							i = n(18),
							a = n(9);
						function o(t, e) {
							var n;
							if (Object(a['a'])(e))
								n = function (t, n) {
									return e(t) - e(n);
								};
							else {
								var o = [];
								Object(i['a'])(e) ? o.push(e) : Object(r['a'])(e) && (o = e),
									(n = function (t, e) {
										for (var n = 0; n < o.length; n += 1) {
											var r = o[n];
											if (t[r] > e[r]) return 1;
											if (t[r] < e[r]) return -1;
										}
										return 0;
									});
							}
							return t.sort(n), t;
						}
						e['a'] = o;
					},
					function (t, e, n) {
						'use strict';
						var r = n(54),
							i = function () {
								for (var t = [], e = 0; e < arguments.length; e++)
									t[e] = arguments[e];
								return Object(r['a'])([].concat.apply([], t));
							};
						e['a'] = i;
					},
					function (t, e, n) {
						'use strict';
						var r = n(8),
							i = n(5),
							a = n(14);
						e['a'] = function (t, e) {
							var n = [],
								o = {};
							return (
								t.forEach(function (t) {
									var s = t[e];
									Object(a['a'])(s) ||
										(Object(i['a'])(s) || (s = [s]),
										Object(r['a'])(s, function (t) {
											o[t] || (n.push(t), (o[t] = !0));
										}));
								}),
								n
							);
						};
					},
					function (t, e, n) {
						'use strict';
						e['a'] = i;
						var r = n(7);
						function i(t) {
							if (Object(r['a'])(t)) return t[0];
						}
					},
					function (t, e, n) {
						'use strict';
						e['a'] = i;
						var r = n(7);
						function i(t) {
							if (Object(r['a'])(t)) {
								var e = t;
								return e[e.length - 1];
							}
						}
					},
					function (t, e, n) {
						'use strict';
						var r = n(5),
							i = n(18);
						function a(t, e) {
							return !(!Object(r['a'])(t) && !Object(i['a'])(t)) && t[0] === e;
						}
						e['a'] = a;
					},
					function (t, e, n) {
						'use strict';
						var r = n(5),
							i = n(18);
						function a(t, e) {
							return (
								!(!Object(r['a'])(t) && !Object(i['a'])(t)) &&
								t[t.length - 1] === e
							);
						}
						e['a'] = a;
					},
					function (t, e, n) {
						'use strict';
						var r = function (t, e) {
							for (var n = 0; n < t.length; n++) if (!e(t[n], n)) return !1;
							return !0;
						};
						e['a'] = r;
					},
					function (t, e, n) {
						'use strict';
						var r = function (t, e) {
							for (var n = 0; n < t.length; n++) if (e(t[n], n)) return !0;
							return !1;
						};
						e['a'] = r;
					},
					function (t, e, n) {
						'use strict';
						var r = n(55);
						e['a'] = function (t, e) {
							if (!e) return [t];
							var n = Object(r['a'])(t, e),
								i = [];
							for (var a in n) i.push(n[a]);
							return i;
						};
					},
					function (t, e, n) {
						'use strict';
						function r(t, e) {
							return t['_wrap_' + e];
						}
						e['a'] = r;
					},
					function (t, e, n) {
						'use strict';
						function r(t, e) {
							if (t['_wrap_' + e]) return t['_wrap_' + e];
							var n = function (n) {
								t[e](n);
							};
							return (t['_wrap_' + e] = n), n;
						}
						e['a'] = r;
					},
					function (t, e, n) {
						'use strict';
						var r = {};
						function i(t) {
							var e = r[t];
							if (!e) {
								for (var n = t.toString(16), i = n.length; i < 6; i++)
									n = '0' + n;
								(e = '#' + n), (r[t] = e);
							}
							return e;
						}
						e['a'] = i;
					},
					function (t, e, n) {
						'use strict';
						var r = n(5);
						function i(t) {
							var e = 0,
								n = 0,
								i = 0,
								a = 0;
							return (
								Object(r['a'])(t)
									? 1 === t.length
										? (e = n = i = a = t[0])
										: 2 === t.length
										? ((e = i = t[0]), (n = a = t[1]))
										: 3 === t.length
										? ((e = t[0]), (n = a = t[1]), (i = t[2]))
										: ((e = t[0]), (n = t[1]), (i = t[2]), (a = t[3]))
									: (e = n = i = a = t),
								{ r1: e, r2: n, r3: i, r4: a }
							);
						}
						e['a'] = i;
					},
					function (t, e, n) {
						'use strict';
						var r = function (t, e, n) {
							return t < e ? e : t > n ? n : t;
						};
						e['a'] = r;
					},
					function (t, e, n) {
						'use strict';
						var r = function (t, e) {
							var n = e.toString(),
								r = n.indexOf('.');
							if (-1 === r) return Math.round(t);
							var i = n.substr(r + 1).length;
							return i > 20 && (i = 20), parseFloat(t.toFixed(i));
						};
						e['a'] = r;
					},
					function (t, e, n) {
						'use strict';
						var r = n(12),
							i = function (t) {
								return Object(r['a'])(t) && t % 1 !== 0;
							};
						e['a'] = i;
					},
					function (t, e, n) {
						'use strict';
						var r = n(12),
							i = function (t) {
								return Object(r['a'])(t) && t % 2 === 0;
							};
						e['a'] = i;
					},
					function (t, e, n) {
						'use strict';
						var r = n(12),
							i = Number.isInteger
								? Number.isInteger
								: function (t) {
										return Object(r['a'])(t) && t % 1 === 0;
								  };
						e['a'] = i;
					},
					function (t, e, n) {
						'use strict';
						var r = n(12),
							i = function (t) {
								return Object(r['a'])(t) && t < 0;
							};
						e['a'] = i;
					},
					function (t, e, n) {
						'use strict';
						e['a'] = i;
						var r = 1e-5;
						function i(t, e, n) {
							return void 0 === n && (n = r), Math.abs(t - e) < n;
						}
					},
					function (t, e, n) {
						'use strict';
						var r = n(12),
							i = function (t) {
								return Object(r['a'])(t) && t % 2 !== 0;
							};
						e['a'] = i;
					},
					function (t, e, n) {
						'use strict';
						var r = n(12),
							i = function (t) {
								return Object(r['a'])(t) && t > 0;
							};
						e['a'] = i;
					},
					function (t, e, n) {
						'use strict';
						var r = n(8),
							i = n(5),
							a = n(9);
						e['a'] = function (t, e) {
							if (Object(i['a'])(t)) {
								var n,
									o,
									s = t[0];
								return (
									(n = Object(a['a'])(e) ? e(t[0]) : t[0][e]),
									Object(r['a'])(t, function (t) {
										(o = Object(a['a'])(e) ? e(t) : t[e]),
											o > n && ((s = t), (n = o));
									}),
									s
								);
							}
						};
					},
					function (t, e, n) {
						'use strict';
						var r = n(8),
							i = n(5),
							a = n(9);
						e['a'] = function (t, e) {
							if (Object(i['a'])(t)) {
								var n,
									o,
									s = t[0];
								return (
									(n = Object(a['a'])(e) ? e(t[0]) : t[0][e]),
									Object(r['a'])(t, function (t) {
										(o = Object(a['a'])(e) ? e(t) : t[e]),
											o < n && ((s = t), (n = o));
									}),
									s
								);
							}
						};
					},
					function (t, e, n) {
						'use strict';
						var r = function (t, e) {
							return ((t % e) + e) % e;
						};
						e['a'] = r;
					},
					function (t, e, n) {
						'use strict';
						var r = 180 / Math.PI,
							i = function (t) {
								return r * t;
							};
						e['a'] = i;
					},
					function (t, e, n) {
						'use strict';
						e['a'] = parseInt;
					},
					function (t, e, n) {
						'use strict';
						var r = Math.PI / 180,
							i = function (t) {
								return r * t;
							};
						e['a'] = i;
					},
					function (t, e, n) {
						'use strict';
						var r = n(8);
						e['a'] = r['a'];
					},
					function (t, e, n) {
						'use strict';
						var r = n(57);
						e['a'] = r['a'];
					},
					function (t, e, n) {
						'use strict';
						var r = n(28),
							i = n(58);
						e['a'] = function (t, e) {
							return Object(r['a'])(Object(i['a'])(t), e);
						};
					},
					function (t, e, n) {
						'use strict';
						var r = n(25),
							i = function (t) {
								return Object(r['a'])(t).toLowerCase();
							};
						e['a'] = i;
					},
					function (t, e, n) {
						'use strict';
						var r = n(25),
							i = function (t) {
								var e = Object(r['a'])(t);
								return e.charAt(0).toLowerCase() + e.substring(1);
							};
						e['a'] = i;
					},
					function (t, e, n) {
						'use strict';
						function r(t, e) {
							return t && e
								? t.replace(/\\?\{([^{}]+)\}/g, function (t, n) {
										return '\\' === t.charAt(0)
											? t.slice(1)
											: void 0 === e[n]
											? ''
											: e[n];
								  })
								: t;
						}
						e['a'] = r;
					},
					function (t, e, n) {
						'use strict';
						var r = n(25),
							i = function (t) {
								return Object(r['a'])(t).toUpperCase();
							};
						e['a'] = i;
					},
					function (t, e, n) {
						'use strict';
						var r = n(25),
							i = function (t) {
								var e = Object(r['a'])(t);
								return e.charAt(0).toUpperCase() + e.substring(1);
							};
						e['a'] = i;
					},
					function (t, e, n) {
						'use strict';
						var r = n(11),
							i = function (t) {
								return Object(r['a'])(t, 'Arguments');
							};
						e['a'] = i;
					},
					function (t, e, n) {
						'use strict';
						var r = n(11),
							i = function (t) {
								return Object(r['a'])(t, 'Boolean');
							};
						e['a'] = i;
					},
					function (t, e, n) {
						'use strict';
						var r = n(11),
							i = function (t) {
								return Object(r['a'])(t, 'Date');
							};
						e['a'] = i;
					},
					function (t, e, n) {
						'use strict';
						var r = n(11),
							i = function (t) {
								return Object(r['a'])(t, 'Error');
							};
						e['a'] = i;
					},
					function (t, e, n) {
						'use strict';
						var r = n(12);
						e['a'] = function (t) {
							return Object(r['a'])(t) && isFinite(t);
						};
					},
					function (t, e, n) {
						'use strict';
						var r = function (t) {
							return null === t;
						};
						e['a'] = r;
					},
					function (t, e, n) {
						'use strict';
						var r = n(11),
							i = function (t) {
								return Object(r['a'])(t, 'RegExp');
							};
						e['a'] = i;
					},
					function (t, e, n) {
						'use strict';
						var r = function (t) {
							return void 0 === t;
						};
						e['a'] = r;
					},
					function (t, e, n) {
						'use strict';
						var r = function (t) {
							return t instanceof Element || t instanceof HTMLDocument;
						};
						e['a'] = r;
					},
					function (t, e, n) {
						'use strict';
						function r(t) {
							var e =
								window.requestAnimationFrame ||
								window.webkitRequestAnimationFrame ||
								window.mozRequestAnimationFrame ||
								window.msRequestAnimationFrame ||
								function (t) {
									return setTimeout(t, 16);
								};
							return e(t);
						}
						e['a'] = r;
					},
					function (t, e, n) {
						'use strict';
						function r(t) {
							var e =
								window.cancelAnimationFrame ||
								window.webkitCancelAnimationFrame ||
								window.mozCancelAnimationFrame ||
								window.msCancelAnimationFrame ||
								clearTimeout;
							e(t);
						}
						e['a'] = r;
					},
					function (t, e, n) {
						'use strict';
						var r = n(41),
							i = n(9),
							a = function () {
								for (var t = [], e = 0; e < arguments.length; e++)
									t[e] = arguments[e];
								for (var n = t[0], a = 1; a < t.length; a++) {
									var o = t[a];
									Object(i['a'])(o) && (o = o.prototype),
										Object(r['a'])(n.prototype, o);
								}
							};
						e['a'] = a;
					},
					function (t, e, n) {
						'use strict';
						var r = n(5),
							i = function (t) {
								if ('object' !== typeof t || null === t) return t;
								var e;
								if (Object(r['a'])(t)) {
									e = [];
									for (var n = 0, a = t.length; n < a; n++)
										'object' === typeof t[n] && null != t[n]
											? (e[n] = i(t[n]))
											: (e[n] = t[n]);
								} else
									for (var o in ((e = {}), t))
										'object' === typeof t[o] && null != t[o]
											? (e[o] = i(t[o]))
											: (e[o] = t[o]);
								return e;
							};
						e['a'] = i;
					},
					function (t, e, n) {
						'use strict';
						function r(t, e, n) {
							var r;
							return function () {
								var i = this,
									a = arguments,
									o = function () {
										(r = null), n || t.apply(i, a);
									},
									s = n && !r;
								clearTimeout(r), (r = setTimeout(o, e)), s && t.apply(i, a);
							};
						}
						e['a'] = r;
					},
					function (t, e, n) {
						'use strict';
						var r = n(9);
						e['a'] = function (t, e) {
							if (!Object(r['a'])(t))
								throw new TypeError('Expected a function');
							var n = function () {
								for (var r = [], i = 0; i < arguments.length; i++)
									r[i] = arguments[i];
								var a = e ? e.apply(this, r) : r[0],
									o = n.cache;
								if (o.has(a)) return o.get(a);
								var s = t.apply(this, r);
								return o.set(a, s), s;
							};
							return (n.cache = new Map()), n;
						};
					},
					function (t, e, n) {
						'use strict';
						var r = n(5),
							i = n(24),
							a = 5;
						function o(t, e, n, s) {
							for (var u in ((n = n || 0), (s = s || a), e))
								if (e.hasOwnProperty(u)) {
									var c = e[u];
									null !== c && Object(i['a'])(c)
										? (Object(i['a'])(t[u]) || (t[u] = {}),
										  n < s ? o(t[u], c, n + 1, s) : (t[u] = e[u]))
										: Object(r['a'])(c)
										? ((t[u] = []), (t[u] = t[u].concat(c)))
										: void 0 !== c && (t[u] = c);
								}
						}
						var s = function (t) {
							for (var e = [], n = 1; n < arguments.length; n++)
								e[n - 1] = arguments[n];
							for (var r = 0; r < e.length; r += 1) o(t, e[r]);
							return t;
						};
						e['a'] = s;
					},
					function (t, e, n) {
						'use strict';
						var r = n(41),
							i = n(9),
							a = function (t, e, n, a) {
								Object(i['a'])(e) || ((n = e), (e = t), (t = function () {}));
								var o = Object.create
										? function (t, e) {
												return Object.create(t, { constructor: { value: e } });
										  }
										: function (t, e) {
												function n() {}
												n.prototype = t;
												var r = new n();
												return (r.constructor = e), r;
										  },
									s = o(e.prototype, t);
								return (
									(t.prototype = Object(r['a'])(s, t.prototype)),
									(t.superclass = o(e.prototype, e)),
									Object(r['a'])(s, n),
									Object(r['a'])(t, a),
									t
								);
							};
						e['a'] = a;
					},
					function (t, e, n) {
						'use strict';
						var r = n(7),
							i = function (t, e) {
								if (!Object(r['a'])(t)) return -1;
								var n = Array.prototype.indexOf;
								if (n) return n.call(t, e);
								for (var i = -1, a = 0; a < t.length; a++)
									if (t[a] === e) {
										i = a;
										break;
									}
								return i;
							};
						e['a'] = i;
					},
					function (t, e, n) {
						'use strict';
						var r = n(14),
							i = n(7),
							a = n(59),
							o = n(60),
							s = Object.prototype.hasOwnProperty;
						function u(t) {
							if (Object(r['a'])(t)) return !0;
							if (Object(i['a'])(t)) return !t.length;
							var e = Object(a['a'])(t);
							if ('Map' === e || 'Set' === e) return !t.size;
							if (Object(o['a'])(t)) return !Object.keys(t).length;
							for (var n in t) if (s.call(t, n)) return !1;
							return !0;
						}
						e['a'] = u;
					},
					function (t, e, n) {
						'use strict';
						var r = n(9),
							i = n(61);
						e['a'] = function (t, e, n) {
							return Object(r['a'])(n) ? !!n(t, e) : Object(i['a'])(t, e);
						};
					},
					function (t, e, n) {
						'use strict';
						var r = n(8),
							i = n(7),
							a = function (t, e) {
								if (!Object(i['a'])(t)) return t;
								var n = [];
								return (
									Object(r['a'])(t, function (t, r) {
										n.push(e(t, r));
									}),
									n
								);
							};
						e['a'] = a;
					},
					function (t, e, n) {
						'use strict';
						var r = n(14),
							i = n(29),
							a = function (t) {
								return t;
							};
						e['a'] = function (t, e) {
							void 0 === e && (e = a);
							var n = {};
							return (
								Object(i['a'])(t) &&
									!Object(r['a'])(t) &&
									Object.keys(t).forEach(function (r) {
										n[r] = e(t[r], r);
									}),
								n
							);
						};
					},
					function (t, e, n) {
						'use strict';
						var r = n(18);
						e['a'] = function (t, e, n) {
							var i = 0,
								a = Object(r['a'])(e) ? e.split('.') : e;
							while (t && i < a.length) t = t[a[i++]];
							return void 0 === t || i < a.length ? n : t;
						};
					},
					function (t, e, n) {
						'use strict';
						var r = n(29),
							i = n(18),
							a = n(12);
						e['a'] = function (t, e, n) {
							var o = t,
								s = Object(i['a'])(e) ? e.split('.') : e;
							return (
								s.forEach(function (t, e) {
									e < s.length - 1
										? (Object(r['a'])(o[t]) ||
												(o[t] = Object(a['a'])(s[e + 1]) ? [] : {}),
										  (o = o[t]))
										: (o[t] = n);
								}),
								t
							);
						};
					},
					function (t, e, n) {
						'use strict';
						var r = n(8),
							i = n(24),
							a = Object.prototype.hasOwnProperty;
						e['a'] = function (t, e) {
							if (null === t || !Object(i['a'])(t)) return {};
							var n = {};
							return (
								Object(r['a'])(e, function (e) {
									a.call(t, e) && (n[e] = t[e]);
								}),
								n
							);
						};
					},
					function (t, e, n) {
						'use strict';
						e['a'] = function (t, e, n) {
							var r,
								i,
								a,
								o,
								s = 0;
							n || (n = {});
							var u = function () {
									(s = !1 === n.leading ? 0 : Date.now()),
										(r = null),
										(o = t.apply(i, a)),
										r || (i = a = null);
								},
								c = function () {
									var c = Date.now();
									s || !1 !== n.leading || (s = c);
									var f = e - (c - s);
									return (
										(i = this),
										(a = arguments),
										f <= 0 || f > e
											? (r && (clearTimeout(r), (r = null)),
											  (s = c),
											  (o = t.apply(i, a)),
											  r || (i = a = null))
											: r || !1 === n.trailing || (r = setTimeout(u, f)),
										o
									);
								};
							return (
								(c.cancel = function () {
									clearTimeout(r), (s = 0), (r = i = a = null);
								}),
								c
							);
						};
					},
					function (t, e, n) {
						'use strict';
						var r = n(7);
						e['a'] = function (t) {
							return Object(r['a'])(t) ? Array.prototype.slice.call(t) : [];
						};
					},
					function (t, e, n) {
						'use strict';
						var r = {};
						e['a'] = function (t) {
							return (t = t || 'g'), r[t] ? (r[t] += 1) : (r[t] = 1), t + r[t];
						};
					},
					function (t, e, n) {
						'use strict';
						e['a'] = function () {};
					},
					function (t, e, n) {
						'use strict';
						e['a'] = function (t) {
							return t;
						};
					},
					function (t, e, n) {
						'use strict';
						e['a'] = a;
						var r = n(14),
							i = n(7);
						function a(t) {
							return Object(r['a'])(t)
								? 0
								: Object(i['a'])(t)
								? t.length
								: Object.keys(t).length;
						}
					},
					function (t, e, n) {
						'use strict';
						var r = (function () {
							function t() {
								this.map = {};
							}
							return (
								(t.prototype.has = function (t) {
									return void 0 !== this.map[t];
								}),
								(t.prototype.get = function (t, e) {
									var n = this.map[t];
									return void 0 === n ? e : n;
								}),
								(t.prototype.set = function (t, e) {
									this.map[t] = e;
								}),
								(t.prototype.clear = function () {
									this.map = {};
								}),
								(t.prototype.delete = function (t) {
									delete this.map[t];
								}),
								(t.prototype.size = function () {
									return Object.keys(this.map).length;
								}),
								t
							);
						})();
						e['a'] = r;
					},
					function (t, e, n) {
						'use strict';
						var r = n(0),
							i = (function () {
								function t(t) {
									r.mix(this, t), this._init();
								}
								var e = t.prototype;
								return (
									(e._init = function () {
										var t = this,
											e = t.start,
											n = t.end,
											r = Math.min(e.x, n.x),
											i = Math.max(e.x, n.x),
											a = Math.min(e.y, n.y),
											o = Math.max(e.y, n.y);
										(this.tl = { x: r, y: a }),
											(this.tr = { x: i, y: a }),
											(this.bl = { x: r, y: o }),
											(this.br = { x: i, y: o }),
											(this.width = i - r),
											(this.height = o - a);
									}),
									(e.reset = function (t, e) {
										(this.start = t), (this.end = e), this._init();
									}),
									(e.isInRange = function (t, e) {
										r.isObject(t) && ((e = t.y), (t = t.x));
										var n = this.tl,
											i = this.br;
										return n.x <= t && t <= i.x && n.y <= e && e <= i.y;
									}),
									t
								);
							})();
						t.exports = i;
					},
					function (t, e, n) {
						'use strict';
						var r = n(43);
						n(160), (t.exports = r);
					},
					function (t, e, n) {
						'use strict';
						var r = n(1),
							i = r(n(2)),
							a = r(n(3)),
							o = r(n(4));
						function s(t) {
							return function () {
								var e,
									n = (0, a['default'])(t);
								if (u()) {
									var r = (0, a['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, i['default'])(this, e);
							};
						}
						function u() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var c = n(43),
							f = (function (t) {
								(0, o['default'])(e, t);
								s(e);
								function e() {
									return t.apply(this, arguments) || this;
								}
								var n = e.prototype;
								return (
									(n._initDefaultCfg = function () {
										(this.type = 'cartesian'),
											(this.transposed = !1),
											(this.isRect = !0);
									}),
									(n.init = function (e, n) {
										t.prototype.init.call(this, e, n),
											(this.x = { start: e.x, end: n.x }),
											(this.y = { start: e.y, end: n.y });
									}),
									(n._convertPoint = function (t) {
										var e = this,
											n = e.transposed,
											r = n ? 'y' : 'x',
											i = n ? 'x' : 'y',
											a = e.x,
											o = e.y;
										return {
											x: a.start + (a.end - a.start) * t[r],
											y: o.start + (o.end - o.start) * t[i],
										};
									}),
									(n._invertPoint = function (t) {
										var e = this,
											n = e.transposed,
											r = n ? 'y' : 'x',
											i = n ? 'x' : 'y',
											a = e.x,
											o = e.y,
											s = {};
										return (
											(s[r] = (t.x - a.start) / (a.end - a.start)),
											(s[i] = (t.y - o.start) / (o.end - o.start)),
											s
										);
									}),
									e
								);
							})(c);
						(c.Cartesian = f), (c.Rect = f), (t.exports = f);
					},
					function (t, e, n) {
						'use strict';
						var r = n(1);
						(e.__esModule = !0),
							(e.Color = e.Size = e.Shape = e.Position = void 0);
						var i = r(n(162));
						e.Position = i['default'];
						var a = r(n(163));
						e.Shape = a['default'];
						var o = r(n(164));
						e.Size = o['default'];
						var s = r(n(165));
						e.Color = s['default'];
					},
					function (t, e, n) {
						'use strict';
						var r = n(1);
						(e.__esModule = !0), (e['default'] = void 0);
						var i = r(n(2)),
							a = r(n(3)),
							o = r(n(4)),
							s = n(20),
							u = r(n(32));
						function c(t) {
							return function () {
								var e,
									n = (0, a['default'])(t);
								if (f()) {
									var r = (0, a['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, i['default'])(this, e);
							};
						}
						function f() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var l = (function (t) {
								(0, o['default'])(e, t);
								c(e);
								function e(e) {
									var n;
									return (
										(n = t.call(this, e) || this),
										(n.names = ['x', 'y']),
										(n.type = 'position'),
										n
									);
								}
								var n = e.prototype;
								return (
									(n.mapping = function (t, e) {
										var n,
											r,
											i,
											a = this.scales,
											o = this.coord,
											u = a[0],
											c = a[1];
										if ((0, s.isNil)(t) || (0, s.isNil)(e)) return [];
										if ((0, s.isArray)(e) && (0, s.isArray)(t)) {
											(n = []), (r = []);
											for (
												var f = 0, l = 0, h = t.length, p = e.length;
												f < h && l < p;
												f++, l++
											)
												(i = o.convertPoint({
													x: u.scale(t[f]),
													y: c.scale(e[l]),
												})),
													n.push(i.x),
													r.push(i.y);
										} else if ((0, s.isArray)(e))
											(t = u.scale(t)),
												(r = []),
												(0, s.each)(e, function (e) {
													(e = c.scale(e)),
														(i = o.convertPoint({ x: t, y: e })),
														n && n !== i.x
															? ((0, s.isArray)(n) || (n = [n]), n.push(i.x))
															: (n = i.x),
														r.push(i.y);
												});
										else if ((0, s.isArray)(t))
											(e = c.scale(e)),
												(n = []),
												(0, s.each)(t, function (t) {
													(t = u.scale(t)),
														(i = o.convertPoint({ x: t, y: e })),
														r && r !== i.y
															? ((0, s.isArray)(r) || (r = [r]), r.push(i.y))
															: (r = i.y),
														n.push(i.x);
												});
										else {
											(t = u.scale(t)), (e = c.scale(e));
											var d = o.convertPoint({ x: t, y: e });
											(n = d.x), (r = d.y);
										}
										return [n, r];
									}),
									e
								);
							})(u['default']),
							h = l;
						e['default'] = h;
					},
					function (t, e, n) {
						'use strict';
						var r = n(1);
						(e.__esModule = !0), (e['default'] = void 0);
						var i = r(n(2)),
							a = r(n(3)),
							o = r(n(4)),
							s = r(n(32));
						function u(t) {
							return function () {
								var e,
									n = (0, a['default'])(t);
								if (c()) {
									var r = (0, a['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, i['default'])(this, e);
							};
						}
						function c() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var f = (function (t) {
								(0, o['default'])(e, t);
								u(e);
								function e(e) {
									var n;
									return (
										(n = t.call(this, e) || this),
										(n.names = ['shape']),
										(n.type = 'shape'),
										(n.gradient = null),
										n
									);
								}
								var n = e.prototype;
								return (
									(n.getLinearValue = function (t) {
										var e = this.values,
											n = Math.round((e.length - 1) * t);
										return e[n];
									}),
									e
								);
							})(s['default']),
							l = f;
						e['default'] = l;
					},
					function (t, e, n) {
						'use strict';
						var r = n(1);
						(e.__esModule = !0), (e['default'] = void 0);
						var i = r(n(2)),
							a = r(n(3)),
							o = r(n(4)),
							s = r(n(32));
						function u(t) {
							return function () {
								var e,
									n = (0, a['default'])(t);
								if (c()) {
									var r = (0, a['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, i['default'])(this, e);
							};
						}
						function c() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var f = (function (t) {
								(0, o['default'])(e, t);
								u(e);
								function e(e) {
									var n;
									return (
										(n = t.call(this, e) || this),
										(n.names = ['size']),
										(n.type = 'size'),
										(n.gradient = null),
										n
									);
								}
								return e;
							})(s['default']),
							l = f;
						e['default'] = l;
					},
					function (t, e, n) {
						'use strict';
						var r = n(1);
						(e.__esModule = !0), (e['default'] = void 0);
						var i = r(n(2)),
							a = r(n(3)),
							o = r(n(4)),
							s = n(20),
							u = r(n(32)),
							c = r(n(166));
						function f(t) {
							return function () {
								var e,
									n = (0, a['default'])(t);
								if (l()) {
									var r = (0, a['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, i['default'])(this, e);
							};
						}
						function l() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var h = (function (t) {
								(0, o['default'])(e, t);
								f(e);
								function e(e) {
									var n;
									return (
										(n = t.call(this, e) || this),
										(n.names = ['color']),
										(n.type = 'color'),
										(n.gradient = null),
										(0, s.isString)(n.values) && (n.linear = !0),
										n
									);
								}
								var n = e.prototype;
								return (
									(n.getLinearValue = function (t) {
										var e = this.gradient;
										if (!e) {
											var n = this.values;
											(e = c['default'].gradient(n)), (this.gradient = e);
										}
										return e(t);
									}),
									e
								);
							})(u['default']),
							p = h;
						e['default'] = p;
					},
					function (t, e, n) {
						'use strict';
						(e.__esModule = !0), (e['default'] = void 0);
						var r = n(20);
						function i(t, e, n, r) {
							var i = t[r] + (e[r] - t[r]) * n;
							return i;
						}
						function a(t) {
							return '#' + o(t[0]) + o(t[1]) + o(t[2]);
						}
						function o(t) {
							return (
								(t = Math.round(t)),
								(t = t.toString(16)),
								1 === t.length && (t = '0' + t),
								t
							);
						}
						function s(t, e) {
							var n = t.length - 1,
								r = Math.floor(n * e),
								o = n * e - r,
								s = t[r],
								u = r === n ? s : t[r + 1],
								c = a([i(s, u, o, 0), i(s, u, o, 1), i(s, u, o, 2)]);
							return c;
						}
						function u(t) {
							var e = [];
							return (
								e.push(parseInt(t.substr(1, 2), 16)),
								e.push(parseInt(t.substr(3, 2), 16)),
								e.push(parseInt(t.substr(5, 2), 16)),
								e
							);
						}
						var c = {
								black: '#000000',
								blue: '#0000ff',
								grey: '#808080',
								green: '#008000',
								orange: '#ffa500',
								pink: '#ffc0cb',
								purple: '#800080',
								red: '#ff0000',
								white: '#ffffff',
								yellow: '#ffff00',
							},
							f = {
								toHex: function (t) {
									if (c[t]) return c[t];
									if ('#' === t[0]) {
										if (7 === t.length) return t;
										var e = t.replace(
											/^#?([a-f\d])([a-f\d])([a-f\d])$/i,
											function (t, e, n, r) {
												return '#' + e + e + n + n + r + r;
											},
										);
										return (c[t] = e), e;
									}
									var n = t.match(
										/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i,
									);
									return n.shift(), (n = a(n)), (c[t] = n), n;
								},
								hex2arr: u,
								gradient: function (t) {
									var e = [];
									return (
										(0, r.isString)(t) && (t = t.split('-')),
										(0, r.each)(t, function (t) {
											-1 === t.indexOf('#') && (t = f.toHex(t)), e.push(u(t));
										}),
										function (t) {
											return s(e, t);
										}
									);
								},
							},
							l = f;
						e['default'] = l;
					},
					function (t, e, n) {
						'use strict';
						var r = n(0),
							i = n(6),
							a = n(168),
							o = {
								linear: 'Linear',
								cat: 'Cat',
								timeCat: 'TimeCat',
								identity: 'Identity',
							};
						function s(t) {
							if (!t.isPolar) return !1;
							var e = t.startAngle,
								n = t.endAngle;
							return !(!r.isNil(e) && !r.isNil(n) && n - e < 2 * Math.PI);
						}
						function u(t) {
							Object.keys(t).forEach(function (e) {
								delete t[e];
							});
						}
						var c = (function () {
							function t(t) {
								(this.defs = {}), (this.scales = {}), r.mix(this, t);
							}
							var e = t.prototype;
							return (
								(e.setFieldDef = function (t, e) {
									var n = this.defs;
									r.isObject(t) ? r.mix(n, t) : (n[t] = e), this.updateScales();
								}),
								(e._getDef = function (t) {
									var e = this.defs,
										n = null;
									return (
										(i.scales[t] || e[t]) &&
											((n = r.mix({}, i.scales[t])),
											r.each(e[t], function (t, e) {
												r.isNil(t) ? delete n[e] : (n[e] = t);
											})),
										n
									);
								}),
								(e._getDefaultType = function (t, e, n) {
									if (n && n.type) return n.type;
									var i = 'linear',
										a = r.Array.firstValue(e, t);
									return (
										r.isArray(a) && (a = a[0]), r.isString(a) && (i = 'cat'), i
									);
								}),
								(e._getScaleDef = function (t, e, n, i) {
									var a;
									a = i && i.values ? i.values : r.Array.values(n, e);
									var o = { field: e, values: a };
									if ('cat' !== t && 'timeCat' !== t) {
										if (!i || !i.min || !i.max) {
											var s = r.Array.getRange(a),
												u = s.min,
												c = s.max;
											(o.min = u), (o.max = c), (o.nice = !0);
										}
									} else o.isRounding = !1;
									return o;
								}),
								(e._adjustRange = function (t, e) {
									var n = e.range,
										r = e.values;
									if ('linear' === t || n || !r) return e;
									var a = r.length;
									if (1 === a) e.range = [0.5, 1];
									else {
										var o = this.chart,
											u = o.get('coord'),
											c = i.widthRatio.multiplePie,
											f = 0;
										s(u)
											? u.transposed
												? ((f = (1 / a) * c), (e.range = [f / 2, 1 - f / 2]))
												: (e.range = [0, 1 - 1 / a])
											: ((f = ((1 / a) * 1) / 2), (e.range = [f, 1 - f]));
									}
									return e;
								}),
								(e._getScaleCfg = function (t, e) {
									var n = this,
										i = n._getDef(t);
									if (!e || !e.length)
										return i && i.type
											? ((i.field = t), { type: o[i.type], cfg: i })
											: {
													type: 'Identity',
													cfg: { value: t, field: t.toString(), values: [t] },
											  };
									var a = e[0],
										s = a[t];
									if (
										(null === s && (s = r.Array.firstValue(e, t)),
										r.isNumber(t) || (r.isNil(s) && !i))
									)
										return {
											type: 'Identity',
											cfg: { value: t, field: t.toString(), values: [t] },
										};
									var u = n._getDefaultType(t, e, i),
										c = n._getScaleDef(u, t, e, i);
									return (
										i && r.mix(c, i),
										(c = this._adjustRange(u, c)),
										{ type: o[u], cfg: c }
									);
								}),
								(e.createScale = function (t, e) {
									var n = this.scales,
										r = this._getScaleCfg(t, e),
										i = r.type,
										s = r.cfg,
										u = n[t];
									if (u && o[u.type] === i) return u.change(s), u;
									var c = new a[i](s);
									return (n[t] = c), c;
								}),
								(e._updateScale = function (t) {
									var e = t.field,
										n = this.chart._getScaleData(e),
										r = this._getScaleCfg(e, n),
										i = r.cfg;
									t.change(i);
								}),
								(e.updateScales = function () {
									var t = this,
										e = this.scales;
									r.each(e, function (e) {
										t._updateScale(e);
									});
								}),
								(e.adjustStartZero = function (t) {
									var e = this.defs,
										n = t.field,
										r = t.min,
										i = t.max;
									(e[n] && e[n].min) ||
										(r > 0
											? t.change({ min: 0 })
											: i < 0 && t.change({ max: 0 }));
								}),
								(e.clear = function () {
									u(this.defs), u(this.scales), (this.data = null);
								}),
								t
							);
						})();
						t.exports = c;
					},
					function (t, e, n) {
						'use strict';
						var r = n(26);
						n(169), n(172), n(69), (t.exports = r);
					},
					function (t, e, n) {
						function r(t, e) {
							(t.prototype = Object.create(e.prototype)),
								(t.prototype.constructor = t),
								(t.__proto__ = e);
						}
						var i = n(35),
							a = n(15),
							o = n(26),
							s = n(170),
							u = (function (t) {
								function e() {
									return t.apply(this, arguments) || this;
								}
								r(e, t);
								var n = e.prototype;
								return (
									(n._initDefaultCfg = function () {
										t.prototype._initDefaultCfg.call(this);
										var e = this;
										(e.type = 'linear'),
											(e.isLinear = !0),
											(e.nice = !1),
											(e.min = null),
											(e.minLimit = null),
											(e.max = null),
											(e.maxLimit = null),
											(e.tickCount = null),
											(e.tickInterval = null),
											(e.minTickInterval = null),
											(e.snapArray = null);
									}),
									(n.init = function () {
										var t = this;
										if (t.ticks) {
											var e = t.ticks,
												n = t.translate(e[0]),
												r = t.translate(e[e.length - 1]);
											(i(t.min) || t.min > n) && (t.min = n),
												(i(t.max) || t.max < r) && (t.max = r);
										} else
											(t.min = t.translate(t.min)),
												(t.max = t.translate(t.max)),
												t.initTicks();
									}),
									(n.calculateTicks = function () {
										var t = this.min,
											e = this.max,
											n = this.minLimit,
											r = this.maxLimit,
											i = this.tickCount,
											a = this.tickInterval,
											o = this.minTickInterval,
											u = this.snapArray;
										if (1 === i)
											throw new Error("linear scale'tickCount should not be 1");
										if (e < t)
											throw new Error(
												'max: ' + e + ' should not be less than min: ' + t,
											);
										var c = s({
											min: t,
											max: e,
											minLimit: n,
											maxLimit: r,
											minCount: i,
											maxCount: i,
											interval: a,
											minTickInterval: o,
											snapArray: u,
										});
										return c.ticks;
									}),
									(n.initTicks = function () {
										var t = this,
											e = t.calculateTicks();
										if (t.nice)
											(t.ticks = e), (t.min = e[0]), (t.max = e[e.length - 1]);
										else {
											var n = [];
											a(e, function (e) {
												e >= t.min && e <= t.max && n.push(e);
											}),
												n.length || (n.push(t.min), n.push(t.max)),
												(t.ticks = n);
										}
									}),
									(n.scale = function (t) {
										if (i(t)) return NaN;
										var e = this.max,
											n = this.min;
										if (e === n) return 0;
										var r = (t - n) / (e - n),
											a = this.rangeMin(),
											o = this.rangeMax();
										return a + r * (o - a);
									}),
									(n.invert = function (t) {
										var e =
											(t - this.rangeMin()) /
											(this.rangeMax() - this.rangeMin());
										return this.min + e * (this.max - this.min);
									}),
									e
								);
							})(o);
						(o.Linear = u), (t.exports = u);
					},
					function (t, e, n) {
						var r = n(35),
							i = n(36),
							a = n(171),
							o = 5,
							s = 7,
							u = [
								0,
								1,
								1.2,
								1.5,
								1.6,
								2,
								2.2,
								2.4,
								2.5,
								3,
								4,
								5,
								6,
								7.5,
								8,
								10,
							],
							c = [0, 1, 2, 4, 5, 10],
							f = 1e-12;
						t.exports = function (t) {
							var e = t.min,
								n = t.max,
								l = t.interval,
								h = t.minTickInterval,
								p = [],
								d = t.minCount || o,
								v = t.maxCount || s,
								g = d === v,
								y = r(t.minLimit) ? -1 / 0 : t.minLimit,
								x = r(t.maxLimit) ? 1 / 0 : t.maxLimit,
								m = (d + v) / 2,
								_ = m,
								b = t.snapArray ? t.snapArray : g ? u : c;
							if (
								(e === y && n === x && g && (l = (n - e) / (_ - 1)),
								r(e) && (e = 0),
								r(n) && (n = 0),
								Math.abs(n - e) < f &&
									(0 === e ? (n = 1) : e > 0 ? (e = 0) : (n = 0),
									n - e < 5 && !l && n - e >= 1 && (l = 1)),
								r(l))
							) {
								var S = (n - e) / (m - 1);
								(l = a.snapFactorTo(S, b, 'ceil')),
									v !== d &&
										((_ = parseInt((n - e) / l, 10)),
										_ > v && (_ = v),
										_ < d && (_ = d),
										(l = a.snapFactorTo((n - e) / (_ - 1), b, 'floor')));
							}
							if ((i(h) && l < h && (l = h), t.interval || v !== d))
								(n = Math.min(a.snapMultiple(n, l, 'ceil'), x)),
									(e = Math.max(a.snapMultiple(e, l, 'floor'), y)),
									(_ = Math.round((n - e) / l)),
									(e = a.fixedBase(e, l)),
									(n = a.fixedBase(n, l));
							else {
								m = parseInt(m, 10);
								var P,
									w = (n + e) / 2,
									C = a.snapMultiple(w, l, 'ceil'),
									M = Math.floor((m - 2) / 2),
									A = C + M * l;
								P = m % 2 === 0 ? C - M * l : C - (M + 1) * l;
								var O = null;
								while (A < n && (null === O || A > O))
									(O = A), (A = a.fixedBase(A + l, l));
								var R = null;
								while (P > e && (null === R || P < R))
									(R = P), (P = a.fixedBase(P - l, l));
								(n = A), (e = P);
							}
							(n = Math.min(n, x)), (e = Math.max(e, y)), p.push(e);
							for (var T = 1; T < _; T++) {
								var D = a.fixedBase(l * T + e, l);
								D < n && p.push(D);
							}
							return (
								p[p.length - 1] < n && p.push(n),
								{ min: e, max: n, interval: l, count: _, ticks: p }
							);
						};
					},
					function (t, e) {
						var n = 12;
						function r(t) {
							var e = 1;
							if (t === 1 / 0 || t === -1 / 0)
								throw new Error('Not support Infinity!');
							if (t < 1) {
								var r = 0;
								while (t < 1) (e /= 10), (t *= 10), r++;
								e.toString().length > n && (e = parseFloat(e.toFixed(r)));
							} else while (t > 10) (e *= 10), (t /= 10);
							return e;
						}
						function i(t, e) {
							var n = t.length;
							if (0 === n) return NaN;
							var r = t[0];
							if (e < t[0]) return NaN;
							if (e >= t[n - 1]) return t[n - 1];
							for (var i = 1; i < t.length; i++) {
								if (e < t[i]) break;
								r = t[i];
							}
							return r;
						}
						function a(t, e) {
							var n,
								r = t.length;
							if (0 === r) return NaN;
							if (e > t[r - 1]) return NaN;
							if (e < t[0]) return t[0];
							for (var i = 1; i < t.length; i++)
								if (e <= t[i]) {
									n = t[i];
									break;
								}
							return n;
						}
						var o = {
							snapFactorTo: function (t, e, i) {
								if (isNaN(t)) return NaN;
								var a = 1;
								if (0 !== t) {
									t < 0 && (a = -1), (t *= a);
									var s = r(t);
									(a *= s), (t /= s);
								}
								t =
									'floor' === i
										? o.snapFloor(e, t)
										: 'ceil' === i
										? o.snapCeiling(e, t)
										: o.snapTo(e, t);
								var u = parseFloat((t * a).toPrecision(n));
								if (Math.abs(a) < 1 && u.toString().length > n) {
									var c = parseInt(1 / a),
										f = a > 0 ? 1 : -1;
									u = (t / c) * f;
								}
								return u;
							},
							snapMultiple: function (t, e, n) {
								var r;
								return (
									(r =
										'ceil' === n
											? Math.ceil(t / e)
											: 'floor' === n
											? Math.floor(t / e)
											: Math.round(t / e)),
									r * e
								);
							},
							snapTo: function (t, e) {
								var n = i(t, e),
									r = a(t, e);
								if (isNaN(n) || isNaN(r)) {
									if (t[0] >= e) return t[0];
									var o = t[t.length - 1];
									if (o <= e) return o;
								}
								return Math.abs(e - n) < Math.abs(r - e) ? n : r;
							},
							snapFloor: function (t, e) {
								return i(t, e);
							},
							snapCeiling: function (t, e) {
								return a(t, e);
							},
							fixedBase: function (t, e) {
								var n = e.toString(),
									r = n.indexOf('.'),
									i = n.indexOf('e-');
								if (r < 0 && i < 0) return Math.round(t);
								var a =
									i >= 0
										? parseInt(n.substr(i + 2), 10)
										: n.substr(r + 1).length;
								return a > 20 && (a = 20), parseFloat(t.toFixed(a));
							},
						};
						t.exports = o;
					},
					function (t, e, n) {
						function r(t, e) {
							(t.prototype = Object.create(e.prototype)),
								(t.prototype.constructor = t),
								(t.__proto__ = e);
						}
						var i = n(26),
							a = n(36),
							o = (function (t) {
								function e() {
									return t.apply(this, arguments) || this;
								}
								r(e, t);
								var n = e.prototype;
								return (
									(n._initDefaultCfg = function () {
										t.prototype._initDefaultCfg.call(this),
											(this.isIdentity = !0),
											(this.type = 'identity'),
											(this.value = null);
									}),
									(n.getText = function () {
										return this.value.toString();
									}),
									(n.scale = function (t) {
										return this.value !== t && a(t) ? t : this.range[0];
									}),
									(n.invert = function () {
										return this.value;
									}),
									e
								);
							})(i);
						(i.Identity = o), (t.exports = o);
					},
					function (t, e, n) {
						'use strict';
						var r = n(0),
							i = n(174),
							a = n(6),
							o = n(16),
							s = o.Shape;
						function u(t) {
							var e = t.slice(0);
							if (e.length > 0) {
								var n = e[0],
									r = e[e.length - 1];
								0 !== n.value && e.unshift({ value: 0 }),
									1 !== r.value && e.push({ value: 1 });
							}
							return e;
						}
						var c = (function () {
							function t(t) {
								(this.axisCfg = {}),
									(this.frontPlot = null),
									(this.backPlot = null),
									(this.axes = {}),
									r.mix(this, t);
							}
							var e = t.prototype;
							return (
								(e._isHide = function (t) {
									var e = this.axisCfg;
									return !e || !1 === e[t];
								}),
								(e._getLinePosition = function (t, e, n, r) {
									var i = '',
										a = t.field,
										o = this.axisCfg;
									return (
										o[a] && o[a].position
											? (i = o[a].position)
											: 'x' === e
											? (i = r ? 'left' : 'bottom')
											: 'y' === e &&
											  ((i = n ? 'right' : 'left'), r && (i = 'bottom')),
										i
									);
								}),
								(e._getLineCfg = function (t, e, n) {
									var r,
										i,
										a = 1;
									return (
										'x' === e
											? ((r = { x: 0, y: 0 }), (i = { x: 1, y: 0 }))
											: 'right' === n
											? ((r = { x: 1, y: 0 }), (i = { x: 1, y: 1 }))
											: ((r = { x: 0, y: 0 }), (i = { x: 0, y: 1 }), (a = -1)),
										t.transposed && (a *= -1),
										{
											offsetFactor: a,
											start: t.convertPoint(r),
											end: t.convertPoint(i),
										}
									);
								}),
								(e._getCircleCfg = function (t) {
									return {
										startAngle: t.startAngle,
										endAngle: t.endAngle,
										center: t.center,
										radius: t.circleRadius,
									};
								}),
								(e._getRadiusCfg = function (t) {
									var e,
										n,
										r = t.transposed;
									return (
										r
											? ((e = { x: 0, y: 0 }), (n = { x: 1, y: 0 }))
											: ((e = { x: 0, y: 0 }), (n = { x: 0, y: 1 })),
										{
											offsetFactor: -1,
											start: t.convertPoint(e),
											end: t.convertPoint(n),
										}
									);
								}),
								(e._getAxisCfg = function (t, e, n, i, o) {
									var u = this,
										c = this.axisCfg,
										f = e.getTicks(),
										l = r.deepMix(
											{
												ticks: f,
												frontContainer: this.frontPlot,
												backContainer: this.backPlot,
											},
											o,
											c[e.field],
										),
										h = [],
										p = l.label,
										d = f.length,
										v = 0,
										g = 0,
										y = p;
									return (
										r.each(f, function (t, e) {
											if (r.isFunction(p)) {
												var n = p(t.text, e, d);
												y = n ? r.mix({}, a._defaultAxis.label, n) : null;
											}
											if (y) {
												var i = {};
												y.textAlign && (i.textAlign = y.textAlign),
													y.textBaseline && (i.textBaseline = y.textBaseline);
												var o = new s.Text({
													className: 'axis-label',
													attrs: r.mix(
														{
															x: 0,
															y: 0,
															text: t.text,
															fontFamily: u.chart
																.get('canvas')
																.get('fontFamily'),
														},
														y,
													),
													value: t.value,
													textStyle: i,
													top: y.top,
													context: u.chart.get('canvas').get('context'),
												});
												h.push(o);
												var c = o.getBBox(),
													f = c.width,
													l = c.height;
												(v = Math.max(v, f)), (g = Math.max(g, l));
											}
										}),
										(l.labels = h),
										(l.maxWidth = v),
										(l.maxHeight = g),
										l
									);
								}),
								(e._createAxis = function (t, e, n, r, i) {
									void 0 === i && (i = '');
									var o,
										s,
										u,
										c = this,
										f = t.type,
										l = t.transposed;
									if ('cartesian' === f || 'rect' === f) {
										var h = c._getLinePosition(e, r, i, l);
										(u = a.axis[h]), (u.position = h), (o = 'Line'), (s = h);
									} else
										('x' === r && !l) || ('y' === r && l)
											? ((u = a.axis.circle), (o = 'Circle'), (s = 'circle'))
											: ((u = a.axis.radius), (o = 'Line'), (s = 'radius'));
									var p = c._getAxisCfg(t, e, n, r, u);
									(p.type = o),
										(p.dimType = r),
										(p.verticalScale = n),
										(p.index = i),
										(this.axes[s] = p);
								}),
								(e.createAxis = function (t, e, n) {
									var a = this;
									e && !a._isHide(e.field) && a._createAxis(t, e, n[0], 'x'),
										r.each(n, function (n, r) {
											a._isHide(n.field) || a._createAxis(t, n, e, 'y', r);
										});
									var o = this.axes,
										s = a.chart;
									if (s._isAutoPadding()) {
										var c = r.parsePadding(s.get('padding')),
											f = r.parsePadding(s.get('appendPadding')),
											l = s.get('legendRange') || {
												top: 0,
												right: 0,
												bottom: 0,
												left: 0,
											},
											h = [
												'auto' === c[0] ? l.top + 2 * f[0] : c[0],
												'auto' === c[1] ? l.right + f[1] : c[1],
												'auto' === c[2] ? l.bottom + f[2] : c[2],
												'auto' === c[3] ? l.left + f[3] : c[3],
											];
										if (t.isPolar) {
											var p = o.circle;
											if (p) {
												var d = p.maxHeight,
													v = p.maxWidth,
													g = p.labelOffset;
												(h[0] += d + g),
													(h[1] += v + g),
													(h[2] += d + g),
													(h[3] += v + g);
											}
										} else {
											if (o.right && 'auto' === c[1]) {
												var y = o.right,
													x = y.maxWidth,
													m = y.labelOffset;
												h[1] += x + m;
											}
											if (o.left && 'auto' === c[3]) {
												var _ = o.left,
													b = _.maxWidth,
													S = _.labelOffset;
												h[3] += b + S;
											}
											if (o.bottom && 'auto' === c[2]) {
												var P = o.bottom,
													w = P.maxHeight,
													C = P.labelOffset;
												h[2] += w + C;
											}
										}
										s.set('_padding', h), s._updateLayout(h);
									}
									r.each(o, function (e) {
										var n,
											o = e.type,
											s = e.grid,
											c = e.verticalScale,
											f = e.ticks,
											l = e.dimType,
											h = e.position,
											p = e.index;
										if (
											(t.isPolar
												? 'Line' === o
													? (n = a._getRadiusCfg(t))
													: 'Circle' === o && (n = a._getCircleCfg(t))
												: (n = a._getLineCfg(t, l, h)),
											s && c)
										) {
											var d = [],
												v = u(c.getTicks());
											r.each(f, function (e) {
												var n = [];
												r.each(v, function (r) {
													var i = 'x' === l ? e.value : r.value,
														a = 'x' === l ? r.value : e.value;
													if (i >= 0 && i <= 1 && a >= 0 && a <= 1) {
														var o = t.convertPoint({ x: i, y: a });
														n.push(o);
													}
												}),
													d.push({
														points: n,
														_id: 'axis-' + l + p + '-grid-' + e.tickValue,
													});
											}),
												(e.gridPoints = d),
												t.isPolar &&
													((e.center = t.center),
													(e.startAngle = t.startAngle),
													(e.endAngle = t.endAngle));
										}
										(n._id = 'axis-' + l),
											r.isNil(p) || (n._id = 'axis-' + l + p),
											new i[o](r.mix(e, n));
									});
								}),
								(e.clear = function () {
									(this.axes = {}),
										this.frontPlot.clear(),
										this.backPlot.clear();
								}),
								t
							);
						})();
						t.exports = c;
					},
					function (t, e, n) {
						'use strict';
						var r = n(45);
						n(175), (t.exports = r);
					},
					function (t, e, n) {
						'use strict';
						var r = n(1),
							i = r(n(2)),
							a = r(n(3)),
							o = r(n(4));
						function s(t) {
							return function () {
								var e,
									n = (0, a['default'])(t);
								if (u()) {
									var r = (0, a['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, i['default'])(this, e);
							};
						}
						function u() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var c = n(0),
							f = n(45),
							l = (function (t) {
								(0, o['default'])(e, t);
								s(e);
								function e() {
									return t.apply(this, arguments) || this;
								}
								var n = e.prototype;
								return (
									(n._initDefaultCfg = function () {
										t.prototype._initDefaultCfg.call(this),
											(this.start = null),
											(this.end = null);
									}),
									(n.getOffsetPoint = function (t) {
										var e = this.start,
											n = this.end;
										return {
											x: e.x + (n.x - e.x) * t,
											y: e.y + (n.y - e.y) * t,
										};
									}),
									(n.getAxisVector = function () {
										var t = this.start,
											e = this.end;
										return [e.x - t.x, e.y - t.y];
									}),
									(n.drawLine = function (t) {
										var e = this.getContainer(t.top),
											n = this.start,
											r = this.end;
										e.addShape('line', {
											className: 'axis-line',
											attrs: c.mix({ x1: n.x, y1: n.y, x2: r.x, y2: r.y }, t),
										});
									}),
									e
								);
							})(f);
						(f.Line = l), (t.exports = l);
					},
					function (t, e, n) {
						'use strict';
						var r = n(1),
							i = r(n(2)),
							a = r(n(3)),
							o = r(n(4)),
							s = r(n(42)),
							u = r(n(177)),
							c = r(n(178));
						function f(t) {
							return function () {
								var e,
									n = (0, a['default'])(t);
								if (l()) {
									var r = (0, a['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, i['default'])(this, e);
							};
						}
						function l() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var h = n(0),
							p = n(66),
							d = n(67),
							v = n(70),
							g = v.requestAnimationFrame,
							y = (function (t) {
								(0, o['default'])(n, t);
								f(n);
								var e = n.prototype;
								function n(e) {
									var n;
									return (
										(n = t.call(this) || this),
										(n._attrs = h.mix({ type: 'canvas', children: [] }, e)),
										n._initPixelRatio(),
										n._initCanvas(),
										n
									);
								}
								return (
									(e.get = function (t) {
										return this._attrs[t];
									}),
									(e.set = function (t, e) {
										this._attrs[t] = e;
									}),
									(e._initPixelRatio = function () {
										var t = this.get('pixelRatio');
										t || this.set('pixelRatio', h.getPixelRatio());
									}),
									(e.beforeDraw = function () {
										var t = this._attrs.context,
											e = this._attrs.el;
										t && t.clearRect && t.clearRect(0, 0, e.width, e.height);
									}),
									(e._initCanvas = function () {
										var t,
											e = this,
											n = e.get('el'),
											r = e.get('context');
										if (!n && !r)
											throw new Error(
												'Please specify the id, el or context of the chart!',
											);
										(t = n
											? h.isString(n)
												? h.getDomById(n)
												: n
											: c['default'].create(r)),
											r &&
												t &&
												!t.getContext &&
												(t.getContext = function () {
													return r;
												});
										var i = e.get('width');
										i || (i = h.getWidth(t));
										var a = e.get('height');
										a || (a = h.getHeight(t)),
											e.set('canvas', this),
											e.set('el', t),
											e.set('context', r || t.getContext('2d')),
											e.changeSize(i, a);
										var o = new u['default']({ canvas: this, el: t });
										e.set('eventController', o);
									}),
									(e.changeSize = function (t, e) {
										var n = this.get('pixelRatio'),
											r = this.get('el');
										if (
											(r.style &&
												((r.style.width = t + 'px'),
												(r.style.height = e + 'px')),
											h.isCanvasElement(r) &&
												((r.width = t * n), (r.height = e * n), 1 !== n))
										) {
											var i = this.get('context');
											i.scale(n, n);
										}
										this.set('width', t), this.set('height', e);
									}),
									(e.getWidth = function () {
										var t = this.get('pixelRatio'),
											e = this.get('width');
										return e * t;
									}),
									(e.getHeight = function () {
										var t = this.get('pixelRatio'),
											e = this.get('height');
										return e * t;
									}),
									(e.getPointByClient = function (t, e) {
										var n = this.get('el'),
											r = n.getBoundingClientRect(),
											i = r.right - r.left,
											a = r.bottom - r.top;
										return {
											x: (t - r.left) * (n.width / i),
											y: (e - r.top) * (n.height / a),
										};
									}),
									(e._beginDraw = function () {
										this._attrs.toDraw = !0;
									}),
									(e._endDraw = function () {
										this._attrs.toDraw = !1;
									}),
									(e.draw = function () {
										var t = this;
										function e() {
											t.set(
												'animateHandler',
												g(function () {
													t.set('animateHandler', void 0),
														t.get('toDraw') && e();
												}),
											),
												t.beforeDraw();
											try {
												for (
													var n = t._attrs.context,
														r = t._attrs.children,
														i = 0,
														a = r.length;
													i < a;
													i++
												) {
													var o = r[i];
													o.draw(n);
												}
												n.draw && n.draw();
											} catch (s) {
												console.warn('error in draw canvas, detail as:'),
													console.warn(s),
													t._endDraw();
											}
											t._endDraw();
										}
										t.get('destroyed') ||
											(t.get('animateHandler') ? this._beginDraw() : e());
									}),
									(e.destroy = function () {
										if (!this.get('destroyed')) {
											var t = this.get('el');
											(t.width = 0),
												(t.height = 0),
												this.clear(),
												(this._attrs = {}),
												this.set('destroyed', !0);
										}
									}),
									(e.isDestroyed = function () {
										return this.get('destroyed');
									}),
									n
								);
							})(s['default']);
						h.mix(y.prototype, p, {
							getGroupClass: function () {
								return d;
							},
						}),
							(t.exports = y);
					},
					function (t, e, n) {
						'use strict';
						(e.__esModule = !0), (e['default'] = void 0);
						var r = n(62),
							i = n(0),
							a = function (t, e) {
								var n = e.x - t.x,
									r = e.y - t.y;
								return Math.abs(n) > Math.abs(r)
									? n > 0
										? 'right'
										: 'left'
									: r > 0
									? 'down'
									: 'up';
							},
							o = function (t, e) {
								var n = Math.abs(e.x - t.x),
									r = Math.abs(e.y - t.y);
								return Math.sqrt(n * n + r * r);
							},
							s = function (t, e) {
								var n = t.x + (e.x - t.x) / 2,
									r = t.y + (e.y - t.y) / 2;
								return { x: n, y: r };
							},
							u = function (t, e) {
								if (t) {
									for (var n = [], a = t.length, o = 0; o < a; o++) {
										var s = t[o],
											u = s.x,
											c = s.y,
											f = s.clientX,
											l = s.clientY,
											h = void 0;
										(h =
											(0, i.isNumber)(u) || (0, i.isNumber)(c)
												? { x: u, y: c }
												: (0, r.getRelativePosition)({ x: f, y: l }, e)),
											n.push(h);
									}
									return n;
								}
							},
							c = 250,
							f = (function () {
								function t(t) {
									var e = this,
										n = t.canvas,
										r = t.el;
									(this._click = function (t) {
										e.emitEvent('click', t);
									}),
										(this._start = function (t) {
											var n = u(t.touches, e.canvas);
											n &&
												((t.points = n),
												e.emitEvent('touchstart', t),
												e.reset(),
												(e.startTime = Date.now()),
												(e.startPoints = n),
												n.length > 1
													? ((e.startDistance = o(n[0], n[1])),
													  (e.center = s(n[0], n[1])))
													: (e.pressTimeout = setTimeout(function () {
															var n = 'press';
															(t.direction = 'none'),
																e.emitStart(n, t),
																e.emitEvent(n, t),
																(e.eventType = n);
													  }, c)));
										}),
										(this._move = function (t) {
											var n = u(t.touches, e.canvas);
											if (n) {
												e.clearPressTimeout(),
													(t.points = n),
													e.emitEvent('touchmove', t);
												var r = e.startPoints;
												if (r)
													if (n.length > 1) {
														var i = e.startDistance,
															s = o(n[0], n[1]);
														(t.zoom = s / i),
															(t.center = e.center),
															e.emitStart('pinch', t),
															e.emitEvent('pinch', t);
													} else {
														var c = n[0].x - r[0].x,
															f = n[0].y - r[0].y,
															l = e.direction || a(r[0], n[0]);
														e.direction = l;
														var h = e.getEventType(n);
														(t.direction = l),
															(t.deltaX = c),
															(t.deltaY = f),
															e.emitStart(h, t),
															e.emitEvent(h, t);
														var p = e.lastMoveTime,
															d = Date.now();
														d - p > 0 &&
															((e.prevMoveTime = p),
															(e.prevMovePoints = e.lastMovePoints),
															(e.lastMoveTime = d),
															(e.lastMovePoints = n));
													}
											}
										}),
										(this._end = function (t) {
											e.emitEnd(t), e.emitEvent('touchend', t);
											var n = e.lastMoveTime,
												r = Date.now();
											if (r - n < 100) {
												var i = e.prevMoveTime || e.startTime,
													s = n - i;
												if (s > 0) {
													var u = e.prevMovePoints || e.startPoints,
														c = e.lastMovePoints,
														f = o(u[0], c[0]) / s;
													f > 0.3 &&
														((t.velocity = f),
														(t.direction = a(u[0], c[0])),
														e.emitEvent('swipe', t));
												}
											}
											e.reset();
											var l = t.touches;
											l && l.length > 0 && e._start(t);
										}),
										(this._cancel = function (t) {
											e.emitEvent('touchcancel', t), e.reset();
										}),
										(this.canvas = n),
										this.delegateEvent(r),
										(this.processEvent = {});
								}
								var e = t.prototype;
								return (
									(e.delegateEvent = function (t) {
										t.addEventListener('click', this._click),
											t.addEventListener('touchstart', this._start),
											t.addEventListener('touchmove', this._move),
											t.addEventListener('touchend', this._end),
											t.addEventListener('touchcancel', this._cancel);
									}),
									(e.emitEvent = function (t, e) {
										var n = this.canvas;
										n.emit(t, e);
									}),
									(e.getEventType = function (t) {
										var e,
											n = this.eventType,
											r = this.canvas,
											i = this.startTime,
											a = this.startPoints;
										if (n) return n;
										var s = r.__events.pan;
										if (s && s.length) {
											var u = Date.now();
											e = u - i > c && o(a[0], t[0]) < 10 ? 'press' : 'pan';
										} else e = 'press';
										return (this.eventType = e), e;
									}),
									(e.enable = function (t) {
										this.processEvent[t] = !0;
									}),
									(e.isProcess = function (t) {
										return this.processEvent[t];
									}),
									(e.emitStart = function (t, e) {
										this.isProcess(t) ||
											(this.enable(t), this.emitEvent(t + 'start', e));
									}),
									(e.emitEnd = function (t) {
										var e = this,
											n = this.processEvent;
										Object.keys(n).forEach(function (r) {
											e.emitEvent(r + 'end', t), delete n[r];
										});
									}),
									(e.clearPressTimeout = function () {
										this.pressTimeout &&
											(clearTimeout(this.pressTimeout),
											(this.pressTimeout = 0));
									}),
									(e.reset = function () {
										this.clearPressTimeout(),
											(this.startTime = 0),
											(this.startPoints = null),
											(this.startDistance = 0),
											(this.direction = null),
											(this.eventType = null),
											(this.pinch = !1),
											(this.prevMoveTime = 0),
											(this.prevMovePoints = null),
											(this.lastMoveTime = 0),
											(this.lastMovePoints = null);
									}),
									t
								);
							})(),
							l = f;
						e['default'] = l;
					},
					function (t, e, n) {
						'use strict';
						var r = n(1);
						(e.__esModule = !0), (e['default'] = void 0);
						var i = r(n(2)),
							a = r(n(3)),
							o = r(n(4)),
							s = r(n(42));
						function u(t) {
							return function () {
								var e,
									n = (0, a['default'])(t);
								if (c()) {
									var r = (0, a['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, i['default'])(this, e);
							};
						}
						function c() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var f = (function (t) {
							(0, o['default'])(e, t);
							u(e);
							function e(e) {
								var n;
								return (
									(n = t.call(this) || this),
									(n.context = e),
									(n.width = 0),
									(n.height = 0),
									(n.style = {}),
									(n.currentStyle = {}),
									(n.isCanvasElement = !0),
									n
								);
							}
							var n = e.prototype;
							return (
								(n.getContext = function () {
									return this.context;
								}),
								(n.getBoundingClientRect = function () {
									var t = this.width,
										e = this.height;
									return { top: 0, right: t, bottom: e, left: 0 };
								}),
								(n.addEventListener = function (t, e) {
									this.on(t, e);
								}),
								(n.removeEventListener = function (t, e) {
									this.off(t, e);
								}),
								(n.dispatchEvent = function (t, e) {
									this.emit(t, e);
								}),
								e
							);
						})(s['default']);
						function l(t) {
							if (!t) return !1;
							if (
								1 !== t.nodeType ||
								!t.nodeName ||
								'canvas' !== t.nodeName.toLowerCase()
							)
								return !1;
							var e = !1;
							try {
								t.addEventListener('eventTest', function () {
									e = !0;
								}),
									t.dispatchEvent(new Event('eventTest'));
							} catch (n) {
								e = !1;
							}
							return e;
						}
						var h = {
							create: function (t) {
								return t ? (l(t.canvas) ? t.canvas : new f(t)) : null;
							},
						};
						e['default'] = h;
					},
					function (t, e, n) {
						'use strict';
						var r = n(0);
						function i(t, e) {
							return ((t % e) + e) % e;
						}
						function a(t, e) {
							r.each(t, function (t) {
								(t = t.split(':')), e.addColorStop(Number(t[0]), t[1]);
							});
						}
						function o(t, e, n) {
							var r = t.split(' '),
								o = r[0].slice(2, r[0].length - 1);
							o = i((parseFloat(o) * Math.PI) / 180, 2 * Math.PI);
							var s,
								u,
								c = r.slice(1),
								f = e.getBBox(),
								l = f.minX,
								h = f.minY,
								p = f.maxX,
								d = f.maxY;
							o >= 0 && o < 0.5 * Math.PI
								? ((s = { x: l, y: h }), (u = { x: p, y: d }))
								: 0.5 * Math.PI <= o && o < Math.PI
								? ((s = { x: p, y: h }), (u = { x: l, y: d }))
								: Math.PI <= o && o < 1.5 * Math.PI
								? ((s = { x: p, y: d }), (u = { x: l, y: h }))
								: ((s = { x: l, y: d }), (u = { x: p, y: h }));
							var v = Math.tan(o),
								g = v * v,
								y = (u.x - s.x + v * (u.y - s.y)) / (g + 1) + s.x,
								x = (v * (u.x - s.x + v * (u.y - s.y))) / (g + 1) + s.y,
								m = n.createLinearGradient(s.x, s.y, y, x);
							return a(c, m), m;
						}
						function s(t, e, n) {
							var r = t.split(' '),
								i = r[0].slice(2, r[0].length - 1);
							i = i.split(',');
							var o = parseFloat(i[0]),
								s = parseFloat(i[1]),
								u = parseFloat(i[2]),
								c = r.slice(1);
							if (0 === u) {
								var f = c[c.length - 1];
								return f.split(':')[1];
							}
							var l = e.getBBox(),
								h = l.width,
								p = l.height,
								d = l.minX,
								v = l.minY,
								g = Math.sqrt(h * h + p * p) / 2,
								y = n.createRadialGradient(
									d + h * o,
									v + p * s,
									u * g,
									d + h / 2,
									v + p / 2,
									g,
								);
							return a(c, y), y;
						}
						t.exports = {
							parseStyle: function (t, e, n) {
								if ('(' === t[1])
									try {
										var r = t[0];
										if ('l' === r) return o(t, e, n);
										if ('r' === r) return s(t, e, n);
									} catch (i) {
										console.error(
											'error in parsing gradient string, please check if there are any extra whitespaces.',
										),
											console.error(i);
									}
								return t;
							},
						};
					},
					function (t, e, n) {
						'use strict';
						var r = n(1),
							i = r(n(2)),
							a = r(n(3)),
							o = r(n(4));
						function s(t) {
							return function () {
								var e,
									n = (0, a['default'])(t);
								if (u()) {
									var r = (0, a['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, i['default'])(this, e);
							};
						}
						function u() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var c = n(0),
							f = n(10),
							l = (function (t) {
								(0, o['default'])(e, t);
								s(e);
								function e() {
									return t.apply(this, arguments) || this;
								}
								var n = e.prototype;
								return (
									(n._initProperties = function () {
										t.prototype._initProperties.call(this),
											(this._attrs.canFill = !0),
											(this._attrs.canStroke = !0),
											(this._attrs.type = 'rect');
									}),
									(n.getDefaultAttrs = function () {
										return {
											x: 0,
											y: 0,
											width: 0,
											height: 0,
											radius: 0,
											lineWidth: 0,
										};
									}),
									(n.createPath = function (t) {
										var e = this,
											n = e.get('attrs'),
											r = n.x,
											i = n.y,
											a = n.width,
											o = n.height;
										t.beginPath();
										var s = n.radius;
										s && a * o
											? ((s = c.parsePadding(s)),
											  t.moveTo(r + s[0], i),
											  t.lineTo(r + a - s[1], i),
											  t.arc(
													r + a - s[1],
													i + s[1],
													s[1],
													-Math.PI / 2,
													0,
													!1,
											  ),
											  t.lineTo(r + a, i + o - s[2]),
											  t.arc(
													r + a - s[2],
													i + o - s[2],
													s[2],
													0,
													Math.PI / 2,
													!1,
											  ),
											  t.lineTo(r + s[3], i + o),
											  t.arc(
													r + s[3],
													i + o - s[3],
													s[3],
													Math.PI / 2,
													Math.PI,
													!1,
											  ),
											  t.lineTo(r, i + s[0]),
											  t.arc(
													r + s[0],
													i + s[0],
													s[0],
													Math.PI,
													(3 * Math.PI) / 2,
													!1,
											  ),
											  t.closePath())
											: t.rect(r, i, a, o);
									}),
									(n.calculateBox = function () {
										var t = this.get('attrs'),
											e = t.x,
											n = t.y,
											r = t.width,
											i = t.height;
										return { minX: e, minY: n, maxX: e + r, maxY: n + i };
									}),
									e
								);
							})(f);
						(f.Rect = l), (t.exports = l);
					},
					function (t, e, n) {
						'use strict';
						var r = n(1),
							i = r(n(2)),
							a = r(n(3)),
							o = r(n(4));
						function s(t) {
							return function () {
								var e,
									n = (0, a['default'])(t);
								if (u()) {
									var r = (0, a['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, i['default'])(this, e);
							};
						}
						function u() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var c = n(10),
							f = (function (t) {
								(0, o['default'])(e, t);
								s(e);
								function e() {
									return t.apply(this, arguments) || this;
								}
								var n = e.prototype;
								return (
									(n._initProperties = function () {
										t.prototype._initProperties.call(this),
											(this._attrs.canFill = !0),
											(this._attrs.canStroke = !0),
											(this._attrs.type = 'circle');
									}),
									(n.getDefaultAttrs = function () {
										return { x: 0, y: 0, r: 0, lineWidth: 0 };
									}),
									(n.createPath = function (t) {
										var e = this.get('attrs'),
											n = e.x,
											r = e.y,
											i = e.r;
										t.beginPath(),
											t.arc(n, r, i, 0, 2 * Math.PI, !1),
											t.closePath();
									}),
									(n.calculateBox = function () {
										var t = this.get('attrs'),
											e = t.x,
											n = t.y,
											r = t.r;
										return {
											minX: e - r,
											maxX: e + r,
											minY: n - r,
											maxY: n + r,
										};
									}),
									e
								);
							})(c);
						(c.Circle = f), (t.exports = f);
					},
					function (t, e, n) {
						'use strict';
						var r = n(1),
							i = r(n(2)),
							a = r(n(3)),
							o = r(n(4));
						function s(t) {
							return function () {
								var e,
									n = (0, a['default'])(t);
								if (u()) {
									var r = (0, a['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, i['default'])(this, e);
							};
						}
						function u() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var c = n(10),
							f = n(21),
							l = (function (t) {
								(0, o['default'])(e, t);
								s(e);
								function e() {
									return t.apply(this, arguments) || this;
								}
								var n = e.prototype;
								return (
									(n._initProperties = function () {
										t.prototype._initProperties.call(this),
											(this._attrs.canStroke = !0),
											(this._attrs.type = 'line');
									}),
									(n.getDefaultAttrs = function () {
										return { x1: 0, y1: 0, x2: 0, y2: 0, lineWidth: 1 };
									}),
									(n.createPath = function (t) {
										var e = this.get('attrs'),
											n = e.x1,
											r = e.y1,
											i = e.x2,
											a = e.y2;
										t.beginPath(), t.moveTo(n, r), t.lineTo(i, a);
									}),
									(n.calculateBox = function () {
										var t = this.get('attrs'),
											e = t.x1,
											n = t.y1,
											r = t.x2,
											i = t.y2,
											a = t.lineWidth;
										return f.getBBoxFromLine(e, n, r, i, a);
									}),
									e
								);
							})(c);
						(c.Line = l), (t.exports = l);
					},
					function (t, e, n) {
						'use strict';
						var r = n(1),
							i = r(n(2)),
							a = r(n(3)),
							o = r(n(4));
						function s(t) {
							return function () {
								var e,
									n = (0, a['default'])(t);
								if (u()) {
									var r = (0, a['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, i['default'])(this, e);
							};
						}
						function u() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var c = n(10),
							f = n(21),
							l = (function (t) {
								(0, o['default'])(e, t);
								s(e);
								function e() {
									return t.apply(this, arguments) || this;
								}
								var n = e.prototype;
								return (
									(n._initProperties = function () {
										t.prototype._initProperties.call(this),
											(this._attrs.canFill = !0),
											(this._attrs.canStroke = !0),
											(this._attrs.type = 'polygon');
									}),
									(n.getDefaultAttrs = function () {
										return { points: null, lineWidth: 0 };
									}),
									(n.createPath = function (t) {
										var e = this,
											n = e.get('attrs'),
											r = n.points;
										t.beginPath();
										for (var i = 0, a = r.length; i < a; i++) {
											var o = r[i];
											0 === i ? t.moveTo(o.x, o.y) : t.lineTo(o.x, o.y);
										}
										t.closePath();
									}),
									(n.calculateBox = function () {
										var t = this.get('attrs'),
											e = t.points;
										return f.getBBoxFromPoints(e);
									}),
									e
								);
							})(c);
						(c.Polygon = l), (t.exports = l);
					},
					function (t, e, n) {
						'use strict';
						var r = n(1),
							i = r(n(2)),
							a = r(n(3)),
							o = r(n(4));
						function s(t) {
							return function () {
								var e,
									n = (0, a['default'])(t);
								if (u()) {
									var r = (0, a['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, i['default'])(this, e);
							};
						}
						function u() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var c = n(10),
							f = n(71),
							l = n(21);
						function h(t) {
							for (var e = [], n = 0, r = t.length; n < r; n++) {
								var i = t[n];
								isNaN(i.x) || isNaN(i.y) || e.push(i);
							}
							return e;
						}
						var p = (function (t) {
							(0, o['default'])(e, t);
							s(e);
							function e() {
								return t.apply(this, arguments) || this;
							}
							var n = e.prototype;
							return (
								(n._initProperties = function () {
									t.prototype._initProperties.call(this),
										(this._attrs.canFill = !0),
										(this._attrs.canStroke = !0),
										(this._attrs.type = 'polyline');
								}),
								(n.getDefaultAttrs = function () {
									return { points: null, lineWidth: 1, smooth: !1 };
								}),
								(n.createPath = function (t) {
									var e = this,
										n = e.get('attrs'),
										r = n.points,
										i = n.smooth,
										a = h(r);
									if ((t.beginPath(), a.length))
										if ((t.moveTo(a[0].x, a[0].y), i))
											for (
												var o = [
														[0, 0],
														[1, 1],
													],
													s = f.smooth(a, !1, o),
													u = 0,
													c = s.length;
												u < c;
												u++
											) {
												var l = s[u];
												t.bezierCurveTo(l[1], l[2], l[3], l[4], l[5], l[6]);
											}
										else {
											var p, d;
											for (p = 1, d = a.length - 1; p < d; p++)
												t.lineTo(a[p].x, a[p].y);
											t.lineTo(a[d].x, a[d].y);
										}
								}),
								(n.calculateBox = function () {
									var t = this.get('attrs'),
										e = t.points,
										n = t.smooth,
										r = t.lineWidth,
										i = h(e);
									if (n) {
										for (
											var a = [],
												o = [
													[0, 0],
													[1, 1],
												],
												s = f.smooth(i, !1, o),
												u = 0,
												c = s.length;
											u < c;
											u++
										) {
											var p = s[u];
											if (0 === u)
												a.push([
													i[0].x,
													i[0].y,
													p[1],
													p[2],
													p[3],
													p[4],
													p[5],
													p[6],
												]);
											else {
												var d = s[u - 1];
												a.push([
													d[5],
													d[6],
													p[1],
													p[2],
													p[3],
													p[4],
													p[5],
													p[6],
												]);
											}
										}
										return l.getBBoxFromBezierGroup(a, r);
									}
									return l.getBBoxFromPoints(i, r);
								}),
								e
							);
						})(c);
						(c.Polyline = p), (t.exports = p);
					},
					function (t, e, n) {
						'use strict';
						var r = n(1),
							i = r(n(2)),
							a = r(n(3)),
							o = r(n(4));
						function s(t) {
							return function () {
								var e,
									n = (0, a['default'])(t);
								if (u()) {
									var r = (0, a['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, i['default'])(this, e);
							};
						}
						function u() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var c = n(10),
							f = n(21),
							l = (function (t) {
								(0, o['default'])(e, t);
								s(e);
								function e() {
									return t.apply(this, arguments) || this;
								}
								var n = e.prototype;
								return (
									(n._initProperties = function () {
										t.prototype._initProperties.call(this),
											(this._attrs.canStroke = !0),
											(this._attrs.canFill = !0),
											(this._attrs.type = 'arc');
									}),
									(n.getDefaultAttrs = function () {
										return {
											x: 0,
											y: 0,
											r: 0,
											startAngle: 0,
											endAngle: 2 * Math.PI,
											anticlockwise: !1,
											lineWidth: 1,
										};
									}),
									(n.createPath = function (t) {
										var e = this.get('attrs'),
											n = e.x,
											r = e.y,
											i = e.r,
											a = e.startAngle,
											o = e.endAngle,
											s = e.anticlockwise;
										t.beginPath(), a !== o && t.arc(n, r, i, a, o, s);
									}),
									(n.calculateBox = function () {
										var t = this.get('attrs'),
											e = t.x,
											n = t.y,
											r = t.r,
											i = t.startAngle,
											a = t.endAngle,
											o = t.anticlockwise;
										return f.getBBoxFromArc(e, n, r, i, a, o);
									}),
									e
								);
							})(c);
						(c.Arc = l), (t.exports = l);
					},
					function (t, e, n) {
						'use strict';
						var r = n(1),
							i = r(n(2)),
							a = r(n(3)),
							o = r(n(4));
						function s(t) {
							return function () {
								var e,
									n = (0, a['default'])(t);
								if (u()) {
									var r = (0, a['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, i['default'])(this, e);
							};
						}
						function u() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var c = n(10),
							f = n(21),
							l = (function (t) {
								(0, o['default'])(e, t);
								s(e);
								function e() {
									return t.apply(this, arguments) || this;
								}
								var n = e.prototype;
								return (
									(n._initProperties = function () {
										t.prototype._initProperties.call(this),
											(this._attrs.canFill = !0),
											(this._attrs.canStroke = !0),
											(this._attrs.type = 'sector');
									}),
									(n.getDefaultAttrs = function () {
										return {
											x: 0,
											y: 0,
											lineWidth: 0,
											r: 0,
											r0: 0,
											startAngle: 0,
											endAngle: 2 * Math.PI,
											anticlockwise: !1,
										};
									}),
									(n.createPath = function (t) {
										var e = this.get('attrs'),
											n = e.x,
											r = e.y,
											i = e.startAngle,
											a = e.endAngle,
											o = e.r,
											s = e.r0,
											u = e.anticlockwise;
										t.beginPath();
										var c = Math.cos(i),
											f = Math.sin(i);
										t.moveTo(c * s + n, f * s + r),
											t.lineTo(c * o + n, f * o + r),
											(Math.abs(a - i) > 1e-4 || (0 === i && a < 0)) &&
												(t.arc(n, r, o, i, a, u),
												t.lineTo(Math.cos(a) * s + n, Math.sin(a) * s + r),
												0 !== s && t.arc(n, r, s, a, i, !u)),
											t.closePath();
									}),
									(n.calculateBox = function () {
										var t = this.get('attrs'),
											e = t.x,
											n = t.y,
											r = t.r,
											i = t.r0,
											a = t.startAngle,
											o = t.endAngle,
											s = t.anticlockwise,
											u = f.getBBoxFromArc(e, n, r, a, o, s),
											c = f.getBBoxFromArc(e, n, i, a, o, s);
										return {
											minX: Math.min(u.minX, c.minX),
											minY: Math.min(u.minY, c.minY),
											maxX: Math.max(u.maxX, c.maxX),
											maxY: Math.max(u.maxY, c.maxY),
										};
									}),
									e
								);
							})(c);
						(c.Sector = l), (t.exports = l);
					},
					function (t, e, n) {
						'use strict';
						var r = n(1),
							i = r(n(2)),
							a = r(n(3)),
							o = r(n(4));
						function s(t) {
							return function () {
								var e,
									n = (0, a['default'])(t);
								if (u()) {
									var r = (0, a['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, i['default'])(this, e);
							};
						}
						function u() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var c = n(0),
							f = n(10),
							l = n(188),
							h = 0,
							p = {},
							d = 5e3,
							v = (function (t) {
								(0, o['default'])(e, t);
								s(e);
								function e() {
									return t.apply(this, arguments) || this;
								}
								var n = e.prototype;
								return (
									(n._initProperties = function () {
										t.prototype._initProperties.call(this),
											(this._attrs.canFill = !0),
											(this._attrs.canStroke = !0),
											(this._attrs.type = 'text');
									}),
									(n.getDefaultAttrs = function () {
										return {
											lineWidth: 0,
											lineCount: 1,
											fontSize: 12,
											fontFamily: 'sans-serif',
											fontStyle: 'normal',
											fontWeight: 'normal',
											fontVariant: 'normal',
											textAlign: 'start',
											textBaseline: 'bottom',
											lineHeight: null,
											textArr: null,
										};
									}),
									(n._getFontStyle = function () {
										var t = this._attrs.attrs,
											e = t.fontSize,
											n = t.fontFamily,
											r = t.fontWeight,
											i = t.fontStyle,
											a = t.fontVariant;
										return i + ' ' + a + ' ' + r + ' ' + e + 'px ' + n;
									}),
									(n._afterAttrsSet = function () {
										var t = this._attrs.attrs;
										if (((t.font = this._getFontStyle()), t.text)) {
											var e = t.text,
												n = null,
												r = 1;
											c.isString(e) &&
												-1 !== e.indexOf('\n') &&
												((n = e.split('\n')), (r = n.length)),
												(t.lineCount = r),
												(t.textArr = n);
										}
										this.set('attrs', t);
									}),
									(n._getTextHeight = function () {
										var t = this._attrs.attrs;
										if (t.height) return t.height;
										var e = t.lineCount,
											n = 1 * t.fontSize;
										if (e > 1) {
											var r = this._getSpaceingY();
											return n * e + r * (e - 1);
										}
										return n;
									}),
									(n._getSpaceingY = function () {
										var t = this._attrs.attrs,
											e = t.lineHeight,
											n = 1 * t.fontSize;
										return e ? e - n : 0.14 * n;
									}),
									(n.drawInner = function (t) {
										var e = this,
											n = e._attrs.attrs,
											r = n.text,
											i = n.x,
											a = n.y;
										if (!(c.isNil(r) || isNaN(i) || isNaN(a))) {
											var o = n.textArr,
												s = 1 * n.fontSize,
												u = e._getSpaceingY();
											n.rotate &&
												(t.translate(i, a),
												t.rotate(n.rotate),
												(i = 0),
												(a = 0));
											var f,
												l,
												h = n.textBaseline;
											if ((o && (f = e._getTextHeight()), e.hasFill())) {
												var p = n.fillOpacity;
												if ((c.isNil(p) || 1 === p || (t.globalAlpha = p), o))
													for (var d = 0, v = o.length; d < v; d++) {
														var g = o[d];
														(l = a + d * (u + s) - f + s),
															'middle' === h && (l += f - s - (f - s) / 2),
															'top' === h && (l += f - s),
															t.fillText(g, i, l);
													}
												else t.fillText(r, i, a);
											}
											if (e.hasStroke())
												if (o)
													for (var y = 0, x = o.length; y < x; y++) {
														var m = o[y];
														(l = a + y * (u + s) - f + s),
															'middle' === h && (l += f - s - (f - s) / 2),
															'top' === h && (l += f - s),
															t.strokeText(m, i, l);
													}
												else t.strokeText(r, i, a);
										}
									}),
									(n.calculateBox = function () {
										var t = this,
											e = t._attrs.attrs,
											n = e.x,
											r = e.y,
											i = e.textAlign,
											a = e.textBaseline,
											o = t._getTextWidth();
										if (!o) return { minX: n, minY: r, maxX: n, maxY: r };
										var s = t._getTextHeight();
										if (e.rotate) {
											var u = l.calcRotatedBox({
												width: o,
												height: s,
												rotate: e.rotate,
											});
											(o = u.width), (s = u.height);
										}
										var c = { x: n, y: r - s };
										return (
											i &&
												('end' === i || 'right' === i
													? (c.x -= o)
													: 'center' === i && (c.x -= o / 2)),
											a &&
												('top' === a
													? (c.y += s)
													: 'middle' === a && (c.y += s / 2)),
											{ minX: c.x, minY: c.y, maxX: c.x + o, maxY: c.y + s }
										);
									}),
									(n._getTextWidth = function () {
										var t = this._attrs.attrs;
										if (t.width) return t.width;
										var e = t.text,
											n = this.get('context');
										if (!c.isNil(e)) {
											var r = t.font,
												i = t.textArr,
												a = e + '' + r;
											if (p[a]) return p[a];
											var o = 0;
											if (i)
												for (var s = 0, u = i.length; s < u; s++) {
													var f = i[s];
													o = Math.max(o, c.measureText(f, r, n).width);
												}
											else o = c.measureText(e, r, n).width;
											return h > d && ((h = 0), (p = {})), h++, (p[a] = o), o;
										}
									}),
									e
								);
							})(f);
						(f.Text = v), (t.exports = v);
					},
					function (t, e, n) {
						'use strict';
						var r = {
							calcRotatedBox: function (t) {
								var e = t.width,
									n = t.height,
									r = t.rotate,
									i = Math.abs(r);
								return {
									width: Math.abs(e * Math.cos(i) + n * Math.sin(i)),
									height: Math.abs(n * Math.cos(i) + e * Math.sin(i)),
								};
							},
						};
						t.exports = r;
					},
					function (t, e, n) {
						'use strict';
						var r = n(1),
							i = r(n(2)),
							a = r(n(3)),
							o = r(n(4));
						function s(t) {
							return function () {
								var e,
									n = (0, a['default'])(t);
								if (u()) {
									var r = (0, a['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, i['default'])(this, e);
							};
						}
						function u() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var c = n(10),
							f = (function (t) {
								(0, o['default'])(e, t);
								s(e);
								function e() {
									return t.apply(this, arguments) || this;
								}
								var n = e.prototype;
								return (
									(n._initProperties = function () {
										t.prototype._initProperties.call(this),
											(this._attrs.canFill = !0),
											(this._attrs.canStroke = !0),
											(this._attrs.createPath = null),
											(this._attrs.type = 'custom');
									}),
									(n.createPath = function (t) {
										var e = this.get('createPath');
										e && e.call(this, t);
									}),
									(n.calculateBox = function () {
										var t = this.get('calculateBox');
										return t && t.call(this);
									}),
									e
								);
							})(c);
						(c.Custom = f), (t.exports = f);
					},
					function (t, e, n) {
						'use strict';
						var r = n(1),
							i = r(n(2)),
							a = r(n(3)),
							o = r(n(4));
						function s(t) {
							return function () {
								var e,
									n = (0, a['default'])(t);
								if (u()) {
									var r = (0, a['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, i['default'])(this, e);
							};
						}
						function u() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var c = n(72),
							f = n(17);
						n(68);
						var l = (function (t) {
							(0, o['default'])(e, t);
							s(e);
							function e() {
								return t.apply(this, arguments) || this;
							}
							var n = e.prototype;
							return (
								(n.getDefaultCfg = function () {
									var e = t.prototype.getDefaultCfg.call(this);
									return (e.type = 'line'), (e.sortable = !0), e;
								}),
								e
							);
						})(c);
						(f.Line = l), (t.exports = l);
					},
					function (t, e, n) {
						'use strict';
						var r = n(1),
							i = r(n(22)),
							a = r(n(2)),
							o = r(n(3)),
							s = r(n(4));
						function u(t) {
							return function () {
								var e,
									n = (0, o['default'])(t);
								if (c()) {
									var r = (0, o['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, a['default'])(this, e);
							};
						}
						function c() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var f = n(17),
							l = n(0),
							h = n(73);
						n(192);
						var p = (function (t) {
							(0, s['default'])(n, t);
							u(n);
							var e = n.prototype;
							function n(e) {
								var n;
								return (
									(n = t.call(this, e) || this),
									l.mix((0, i['default'])(n), h),
									n
								);
							}
							return (
								(e.getDefaultCfg = function () {
									var e = t.prototype.getDefaultCfg.call(this);
									return (
										(e.type = 'interval'),
										(e.shapeType = 'interval'),
										(e.generatePoints = !0),
										e
									);
								}),
								(e.init = function () {
									t.prototype.init.call(this), this.initEvent();
								}),
								(e.createShapePointsCfg = function (e) {
									var n = t.prototype.createShapePointsCfg.call(this, e);
									return (n.size = this.getNormalizedSize(e)), n;
								}),
								(e.clearInner = function () {
									t.prototype.clearInner.call(this),
										this.set('defaultSize', null);
								}),
								n
							);
						})(f);
						(f.Interval = p), (t.exports = p);
					},
					function (t, e, n) {
						'use strict';
						var r = n(0),
							i = n(19),
							a = n(13),
							o = n(6);
						function s(t) {
							var e,
								n,
								i = t.x,
								a = t.y,
								o = t.y0,
								s = t.size,
								u = o,
								c = a;
							return (
								r.isArray(a) && ((c = a[1]), (u = a[0])),
								r.isArray(i)
									? ((e = i[0]), (n = i[1]))
									: ((e = i - s / 2), (n = i + s / 2)),
								[
									{ x: e, y: u },
									{ x: e, y: c },
									{ x: n, y: c },
									{ x: n, y: u },
								]
							);
						}
						function u(t) {
							for (var e = [], n = [], r = 0, i = t.length; r < i; r++) {
								var a = t[r];
								e.push(a.x), n.push(a.y);
							}
							var o = Math.min.apply(null, e),
								s = Math.min.apply(null, n),
								u = Math.max.apply(null, e),
								c = Math.max.apply(null, n);
							return { x: o, y: s, width: u - o, height: c - s };
						}
						function c(t, e) {
							var n = (t.x - e.x) / 2 + e.x,
								r = (t.y - e.y) / 2 + e.y;
							return { x: n, y: r };
						}
						var f = i.registerFactory('interval', {
							defaultShapeType: 'rect',
							getDefaultPoints: function (t) {
								return s(t);
							},
						});
						i.registerShape('interval', 'rect', {
							draw: function (t, e) {
								var n = this.parsePoints(t.points),
									i = r.mix({ fill: t.color }, o.shape.interval, t.style);
								if (t.isInCircle) {
									var s = n.slice(0);
									this._coord.transposed && (s = [n[0], n[3], n[2], n[1]]);
									var c = t.center,
										f = c.x,
										l = c.y,
										h = [1, 0],
										p = [s[0].x - f, s[0].y - l],
										d = [s[1].x - f, s[1].y - l],
										v = [s[2].x - f, s[2].y - l],
										g = a.angleTo(h, d),
										y = a.angleTo(h, v),
										x = a.length(p),
										m = a.length(d);
									return (
										g >= 1.5 * Math.PI && (g -= 2 * Math.PI),
										y >= 1.5 * Math.PI && (y -= 2 * Math.PI),
										e.addShape('Sector', {
											className: 'interval',
											attrs: r.mix(
												{ x: f, y: l, r: m, r0: x, startAngle: g, endAngle: y },
												i,
											),
										})
									);
								}
								var _ = u(n);
								return e.addShape('rect', {
									className: 'interval',
									attrs: r.mix(_, i),
								});
							},
						}),
							['pyramid', 'funnel'].forEach(function (t) {
								i.registerShape('interval', t, {
									getPoints: function (t) {
										return (t.size = 2 * t.size), s(t);
									},
									draw: function (e, n) {
										var i = this.parsePoints(e.points),
											a = this.parsePoints(e.nextPoints),
											s = null;
										a
											? (s = [i[0], i[1], a[1], a[0]])
											: ((s = [i[0], i[1]]),
											  'pyramid' === t
													? s.push(c(i[2], i[3]))
													: s.push(i[2], i[3]));
										var u = r.mix(
											{ fill: e.color, points: s },
											o.shape.interval,
											e.style,
										);
										return n.addShape('polygon', {
											className: 'interval',
											attrs: u,
										});
									},
								});
							}),
							(t.exports = f);
					},
					function (t, e, n) {
						'use strict';
						t.exports = { Stack: n(194), Dodge: n(196), Symmetric: n(198) };
					},
					function (t, e, n) {
						'use strict';
						var r = n(195);
						t.exports = r;
					},
					function (t, e, n) {
						function r(t, e) {
							(t.prototype = Object.create(e.prototype)),
								(t.prototype.constructor = t),
								(t.__proto__ = e);
						}
						var i = n(34),
							a = n(35),
							o = n(33),
							s = (function (t) {
								function e() {
									return t.apply(this, arguments) || this;
								}
								r(e, t);
								var n = e.prototype;
								return (
									(n._initDefaultCfg = function () {
										(this.xField = null), (this.yField = null);
									}),
									(n.processAdjust = function (t) {
										this.processStack(t);
									}),
									(n.processStack = function (t) {
										var e = this,
											n = e.xField,
											r = e.yField,
											o = t.length,
											s = { positive: {}, negative: {} };
										e.reverseOrder && (t = t.slice(0).reverse());
										for (var u = 0; u < o; u++)
											for (var c = t[u], f = 0, l = c.length; f < l; f++) {
												var h = c[f],
													p = h[n] || 0,
													d = h[r],
													v = p.toString();
												if (((d = i(d) ? d[1] : d), !a(d))) {
													var g = d >= 0 ? 'positive' : 'negative';
													s[g][v] || (s[g][v] = 0),
														(h[r] = [s[g][v], d + s[g][v]]),
														(s[g][v] += d);
												}
											}
									}),
									e
								);
							})(o);
						(o.Stack = s), (t.exports = s);
					},
					function (t, e, n) {
						'use strict';
						var r = n(197);
						t.exports = r;
					},
					function (t, e, n) {
						function r(t, e) {
							(t.prototype = Object.create(e.prototype)),
								(t.prototype.constructor = t),
								(t.__proto__ = e);
						}
						var i = n(33),
							a = n(15),
							o = 0.5,
							s = 0.5,
							u = (function (t) {
								function e() {
									return t.apply(this, arguments) || this;
								}
								r(e, t);
								var n = e.prototype;
								return (
									(n._initDefaultCfg = function () {
										(this.marginRatio = o),
											(this.dodgeRatio = s),
											(this.adjustNames = ['x', 'y']);
									}),
									(n.getDodgeOffset = function (t, e, n) {
										var r = this,
											i = t.pre,
											a = t.next,
											o = a - i,
											s = (o * r.dodgeRatio) / n,
											u = r.marginRatio * s,
											c =
												0.5 * (o - n * s - (n - 1) * u) +
												((e + 1) * s + e * u) -
												0.5 * s -
												0.5 * o;
										return (i + a) / 2 + c;
									}),
									(n.processAdjust = function (t) {
										var e = this,
											n = t.length,
											r = e.xField;
										a(t, function (t, i) {
											for (var a = 0, o = t.length; a < o; a++) {
												var s = t[a],
													u = s[r],
													c = {
														pre: 1 === o ? u - 1 : u - 0.5,
														next: 1 === o ? u + 1 : u + 0.5,
													},
													f = e.getDodgeOffset(c, i, n);
												s[r] = f;
											}
										});
									}),
									e
								);
							})(i);
						(i.Dodge = u), (t.exports = u);
					},
					function (t, e, n) {
						'use strict';
						var r = n(199);
						t.exports = r;
					},
					function (t, e, n) {
						function r(t, e) {
							(t.prototype = Object.create(e.prototype)),
								(t.prototype.constructor = t),
								(t.__proto__ = e);
						}
						var i = n(15),
							a = n(200),
							o = n(34),
							s = { merge: n(202) },
							u = n(33),
							c = (function (t) {
								function e() {
									return t.apply(this, arguments) || this;
								}
								r(e, t);
								var n = e.prototype;
								return (
									(n._initDefaultCfg = function () {
										(this.xField = null),
											(this.yField = null),
											(this.cacheMax = null),
											(this.adjustNames = ['y']),
											(this.groupFields = null);
									}),
									(n._getMax = function (t) {
										var e = this,
											n = e.mergeData,
											r = a(n, function (e) {
												var n = e[t];
												return o(n) ? Math.max.apply(null, n) : n;
											}),
											i = r[t],
											s = o(i) ? Math.max.apply(null, i) : i;
										return s;
									}),
									(n._getXValuesMax = function () {
										var t = this,
											e = t.yField,
											n = t.xField,
											r = {},
											a = t.mergeData;
										return (
											i(a, function (t) {
												var i = t[n],
													a = t[e],
													s = o(a) ? Math.max.apply(null, a) : a;
												(r[i] = r[i] || 0), r[i] < s && (r[i] = s);
											}),
											r
										);
									}),
									(n.processAdjust = function (t) {
										var e = this,
											n = s.merge(t);
										(e.mergeData = n),
											e._processSymmetric(t),
											(e.mergeData = null);
									}),
									(n._processSymmetric = function (t) {
										var e,
											n = this,
											r = n.xField,
											a = n.yField,
											s = n._getMax(a),
											u = t[0][0];
										u && o(u[a]) && (e = n._getXValuesMax()),
											i(t, function (t) {
												i(t, function (t) {
													var n,
														u = t[a];
													if (o(u)) {
														var c = t[r],
															f = e[c];
														n = (s - f) / 2;
														var l = [];
														i(u, function (t) {
															l.push(n + t);
														}),
															(t[a] = l);
													} else (n = (s - u) / 2), (t[a] = [n, u + n]);
												});
											});
									}),
									e
								);
							})(u);
						(u.Symmetric = c), (t.exports = c);
					},
					function (t, e, n) {
						var r = n(34),
							i = n(201),
							a = n(15),
							o = function (t, e) {
								if (r(t)) {
									var n = t[0],
										o = void 0;
									o = i(e) ? e(t[0]) : t[0][e];
									var s = void 0;
									return (
										a(t, function (t) {
											(s = i(e) ? e(t) : t[e]), s > o && ((n = t), (o = s));
										}),
										n
									);
								}
							};
						t.exports = o;
					},
					function (t, e, n) {
						var r = n(27),
							i = function (t) {
								return r(t, 'Function');
							};
						t.exports = i;
					},
					function (t, e) {
						var n = function (t) {
							for (var e = [], n = 0; n < t.length; n++) e = e.concat(t[n]);
							return e;
						};
						t.exports = n;
					},
					function (t, e, n) {
						'use strict';
						var r = n(1),
							i = r(n(2)),
							a = r(n(3)),
							o = r(n(4));
						function s(t) {
							return function () {
								var e,
									n = (0, a['default'])(t);
								if (u()) {
									var r = (0, a['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, i['default'])(this, e);
							};
						}
						function u() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var c = n(43),
							f = n(13),
							l = n(31),
							h = (function (t) {
								(0, o['default'])(e, t);
								s(e);
								function e() {
									return t.apply(this, arguments) || this;
								}
								var n = e.prototype;
								return (
									(n._initDefaultCfg = function () {
										(this.type = 'polar'),
											(this.startAngle = -Math.PI / 2),
											(this.endAngle = (3 * Math.PI) / 2),
											(this.inner = 0),
											(this.innerRadius = 0),
											(this.isPolar = !0),
											(this.transposed = !1),
											(this.center = null),
											(this.radius = null);
									}),
									(n.init = function (e, n) {
										t.prototype.init.call(this, e, n);
										var r,
											i,
											a = this,
											o = a.inner || a.innerRadius,
											s = Math.abs(n.x - e.x),
											u = Math.abs(n.y - e.y);
										a.startAngle === -Math.PI && 0 === a.endAngle
											? ((r = Math.min(s / 2, u)),
											  (i = { x: (e.x + n.x) / 2, y: e.y }))
											: ((r = Math.min(s, u) / 2),
											  (i = { x: (e.x + n.x) / 2, y: (e.y + n.y) / 2 }));
										var c = a.radius;
										c > 0 && c <= 1 && (r *= c),
											(this.x = { start: a.startAngle, end: a.endAngle }),
											(this.y = { start: r * o, end: r }),
											(this.center = i),
											(this.circleRadius = r);
									}),
									(n._convertPoint = function (t) {
										var e = this,
											n = e.center,
											r = e.transposed,
											i = r ? 'y' : 'x',
											a = r ? 'x' : 'y',
											o = e.x,
											s = e.y,
											u = o.start + (o.end - o.start) * t[i],
											c = s.start + (s.end - s.start) * t[a];
										return {
											x: n.x + Math.cos(u) * c,
											y: n.y + Math.sin(u) * c,
										};
									}),
									(n._invertPoint = function (t) {
										var e = this,
											n = e.center,
											r = e.transposed,
											i = e.x,
											a = e.y,
											o = r ? 'y' : 'x',
											s = r ? 'x' : 'y',
											u = [1, 0, 0, 1, 0, 0];
										l.rotate(u, u, i.start);
										var c = [1, 0];
										f.transformMat2d(c, c, u), (c = [c[0], c[1]]);
										var h = [t.x - n.x, t.y - n.y];
										if (f.zero(h)) return { x: 0, y: 0 };
										var p = f.angleTo(c, h, i.end < i.start);
										Math.abs(p - 2 * Math.PI) < 0.001 && (p = 0);
										var d = f.length(h),
											v = p / (i.end - i.start);
										v = i.end - i.start > 0 ? v : -v;
										var g = (d - a.start) / (a.end - a.start),
											y = {};
										return (y[o] = v), (y[s] = g), y;
									}),
									e
								);
							})(c);
						(c.Polar = h), (t.exports = h);
					},
					function (t, e, n) {
						var r = n(48),
							i = n(222);
						t.exports = {
							toTimeStamp: function (t) {
								return (
									r(t) &&
										(t =
											t.indexOf('T') > 0
												? new Date(t).getTime()
												: new Date(t.replace(/-/gi, '/')).getTime()),
									i(t) && (t = t.getTime()),
									t
								);
							},
						};
					},
					function (t, e, n) {
						'use strict';
						var r = n(0),
							i = n(16),
							a = i.Group,
							o = n(76),
							s = 3,
							u = (function () {
								var t = e.prototype;
								function e(t) {
									r.deepMix(this, this.getDefaultCfg(), t),
										this._init(),
										this._renderTitle(),
										this._renderItems();
								}
								return (
									(t.getDefaultCfg = function () {
										return {
											showTitle: !1,
											title: null,
											items: null,
											titleGap: 12,
											itemGap: 10,
											itemMarginBottom: 12,
											itemFormatter: null,
											itemWidth: null,
											wordSpace: 6,
											x: 0,
											y: 0,
											layout: 'horizontal',
											joinString: ': ',
										};
									}),
									(t._init = function () {
										var t = new a({ zIndex: this.zIndex || 0 });
										this.container = t;
										var e = t.addGroup();
										this.wrapper = e;
										var n = e.addGroup({ className: 'itemsGroup' });
										(this.itemsGroup = n), this.parent && this.parent.add(t);
									}),
									(t._renderTitle = function (t) {
										t = t || this.title;
										var e = this.titleShape,
											n = 0;
										if (this.showTitle && t) {
											if (e && !e.get('destroyed')) e.attr('text', t);
											else {
												var i = this.wrapper,
													a = this.titleStyle;
												(e = i.addShape('text', {
													className: 'title',
													attrs: r.mix({ x: 0, y: 0, text: t }, a),
												})),
													(this.titleShape = e);
											}
											n = e.getBBox().height + this.titleGap;
										}
										this._titleHeight = n;
									}),
									(t._renderItems = function (t) {
										var e = this;
										(t = t || e.items),
											t &&
												(e.reversed && t.reverse(),
												r.each(t, function (t, n) {
													e._addItem(t, n);
												}),
												t.length > 1 && this._adjustItems(),
												this._renderBackground());
									}),
									(t._renderBackground = function () {
										var t = this.background;
										if (t) {
											var e = this.container,
												n = this.wrapper,
												i = n.getBBox(),
												a = i.minX,
												o = i.minY,
												s = i.width,
												u = i.height,
												c = t.padding || [0, 0, 0, 0];
											c = r.parsePadding(c);
											var f = r.mix(
													{
														x: a - c[3],
														y: o - c[0],
														width: s + c[1] + c[3],
														height: u + c[0] + c[2],
													},
													t,
												),
												l = this.backShape;
											l
												? l.attr(f)
												: (l = e.addShape('Rect', { zIndex: -1, attrs: f })),
												(this.backShape = l),
												e.sort();
										}
									}),
									(t._addItem = function (t) {
										var e,
											n = this.itemsGroup,
											i = n.addGroup({
												name: t.name,
												value: t.value,
												dataValue: t.dataValue,
												checked: t.checked,
											}),
											a = this.unCheckStyle,
											u = this.unCheckColor,
											c = this.nameStyle,
											f = this.valueStyle,
											l = this.wordSpace,
											h = t.marker,
											p = t.value,
											d = 0;
										if ((u && (a.fill = u), h)) {
											var v = h.radius || s,
												g = r.mix({ x: v, y: this._titleHeight }, h);
											!1 === t.checked && r.mix(g, a);
											var y = new o({ className: 'item-marker', attrs: g });
											i.add(y), (d += y.getBBox().width + l);
										}
										var x = t.name;
										if (x) {
											var m = this.joinString || '';
											(x = p ? x + m : x),
												(e = i.addShape('text', {
													className: 'name',
													attrs: r.mix(
														{
															x: d,
															y: this._titleHeight,
															text: this._formatItemValue(x),
														},
														c,
														!1 === t.checked ? a : null,
													),
												}));
										}
										if (p) {
											var _ = d;
											e && (_ += e.getBBox().width),
												i.addShape('text', {
													className: 'value',
													attrs: r.mix(
														{ x: _, y: this._titleHeight, text: p },
														f,
														!1 === t.checked ? a : null,
													),
												});
										}
										return i;
									}),
									(t._formatItemValue = function (t) {
										var e = this.itemFormatter;
										return e && (t = e.call(this, t)), t;
									}),
									(t._getMaxItemWidth = function () {
										var t,
											e = this.itemWidth;
										if (r.isNumber(e) || r.isNil(e)) return e;
										if ('auto' === e) {
											for (
												var n = this.itemsGroup,
													i = n.get('children'),
													a = i.length,
													o = 0,
													s = 0;
												s < a;
												s++
											) {
												var u = i[s].getBBox(),
													c = u.width;
												o = Math.max(o, c);
											}
											var f = this.maxLength,
												l = this.itemGap,
												h = (f - l) / 2,
												p = (f - 2 * l) / 3;
											return (
												(t =
													2 === a
														? Math.max(o, h)
														: o <= p
														? p
														: o <= h
														? h
														: o),
												t
											);
										}
									}),
									(t._adjustHorizontal = function () {
										for (
											var t,
												e,
												n = this.maxLength,
												r = this.itemsGroup,
												i = r.get('children'),
												a = this.itemGap,
												o = this.itemMarginBottom,
												s = this._titleHeight,
												u = 0,
												c = 0,
												f = this._getMaxItemWidth(),
												l = [],
												h = 0,
												p = i.length;
											h < p;
											h++
										) {
											var d = i[h],
												v = d.getBBox(),
												g = v.height,
												y = v.width;
											(t = f || y),
												(e = g + o),
												t - (n - c) > 1e-4 && (u++, (c = 0)),
												d.moveTo(c, u * e),
												l.push({
													x: c,
													y: u * e + s - g / 2,
													width: 1.375 * y,
													height: 1.375 * g,
												}),
												(c += t + a);
										}
										this.legendHitBoxes = l;
									}),
									(t._adjustVertical = function () {
										for (
											var t,
												e,
												n = this.maxLength,
												i = this.itemsGroup,
												a = this.itemGap,
												o = this.itemMarginBottom,
												s = this.itemWidth,
												u = this._titleHeight,
												c = i.get('children'),
												f = 0,
												l = 0,
												h = 0,
												p = [],
												d = 0,
												v = c.length;
											d < v;
											d++
										) {
											var g = c[d],
												y = g.getBBox();
											(t = y.width),
												(e = y.height),
												r.isNumber(s) ? (l = s + a) : t > l && (l = t + a),
												n - f < e
													? ((f = 0),
													  (h += l),
													  g.moveTo(h, 0),
													  p.push({
															x: h,
															y: u - e / 2,
															width: 1.375 * t,
															height: 1.375 * e,
													  }))
													: (g.moveTo(h, f),
													  p.push({
															x: h,
															y: f - e / 2 + u,
															width: 1.375 * t,
															height: 1.375 * e,
													  })),
												(f += e + o);
										}
										this.legendHitBoxes = p;
									}),
									(t._adjustItems = function () {
										var t = this.layout;
										'horizontal' === t
											? this._adjustHorizontal()
											: this._adjustVertical();
									}),
									(t.moveTo = function (t, e) {
										(this.x = t), (this.y = e);
										var n = this.container;
										return n && n.moveTo(t, e), this;
									}),
									(t.setItems = function (t) {
										this.clearItems(), this._renderItems(t);
									}),
									(t.setTitle = function (t) {
										this._renderTitle(t);
									}),
									(t.clearItems = function () {
										var t = this.itemsGroup;
										t.clear();
									}),
									(t.getWidth = function () {
										var t = this.container,
											e = t.getBBox();
										return e.width;
									}),
									(t.getHeight = function () {
										var t = this.container,
											e = t.getBBox();
										return e.height;
									}),
									(t.show = function () {
										var t = this.container;
										t.show();
									}),
									(t.hide = function () {
										var t = this.container;
										t.hide();
									}),
									(t.clear = function () {
										var t = this.container;
										t.clear(), t.remove(!0);
									}),
									e
								);
							})();
						t.exports = u;
					},
					function (t, e, n) {
						'use strict';
						var r = n(0),
							i = {
								appear: { duration: 450, easing: 'quadraticOut' },
								update: { duration: 300, easing: 'quadraticOut' },
								enter: { duration: 300, easing: 'quadraticOut' },
								leave: { duration: 350, easing: 'quadraticIn' },
							},
							a = {
								defaultCfg: {},
								Action: {},
								getAnimation: function (t, e, n) {
									var i = this.defaultCfg[t];
									if (i) {
										var a = i[n];
										if (r.isFunction(a)) return a(e);
									}
									return !1;
								},
								getAnimateCfg: function (t, e) {
									var n = i[e],
										a = this.defaultCfg[t];
									return a && a.cfg && a.cfg[e]
										? r.deepMix({}, n, a.cfg[e])
										: n;
								},
								registerAnimation: function (t, e) {
									this.Action || (this.Action = {}), (this.Action[t] = e);
								},
							};
						t.exports = a;
					},
					function (t, e, n) {
						'use strict';
						var r = n(16),
							i = r.Matrix,
							a = n(0),
							o = {
								getCoordInfo: function (t) {
									var e = t.start,
										n = t.end;
									return {
										start: e,
										end: n,
										width: n.x - e.x,
										height: Math.abs(n.y - e.y),
									};
								},
								getScaledMatrix: function (t, e, n) {
									var r;
									t.apply(e);
									var a = e[0],
										o = e[1];
									if ('x' === n) {
										t.transform([
											['t', a, o],
											['s', 0.01, 1],
											['t', -a, -o],
										]);
										var s = t.getMatrix();
										r = i.transform(s, [
											['t', a, o],
											['s', 100, 1],
											['t', -a, -o],
										]);
									} else if ('y' === n) {
										t.transform([
											['t', a, o],
											['s', 1, 0.01],
											['t', -a, -o],
										]);
										var u = t.getMatrix();
										r = i.transform(u, [
											['t', a, o],
											['s', 1, 100],
											['t', -a, -o],
										]);
									} else if ('xy' === n) {
										t.transform([
											['t', a, o],
											['s', 0.01, 0.01],
											['t', -a, -o],
										]);
										var c = t.getMatrix();
										r = i.transform(c, [
											['t', a, o],
											['s', 100, 100],
											['t', -a, -o],
										]);
									}
									return r;
								},
								getAnimateParam: function (t, e, n) {
									var r = {};
									return (
										t.delay &&
											(r.delay = a.isFunction(t.delay)
												? t.delay(e, n)
												: t.delay),
										(r.easing = t.easing),
										(r.duration = t.duration),
										(r.delay = t.delay),
										r
									);
								},
								doAnimation: function (t, e, n, r) {
									var i = t._id,
										a = t.get('index'),
										s = o.getAnimateParam(n, a, i),
										u = s.easing,
										c = s.delay,
										f = s.duration,
										l = t
											.animate()
											.to({ attrs: e, duration: f, delay: c, easing: u });
									r &&
										l.onEnd(function () {
											r();
										});
								},
							};
						t.exports = o;
					},
					,
					function (t, e, n) {
						'use strict';
						var r = n(17);
						n(210),
							n(72),
							n(190),
							n(212),
							n(191),
							n(214),
							n(216),
							(t.exports = r);
					},
					function (t, e, n) {
						'use strict';
						var r = n(1),
							i = r(n(2)),
							a = r(n(3)),
							o = r(n(4));
						function s(t) {
							return function () {
								var e,
									n = (0, a['default'])(t);
								if (u()) {
									var r = (0, a['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, i['default'])(this, e);
							};
						}
						function u() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var c = n(0),
							f = n(17);
						n(211);
						var l = (function (t) {
							(0, o['default'])(e, t);
							s(e);
							function e() {
								return t.apply(this, arguments) || this;
							}
							var n = e.prototype;
							return (
								(n.getDefaultCfg = function () {
									var e = t.prototype.getDefaultCfg.call(this);
									return (
										(e.type = 'point'),
										(e.shapeType = 'point'),
										(e.generatePoints = !1),
										e
									);
								}),
								(n.draw = function (t, e) {
									var n = this,
										r = n.get('container');
									c.each(t, function (t) {
										var i = t.shape,
											a = n.getDrawCfg(t);
										if (c.isArray(t.y)) {
											var o = n.hasAdjust('stack');
											c.each(t.y, function (s, u) {
												(a.y = s), (o && 0 === u) || n.drawShape(i, t, a, r, e);
											});
										} else c.isNil(t.y) || n.drawShape(i, t, a, r, e);
									});
								}),
								e
							);
						})(f);
						(f.Point = l), (t.exports = l);
					},
					function (t, e, n) {
						'use strict';
						var r = n(0),
							i = n(6),
							a = n(38),
							o = n(19),
							s = ['circle', 'hollowCircle', 'rect'],
							u = o.registerFactory('point', {
								defaultShapeType: 'circle',
								getDefaultPoints: function (t) {
									return a.splitPoints(t);
								},
							});
						function c(t) {
							var e = { lineWidth: 0, stroke: t.color, fill: t.color };
							return (
								t.size && (e.size = t.size),
								r.mix(e, t.style),
								r.mix({}, i.shape.point, e)
							);
						}
						function f(t, e, n) {
							if (0 !== t.size) {
								var i = c(t),
									a = i.r || i.size,
									o = t.x,
									s = r.isArray(t.y) ? t.y : [t.y];
								'hollowCircle' === n && ((i.lineWidth = 1), (i.fill = null));
								for (var u = 0, f = s.length; u < f; u++)
									return 'rect' === n
										? e.addShape('Rect', {
												className: 'point',
												attrs: r.mix(
													{
														x: o - a,
														y: s[u] - a,
														width: 2 * a,
														height: 2 * a,
													},
													i,
												),
										  })
										: e.addShape('Circle', {
												className: 'point',
												attrs: r.mix({ x: o, y: s[u], r: a }, i),
										  });
							}
						}
						r.each(s, function (t) {
							o.registerShape('point', t, {
								draw: function (e, n) {
									return f(e, n, t);
								},
							});
						}),
							(t.exports = u);
					},
					function (t, e, n) {
						'use strict';
						var r = n(1),
							i = r(n(2)),
							a = r(n(3)),
							o = r(n(4));
						function s(t) {
							return function () {
								var e,
									n = (0, a['default'])(t);
								if (u()) {
									var r = (0, a['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, i['default'])(this, e);
							};
						}
						function u() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var c = n(17),
							f = n(38),
							l = n(0);
						n(213);
						var h = (function (t) {
							(0, o['default'])(e, t);
							s(e);
							function e() {
								return t.apply(this, arguments) || this;
							}
							var n = e.prototype;
							return (
								(n.getDefaultCfg = function () {
									var e = t.prototype.getDefaultCfg.call(this);
									return (
										(e.type = 'area'),
										(e.shapeType = 'area'),
										(e.generatePoints = !0),
										(e.sortable = !0),
										e
									);
								}),
								(n.draw = function (t, e) {
									var n = this,
										r = n.get('container'),
										i = this.getDrawCfg(t[0]),
										a = n.getYScale(),
										o = n.get('connectNulls'),
										s = f.splitArray(t, a.field, o);
									(i.origin = t),
										l.each(s, function (a, o) {
											i.splitedIndex = o;
											var s = a.map(function (t) {
												return t.points;
											});
											(i.points = s), n.drawShape(i.shape, t[0], i, r, e);
										});
								}),
								e
							);
						})(c);
						(c.Area = h), (t.exports = h);
					},
					function (t, e, n) {
						'use strict';
						var r = n(0),
							i = n(19),
							a = n(71),
							o = n(21),
							s = n(6);
						function u(t, e) {
							return Math.abs(t - e) < 1e-5;
						}
						function c(t) {
							return !isNaN(t) && !r.isNil(t);
						}
						function f(t) {
							for (var e = [], n = 0, r = t.length; n < r; n++) {
								var i = t[n];
								c(i.x) && c(i.y) && e.push(i);
							}
							return e;
						}
						function l(t, e) {
							var n = !0;
							return (
								r.each(t, function (t) {
									if (!u(t.x, e.x) || !u(t.y, e.y)) return (n = !1), !1;
								}),
								n
							);
						}
						function h(t, e, n, i, s) {
							var u,
								c = t.concat(e);
							return (
								(u = s
									? n.addShape('Custom', {
											className: 'area',
											attrs: r.mix({ points: c }, i),
											createPath: function (t) {
												var e = [
														[0, 0],
														[1, 1],
													],
													n = f(this._attrs.attrs.points),
													r = n.length,
													i = n.slice(0, r / 2),
													o = n.slice(r / 2, r),
													s = a.smooth(i, !1, e);
												t.beginPath(), t.moveTo(i[0].x, i[0].y);
												for (var u = 0, c = s.length; u < c; u++) {
													var l = s[u];
													t.bezierCurveTo(l[1], l[2], l[3], l[4], l[5], l[6]);
												}
												if (o.length) {
													var h = a.smooth(o, !1, e);
													t.lineTo(o[0].x, o[0].y);
													for (var p = 0, d = h.length; p < d; p++) {
														var v = h[p];
														t.bezierCurveTo(v[1], v[2], v[3], v[4], v[5], v[6]);
													}
												}
												t.closePath();
											},
											calculateBox: function () {
												var t = f(this._attrs.attrs.points);
												return o.getBBoxFromPoints(t);
											},
									  })
									: n.addShape('Polyline', {
											className: 'area',
											attrs: r.mix({ points: c }, i),
									  })),
								u
							);
						}
						function p(t, e, n) {
							var i = this,
								a = t.points,
								o = [],
								u = [];
							r.each(a, function (t) {
								u.push(t[0]), o.push(t[1]);
							});
							var c = r.mix({ fillStyle: t.color }, s.shape.area, t.style);
							return (
								u.reverse(),
								(o = i.parsePoints(o)),
								(u = i.parsePoints(u)),
								t.isInCircle &&
									(o.push(o[0]),
									u.unshift(u[u.length - 1]),
									l(u, t.center) && (u = [])),
								h(o, u, e, c, n)
							);
						}
						var d = i.registerFactory('area', {
								defaultShapeType: 'area',
								getDefaultPoints: function (t) {
									var e = t.x,
										n = t.y,
										i = t.y0;
									n = r.isArray(n) ? n : [i, n];
									var a = [];
									return a.push({ x: e, y: n[0] }, { x: e, y: n[1] }), a;
								},
							}),
							v = ['area', 'smooth'];
						r.each(v, function (t) {
							i.registerShape('area', t, {
								draw: function (e, n) {
									var r = 'smooth' === t;
									return p.call(this, e, n, r);
								},
							});
						}),
							(t.exports = d);
					},
					function (t, e, n) {
						'use strict';
						var r = n(1),
							i = r(n(2)),
							a = r(n(3)),
							o = r(n(4));
						function s(t) {
							return function () {
								var e,
									n = (0, a['default'])(t);
								if (u()) {
									var r = (0, a['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, i['default'])(this, e);
							};
						}
						function u() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var c = n(17),
							f = n(0);
						n(215);
						var l = (function (t) {
							(0, o['default'])(e, t);
							s(e);
							function e() {
								return t.apply(this, arguments) || this;
							}
							var n = e.prototype;
							return (
								(n.getDefaultCfg = function () {
									var e = t.prototype.getDefaultCfg.call(this);
									return (
										(e.type = 'polygon'),
										(e.shapeType = 'polygon'),
										(e.generatePoints = !0),
										e
									);
								}),
								(n.createShapePointsCfg = function (e) {
									var n,
										r = t.prototype.createShapePointsCfg.call(this, e),
										i = this,
										a = r.x,
										o = r.y;
									if (!f.isArray(a) || !f.isArray(o)) {
										var s = i.getXScale(),
											u = i.getYScale(),
											c = s.values ? s.values.length : s.ticks.length,
											l = u.values ? u.values.length : u.ticks.length,
											h = 0.5 / c,
											p = 0.5 / l;
										s.isCategory && u.isCategory
											? ((a = [a - h, a - h, a + h, a + h]),
											  (o = [o - p, o + p, o + p, o - p]))
											: f.isArray(a)
											? ((n = a),
											  (a = [n[0], n[0], n[1], n[1]]),
											  (o = [o - p / 2, o + p / 2, o + p / 2, o - p / 2]))
											: f.isArray(o) &&
											  ((n = o),
											  (o = [n[0], n[1], n[1], n[0]]),
											  (a = [a - h / 2, a - h / 2, a + h / 2, a + h / 2])),
											(r.x = a),
											(r.y = o);
									}
									return r;
								}),
								e
							);
						})(c);
						(c.Polygon = l), (t.exports = l);
					},
					function (t, e, n) {
						'use strict';
						var r = n(19),
							i = n(0),
							a = r.registerFactory('polygon', {
								defaultShapeType: 'polygon',
								getDefaultPoints: function (t) {
									for (
										var e = [], n = t.x, r = t.y, i = 0, a = n.length;
										i < a;
										i++
									)
										e.push({ x: n[i], y: r[i] });
									return e;
								},
							});
						r.registerShape('polygon', 'polygon', {
							draw: function (t, e) {
								var n = this.parsePoints(t.points),
									r = i.mix({ fill: t.color, points: n }, t.style);
								return e.addShape('Polygon', {
									className: 'polygon',
									attrs: r,
								});
							},
						}),
							(t.exports = a);
					},
					function (t, e, n) {
						'use strict';
						var r = n(1),
							i = r(n(22)),
							a = r(n(2)),
							o = r(n(3)),
							s = r(n(4));
						function u(t) {
							return function () {
								var e,
									n = (0, o['default'])(t);
								if (c()) {
									var r = (0, o['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, a['default'])(this, e);
							};
						}
						function c() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var f = n(17),
							l = n(0),
							h = n(73);
						n(217);
						var p = (function (t) {
							(0, s['default'])(n, t);
							u(n);
							var e = n.prototype;
							function n(e) {
								var n;
								return (
									(n = t.call(this, e) || this),
									l.mix((0, i['default'])(n), h),
									n
								);
							}
							return (
								(e.getDefaultCfg = function () {
									var e = t.prototype.getDefaultCfg.call(this);
									return (
										(e.type = 'schema'),
										(e.shapeType = 'schema'),
										(e.generatePoints = !0),
										e
									);
								}),
								(e.init = function () {
									t.prototype.init.call(this), this.initEvent();
								}),
								(e.createShapePointsCfg = function (e) {
									var n = t.prototype.createShapePointsCfg.call(this, e);
									return (n.size = this.getNormalizedSize(e)), n;
								}),
								(e.clearInner = function () {
									t.prototype.clearInner.call(this),
										this.set('defaultSize', null);
								}),
								n
							);
						})(f);
						(f.Schema = p), (t.exports = p);
					},
					function (t, e, n) {
						'use strict';
						var r = n(19),
							i = n(0);
						function a(t) {
							var e = t.sort(function (t, e) {
									return t < e ? 1 : -1;
								}),
								n = e.length;
							if (n < 4)
								for (var r = e[n - 1], i = 0; i < 4 - n; i++) e.push(r);
							return e;
						}
						function o(t, e, n) {
							var r = a(e),
								i = [
									{ x: t, y: r[0] },
									{ x: t, y: r[1] },
									{ x: t - n / 2, y: r[2] },
									{ x: t - n / 2, y: r[1] },
									{ x: t + n / 2, y: r[1] },
									{ x: t + n / 2, y: r[2] },
									{ x: t, y: r[2] },
									{ x: t, y: r[3] },
								];
							return i;
						}
						var s = r.registerFactory('schema', {});
						r.registerShape('schema', 'candle', {
							getPoints: function (t) {
								return o(t.x, t.y, t.size);
							},
							draw: function (t, e) {
								var n = this.parsePoints(t.points),
									r = i.mix(
										{ stroke: t.color, fill: t.color, lineWidth: 1 },
										t.style,
									);
								return e.addShape('Custom', {
									className: 'schema',
									attrs: r,
									createPath: function (t) {
										t.beginPath(),
											t.moveTo(n[0].x, n[0].y),
											t.lineTo(n[1].x, n[1].y),
											t.moveTo(n[2].x, n[2].y);
										for (var e = 3; e < 6; e++) t.lineTo(n[e].x, n[e].y);
										t.closePath(),
											t.moveTo(n[6].x, n[6].y),
											t.lineTo(n[7].x, n[7].y);
									},
								});
							},
						}),
							(t.exports = s);
					},
					function (t, e, n) {
						'use strict';
						var r = n(1),
							i = r(n(2)),
							a = r(n(3)),
							o = r(n(4));
						function s(t) {
							return function () {
								var e,
									n = (0, a['default'])(t);
								if (u()) {
									var r = (0, a['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, i['default'])(this, e);
							};
						}
						function u() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var c = n(0),
							f = n(45),
							l = (function (t) {
								(0, o['default'])(e, t);
								s(e);
								function e() {
									return t.apply(this, arguments) || this;
								}
								var n = e.prototype;
								return (
									(n._initDefaultCfg = function () {
										t.prototype._initDefaultCfg.call(this),
											(this.startAngle = -Math.PI / 2),
											(this.endAngle = (3 * Math.PI) / 2),
											(this.radius = null),
											(this.center = null);
									}),
									(n.getOffsetPoint = function (t) {
										var e = this.startAngle,
											n = this.endAngle,
											r = e + (n - e) * t;
										return this._getCirclePoint(r);
									}),
									(n._getCirclePoint = function (t, e) {
										var n = this,
											r = n.center;
										return (
											(e = e || n.radius),
											{ x: r.x + Math.cos(t) * e, y: r.y + Math.sin(t) * e }
										);
									}),
									(n.getTextAlignInfo = function (t, e) {
										var n,
											r = this,
											i = r.getOffsetVector(t, e),
											a = 'middle';
										return (
											i[0] > 0
												? (n = 'left')
												: i[0] < 0
												? (n = 'right')
												: ((n = 'center'),
												  i[1] > 0 ? (a = 'top') : i[1] < 0 && (a = 'bottom')),
											{ textAlign: n, textBaseline: a }
										);
									}),
									(n.getAxisVector = function (t) {
										var e = this.center,
											n = this.offsetFactor;
										return [(t.y - e.y) * n, -1 * (t.x - e.x) * n];
									}),
									(n.drawLine = function (t) {
										var e = this.center,
											n = this.radius,
											r = this.startAngle,
											i = this.endAngle,
											a = this.getContainer(t.top);
										a.addShape('arc', {
											className: 'axis-line',
											attrs: c.mix(
												{ x: e.x, y: e.y, r: n, startAngle: r, endAngle: i },
												t,
											),
										});
									}),
									e
								);
							})(f);
						(f.Circle = l), (t.exports = l);
					},
					function (t, e, n) {
						'use strict';
						var r = n(220);
						t.exports = r;
					},
					function (t, e, n) {
						function r(t, e) {
							(t.prototype = Object.create(e.prototype)),
								(t.prototype.constructor = t),
								(t.__proto__ = e);
						}
						var i = n(26),
							a = n(69),
							o = n(221),
							s = n(65),
							u = n(204),
							c = n(15),
							f = n(36),
							l = n(44),
							h = n(48),
							p = (function (t) {
								function e() {
									return t.apply(this, arguments) || this;
								}
								r(e, t);
								var n = e.prototype;
								return (
									(n._initDefaultCfg = function () {
										t.prototype._initDefaultCfg.call(this),
											(this.type = 'timeCat'),
											(this.sortable = !0),
											(this.tickCount = 5),
											(this.mask = 'YYYY-MM-DD');
									}),
									(n.init = function () {
										var t = this,
											e = this.values;
										c(e, function (n, r) {
											e[r] = t._toTimeStamp(n);
										}),
											this.sortable &&
												e.sort(function (t, e) {
													return t - e;
												}),
											t.ticks || (t.ticks = this.calculateTicks());
									}),
									(n.calculateTicks = function () {
										var t,
											e = this,
											n = e.tickCount;
										if (n) {
											var r = s({
												maxCount: n,
												data: e.values,
												isRounding: e.isRounding,
											});
											t = r.ticks;
										} else t = e.values;
										return t;
									}),
									(n.translate = function (t) {
										t = this._toTimeStamp(t);
										var e = this.values.indexOf(t);
										return (
											-1 === e &&
												(e = f(t) && t < this.values.length ? t : NaN),
											e
										);
									}),
									(n.scale = function (t) {
										var e,
											n = this.rangeMin(),
											r = this.rangeMax(),
											i = this.translate(t);
										return (
											(e =
												1 === this.values.length || isNaN(i)
													? i
													: i > -1
													? i / (this.values.length - 1)
													: 0),
											n + e * (r - n)
										);
									}),
									(n.getText = function (t) {
										var e = '',
											n = this.translate(t);
										e = n > -1 ? this.values[n] : t;
										var r = this.formatter;
										return (
											(e = parseInt(e, 10)),
											(e = r ? r(e) : o.format(e, this.mask)),
											e
										);
									}),
									(n.getTicks = function () {
										var t = this,
											e = this.ticks,
											n = [];
										return (
											c(e, function (e) {
												var r;
												(r = l(e)
													? e
													: {
															text: h(e) ? e : t.getText(e),
															value: t.scale(e),
															tickValue: e,
													  }),
													n.push(r);
											}),
											n
										);
									}),
									(n._toTimeStamp = function (t) {
										return u.toTimeStamp(t);
									}),
									e
								);
							})(a);
						(i.TimeCat = p), (t.exports = p);
					},
					function (t, e, n) {
						var r;
						(function (i) {
							'use strict';
							var a = {},
								o = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,
								s = /\d\d?/,
								u = /\d{3}/,
								c = /\d{4}/,
								f = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
								l = /\[([^]*?)\]/gm,
								h = function () {};
							function p(t, e) {
								for (var n = [], r = 0, i = t.length; r < i; r++)
									n.push(t[r].substr(0, e));
								return n;
							}
							function d(t) {
								return function (e, n, r) {
									var i = r[t].indexOf(
										n.charAt(0).toUpperCase() + n.substr(1).toLowerCase(),
									);
									~i && (e.month = i);
								};
							}
							function v(t, e) {
								(t = String(t)), (e = e || 2);
								while (t.length < e) t = '0' + t;
								return t;
							}
							var g = [
									'Sunday',
									'Monday',
									'Tuesday',
									'Wednesday',
									'Thursday',
									'Friday',
									'Saturday',
								],
								y = [
									'January',
									'February',
									'March',
									'April',
									'May',
									'June',
									'July',
									'August',
									'September',
									'October',
									'November',
									'December',
								],
								x = p(y, 3),
								m = p(g, 3);
							a.i18n = {
								dayNamesShort: m,
								dayNames: g,
								monthNamesShort: x,
								monthNames: y,
								amPm: ['am', 'pm'],
								DoFn: function (t) {
									return (
										t +
										['th', 'st', 'nd', 'rd'][
											t % 10 > 3 ? 0 : ((t - (t % 10) !== 10) * t) % 10
										]
									);
								},
							};
							var _ = {
									D: function (t) {
										return t.getDate();
									},
									DD: function (t) {
										return v(t.getDate());
									},
									Do: function (t, e) {
										return e.DoFn(t.getDate());
									},
									d: function (t) {
										return t.getDay();
									},
									dd: function (t) {
										return v(t.getDay());
									},
									ddd: function (t, e) {
										return e.dayNamesShort[t.getDay()];
									},
									dddd: function (t, e) {
										return e.dayNames[t.getDay()];
									},
									M: function (t) {
										return t.getMonth() + 1;
									},
									MM: function (t) {
										return v(t.getMonth() + 1);
									},
									MMM: function (t, e) {
										return e.monthNamesShort[t.getMonth()];
									},
									MMMM: function (t, e) {
										return e.monthNames[t.getMonth()];
									},
									YY: function (t) {
										return String(t.getFullYear()).substr(2);
									},
									YYYY: function (t) {
										return v(t.getFullYear(), 4);
									},
									h: function (t) {
										return t.getHours() % 12 || 12;
									},
									hh: function (t) {
										return v(t.getHours() % 12 || 12);
									},
									H: function (t) {
										return t.getHours();
									},
									HH: function (t) {
										return v(t.getHours());
									},
									m: function (t) {
										return t.getMinutes();
									},
									mm: function (t) {
										return v(t.getMinutes());
									},
									s: function (t) {
										return t.getSeconds();
									},
									ss: function (t) {
										return v(t.getSeconds());
									},
									S: function (t) {
										return Math.round(t.getMilliseconds() / 100);
									},
									SS: function (t) {
										return v(Math.round(t.getMilliseconds() / 10), 2);
									},
									SSS: function (t) {
										return v(t.getMilliseconds(), 3);
									},
									a: function (t, e) {
										return t.getHours() < 12 ? e.amPm[0] : e.amPm[1];
									},
									A: function (t, e) {
										return t.getHours() < 12
											? e.amPm[0].toUpperCase()
											: e.amPm[1].toUpperCase();
									},
									ZZ: function (t) {
										var e = t.getTimezoneOffset();
										return (
											(e > 0 ? '-' : '+') +
											v(
												100 * Math.floor(Math.abs(e) / 60) + (Math.abs(e) % 60),
												4,
											)
										);
									},
								},
								b = {
									D: [
										s,
										function (t, e) {
											t.day = e;
										},
									],
									Do: [
										new RegExp(s.source + f.source),
										function (t, e) {
											t.day = parseInt(e, 10);
										},
									],
									M: [
										s,
										function (t, e) {
											t.month = e - 1;
										},
									],
									YY: [
										s,
										function (t, e) {
											var n = new Date(),
												r = +('' + n.getFullYear()).substr(0, 2);
											t.year = '' + (e > 68 ? r - 1 : r) + e;
										},
									],
									h: [
										s,
										function (t, e) {
											t.hour = e;
										},
									],
									m: [
										s,
										function (t, e) {
											t.minute = e;
										},
									],
									s: [
										s,
										function (t, e) {
											t.second = e;
										},
									],
									YYYY: [
										c,
										function (t, e) {
											t.year = e;
										},
									],
									S: [
										/\d/,
										function (t, e) {
											t.millisecond = 100 * e;
										},
									],
									SS: [
										/\d{2}/,
										function (t, e) {
											t.millisecond = 10 * e;
										},
									],
									SSS: [
										u,
										function (t, e) {
											t.millisecond = e;
										},
									],
									d: [s, h],
									ddd: [f, h],
									MMM: [f, d('monthNamesShort')],
									MMMM: [f, d('monthNames')],
									a: [
										f,
										function (t, e, n) {
											var r = e.toLowerCase();
											r === n.amPm[0]
												? (t.isPm = !1)
												: r === n.amPm[1] && (t.isPm = !0);
										},
									],
									ZZ: [
										/([\+\-]\d\d:?\d\d|Z)/,
										function (t, e) {
											'Z' === e && (e = '+00:00');
											var n,
												r = (e + '').match(/([\+\-]|\d\d)/gi);
											r &&
												((n = 60 * r[1] + parseInt(r[2], 10)),
												(t.timezoneOffset = '+' === r[0] ? n : -n));
										},
									],
								};
							(b.dd = b.d),
								(b.dddd = b.ddd),
								(b.DD = b.D),
								(b.mm = b.m),
								(b.hh = b.H = b.HH = b.h),
								(b.MM = b.M),
								(b.ss = b.s),
								(b.A = b.a),
								(a.masks = {
									default: 'ddd MMM DD YYYY HH:mm:ss',
									shortDate: 'M/D/YY',
									mediumDate: 'MMM D, YYYY',
									longDate: 'MMMM D, YYYY',
									fullDate: 'dddd, MMMM D, YYYY',
									shortTime: 'HH:mm',
									mediumTime: 'HH:mm:ss',
									longTime: 'HH:mm:ss.SSS',
								}),
								(a.format = function (t, e, n) {
									var r = n || a.i18n;
									if (
										('number' === typeof t && (t = new Date(t)),
										'[object Date]' !== Object.prototype.toString.call(t) ||
											isNaN(t.getTime()))
									)
										throw new Error('Invalid Date in fecha.format');
									e = a.masks[e] || e || a.masks['default'];
									var i = [];
									return (
										(e = e.replace(l, function (t, e) {
											return i.push(e), '??';
										})),
										(e = e.replace(o, function (e) {
											return e in _ ? _[e](t, r) : e.slice(1, e.length - 1);
										})),
										e.replace(/\?\?/g, function () {
											return i.shift();
										})
									);
								}),
								(a.parse = function (t, e, n) {
									var r = n || a.i18n;
									if ('string' !== typeof e)
										throw new Error('Invalid format in fecha.parse');
									if (((e = a.masks[e] || e), t.length > 1e3)) return !1;
									var i = !0,
										s = {};
									if (
										(e.replace(o, function (e) {
											if (b[e]) {
												var n = b[e],
													a = t.search(n[0]);
												~a
													? t.replace(n[0], function (e) {
															return (
																n[1](s, e, r), (t = t.substr(a + e.length)), e
															);
													  })
													: (i = !1);
											}
											return b[e] ? '' : e.slice(1, e.length - 1);
										}),
										!i)
									)
										return !1;
									var u,
										c = new Date();
									return (
										!0 === s.isPm && null != s.hour && 12 !== +s.hour
											? (s.hour = +s.hour + 12)
											: !1 === s.isPm && 12 === +s.hour && (s.hour = 0),
										null != s.timezoneOffset
											? ((s.minute = +(s.minute || 0) - +s.timezoneOffset),
											  (u = new Date(
													Date.UTC(
														s.year || c.getFullYear(),
														s.month || 0,
														s.day || 1,
														s.hour || 0,
														s.minute || 0,
														s.second || 0,
														s.millisecond || 0,
													),
											  )))
											: (u = new Date(
													s.year || c.getFullYear(),
													s.month || 0,
													s.day || 1,
													s.hour || 0,
													s.minute || 0,
													s.second || 0,
													s.millisecond || 0,
											  )),
										u
									);
								}),
								'undefined' !== typeof t && t.exports
									? (t.exports = a)
									: ((r = function () {
											return a;
									  }.call(e, n, e, t)),
									  void 0 === r || (t.exports = r));
						})();
					},
					function (t, e, n) {
						var r = n(27),
							i = function (t) {
								return r(t, 'Date');
							};
						t.exports = i;
					},
					function (t, e, n) {
						'use strict';
						var r = n(1),
							i = r(n(2)),
							a = r(n(3)),
							o = r(n(4));
						function s(t) {
							return function () {
								var e,
									n = (0, a['default'])(t);
								if (u()) {
									var r = (0, a['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, i['default'])(this, e);
							};
						}
						function u() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var c = n(0),
							f = n(23),
							l = (function (t) {
								(0, o['default'])(e, t);
								s(e);
								function e() {
									return t.apply(this, arguments) || this;
								}
								var n = e.prototype;
								return (
									(n._initDefaultCfg = function () {
										(this.type = 'arc'),
											(this.start = []),
											(this.end = []),
											(this.style = { stroke: '#999', lineWidth: 1 });
									}),
									(n.render = function (t, e) {
										var n = this,
											r = n.parsePoint(t, n.start),
											i = n.parsePoint(t, n.end);
										if (r && i) {
											var a = t.center,
												o = Math.sqrt(
													(r.x - a.x) * (r.x - a.x) + (r.y - a.y) * (r.y - a.y),
												),
												s = Math.atan2(r.y - a.y, r.x - a.x),
												u = Math.atan2(i.y - a.y, i.x - a.x),
												f = e.addShape('arc', {
													className: 'guide-arc',
													attrs: c.mix(
														{
															x: a.x,
															y: a.y,
															r: o,
															startAngle: s,
															endAngle: u,
														},
														n.style,
													),
												});
											return (n.element = f), f;
										}
									}),
									e
								);
							})(f);
						(f.Arc = l), (t.exports = l);
					},
					function (t, e, n) {
						'use strict';
						var r = n(1),
							i = r(n(2)),
							a = r(n(3)),
							o = r(n(4));
						function s(t) {
							return function () {
								var e,
									n = (0, a['default'])(t);
								if (u()) {
									var r = (0, a['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, i['default'])(this, e);
							};
						}
						function u() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var c = n(0),
							f = n(23);
						function l(t, e, n, r) {
							var i = [];
							return (
								'left' === t && 'top' === e
									? ((i[0] = 0), (i[1] = 0))
									: 'right' === t && 'top' === e
									? ((i[0] = -n), (i[1] = 0))
									: 'left' === t && 'bottom' === e
									? ((i[0] = 0), (i[1] = Math.floor(-r)))
									: 'right' === t && 'bottom' === e
									? ((i[0] = Math.floor(-n)), (i[1] = Math.floor(-r)))
									: 'right' === t && 'middle' === e
									? ((i[0] = Math.floor(-n)), (i[1] = Math.floor(-r / 2)))
									: 'left' === t && 'middle' === e
									? ((i[0] = 0), (i[1] = Math.floor(-r / 2)))
									: 'center' === t && 'bottom' === e
									? ((i[0] = Math.floor(-n / 2)), (i[1] = Math.floor(-r)))
									: 'center' === t && 'top' === e
									? ((i[0] = Math.floor(-n / 2)), (i[1] = 0))
									: ((i[0] = Math.floor(-n / 2)), (i[1] = Math.floor(-r / 2))),
								i
							);
						}
						function h(t, e) {
							for (var n in e) e.hasOwnProperty(n) && (t.style[n] = e[n]);
							return t;
						}
						function p(t) {
							var e = document.createElement('div');
							return (
								(t = t.replace(/(^\s*)|(\s*$)/g, '')),
								(e.innerHTML = '' + t),
								e.childNodes[0]
							);
						}
						var d = (function (t) {
							(0, o['default'])(e, t);
							s(e);
							function e() {
								return t.apply(this, arguments) || this;
							}
							var n = e.prototype;
							return (
								(n._initDefaultCfg = function () {
									(this.type = 'html'),
										(this.position = null),
										(this.alignX = 'center'),
										(this.alignY = 'middle'),
										(this.offsetX = null),
										(this.offsetY = null),
										(this.html = null);
								}),
								(n.render = function (t, e) {
									var n = this,
										r = n.parsePoint(t, n.position);
									if (r) {
										var i = p(n.html);
										i = h(i, {
											position: 'absolute',
											top: Math.floor(r.y) + 'px',
											left: Math.floor(r.x) + 'px',
											visibility: 'hidden',
										});
										var a = e.get('canvas').get('el'),
											o = a.parentNode;
										o = h(o, { position: 'relative' });
										var s = p(
											'<div class="guideWapper" style="position: absolute;top: 0; left: 0;"></div>',
										);
										o.appendChild(s), s.appendChild(i);
										var u = a.offsetTop,
											f = a.offsetLeft,
											d = n.alignX,
											v = n.alignY,
											g = n.offsetX,
											y = n.offsetY,
											x = c.getWidth(i),
											m = c.getHeight(i),
											_ = l(d, v, x, m);
										(r.x = r.x + _[0] + f),
											(r.y = r.y + _[1] + u),
											g && (r.x += g),
											y && (r.y += y),
											h(i, {
												top: Math.floor(r.y) + 'px',
												left: Math.floor(r.x) + 'px',
												visibility: 'visible',
											}),
											(n.element = s);
									}
								}),
								(n.remove = function () {
									var t = this.element;
									t && t.parentNode && t.parentNode.removeChild(t);
								}),
								e
							);
						})(f);
						(f.Html = d), (t.exports = d);
					},
					function (t, e, n) {
						'use strict';
						var r = n(1),
							i = r(n(2)),
							a = r(n(3)),
							o = r(n(4));
						function s(t) {
							return function () {
								var e,
									n = (0, a['default'])(t);
								if (u()) {
									var r = (0, a['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, i['default'])(this, e);
							};
						}
						function u() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var c = n(0),
							f = n(23),
							l = (function (t) {
								(0, o['default'])(e, t);
								s(e);
								function e() {
									return t.apply(this, arguments) || this;
								}
								var n = e.prototype;
								return (
									(n._initDefaultCfg = function () {
										(this.type = 'line'),
											(this.start = []),
											(this.end = []),
											(this.style = { stroke: '#000', lineWidth: 1 });
									}),
									(n.render = function (t, e) {
										var n = [];
										if (
											((n[0] = this.parsePoint(t, this.start)),
											(n[1] = this.parsePoint(t, this.end)),
											n[0] && n[1])
										) {
											var r = e.addShape('Line', {
												className: 'guide-line',
												attrs: c.mix(
													{ x1: n[0].x, y1: n[0].y, x2: n[1].x, y2: n[1].y },
													this.style,
												),
											});
											return (this.element = r), r;
										}
									}),
									e
								);
							})(f);
						(f.Line = l), (t.exports = l);
					},
					function (t, e, n) {
						'use strict';
						var r = n(1),
							i = r(n(2)),
							a = r(n(3)),
							o = r(n(4));
						function s(t) {
							return function () {
								var e,
									n = (0, a['default'])(t);
								if (u()) {
									var r = (0, a['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, i['default'])(this, e);
							};
						}
						function u() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var c = n(0),
							f = n(23),
							l = (function (t) {
								(0, o['default'])(e, t);
								s(e);
								function e() {
									return t.apply(this, arguments) || this;
								}
								var n = e.prototype;
								return (
									(n._initDefaultCfg = function () {
										(this.type = 'rect'),
											(this.start = []),
											(this.end = []),
											(this.style = { fill: '#CCD7EB', opacity: 0.4 });
									}),
									(n.render = function (t, e) {
										var n = this.parsePoint(t, this.start),
											r = this.parsePoint(t, this.end);
										if (n && r) {
											var i = e.addShape('rect', {
												className: 'guide-rect',
												attrs: c.mix(
													{
														x: Math.min(n.x, r.x),
														y: Math.min(n.y, r.y),
														width: Math.abs(r.x - n.x),
														height: Math.abs(n.y - r.y),
													},
													this.style,
												),
											});
											return (this.element = i), i;
										}
									}),
									e
								);
							})(f);
						(f.Rect = l), (t.exports = l);
					},
					function (t, e, n) {
						'use strict';
						var r = n(1),
							i = r(n(2)),
							a = r(n(3)),
							o = r(n(4));
						function s(t) {
							return function () {
								var e,
									n = (0, a['default'])(t);
								if (u()) {
									var r = (0, a['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, i['default'])(this, e);
							};
						}
						function u() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var c = n(0),
							f = n(23),
							l = (function (t) {
								(0, o['default'])(e, t);
								s(e);
								function e() {
									return t.apply(this, arguments) || this;
								}
								var n = e.prototype;
								return (
									(n._initDefaultCfg = function () {
										(this.type = 'text'),
											(this.position = null),
											(this.content = null),
											(this.style = { fill: '#000' }),
											(this.offsetX = 0),
											(this.offsetY = 0);
									}),
									(n.render = function (t, e) {
										var n = this.position,
											r = this.parsePoint(t, n);
										if (r) {
											var i = this.content,
												a = this.style,
												o = this.offsetX,
												s = this.offsetY;
											o && (r.x += o), s && (r.y += s);
											var u = e.addShape('text', {
												className: 'guide-text',
												attrs: c.mix({ x: r.x, y: r.y, text: i }, a),
											});
											return (this.element = u), u;
										}
									}),
									e
								);
							})(f);
						(f.Text = l), (t.exports = l);
					},
					function (t, e, n) {
						'use strict';
						var r = n(1),
							i = r(n(2)),
							a = r(n(3)),
							o = r(n(4));
						function s(t) {
							return function () {
								var e,
									n = (0, a['default'])(t);
								if (u()) {
									var r = (0, a['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, i['default'])(this, e);
							};
						}
						function u() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var c = n(0),
							f = n(23),
							l = (function (t) {
								(0, o['default'])(e, t);
								s(e);
								function e() {
									return t.apply(this, arguments) || this;
								}
								var n = e.prototype;
								return (
									(n._initDefaultCfg = function () {
										(this.type = 'tag'),
											(this.position = null),
											(this.content = null),
											(this.direct = 'tl'),
											(this.autoAdjust = !0),
											(this.offsetX = 0),
											(this.offsetY = 0),
											(this.side = 4),
											(this.background = {
												padding: 5,
												radius: 2,
												fill: '#1890FF',
											}),
											(this.textStyle = {
												fontSize: 12,
												fill: '#fff',
												textAlign: 'center',
												textBaseline: 'middle',
											}),
											(this.withPoint = !0),
											(this.pointStyle = {
												fill: '#1890FF',
												r: 3,
												lineWidth: 1,
												stroke: '#fff',
											});
									}),
									(n._getDirect = function (t, e, n, r) {
										var i = this.direct,
											a = this.side,
											o = t.get('canvas'),
											s = o.get('width'),
											u = o.get('height'),
											c = e.x,
											f = e.y,
											l = i[0],
											h = i[1];
										't' === l && f - a - r < 0
											? (l = 'b')
											: 'b' === l && f + a + r > u && (l = 't');
										var p = 'c' === l ? a : 0;
										return (
											'l' === h && c - p - n < 0
												? (h = 'r')
												: 'r' === h && c + p + n > s
												? (h = 'l')
												: 'c' === h &&
												  (n / 2 + c + p > s
														? (h = 'l')
														: c - n / 2 - p < 0 && (h = 'r')),
											(i = l + h),
											i
										);
									}),
									(n.render = function (t, e) {
										var n = this.parsePoint(t, this.position);
										if (n && !isNaN(n.x) && !isNaN(n.y)) {
											var r = this.content,
												i = this.background,
												a = this.textStyle,
												o = [],
												s = e.addGroup({ className: 'guide-tag' });
											if (this.withPoint) {
												var u = s.addShape('Circle', {
													className: 'guide-tag-point',
													attrs: c.mix({ x: n.x, y: n.y }, this.pointStyle),
												});
												o.push(u);
											}
											var f = s.addGroup(),
												l = f.addShape('text', {
													className: 'guide-tag-text',
													zIndex: 1,
													attrs: c.mix({ x: 0, y: 0, text: r }, a),
												});
											o.push(l);
											var h = l.getBBox(),
												p = c.parsePadding(i.padding),
												d = h.width + p[1] + p[3],
												v = h.height + p[0] + p[2],
												g = h.minY - p[0],
												y = h.minX - p[3],
												x = f.addShape('rect', {
													className: 'guide-tag-bg',
													zIndex: -1,
													attrs: c.mix({ x: y, y: g, width: d, height: v }, i),
												});
											o.push(x);
											var m,
												_ = this.autoAdjust
													? this._getDirect(e, n, d, v)
													: this.direct,
												b = this.side,
												S = n.x + this.offsetX,
												P = n.y + this.offsetY,
												w = c.parsePadding(i.radius);
											'tl' === _
												? ((m = [
														{ x: d + y - b - 1, y: v + g - 1 },
														{ x: d + y, y: v + g - 1 },
														{ x: d + y, y: v + b + g },
												  ]),
												  (w[2] = 0),
												  (S -= d),
												  (P = P - b - v))
												: 'cl' === _
												? ((m = [
														{ x: d + y - 1, y: (v - b) / 2 + g - 1 },
														{ x: d + y - 1, y: (v + b) / 2 + g + 1 },
														{ x: d + b + y, y: v / 2 + g },
												  ]),
												  (S = S - d - b),
												  (P -= v / 2))
												: 'bl' === _
												? ((m = [
														{ x: d + y, y: -b + g },
														{ x: d + y - b - 1, y: g + 1 },
														{ x: d + y, y: g + 1 },
												  ]),
												  (w[1] = 0),
												  (S -= d),
												  (P += b))
												: 'bc' === _
												? ((m = [
														{ x: d / 2 + y, y: -b + g },
														{ x: (d - b) / 2 + y - 1, y: g + 1 },
														{ x: (d + b) / 2 + y + 1, y: g + 1 },
												  ]),
												  (S -= d / 2),
												  (P += b))
												: 'br' === _
												? ((m = [
														{ x: y, y: g - b },
														{ x: y, y: g + 1 },
														{ x: y + b + 1, y: g + 1 },
												  ]),
												  (w[0] = 0),
												  (P += b))
												: 'cr' === _
												? ((m = [
														{ x: y - b, y: v / 2 + g },
														{ x: y + 1, y: (v - b) / 2 + g - 1 },
														{ x: y + 1, y: (v + b) / 2 + g + 1 },
												  ]),
												  (S += b),
												  (P -= v / 2))
												: 'tr' === _
												? ((m = [
														{ x: y, y: v + b + g },
														{ x: y, y: v + g - 1 },
														{ x: b + y + 1, y: v + g - 1 },
												  ]),
												  (w[3] = 0),
												  (P = P - v - b))
												: 'tc' === _ &&
												  ((m = [
														{ x: (d - b) / 2 + y - 1, y: v + g - 1 },
														{ x: (d + b) / 2 + y + 1, y: v + g - 1 },
														{ x: d / 2 + y, y: v + b + g },
												  ]),
												  (S -= d / 2),
												  (P = P - v - b));
											var C = f.addShape('Polygon', {
												className: 'guide-tag-side',
												zIndex: 0,
												attrs: { points: m, fill: i.fill },
											});
											return (
												o.push(C),
												x.attr('radius', w),
												f.moveTo(S - y, P - g),
												f.sort(),
												(this.element = s),
												o
											);
										}
									}),
									e
								);
							})(f);
						(f.Tag = l), (t.exports = l);
					},
					function (t, e, n) {
						'use strict';
						var r = n(1),
							i = r(n(2)),
							a = r(n(3)),
							o = r(n(4));
						function s(t) {
							return function () {
								var e,
									n = (0, a['default'])(t);
								if (u()) {
									var r = (0, a['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, i['default'])(this, e);
							};
						}
						function u() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var c = n(0),
							f = n(23),
							l = (function (t) {
								(0, o['default'])(e, t);
								s(e);
								function e() {
									return t.apply(this, arguments) || this;
								}
								var n = e.prototype;
								return (
									(n._initDefaultCfg = function () {
										(this.type = 'point'),
											(this.position = null),
											(this.offsetX = 0),
											(this.offsetY = 0),
											(this.style = {
												fill: '#1890FF',
												r: 3,
												lineWidth: 1,
												stroke: '#fff',
											});
									}),
									(n.render = function (t, e) {
										var n = this.parsePoint(t, this.position);
										if (!n) return null;
										var r = e.addShape('Circle', {
											className: 'guide-point',
											attrs: c.mix(
												{ x: n.x + this.offsetX, y: n.y + this.offsetY },
												this.style,
											),
										});
										return (this.element = r), r;
									}),
									e
								);
							})(f);
						(f.Point = l), (t.exports = l);
					},
					function (t, e, n) {
						'use strict';
						var r = n(0),
							i = n(6),
							a = n(231),
							o = n(37);
						function s(t) {
							var e = t.getAttr('color');
							if (e) {
								var n = e.getScale(e.type);
								if (n.isLinear) return n;
							}
							var r = t.getXScale(),
								i = t.getYScale();
							return i || r;
						}
						function u(t, e) {
							var n,
								i,
								a = t._getGroupScales();
							if (
								(a.length &&
									r.each(a, function (t) {
										return (i = t), !1;
									}),
								i)
							) {
								var o = i.field;
								n = i.getText(e[o]);
							} else {
								var u = s(t);
								n = u.alias || u.field;
							}
							return n;
						}
						function c(t, e) {
							var n = s(t);
							return n.getText(e[n.field]);
						}
						function f(t, e) {
							var n = t.getAttr('position'),
								r = n.getFields()[0],
								i = t.get('scales')[r];
							return i.getText(e[i.field]);
						}
						function l(t, e) {
							var n = -1;
							return (
								r.each(t, function (t, r) {
									if (
										t.title === e.title &&
										t.name === e.name &&
										t.value === e.value &&
										t.color === e.color
									)
										return (n = r), !1;
								}),
								n
							);
						}
						function h(t) {
							var e = [];
							return (
								r.each(t, function (t) {
									var n = l(e, t);
									-1 === n ? e.push(t) : (e[n] = t);
								}),
								e
							);
						}
						function p(t, e) {
							return JSON.stringify(t) === JSON.stringify(e);
						}
						i.tooltip = r.deepMix(
							{
								triggerOn: 'press',
								triggerOff: 'pressend',
								alwaysShow: !1,
								showTitle: !1,
								showCrosshairs: !1,
								crosshairsStyle: {
									stroke: 'rgba(0, 0, 0, 0.25)',
									lineWidth: 1,
								},
								showTooltipMarker: !0,
								background: {
									radius: 1,
									fill: 'rgba(0, 0, 0, 0.65)',
									padding: [3, 5],
								},
								titleStyle: {
									fontSize: 12,
									fill: '#fff',
									textAlign: 'start',
									textBaseline: 'top',
								},
								nameStyle: {
									fontSize: 12,
									fill: 'rgba(255, 255, 255, 0.65)',
									textAlign: 'start',
									textBaseline: 'middle',
								},
								valueStyle: {
									fontSize: 12,
									fill: '#fff',
									textAlign: 'start',
									textBaseline: 'middle',
								},
								showItemMarker: !0,
								itemMarkerStyle: {
									radius: 3,
									symbol: 'circle',
									lineWidth: 1,
									stroke: '#fff',
								},
								layout: 'horizontal',
								snap: !1,
							},
							i.tooltip || {},
						);
						var d = (function () {
							function t(t) {
								var e = this;
								(this.handleShowEvent = function (t) {
									var n = e.chart;
									if (e.enable) {
										var i = n.get('plotRange'),
											a = r.createEvent(t, n);
										if (o.isPointInPlot(a, i) || e._tooltipCfg.alwaysShow) {
											var s = e.timeStamp,
												u = +new Date();
											u - s > 16 && (e.showTooltip(a), (e.timeStamp = u));
										} else e.hideTooltip();
									}
								}),
									(this.handleHideEvent = function () {
										e.enable && e.hideTooltip();
									}),
									(this.enable = !0),
									(this.cfg = {}),
									(this.tooltip = null),
									(this.chart = null),
									(this.timeStamp = 0),
									r.mix(this, t);
								var n = this.chart,
									i = n.get('canvas');
								(this.canvas = i), (this.canvasDom = i.get('el'));
							}
							var e = t.prototype;
							return (
								(e._setCrosshairsCfg = function () {
									var t = this,
										e = t.chart,
										n = r.mix({}, i.tooltip),
										a = e.get('geoms'),
										o = [];
									r.each(a, function (t) {
										var e = t.get('type');
										-1 === o.indexOf(e) && o.push(e);
									});
									var s = e.get('coord').type;
									return (
										!a.length ||
											('cartesian' !== s && 'rect' !== s) ||
											(1 === o.length &&
												-1 !==
													['line', 'area', 'path', 'point'].indexOf(o[0]) &&
												r.mix(n, { showCrosshairs: !0 })),
										n
									);
								}),
								(e._getMaxLength = function (t) {
									void 0 === t && (t = {});
									var e = t,
										n = e.layout,
										r = e.plotRange;
									return 'horizontal' === n ? r.br.x - r.bl.x : r.bl.y - r.tr.y;
								}),
								(e.render = function () {
									var t = this;
									if (!t.tooltip) {
										var e = t.chart,
											n = e.get('canvas'),
											i = e
												.get('frontPlot')
												.addGroup({
													className: 'tooltipContainer',
													zIndex: 10,
												}),
											o = e
												.get('backPlot')
												.addGroup({ className: 'tooltipContainer' }),
											s = e.get('plotRange'),
											u = e.get('coord'),
											c = t._setCrosshairsCfg(),
											f = t.cfg,
											l = r.deepMix(
												{
													plotRange: s,
													frontPlot: i,
													backPlot: o,
													canvas: n,
													fixed: u.transposed || u.isPolar,
												},
												c,
												f,
											);
										(l.maxLength = t._getMaxLength(l)), (this._tooltipCfg = l);
										var h = new a(l);
										(t.tooltip = h), t.bindEvents();
									}
								}),
								(e.clear = function () {
									var t = this.tooltip;
									t && (t.destroy(), this.unBindEvents()),
										(this.tooltip = null),
										(this.prePoint = null),
										(this._lastActive = null);
								}),
								(e._getTooltipMarkerStyle = function (t) {
									void 0 === t && (t = {});
									var e = t,
										n = e.type,
										i = e.items,
										a = this._tooltipCfg;
									if ('rect' === n) {
										var o,
											s,
											u,
											c,
											f = this.chart,
											l = f.get('plotRange'),
											h = l.tl,
											p = l.br,
											d = f.get('coord'),
											v = i[0],
											g = i[i.length - 1],
											y = v.width;
										d.transposed
											? ((o = h.x),
											  (s = g.y - 0.75 * y),
											  (u = p.x - h.x),
											  (c = v.y - g.y + 1.5 * y))
											: ((o = v.x - 0.75 * y),
											  (s = h.y),
											  (u = g.x - v.x + 1.5 * y),
											  (c = p.y - h.y)),
											(t.style = r.mix(
												{
													x: o,
													y: s,
													width: u,
													height: c,
													fill: '#CCD6EC',
													opacity: 0.3,
												},
												a.tooltipMarkerStyle,
											));
									} else
										t.style = r.mix(
											{ radius: 4, fill: '#fff', lineWidth: 2 },
											a.tooltipMarkerStyle,
										);
									return t;
								}),
								(e._setTooltip = function (t, e, n) {
									void 0 === n && (n = {});
									var i = this._lastActive,
										a = this.tooltip,
										s = this._tooltipCfg;
									e = h(e);
									var u = this.chart,
										c = u.get('coord'),
										f = u.getYScales()[0],
										l = s.snap;
									if (!1 === l && f.isLinear) {
										var d,
											v,
											g = c.invertPoint(t),
											y = u.get('plotRange');
										o.isPointInPlot(t, y) &&
											(c.transposed
												? ((d = f.invert(g.x)),
												  (v = t.x),
												  a.setXTipContent(d),
												  a.setXTipPosition(v),
												  a.setYCrosshairPosition(v))
												: ((d = f.invert(g.y)),
												  (v = t.y),
												  a.setYTipContent(d),
												  a.setYTipPosition(v),
												  a.setXCrosshairPosition(v)));
									}
									if (
										(s.onShow &&
											s.onShow({
												x: t.x,
												y: t.y,
												tooltip: a,
												items: e,
												tooltipMarkerCfg: n,
											}),
										p(i, e))
									) {
										if (
											!1 === l &&
											(r.directionEnabled(s.crosshairsType, 'y') || s.showYTip)
										) {
											var x = this.chart.get('canvas');
											x.draw();
										}
									} else {
										this._lastActive = e;
										var m = s.onChange;
										m &&
											m({
												x: t.x,
												y: t.y,
												tooltip: a,
												items: e,
												tooltipMarkerCfg: n,
											});
										var _ = e[0],
											b = _.title || _.name,
											S = _.x;
										if (
											(e.length > 1 && (S = (e[0].x + e[e.length - 1].x) / 2),
											a.setContent(b, e, c.transposed),
											a.setPosition(e, t),
											c.transposed)
										) {
											var P = _.y;
											e.length > 1 && (P = (e[0].y + e[e.length - 1].y) / 2),
												a.setYTipContent(b),
												a.setYTipPosition(P),
												a.setXCrosshairPosition(P),
												l &&
													(a.setXTipContent(_.value),
													a.setXTipPosition(S),
													a.setYCrosshairPosition(S));
										} else
											a.setXTipContent(b),
												a.setXTipPosition(S),
												a.setYCrosshairPosition(S),
												l &&
													(a.setYTipContent(_.value),
													a.setYTipPosition(_.y),
													a.setXCrosshairPosition(_.y));
										var w = n.items;
										s.showTooltipMarker && w.length
											? ((n = this._getTooltipMarkerStyle(n)), a.setMarkers(n))
											: a.clearMarkers(),
											a.show();
									}
								}),
								(e.showTooltip = function (t) {
									var e,
										n,
										a = this,
										o = a.chart,
										s = [],
										l = [],
										h = a._tooltipCfg;
									h.showItemMarker && (n = h.itemMarkerStyle);
									var p = o.get('geoms'),
										d = o.get('coord');
									if (
										(r.each(p, function (a) {
											if (a.get('visible')) {
												var o = a.get('type'),
													h = a.getSnapRecords(t),
													p = a.get('adjust');
												if ('interval' === o && p && 'symmetric' === p.type)
													return;
												r.each(h, function (t) {
													if (t.x && t.y) {
														var h = t.x,
															p = t.y,
															v = t._origin,
															g = t.color,
															y = {
																x: h,
																y: r.isArray(p) ? p[1] : p,
																color: g || i.defaultColor,
																origin: v,
																name: u(a, v),
																value: c(a, v),
																title: f(a, v),
															};
														n &&
															(y.marker = r.mix(
																{ fill: g || i.defaultColor },
																n,
															)),
															l.push(y),
															-1 !== ['line', 'area', 'path'].indexOf(o)
																? ((e = 'circle'), s.push(y))
																: 'interval' !== o ||
																  ('cartesian' !== d.type &&
																		'rect' !== d.type) ||
																  ((e = 'rect'),
																  (y.width = a.getSize(t._origin)),
																  s.push(y));
													}
												});
											}
										}),
										l.length)
									) {
										var v = { items: s, type: e };
										a._setTooltip(t, l, v);
									} else a.hideTooltip();
								}),
								(e.hideTooltip = function () {
									var t = this._tooltipCfg;
									this._lastActive = null;
									var e = this.tooltip;
									if (e) {
										e.hide(), t.onHide && t.onHide({ tooltip: e });
										var n = this.chart.get('canvas');
										n.draw();
									}
								}),
								(e._handleEvent = function (t, e, n) {
									var i = this.canvas;
									r.each([].concat(t), function (t) {
										'bind' === n ? i.on(t, e) : i.off(t, e);
									});
								}),
								(e.bindEvents = function () {
									var t = this._tooltipCfg,
										e = t.triggerOn,
										n = t.triggerOff,
										r = t.alwaysShow;
									e && this._handleEvent(e, this.handleShowEvent, 'bind'),
										r || this._handleEvent(n, this.handleHideEvent, 'bind');
								}),
								(e.unBindEvents = function () {
									var t = this._tooltipCfg,
										e = t.triggerOn,
										n = t.triggerOff,
										r = t.alwaysShow;
									e && this._handleEvent(e, this.handleShowEvent, 'unBind'),
										r || this._handleEvent(n, this.handleHideEvent, 'unBind');
								}),
								t
							);
						})();
						t.exports = {
							init: function (t) {
								var e = new d({ chart: t });
								t.set('tooltipController', e),
									(t.tooltip = function (t, n) {
										return (
											r.isObject(t) && ((n = t), (t = !0)),
											(e.enable = t),
											n && (e.cfg = n),
											this
										);
									});
							},
							afterGeomDraw: function (t) {
								var e = t.get('tooltipController');
								e.render(),
									(t.showTooltip = function (t) {
										return e.showTooltip(t), this;
									}),
									(t.hideTooltip = function () {
										return e.hideTooltip(), this;
									});
							},
							clearInner: function (t) {
								var e = t.get('tooltipController');
								e.clear();
							},
						};
					},
					function (t, e, n) {
						'use strict';
						var r = n(0),
							i = n(76),
							a = n(205),
							o = n(232),
							s = 4,
							u = (function () {
								var t = e.prototype;
								function e(t) {
									r.deepMix(this, this.getDefaultCfg(), t);
									var e = this.frontPlot,
										n = this.custom;
									if (!n) {
										var i = new a(r.mix({ parent: e, zIndex: 3 }, t));
										this.container = i;
										var s = this.fixed,
											u = this.background;
										s ||
											(this.tooltipArrow = e.addShape('Polygon', {
												className: 'tooltip-arrow',
												visible: !1,
												zIndex: 2,
												attrs: r.mix({ points: [] }, u),
											}));
									}
									if (this.showXTip) {
										var c = this.xTipBackground,
											f = new o({
												className: 'xTip',
												background: c,
												visible: !1,
											});
										e.add(f.container), (this.xTipBox = f);
									}
									if (this.showYTip) {
										var l = this.yTipBackground,
											h = new o({
												className: 'yTip',
												background: l,
												visible: !1,
											});
										e.add(h.container), (this.yTipBox = h);
									}
									this.showCrosshairs && this._renderCrosshairs(), e.sort();
								}
								return (
									(t.getDefaultCfg = function () {
										return {
											showCrosshairs: !1,
											crosshairsStyle: {
												stroke: 'rgba(0, 0, 0, 0.25)',
												lineWidth: 1,
											},
											crosshairsType: 'y',
											showXTip: !1,
											showYTip: !1,
											xTip: null,
											xTipBackground: {
												radius: 1,
												fill: 'rgba(0, 0, 0, 0.65)',
												padding: [3, 5],
											},
											yTip: null,
											yTipBackground: {
												radius: 1,
												fill: 'rgba(0, 0, 0, 0.65)',
												padding: [3, 5],
											},
											background: null,
											layout: 'horizontal',
											offsetX: 0,
											offsetY: 0,
										};
									}),
									(t.setContent = function (t, e) {
										if (((this.title = t), (this.items = e), !this.custom)) {
											var n = this.container;
											n.setTitle(t), n.setItems(e);
										}
									}),
									(t.setYTipContent = function (t) {
										var e = this.yTip;
										(t = r.isFunction(e) ? e(t) : r.mix({ text: t }, e)),
											this.yTipBox && this.yTipBox.updateContent(t);
									}),
									(t.setYTipPosition = function (t) {
										var e = this.plotRange,
											n = this.crosshairsShapeX;
										if (this.showYTip) {
											var r = this.yTipBox,
												i = r.getHeight(),
												a = r.getWidth(),
												o = e.tl.x - a,
												s = t - i / 2;
											s <= e.tl.y && (s = e.tl.y),
												s + i >= e.br.y && (s = e.br.y - i),
												o < 0 && ((o = e.tl.x), n && n.attr('x1', e.tl.x + a)),
												r.updatePosition(o, s);
										}
									}),
									(t.setXTipContent = function (t) {
										var e = this.xTip;
										(t = r.isFunction(e) ? e(t) : r.mix({ text: t }, e)),
											this.xTipBox && this.xTipBox.updateContent(t);
									}),
									(t.setXTipPosition = function (t) {
										var e = this.showXTip,
											n = this.canvas,
											r = this.plotRange,
											i = this.xTipBox,
											a = this.crosshairsShapeY;
										if (e) {
											var o = n.get('height'),
												s = i.getWidth(),
												u = i.getHeight(),
												c = t - s / 2,
												f = r.br.y;
											c <= r.tl.x && (c = r.tl.x),
												c + s >= r.tr.x && (c = r.tr.x - s),
												o - f < u && (f -= u),
												i.updatePosition(c, f),
												a && a.attr('y1', f);
										}
									}),
									(t.setXCrosshairPosition = function (t) {
										this.crosshairsShapeX && this.crosshairsShapeX.moveTo(0, t);
									}),
									(t.setYCrosshairPosition = function (t) {
										this.crosshairsShapeY && this.crosshairsShapeY.moveTo(t, 0);
									}),
									(t.setPosition = function (t) {
										var e = this.container,
											n = this.plotRange,
											i = this.offsetX,
											a = this.offsetY,
											o = this.fixed,
											u = this.tooltipArrow;
										if (e) {
											var c = e.container.getBBox(),
												f = c.minX,
												l = c.minY,
												h = c.width,
												p = c.height,
												d = n.tl,
												v = n.tr,
												g = 0,
												y = d.y - p - s + a;
											if (o) {
												var x = (d.x + v.x) / 2;
												g = x - h / 2 + i;
											} else {
												var m;
												if (
													((m =
														t.length > 1
															? (t[0].x + t[t.length - 1].x) / 2
															: t[0].x),
													(g = m - h / 2 + i),
													g < d.x && (g = d.x),
													g + h > v.x && (g = v.x - h),
													u)
												) {
													u.attr('points', [
														{ x: m - 3, y: d.y - s + a },
														{ x: m + 3, y: d.y - s + a },
														{ x: m, y: d.y + a },
													]);
													var _ = e.backShape,
														b = r.parsePadding(_.attr('radius'));
													m === d.x
														? ((b[3] = 0),
														  u.attr('points', [
																{ x: d.x, y: d.y + a },
																{ x: d.x, y: d.y - s + a },
																{ x: d.x + s, y: d.y - s + a },
														  ]))
														: m === v.x &&
														  ((b[2] = 0),
														  u.attr('points', [
																{ x: v.x, y: d.y + a },
																{ x: v.x - s, y: d.y - s + a },
																{ x: v.x, y: d.y - s + a },
														  ])),
														_.attr('radius', b);
												}
											}
											e.moveTo(g - f, y - l);
										}
									}),
									(t.setMarkers = function (t) {
										void 0 === t && (t = {});
										var e = this,
											n = t,
											a = n.items,
											o = n.style,
											s = n.type,
											u = e._getMarkerGroup(s);
										if ('circle' === s)
											for (var c = 0, f = a.length; c < f; c++) {
												var l = a[c],
													h = new i({
														className: 'tooltip-circle-marker',
														attrs: r.mix(
															{ x: l.x, y: l.y, stroke: l.color },
															o,
														),
													});
												u.add(h);
											}
										else
											u.addShape('rect', {
												className: 'tooltip-rect-marker',
												attrs: o,
											});
									}),
									(t.clearMarkers = function () {
										var t = this.markerGroup;
										t && t.clear();
									}),
									(t.show = function () {
										var t = this.crosshairsShapeX,
											e = this.crosshairsShapeY,
											n = this.markerGroup,
											r = this.container,
											i = this.tooltipArrow,
											a = this.xTipBox,
											o = this.yTipBox,
											s = this.canvas;
										t && t.show(),
											e && e.show(),
											n && n.show(),
											r && r.show(),
											i && i.show(),
											a && a.show(),
											o && o.show(),
											s.draw();
									}),
									(t.hide = function () {
										var t = this.crosshairsShapeX,
											e = this.crosshairsShapeY,
											n = this.markerGroup,
											r = this.container,
											i = this.tooltipArrow,
											a = this.xTipBox,
											o = this.yTipBox;
										t && t.hide(),
											e && e.hide(),
											n && n.hide(),
											r && r.hide(),
											i && i.hide(),
											a && a.hide(),
											o && o.hide();
									}),
									(t.destroy = function () {
										var t = this.crosshairsShapeX,
											e = this.crosshairsShapeY,
											n = this.markerGroup,
											r = this.container,
											i = this.tooltipArrow,
											a = this.xTipBox,
											o = this.yTipBox;
										t && t.remove(!0),
											e && e.remove(!0),
											n && n.remove(!0),
											i && i.remove(!0),
											r && r.clear(),
											a && a.clear(),
											o && o.clear(),
											(this.destroyed = !0);
									}),
									(t._getMarkerGroup = function (t) {
										var e = this.markerGroup;
										return (
											e
												? e.clear()
												: ('circle' === t
														? ((e = this.frontPlot.addGroup({ zIndex: 1 })),
														  this.frontPlot.sort())
														: (e = this.backPlot.addGroup()),
												  (this.markerGroup = e)),
											e
										);
									}),
									(t._renderCrosshairs = function () {
										var t = this.crosshairsType,
											e = this.crosshairsStyle,
											n = this.frontPlot,
											i = this.plotRange,
											a = i.tl,
											o = i.br;
										r.directionEnabled(t, 'x') &&
											(this.crosshairsShapeX = n.addShape('Line', {
												className: 'tooltip-crosshairs-x',
												zIndex: 0,
												visible: !1,
												attrs: r.mix({ x1: a.x, y1: 0, x2: o.x, y2: 0 }, e),
											})),
											r.directionEnabled(t, 'y') &&
												(this.crosshairsShapeY = n.addShape('Line', {
													className: 'tooltip-crosshairs-y',
													zIndex: 0,
													visible: !1,
													attrs: r.mix({ x1: 0, y1: o.y, x2: 0, y2: a.y }, e),
												}));
									}),
									e
								);
							})();
						t.exports = u;
					},
					function (t, e, n) {
						'use strict';
						var r = n(0),
							i = n(16),
							a = i.Group,
							o = (function () {
								var t = e.prototype;
								function e(t) {
									r.deepMix(this, this.getDefaultCfg(), t), this._init();
									var e = this.content,
										n = this.x,
										i = this.y;
									r.isNil(e) || this.updateContent(e),
										this.updatePosition(n, i);
								}
								return (
									(t.getDefaultCfg = function () {
										return {
											x: 0,
											y: 0,
											content: '',
											textStyle: {
												fontSize: 12,
												fill: '#fff',
												textAlign: 'center',
												textBaseline: 'middle',
											},
											background: {
												radius: 1,
												fill: 'rgba(0, 0, 0, 0.65)',
												padding: [3, 5],
											},
											width: 0,
											height: 0,
											className: '',
										};
									}),
									(t._init = function () {
										var t = this.content,
											e = this.textStyle,
											n = this.background,
											i = this.className,
											o = this.visible,
											s = new a({ className: i, zIndex: 0, visible: o }),
											u = s.addShape('Text', {
												className: i + '-text',
												zIndex: 1,
												attrs: r.mix({ text: t, x: 0, y: 0 }, e),
											}),
											c = s.addShape('Rect', {
												className: i + '-bg',
												zIndex: -1,
												attrs: r.mix({ x: 0, y: 0, width: 0, height: 0 }, n),
											});
										s.sort(),
											(this.container = s),
											(this.textShape = u),
											(this.backgroundShape = c);
									}),
									(t._getBBox = function () {
										var t = this.textShape,
											e = this.background,
											n = t.getBBox(),
											i = r.parsePadding(e.padding),
											a = n.width + i[1] + i[3],
											o = n.height + i[0] + i[2],
											s = n.minX - i[3],
											u = n.minY - i[0];
										return { x: s, y: u, width: a, height: o };
									}),
									(t.updateContent = function (t) {
										var e = this.textShape,
											n = this.backgroundShape;
										if (!r.isNil(t)) {
											r.isObject(t) || (t = { text: t }), e.attr(t);
											var i = this._getBBox(),
												a = i.x,
												o = i.y,
												s = i.width,
												u = i.height,
												c = this.width || s,
												f = this.height || u;
											n.attr({ x: a, y: o, width: c, height: f }),
												(this._width = c),
												(this._height = f),
												(this.content = t.text);
										}
									}),
									(t.updatePosition = function (t, e) {
										var n = this.container,
											r = this._getBBox(),
											i = r.x,
											a = r.y;
										n.moveTo(t - i, e - a), (this.x = t - i), (this.y = e - a);
									}),
									(t.getWidth = function () {
										return this._width;
									}),
									(t.getHeight = function () {
										return this._height;
									}),
									(t.show = function () {
										this.container.show();
									}),
									(t.hide = function () {
										this.container.hide();
									}),
									(t.clear = function () {
										var t = this.container;
										t.clear(),
											t.remove(!0),
											(this.container = null),
											(this.textShape = null),
											(this.backgroundShape = null);
									}),
									e
								);
							})();
						t.exports = o;
					},
					function (t, e, n) {
						'use strict';
						var r = n(0),
							i = n(23),
							a = n(6);
						a.guide = r.deepMix(
							{
								line: { style: { stroke: '#a3a3a3', lineWidth: 1 }, top: !0 },
								text: {
									style: {
										fill: '#787878',
										textAlign: 'center',
										textBaseline: 'middle',
									},
									offsetX: 0,
									offsetY: 0,
									top: !0,
								},
								rect: { style: { fill: '#fafafa' }, top: !1 },
								arc: { style: { stroke: '#a3a3a3' }, top: !0 },
								html: {
									offsetX: 0,
									offsetY: 0,
									alignX: 'center',
									alignY: 'middle',
								},
								tag: {
									top: !0,
									offsetX: 0,
									offsetY: 0,
									side: 4,
									background: { padding: 5, radius: 2, fill: '#1890FF' },
									textStyle: {
										fontSize: 12,
										fill: '#fff',
										textAlign: 'center',
										textBaseline: 'middle',
									},
								},
								point: {
									top: !0,
									offsetX: 0,
									offsetY: 0,
									style: {
										fill: '#fff',
										r: 3,
										lineWidth: 2,
										stroke: '#1890ff',
									},
								},
							},
							a.guide || {},
						);
						var o = (function () {
							function t(t) {
								(this.guides = []),
									(this.xScale = null),
									(this.yScales = null),
									(this.guideShapes = []),
									r.mix(this, t);
							}
							var e = t.prototype;
							return (
								(e._toString = function (t) {
									return (
										r.isFunction(t) && (t = t(this.xScale, this.yScales)),
										(t = t.toString()),
										t
									);
								}),
								(e._getId = function (t, e) {
									var n = e.id;
									if (!n) {
										var r = e.type;
										n =
											'arc' === r || 'line' === r || 'rect' === r
												? this._toString(e.start) + '-' + this._toString(e.end)
												: this._toString(e.position);
									}
									return n;
								}),
								(e.paint = function (t) {
									var e = this,
										n = e.chart,
										i = e.guides,
										a = e.xScale,
										o = e.yScales,
										s = [];
									r.each(i, function (r, i) {
										var u;
										(r.xScale = a),
											(r.yScales = o),
											'regionFilter' === r.type
												? (r.chart = n)
												: (u = r.top ? e.frontPlot : e.backPlot),
											(r.coord = t),
											(r.container = u),
											(r.canvas = n.get('canvas'));
										var c = r.render(t, u);
										if (c) {
											var f = e._getId(c, r);
											[].concat(c).forEach(function (t) {
												(t._id = t.get('className') + '-' + f),
													t.set('index', i),
													s.push(t);
											});
										}
									}),
										(e.guideShapes = s);
								}),
								(e.clear = function () {
									return this.reset(), (this.guides = []), this;
								}),
								(e.reset = function () {
									var t = this.guides;
									r.each(t, function (t) {
										t.remove();
									});
								}),
								(e._createGuide = function (t, e) {
									var n = r.upperFirst(t),
										o = new i[n](r.deepMix({}, a.guide[t], e));
									return this.guides.push(o), o;
								}),
								(e.line = function (t) {
									return void 0 === t && (t = {}), this._createGuide('line', t);
								}),
								(e.text = function (t) {
									return void 0 === t && (t = {}), this._createGuide('text', t);
								}),
								(e.arc = function (t) {
									return void 0 === t && (t = {}), this._createGuide('arc', t);
								}),
								(e.html = function (t) {
									return void 0 === t && (t = {}), this._createGuide('html', t);
								}),
								(e.rect = function (t) {
									return void 0 === t && (t = {}), this._createGuide('rect', t);
								}),
								(e.tag = function (t) {
									return void 0 === t && (t = {}), this._createGuide('tag', t);
								}),
								(e.point = function (t) {
									return (
										void 0 === t && (t = {}), this._createGuide('point', t)
									);
								}),
								(e.regionFilter = function (t) {
									return (
										void 0 === t && (t = {}),
										this._createGuide('regionFilter', t)
									);
								}),
								t
							);
						})();
						t.exports = {
							init: function (t) {
								var e = new o({
									frontPlot: t
										.get('frontPlot')
										.addGroup({ zIndex: 20, className: 'guideContainer' }),
									backPlot: t
										.get('backPlot')
										.addGroup({ className: 'guideContainer' }),
								});
								t.set('guideController', e),
									(t.guide = function () {
										return e;
									});
							},
							afterGeomDraw: function (t) {
								var e = t.get('guideController');
								if (e.guides.length) {
									var n = t.getXScale(),
										r = t.getYScales(),
										i = t.get('coord');
									(e.xScale = n), (e.yScales = r), (e.chart = t), e.paint(i);
								}
							},
							clear: function (t) {
								t.get('guideController').clear();
							},
							repaint: function (t) {
								t.get('guideController').reset();
							},
						};
					},
					function (t, e, n) {
						'use strict';
						var r = n(0),
							i = n(205),
							a = n(6),
							o = 12,
							s = 3,
							u = {
								itemMarginBottom: 12,
								itemGap: 10,
								showTitle: !1,
								titleStyle: {
									fontSize: 12,
									fill: '#808080',
									textAlign: 'start',
									textBaseline: 'top',
								},
								nameStyle: {
									fill: '#808080',
									fontSize: 12,
									textAlign: 'start',
									textBaseline: 'middle',
								},
								valueStyle: {
									fill: '#000000',
									fontSize: 12,
									textAlign: 'start',
									textBaseline: 'middle',
								},
								unCheckStyle: { fill: '#bfbfbf' },
								itemWidth: 'auto',
								wordSpace: 6,
								selectedMode: 'multiple',
							};
						function c(t, e) {
							var n = 0;
							switch (((e = r.parsePadding(e)), t)) {
								case 'top':
									n = e[0];
									break;
								case 'right':
									n = e[1];
									break;
								case 'bottom':
									n = e[2];
									break;
								case 'left':
									n = e[3];
									break;
								default:
									break;
							}
							return n;
						}
						a.legend = r.deepMix(
							{
								common: u,
								right: r.mix({ position: 'right', layout: 'vertical' }, u),
								left: r.mix({ position: 'left', layout: 'vertical' }, u),
								top: r.mix({ position: 'top', layout: 'horizontal' }, u),
								bottom: r.mix({ position: 'bottom', layout: 'horizontal' }, u),
							},
							a.legend || {},
						);
						var f = (function () {
							function t(t) {
								var e = this;
								(this.handleEvent = function (t) {
									var n = e;
									function i(t, e) {
										var i = null,
											a = n.legends;
										return (
											r.each(a, function (n) {
												r.each(n, function (n) {
													var a = n.itemsGroup,
														o = n.legendHitBoxes,
														s = a.get('children');
													if (s.length) {
														var u = n.x,
															c = n.y;
														r.each(o, function (r, a) {
															if (
																t >= r.x + u &&
																t <= r.x + r.width + u &&
																e >= r.y + c &&
																e <= r.height + r.y + c
															)
																return (
																	(i = { clickedItem: s[a], clickedLegend: n }),
																	!1
																);
														});
													}
												});
											}),
											i
										);
									}
									var a = n.chart,
										o = r.createEvent(t, a),
										s = o.x,
										u = o.y,
										c = i(s, u);
									if (c && !1 !== c.clickedLegend.clickable) {
										var f = c.clickedItem,
											l = c.clickedLegend;
										if (l.onClick) (t.clickedItem = f), l.onClick(t);
										else if (!l.custom) {
											var h = f.get('checked'),
												p = f.get('dataValue'),
												d = l.filteredVals,
												v = l.field,
												g = l.selectedMode,
												y = 'single' === g;
											y
												? a.filter(v, function (t) {
														return t === p;
												  })
												: (h ? d.push(p) : r.Array.remove(d, p),
												  a.filter(v, function (t) {
														return -1 === d.indexOf(t);
												  })),
												a.repaint();
										}
									}
								}),
									(this.legendCfg = {}),
									(this.enable = !0),
									(this.position = 'top'),
									r.mix(this, t);
								var n = this.chart;
								(this.canvasDom = n.get('canvas').get('el')), this.clear();
							}
							var e = t.prototype;
							return (
								(e.addLegend = function (t, e, n) {
									var r = this,
										i = r.legendCfg,
										a = t.field,
										o = i[a];
									if (!1 === o) return null;
									if (o && o.custom) r.addCustomLegend(a);
									else {
										var s = i.position || r.position;
										o && o.position && (s = o.position),
											t.isCategory && r._addCategoryLegend(t, e, s, n);
									}
								}),
								(e.addCustomLegend = function (t) {
									var e = this,
										n = e.legendCfg;
									t && n[t] && (n = n[t]);
									var o = n.position || e.position,
										u = e.legends;
									u[o] = u[o] || [];
									var c = n.items;
									if (!c) return null;
									var f = e.container;
									r.each(c, function (t) {
										r.isPlainObject(t.marker)
											? (t.marker.radius = t.marker.radius || s)
											: (t.marker = {
													symbol: t.marker || 'circle',
													fill: t.fill,
													radius: s,
											  }),
											(t.checked = !!r.isNil(t.checked) || t.checked),
											(t.name = t.name || t.value);
									});
									var l = new i(
										r.deepMix({}, a.legend[o], n, {
											maxLength: e._getMaxLength(o),
											items: c,
											parent: f,
										}),
									);
									u[o].push(l);
								}),
								(e.clear = function () {
									var t = this.legends;
									r.each(t, function (t) {
										r.each(t, function (t) {
											t.clear();
										});
									}),
										(this.legends = {}),
										this.unBindEvents();
								}),
								(e._isFiltered = function (t, e, n) {
									var i = !1;
									return (
										r.each(e, function (e) {
											if (((i = i || t.getText(e) === t.getText(n)), i))
												return !1;
										}),
										i
									);
								}),
								(e._getMaxLength = function (t) {
									var e = this.chart,
										n = r.parsePadding(e.get('appendPadding'));
									return 'right' === t || 'left' === t
										? e.get('height') - (n[0] + n[2])
										: e.get('width') - (n[1] + n[3]);
								}),
								(e._addCategoryLegend = function (t, e, n, o) {
									var s = this,
										u = s.legendCfg,
										c = s.legends,
										f = s.container,
										l = s.chart,
										h = t.field;
									c[n] = c[n] || [];
									var p = 'circle';
									u[h] && u[h].marker
										? (p = u[h].marker)
										: u.marker && (p = u.marker),
										r.each(e, function (e) {
											r.isPlainObject(p)
												? r.mix(e.marker, p)
												: (e.marker.symbol = p),
												o && (e.checked = !s._isFiltered(t, o, e.dataValue));
										});
									var d = l.get('legendItems');
									d[h] = e;
									var v = r.deepMix({}, a.legend[n], u[h] || u, {
										maxLength: s._getMaxLength(n),
										items: e,
										field: h,
										filteredVals: o,
										parent: f,
									});
									v.showTitle && r.deepMix(v, { title: t.alias || t.field });
									var g = new i(v);
									return c[n].push(g), g;
								}),
								(e._alignLegend = function (t, e, n) {
									var i = this,
										a = i.plotRange,
										s = a.tl,
										u = a.bl,
										c = i.chart,
										f = t.offsetX || 0,
										l = t.offsetY || 0,
										h = c.get('width'),
										p = c.get('height'),
										d = r.parsePadding(c.get('appendPadding')),
										v = t.getHeight(),
										g = t.getWidth(),
										y = 0,
										x = 0;
									if ('left' === n || 'right' === n) {
										var m = t.verticalAlign || 'middle',
											_ = Math.abs(s.y - u.y);
										(y = 'left' === n ? d[3] : h - g - d[1]),
											(x = (_ - v) / 2 + s.y),
											'top' === m ? (x = s.y) : 'bottom' === m && (x = u.y - v),
											e && (x = e.get('y') - v - o);
									} else {
										var b = t.align || 'left';
										if (
											((y = d[3]),
											'center' === b
												? (y = h / 2 - g / 2)
												: 'right' === b && (y = h - (g + d[1])),
											(x =
												'top' === n
													? d[0] + Math.abs(t.container.getBBox().minY)
													: p - v),
											e)
										) {
											var S = e.getWidth();
											y = e.x + S + o;
										}
									}
									'bottom' === n && l > 0 && (l = 0),
										'right' === n && f > 0 && (f = 0),
										t.moveTo(y + f, x + l);
								}),
								(e.alignLegends = function () {
									var t = this,
										e = t.legends;
									return (
										r.each(e, function (e, n) {
											r.each(e, function (r, i) {
												var a = e[i - 1];
												t._alignLegend(r, a, n);
											});
										}),
										t
									);
								}),
								(e.bindEvents = function () {
									var t = this.legendCfg,
										e = t.triggerOn || 'touchstart';
									r.addEventListener(this.canvasDom, e, this.handleEvent);
								}),
								(e.unBindEvents = function () {
									var t = this.legendCfg,
										e = t.triggerOn || 'touchstart';
									r.removeEventListener(this.canvasDom, e, this.handleEvent);
								}),
								t
							);
						})();
						t.exports = {
							init: function (t) {
								var e = new f({
									container: t.get('backPlot'),
									plotRange: t.get('plotRange'),
									chart: t,
								});
								t.set('legendController', e),
									(t.legend = function (t, n) {
										var i = e.legendCfg;
										return (
											(e.enable = !0),
											r.isBoolean(t)
												? ((e.enable = t), (i = n || {}))
												: r.isObject(t)
												? (i = t)
												: (i[t] = n),
											(e.legendCfg = i),
											this
										);
									});
							},
							beforeGeomDraw: function (t) {
								var e = t.get('legendController');
								if (!e.enable) return null;
								var n = e.legendCfg;
								if (n && n.custom) e.addCustomLegend();
								else {
									var i = t.getLegendItems(),
										a = t.get('scales'),
										o = t.get('filters');
									r.each(i, function (t, n) {
										var r,
											i = a[n],
											s = i.values;
										(r =
											o && o[n]
												? s.filter(function (t) {
														return !o[n](t);
												  })
												: []),
											e.addLegend(i, t, r);
									});
								}
								n && !1 !== n.clickable && e.bindEvents();
								var s = e.legends,
									u = { top: 0, right: 0, bottom: 0, left: 0 };
								r.each(s, function (e, n) {
									var i = 0;
									r.each(e, function (t) {
										var e = t.getWidth(),
											r = t.getHeight();
										'top' === n || 'bottom' === n
											? ((i = Math.max(i, r)),
											  t.offsetY > 0 && (i += t.offsetY))
											: ((i = Math.max(i, e)),
											  t.offsetX > 0 && (i += t.offsetX));
									}),
										(u[n] = i + c(n, t.get('appendPadding')));
								}),
									t.set('legendRange', u);
							},
							afterGeomDraw: function (t) {
								var e = t.get('legendController');
								e.alignLegends();
							},
							clearInner: function (t) {
								var e = t.get('legendController');
								e.clear(), t.set('legendRange', null);
							},
						};
					},
					function (t, e, n) {
						'use strict';
						var r,
							i = n(0),
							a = n(46),
							o = n(236),
							s = n(237),
							u = n(206),
							c = n(239),
							f = n(240),
							l = n(30);
						(a.prototype.animate = function () {
							var t = i.mix({}, this.get('attrs'));
							return new s(this, t, r);
						}),
							(l.prototype.animate = function (t) {
								return this.set('animate', t), this;
							}),
							(u.Action = c),
							(u.defaultCfg = {
								interval: {
									enter: function (t) {
										return t.isPolar && t.transposed
											? function (t) {
													t.set('zIndex', -1);
													var e = t.get('parent');
													e.sort();
											  }
											: c.fadeIn;
									},
								},
								area: {
									enter: function (t) {
										return t.isPolar ? null : c.fadeIn;
									},
								},
								line: {
									enter: function (t) {
										return t.isPolar ? null : c.fadeIn;
									},
								},
								path: {
									enter: function (t) {
										return t.isPolar ? null : c.fadeIn;
									},
								},
							});
						var h = {
							line: function (t) {
								return t.isPolar ? f.groupScaleInXY : f.groupWaveIn;
							},
							area: function (t) {
								return t.isPolar ? f.groupScaleInXY : f.groupWaveIn;
							},
							path: function (t) {
								return t.isPolar ? f.groupScaleInXY : f.groupWaveIn;
							},
							point: function () {
								return f.shapesScaleInXY;
							},
							interval: function (t) {
								var e;
								return (
									t.isPolar
										? ((e = f.groupScaleInXY),
										  t.transposed && (e = f.groupWaveIn))
										: (e = t.transposed ? f.groupScaleInX : f.groupScaleInY),
									e
								);
							},
							schema: function () {
								return f.groupWaveIn;
							},
						};
						function p(t, e) {
							var n = {};
							for (var r in e)
								((i.isNumber(t[r]) && t[r] !== e[r]) ||
									(i.isArray(t[r]) &&
										JSON.stringify(t[r]) !== JSON.stringify(e[r]))) &&
									(n[r] = e[r]);
							return n;
						}
						function d(t, e, n) {
							var r,
								a = t.get('type'),
								o = 'geom' + n + '-' + a,
								s = t.getXScale(),
								u = t.getYScale(),
								c = s.field || 'x',
								f = u.field || 'y',
								l = e[f];
							(r = s.isIdentity ? s.value : e[c]),
								(o +=
									'interval' === a || 'schema' === a
										? '-' + r
										: 'line' === a || 'area' === a || 'path' === a
										? '-' + a
										: s.isCategory
										? '-' + r
										: '-' + r + '-' + l);
							var h = t._getGroupScales();
							return (
								i.each(h, function (t) {
									var n = t.field;
									'identity' !== t.type && (o += '-' + e[n]);
								}),
								o
							);
						}
						function v(t, e, n) {
							var r = [];
							return (
								i.each(t, function (t, a) {
									var o = t.get('container'),
										s = o.get('children'),
										u = t.get('type'),
										c = i.isNil(t.get('animateCfg'))
											? _(u, e)
											: t.get('animateCfg');
									!1 !== c &&
										i.each(s, function (e, i) {
											e.get('className') === u &&
												((e._id = d(t, e.get('origin')._origin, a)),
												e.set('coord', n),
												e.set('animateCfg', c),
												e.set('index', i),
												r.push(e));
										}),
										t.set('shapes', s);
								}),
								r
							);
						}
						function g(t) {
							for (var e = {}, n = 0, r = t.length; n < r; n++) {
								var a = t[n];
								if (a._id && !a.isClip) {
									var o = a._id;
									e[o] = {
										_id: o,
										type: a.get('type'),
										attrs: i.mix({}, a._attrs.attrs),
										className: a.get('className'),
										geomType: a.get('className'),
										index: a.get('index'),
										coord: a.get('coord'),
										animateCfg: a.get('animateCfg'),
									};
								}
							}
							return e;
						}
						function y(t, e, n, r) {
							var a;
							return (
								(a = i.isFunction(r)
									? r
									: i.isString(r)
									? u.Action[r]
									: u.getAnimation(t, e, n)),
								a
							);
						}
						function x(t, e, n) {
							if (!1 === n || (i.isObject(n) && !1 === n[e])) return !1;
							var r = u.getAnimateCfg(t, e);
							return n && n[e] ? i.deepMix({}, r, n[e]) : r;
						}
						function m(t, e, n) {
							var r,
								a,
								o = [],
								s = [];
							i.each(e, function (e) {
								var n = t[e._id];
								n
									? (e.set('cacheShape', n), o.push(e), delete t[e._id])
									: s.push(e);
							}),
								i.each(t, function (t) {
									var e = t.className,
										o = t.coord,
										s = t._id,
										u = t.attrs,
										c = t.index,
										f = t.type;
									if (((a = x(e, 'leave', t.animateCfg)), !1 === a)) return !0;
									if (((r = y(e, o, 'leave', a.animation)), i.isFunction(r))) {
										var l = n.addShape(f, {
											attrs: u,
											index: c,
											canvas: n,
											className: e,
										});
										(l._id = s), r(l, a, o);
									}
								}),
								i.each(o, function (t) {
									var e = t.get('className');
									if (((a = x(e, 'update', t.get('animateCfg'))), !1 === a))
										return !0;
									var n = t.get('coord'),
										o = t.get('cacheShape').attrs,
										s = p(o, t._attrs.attrs);
									Object.keys(s).length &&
										((r = y(e, n, 'update', a.animation)),
										i.isFunction(r)
											? r(t, a, n)
											: (t.attr(o),
											  t
													.animate()
													.to({
														attrs: s,
														duration: a.duration,
														easing: a.easing,
														delay: a.delay,
													})
													.onEnd(function () {
														t.set('cacheShape', null);
													})));
								}),
								i.each(s, function (t) {
									var e = t.get('className'),
										n = t.get('coord');
									if (((a = x(e, 'enter', t.get('animateCfg'))), !1 === a))
										return !0;
									if (((r = y(e, n, 'enter', a.animation)), i.isFunction(r)))
										if ('interval' === e && n.isPolar && n.transposed) {
											var s = t.get('index'),
												u = o[s - 1];
											r(t, a, u);
										} else r(t, a, n);
								});
						}
						function _(t, e) {
							if (!t) return null;
							var n = e.get('animate');
							return (
								t.indexOf('guide-tag') > -1 && (t = 'guide-tag'),
								i.isObject(n) ? n[t] : !1 !== n && null
							);
						}
						t.exports = {
							afterCanvasInit: function () {
								(r = new o()), r.play();
							},
							beforeCanvasDraw: function (t) {
								if (!1 !== t.get('animate')) {
									var e = t.get('isUpdate'),
										n = t.get('canvas'),
										r = t.get('coord'),
										a = t.get('geoms'),
										o = n.get('caches') || [];
									0 === o.length && (e = !1);
									var s = v(a, t, r),
										c = t.get('axisController'),
										l = c.frontPlot,
										p = c.backPlot,
										d = l.get('children').concat(p.get('children')),
										b = [];
									t.get('guideController') &&
										(b = t.get('guideController').guideShapes);
									var S,
										P,
										w = [];
									if (
										(d.concat(b).forEach(function (e) {
											var n = e.get('className'),
												i = _(n, t);
											e.set('coord', r),
												e.set('animateCfg', i),
												w.push(e),
												s.push(e);
										}),
										n.set('caches', g(s)),
										e)
									)
										m(o, s, n);
									else
										i.each(a, function (e) {
											var n = e.get('type'),
												a = i.isNil(e.get('animateCfg'))
													? _(n, t)
													: e.get('animateCfg');
											if (!1 !== a)
												if (
													((S = x(n, 'appear', a)),
													(P = y(n, r, 'appear', S.animation)),
													i.isFunction(P))
												) {
													var o = e.get('shapes');
													i.each(o, function (t) {
														P(t, S, r);
													});
												} else if (h[n]) {
													P = f[S.animation] || h[n](r);
													var s = e.getYScale(),
														u = r.convertPoint({
															x: 0,
															y: s.scale(e.getYMinValue()),
														}),
														c = e.get('container');
													P && P(c, S, r, u);
												}
										}),
											i.each(w, function (t) {
												var e = t.get('animateCfg'),
													n = t.get('className');
												if (e && e.appear) {
													var a = u.getAnimateCfg(n, 'appear'),
														o = i.deepMix({}, a, e.appear),
														s = y(n, r, 'appear', o.animation);
													i.isFunction(s) && s(t, o, r);
												}
											});
								}
							},
							afterCanvasDestroyed: function () {
								r.stop();
							},
						};
					},
					function (t, e, n) {
						'use strict';
						var r = n(70),
							i = r.requestAnimationFrame,
							a =
								'object' === typeof performance && performance.now
									? performance
									: Date,
							o = (function () {
								function t() {
									(this.anims = []),
										(this.time = null),
										(this.playing = !1),
										(this.canvas = []);
								}
								var e = t.prototype;
								return (
									(e.play = function () {
										var t = this;
										function e() {
											t.playing && (i(e), t.update());
										}
										(t.time = a.now()), (t.playing = !0), i(e);
									}),
									(e.stop = function () {
										(this.playing = !1), (this.time = null), (this.canvas = []);
									}),
									(e.update = function () {
										var t = a.now();
										this.canvas = [];
										for (var e = 0; e < this.anims.length; e++) {
											var n = this.anims[e];
											if (!(t < n.startTime || n.hasEnded)) {
												var r = n.shape;
												if (r.get('destroyed')) this.anims.splice(e, 1), e--;
												else {
													var i = n.startState,
														o = n.endState,
														s = n.interpolate,
														u = n.duration;
													t >= n.startTime &&
														!n.hasStarted &&
														((n.hasStarted = !0), n.onStart && n.onStart());
													var c = (t - n.startTime) / u;
													if (
														((c = Math.max(0, Math.min(c, 1))),
														(c = n.easing(c)),
														n.onFrame)
													)
														n.onFrame(c);
													else
														for (var f in s) {
															var l = s[f],
																h = l(c),
																p = void 0;
															if ('points' === f) {
																p = [];
																for (
																	var d = Math.max(
																			i.points.length,
																			o.points.length,
																		),
																		v = 0;
																	v < d;
																	v += 2
																)
																	p.push({ x: h[v], y: h[v + 1] });
															} else p = h;
															(r._attrs.attrs[f] = p), (r._attrs.bbox = null);
														}
													var g = r.get('canvas');
													-1 === this.canvas.indexOf(g) && this.canvas.push(g),
														n.onUpdate && n.onUpdate(c),
														t >= n.endTime &&
															!n.hasEnded &&
															((n.hasEnded = !0), n.onEnd && n.onEnd()),
														1 === c && (this.anims.splice(e, 1), e--);
												}
											}
										}
										this.canvas.map(function (t) {
											return t.draw(), t;
										}),
											(this.time = a.now());
									}),
									t
								);
							})();
						t.exports = o;
					},
					function (t, e, n) {
						'use strict';
						var r = n(238);
						function i(t) {
							for (var e = [], n = 0, r = t.length; n < r; n++)
								t[n] && (e.push(t[n].x), e.push(t[n].y));
							return e;
						}
						function a(t, e) {
							return (
								(t = +t),
								(e -= t),
								function (n) {
									return t + e * n;
								}
							);
						}
						function o(t, e) {
							var n,
								r = e ? e.length : 0,
								i = t ? Math.min(r, t.length) : 0,
								o = new Array(i),
								s = new Array(r);
							for (n = 0; n < i; ++n) o[n] = a(t[n], e[n]);
							for (; n < r; ++n) s[n] = e[n];
							return function (t) {
								for (n = 0; n < i; ++n) s[n] = o[n](t);
								return s;
							};
						}
						var s = (function () {
							function t(t, e, n) {
								(this.hasStarted = !1),
									(this.hasEnded = !1),
									(this.shape = t),
									(this.source = e),
									(this.timeline = n),
									(this.animate = null);
							}
							var e = t.prototype;
							return (
								(e.to = function (t) {
									void 0 === t && (t = {});
									var e,
										n = t.delay || 0,
										s = t.attrs || {},
										u = t.duration || 1e3;
									e =
										'function' === typeof t.easing
											? t.easing
											: r[t.easing] || r.linear;
									var c = {
											shape: this.shape,
											startTime: this.timeline.time + n,
											duration: u,
											easing: e,
										},
										f = {};
									for (var l in s) {
										var h = this.source[l],
											p = s[l];
										'points' === l
											? ((h = i(h)),
											  (p = i(p)),
											  (f.points = o(h, p)),
											  (this.source.points = h),
											  (s.points = p))
											: 'matrix' === l
											? (f.matrix = o(h, p))
											: (f[l] = a(h, p));
									}
									return (
										(c.interpolate = f),
										(c.startState = this.source),
										(c.endState = s),
										(c.endTime = c.startTime + u),
										this.timeline.anims.push(c),
										(this.animate = c),
										this
									);
								}),
								(e.onFrame = function (t) {
									return (
										this.animate &&
											(this.animate.onFrame = function (e) {
												t(e);
											}),
										this
									);
								}),
								(e.onStart = function (t) {
									return (
										this.animate &&
											(this.animate.onStart = function () {
												t();
											}),
										this
									);
								}),
								(e.onUpdate = function (t) {
									return (
										this.animate &&
											(this.animate.onUpdate = function (e) {
												t(e);
											}),
										this
									);
								}),
								(e.onEnd = function (t) {
									return (
										this.animate &&
											(this.animate.onEnd = function () {
												t();
											}),
										this
									);
								}),
								t
							);
						})();
						t.exports = s;
					},
					function (t, e, n) {
						'use strict';
						var r = {
							linear: function (t) {
								return t;
							},
							quadraticIn: function (t) {
								return t * t;
							},
							quadraticOut: function (t) {
								return t * (2 - t);
							},
							quadraticInOut: function (t) {
								return (t *= 2) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
							},
							cubicIn: function (t) {
								return t * t * t;
							},
							cubicOut: function (t) {
								return --t * t * t + 1;
							},
							cubicInOut: function (t) {
								return (t *= 2) < 1
									? 0.5 * t * t * t
									: 0.5 * ((t -= 2) * t * t + 2);
							},
							elasticIn: function (t) {
								var e,
									n = 0.1,
									r = 0.4;
								return 0 === t
									? 0
									: 1 === t
									? 1
									: (r || (r = 0.3),
									  !n || n < 1
											? ((n = 1), (e = r / 4))
											: (e = (r / (2 * Math.PI)) * Math.asin(1 / n)),
									  -n *
											Math.pow(2, 10 * (t -= 1)) *
											Math.sin(((t - e) * (2 * Math.PI)) / r));
							},
							elasticOut: function (t) {
								var e,
									n = 0.1,
									r = 0.4;
								return 0 === t
									? 0
									: 1 === t
									? 1
									: (r || (r = 0.3),
									  !n || n < 1
											? ((n = 1), (e = r / 4))
											: (e = (r / (2 * Math.PI)) * Math.asin(1 / n)),
									  n *
											Math.pow(2, -10 * t) *
											Math.sin(((t - e) * (2 * Math.PI)) / r) +
											1);
							},
							elasticInOut: function (t) {
								var e,
									n = 0.1,
									r = 0.4;
								return 0 === t
									? 0
									: 1 === t
									? 1
									: (r || (r = 0.3),
									  !n || n < 1
											? ((n = 1), (e = r / 4))
											: (e = (r / (2 * Math.PI)) * Math.asin(1 / n)),
									  (t *= 2) < 1
											? n *
											  Math.pow(2, 10 * (t -= 1)) *
											  Math.sin(((t - e) * (2 * Math.PI)) / r) *
											  -0.5
											: n *
													Math.pow(2, -10 * (t -= 1)) *
													Math.sin(((t - e) * (2 * Math.PI)) / r) *
													0.5 +
											  1);
							},
							backIn: function (t) {
								var e = 1.70158;
								return t * t * ((e + 1) * t - e);
							},
							backOut: function (t) {
								var e = 1.70158;
								return (t -= 1) * t * ((e + 1) * t + e) + 1;
							},
							backInOut: function (t) {
								var e = 2.5949095;
								return (t *= 2) < 1
									? t * t * ((e + 1) * t - e) * 0.5
									: 0.5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);
							},
							bounceIn: function (t) {
								return 1 - r.bounceOut(1 - t);
							},
							bounceOut: function (t) {
								return (t /= 1) < 1 / 2.75
									? 7.5625 * t * t
									: t < 2 / 2.75
									? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
									: t < 2.5 / 2.75
									? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
									: 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
							},
							bounceInOut: function (t) {
								return t < 0.5
									? 0.5 * r.bounceIn(2 * t)
									: 0.5 * r.bounceOut(2 * t - 1) + 0.5;
							},
						};
						t.exports = r;
					},
					function (t, e, n) {
						'use strict';
						var r = n(0),
							i = n(207);
						function a(t, e) {
							var n = r.isNil(t.attr('fillOpacity'))
									? 1
									: t.attr('fillOpacity'),
								a = r.isNil(t.attr('strokeOpacity'))
									? 1
									: t.attr('strokeOpacity');
							t.attr('fillOpacity', 0), t.attr('strokeOpacity', 0);
							var o = { fillOpacity: n, strokeOpacity: a };
							i.doAnimation(t, o, e);
						}
						t.exports = { fadeIn: a };
					},
					function (t, e, n) {
						'use strict';
						var r = n(207),
							i = n(37),
							a = n(16),
							o = a.Shape;
						function s(t, e, n, i, a) {
							var s,
								u,
								c = r.getCoordInfo(n),
								f = c.start,
								l = c.end,
								h = c.width,
								p = c.height,
								d = new o.Rect({
									attrs: { x: f.x, y: l.y, width: h, height: p },
								});
							'y' === a
								? ((s = f.x + h / 2), (u = i.y < f.y ? i.y : f.y))
								: 'x' === a
								? ((s = i.x > f.x ? i.x : f.x), (u = f.y + p / 2))
								: 'xy' === a &&
								  (n.isPolar
										? ((s = n.center.x), (u = n.center.y))
										: ((s = (f.x + l.x) / 2), (u = (f.y + l.y) / 2)));
							var v = r.getScaledMatrix(d, [s, u], a);
							(d.isClip = !0),
								(d.endState = { matrix: v }),
								d.set('canvas', t.get('canvas')),
								t.attr('clip', d);
							var g = function () {
								t.attr('clip', null), d.remove(!0);
							};
							r.doAnimation(d, d.endState, e, g);
						}
						function u(t, e, n) {
							for (
								var i, a, o, s = t.get('children'), u = 0, c = s.length;
								u < c;
								u++
							) {
								var f = s[u],
									l = f.getBBox();
								(i = (l.minX + l.maxX) / 2),
									(a = (l.minY + l.maxY) / 2),
									(o = r.getScaledMatrix(f, [i, a], n)),
									r.doAnimation(f, { matrix: o }, e);
							}
						}
						function c(t, e, n, r) {
							s(t, e, n, r, 'x');
						}
						function f(t, e, n, r) {
							s(t, e, n, r, 'y');
						}
						function l(t, e, n, r) {
							s(t, e, n, r, 'xy');
						}
						function h(t, e) {
							u(t, e, 'x');
						}
						function p(t, e) {
							u(t, e, 'y');
						}
						function d(t, e) {
							u(t, e, 'xy');
						}
						function v(t, e, n) {
							var a = i.getClip(n);
							a.set('canvas', t.get('canvas')), t.attr('clip', a);
							var o = function () {
									t.attr('clip', null), a.remove(!0);
								},
								s = {};
							if (n.isPolar) {
								var u = n.startAngle,
									c = n.endAngle;
								(s.endAngle = c), a.attr('endAngle', u);
							} else {
								var f = n.start,
									l = n.end,
									h = Math.abs(f.x - l.x),
									p = Math.abs(f.y - l.y);
								n.isTransposed
									? (a.attr('height', 0), (s.height = p))
									: (a.attr('width', 0), (s.width = h));
							}
							r.doAnimation(a, s, e, o);
						}
						t.exports = {
							groupWaveIn: v,
							groupScaleInX: c,
							groupScaleInY: f,
							groupScaleInXY: l,
							shapesScaleInX: h,
							shapesScaleInY: p,
							shapesScaleInXY: d,
						};
					},
					function (t, e, n) {
						'use strict';
						(e.__esModule = !0), (e['default'] = void 0);
						var r = n(0),
							i = n(30);
						(i._Interactions = {}),
							(i.registerInteraction = function (t, e) {
								i._Interactions[t] = e;
							}),
							(i.getInteraction = function (t) {
								return i._Interactions[t];
							}),
							(i.prototype.interaction = function (t, e) {
								var n = this._interactions || {};
								n[t] && n[t].destroy();
								var r = i.getInteraction(t),
									a = new r(e, this);
								return (n[t] = a), (this._interactions = n), this;
							}),
							(i.prototype.clearInteraction = function (t) {
								var e = this._interactions;
								if (e)
									return (
										t
											? (e[t] && e[t].destroy(), delete e[t])
											: (0, r.each)(e, function (t, n) {
													t.destroy(), delete e[n];
											  }),
										this
									);
							});
						var a = i;
						e['default'] = a;
					},
					,
					,
					function (t, e, n) {
						'use strict';
						var r = n(1);
						(e.__esModule = !0), (e['default'] = void 0);
						var i = n(0),
							a = r(n(249)),
							o = (function () {
								var t = e.prototype;
								function e(t, e) {
									var n = this;
									(this.type = ''),
										(this.startEvent = 'touchstart'),
										(this.processEvent = 'touchmove'),
										(this.endEvent = 'touchend'),
										(this.resetEvent = null),
										(this.context = null),
										(this._start = function (t) {
											n.start(t);
										}),
										(this._process = function (t) {
											n.process(t);
										}),
										(this._end = function (t) {
											n.end(t);
										}),
										(this._reset = function (t) {
											n.reset(t);
										}),
										(0, i.mix)(this, this.getDefaultCfg(), t),
										(this.context = this.getInteractionContext(e)),
										(this.chart = e);
									var r = this.range;
									r && (this.context.range = r), this._bindEvents(e);
								}
								return (
									(t.getDefaultCfg = function () {
										return {};
									}),
									(t.getInteractionContext = function (t) {
										var e = t.get('interactionContext');
										return (
											e ||
											((e = new a['default'](t)),
											t.set('interactionContext', e),
											e)
										);
									}),
									(t._bindEvents = function (t) {
										var e = this.startEvent,
											n = this.processEvent,
											r = this.endEvent,
											i = this.resetEvent,
											a = t.get('canvas');
										a.on(e, this._start),
											a.on(n, this._process),
											a.on(r, this._end),
											a.on(i, this._reset);
									}),
									(t._clearEvents = function () {
										var t = this.chart,
											e = this.startEvent,
											n = this.processEvent,
											r = this.endEvent,
											i = this.resetEvent,
											a = t.get('canvas');
										a.off(e, this._start),
											a.off(n, this._process),
											a.off(r, this._end),
											a.off(i, this._start);
									}),
									(t.start = function () {}),
									(t.process = function () {}),
									(t.end = function () {}),
									(t.reset = function () {}),
									(t.destroy = function () {
										this._clearEvents();
									}),
									e
								);
							})(),
							s = o;
						e['default'] = s;
					},
					,
					function (t, e, n) {
						'use strict';
						var r = n(77);
						n(209),
							n(193),
							n(203),
							n(218),
							n(219),
							n(223),
							n(224),
							n(225),
							n(226),
							n(227),
							n(228),
							n(229);
						var i = n(76);
						r.Component = { Marker: i };
						var a = n(230),
							o = n(233),
							s = n(234),
							u = n(235);
						(r.Animate = n(206)),
							r.Chart.plugins.register([a, s, o, u]),
							n(247),
							(t.exports = r);
					},
					function (t, e, n) {
						'use strict';
						var r = n(1),
							i = r(n(241)),
							a = r(n(248)),
							o = r(n(250));
						i['default'].registerInteraction('pan', a['default']),
							i['default'].registerInteraction('pinch', o['default']);
					},
					function (t, e, n) {
						'use strict';
						var r = n(1);
						(e.__esModule = !0), (e['default'] = void 0);
						var i = r(n(2)),
							a = r(n(3)),
							o = r(n(4)),
							s = r(n(244));
						function u(t) {
							return function () {
								var e,
									n = (0, a['default'])(t);
								if (c()) {
									var r = (0, a['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, i['default'])(this, e);
							};
						}
						function c() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var f = (function (t) {
								(0, o['default'])(e, t);
								u(e);
								function e() {
									return t.apply(this, arguments) || this;
								}
								var n = e.prototype;
								return (
									(n.getDefaultCfg = function () {
										return {
											type: 'pan',
											startEvent: 'panstart',
											processEvent: 'pan',
											endEvent: 'panend',
										};
									}),
									(n.start = function () {
										var t = this.context;
										t.start();
									}),
									(n.process = function (t) {
										var e = t.direction,
											n = t.deltaX;
										if ('up' !== e && 'down' !== e) {
											t.preventDefault && t.preventDefault();
											var r = this.context,
												i = r.chart,
												a = i.get('coord'),
												o = a.start,
												s = a.end,
												u = s.x - o.x,
												c = n / u;
											r.doMove(c);
										}
									}),
									e
								);
							})(s['default']),
							l = f;
						e['default'] = l;
					},
					function (t, e, n) {
						'use strict';
						(e.__esModule = !0), (e['default'] = void 0);
						var r = n(75),
							i = n(47),
							a = n(65);
						function o(t, e) {
							if (t.length !== e.length) return !1;
							var n = t.length - 1;
							return t[0] === e[0] && t[n] === e[n];
						}
						var s = [0, 1],
							u = (function () {
								function t(t) {
									(this.chart = null),
										(this.values = null),
										(this.range = s),
										(this.startRange = s),
										(this.minCount = 10),
										(this.chart = t),
										this._initEvent(t);
								}
								var e = t.prototype;
								return (
									(e._initEvent = function (t) {
										var e = this;
										t.on(i.EVENT_AFTER_INIT, function () {
											var t = e.getPinchScale(),
												n = [].concat(t.values);
											(e.values = n),
												e.minScale || (e.minScale = e.minCount / n.length),
												e.range !== s &&
													(e.updateRange(e.range), e.updateTicks());
										}),
											t.on(i.EVENT_AFTER_DATA_CHANGE, function () {
												e.updateRange(e.range);
											});
									}),
									(e.getPinchScale = function () {
										var t = this.chart,
											e = t.getXScale();
										return e;
									}),
									(e.getFollowScale = function () {
										var t = this.chart,
											e = t.getYScales() || [];
										return e[0];
									}),
									(e.start = function () {
										var t = this.range,
											e = this.getPinchScale(),
											n = t[0],
											r = t[1];
										(this.startRange = [n, r]),
											(this.lastTickCount = e.tickCount);
									}),
									(e.doZoom = function (t, e, n) {
										var r = this.startRange,
											i = this.minScale,
											a = r[0],
											o = r[1],
											s = 1 - n,
											u = o - a,
											c = u * s,
											f = c * t,
											l = c * e,
											h = Math.max(0, a - f),
											p = Math.min(1, o + l),
											d = [h, p];
										p - h < i || this.updateRange(d);
									}),
									(e.doMove = function (t) {
										if (t) {
											var e,
												n = this.startRange,
												r = n[0],
												i = n[1],
												a = i - r,
												o = a * t,
												s = r - o,
												u = i - o;
											(e = s < 0 ? [0, a] : u > 1 ? [1 - a, 1] : [s, u]),
												this.updateRange(e);
										}
									}),
									(e.updateRange = function (t) {
										var e = this.values,
											n = t[0],
											r = t[1];
										(n = Math.max(0, n)),
											(r = Math.min(1, r)),
											(this.range = [n, r]);
										var i = e.length,
											a = n * i,
											o = r * i,
											s = e.slice(a, o);
										this.repaint(s);
									}),
									(e.repaint = function (t) {
										var e = this.chart,
											n = this.getPinchScale(),
											r = n.values,
											i = n.ticks;
										o(r, t) ||
											(this.updateScale(n, { ticks: i, values: t }),
											this.updateFollowScale(n, t),
											e.repaint());
									}),
									(e.updateFollowScale = function (t, e) {
										var n = this.chart,
											i = this.getFollowScale(),
											a = t.field,
											o = t.type,
											s = i.field,
											u = [],
											c = {};
										e.forEach(function (t) {
											c[t] = !0;
										});
										var f = n.get('data');
										f.forEach(function (e) {
											if ('timeCat' === o) {
												var n = t._toTimeStamp(e[a]);
												c[n] && u.push(e[s]);
											}
										});
										var l = (0, r.getRange)(u),
											h = l.min,
											p = l.max;
										this.updateScale(i, { min: h, max: p, nice: !0 });
									}),
									(e.updateScale = function (t, e) {
										t && t.change(e);
									}),
									(e.updateTicks = function () {
										var t = this.chart,
											e = this.lastTickCount,
											n = this.values,
											r = this.getPinchScale(),
											i = r.values,
											o = r.tickCount,
											s = r.isRounding,
											u = Math.round((o * n.length) / i.length);
										if (u !== e) {
											var c = a({ maxCount: u, data: n, isRounding: s }),
												f = c.ticks;
											this.updateScale(r, { ticks: f, values: i }), t.repaint();
										}
									}),
									t
								);
							})(),
							c = u;
						e['default'] = c;
					},
					function (t, e, n) {
						'use strict';
						var r = n(1);
						(e.__esModule = !0), (e['default'] = void 0);
						var i = r(n(22)),
							a = r(n(2)),
							o = r(n(3)),
							s = r(n(4)),
							u = r(n(244)),
							c = n(0);
						function f(t) {
							return function () {
								var e,
									n = (0, o['default'])(t);
								if (l()) {
									var r = (0, o['default'])(this).constructor;
									e = Reflect.construct(n, arguments, r);
								} else e = n.apply(this, arguments);
								return (0, a['default'])(this, e);
							};
						}
						function l() {
							if ('undefined' === typeof Reflect || !Reflect.construct)
								return !1;
							if (Reflect.construct.sham) return !1;
							if ('function' === typeof Proxy) return !0;
							try {
								return (
									Date.prototype.toString.call(
										Reflect.construct(Date, [], function () {}),
									),
									!0
								);
							} catch (t) {
								return !1;
							}
						}
						var h = (function (t) {
								(0, s['default'])(n, t);
								f(n);
								var e = n.prototype;
								function n(e, n) {
									var r;
									r = t.call(this, e, n) || this;
									var a = (0, i['default'])(r),
										o = a.context;
									return (0, c.mix)(o, e), r;
								}
								return (
									(e.getDefaultCfg = function () {
										return {
											type: 'pinch',
											startEvent: 'pinchstart',
											processEvent: 'pinch',
											endEvent: 'pinchend',
										};
									}),
									(e.start = function () {
										var t = this.context;
										t.start();
									}),
									(e.process = function (t) {
										t.preventDefault && t.preventDefault();
										var e = t.zoom,
											n = t.center,
											r = this.context,
											i = r.chart,
											a = i.get('coord'),
											o = a.start,
											s = a.end,
											u = s.x - o.x,
											c = Math.abs(n.x - o.x),
											f = Math.abs(s.x - n.x),
											l = c / u,
											h = f / u;
										r.doZoom(l, h, e);
									}),
									(e.end = function () {
										var t = this.context;
										t.updateTicks();
									}),
									n
								);
							})(u['default']),
							p = h;
						e['default'] = p;
					},
				]);
			});
		},
		'71ff': function (t, e, n) {
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
						n('div', { staticClass: 'map-content' }, [
							n('h3', [t._v('Route distance statistics of this week')]),
							n('canvas', {
								attrs: { width: t.width, height: t.height, id: 'container' },
							}),
						]),
					]);
				},
				i = [],
				a = (n('7514'), n('5df3'), n('1c4c'), n('96cf'), n('3b8d')),
				o = n('2095'),
				s = n.n(o),
				u = n('c1df'),
				c = n.n(u),
				f = {
					data: function () {
						return { list: [], width: window.innerWidth - 30, height: 200 };
					},
					created: function () {
						this.getList();
					},
					methods: {
						getList: (function () {
							var t = Object(a['a'])(
								regeneratorRuntime.mark(function t() {
									var e,
										n,
										r,
										i = this;
									return regeneratorRuntime.wrap(
										function (t) {
											while (1)
												switch ((t.prev = t.next)) {
													case 0:
														return (
															(t.prev = 0),
															this.$toast.loading({ duration: 0 }),
															(e = Array.from({ length: 7 }).map(function (
																t,
																e,
															) {
																return c()()
																	.weekday(e + 1)
																	.format('YYYY-MM-DD');
															})),
															(t.next = 5),
															this.$http({ url: this.$api.user_week_report })
														);
													case 5:
														(n = t.sent),
															(r = n.data),
															(e = e.map(function (t) {
																var e = r.find(function (e) {
																	return e._id === t;
																});
																return e
																	? { date: t, value: e.distance_total }
																	: { date: t, value: 0 };
															})),
															this.$nextTick(function () {
																i.init(e);
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
										[[0, , 9, 12]],
									);
								}),
							);
							function e() {
								return t.apply(this, arguments);
							}
							return e;
						})(),
						init: function (t) {
							var e = new s.a.Chart({
								id: 'container',
								pixelRatio: window.devicePixelRatio,
							});
							e.source(t, {
								date: { type: 'timeCat', range: [0, 1], tickCount: 3 },
							}),
								e.tooltip({
									custom: !0,
									showXTip: !0,
									showYTip: !0,
									snap: !0,
									crosshairsType: 'xy',
									crosshairsStyle: { lineDash: [2] },
								}),
								e.axis('date', {
									label: function (t, e, n) {
										var r = {};
										return (
											0 === e
												? (r.textAlign = 'left')
												: e === n - 1 && (r.textAlign = 'right'),
											r
										);
									},
								}),
								e.line().position('date*value'),
								e.render();
						},
					},
				},
				l = f,
				h = (n('017a'), n('2877')),
				p = Object(h['a'])(l, r, i, !1, null, '6b6eacca', null);
			e['default'] = p.exports;
		},
		a36e: function (t, e, n) {},
	},
]);
