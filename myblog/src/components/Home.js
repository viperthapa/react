import React, { Component } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import ball from '../ball.jpg';
import { connect } from 'react-redux'



class Home extends Component {

    //defineing the empty array
    state = {
        posts : [] 
    }

    //used for grabbing the api
    // componentDidMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(response =>{
    //         console.log(response)
    //         this.setState({
    //             posts : response.data.slice(0,8)

    //         })
    //     })
    // }

    render(){
        const { posts } = this.props
        console.log('posts,',posts)

        //checking the empty array first

        const myPostList = posts.length ? (
            posts.map(post => {
                return (

                    <div className="post card" key={post.id}>
                        {/* <img src={ball}/> */}
                        <div className="card-component">
                        <Link to={'/' + post.id }>
                            <span className="card-title">{post.title}</span>
                        </Link>
                        <p>{post.body}</p>


                        </div>
                    </div>
                )
            })
        ):(
            <div className="center">no posts yet</div>
        )



    return(
        <div className="container myhome">
            <h4 className="center">Home</h4>
            {myPostList}
        </div>
    )
    }
}
const mapStateToProps = (state) => {
    return {
        posts:state.posts
    }
}

export default connect(mapStateToProps)(Home)