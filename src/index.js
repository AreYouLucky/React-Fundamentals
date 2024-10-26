import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import { books } from './Data/Books'
import Book from './Components/Book'

const BookList = () => {
  return (
    <section className="booklist">
      <EventExample></EventExample>
      {books.map((book, index) => {
        const { img, title, author, id } = book
        return <Book {...book} key={book.id} number={index}></Book>
      })}
    </section>
  )
}

const EventExample = () => {
  const handleFormInput = (e) => {
    console.log(e.target.value)
  }
  const handleFormSubmission = (e) => {
    e.preventDefault()
    console.log(e.target.value)
  }
  return (
    <>
      <section>
        <form onSubmit={handleFormSubmission}>
          <h3>Sample Event</h3>
          <input
            type="text"
            name="example"
            style={{ margin: '1rem 0' }}
            onChange={handleFormInput}
          />
          <br />
          <button type="submit"> Click me</button>
        </form>
      </section>
    </>
  )
}

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(<BookList></BookList>)
