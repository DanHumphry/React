import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  let [profile, setProfile] = useState([])
  let [title, setTitle] = useState("")
  let [content, setContent] = useState("")
  let [image, setImage] = useState(null)

  // let handleChange = (e) => {
  //   this.setState({
  //     [e.target.id]: e.target.value
  //   })
  // };  
let url = 'http://localhost:8000/posts/';

  useEffect(()=>{
    (async ()=> {
      try{
        fetch(url)
        .then((res)=>res.json())
        .then((posts)=>{
          setProfile(posts)
        })
      } catch(e){
        console.log(e)
      }
    })();
  },[])

  let [file2, setFile] = useState("")
  let [previewURL2, setPreviewURL] = useState("")

  let handleFileOnChange = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      setFile(file)
      setPreviewURL(reader.result)
    }
    reader.readAsDataURL(file);
  }
  let profile_preview = null;
    if(file2 !== ''){
      profile_preview = <img className='profile_preview' src={previewURL2}></img>
    }


  let titleChage = (e) => {
    setTitle(e.target.value)
  };

  let contentChage = (e) => {
    setContent(e.target.value)
  };

  let handleImageChange = (e) => {
    setImage(e.target.files[0])
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append('image', image, image.name);
    form_data.append('title', title);
    form_data.append('content', content);
    
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))
  };

    return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          <p>
            <input type="text" placeholder='Title' id='title' value={title} onChange={titleChage} required/>
          </p>
          <p>
            <input type="text" placeholder='Content' id='content' value={content} onChange={contentChage} required/>

          </p>
          <p>
            <input type="file"
                   id="image"
                   accept="image/png, image/jpeg"  onChange={handleImageChange, handleFileOnChange} required/>
          </p>
          <input type="submit"/>
        </form>

        
        {
          profile.map((a)=>{

            let reader = new FileReader();
            a.image = reader.result
            
            return(
              <>
                <p>{a.id}</p>
                <p>{a.title}</p>
                <p>{a.content}</p>
                <img src={a.image}></img>
              </>
            )
          })
        }
        {profile_preview}
      </div>
    );
}

export default App;