<template lang="html">
	<div class="">
		Antingen synlig eller osynlig -
		<button @click="toggleShow">Ändra synlighet</button>

		<div class="maybeVisible" v-show="showIt">
			kanske synlig
		</div>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			showIt: true
		}
	},
	methods: {
		toggleShow() {
			this.showIt = !this.showIt;
		}
	}
}
</script>

<style lang="css" scoped>
</style>
