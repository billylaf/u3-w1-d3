import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import CommentArea from "../components/CommentArea"

describe("CommentArea component", () => {
  it("renders correctly", () => {
    render(<CommentArea />)

    const message = screen.getByText(/seleziona un libro/i)

    expect(message).toBeTruthy()
  })
})
