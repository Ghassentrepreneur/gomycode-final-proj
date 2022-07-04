import React from 'react'

const Project = () => {
  return (
    <div>
      <div className="content">
      <h1>GoMyCode final Project :</h1>
      <p>so i am delivering this final project after our last front end training session using react</p>
      <p>thanks to our Instructor <b>Yassmine</b> , i am now able to deliver a first version of a web application<br/> using the different technologies we've been learning
        including :
      </p>
      <ul>
        <li>Function Components & JSX</li>
        <li>React Hooks</li>
        <ol>
          <li>useEffect</li>
          <li>useState</li>
        </ol>
        <li>Router</li>
        <li>API consuming/CRUD</li>
        <ol>
          <li>get</li>
          <li>post</li>
          <li>put</li>
          <li>delete</li>
        </ol>
        <li>Redux</li>
      </ul>
      </div>
      <div className="Insctructor">
      <img className="Yass" src="/yass.jpg" alt="yass"/>
        <h2>Yass Fle7in Coach</h2>
        <p>Yass is the Fle7in instructor who has been supporting us as a team and guiding us through
          all along the training session</p><br/>
          <p>Thanks to Yass Method and dedication towards us , we have been able to 
          understand and fully master what we learn</p>
          <h4>!! You always rock Yass me !!</h4>
        
      </div>
    </div>
  )
}

export default Project