import React from 'react'
import { useParams } from 'react-router-dom'
import { studentProfile } from '../datas/studentData';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ProfileHero from '../Components/studentProfile/ProfileHero';
import ProjectCount from '../Components/studentProfile/ProjectCount';
import StudentAbout from '../Components/studentProfile/StudentAbout';
import GithubActivity from '../Components/studentProfile/GithubActivity';
import GithubProjects from '../Components/studentProfile/GithubProjects';
import StudentBlog from '../Components/studentProfile/StudentBlog';



const StudentProfile = () => {
  const {id} =useParams();
  const student = studentProfile.find(
    (item) => item.id === Number(id)
  );
  return (
    <div>
      <Header/>
      <ProfileHero student={student} id={id}/>
      <ProjectCount project={student.projects} blogs={student.blogs} repos={student.repos} followers={student.followers} following={student.following}/>
      <StudentAbout student={student}/>
      <GithubActivity student={student}/>
      <GithubProjects student={student}/>
      <StudentBlog username={student.mediumUsername}/>
      <Footer/>
    </div>
  )
}

export default StudentProfile