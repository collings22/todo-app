import { render, screen, fireEvent } from '@testing-library/react'
import ToDoList from './ToDoList'

const data = [{
  id: 1,
  title: 'Wash car',
  complete: false
},
{
  id: 2,
  title: 'Food shop',
  complete: true
},
{
  id: 3,
  title: 'School run',
  complete: false
}]

describe('todo list test', () => {
  it('should show the titles of the todos', () => {
    render(<ToDoList todos={data} />)
    data.forEach((d) => expect(screen.getByText(d.title)).toBeInTheDocument())
  })

  it('should test if complete class has been applied to completed todos', () => {
    render(<ToDoList todos={data} />)
    expect(screen.getByText('Food shop').classList.contains('complete')).toBe(true)
  })

  it('should test if complete class has been applied to completed todos', () => {
    render(<ToDoList todos={data} />)
    expect(screen.getByTestId('addToDoItemInput')).toBeInTheDocument()
    expect(screen.getByTestId('addToDoButton')).toBeInTheDocument()
    expect(screen.getByTestId('addToDoButton')).toBeEnabled()
  })

  it('should add todo item to list of todos', () => {
    render(<ToDoList todos={data} />)

    const input = screen.getByTestId('addToDoItemInput')
    const button = screen.getByTestId('addToDoButton')

    fireEvent.change(input, { target: { value: 'Bring washing in' } })

    fireEvent.click(button)

    expect(screen.getByText('Bring washing in')).toBeInTheDocument()
  })

  it('should remove a todo item from the list of todos', () => {
    render(<ToDoList todos={data} />)

    const button = screen.getByTestId('removeToDoItemInput_1')

    fireEvent.click(button)

    expect(screen.queryByText('Wash car')).not.toBeInTheDocument()
  })

  /*
  it('should apply styling when hover and complete', () => {
    render(<ToDoList todos={data} />)

  })
  
    it('should apply styling when hover and NOT complete', () => {
    render(<ToDoList todos={data} />)

  })
  */
})
