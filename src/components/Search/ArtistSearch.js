import React, { Component } from 'react';

class ArtistSearch extends Component {
    render () {
        const Results = (this.props.results)
            .map( result => {
                return (
                    <div>
                        <li>
                            <img src={result.image} />
                            <span>Author: {result.podcast_title_original}</span>
                            <span>Episode: {result.title_original}</span>
                            <audio controls>
                                <source src={result.audio} type="audio/mpeg" />
                            </audio>
                        </li>
                    </div>
                );
            });
        
            return (
                <div>
                    <ul>
                        {Results}
                    </ul>
                </div>
            )
    }
}

export default ArtistSearch; 