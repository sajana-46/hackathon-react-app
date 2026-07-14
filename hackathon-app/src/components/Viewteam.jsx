import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import{useEffect} from 'react'
import Navigationbar from './Navigationbar'





const Viewteam = () => {
    const[data,changeData]=useState([])


    const fetchData = () =>{
     axios.post("http://localhost:3000/view-team").then(
        (res)=>{
            changeData(res.data)

        }
    ).catch()   


    }
    useEffect(()=>{
        fetchData()
    },[])
    
  return (
    <div>
        <Navigationbar/>
        
        
        
        <div className="container mt-4">
        <h2 className="text-center mb-4">View All</h2>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Team Id</th>
              <th>Team Name</th>
              <th>Team Leader</th>
              <th>Leader Email</th>
              <th>Leader Phone </th>
              <th>College Name </th>
              <th> Nummber of Members</th>
              <th>Project Title</th>
              <th>Problem Statement Track</th>
              <th>Technology Stack</th>
              <th>Mentor Name</th>
              <th>Registration Date</th>
              <th>Station Number</th>
            </tr>
          </thead>

          <tbody>
            {data.map(
                (value,index)=>{
                    return(
                         <tr>
                        <td>{value.teamId}</td>
                        <td>{value.teamName}</td>
                        <td>{value.teamLeader}</td>
                        <td>{value.leaderEmail}</td>
                        <td>{value.leaderPhone}</td>
                        <td>{value.collegeName}</td>
                        <td>{value.numberofMembers}</td>
                        <td>{value.projectTitle}</td>
                        <td>{value.problemstatementTrack}</td>
                        <td>{value.technologyStack}</td>
                        <td>{value.mentorName}</td>
                        <td>{value.registrationDate}</td>
                        <td>{value.stationNumber}</td>
                        </tr>
                    )
                }
            )
                
            }
           
             </tbody>
        </table>
      </div>

        


    </div>
  )
}

export default Viewteam