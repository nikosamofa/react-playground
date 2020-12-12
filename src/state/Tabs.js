import React from 'react'
import ReactDOM from 'react-dom'


class Tabs extends React.Component {
    static defaultProps = { tabs: [], };
    state = {
        currentTabIndex: 0
    }
    handleButtonClick (index) {
        console.log('Button clicked', { index })
        this.setState({currentTabIndex:index})
    }
    renderButton() {
        return this.props.tabs.map((tab, index) => (
            <button key={index} onClick={() => this.handleButtonClick(index)}>
                {tab.name}
            </button>
        ))
    }
    renderContent() {
        const currentTab = this.props.tabs[this.state.currentTabIndex]
        return (
            <div className='content'>
                {currentTab.content}
            </div>
        )
    }

    render() {
        const currentTab = this.props.tabs[0]
        return <div>
            {this.renderButton()}
            {this.props.tabs.length && this.renderContent()}
        </div>
    }
}

export default Tabs