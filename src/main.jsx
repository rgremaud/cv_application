import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Form from './components/Form.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Form />
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
