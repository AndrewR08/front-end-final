import { shallowMount } from '@vue/test-utils'
import Rich from '../src/components/Rich.vue'


test('App renders blog title correctly', () => {
const wrapper = shallowMount(Rich)
expect(wrapper.text()).toMatch("More Details")
})