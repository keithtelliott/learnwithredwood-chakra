import { render, screen } from '@redwoodjs/testing/web'

import { HomeHeader } from './HomeHeader'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HomeHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomeHeader />)
    }).not.toThrow()
  })

  it('shows the Nav component when the menu button is clicked', () => {
    // Arrange
    const { getByRole } = render(<HomeHeader />)
    const menuButton = getByRole('button', { name: 'MENU' })

    expect(screen.queryByTestId('nav')).not.toBeInTheDocument()

    // Act
    menuButton.click()
    // Assert

    expect(screen.getByTestId('nav')).toBeInTheDocument()
    // expect(getByRole('navigation')).toBeInTheDocument()
  })
})
