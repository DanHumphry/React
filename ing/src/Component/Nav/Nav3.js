import React, {useState} from 'react';

function Nav3(props) {
    let [nav3] = useState(["마크", "팀 북"])
    
  return (
    <div className="nav3">
        <ul>
        {
            nav3.map((a, i)=>{
            return(
                <li key={i} onClick={()=>{
                    props.setNavModal(4)
                    props.setFoldStyle({display : "block", left : "24.5rem"})
                }}>{a}</li>
            )
            })
        }
        </ul>
    </div>
  );
}

export default Nav3;
