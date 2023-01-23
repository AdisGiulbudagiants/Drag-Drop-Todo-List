import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import { v4 as uuidv4 } from "uuid"
import { useState } from "react"
import _ from "lodash"
import Title from "./components/Title/Title"
import Footer from "./components/Footer/Footer"
import SpringIn from "./components/SpringIn"
import TodosActions from "./components/TodosActions"
import SvgStorage from "./components/SvgStorage/SvgStorage"
import "./App.css"

function App() {
  const [text, setText] = useState("")
  const [state, setState] = useState({
    todo: {
      title: "Todo",
      items: [],
    },
    "in-progress": {
      title: "In Progress",
      items: [],
    },
    done: {
      title: "Completed",
      items: [],
    },
  })

  const [todos, setTodos] = useState([])
  const [inProgress, setInProgress] = useState([])

  const handleDragEnd = ({ destination, source }) => {
    if (!destination) return

    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return
    }

    const itemCopy = { ...state[source.droppableId].items[source.index] }
    setState((prev) => {
      prev = { ...prev }

      //Удаление item из предыдущей колонки с массивами
      prev[source.droppableId].items.splice(source.index, 1)
      //Добавление item в новую колонку с массивами
      prev[destination.droppableId].items.splice(destination.index, 0, itemCopy)

      return prev
    })
  }

  const addItem = () => {
    setState((prev) => {
      return {
        ...prev,
        todo: {
          title: "Todo",
          items: [{ id: uuidv4(), name: text }, ...prev.todo.items],
        },
      }
    })
    setText("")
  }

  const resetTodosHandler = () => {
    setState((prev) => {
      return {
        ...prev,
        todo: {
          title: "Todo",
          items: [],
        },
      }
    })
  }

  const resetTodo = () => {
    setState((prev) => {
      return {}
    })
  }

  return (
    <div className="App">
      <SpringIn>
        <div className="main">
          <Title />
          <div className="input-button">
            <input
              className="input"
              placeholder={"Enter Todo Here"}
              type="text"
              value={text}
              onChange={(e) => {
                setText(e.target.value)
              }}
            />
            <button title="Add Todo" className="button" onClick={addItem}>
              Add
            </button>
          </div>
          <TodosActions resetTodos={resetTodosHandler} />
          <div className="drag-and-drop">
            <DragDropContext onDragEnd={handleDragEnd}>
              {_.map(state, (data, key) => {
                return (
                  <div key={key} className="drag-and-drop__column">
                    <h3 className="drag-and-drop__text">{data.title}</h3>

                    <Droppable droppableId={key}>
                      {(provided) => {
                        return (
                          <div
                            className="drag-and-drop__main"
                            ref={provided.innerRef}
                            {...provided.droppableProps}>
                            {!data.items.length && (
                              <SpringIn>
                                <h2 style={{ color: "#f66d65" }}>
                                  This list is Empty
                                </h2>
                              </SpringIn>
                            )}
                            {data.items.map((el, index) => {
                              return (
                                <Draggable
                                  key={el.id}
                                  draggableId={el.id}
                                  index={index}>
                                  {(provided) => {
                                    return (
                                      <div
                                        className="drag-and-drop__todo"
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}>
                                        {el.name}
                                      </div>
                                    )
                                  }}
                                </Draggable>
                              )
                            })}
                            {provided.placeholder}
                          </div>
                        )
                      }}
                    </Droppable>
                  </div>
                )
              })}
            </DragDropContext>
          </div>
        </div>
        <Footer />
      </SpringIn>
    </div>
  )
}

export default App
