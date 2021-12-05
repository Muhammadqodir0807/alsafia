
// import React,{useState} from 'react'
// import axios from "axios";
//
//
//
// const Fetch = ()=>{
//     const [data, setData] = useState([])
//
//     const getData=async () =>{
//         axios.get('https://salemanagerapi.herokuapp.com')
//             .then(res =>console.log(res))
//             // .then(res=>setData(res.data.value))
//             // .catch(err =>console.log(err))
//     }
//
//
//     return(
//         <div>
//             <div className="container-fluid">
//
//                 <button onClick={getData}>Fetch</button>
//                 {
//                     data.map((value) =>{
//                         return(
//                             <h1 key={value.id}>{value.joke}</h1>
//                         )
//                     })
//                 }
//             </div>
//             </div>
//             )
//
// }

import React from "react";
import ReactDOM from "react-dom";

const people = [
    "Siri",
    "Alexa",
    "Google",
    "Facebook",
    "Twitter",
    "Linkedin",
    "Sinkedin"
];

function App() {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };
    React.useEffect(() => {
        const results = people.filter(person =>
            person.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
    }, [searchTerm]);

    return (
        <div className="App">
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
            />
            <ul>
                {searchResults.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    );
}