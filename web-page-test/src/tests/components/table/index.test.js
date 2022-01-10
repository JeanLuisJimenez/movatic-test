import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Table from '../../../components/table'

it('Table', () => {
    const renderedCard = render(<BrowserRouter>
        <Table 
            headers={[
                { name: 'header 1', key: 'header_1' },
                { name: 'header 2', key: 'header_2' }]}
            content={[{
                header_1: 'Row 1 Content',
                header_2: 'Row 1 Content'
            }, {
                header_1: 'Row 2 Content',
                header_2: 'Row 2 Content'
            }]} />
    </BrowserRouter>)

    expect(renderedCard).toMatchSnapshot()
})
