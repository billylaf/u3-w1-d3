import { Component } from "react"
import CommentsList from "./CommentsList"
import AddComment from "./AddComment"
class CommentArea extends Component {
  state = {
    comments: [],
  }

  componentDidMount() {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" +
        this.props.bookId,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWUxZjY1ZDczOWY4NzAwMTU3YWIwYjQiLCJpYXQiOjE3Nzc1NDg0MjAsImV4cCI6MTc3ODc1ODAyMH0.mDX8hknySRC4WTBFbsbV8dZO7BRMY83GhltvJTiCLLk",
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          comments: data,
        })
      })
  }

  render() {
    return (
      <div>
        <CommentsList comments={this.state.comments} />
        <AddComment bookId={this.props.bookId} />
      </div>
    )
  }
}

export default CommentArea
