<template lang="html">
	<div>
		<div v-for="item in items"
			@click="handleClick(item)"
			:class="{ option: true, selected: selectedId === item.id }"
			:key="item.id">
			{{ item.text }}
		</div>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			items: [
				{ id: 1, text: 'First', value: 'A' },
				{ id: 2, text: 'Second', value: 'B' },
				{ id: 3, text: 'Third', value: 'C' },
				{ id: 4, text: 'Fourth', value: 'D' },
				{ id: 101, text: 'First', value: 'Q' }
			],
			selectedId: 1
		}
	},
	methods: {
		handleClick(item) {
			this.selectedId = item.id;
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
