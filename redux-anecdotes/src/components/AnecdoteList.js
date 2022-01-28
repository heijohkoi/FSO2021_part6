import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import {
  setNotification,
  clearNotification
} from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector((state) => state.anecdotes)

  const vote = (id) => {
    console.log('vote', id)
    const votedAnecdote = anecdotes.filter(
      (anecdote) => anecdote.id === id
    )
    console.log('voted', votedAnecdote[0].content)
    dispatch(
      setNotification(`You voted "${votedAnecdote[0].content}"`)
    )
    setTimeout(() => {
      dispatch(clearNotification())
    }, 3000)
    dispatch(voteAnecdote(id))
  }

  return (
    <div>
      {anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default AnecdoteList
