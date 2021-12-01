import {render, fireEvent} from '@testing-library/vue'
import Home from '../src/views/Home.vue'
import Away from '../src/views/Away.vue'
import All from '../src/views/All.vue'
import NonCon from '../src/views/NonCon.vue'
import router from '../src/router/index.js'


test('Router renders away games when away button is clicked',
    async () => {
    const {getByText, queryByText} = render(Away, { router })
    //home games titles (false)
    expect(queryByText('ASU vs ECU')).toBeFalsy()
    expect(queryByText('ASU vs Elon')).toBeFalsy()
    expect(queryByText('ASU vs Marshall')).toBeFalsy()
    expect(queryByText('ASU vs #14 Coastal Carolina')).toBeFalsy()
    expect(queryByText('ASU vs ULM')).toBeFalsy()
    expect(queryByText('ASU vs South Alabama')).toBeFalsy()
    expect(queryByText('ASU vs Georgia Southern')).toBeFalsy()

    //home info (false)
    expect(queryByText('App State win: 33-19')).toBeFalsy()
    expect(queryByText('App State win: 44-10')).toBeFalsy()
    expect(queryByText('App State win: 31-30')).toBeFalsy()
    expect(queryByText('App State win: 30-27')).toBeFalsy()
    expect(queryByText('App State win: 59-28')).toBeFalsy()
    expect(queryByText('App State win: 31-7')).toBeFalsy()
    expect(queryByText('App State win: 27-3')).toBeFalsy()

    //other games titles (true)
    expect(queryByText('ASU at #22 Miami')).toBeTruthy()
    expect(queryByText('ASU at Georgia State')).toBeTruthy()
    expect(queryByText('ASU at Louisiana')).toBeTruthy()
    expect(queryByText('ASU at Arkansas State')).toBeTruthy()
    expect(queryByText('ASU at South Alabama')).toBeTruthy()

    //other info (true)
    expect(queryByText('App State loss: 23-25')).toBeTruthy()
    expect(queryByText('App State win: 45-16')).toBeTruthy()
    expect(queryByText('App State loss: 13-41')).toBeTruthy()
    expect(queryByText('App State win: 48-14')).toBeTruthy()
    expect(queryByText('App State win: 45-7')).toBeTruthy()
})


test('Router renders home games when home button is clicked',
    async () => {
    const {getByText, queryByText} = render(Home, { router })
    //home games titles (true)
    expect(queryByText('ASU vs ECU')).toBeTruthy()
    expect(queryByText('ASU vs Elon')).toBeTruthy()
    expect(queryByText('ASU vs Marshall')).toBeTruthy()
    expect(queryByText('ASU vs #14 Coastal Carolina')).toBeTruthy()
    expect(queryByText('ASU vs ULM')).toBeTruthy()
    expect(queryByText('ASU vs South Alabama')).toBeTruthy()
    expect(queryByText('ASU vs Georgia Southern')).toBeTruthy()

    //home info (true)
    expect(queryByText('App State win: 33-19')).toBeTruthy()
    expect(queryByText('App State win: 44-10')).toBeTruthy()
    expect(queryByText('App State win: 31-30')).toBeTruthy()
    expect(queryByText('App State win: 30-27')).toBeTruthy()
    expect(queryByText('App State win: 59-28')).toBeTruthy()
    expect(queryByText('App State win: 31-7')).toBeTruthy()
    expect(queryByText('App State win: 27-3')).toBeTruthy()

    //other games titles (false)
    expect(queryByText('ASU at #22 Miami')).toBeFalsy()
    expect(queryByText('ASU at Georgia State')).toBeFalsy()
    expect(queryByText('ASU at Louisiana')).toBeFalsy()
    expect(queryByText('ASU at Arkansas State')).toBeFalsy()
    expect(queryByText('ASU at South Alabama')).toBeFalsy()

    //other info (false)
    expect(queryByText('App State loss: 23-25')).toBeFalsy()
    expect(queryByText('App State win: 45-16')).toBeFalsy()
    expect(queryByText('App State loss: 13-41')).toBeFalsy()
    expect(queryByText('App State win: 48-14')).toBeFalsy()
    expect(queryByText('App State win: 45-7')).toBeFalsy()
})


