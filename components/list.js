import Item from './item'

export default function List(props) {
  return (
    <section className="my-24 w-auto inline-block">
      <p className="border-b-4 border-gray-600 font-bold">todoList</p>
      <div className="text-xl">
        <ul>
          {props.todos.map(todo => <Item text={todo} />)}
        </ul>
      </div>
    </section>
  )
}