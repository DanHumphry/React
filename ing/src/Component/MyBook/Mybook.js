import React, { useState } from 'react'
import '../../css/MyBook.css'
import folder from '../../Svg/folder.svg'

function MyBook() {
    // 백엔드로 보내야할 state값
    let [writeInfo, setWriteInfo] = useState({URL : "", Title : "", Tag : ""});
    let [folderValue, setFolderValue] = useState({Folder : "선택하지않음"});
    let [plusFolder, setPlusFolder] = useState()

    // 백엔드에서 가져와야하는 state값
    let [bookMark, setBookMark] = useState([]);
    let [folderList, setFolderList] = useState([]);

    let [clickFolderList, setClickFolderList] = useState([])
    let [selectModal, setSelectModal] = useState(false);

    const ClickFolder = (name)=>{
        let Num = 0;
        let List = [...clickFolderList]
        
        List.map((a)=>{
            if(a === name){
                Num = 1;
            }
            return Num;
        })
        if (Num === 0) {
            List.push(name)
        }else{
            List.splice(List.indexOf(name),1)
        }
        setClickFolderList(List)
    }

    const SetBookMark = (e)=>{
        let arr = { ...writeInfo, [e.target.name] : e.target.value }
        setWriteInfo(arr)
    }
    const SubmitWrite = ()=>{
        let arr = [...bookMark]
        let sendData = {
            URL : writeInfo.URL,
            Title : writeInfo.Title,
            Tag : writeInfo.Tag,
            Folder : folderValue.Folder,
        }
        arr.push(sendData)
        setBookMark(arr)
    }

    return(
        <div className="BookBody">
            <div className="form">
                <p>URL : <input name="URL" onChange={(e)=>{SetBookMark(e)}}/></p>
                <p>Title : <input name="Title" onChange={(e)=>{SetBookMark(e)}}/></p>
                <p>Tag : <input name="Tag" onChange={(e)=>{SetBookMark(e)}}/></p>
                <p>Folder : <input className="folderSelect" name="Folder" value={folderValue.Folder} readOnly
                onClick={()=>{
                    setSelectModal(!selectModal)
                }}/></p>
                {
                    selectModal === true
                    ?(
                    <div className="selectForm">
                        <ul>
                            <li onClick={()=>{
                                setFolderValue({Folder : "선택하지않음"})
                                setSelectModal(false)
                                }}>선택하지않음
                            </li>
                            {
                                folderList.map((a,i)=>{
                                    let firstFolder = a.split('/')[0]
                                    return <li key={i} onClick={()=>{
                                            setFolderValue({Folder : a})
                                            setSelectModal(false)
                                            }}>
                                            {firstFolder}</li>
                                })
                            }
                        </ul>
                    </div>
                    )
                    : null
                }
                <div value="test"></div>
                
                <button onClick={SubmitWrite}>글쓰기</button>
                <hr/>
            </div>
            <div className="plusFolder">
                <input onChange={(e)=>{setPlusFolder(e.target.value)}}/>
                {/* <svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"></path></svg> */}
                <p onClick={()=>{
                    let arr = [...folderList]
                    arr.push(plusFolder + "/")
                    setFolderList(arr)
                }}>폴더 추가하기</p>
            </div>
            <div className="mainSection">
                {
                    folderList.map((a,i)=>{
                        let firstFolder = a.split('/')[0];
                        // let secondFolders = a.split('/')[1].split(',')
                        let inFolderList = [];

                        bookMark.map((A)=>{
                            if(A.Folder === a){
                                inFolderList.push(A)
                            }
                            return inFolderList
                        })

                        return(
                            <div key={i} className="repeatFolder">
                                <img src={folder} alt=""></img>
                                <p onClick={()=>{ClickFolder(a)}}>{firstFolder}</p>
                                {/* <div className="plusFolderInFolder">
                                    <input onChange={(e)=>{setPlusFolder(e.target.value)}}/>
                                    <p onClick={()=>{
                                        let arr = [...folderList]
                                        arr.splice(arr.indexOf(a), 1, a + "" + plusFolder + ",")
                                        setFolderList(arr)
                                    }}>폴더 추가하기</p>
                                </div> */}
                                {
                                    inFolderList.map((a,i)=>{
                                        let Num;
                                        let list;

                                        if(clickFolderList.length !== 0){
                                            clickFolderList.map(()=>{
                                                if(Num !== 0 && clickFolderList.indexOf(a.Folder) !== -1){
                                                    Num = 1;
                                                    return Num;
                                                }else{
                                                    Num = 0;
                                                    return Num;
                                                }
                                            })
                                            
                                            if(Num === 1){
                                                list = (
                                                    <div key={i} className="inFolderRepeatContent">
                                                        <p onClick={()=>{window.open(a.URL)}}>{a.Title}</p>
                                                    </div> 
                                                )
                                            }
                                        }
                                        return list
                                    })
                                }
                            </div>
                        )
                    })
                }
                {
                    bookMark.map((a,i)=>{
                        let filter;
                        if(a.Folder === "선택하지않음"){
                            filter = (
                            <div key={i} className="repeatContent">
                                <p onClick={()=>{window.open(a.URL)}}>{a.Title}</p>
                            </div>
                            )
                        }
                        
                        return filter
                    })
                }
            </div>
        </div>
    )
}
export default MyBook;