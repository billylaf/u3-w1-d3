{
  /* import { Component } from "react"

class AddComment extends Component {
  state = {
    comment: "",
    rate: 1,
  }

  send = (e) => {
    e.preventDefault()

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWUxZjY1ZDczOWY4NzAwMTU3YWIwYjQiLCJpYXQiOjE3Nzc1NDg0MjAsImV4cCI6MTc3ODc1ODAyMH0.mDX8hknySRC4WTBFbsbV8dZO7BRMY83GhltvJTiCLLk",
      },
      body: JSON.stringify({
        comment: this.state.comment,
        rate: this.state.rate,
        elementId: this.props.bookId,
      }),
    }).then(() => {
      this.setState({
        comment: "",
        rate: 1,
      })
    })
  }

  render() {
    return (
      <form onSubmit={this.send}>
        <input onChange={(e) => this.setState({ comment: e.target.value })} />

        <select onChange={(e) => this.setState({ rate: e.target.value })}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>

        <button>Invia</button>
      </form>
    )
  }
}

export default AddComment */
}
import { Component } from "react"

class AddComment extends Component {
  state = {
    comment: "",
    rate: 1,
  }

  send = (e) => {
    e.preventDefault()

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWUxZjY1ZDczOWY4NzAwMTU3YWIwYjQiLCJpYXQiOjE3Nzc1NDg0MjAsImV4cCI6MTc3ODc1ODAyMH0.mDX8hknySRC4WTBFbsbV8dZO7BRMY83GhltvJTiCLLk",
      },
      body: JSON.stringify({
        comment: this.state.comment,
        rate: this.state.rate,
        elementId: this.props.bookId,
      }),
    }).then(() => {
      this.setState({
        comment: "",
        rate: 1,
      })
    })
  }

  render() {
    return (
      <form onSubmit={this.send}>
        <input
          value={this.state.comment}
          onChange={(e) => this.setState({ comment: e.target.value })}
          placeholder="commento"
        />

        <select
          value={this.state.rate}
          onChange={(e) => this.setState({ rate: e.target.value })}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>

        <button>Invia</button>
      </form>
    )
  }
}

export default AddComment
