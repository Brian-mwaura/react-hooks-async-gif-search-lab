import React, { Component } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

class GifListContainer extends Component {
    constructor() {
        super();
        this.state = {
            gifs: []
        };
    }

    componentDidMount() {
        this.fetchGifs('dolphin');
    }

    fetchGifs = (query) => {
        const apiKey = 'YOUR_API_KEY';
        const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const gifs = data.data.slice(0, 3); // Get the first 3 gifs from the response
                this.setState({ gifs });
            })
            .catch(error => console.log(error));
    }

    handleSearch = (query) => {
        this.fetchGifs(query);
    }

    render() {
        return (
            <div>
                <GifSearch onSubmit={this.handleSearch} />
                <GifList gifs={this.state.gifs} />
            </div>
        );
    }
}

export default GifListContainer;