import React from "react";

export default function Form(props) {
    const {value, update, submit} = props;


    const onChange = event => {
        const { name, value } = event.target
        update(name, value)
    }

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Name
                    <input
                        type="text"
                        value={value.name}
                        onChange={onChange}
                        name="name"
                        placeholder="type your name..."
                        maxLength="10"
                    />
                </label>
                <br></br>
                <label>Email
                    <input
                        type="text"
                        value={value.email}
                        onChange={onChange}
                        name="email"
                        placeholder="type your email..."
                    />
                </label>
                <br></br>
                <label>Role
                    <select value={value.role} name="role" onChange={onChange} >
                        <option value="">-- Choose your Order --</option>
                        <option value="Edgedancer">Edgedancer</option>
                        <option value="Windrunner">Windrunner</option>
                        <option value="Skybreaker">Skybreaker</option>
                        <option value="Lightweaver">Skybreaker</option>
                        <option value="Truthwatcher">Skybreaker</option>
                        <option value="Dustbringer">Skybreaker</option>
                        <option value="Bondsmith">Skybreaker</option>
                        <option value="Stoneward">Skybreaker</option>
                    </select>
                </label>
                <button disabled={!value.name || !value.email || !value.role}>Submit</button>
            </div>
        </form>
    )
}