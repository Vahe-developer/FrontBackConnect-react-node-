import React,{useEffect} from 'react'
import axios from "axios"



function App() {

    useEffect(()=>{
        const options = {
            url: 'http://localhost:3001/task',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: {
                a: 10,
                b: 20
            }
        };

        axios(options)
            .then(response => {
                console.log(response);
            });
    },[])



    return(

        <div>
                HI
        </div>
    )
}

export default App
