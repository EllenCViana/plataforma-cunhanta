import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getVideoId } from "../../utils/getVideoId.js"; 
import coursesData from "../../data/courses.json"; 
import {
  CourseSection,
  CourseCard,
  CourseImage,
  CourseTitle,
  CourseDescription,
  CourseInfo,
  CourseTag,
  CourseDuration,
  CourseInstrutor,
  CourseButton,
  Category
} from './Cursos.styles';

const CourseCardSection = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState(""); // Para armazenar o título da subcategoria

  useEffect(() => {
    const allCourses = coursesData.categories.flatMap(category => 
      category.subcategories.flatMap(subcategory => {
        setCategoryTitle(subcategory.title); // Pegando o título da subcategoria
        return subcategory.items;
      })
    );
    setCourses(allCourses); // Carregando os cursos do JSON
  }, []);

  const handleVideoClick = (videoUrl) => {
    const videoId = getVideoId(videoUrl);
    if (videoId) {
      navigate(`/video/${videoId}`);
    } else {
      console.error("ID do vídeo não encontrado na URL:", videoUrl);
    }
  };

  return (
    <>
    <Category>{categoryTitle}</Category> 
    <CourseSection>  
      {courses.map((course, index) => (
        <CourseCard key={index} onClick={() => handleVideoClick(course.videoUrl)}>
          <CourseImage src={course.image} alt={course.title} />
          <CourseInstrutor>{course.instrutor}</CourseInstrutor>
          <CourseTitle>{course.title}</CourseTitle>
          <CourseDescription>{course.description}</CourseDescription>
          <CourseInfo>
            <CourseDuration>{course.duration}</CourseDuration>
            <CourseTag>{course.tag}</CourseTag>
          </CourseInfo>
          <CourseButton>
            Comece agora
          </CourseButton>
        </CourseCard>
      ))}
    </CourseSection>
    </>
  );
};

export default CourseCardSection;
