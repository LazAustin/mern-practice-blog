import "./single.css";
import SinglePost from "../../components/singlePost/singlePost";
import Sidebar from "../../components/sidebar/sidebar";

export default function Single() {
  return (
    <div className="single">
        <SinglePost />
        <Sidebar />        
    </div>
  )
}
