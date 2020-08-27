import React,{ useEffect } from 'react'

function UserDAO(props){

    useEffect(()=>{
        (async ()=> {
          try{
            fetch('http://localhost:8000/User/')
            .then((response)=>response.json())
            .then((data)=>{
              props.setUser(data)
            })
          } catch(e){
            console.log(e)
          }
        })();
      },[])

    return(
        <>
        {
            props.User.map((a)=>{
            return(
                <>
                <h1>{a.email}</h1>
                <h1>{a.password}</h1>
                <h1>{a.name}</h1>
                </>
            )
            })
        }

        </>
    )
}
export default UserDAO;