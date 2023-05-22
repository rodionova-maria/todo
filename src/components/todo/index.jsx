import { useDispatch } from "react-redux"
import { deleteTodo, toggleTodo } from "../../store/actions/creators/todo"
import styles from "./index.module.css"
import cx from "classnames"

export const Todo = ({ todo }) => {
    const dispatch = useDispatch()

    const toggleTodoItem = () => {
        dispatch(toggleTodo(todo.id))
    }

    const deleteTodoItem = () => {
        dispatch(deleteTodo(todo.id))
    }

    return (
        <li className={styles.item} onClick={toggleTodoItem}>
            {todo.completed ? "👌" : "👋"}{" "}
            <span
                className={cx({
                    [styles.completed]: todo.completed,
                })}
            >
                {todo.content}
            </span>
            <button className={styles.delete} onClick={deleteTodoItem}>
                Удалить
            </button>
        </li>
    )
}
