import React from 'react'
import ReactDom from 'react-dom/client'

const BookList = () => {
  return (
    <>
      <section>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
      </section>
    </>
  )
}

const Book = () => {
  return (
    <article>
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>
  )
}

const Image = () => (
  <img src="https://m.media-amazon.com/images/I/913C+MR3S5L._AC_UL320_.jpg"></img>
)
const Title = () => <h3>The Women: A Novel</h3>
const Author = () => <span>by: Kristin Hannah</span>

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(<BookList></BookList>)
