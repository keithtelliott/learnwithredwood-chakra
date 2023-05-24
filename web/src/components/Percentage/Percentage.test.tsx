import { color } from '@chakra-ui/react'

import { render, screen } from '@redwoodjs/testing/web'

import { Percentage } from './Percentage'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Percentage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Percentage percentage={0} />)
    }).not.toThrow()
  })

  it('displays the ring', () => {
    render(<Percentage percentage={0} showRing={true} />)
    expect(screen.getByTestId('ring')).toBeInTheDocument()
  })
  it('hides the ring', () => {
    render(<Percentage percentage={0} showRing={false} />)
    expect(screen.queryByTestId('ring')).not.toBeInTheDocument()
  })
  it('renders the correct ring length for a low percentage', () => {
    render(<Percentage percentage={30} showRing={true} />)
    expect(screen.getByTestId('percentageRing')).toHaveAttribute(
      'stroke-dasharray',
      'calc(628.32 * 30 / 100) 628.32'
    )
    expect(screen.getByTestId('percentageRing')).toMatchSnapshot()
  })

  it('renders the correct ring length for a mid percentage', () => {
    render(<Percentage percentage={50} showRing={true} />)
    expect(screen.getByTestId('percentageRing')).toHaveAttribute(
      'stroke-dasharray',
      'calc(628.32 * 50 / 100) 628.32'
    )
    expect(screen.getByTestId('percentageRing')).toMatchSnapshot()
  })
  it('renders the correct ring length for a high percentage', () => {
    render(<Percentage percentage={89} showRing={true} />)
    expect(screen.getByTestId('percentageRing')).toHaveAttribute(
      'stroke-dasharray',
      'calc(628.32 * 89 / 100) 628.32'
    )
    expect(screen.getByTestId('percentageRing')).toMatchSnapshot()
  })
  it('renders the numeric percentage', () => {
    render(<Percentage percentage={89} showRing={true} />)
    expect(screen.getByText('89')).toBeInTheDocument()
  })

  it('renders a small size', () => {
    render(<Percentage percentage={89} showRing={true} size="small" />)
    expect(screen.getByTestId('ring')).toHaveAttribute('height', '110')
  })
  it('renders a medium size', () => {
    render(<Percentage percentage={89} showRing={true} size="medium" />)
    expect(screen.getByTestId('ring')).toHaveAttribute('height', '300')
  })
  it('renders a large size', () => {
    render(<Percentage percentage={89} showRing={true} size="large" />)
    expect(screen.queryByTestId('ring')).not.toBeInTheDocument()
  })
  it('renders a xLarge size', () => {
    render(<Percentage percentage={89} showRing={true} size="xlarge" />)
    expect(screen.queryByTestId('ring')).not.toBeInTheDocument()
  })
  it('renders a low percentage with the correct color', () => {
    render(<Percentage percentage={10} showRing={true} size="medium" />)
    expect(screen.getByTestId('percentageRing')).toHaveAttribute(
      'stroke',
      'red'
    )
  })
  it('renders a mid percentage with the correct color', () => {
    render(<Percentage percentage={50} showRing={true} size="medium" />)
    expect(screen.getByTestId('percentageRing')).toHaveAttribute(
      'stroke',
      'orange'
    )
  })
  it('renders a high percentage with the correct color', () => {
    render(<Percentage percentage={90} showRing={true} size="medium" />)
    expect(screen.getByTestId('percentageRing')).toHaveAttribute(
      'stroke',
      'green'
    )
  })
})
