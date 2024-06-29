// import React from 'react';
import PropTypes from "prop-types";
const userData=[
    {
        name:"Aarna" ,
        city:"New York",
        description:"front-end developer",

        skills:["HTML","CSS","Javascript",
            "React","Node","UI/UX"],
            online: false,
            profile:"images/pics1n.jpg",



    },
    {
        name: "Rohan",
        city: "San Francisco",
        description: "back-end developer",
        skills: ["Node.js", "Express", "MongoDB", "Docker", "AWS"],
        online: true,
        profile:"images/pics3n.jpg",
    },
    {
        name: "Meera",
        city: "Chicago",
        description: "full-stack developer",
        skills: ["JavaScript", "React", "Node.js", "GraphQL", "PostgreSQL"],
        online: true,
        profile:"images/pics2.jpg",
    },
    {
        name: "Vikram",
        city: "Los Angeles",
        description: "mobile app developer",
        skills: ["Java", "Kotlin", "Swift", "React Native", "Firebase"],
        online: false,
        profile:"images/picss4.jpeg",
    }


];

function User(props){
return <div className="card-container">
    <span className={props.online?"pro online" : 
        "pro offline"}>
            {props.online?"ONLINE":"OFFLINE"}</span>
    <img src={props.profile} className="img" alt="user" />
    <h3>{props.name}</h3>
    <h3>{props.city}</h3>
    <p>{props.description}</p>
    <div classNmae="buttons">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
    </div>
    <div className="skills">
        <h6>Skills</h6>
        <ul>
            {props.skills.map((skill,index)=>(
                <li key={index}>{skill}</li>
            ))}
        </ul>
    </div>
    </div>;
 
}

export const UserCard = () => {
  return (
    
      <>
      {
        userData.map((user,index) =>(
            <User key={index}
            name={user.name}
            city={user.city}
            description={user.description}
            online={user.online}
            profile={user.profile}
            skills={user.skills}
            />
        ))
      }
      </>
        
  )
}
/* <User name="Aarna" city="New York"
        description="front-end developer"
        skills={["HTML","CSS","Javascript",
            "React,Node","UI/UX"]} online={false}
            profile ="images/pics1.jpg"/>
        */ 
User.propTypes = {
    name: PropTypes.string.isRequired,
    city:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    skills:PropTypes.arrayOf(PropTypes.string).isRequired,
    online:PropTypes.bool.isRequired,
    profile:PropTypes.string.isRequired,

}