import React from 'react'
import { useParams } from 'react-router-dom'
import { studentsData } from '../datas/studentData';

const StudentProfile = () => {
  const {id} =useParams();
  const student = studentsData.find(
    (item) => item.id === Number(id)
  );
  return (
    <div>
      student/{student.name}

    </div>
  )
}

export default StudentProfile