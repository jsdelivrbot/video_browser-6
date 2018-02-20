import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyDinKHsiu9UNKYh9ZHXxQs3f-v4vLqlpyg';



class App extends Component {
    constructor (props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'swimming'}, (videos) => {
            console.log(videos);
            this.setState({ videos });
        });
    }

    render () {
        return (
            <div>
                <SearchBar />
                <div>Hello</div>
                <VideoList videos={this.state.videos}/>
                
            </div>
        );
    }
}


ReactDOM.render(<App />, document.querySelector('.container'));
