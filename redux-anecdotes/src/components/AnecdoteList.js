import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector((state) => state.anecdotes)
  const filter = useSelector((state) => state.filter)

  const anecdotesToShow =
    filter === ''
      ? anecdotes
      : anecdotes.filter((anecdotes) =>
          anecdotes.content
            .toLocaleLowerCase()
            .includes(filter.toLocaleLowerCase())
        )

  const vote = (id) => {
    //console.log('vote', id)
    const anecdoteToVote = anecdotes.filter(
      (anecdote) => anecdote.id === id
    )
    dispatch(
      setNotification(`you voted '${anecdoteToVote[0].content}'`, 5)
    )
    dispatch(voteAnecdote(id, anecdoteToVote))
  }

  return (
    <div>
      {anecdotesToShow
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
