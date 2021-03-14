import React from 'react';
import unsplash from '../api/unsplash'
import ImageList from './ImageList';
import SearchBar from './SearchBar';

class App extends React.Component {
    // used [] for images value - so that map property wont error out when there is no images
    state = { images: [] }

    /*
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
    async onSearchSubmit_2(term){
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
        // 'this' is onMySubmit function - need to fix it by using any of the 3 methods
        console.log(this)
        this.setState({ images: response.data.results })
    }
    */
    
    // Changed to arrow function to resolve 'this' issue
    onSearchSubmit = async (term) => {
        // console.log(term)
        const response = await unsplash
            .get('/search/photos', {
                params: { query: term }
            });
        this.setState({ images: response.data.results })
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onMySubmit={this.onSearchSubmit}/>
                {/* Found: {this.state.images.length} images */}
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App