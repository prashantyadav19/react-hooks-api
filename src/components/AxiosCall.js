import React , {useState, useEffect} from 'react';
import axios from 'axios';
import Button from './Button';

const AxiosCall = () => {

 const [employee, setemployee] = useState('');


const employeeAPIWithAxios = () => {
    axios.get('https://reqres.in/api/users').then(function (response) {
      setemployee(response?.data?.data)
    })
}
 

useEffect(()=>{
    employeeAPIWithAxios()
}, [])


/**
 * Axios method
 * Save data to server (database)
 */
const postAPI = () => {
    axios.post('https://reqres.in/api/user', {
        firstName: 'Jatin',
        lastName: 'Yadav'
      })
      .then(function (response) {
        console.log('post response--',response);
      })
}

/**
 * Update data on server 
 * using put
 */
const updateAPI = () => {
    axios.put('https://reqres.in/api/users/2', {
        firstName: 'Jatin',
        lastName: 'Yadav'
      })
      .then(function (response) {
        console.log('update response--',response);
      })
}

/**
 * Get data by id 
 * signle row / single Item
 */
const grtById = () => {
    axios.get('https://reqres.in/api/users/1').then(function (response) {
        console.log('response--single user--------', response)
     
    })
}



return (
    <>
    <div style={{flex: 1, alignContent: 'flex-start'}}>
    <Button title={'post api call'} style={{backgroundColor: 'green', fontSize:'20px'}} handleButtonClick={postAPI} />
    <Button title={'update api call'} style={{backgroundColor: 'green', fontSize:'20px'}} handleButtonClick={updateAPI} />
    <Button title={'get 1 row item'} style={{backgroundColor: 'green', fontSize:'20px'}} handleButtonClick={grtById} />
     <table>
         <thead>
             <tr>
                 <td>id</td>
                 <td>employee first name</td>
                 <td>employee last name</td>
                 <td>employee email</td>
                 <td>employee image</td>
             </tr>
         </thead>
         {employee && employee.map((item, index)=>  {
             return <tr key={index}>
                <td>{item.id} </td>
                 <td>{item.first_name}</td>
                 <td>{item.last_name}</td>
                 <td>{item.email}</td>
                 <td><img src={item.avatar} style={{maxWidth: '200px', maxHeight: '200px'}} /> </td>
               
             </tr>
         })}
         
     </table>
     </div>
 </>

)    

}

export default AxiosCall;