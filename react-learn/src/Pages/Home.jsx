import { useState } from "react";
import './Home.css';
import { useDispatch } from "react-redux";
import { setUsers } from "../Slice/userSlice";

export default function Home() {
  const dispatch = useDispatch();
  const [formInput, setFormInput] = useState({
    name: "",
    age: "",
    email: "",
    contact: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormInput((currInput) => ({
      ...currInput,
      [name]: value,
    }));
  }; //console.log(formInput)
const addUser = (event)=>{
  event.preventDefault();
  //prevent default behaviour of form refresh
  dispatch(setUsers(formInput))
                  //formInput is payload in userSlice
}
  return (
    <div className="home">
      <h1>Home</h1>
      <form className="home-form">
        <div className="form-group">
          <label>Name</label>
          <input name="name" type="text" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input name="age" type="number" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input name="email" type="text" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Contact</label>
          <input name="contact" type="number" onChange={handleChange} />
        </div>
        <button  onClick={addUser}>Submit</button>
      </form>
    </div>
  );
}
