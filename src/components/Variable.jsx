import { useState } from "react";

function Variable() {
  const [formData, setFormData] = useState({
    name: "Champ",
    email: "champ024@gmail.com",
    password: "champ0246",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.name.trim()) {
      alert("Enter Name");
      return;
    }

    if (!formData.email.trim()) {
      alert("Enter Email");
      return;
    }

    if (formData.password.trim().length < 6) {
      alert("Password must contain at least 6 characters");
      return;
    }

    console.log("Registration Successful", formData);

    setFormData({
      name: "",
      email: "",
      password: "",
    });
  }

  return (
  <>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={formData.password}
        onChange={handleChange}
      />

      <br /><br />

      <button type="submit">
        Submit
      </button>
    </form>

    {formData && (
      <div>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Password: {formData.password}</p>
      </div>
    )}
  </>
);
}

export default Variable;