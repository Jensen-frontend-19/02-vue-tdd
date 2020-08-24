<template lang="html">
	<div>
		<div :class="{option: true, selected: firstSelected}"
			@click="selectFirst"> First </div>
		<div :class="{option: true, selected: secondSelected}"
			@click="selectSecond"> Second </div>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			firstSelected: true,
			secondSelected: false,
		}
	},
	methods: {
		selectFirst() {
			this.firstSelected = true;
			this.secondSelected = false;
		},
		selectSecond() {
			this.firstSelected = false;
			this.secondSelected = true;
		}
	}
}
</script>

<style lang="css" scoped>
.option {
	border: 1px solid gray;
	border-radius: 1em;
	padding: 0.5em;
	margin: 0.5em;
}
.selected {
	background-color: #000000;
	color: #F6F6F6
}
</style>
