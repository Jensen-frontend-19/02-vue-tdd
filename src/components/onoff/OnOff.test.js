import { shallowMount } from '@vue/test-utils'
import OnOff from './OnOff.vue'

it('should display "On" when rendered', () => {
	// Arrange
	const expectedLabel = 'On';
	const wrapper = shallowMount(OnOff);
	let button = wrapper.find('button')

	// Act
	let content = button.text()

	// Assert
	expect(content).toBe(expectedLabel);
})

it('should display "Off" when clicked', async () => {
	const expectedLabel = 'Off';
	const wrapper = shallowMount(OnOff);
	let button = wrapper.find('button');
	await button.trigger('click');

	let content = button.text()
	expect(content).toBe(expectedLabel);
})

it('should display "On" when clicked on "Off"', async () => {
	const expectedLabel = 'On';
	const wrapper = shallowMount(OnOff);
	let button = wrapper.find('button');

	await button.trigger('click');
	await button.trigger('click');

	let content = button.text()
	expect(content).toBe(expectedLabel);
})
