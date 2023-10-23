import React from 'react';

const Button = ({title, style, handleButtonClick}) => {

return (
    <>
      <button type="button" style={style} onClick={handleButtonClick} >{title}</button>
    </>

)    

}

export default Button;