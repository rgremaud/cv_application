import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/styles.css'
import './styles/reset.css'
import Form from './components/Form.jsx'
import Resume from './components/Resume.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Form />
    <Resume />
  </StrictMode>,
)

/*
 Form:
  1 - General Info
    First name, last name, email, phone, address
  2 - Education
   Highest level of education - univ name, gpa, major 
  3 - Work Experience
    company name, year start and end, details
 */
