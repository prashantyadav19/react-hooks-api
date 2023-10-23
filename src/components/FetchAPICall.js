import React , {useState, useEffect} from 'react';

const FetchAPICall = () => {

 const [coffeeData, setCoffeeData] = useState('');

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


return (
    <>
       <div style={{flex: 1, alignContent: 'flex-start'}}>
        <table>
            <thead>
                <tr>
                    <td>id</td>
                    <td>title</td>
                    <td>description</td>
                    <td>Image </td>
                </tr>
            </thead>
            {coffeeData && coffeeData.map((item, index)=>  {
                return <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td><img src={item.image} style={{maxWidth: '200px', maxHeight: '200px'}} /> </td>
                </tr>
            })}
            
        </table>
        </div>
    </>

)    

}

export default FetchAPICall;