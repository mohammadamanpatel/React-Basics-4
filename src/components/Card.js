import { FcLike, FcLikePlaceholder } from "react-icons/fc"
import {toast} from 'react-toastify'
function Card(props) {
    var course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    function likeHandler() {
        if (likedCourses.includes(course.id)) {
            //pehle se liked hai
            setLikedCourses((prev) => prev.filter(cid => cid !== course.id));
            toast.warning("unliked")
        }
        else {
            if (likedCourses.length === 0) {
                setLikedCourses([course.id]);            
            }
            else {
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("liked")
        }
    }
    return (
        <div>
            <div className="courseImgDiv">
                <img src={course.image.url} alt="#"></img>
            </div>
            <button onClick={likeHandler}>
                {
                    !likedCourses.includes(course.id) ? (<FcLikePlaceholder></FcLikePlaceholder>) : (<FcLike></FcLike>)
                }
            </button>
            <div>
                <p>{course.title}</p>
                <p>{course.description}</p>
            </div>
        </div>
    )
}
export default Card;