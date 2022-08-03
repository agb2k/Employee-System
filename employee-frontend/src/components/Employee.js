import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Employee() {
  const [name, setname] = useState('');
  const [salary, setSalary] = useState('');
  const [position, setPosition] = useState('');
  const [address, setAddress] = useState('');
  const [employee, setEmployee] = useState('');


  const handleClick = () => {
    const student = { name, salary, position, address }
    console.log(student);
    fetch('http://localhost:8080/employee/add', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student)
    }
    ).then(
      console.log('New Student Added')
    )
  }

  useEffect(() => {
    fetch('http://localhost:8080/employee/getAll')
      .then(res => res.json())
      .then((result) => {
        setEmployee(result);
      }
      )
  }, [])

  return (
    <Container>
      <Paper style={{ margin: "10px", padding: "15px" }} elevation={3}>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              label="Name"
              variant="filled"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div>
            <TextField
              label="Salary"
              variant="filled"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>
          <div>
            <TextField
              label="Position"
              variant="filled"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
          <div>
            <TextField
              label="Address"
              variant="filled"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <Button variant="contained" onClick={handleClick}>Submit</Button>
        </Box>
      </Paper>

      <Paper style={{ margin: "10px", padding: "15px", textAlign: "left" }} elevation={6} >
        {employee.map((emp) => (
          <Paper key={emp.id} style={{ margin: "10px", padding: "15px", textAlign: "left" }}>
            ID: {emp.id}<br />
            Name: {emp.name}<br />
            Salary: {emp.salary}<br />
            Position: {emp.position}<br />
            Address: {emp.address}<br />
          </Paper>
        ))}
      </Paper>

    </Container>
  );
}
