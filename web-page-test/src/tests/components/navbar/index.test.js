import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import NavBar from '../../../components/navbar'

it('NavBar', () => {
    const renderedCard = render(<BrowserRouter><NavBar title={'Title test'} value="Value"/></BrowserRouter>)

    expect(renderedCard).toMatchSnapshot()
})
