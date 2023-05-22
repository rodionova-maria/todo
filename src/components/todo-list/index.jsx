import { useState } from "react"
import { useSelector } from "react-redux"
import { todosSelector } from "../../store/selectors/todo"
import styles from "./index.module.css"
import { Todo } from "../todo"

export const TodoList = () => {
    const [isFiltered, setIsFiltered] = useState(false)

    const todos = useSelector(todosSelector)

    const getComplited = (todolist) => todolist.filter((item) => item.completed)

    const filteredTodos = isFiltered ? getComplited(todos) : todos

    return (
        <>
            <ul className={styles.list}>
                {filteredTodos.map((todo) => (
                    <Todo key={todo.id} todo={todo} />
                ))}
            </ul>
            <label className={styles.checkbox_wrapper}>
                <input type="checkbox" checked={isFiltered} onChange={() => setIsFiltered(!isFiltered)} /> Завершенные
            </label>
        </>
    )
}
