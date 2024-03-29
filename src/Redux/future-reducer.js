import { usersAPI } from "api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_COMMENTS_PROFILE = "SET_COMMENTS_PROFILE";



let initialState = {
    posts: [
            { id: "1", message: "nayanayanaya some message", likesCount: 11 },
            { id: "2", message: "Hahahahahahsr message", likesCount: 25 },
            { id: "3", message: "Hasomr message", likesCount: 2 },
            { id: "4", message: "Hahahadjjhahahsr message", likesCount: 44 },
            { id: "5", message: "abarahsr message", likesCount: 5 },
            { id: "6", message: "Hdnwjssr message", likesCount: 26 },
          ],
    newPostText: 'Project By Olga',
          comments:null,
}


const futureReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: 
            let newPost = {
                id: 7,
                message: state.newPostText,
                likesCount: 0
            };
            return{
                ...state,
                newPostText: '',
                 posts: [...state.posts, newPost],
            };
           
        case UPDATE_NEW_POST_TEXT:  
            return {
                ...state,
                newPostText: action.newText,
            };
        case SET_COMMENTS_PROFILE:
            return {
                ...state,
                comments: action.comments,
            }
            
        default:
            return state;
}

    // if (action.type === ADD_POST) {
    //     let newPost = {
    //         id: 7,
    //         message: state.newPostText,
    //         likesCount: 0
    //     };
    //     state.posts.push(newPost);
    //     state.newPostText = '';
    // } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //     state.newPostText = action.newText;
    // }
    
    // return state;
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setCommentsProfile = (comments) => ({ type: SET_COMMENTS_PROFILE ,comments});//users из action придет
export const getCommentsProfile = (userId) => (dispatch) => { //createThunk
     usersAPI.getComments(userId).then(response => {
            dispatch(setCommentsProfile(response.data));
        })
};
export const updateNewPostText = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default futureReducer;