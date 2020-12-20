import React, {useState} from 'react';

function Nav4() {
    let [nav4] = useState(["마크", "팀 북"])
    
  return (
    <div className="nav4">
        <ul>
        {
            nav4.map((a, i)=>{
            return(
                <li key={i}>{a}</li>
            )
            })
        }
        </ul>
    </div>
  );
}

export default Nav4;
