import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Navigationbar from './Navigationbar'




const Addteam = () => {
    const [input, changeInput] = useState(
        { 
           teamId: "",
        teamName: "",
        teamLeader: "",
        leaderEmail: "",
        leaderPhone: "",
        collegeName: "",
        numberofMembers: "",
        projectTitle: "",
        problemstatementTrack: "",
        technologyStack: "",
        mentorName: "",
        registrationDate: "",
        stationNumber: ""
               
        }  
    )

    
    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        });
    };

    const readValue = () => {
        console.log(input);
        axios.post("http://localhost:3000/add-team", input)
            .then((response) => {
                console.log(response.data);
                alert("Team added successfully");
            })
            .catch((error) => {
                console.error("Error adding team", error.res.status);
                console.error("Error adding team", error.res.data);
            });


        
    };
    
  return (
    <div>
        <Navigationbar/>
        
        
        
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h2 className="text-center">Add Team</h2>
                    <div className="row g-6">

                    
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Team Id:</label>
                            <input type="number" className="form-control" required
                             name="teamId"
                                value={input.teamId}
                                onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Team Name:</label>
                            <input type="text" className="form-control"
                             name="teamName"
                                value={input.teamName}
                                onChange={inputHandler} required />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label" >Team Leader:</label>
                            <input type="text" className="form-control"
                             name="teamLeader"
                                value={input.teamLeader}
                                onChange={inputHandler} required />
                           
                            
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label" >Leader Email:</label>
                           <input type="email" className="form-control"
                             name="leaderEmail"
                                value={input.leaderEmail}
                                onChange={inputHandler} required />
                            
                            
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Leader Phone:</label>
                            <input type="phone" className="form-control"
                             name="leaderPhone"
                                value={input.leaderPhone}
                                onChange={inputHandler} required />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">College Name :</label>
                            <input type="text" className="form-control"
                             name="collegeName"
                                value={input.collegeName}
                                onChange={inputHandler} required />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Number Of Members:</label>
                            <input type="number" className="form-control"
                             name="numberofMembers"
                                value={input.numberofMembers}
                                onChange={inputHandler} required />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Project Title:</label>
                            <input type="text" className="form-control"
                             name="ProjectTitle"
                                value={input.ProjectTitle}
                                onChange={inputHandler} required/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Problem Statement Track:</label>
                            <input type="text" className="form-control"
                             name="ProblemstatementTrack"
                                value={input.ProblemstatementTrack}
                                onChange={inputHandler} required/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Technology Stack:</label>
                            <input type="text" className="form-control"
                             name="technologyStack"
                                value={input.technologyStack}
                                onChange={inputHandler} required/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Mentor Name:</label>
                            <input type="text" className="form-control"
                             name="mentorName"
                                value={input.mentorName}
                                onChange={inputHandler} required/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Registration Date:</label>
                            <input type="date" className="form-control"
                             name="registrationDate"
                                value={input.registrationDate}
                                onChange={inputHandler} required/>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Station Number:</label>
                            <input type="number" className="form-control"
                             name="stationNumber"
                                value={input.stationNumber}
                                onChange={inputHandler} required/>
                        </div>

                        
                        
                    </div>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <button className="btn btn-success" onClick={readValue}>Submit</button>
                        </div>
                </div>
            </div>
        </div>

    
  )
}

export default Addteam