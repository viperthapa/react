const initstate = {
    posts : [
        {id:'1',title:'test1',body:'this is body test1'},
        {id:'2',title:'test2',body:'this is body test2'},
        {id:'3',title:'test3',body:'this is body test3'},

    ]
}

const rootReducer = (state=initstate,action) => {
    console.log(action)
    if (action.type === 'DELETE_POST'){
        let newposts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts:newposts
        }
    }
    return state;
}

export default rootReducer;
