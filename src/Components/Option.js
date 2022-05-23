import { useState } from "react";
import { TextField } from "@mui/material";


export default function Option({ optionsList, setOptionsList }) {
  const [formData, setFormData] = useState({
    name: '',
    image: ''
  })

  function handleFreeFormInput(e) {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setOptionsList([...optionsList, formData])
  }
  
  return (
    <>
      <TextField required label="Nome da opção" placeholder='Nome da opção' sx={{width: '500px', marginLeft: '50px'}} value={formData.name} onChange={handleFreeFormInput} name='name' />
      <TextField required label='Imagem da opção' placeholder='Link para a imagem da opção' sx={{width: '500px', marginLeft: '50px'}} type='url' value={formData.image} onChange={handleFreeFormInput} name='image'/>
    </>
  )
}