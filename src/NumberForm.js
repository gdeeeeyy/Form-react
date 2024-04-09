import React, { useState } from 'react';
import axios from 'axios';

const NumberForm = () => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/numbers', { number, name });
    setNumber('');
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} align="center">
      <label>
        Roll Number
        <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
      </label>
      <br/>
      <br/>
      <label>
        Name 
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br/>
      <br/>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NumberForm;