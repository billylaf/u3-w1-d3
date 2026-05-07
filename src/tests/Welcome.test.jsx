import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import Welcome from "../components/Welcome"

describe("Welcome component", () => {
  it("mounts correctly", () => {
    render(<Welcome />)

    const title = screen.getByText(/benvenuti in epibooks!/i)

    expect(title).toBeInTheDocument()
  })
})
