import React, {useState} from 'react';

function Nav2(props) {
    let [nav2] = useState(["마크", "팀 북"])
    
  return (
    <div className="nav2">
        <ul>
        {
            nav2.map((a, i)=>{
            return(
                <li key={i} onClick={()=>{
                    props.setNavModal(3)
                    props.setFoldStyle({display : "block", left : "19.5rem"})
                }}>{a}</li>
            )
            })
        }
        </ul>
    </div>
  );
}

export default Nav2;
