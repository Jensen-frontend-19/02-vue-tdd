import { shallowMount } from '@vue/test-utils'
import Options from './Options.vue'

it('should select the first option when rendered', async () => {
	const wrapper = shallowMount(Options)

	const options = wrapper.findAll('.option')
	const first = options.at(0)
	const cssClasses = first.classes()

	expect(cssClasses).toContain('selected');
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
// it('should unselect the first option when clicking on another', async () => {})
