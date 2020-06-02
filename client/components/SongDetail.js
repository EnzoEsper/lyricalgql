import React from 'react';
import { graphql } from 'react-apollo';
import fetchSong from '../queries/fetchSong';

class SongDetail extends React.Component {
  
  render() {

    // alternative way, also it can be possible to monitor de loading property like in the other component
    const { song } = this.props.data;

    if (!song) {
      return <div>Loading...</div>
    }

    return(
      <div>
        <h3>{song.title}</h3>
      </div>
    )
  }
}

export default graphql(fetchSong, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);