import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' }

    onInputChange(event) {
        console.log(event.target.value)
    }

    // onInputClick() {
    //     console.log('clicked')
    // }
    
    onFormSubmit_old(e) {
        // To make sure the form doesnt try to submit itself. We want to control this
        e.preventDefault()

        // This crashes - 'this' equals to 'undefined'
        console.log(this.state.term)

        /*
        class Car {
            // Solution 1 for 'this' issue
            constructor() {
                // super is not needed as I am not extending anything
                // super()
                // Creates a new function drive that is always going to know that 'this' means car
                this.drive = this.drive.bind(this)
            }

            setDriveSound(sound) {
                this.sound = sound
            }
            drive() {
                return this.sound;
            }
            }
            
            const car = new Car();
            car.setDriveSound('vroom');
            car.drive();
            // ‘this’ equals ‘car’
            
            const truck = {
            sound: 'putputput',
            driveMyTruck: car.drive
            }
            
            truck.driveMyTruck()
            // ‘this’ equals ‘truck’ - so car.drive - returns truck.sound which is ‘putputput’
            
            const drive = car.drive
            drive()
            // ‘this‘ equals ‘undefined’ - undefined.drive() - Cannot read property of undefined!
        */
    }

    // Solution 2 for 'this' issue is change the function into an arrow function
    // Arrow functions automatically have their function binded with the class
    onFormSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.term)
    }

    

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                {/* Solution 3 for 'this' issue - send an arrow function to the onSubmit */}
                {/* <form className="ui form" onSubmit={ (e) => this.onFormSubmit_old(e) }> */}
                    <div className="field">
                        <label htmlFor="">Image Search</label>
                        {/* If i give '()' for onchage - then that method is called as soons as the component is rendered */}
                        {/* I want it to be called by the 'Input' through the eventHandler (onChange) in the future when user has typed something  */}
                        {/* <input type="text" onChange={this.onInputChange()}/> */}
                        <input 
                            type="text" 
                            // onChange={e => console.log(e.target.value)}

                            // This is a 'controlled' element
                            // onChange={e => this.setState({ term: e.target.value.toUpperCase() })}
                            onChange={e => this.setState({ term: e.target.value })}
                            value={this.state.term}

                            // This is called 'uncontrolled' element
                            // onChange={this.onInputChange}

                            // onClick={this.onInputClick}
                            />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar