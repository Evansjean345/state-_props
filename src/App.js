import logo from './logo.svg';
import './App.css';
import Card from './Card.js'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider,Modal,Button } from 'react-bootstrap';
import Forms from './Forms';


function App() {

  const[name,setName] = useState('your name') ;
  const[job,setJob]  = useState('job title') ;
  const[about,setAbout] = useState('Human Benchmark. Measure your abilities with brain games and cognitive tests. Get Started · Reaction Time. Test your visual reflexes. New. Sequence Memory.') ;
  return (
    <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
>
    <div className="App">
      <Card    />
      <div style={{marginLeft:'-700px' ,resize:'both'   }}  id='p'> <Forms/> </div>

    </div>
    </ThemeProvider>
  );
}

export default App;



