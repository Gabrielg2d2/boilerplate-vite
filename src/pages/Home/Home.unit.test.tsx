import { render, screen } from '@testing-library/react'
import { PageHome } from '.'

describe('Page - PageHome', () => {
  it('should render the page', () => {
    render(<PageHome />)
    expect(screen.getByTestId('page-home')).toBeInTheDocument()
  })

  it('should render component Home with text Ignite feed', () => {
    render(<PageHome />)

    expect(screen.getByText(/text header/i)).toBeInTheDocument()
  })
})
