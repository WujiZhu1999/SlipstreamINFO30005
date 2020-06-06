(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
	['chunk-03152f23'],
	{
		'4b3f': function (t, e, n) {},
		'7abe': function (t, e, n) {
			'use strict';
			n.r(e);
			var r = function () {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n('div', { staticClass: 'map-wrap' }, [
						n('div', { staticClass: 'map-header' }, [
							n('div', { staticClass: 'input-wrap' }, [
								n('input', {
									directives: [
										{
											name: 'model',
											rawName: 'v-model',
											value: t.start,
											expression: 'start',
										},
									],
									attrs: { placeholder: 'Starting point' },
									domProps: { value: t.start },
									on: {
										input: function (e) {
											e.target.composing || (t.start = e.target.value);
										},
									},
								}),
								n('input', {
									directives: [
										{
											name: 'model',
											rawName: 'v-model',
											value: t.end,
											expression: 'end',
										},
									],
									attrs: { placeholder: 'End point' },
									domProps: { value: t.end },
									on: {
										input: function (e) {
											e.target.composing || (t.end = e.target.value);
										},
									},
								}),
							]),
							n('div', { staticClass: 'action' }, [
								n(
									'div',
									[
										n('van-icon', {
											staticStyle: { 'margin-right': '10px' },
											attrs: { name: 'search' },
											nativeOn: {
												click: function (e) {
													return t.onSearch(e);
												},
											},
										}),
										n('van-icon', {
											staticStyle: { 'margin-right': '10px' },
											attrs: { name: 'replay' },
											nativeOn: {
												click: function (e) {
													return t.onReset(e);
												},
											},
										}),
										n('van-icon', {
											attrs: { name: 'location-o' },
											nativeOn: {
												click: function (e) {
													return t.onLocation(e);
												},
											},
										}),
									],
									1,
								),
								n(
									'div',
									{
										directives: [
											{
												name: 'show',
												rawName: 'v-show',
												value: t.routes[t.routeIndex],
												expression: 'routes[routeIndex]',
											},
										],
									},
									[
										t.isRiding
											? 0 === t.currentRoute.status
												? n(
														'a',
														{
															staticClass: 'start-btn',
															style: { color: 'rgb(25, 137, 250)' },
															attrs: { href: 'javascript:;;' },
															on: { click: t.onEndStroke },
														},
														[t._v('End stroke')],
												  )
												: 1 === t.currentRoute.status
												? n(
														'a',
														{
															staticClass: 'start-btn',
															style: { color: '#333' },
															attrs: { href: 'javascript:;;' },
														},
														[t._v('Completed')],
												  )
												: t._e()
											: n(
													'a',
													{
														staticClass: 'start-btn',
														style: { color: 'rgb(25, 137, 250)' },
														attrs: { href: 'javascript:;;' },
														on: { click: t.onStartStroke },
													},
													[t._v('Start stroke')],
											  ),
									],
								),
							]),
						]),
						t.routes[t.routeIndex]
							? n('div', { staticClass: 'map-info' }, [
									n(
										'div',
										[
											n('van-icon', { attrs: { name: 'peer-pay' } }),
											t._v(' Whole length '),
											n('span', { staticStyle: { color: '#1989fa' } }, [
												t._v(
													t._s(t.routes[t.routeIndex].legs[0].distance.text),
												),
											]),
										],
										1,
									),
									n(
										'div',
										[
											n('van-icon', { attrs: { name: 'tosend' } }),
											t._v(' Required time '),
											n('span', { staticStyle: { color: '#1989fa' } }, [
												t._v(
													t._s(t.routes[t.routeIndex].legs[0].duration.text),
												),
											]),
										],
										1,
									),
									n(
										'div',
										[
											n('van-icon', { attrs: { name: 'circle' } }),
											t._v(' Intersection number '),
											n('span', { staticStyle: { color: '#1989fa' } }, [
												t._v(t._s(t.routes[t.routeIndex].legs[0].steps.length)),
											]),
										],
										1,
									),
									n(
										'div',
										[
											n('van-icon', { attrs: { name: 'other-pay' } }),
											t._v(' Proportion of bicycle lanes '),
											n('span', { staticStyle: { color: '#1989fa' } }, [
												t._v(
													t._s(
														t.getBicycle(t.routes[t.routeIndex].legs[0].steps),
													),
												),
											]),
										],
										1,
									),
									n(
										'div',
										[
											n('van-icon', { attrs: { name: 'award-o' } }),
											t._v(
												' ' +
													t._s(
														(
															(0.3 *
																t.routes[t.routeIndex].legs[0].distance.value) /
															1e3
														).toFixed(2),
													) +
													'%of trees you saved\n    ',
											),
										],
										1,
									),
									n('div', [
										n(
											'span',
											{
												staticStyle: { color: 'rgb(25, 137, 250)' },
												on: {
													click: function (e) {
														return e.stopPropagation(), t.onShowViewBike(e);
													},
												},
											},
											[t._v('view bike path')],
										),
									]),
									t.currentRoute._id
										? t._e()
										: n(
												'div',
												{ staticClass: 'lins' },
												[
													t._l(t.routes.length, function (e) {
														return [
															e <= 3
																? n(
																		'a',
																		{
																			key: e,
																			style: {
																				color:
																					t.routeIndex === e - 1
																						? 'rgb(25, 137, 250)'
																						: '#999',
																			},
																			attrs: { href: 'javascript:;;' },
																			on: {
																				click: function (n) {
																					return t.onSelectRouteIndex(e - 1);
																				},
																			},
																		},
																		[t._v('Route ' + t._s(e))],
																  )
																: t._e(),
														];
													}),
												],
												2,
										  ),
							  ])
							: t._e(),
						n(
							'div',
							{ staticClass: 'map-content' },
							[
								n(
									'googlemaps-map',
									{
										ref: 'map',
										staticClass: 'map',
										staticStyle: { height: '100%' },
										attrs: { center: t.center, zoom: t.zoom },
										on: {
											'update:center': function (e) {
												t.center = e;
											},
											'update:zoom': function (e) {
												t.zoom = e;
											},
										},
									},
									[
										n('googlemaps-user-position', {
											on: { 'update:position': t.setUserPosition },
										}),
									],
									1,
								),
							],
							1,
						),
					]);
				},
				i = [],
				s = (n('0d6d'), n('a481'), n('96cf'), n('3b8d')),
				o = {
					data: function () {
						return {
							start: '',
							end: '',
							center: { lat: -37.7997615, lng: 144.9637097 },
							options: {},
							zoom: 18,
							userPosition: null,
							routes: [],
							routeIndex: 0,
							currentRoute: {},
						};
					},
					created: function () {
						this.directionsRendererList = [];
					},
					computed: {
						isRiding: function () {
							return 'number' === typeof this.currentRoute.status;
						},
					},
					mounted: function () {
						this.getLocation(), this.init();
					},
					methods: {
						init: (function () {
							var t = Object(s['a'])(
								regeneratorRuntime.mark(function t() {
									var e;
									return regeneratorRuntime.wrap(
										function (t) {
											while (1)
												switch ((t.prev = t.next)) {
													case 0:
														return (
															(e = window),
															e.google,
															(t.next = 3),
															this.$refs.map.$_getMap()
														);
													case 3:
														(this.map = t.sent),
															this.getCurrentRoute(),
															(this.directionsRendererList = []);
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
						onShowViewBike: function () {
							var t = window,
								e = t.google;
							this.bikeLayer &&
								(this.bikeLayer.setMap(null), (this.bikeLayer = null));
							var n = new e.maps.BicyclingLayer();
							n.setMap(this.map), (this.bikeLayer = n);
						},
						setUserPosition: function (t) {
							this.userPosition = t;
						},
						onReset: (function () {
							var t = Object(s['a'])(
								regeneratorRuntime.mark(function t() {
									return regeneratorRuntime.wrap(
										function (t) {
											while (1)
												switch ((t.prev = t.next)) {
													case 0:
														(this.start = ''),
															(this.end = ''),
															this.clearDirectionsRenderer(),
															(this.response = null),
															(this.routes = []),
															(this.routeIndex = 0);
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
						clearDirectionsRenderer: function () {
							this.directionsRendererList.map(function (t) {
								t.setMap(null);
							}),
								(this.directionsRendererList = []);
						},
						onLocation: function () {
							return this.start
								? this.end
									? void (window.location.href =
											'https://www.google.com/maps/dir/?api=1&origin=' +
											this.urlreplace(this.start) +
											'&destination=' +
											this.urlreplace(this.end) +
											'&travelmode=bicycling')
									: this.$toast('Please enter the destination location')
								: this.$toast('Please enter the starting position');
						},
						urlreplace: function (t) {
							return encodeURIComponent(t).replace(/%20/g, '+');
						},
						getBicycle: function (t) {
							var e = t.length,
								n = t.filter(function (t) {
									return 'BICYCLING' === t.travel_mode;
								}).length;
							return ((n / e) * 100).toFixed(2) + '%';
						},
						onSearch: (function () {
							var t = Object(s['a'])(
								regeneratorRuntime.mark(function t() {
									var e, n, r, i, s, o;
									return regeneratorRuntime.wrap(
										function (t) {
											while (1)
												switch ((t.prev = t.next)) {
													case 0:
														if (this.start) {
															t.next = 2;
															break;
														}
														return t.abrupt(
															'return',
															this.$toast('Please enter the starting position'),
														);
													case 2:
														if (this.end) {
															t.next = 4;
															break;
														}
														return t.abrupt(
															'return',
															this.$toast(
																'Please enter the destination location',
															),
														);
													case 4:
														return (
															(e = this.$toast.loading({
																duration: 0,
																forbidClick: !0,
															})),
															(t.prev = 5),
															(n = 'au'),
															(t.next = 9),
															this.$http({
																url: this.$api.directions,
																params: {
																	origin: this.start,
																	destination: this.end,
																	region: n,
																	key: window.MAPKEY,
																},
															})
														);
													case 9:
														(r = t.sent),
															(i = r.data),
															(s = i.geocoded_waypoints[0].place_id),
															(o = i.geocoded_waypoints[1].place_id),
															(this.origin = s),
															(this.destination = o),
															(this.region = n),
															(this.currentRoute = {}),
															this.calculateAndDisplayRoute(
																{ placeId: s },
																{ placeId: o },
															),
															(t.next = 23);
														break;
													case 20:
														(t.prev = 20),
															(t.t0 = t['catch'](5)),
															this.$toast('Query failed');
													case 23:
														return (t.prev = 23), e.clear(), t.finish(23);
													case 26:
													case 'end':
														return t.stop();
												}
										},
										t,
										this,
										[[5, 20, 23, 26]],
									);
								}),
							);
							function e() {
								return t.apply(this, arguments);
							}
							return e;
						})(),
						onSelectRouteIndex: function (t) {
							this.directionsRendererList.map(function (e, n) {
								e.setOptions({
									routeIndex: t,
									polylineOptions: {
										strokeOpacity: 0 === n ? 0.6 : 0,
										strokeColor: 'rgb(25, 137, 250)',
										strokeWeight: 10,
									},
								});
							}),
								(this.routeIndex = t);
						},
						calculateAndDisplayRoute: function (t, e) {
							var n = this,
								r =
									arguments.length > 2 &&
									void 0 !== arguments[2] &&
									arguments[2];
							return new Promise(function (i) {
								var s = window,
									o = s.google;
								console.log(t, e),
									n.directionsService ||
										(n.directionsService = new o.maps.DirectionsService()),
									n.directionsService.route(
										{
											origin: t,
											destination: e,
											travelMode: o.maps.TravelMode.BICYCLING,
											provideRouteAlternatives: !0,
											region: 'au',
										},
										function (t, e) {
											if ((console.log(t), 'OK' == e))
												if (
													((n.response = t),
													n.clearDirectionsRenderer(),
													(n.directionsRendererList = []),
													r)
												) {
													for (var s = 0; s < t.routes.length; s++)
														if (s === n.routeIndex) {
															var a = new o.maps.DirectionsRenderer();
															a.setMap(n.map),
																a.setDirections(t),
																a.setOptions({
																	routeIndex: s,
																	polylineOptions: {
																		strokeOpacity: 0.6,
																		strokeColor: 'rgb(25, 137, 250)',
																		strokeWeight: 10,
																	},
																}),
																n.directionsRendererList.push(a);
														}
													n.routes = Object.freeze(t.routes);
												} else {
													for (var c = 0; c < t.routes.length; c++) {
														var u = new o.maps.DirectionsRenderer();
														u.setMap(n.map),
															u.setDirections(t),
															u.setOptions({
																routeIndex: c,
																polylineOptions: {
																	strokeOpacity: 0 === c ? 0.6 : 0.3,
																	strokeColor: 'rgb(25, 137, 250)',
																	strokeWeight: 10,
																},
															}),
															n.directionsRendererList.push(u);
													}
													(n.routes = Object.freeze(t.routes)),
														(n.routeIndex = 0);
												}
											else n.$toast('Directions request failed due to ' + e);
											i();
										},
									);
							});
						},
						onStartStroke: (function () {
							var t = Object(s['a'])(
								regeneratorRuntime.mark(function t() {
									var e, n, r, i;
									return regeneratorRuntime.wrap(
										function (t) {
											while (1)
												switch ((t.prev = t.next)) {
													case 0:
														return (
															(t.prev = 0),
															this.$toast.loading({ duration: 0 }),
															(e = this.routes[this.routeIndex]),
															(n = this.$store.getters.user),
															(t.next = 6),
															this.$http({
																url: this.$api.riding,
																method: 'post',
																data: {
																	user: n._id,
																	origin: this.origin,
																	destination: this.destination,
																	routeIndex: this.routeIndex,
																	distance: e.legs[0].distance.value / 1e3,
																	duration: e.legs[0].duration.value,
																	region: this.region,
																	originName: this.start,
																	destinationName: this.end,
																},
															})
														);
													case 6:
														(r = t.sent),
															(i = r.data),
															(this.currentRoute = {
																status: 0,
																origin: this.origin,
																destination: this.destination,
																_id: i._id,
															}),
															this.getCurrentRoute(),
															this.$toast('Start stroke');
													case 11:
														return (
															(t.prev = 11), this.$toast.clear(!0), t.finish(11)
														);
													case 14:
													case 'end':
														return t.stop();
												}
										},
										t,
										this,
										[[0, , 11, 14]],
									);
								}),
							);
							function e() {
								return t.apply(this, arguments);
							}
							return e;
						})(),
						onEndStroke: (function () {
							var t = Object(s['a'])(
								regeneratorRuntime.mark(function t() {
									return regeneratorRuntime.wrap(
										function (t) {
											while (1)
												switch ((t.prev = t.next)) {
													case 0:
														if (((t.prev = 0), this.currentRoute._id)) {
															t.next = 3;
															break;
														}
														return t.abrupt('return');
													case 3:
														return (
															this.$toast.loading({ duration: 0 }),
															(t.next = 6),
															this.$http({
																url: this.$api.riding_stop,
																method: 'post',
																data: { _id: this.currentRoute._id },
															})
														);
													case 6:
														(this.currentRoute.status = 1),
															this.$toast('End stroke');
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
						getCurrentRoute: (function () {
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
															this.$http({
																url: this.$api.riding_underway,
																method: 'post',
															})
														);
													case 4:
														if (
															((e = t.sent),
															(n = e.data),
															(this.currentRoute = n || {}),
															!this.currentRoute._id ||
																2 === this.currentRoute.status)
														) {
															t.next = 12;
															break;
														}
														return (
															(this.routeIndex = this.currentRoute.routeIndex),
															this.clearDirectionsRenderer(),
															(t.next = 12),
															this.calculateAndDisplayRoute(
																{ placeId: this.currentRoute.origin },
																{ placeId: this.currentRoute.destination },
																!0,
															)
														);
													case 12:
														return (
															(t.prev = 12), this.$toast.clear(!0), t.finish(12)
														);
													case 15:
													case 'end':
														return t.stop();
												}
										},
										t,
										this,
										[[0, , 12, 15]],
									);
								}),
							);
							function e() {
								return t.apply(this, arguments);
							}
							return e;
						})(),
						getLocation: function () {
							var t = window,
								e = t.navigator;
							e.geolocation
								? e.geolocation.getCurrentPosition(
										this.showPosition,
										this.showError,
								  )
								: this.$toast('Geolocation is not supported by this browser');
						},
						showPosition: function (t) {
							this.center = { lat: t.coords.latitude, lng: t.coords.longitude };
						},
						showError: function (t) {
							switch (t.code) {
								case t.PERMISSION_DENIED:
									this.$toast('User denied the request for Geolocation.');
									break;
								case t.POSITION_UNAVAILABLE:
									this.$toast('Location information is unavailable.');
									break;
								case t.TIMEOUT:
									this.$toast('The request to get user location timed out.');
									break;
								case t.UNKNOWN_ERROR:
									this.$toast('An unknown error occurred.');
									break;
							}
						},
					},
				},
				a = o,
				c = (n('ea75'), n('2877')),
				u = Object(c['a'])(a, r, i, !1, null, '38dfb279', null);
			e['default'] = u.exports;
		},
		ea75: function (t, e, n) {
			'use strict';
			var r = n('4b3f'),
				i = n.n(r);
			i.a;
		},
	},
]);
