import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'

const books = [
  {
    author: 'Kristin Hannah',
    title: 'The Women: A Novel',
    img: 'https://m.media-amazon.com/images/I/913C+MR3S5L._AC_UL320_.jpg',
    id: 1,
  },
  {
    author: 'Ina Garten',
    title: 'Be Ready When the Luck Happens: A Memoir',
    img: 'https://m.media-amazon.com/images/I/81g+Hs6XF5L._SL1500_.jpg',
    id: 2,
  },
]
const BookList = () => {
  return (
    <section className="booklist">
      <EventExample></EventExample>
      {books.map((book, index) => {
        const { img, title, author, id } = book
        return <Book {...book} key={book.id}></Book>
      })}
    </section>
  )
}

const EventExample = () => {
  const handleFormInput = () => {
    console.log('Handle Form input')
  }
  const handleButtonClick = () => {
    alert('Handle Button Click')
  }
  return (
    <>
      <section>
        <form action="">
          <h3>Sample Form</h3>
          <input
            type="text"
            name="example"
            style={{ margin: '1rem 0' }}
            onChange={handleFormInput}
          />
          <br />
        </form>
        <button onClick={handleButtonClick}> Click me</button>
      </section>
    </>
  )
}
const Book = (props) => {
  const { img, title, author, children } = props
  return (
    <article className="book">
      <img src={img}></img>
      <h3>{title}</h3>
      <span style={authorStyle}>by: {author}</span>
      {children}
    </article>
  )
}

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(<BookList></BookList>)

const authorStyle = {
  marginTop: '1.2rem',
  color: 'GrayText',
  fontSize: '0.85rem',
}
