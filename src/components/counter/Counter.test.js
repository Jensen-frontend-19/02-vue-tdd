import { shallowMount } from '@vue/test-utils'
import Counter from './Counter.vue'

// 4a Skriv test för, och implementera, en komponent som har en button och visar en siffra. När man klickar på knappen ska värdet som visas öka med 1.

it('should display the number 0 when rendered', () => {
	const expectedValue = 0;
	const wrapper = shallowMount(Counter);

	const element = wrapper.find('.value');
	const actualValue = Number(element.text());

	expect(actualValue).toBe(expectedValue);
})

it('should increase the displayed value when click on Increase button', async () => {
	const expectedValue = 1;
	const wrapper = shallowMount(Counter);
	const button = wrapper.find('.increase');
	const element = wrapper.find('.value');

	await button.trigger('click');
	const actualValue = Number(element.text());

	expect(actualValue).toBe(expectedValue);
})

it('should decrease the displayed value when click on Decrease button', async () => {
	const expectedValue = -1;
	const wrapper = shallowMount(Counter);
	const button = wrapper.find('.decrease');
	const element = wrapper.find('.value');

	await button.trigger('click');
	const actualValue = Number(element.text());

	expect(actualValue).toBe(expectedValue);
})
