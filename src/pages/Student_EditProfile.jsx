import React from 'react'
import Std_EditHero from '../Components/std_EditProfile/Std_EditHero'
import Std_EditForm from '../Components/std_EditProfile/Std_EditForm'
import { useParams } from 'react-router-dom';
import Footer from "../Components/Footer"

const Student_EditProfile = () => {

    const params = useParams();
    const id=Number(params.id);
  return (
    <div>
      <Std_EditHero/>
      <Std_EditForm id={id}/>
      <Footer/>
    </div>
  )
}

export default Student_EditProfile