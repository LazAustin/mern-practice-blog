import "./post.css";

export default function Post() {
  return (
    <div className="post">
        
        <img className="postImg" src="https://images.unsplash.com/photo-1646041234747-78c6497e2fc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80" alt=""/>

        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
              span  Lorem ipsum dolor sit amet, consectetur adi.
            </span>
            <hr/>
            <span className="postDate">1 hour ago</span>  
        </div>
        <p className="postDesc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro temporibus quia quibusdam perspiciatis at pariatur quaerat suscipit sit delectus alias facere sed minima totam, ex quidem deleniti perferendis in necessitatibus!
        </p>

    </div>
  )
}
