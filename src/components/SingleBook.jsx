{
  /* import { Card } from "react-bootstrap"

const SingleBook = ({ book }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default SingleBook*/
}
import { Component } from "react"
import { Card } from "react-bootstrap"
import CommentArea from "./CommentArea"

class SingleBook extends Component {
  state = {
    selected: false,
  }

  toggleSelected = () => {
    this.setState({
      selected: !this.state.selected,
    })
  }

  render() {
    const { book } = this.props

    return (
      <>
        <Card
          style={{
            width: "18rem",
            border: this.state.selected ? "5px solid red" : "none",
          }}
        >
          <Card.Img
            variant="top"
            src={book.img}
            onClick={this.toggleSelected}
          />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Title>
              <p>price: ${book.price}</p>
            </Card.Title>
          </Card.Body>
          {this.state.selected && <CommentArea bookId={book.asin} />}
        </Card>
      </>
    )
  }
}

export default SingleBook
