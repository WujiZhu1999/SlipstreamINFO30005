(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
	['chunk-1a1e81c1'],
	{
		1044: function (e, t, n) {
			'use strict';
			n.r(t);
			var i = function () {
					var e = this,
						t = e.$createElement,
						n = e._self._c || t;
					return n('div', { staticClass: 'map-wrap' }, [
						n('div', { staticClass: 'map-header' }, [
							n(
								'div',
								{
									staticClass: 'left-icon',
									on: {
										click: function (t) {
											return e.$router.push({ name: 'myroute' });
										},
									},
								},
								[n('van-icon', { attrs: { name: 'arrow-left' } })],
								1,
							),
							n('div', { staticClass: 'input-wrap' }, [
								n('input', {
									directives: [
										{
											name: 'model',
											rawName: 'v-model',
											value: e.start,
											expression: 'start',
										},
									],
									attrs: { placeholder: '', disabled: '' },
									domProps: { value: e.start },
									on: {
										input: function (t) {
											t.target.composing || (e.start = t.target.value);
										},
									},
								}),
								n('input', {
									directives: [
										{
											name: 'model',
											rawName: 'v-model',
											value: e.end,
											expression: 'end',
										},
									],
									attrs: { placeholder: '', disabled: '' },
									domProps: { value: e.end },
									on: {
										input: function (t) {
											t.target.composing || (e.end = t.target.value);
										},
									},
								}),
							]),
							n('div', { staticClass: 'action' }, [
								n(
									'div',
									[
										n('van-icon', {
											attrs: { name: 'location-o' },
											nativeOn: {
												click: function (t) {
													return e.onLocation(t);
												},
											},
										}),
									],
									1,
								),
							]),
						]),
						e.routes[e.routeIndex]
							? n('div', { staticClass: 'map-info' }, [
									n(
										'div',
										[
											n('van-icon', { attrs: { name: 'peer-pay' } }),
											e._v(' Whole length\n      '),
											n('span', { staticStyle: { color: '#1989fa' } }, [
												e._v(
													e._s(e.routes[e.routeIndex].legs[0].distance.text),
												),
											]),
										],
										1,
									),
									n(
										'div',
										[
											n('van-icon', { attrs: { name: 'tosend' } }),
											e._v(' Required time\n      '),
											n('span', { staticStyle: { color: '#1989fa' } }, [
												e._v(
													e._s(e.routes[e.routeIndex].legs[0].duration.text),
												),
											]),
										],
										1,
									),
									n(
										'div',
										[
											n('van-icon', { attrs: { name: 'circle' } }),
											e._v(' Intersection number\n      '),
											n('span', { staticStyle: { color: '#1989fa' } }, [
												e._v(e._s(e.routes[e.routeIndex].legs[0].steps.length)),
											]),
										],
										1,
									),
									n(
										'div',
										[
											n('van-icon', { attrs: { name: 'other-pay' } }),
											e._v(' Proportion of bicycle lanes\n      '),
											n('span', { staticStyle: { color: '#1989fa' } }, [
												e._v(
													e._s(
														e.getBicycle(e.routes[e.routeIndex].legs[0].steps),
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
											e._v(
												'\n      ' +
													e._s(
														(
															(0.3 *
																e.routes[e.routeIndex].legs[0].distance.value) /
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
													click: function (t) {
														return t.stopPropagation(), e.onShowViewBike(t);
													},
												},
											},
											[e._v('view bike path')],
										),
									]),
							  ])
							: e._e(),
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
										attrs: { center: e.center, zoom: e.zoom },
										on: {
											'update:center': function (t) {
												e.center = t;
											},
											'update:zoom': function (t) {
												e.zoom = t;
											},
										},
									},
									[
										n('googlemaps-user-position', {
											on: { 'update:position': e.setUserPosition },
										}),
									],
									1,
								),
							],
							1,
						),
					]);
				},
				o = [],
				r = (n('0d6d'), n('a481'), n('96cf'), n('3b8d')),
				s = {
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
					mounted: function () {
						this.getLocation(), this.init();
					},
					methods: {
						init: (function () {
							var e = Object(r['a'])(
								regeneratorRuntime.mark(function e() {
									var t;
									return regeneratorRuntime.wrap(
										function (e) {
											while (1)
												switch ((e.prev = e.next)) {
													case 0:
														return (
															(t = window),
															t.google,
															(e.next = 3),
															this.$refs.map.$_getMap()
														);
													case 3:
														(this.map = e.sent),
															this.getCurrentRoute(),
															(this.directionsRendererList = []);
													case 6:
													case 'end':
														return e.stop();
												}
										},
										e,
										this,
									);
								}),
							);
							function t() {
								return e.apply(this, arguments);
							}
							return t;
						})(),
						onShowViewBike: function () {
							var e = window,
								t = e.google;
							this.bikeLayer &&
								(this.bikeLayer.setMap(null), (this.bikeLayer = null));
							var n = new t.maps.BicyclingLayer();
							n.setMap(this.map), (this.bikeLayer = n);
						},
						setUserPosition: function (e) {
							this.userPosition = e;
						},
						clearDirectionsRenderer: function () {
							this.directionsRendererList.map(function (e) {
								e.setMap(null);
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
						urlreplace: function (e) {
							return encodeURIComponent(e).replace(/%20/g, '+');
						},
						getBicycle: function (e) {
							var t = e.length,
								n = e.filter(function (e) {
									return 'BICYCLING' === e.travel_mode;
								}).length;
							return ((n / t) * 100).toFixed(2) + '%';
						},
						calculateAndDisplayRoute: function (e, t) {
							var n = this,
								i =
									arguments.length > 2 &&
									void 0 !== arguments[2] &&
									arguments[2];
							return new Promise(function (o) {
								var r = window,
									s = r.google;
								console.log(e, t),
									n.directionsService ||
										(n.directionsService = new s.maps.DirectionsService()),
									n.directionsService.route(
										{
											origin: e,
											destination: t,
											travelMode: s.maps.TravelMode.BICYCLING,
											provideRouteAlternatives: !0,
											region: 'au',
										},
										function (e, t) {
											if ((console.log(e), 'OK' == t))
												if (
													((n.response = e),
													n.clearDirectionsRenderer(),
													(n.directionsRendererList = []),
													i)
												) {
													for (var r = 0; r < e.routes.length; r++)
														if (r === n.routeIndex) {
															var a = new s.maps.DirectionsRenderer();
															a.setMap(n.map),
																a.setDirections(e),
																a.setOptions({
																	routeIndex: r,
																	polylineOptions: {
																		strokeOpacity: 0.6,
																		strokeColor: 'rgb(25, 137, 250)',
																		strokeWeight: 10,
																	},
																}),
																n.directionsRendererList.push(a);
														}
													n.routes = Object.freeze(e.routes);
												} else {
													for (var c = 0; c < e.routes.length; c++) {
														var u = new s.maps.DirectionsRenderer();
														u.setMap(n.map),
															u.setDirections(e),
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
													(n.routes = Object.freeze(e.routes)),
														(n.routeIndex = 0);
												}
											else n.$toast('Directions request failed due to ' + t);
											o();
										},
									);
							});
						},
						getCurrentRoute: (function () {
							var e = Object(r['a'])(
								regeneratorRuntime.mark(function e() {
									var t, n;
									return regeneratorRuntime.wrap(
										function (e) {
											while (1)
												switch ((e.prev = e.next)) {
													case 0:
														return (
															(e.prev = 0),
															this.$toast.loading({ duration: 0 }),
															(e.next = 4),
															this.$http({
																url: this.$api.riding_byId,
																method: 'post',
																data: { _id: this.$route.query._id },
															})
														);
													case 4:
														if (
															((t = e.sent),
															(n = t.data),
															(this.start = n.originName),
															(this.end = n.destinationName),
															(this.currentRoute = n || {}),
															!this.currentRoute._id ||
																2 === this.currentRoute.status)
														) {
															e.next = 14;
															break;
														}
														return (
															(this.routeIndex = this.currentRoute.routeIndex),
															this.clearDirectionsRenderer(),
															(e.next = 14),
															this.calculateAndDisplayRoute(
																{ placeId: this.currentRoute.origin },
																{ placeId: this.currentRoute.destination },
																!0,
															)
														);
													case 14:
														return (
															(e.prev = 14), this.$toast.clear(!0), e.finish(14)
														);
													case 17:
													case 'end':
														return e.stop();
												}
										},
										e,
										this,
										[[0, , 14, 17]],
									);
								}),
							);
							function t() {
								return e.apply(this, arguments);
							}
							return t;
						})(),
						getLocation: function () {
							var e = window,
								t = e.navigator;
							t.geolocation
								? t.geolocation.getCurrentPosition(
										this.showPosition,
										this.showError,
								  )
								: this.$toast('Geolocation is not supported by this browser');
						},
						showPosition: function (e) {
							this.center = { lat: e.coords.latitude, lng: e.coords.longitude };
						},
						showError: function (e) {
							switch (e.code) {
								case e.PERMISSION_DENIED:
									this.$toast('User denied the request for Geolocation.');
									break;
								case e.POSITION_UNAVAILABLE:
									this.$toast('Location information is unavailable.');
									break;
								case e.TIMEOUT:
									this.$toast('The request to get user location timed out.');
									break;
								case e.UNKNOWN_ERROR:
									this.$toast('An unknown error occurred.');
									break;
							}
						},
					},
				},
				a = s,
				c = (n('fbb0'), n('2877')),
				u = Object(c['a'])(a, i, o, !1, null, '755e7a7a', null);
			t['default'] = u.exports;
		},
		'6fb3': function (e, t, n) {},
		fbb0: function (e, t, n) {
			'use strict';
			var i = n('6fb3'),
				o = n.n(i);
			o.a;
		},
	},
]);
