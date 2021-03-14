import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
    
    onSearchSubit(term){
        console.log(term)
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onMySubmit={this.onSearchSubit}/>
            </div>
        )
    }
}

export default App