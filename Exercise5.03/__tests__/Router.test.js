import {render, fireEvent} from '@testing-library/vue'
import App from '../src/views/Home.vue'
import router from '../src/router/index.js'


test('Router renders home games when home button is clicked',
    async () => {
    const {getByText, queryByText} = render(App, { router })
    expect(queryByText('The Vue.js Workshop Blog')).toBeTruthy()
    expect(queryByText('Vue.js for React developers')).toBeTruthy()
    expect(queryByText('Migrating an AngularJS app to Vue.js')).toBeTruthy()
    await fireEvent.click(getByText('Vue.js for React developers'))
    expect(queryByText('Migrating an AngularJS app to Vue.js')).toBeFalsy()
    expect(queryByText('Post: Vue.js for React developers')).toBeTruthy()
    expect(
    queryByText(
    'Test')
    ).toBeTruthy()
})