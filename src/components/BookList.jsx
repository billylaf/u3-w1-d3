import { Component } from "react"
import SingleBook from "./SingleBook"
import CommentArea from "./CommentArea"

class BookList extends Component {
  state = {
    selectedAsin: null,
  }

  setSelectedBook = (asin) => {
    this.setState({ selectedAsin: asin })
  }

  render() {
    return (
      <div style={{ display: "flex" }}>
        {/* COLONNA SINISTRA */}
        <div style={{ width: "70%" }}>
          {this.props.books.map((book) => (
            <SingleBook
              key={book.asin}
              book={book}
              onSelect={this.setSelectedBook}
            />
          ))}
        </div>

        {/* COLONNA DESTRA */}
        <div style={{ width: "30%" }}>
          <CommentArea asin={this.state.selectedAsin} />
        </div>
      </div>
    )
  }
}

export default BookList
