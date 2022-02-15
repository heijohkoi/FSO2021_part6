import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = (props) => {
  const addAnecdote = async (event) => {
    event.preventDefault()
    //console.log(event.target.anecdote.value)
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.setNotification(`new anecdote '${content}'`, 5)
    props.createAnecdote(content)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  setNotification,
  createAnecdote
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)
