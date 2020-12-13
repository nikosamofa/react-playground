import React from 'react'
import ReactDOM from 'react-dom'


class Accordion extends React.Component {
    static defaultProps = {
        sections: []
    };

    state = {
        activesectionsIndex: null,
    }

    handlesSetActiveSectons = (sectionIndex) => {
        this.setState({ activeSectionIndex: sectionIndex })
    }

    renderSections(sections, idx, activeSectionIndex) {
        return (
            <li className='Accordion_item' key={idx}>
                <button
                    type='button'
                    onClick={() => this.handlesSetActiveSectons(idx)}>
                    {sections.title}
                </button>
                {(activeSectionIndex === idx) && <p>{sections.content}</p>}
            </li>
        )
    }

    render() {
        const { activeSectionIndex } = this.state
        const { sections } = this.props
        return (
            <ul className='Accordion'>
                {sections.map((sections, idx) =>
                 this.renderSections(sections, idx, activeSectionIndex))}

            </ul>
        )

    }
}

export default Accordion