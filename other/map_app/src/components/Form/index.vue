<template>
	<div v-bind="$attrs" v-on="$listeners">
		<slot></slot>
	</div>
</template>

<script>
import Vue from 'vue';
import AsyncValidator from 'async-validator';

export default {
	props: {
		forms: {
			type: Object,
			default() {
				return {};
			},
		},
		rules: {
			type: Object,
			default() {
				return {};
			},
		},
	},
	methods: {
		validate({ message = true } = {}) {
			return new Promise((resolve) => {
				const rules = this.rules;
				const keys = Object.keys(rules);
				let i = 0;
				const len = keys.length;
				let flag = false;
				while (i < len) {
					if (flag) break;
					const key = keys[i];
					const descr = {
						[key]: rules[key],
					};
					const model = {
						[key]: this.forms[key],
					};
					const validator = new AsyncValidator(descr);
					validator.validate(model, (errors, fields) => {
						if (errors) {
							if (errors instanceof Array && errors[0]) {
								const error = errors[0];
								!error.hideToast && message && this.$toast(error.message);
							} else {
								!errors.hideToast && message && this.$toast(errors.message);
							}
							flag = true;
							resolve(false);
						}
					});
					i++;
				}
				resolve(true);
			});
		},
		validateField() {},
	},
};
</script>
