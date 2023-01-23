import SvgStorage from "./SvgStorage/SvgStorage"
import styles from "./TodosActions/TodosActions.module.css"

function TodosActions({ resetTodos }) {
  return (
    <div>
      <button
        className={styles.button}
        title="Reset Todos"
        onClick={resetTodos}>
        <SvgStorage id="trash" />
      </button>
    </div>
  )
}

export default TodosActions
