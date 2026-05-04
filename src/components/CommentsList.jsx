{
  /* import { Component } from "react"

class CommentsList extends Component {
  render() {
    return (
      <div>
        {this.props.comments.map((e) => (
          <div
            key={e._id}
            style={{
              border: "1px solid black",
            }}
          >
            <p>{e.comment}</p>
            <p>Voto: {e.rate}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default CommentsList */
}
import { Component } from "react"

class CommentsList extends Component {
  render() {
    return (
      <div>
        {this.props.comments.map((c) => (
          <div key={c._id}>
            <p>{c.comment}</p>
            <p>⭐ {c.rate}</p>
            <hr />
          </div>
        ))}
      </div>
    )
  }
}

export default CommentsList