test('Router renders all games when all button is clicked',
    async () => {
    const {getByText, queryByText} = render(All, { router })
    //home games titles (true)
    expect(queryByText('ASU vs ECU')).toBeTruthy()
    expect(queryByText('ASU vs Elon')).toBeTruthy()
    expect(queryByText('ASU vs Marshall')).toBeTruthy()
    expect(queryByText('ASU vs #14 Coastal Carolina')).toBeTruthy()
    expect(queryByText('ASU vs ULM')).toBeTruthy()
    expect(queryByText('ASU vs South Alabama')).toBeTruthy()
    expect(queryByText('ASU vs Georgia Southern')).toBeTruthy()

    //home info (true)
    expect(queryByText('App State win: 33-19')).toBeTruthy()
    expect(queryByText('App State win: 44-10')).toBeTruthy()
    expect(queryByText('App State win: 31-30')).toBeTruthy()
    expect(queryByText('App State win: 30-27')).toBeTruthy()
    expect(queryByText('App State win: 59-28')).toBeTruthy()
    expect(queryByText('App State win: 31-7')).toBeTruthy()
    expect(queryByText('App State win: 27-3')).toBeTruthy()

    //other games titles (true)
    expect(queryByText('ASU at #22 Miami')).toBeTruthy()
    expect(queryByText('ASU at Georgia State')).toBeTruthy()
    expect(queryByText('ASU at Louisiana')).toBeTruthy()
    expect(queryByText('ASU at Arkansas State')).toBeTruthy()
    expect(queryByText('ASU at South Alabama')).toBeTruthy()

    //other info (true)
    expect(queryByText('App State loss: 23-25')).toBeTruthy()
    expect(queryByText('App State win: 45-16')).toBeTruthy()
    expect(queryByText('App State loss: 13-41')).toBeTruthy()
    expect(queryByText('App State win: 48-14')).toBeTruthy()
    expect(queryByText('App State win: 45-7')).toBeTruthy()
})


test('Router renders non-con games when all NonCon is clicked',
    async () => {
    const {getByText, queryByText} = render(NonCon, { router })
    //home games titles (true)
    expect(queryByText('ASU vs ECU')).toBeTruthy()
    expect(queryByText('ASU vs Elon')).toBeTruthy()
    expect(queryByText('ASU vs Marshall')).toBeTruthy()
    expect(queryByText('ASU vs #14 Coastal Carolina')).toBeFalsy()
    expect(queryByText('ASU vs ULM')).toBeFalsy()
    expect(queryByText('ASU vs South Alabama')).toBeFalsy()
    expect(queryByText('ASU vs Georgia Southern')).toBeFalsy()

    //home info (true)
    expect(queryByText('App State win: 33-19')).toBeTruthy()
    expect(queryByText('App State win: 44-10')).toBeTruthy()
    expect(queryByText('App State win: 31-30')).toBeTruthy()
    expect(queryByText('App State win: 30-27')).toBeFalsy()
    expect(queryByText('App State win: 59-28')).toBeFalsy()
    expect(queryByText('App State win: 31-7')).toBeFalsy()
    expect(queryByText('App State win: 27-3')).toBeFalsy()

    //other games titles (true)
    expect(queryByText('ASU at #22 Miami')).toBeTruthy()
    expect(queryByText('ASU at Georgia State')).toBeFalsy()
    expect(queryByText('ASU at Louisiana')).toBeFalsy()
    expect(queryByText('ASU at Arkansas State')).toBeFalsy()
    expect(queryByText('ASU at South Alabama')).toBeFalsy()

    //other info (true)
    expect(queryByText('App State loss: 23-25')).toBeTruthy()
    expect(queryByText('App State win: 45-16')).toBeFalsy()
    expect(queryByText('App State loss: 13-41')).toBeFalsy()
    expect(queryByText('App State win: 48-14')).toBeFalsy()
    expect(queryByText('App State win: 45-7')).toBeFalsy()
})