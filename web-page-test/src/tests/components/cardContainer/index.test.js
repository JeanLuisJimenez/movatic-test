import CardContainer from '../../../components/cardContainer'
import { render } from '@testing-library/react'

it('CardContainer', () => {
    const renderedCard = render(<CardContainer title={'TEST TITLE'} cards={[{title: "Card Title 1", value: "Yes"}, {title: "Card Title 2", value: "No"}]}/>)

    expect(renderedCard).toMatchSnapshot()
})
