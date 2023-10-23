import React, {useState, useEffect} from 'react';
import Text from '../components/Text';
import ContactUs from '../components/ContactUs';
import Button from '../components/Button';
import Input from '../components/Input';


const Home = () => {
const title = 'My First Page'
const cities = [{name: 'jaipur', code: 'jp'}, {name: 'lucknow', code: 'lko'},{name: 'pune', code: 'pnq'}, {name: 'kanpur', code: 'cnb'}]

const [name, setName] = useState('');
const [phone, setPhone] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [hideDetails, setHideDetails] = useState(false);
const [coffeeData, setCoffeeData] = useState('');
const [users, setUsers] = useState({
    city: '',
    state: '',
    pin: ''
});

/**
 * Fetch Data from sample API
 * Using fetch method for API call
 * using async and await for API
 */
const coffeeAPI = async () => {
    const url = 'https://api.sampleapis.com/coffee/hot';
    const results = await fetch(url);
    const parse = await results.json();
    setCoffeeData(parse);

}

// Calling API function in use Effect 

useEffect(()=>{
    coffeeAPI()
}, [])





const handleClick = () => {
    alert('button clicked')
}


const handleInputChange = (event) => {
    setName(event.target.value)
}
const handlePhoneChange = (event) => {
    setPhone(event.target.value)
}
const handleEmailChange = (event) => {
    setEmail(event.target.value)
}
const handlePasswordChange = (event) => {
    setPassword(event.target.value)
}
const handleHideDetails = () => {
    setHideDetails(true);
}

const handleuserChange = (event, key) => {
    setUsers(state => ({
        ...state,
        [key]: event.target.value
    }))
    
}

const handleSubmit = () => {
localStorage.setItem('users', JSON.stringify(users));

}

const lastButtonClick = () => {
    alert('clicked')
}

return (
    <>

    <Text title={title} style={{color: 'red', fontSize:'20px'}} />
    
    <Button title={'Home page button'} style={{color: 'green', fontSize:'20px'}} handleButtonClick={handleClick} />
    <br/>
    <Input vlaue={name} placeholder={'Enter name'} handleInputChange={handleInputChange} />
    <br/>
    <Input vlaue={phone} placeholder={'Enter phone'} handleInputChange={handlePhoneChange} />
    <br/>
    <Input vlaue={email} placeholder={'Enter email'} handleInputChange={handleEmailChange} />
    <br/>
    <Input vlaue={password} placeholder={'Enter password'} handleInputChange={handlePasswordChange} />
    <Input vlaue={users.city} placeholder={'Enter city'} handleInputChange={(e) => handleuserChange(e, 'city')} />
    <Input vlaue={users.state} placeholder={'Enter state'} handleInputChange={(e) => handleuserChange(e, 'state')} />
    <Input vlaue={users.pin} placeholder={'Enter pin'} handleInputChange={(e) => handleuserChange(e, 'pin')} />
    <br/>

     {/* Check for hide the details with useState boolean (true/false)    */}
     {!hideDetails && 
    <Text title={`My Details- Name ${name}, Phone${phone}, email${email}, password${password} , city ${users.city} state ${users.state} pin ${users.pin}`} style={{color: 'pink', fontSize:'20px'}} />
    }  
    <Button title={'hide details'} style={{backgroundColor: 'green', fontSize:'20px'}} handleButtonClick={handleHideDetails} />
    <Button title={'submit'} style={{backgroundColor: 'green', fontSize:'20px'}} handleButtonClick={handleSubmit} />
    <button type="button" onClick={lastButtonClick} >{title}</button>
    <ContactUs />
    </>
)    

}

export default Home;