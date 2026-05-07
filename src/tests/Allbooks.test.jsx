import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import AllTheBooks from "../components/AllTheBooks"
import fantasy from "../data/fantasy.json"

describe("AllTheBooks component", () => {
  it("renders all the books", () => {
    render(<AllTheBooks books={fantasy} />)

    const images = screen.getAllByRole("img")

    expect(images).toHaveLength(fantasy.length)
  })
})
