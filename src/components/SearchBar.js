import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' }

    onInputChange(event) {
        console.log(event.target.value)
    }

    // onInputClick() {
    //     console.log('clicked')
    // }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" action="">
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