import Card from '../../../components/card'
import { render } from '@testing-library/react'

it('Card', () => {
    const renderedCard = render(<Card title={'Title test'} value="Value"/>)

    expect(renderedCard).toMatchSnapshot()
})
