import { shallowMount } from '@vue/test-utils'
import Options from './Options.vue'

it('should only select the first option when rendered', async () => {
	const wrapper = shallowMount(Options)

	const options = wrapper.findAll('.option')
	for( let i=0; i<options.length; i++ ) {
		const item = options.at(i);
		const cssClasses = item.classes();
		if( i === 0 ) {
			expect(cssClasses).toContain('selected');
		} else {
			expect(cssClasses).not.toContain('selected');
		}
	}
})

it('should select the second option when clicked', async () => {
	const wrapper = shallowMount(Options)

	const options = wrapper.findAll('.option')
	// const first = options.at(0)
	const second = options.at(1)
	await second.trigger('click')
	const cssClasses = second.classes()

	expect(cssClasses).toContain('selected')
})
it('should unselect the first option when clicking on another', async () => {
	const wrapper = shallowMount(Options)

	const options = wrapper.findAll('.option')
	const first = options.at(0)
	const second = options.at(1)
	await second.trigger('click')

	const cssClasses = first.classes();
	expect(cssClasses).not.toContain('selected')
})

it('should be able to switch back to the first option', async () => {
	const wrapper = shallowMount(Options)

	const options = wrapper.findAll('.option')
	const first = options.at(0)
	const second = options.at(1)

	await second.trigger('click');
	await first.trigger('click');

	const cssClasses = first.classes();
	expect(cssClasses).toContain('selected')
})
