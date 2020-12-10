import React from 'react'

class Bomb extends React.Component {
    state = { 
        count: 0
     }


    render() {
        return (
            <div className='Bomb'>
                <p>" BOOM!!  "</p>
            </div>
        )
    }

}
export default Bomb;