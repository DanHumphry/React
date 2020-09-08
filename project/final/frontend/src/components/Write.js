import React,{useState} from 'react';
import '../css/Board.css'
import { useHistory } from 'react-router'


function Write(props){
    const histoty = useHistory()

    let [img , setImg] = useState()
    let [imgURL, setImgURL] = useState()

    let [title, setTitle] = useState()
    let [content, setContent] = useState()

    let sendData = {
        image : imgURL,
        title : title,
        content : content,
        comment : 0,
        like : 0,
        view : 0,
        username : props.user,
    }

    const handleSubmit = (sendData) => {
        let form_data = new FormData();
        let fileField = document.querySelector('input[type="file"]');
        form_data.append('title', sendData.title);
        form_data.append('content', sendData.content);
        form_data.append('comment', sendData.comment);
        form_data.append('like', sendData.like);
        form_data.append('view', sendData.view);
        form_data.append('username', sendData.username);
        form_data.append('image', fileField.files[0])

        fetch("http://localhost:8000/api/borads/", {
            method : 'POST',
            headers: {
                Authorization : `JWT ${localStorage.getItem('token')}`,
            },
            body : form_data
        })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', JSON.stringify(response)));
    };


    
    return(
        <>
        <section className="container-section">
            <article className="write-container">
                <div className="post-title">
                    <textarea name="" id="" cols="30" rows="10"  placeholder="제목을 입력하세요" onChange={
                        (e)=>{setTitle(e.target.value)
                        }}
                        ></textarea>
                </div>
            <div className="post-contents">
                <button className="upButton">
                    <label htmlFor="file" className="img-up">
                        <input type="file" id="file" accept=".jpg, .png, .jpeg, .gif" onChange={(e)=>{
                            e.preventDefault();
                            let reader = new FileReader();
                            let file = e.target.files[0];
                            reader.onloadend = () => {
                            setImg(file)
                            setImgURL(reader.result)
                            }
                            reader.readAsDataURL(file);
                        }}></input>
                이미지 업로드</label></button>
                <textarea className="post-textarea2"></textarea>
                    <div className="textarea-display" contentEditable="true" placeholder="내용을 입력하세요" onInput={(e)=>{
                        setContent(e.target.innerHTML)
                        console.log(e.target.innerHTML)
                    }}>
                        <p>
                            <br/>
                        </p>
                        <p>
                            {
                                imgURL === undefined
                                ? null
                                : <img src={imgURL} alt="/"></img>
                            }
                        </p>
                    </div>
            </div>
            <footer className="post-comment">
                <button className="exit-btn transparent-btn" onClick={()=>{}}>✔ 나가기</button>
                <div>
                    <button className="transparent-btn" onClick={()=>{
                        handleSubmit(sendData)
                        histoty.goBack()
                    }}>발행</button>
                </div>
            </footer>
            </article>
        </section>
        </>
    )
}
export default Write;