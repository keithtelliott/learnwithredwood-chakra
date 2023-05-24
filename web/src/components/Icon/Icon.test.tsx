import { render, screen } from '@redwoodjs/testing/web'

import { Icon } from './Icon'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Icon', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Icon name="AddList" />)
    }).not.toThrow()
  })

  it('renders the AddList icon', () => {
    render(<Icon name="AddList" />)
    const icon = screen.getByTestId('AddListIcon')
    expect(icon).toBeInTheDocument()
    expect(icon).toMatchSnapshot()
  })

  it('renders the Arrow icon', () => {
    render(<Icon name="Arrow" />)
    const icon = screen.getByTestId('ArrowIcon')
    expect(icon).toBeInTheDocument()
    expect(icon).toMatchSnapshot()
  })
  it('renders the Bookmark icon', () => {
    render(<Icon name="Bookmark" />)
    const icon = screen.getByTestId('BookmarkIcon')
    expect(icon).toBeInTheDocument()
    expect(icon).toMatchSnapshot()
  })
  it('renders the Close icon', () => {
    render(<Icon name="Close" />)
    const icon = screen.getByTestId('CloseIcon')
    expect(icon).toBeInTheDocument()
    expect(icon).toMatchSnapshot()
  })
  it('renders the Hide icon', () => {
    render(<Icon name="Hide" />)
    const icon = screen.getByTestId('HideIcon')
    expect(icon).toBeInTheDocument()
    expect(icon).toMatchSnapshot()
  })
  it('renders the Search icon', () => {
    render(<Icon name="Search" />)
    const icon = screen.getByTestId('SearchIcon')
    expect(icon).toBeInTheDocument()
    expect(icon).toMatchSnapshot()
  })
  it('renders the Show icon', () => {
    render(<Icon name="Show" />)
    const icon = screen.getByTestId('ShowIcon')
    expect(icon).toBeInTheDocument()
    expect(icon).toMatchSnapshot()
  })
  it('renders the Star icon', () => {
    render(<Icon name="Star" />)
    const icon = screen.getByTestId('StarIcon')
    expect(icon).toBeInTheDocument()
    expect(icon).toMatchSnapshot()
  })
  it('renders the WatchLater icon', () => {
    render(<Icon name="WatchLater" />)
    const icon = screen.getByTestId('WatchLaterIcon')
    expect(icon).toBeInTheDocument()
    expect(icon).toMatchSnapshot()
  })
  it('renders the size correctly', () => {
    render(<Icon name="AddList" size={64} />)
    const icon = screen.getByTestId('AddListIcon')
    expect(icon).toHaveAttribute('width', '64')
    expect(icon).toHaveAttribute('height', '64')
  })
})
