import Card from './Card';
import { useState } from 'react';
function Cards(props) {
    const [likedCourses, setLikedCourses] = useState([]); 
    const CoursesData = props.data;
    const category = props.category;
    console.log("printing the value of courses");
    console.log("allCourseData",CoursesData);
    function getCourses() {
        const AllCourses = [];
        if (category === 'All') {
            Object.values(CoursesData).forEach(array => {
                array.forEach(courses => {
                    AllCourses.push(courses);
                })
            })
            return AllCourses;
        }
        else{
            return CoursesData[category]
        }
    }
    return (
        <div>
            {
                getCourses().map((course) => {
                    return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>
                })
            }
        </div>
    )
}
export default Cards