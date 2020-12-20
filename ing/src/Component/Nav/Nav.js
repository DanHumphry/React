import React,{useState} from 'react';
import Nav1 from './Nav1';
import Nav2 from './Nav2';
import Nav3 from './Nav3';
import Nav4 from './Nav4';
import '../../css/Nav.css'

function Nav() {
    let [navModal, setNavModal] = useState(1);
    let [navModalStyle, setNavModalStyle] = useState({display : "block"});
    let [foldStyle, setFoldStyle] = useState({display : "none"});

  return (
    <div>
        <div style={navModalStyle}>{
            navModal === 0
            ? null
            : (
                navModal === 1
                ? <Nav1 setNavModal={setNavModal} setFoldStyle={setFoldStyle}/>
                : (
                    navModal === 2
                    ? (
                        <>
                        <Nav1 setNavModal={setNavModal} setFoldStyle={setFoldStyle}/>
                        <Nav2 setNavModal={setNavModal} setFoldStyle={setFoldStyle}/>
                        </>
                    )
                    : (
                        navModal === 3
                        ? (
                            <>
                            <Nav1 setNavModal={setNavModal} setFoldStyle={setFoldStyle}/>
                            <Nav2 setNavModal={setNavModal} setFoldStyle={setFoldStyle}/>
                            <Nav3 setNavModal={setNavModal} setFoldStyle={setFoldStyle}/>
                            </>
                        )
                        : (
                            navModal === 4
                            ?(
                                <>
                                <Nav1 setNavModal={setNavModal} setFoldStyle={setFoldStyle}/>
                                <Nav2 setNavModal={setNavModal} setFoldStyle={setFoldStyle}/>
                                <Nav3 setNavModal={setNavModal} setFoldStyle={setFoldStyle}/>
                                <Nav4 setNavModal={setNavModal} setFoldStyle={setFoldStyle}/>
                                </>
                            )
                            : null
                        )
                    )
                )
            )
        }</div>
        <div className="foldNav" style={foldStyle} onClick={()=>{
            if(navModalStyle.display === "none"){
                setNavModalStyle({display : "block"})
                if(navModal === 1){
                    setFoldStyle({display : "none"})
                }else if(navModal === 2){
                    setFoldStyle({display : "block", left : "14.5rem"})
                }else if(navModal === 3){
                    setFoldStyle({display : "block", left : "19.5rem"})
                }else{
                    setFoldStyle({display : "block", left : "24.5rem"})
                }
            }else{
                setNavModalStyle({display : "none"})
                setFoldStyle({display : "block", left : "0"})
            }
            }}>
                {
                    navModalStyle.display === "none"
                    ? <h3>펴기</h3>
                    : <h3>접기</h3>
                }
        </div>
    </div>
  );
}

export default Nav;
