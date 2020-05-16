 //actions
export const ADD_POST ='ADD_POST';
 export const UPDATE_NEW_POST = 'UPDATE_NEW_POST';

   // начальное состояние для redux , если не указать , то получим undefined
 let newState = {
 newPostText: "fff",
    postData: [
      { id: "1", message: "Hi,good day", likeCount: "6" },
      { id: "2", message: "This is my second post", likeCount: "12" },
      { id: "3", message: "This is my third post", likeCount: "38" },
    ],
    }
 // reducers ( get old state and add new state!!!)
 export const contentReducer=(state = newState , action)=>{
 switch(action.type ){
 case ADD_POST:
      let newPost = {
        id: "5",
        message: state.newPostText,
        likeCount: 0,
      };
      state.postData.unshift(newPost);
      state.newPostText = "";
      return state;
     case UPDATE_NEW_POST: 
      state.newPostText = action.newText;
      return state;
    default:
       return state;
    }
};