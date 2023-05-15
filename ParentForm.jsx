import React, { useState } from 'react'
import ActualForm from './ActualForm';
import FormData from './FormData';

function ParentForm(){

    const[nameIp,setName] = useState('');
    const[ageIp,setAge] = useState('');
    const[myObj,setMyObJ] = useState({});
    const[users,setUsers] = useState([]);
    const[isSubmitted,setisSubmitted] = useState(false);


    let myForm1 = {
        color:'orange',
        fontSize:'25px',
        fontStyle:'bolder',
        textAlign:'left',
    }
    let myForm2={
        border:'4px solid purple', backgroundColor:'cyan', display:'inline-block', 
        padding:'9px'
    }
    
    const handleChangeName=(e)=>{
        console.log('typing...');
       setName(e.target.value);
    }
    const handleChangeAge=(e)=>{
        console.log('typing...');
        setAge(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        let tempObj = myObj;
        tempObj={
            name:nameIp,
            age:ageIp
        }
        console.log(tempObj);

        let tempArr = users;
        tempArr.push(tempObj);

        setUsers(()=>([
            ...tempArr
        ]))
        console.log(users);
        setisSubmitted(!isSubmitted);
    }
    const handleBack=()=>{
        setisSubmitted(!isSubmitted)
    }

    return (
      <div>
        {
        !isSubmitted?
        <ActualForm handleChangeName={handleChangeName} handleChangeAge={handleChangeAge} handleSubmit={handleSubmit} styles={{...myForm1, ...myForm2}} />
        :
        <FormData users={users} handleBack={handleBack} />
        }

      </div>
      
    )

}

export default ParentForm