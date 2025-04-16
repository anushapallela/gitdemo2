import React, { useState } from 'react'; 
 
function App() { 
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [phone, setPhone] = useState(''); 
 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    alert(`Registered:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`); 
  }; 
 
  return ( 
    <div> 
      <h2>Event Registration Form</h2> 
      <form onSubmit={handleSubmit}> 
        <input 
          type="text" 
          placeholder="Enter your name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        /><br /><br /> 
 
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        /><br /><br /> 
 
        <input 
          type="tel" 
          placeholder="Enter your phone number" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
        /><br /><br /> 
 
        <button type="submit">Register</button> 
      </form> 
    </div> 
  ); 
} 
 
export default App; 