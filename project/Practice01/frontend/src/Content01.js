import React,{ useEffect } from 'react'

function Content01(props){

    useEffect(()=>{
        (async ()=> {
          try{
            fetch('http://localhost:8000/posts/')
            .then((response)=>response.json())
            .then((data)=>{
              props.setPoster(data)
            })
          } catch(e){
            console.log(e)
          }
        })();
      },[])

    return(
        <>
        {
            props.poster.map((a)=>{
            return(
                <>
                <h1>{a.id}</h1>
                <h1>{a.text}</h1>
                <h1>{a.location}</h1>
                </>
            )
            })
        }

        </>
    )
}
export default Content01;