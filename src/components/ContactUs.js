import React from 'react';
import Text from './Text';
import Button from './Button';
import FetchAPICall from './FetchAPICall';
import AxiosCall from './AxiosCall';
const ContactUs = () => {
const title = 'My second Page'

const handleContactButtonClick = () => {

alert('contact button click-')
}

return (
    <>
      <Text title={title} style={{color:'green',backgroundColor:'black',fontSize:'20px'}} />
      <Button title={'contact us button'} style={{color: '#fff', fontSize:'20px', backgroundColor: 'blue' }} handleButtonClick={handleContactButtonClick} />
      <AxiosCall />
      <FetchAPICall />
    </>

)    

}
export default ContactUs;