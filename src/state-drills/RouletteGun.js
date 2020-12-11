import React from 'react';

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 6
    }
    state = {
        chamber: null,
        spinningTheChamber: false,
    }

    componentWillUnmount() {
        clearInterval(this.timeout)
    }
    handleClick = () => {
        this.setState(
            {
                spinningTheChamber: true,
            })

        this.timeout = setTimeout(() => {
            const randomChamber = Math.ceil(Math.random() * 6)
            this.setState({
                chamber: randomChamber,
                spinningTheChamber: false,
            })
        }, 2000)
    }

    renderDisplay(){
        const {chamber,spinningTheChamber}=this.state
        const {bulletInChamber}= this.props
        if (spinningTheChamber){
            return "spinning the chamber and pulling the trigger!...."
        }
        else if (chamber===bulletInChamber){
            return 'BANG!!!!!'
        }
        else{
            return "you/'re Safe!"
        }
    }
    render() {
        return (
            <div className='RouletteGun'>
                <p>{this.renderDisplay()}</p>
                <button onClick={this.handleClick}>
                    Pull the trigger!
                    </button>
            </div>
        )
    }
}

export default RouletteGun