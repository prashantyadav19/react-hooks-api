import React from 'react';

const Input = ({value, placeholder, style, handleInputChange}) => {

return (
    <>
      <input type='text'value={value} placeholder={placeholder} onChange={handleInputChange}></input>
    </>

)    

}

export default Input;