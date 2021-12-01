import { shallowMount } from '@vue/test-utils'
import App from '../src/components/Rich.vue'


test('App renders more details link correctly', () => {
const wrapper = shallowMount(App)
expect(wrapper.text()).toMatch("More Details")
})