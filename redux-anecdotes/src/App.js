import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  voteAnecdote,
  createAnecdote
} from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector((state) => state)
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    console.log(event.target.anecdote.value)
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnecdote(content))
  }

  const vote = (id) => {
    console.log('vote', id)
    dispatch(voteAnecdote(id))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default App
