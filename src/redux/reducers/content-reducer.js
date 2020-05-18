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
   let stateCopy = {...state}
 switch(action.type ){
 case ADD_POST:
      let newPost = {
        id:stateCopy.postData.length+1,
        message: stateCopy.newPostText,
        likeCount: 0,
      };
      stateCopy.postData.unshift(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
     case UPDATE_NEW_POST: 
      stateCopy.newPostText = action.newText;
      return stateCopy;
    default:
       return stateCopy;
    }
};