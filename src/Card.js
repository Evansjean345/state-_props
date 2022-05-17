import React from 'react'
import './App.css'
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'react-bootstrap';
import mark from './mark.jpeg'


function Card({name,job,about}) {
    

  return (
    <ThemeProvider
    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  >
    <div className='Card'>
       <div className='upper-container'>
             <div className='image-container'>
                 <img src={mark} alt='' height='100px' width='100px' />
             </div>
       </div>
           <div className='lower-container'>
                 <h3>{job}</h3>
                 
           </div>
    </div>
    </ThemeProvider>
  )
}

export default Card



