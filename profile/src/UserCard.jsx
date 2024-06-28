// import React from 'react';
function User(){
return <div className="card-container">
    <span className="pro offline">OFFLINE</span>
    <img src="images/pics1.jpg" className="img" alt="user" />
    <h3>Full Name</h3>
    <h3>chennai</h3>
    <p>front-end developer</p>
    <div classNmae="buttons">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
    </div>
    <div className="skills">
        <h6>Skills</h6>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>
            JavaScript library</li>
            <li>RESTful APIs</li>
            <li>Node</li>
        </ul>
    </div>
    </div>;
 
}

export const UserCard = () => {
  return (
    
        <User />
        
  )
}
