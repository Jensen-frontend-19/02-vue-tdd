<template lang="html">
	<div>
		<input type="text" @keyup="handleKey" />
		<p> {{ message }} </p>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			message: ''
		}
	},
	methods: {
		handleKey(keyEvent) {
			// Alternativt sätt:
			// 'abcdefghijklmnopqrstuvwxyzåäö0123...'
			const pattern = /[a-zA-ZåäöÅÄÖ0-9]/;
			if( pattern.test(keyEvent.key) ) {
				this.message = 'You pressed ' + keyEvent.key;
			} else {
				this.message = '';
			}
		}
	}
}
</script>

<style lang="css" scoped>
div {
	border: 1px solid gray;
	margin: 1em;
	padding: 0.5em;
}
</style>
