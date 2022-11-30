import React, {useState} from 'react'
import './SubForm.css';

export default function DietFrom(props) {
  const [formData, setformData] = useState({
    dietForm: 'nodiet'
  });

  const preventFunc = e => e.preventDefault();
  const handleRadio = (e) => {
    setformData({
        dietForm: e.target.value
    })
  };
  console.log(formData);
  return (
    <form
        onSubmit={preventFunc}
        className='diet-form'
    >
        <p>Quelle ton regime alimetaire ?</p>
        <label htmlFor='nodiet'>Pas de regime en particulier</label>
        <input 
            onChange={handleRadio}
            type='radio'
            name='diet'
            id='nodiet'
            value='nodiet'
        />
        <label htmlFor='homnivorous'>Homnivor</label>
        <input 
            onChange={handleRadio}
            type='radio'
            name='diet'
            id='homnivorous'
            value='homnivorous'
        />
        <label htmlFor='vegetarien'>Vegetarien</label>
        <input 
            onChange={handleRadio}
            type='radio'
            name='diet'
            id='vegetarien'
            value='vegetarien'
        />
        <label htmlFor='Vegan'>Vegan</label>
        <input 
            onChange={handleRadio}
            type='radio'
            name='diet'
            id='Vegan'
            value='Vegan'
        />
        <button onClick={() => props.modifyIndex(3, formData)}>Valider</button>
    </form>
  )
}
