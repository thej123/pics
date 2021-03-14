import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    
    onSearchSubmit_1(term){
        // console.log(term)
        axios.get('https://api.unsplash.com/search/photos', {
            headers: {
                Authorization: 'Client-ID 9wtV3pYgPuNFJMrEzVNVtS2Z3P_W-P-XZn7eDvZiSnU' 
            },
            params: {
                query: term
            }
        })
        .then((response) => {
            console.log(response.data.results)
        });
        // Above is method 1 using the promise to deal with the response
    }

    // Method 2 of getting response from axios
    async onSearchSubmit(term){
        // console.log(term)
        const response = await axios
            .get('https://api.unsplash.com/search/photos', {
                headers: {
                    Authorization: 'Client-ID 9wtV3pYgPuNFJMrEzVNVtS2Z3P_W-P-XZn7eDvZiSnU' 
                },
                params: {
                    query: term
                }
            });
        
        console.log(response.data.results)
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onMySubmit={this.onSearchSubmit}/>
            </div>
        )
    }
}

export default App