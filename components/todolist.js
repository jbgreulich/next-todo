import { useState } from 'react'
import Input from '../components/input'
import List from '../components/list'

export default function ToDoList(props) {
  const [todoList, setTodoList] = useState(props.todos);

  const handleAddToDo = todo => {
    const newList = [...todoList, todo];
    setTodoList(newList); 
  }

  return (
    <>
      <Input handleAddToDo={handleAddToDo}></Input>
      <List todos={todoList}></List>
    </>
  )
}