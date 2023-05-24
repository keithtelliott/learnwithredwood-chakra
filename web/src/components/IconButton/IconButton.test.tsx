import { render, screen, fireEvent } from '@redwoodjs/testing/web'

import { IconButton } from './IconButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('IconButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <IconButton name="arrow" handleClick={() => console.log('hola')} />
      )
    }).not.toThrow()
  })

  it('is not toggled by default', () => {
    render(<IconButton name="arrow" handleClick={() => console.log('hola')} />)
    expect(screen.getByTestId('arrowNotToggled')).toBeInTheDocument()
  })

  it('is toggled', () => {
    render(
      <IconButton
        toggled={true}
        name="arrow"
        handleClick={() => console.log('hola')}
      />
    )
    expect(screen.getByTestId('arrowToggled')).toBeInTheDocument()
  })

  it('is not toggled', () => {
    render(
      <IconButton
        toggled={false}
        name="arrow"
        handleClick={() => console.log('hola')}
      />
    )
    expect(screen.getByTestId('arrowNotToggled')).toBeInTheDocument()
  })

  it('calls the callback function when clicked', () => {
    const myMockFunction = jest.fn()
    render(
      <IconButton handleClick={myMockFunction} toggled={false} name="arrow" />
    )
    const button = screen.getByTestId('arrowNotToggled')

    // button.click() // this works fine, just like the next line
    fireEvent.click(button)

    expect(myMockFunction).toHaveBeenCalled()

    expect(button).toHaveAttribute('data-testid', 'arrowToggled')

    // button.click() // this works fine, just like the next line
    fireEvent.click(button)
    expect(myMockFunction).toHaveBeenCalledTimes(2)

    expect(button).toHaveAttribute('data-testid', 'arrowNotToggled')
  })
})
