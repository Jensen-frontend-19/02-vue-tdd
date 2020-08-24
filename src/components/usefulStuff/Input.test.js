import { shallowMount } from '@vue/test-utils'
import Input from './Input.vue'

it('should not display message when rendered', () => {
	const wrapper = shallowMount(Input);
	let content = wrapper.find('p').text();
	expect(content).toBe('');
})

it('should display message on letter or digit', async () => {
	const wrapper = shallowMount(Input);
	const input = wrapper.find('input');

	const testingCharacters = ['ö', 3, 'R'];
	testingCharacters.forEach(async c => {
		await input.trigger('keyup', {
			key: c
		});

		let content = wrapper.find('p').text();
		expect(content.length).toBeGreaterThan(0);
	});
})

it('should not display message on Shift', async () => {
	const wrapper = shallowMount(Input);
	const input = wrapper.find('input');

	// DOES NOT WORK
	// HOMEWORK TO WEDNESDAY!
	await input.trigger('keyup.shift', {
		shiftKey: true
	});

	let content = wrapper.find('p').text();
	// expect(content).toBe('');
	expect(true).toBe(false);
})
