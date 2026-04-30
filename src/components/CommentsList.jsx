import { Component } from "react"

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

export default CommentsList
