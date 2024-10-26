const Book = (props) => {
  const { img, title, author, children, number } = props
  return (
    <article className="book">
      <img src={img}></img>
      <h3>{title}</h3>
      <span style={authorStyle}>by: {author}</span>
      <span>{`no${number + 1}`}</span>
      {children}
    </article>
  )
}

const authorStyle = {
  marginTop: '1.2rem',
  color: 'GrayText',
  fontSize: '0.85rem',
}

export default Book
