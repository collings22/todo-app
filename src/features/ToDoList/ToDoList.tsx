import React from 'react'

export type ToDoItemProps = {
    id: number
    title: string
    complete: boolean
  }
  
  interface IToDoList {
    todos: Array<ToDoItemProps>,
  }



export default function ToDoList({todos}:IToDoList) {
    const [toDoList, setToDoList] = React.useState(todos)
    const [newItem, setNewItem] = React.useState('')

    function handleToggleComplete(e: any) {
        setToDoList([...toDoList.map(o => o.id.toString() === e.target.id ? { ...o, complete: !o.complete } : o)])
    }

    function handleAddToDoItem() {
        setToDoList([...toDoList, { id: Math.floor(Math.random() * 90000), title: newItem, complete: false }])
    }

    function handleRemoveToDoItem(id: any) {
        setToDoList([...toDoList.filter(f => f.id !== id)])
    }

    return (
        <div className='listContainer'>
                {toDoList.map((o, i) => (
                    <div key={i}>
                        <label id={o.id.toString()} className={o.complete ? 'complete' : ''} onClick={(e: any) => handleToggleComplete(e)}>
                            {o.title}
                        </label>
                        <input
                            type='button'
                            value='Remove'
                            className='btn btn-sm btn-warning'
                            data-testid={`removeToDoItemInput_`+o.id}
                            onClick={() => handleRemoveToDoItem(o.id)}
                        />                    
                        </div>
                ))}


            <input id='inputToDoItem' data-testid="addToDoItemInput" title='Add To Do' type='text' onChange={e => setNewItem(e.target.value)} />
            <input
                data-testid="addToDoButton"
                type='button'
                className='btn btn-sm btn-success'
                value='Add'
                onClick={handleAddToDoItem}
            />

        </div>
    )
}