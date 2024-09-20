import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'

const firstBook = {
  author: 'Kristin Hannah',
  title: 'The Women: A Novel',
  img: 'https://m.media-amazon.com/images/I/913C+MR3S5L._AC_UL320_.jpg',
}

const secondBook = {
  author: 'Ina Garten',
  title: 'Be Ready When the Luck Happens: A Memoir',
  img: 'https://m.media-amazon.com/images/I/81g+Hs6XF5L._SL1500_.jpg',
}

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      ></Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      ></Book>
    </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props
  return (
    <article className="book">
      <img src={img}></img>
      <h3>{title}</h3>
      <span style={authorStyle}>by: {author}</span>
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
