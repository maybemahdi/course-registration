import { useState } from "react";
import { useEffect } from "react";
import Course from "./Course";
import PropTypes from 'prop-types';

const Courses = ({handleCart}) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("./courses.json");
      const data = await res.json();
      setCourses(data);
    };
    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-5">
      {courses.map((course) => (
        <Course key={course.id} handleCart={handleCart} course={course}></Course>
      ))}
    </div>
  );
};

Courses.propTypes = {
    handleCart: PropTypes.func.isRequired,
}

export default Courses;
