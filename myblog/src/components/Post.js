import React,{ Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux'
import { deletepost } from '../action/createAction';

class Post extends Component{

    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }

    
    // componentDidMount(){
    //     let id = this.props.match.params.postid;

    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    //     .then(res => {
    //         this.setState({
    //             post:res.data
    //         })
    //     })
        

    // }

    render(){
        console.log(this.props)
        const post =this.props.post ?  (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete

                    </button>
                     
                </div>

            </div>
        ) : (
            <div className='center'>description loading</div>
        )
        return (
            <div className="container">
                <h3>{post}</h3>

            </div>
        )
    }
}

const mapStateToPropsNew = (state, ownProps) => {
    console.log('state',state)

    let id = ownProps.match.params.postid;
    return {
        post:state.posts.find(post => post.id === id)
    }
}
const mapDispatchProps = (dispatch) => {
    return {
        deletePost:(id) => { dispatch(deletepost(id)) }
    }
}

export default connect(mapStateToPropsNew,mapDispatchProps)(Post)