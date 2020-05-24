import { useState } from 'react'

export default function Input(props) {
  const [todoText, setTodoText] = useState('');

  const styles = {
    label: 'font-bold mb-4 mr-4',
    input: 'bg-white focus:outline-none focus:shadow-outline border border-gray-300 py-2 md:w-1/2 mr-2',
    button: 'hover:bg-gray-300 text-gray-800 hover:text-white hover:border-transparent py-2 px-4 border border-gray-400',
  };

  const handleChange = event => {
    setTodoText(event.target.value)
  }

  const handleClick = () => {
    props.handleAddToDo(todoText)
    setTodoText('')
  }

  return (
    <div>
      <label className={styles.label}>enter a todo:</label>
      <input className={styles.input} value={todoText} onChange={handleChange}></input>
      <button className={styles.button} onClick={handleClick}>+</button>
    </div>
  )
}