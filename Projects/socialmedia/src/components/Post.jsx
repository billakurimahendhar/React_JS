import { AiFillDelete } from "react-icons/ai";
import { useContext } from "react";
import { PostList} from "../store/post-list-store";
const Post=({post})=>{
  const{ deletePost}=useContext(PostList);
    return(
        <>
        <div className="card post-card" style={{width: "30rem"}}>
  <div className="card-body">
    <h5 className="card-title">{post.title}</h5>

    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)}>
    <AiFillDelete />
    
  </span>
    <p className="card-text">{post.body}</p>

    {post.tags.map((tag)=><span key={tag} className="badge text-bg-secondary hashtag">{tag}</span>)}
    <div class="alert alert-info reactions" role="alert">
      this post has beem reacted by {post.reactions} people
  {}
</div>
  
    
  </div>
</div>
        </>
    );
}
export default Post;