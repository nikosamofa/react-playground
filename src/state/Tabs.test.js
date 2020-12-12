import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './Tabs'
import renderer from 'react-test-renderer'

describe(
    'Tabs component', () => {
        const tabsProp = [
            {
                name: 'First tab',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.'
            },
            {
                name: 'Second tab',
                content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            },
            {
                name: 'Third tab',
                content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.'
            },
        ];

        it('renders without crashing', () => {
            const div = document.createElement('div')

            ReactDOM.render(<Tabs />, div);

            ReactDOM.unmountComponentAtNode(div);
        })

        it('renders the first Tab by default', () => {
            const tree = renderer.create(<Tabs tabs={tabsProp} />).toJSON();
            expect(tree).toMatchSnapshot()

        })
    }
)