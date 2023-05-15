import React from 'react'
function ActualForm(props){
    //destructuring of props object
    let {handleChangeName, handleChangeAge, handleSubmit, styles} = props;
    
    return (
      <div>
        <form style={styles}>
                    <label>Name: </label>
                    <input type='text' placeholder='Enter name here' id='nameIp' onChange={handleChangeName}/>
                    <br/><br/>
                    <label>Age: </label>
                    <input type='text' placeholder='Enter age here' id='ageIp' onChange={handleChangeAge}/>
                    <br/><br/>

                    <button onClick={handleSubmit}>Submit</button>
                </form>
      </div>
    )
}
export default ActualForm