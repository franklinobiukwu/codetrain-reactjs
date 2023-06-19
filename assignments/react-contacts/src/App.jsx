import { useState } from 'react'
import './App.css'
import Contacts from './component/Contacts.jsx'
import ContactForm from './component/ContactsForm.jsx'

function App() {
  const [info, setInfo] = useState([
        {name: "Franklin", phone: "0123456789", location: "Awoshie"},
        {name: "Star", phone: "9876543210", location: "Space"}
  ])

const contact = info.map((item, index)=>{
        return (
                <Contacts 
                        key={index}
                        name = {item.name}
                        phone = {item.phone}
                        location = {item.location}
                />
        )
}) 

const addUser = (user)=>{
        setInfo( (prevInfo)=> [...prevInfo, user]);
};

  return (
    <div className='container grid grid-cols-12'>
          <div className='col-span-4'>
                <ContactForm addUser={addUser}/>
          </div>
          <div className='flex col-span-8'>
                {contact}
          </div>
    </div>
  )
}

export default App
