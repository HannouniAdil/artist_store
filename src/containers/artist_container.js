import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchArtistDetailsById, clearArtistData } from '../actions';
import { bindActionCreators } from 'redux';

class ArtistContainer extends Component {
     
    componentWillMount() {
      this.props.fetchArtistDetailsById(this.props.match.params.id)
    }

    componentWillUnmount(){
      this.props.clearArtistData();
    }

    artistTemplate = (data) =>(
      data.artistDetails ? 
        <div className="artist_view">
                <div className="artist_background" style={{
                    background:`url(/images/${data.artistDetails[0].cover})`
                }}>
                    <Link to="/">
                        Back home
                    </Link>
                    <div className="name">{data.artistDetails[0].name}</div>
                </div>
                <div className="artist_description">
                    <p>{data.artistDetails[0].bio}</p>
                    <div className="tags">
                        <div>
                            <strong>Style:</strong> {data.artistDetails[0].style}
                        </div>
                    </div>
                </div>
                <div className="artist_album_list">
                    { data.artistDetails[0].albums ? 
                        data.artistDetails[0].albums.map( item =>(
                        <div key={item.cover} className="albums">
                            <div className="cover" style={{
                                background:`url(/images/albums/${item.cover})`
                            }}>
                            </div>
                                
                        </div>
                    ))
                    :null
                }
                </div>
            </div>
      :null
    )
    
    render(){
        return (
            <div>
              {this.artistTemplate(this.props.artists)}
            </div>
        )
    }
};

function mapStateToProps (state){
  return {
    artists:state.artists
  }
}

function mapDispatchToProps (dispatch){
  return bindActionCreators({fetchArtistDetailsById, clearArtistData}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistContainer);