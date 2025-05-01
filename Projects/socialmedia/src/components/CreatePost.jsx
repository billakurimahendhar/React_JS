import { useContext, useRef } from "react";
import {PostList } from "../store/post-list-store";
const CreatePost=()=>{
  const{ addPost}=useContext(PostList);
  const userIdElement=useRef();
  const postTitleElement=useRef();
  const postBodyElement=useRef();
  const reactionsElement=useRef();
  const tagsElement=useRef();
 const  handleSubmit=(event)=>{
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);

  }
    return(
        <form className="create-post" onSubmit={handleSubmit}>
           <div className="mb-3">
    <label htmlFor="userId" ref ={userIdElement}className="form-label">UserId</label>
    <input type="text" className="form-control" id="UserId"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" ref ={postTitleElement} className="form-control" id="title"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post content</label>
    <textarea type="text" ref ={postBodyElement} rows ="4" className="form-control" id="body"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">No of reactions</label>
    <textarea type="text" ref ={reactionsElement} className="form-control" id="reactions"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Tags</label>
    <textarea type="text" ref ={tagsElement} className="form-control" id="tags"/>
    
  </div>
  
  <button type="submit" className="btn btn-primary">Post</button>
</form>
    );
}
export default CreatePost;