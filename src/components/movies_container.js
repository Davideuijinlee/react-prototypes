import React, { Component } from 'react';
import axios from 'axios';
import Movie from './movies';

class MoviesContainer extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            movies: []
        };
    }
    componentDidMount(){
        const url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
        axios.get(url).then((resp) => {
            console.log('Resp:', resp);
            this.setState({
                movies: resp.data.feed.entry
            });
        });
    };
    render(){
        console.log(this.state);
        const movieList = this.state.movies.map((movieInfo, index)=>{
            return <Movie info={movieInfo} key={index}/>
        });
        return (
            <div>
                <h2>{movieList}</h2>
                <Movie/>
            </div>
        )
    }
}

export default MoviesContainer;