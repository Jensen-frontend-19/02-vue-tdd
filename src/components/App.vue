<template>
	<div id="app">
		<h1>Welcome to Vue.js</h1>
		<div class="bottom">
			<OnOff />
		</div>
		<div class="">
			<Counter/>
		</div>
		<Options/>
		<Visibility />
		<Input />
	</div>
</template>

<script>
import OnOff from './onoff/OnOff.vue';
import Counter from './counter/Counter.vue';
import Options from './options/Options.vue';
import Visibility from './usefulStuff/Visibility.vue';
import Input from './usefulStuff/Input.vue';
export default {
	name: 'app',
	components: { OnOff, Counter, Options, Visibility, Input }
}
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<!-- Global CSS -->
<style>
code {
	font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
	font-size: 0.9em;
	white-space: pre-wrap;
	color: #2c3e50;
}

code::before, code::after {
	content: '`';
}
</style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
#app {
	text-align: center;
}

#app h1 {
	color: #2c3e50;
	font-weight: 300;
	margin: 0;
}

.banner {
	height: 200px;
	background-color: #f6f6f6;
	padding: 50px 10px;
}

.bottom {
	padding: 80px 10px;
	font-size: 24px;
	font-weight: 300;
}

.fade {
	font-size: 14px;
}

.logo {
	animation: spin 4s 1s infinite linear
}

@keyframes spin {
	from {transform:rotate(0deg);}
	to {transform:rotate(360deg);}
}
</style>
