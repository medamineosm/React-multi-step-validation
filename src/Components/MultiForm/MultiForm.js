import React, { useState } from 'react'
import Indicator from './Indicator/Indicator';
import './MultiForm.css';
import CardBegin from './Infos/CardBegin';
import CardEnd from './Infos/CardEnd';
import DietFrom from './SubForms/DietFrom';

function MultiForm() {
  const [formIndex, setFormIndex] = useState(1);
  const [allFormData, setAllFormData] = useState({
    dietForm: '',
    foodStyle: [],
    allergies: [],
    prefs: {}
  });

  const modifyIndex = (index, data) => {
    setFormIndex(index);
    if(data){
      const newData = {...allFormData}; 
      const firstPropsNewData = Object.keys(data)[0];
      newData[firstPropsNewData] = data[firstPropsNewData];
      setAllFormData(newData);
    }
  };
  console.log(allFormData);

  return (
    <div className='container-multiform'>
      <Indicator/>
      {
      formIndex === 1 ? <CardBegin modifyIndex={modifyIndex}/> 
      : formIndex === 2 ? <DietFrom modifyIndex={modifyIndex}/>
      : ""
    }
    </div>
    
  )
}

export default MultiForm