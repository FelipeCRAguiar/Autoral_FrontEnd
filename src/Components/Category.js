import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Option from "./Option";


export default function Category({ setCategoryList, categoryList, optionsNumber, optionsList, setOptionsList }) {
  const [list, setList] = useState([])
  const [name, setName] = useState('')

  function handleFreeFormInput(e) {
    e.preventDefault();
    setName(e.target.value)
    setCategoryList([...categoryList, name])
    console.log(name)
  }

  useEffect(() => {
    if (optionsNumber !== '') {
      const num = parseInt(optionsNumber)
      const arr = []
      for (let i = 0; i < num; i++) {
        arr.push(<Option setOptionsList={setOptionsList} optionsList={optionsList} key={i}/>)
      }
      setList(arr)
    }
  }, [])

  return (
    <>
      <TextField required label="Nome da categoria" placeholder='Nome da categoria' sx={{width: '500px'}} value={name} onChange={handleFreeFormInput} name='name' />
      {list}
    </>
  )
}