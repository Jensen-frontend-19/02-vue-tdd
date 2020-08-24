import { shallowMount } from '@vue/test-utils'
import Visibility from './Visibility.vue'


it('should be visible when rendered', () => {
	console.log('We can use console.log here if we want');
	const wrapper = shallowMount(Visibility);

	let maybeWrapper = wrapper.find('.maybeVisible');
	let elementExists = maybeWrapper.exists();

	expect( elementExists ).toBe(true);

	let elementVisible = maybeWrapper.element.style.display !== 'none';
	expect( elementVisible ).toBe(true);
})
