import { shallowMount } from '@vue/test-utils'
import Header from '../src/components/Header.vue'


test('App renders blog title correctly', () => {
const wrapper = shallowMount(Header)
expect(wrapper.text()).toMatch("App State Football 2021")
})