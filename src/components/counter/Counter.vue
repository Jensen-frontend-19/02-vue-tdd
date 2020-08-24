<template lang="html">
	<div class="">
		<button class="increase" @click="increase"> Increase </button>
		<button class="decrease" @click="decrease"> Decrease </button>
		<span class="value">{{ value }}</span>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			value: 0
		}
	},
	methods: {
		increase() {
			this.value++;
		},
		decrease() {
			this.value--;
		}
	}
}
</script>

<style lang="css" scoped>
</style>
