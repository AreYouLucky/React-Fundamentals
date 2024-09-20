import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'

const author = 'Kristin Hannah'
const title = 'The Women: A Novel'

const BookList = () => {
  return (
    <section className="booklist">
      <Book author={author} title={title}></Book>
      <Book author={author} title={title}></Book>
    </section>
  )
}

const Book = (props) => {
  console.log(props)
  return (
    <article className="book">
      <img src="https://m.media-amazon.com/images/I/913C+MR3S5L._AC_UL320_.jpg"></img>
      <h3>{props.title}</h3>
      <span style={authorStyle}>by: {props.author}</span>
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
