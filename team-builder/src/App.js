
import React, {useState} from "react";
// import axios from "axios";

import Form from "./Form.js";
import TeamMember from "./TeamMember";


const defaultMemberInfo = {
  name: "",
  email: "",
  role: "",
}

function App() {
const [team, setTeam] = useState([]);
const [memberInfo, setMemberInfo] = useState(defaultMemberInfo)


const updateForm = (inputName, inputValue) => {
  setMemberInfo({...memberInfo, [inputName]: inputValue})
}

const submitForm = () => {
  const newMember = {
    name: memberInfo.name.trim(),
    email: memberInfo.email.trim(),
    role: memberInfo.role,
  }

    setTeam([...team, newMember])
    setMemberInfo(defaultMemberInfo)

}

  return (
    <div className="container">
      <h1>Team Sign-up Form</h1>
      <Form
        value={memberInfo}      
        update={updateForm}
        submit={submitForm}
      />
      {team.map((item) => {
        return (
          <TeamMember details={item} />
        )
      })
        
      }
    </div>

  );
}

export default App;
