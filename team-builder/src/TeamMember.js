import React from "react";

export default function TeamMember(props) {
const {name, email, role} = props.details

if (!props.details) {
    return <h3>Working fetching your friend&apos;s details...</h3>
  }

return (
    <div className="container">
        <h2>Name: {name}</h2>
        <p>Email: {email}</p>
        <p>Order: {role}</p>
    </div>
)
}