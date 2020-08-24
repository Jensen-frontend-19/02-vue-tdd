<template lang="html">
	<div>
		<div :class="{option: true, selected: firstSelected}"> First </div>
		<div :class="{option: true, selected: secondSelected}"
			@click="selectSecond"> Second </div>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			firstSelected: true,
			secondSelected: true,
		}
	},
	methods: {
		selectSecond() {
			this.secondSelected = true;
		}
	}
}
</script>

<style lang="css" scoped>
</style>
