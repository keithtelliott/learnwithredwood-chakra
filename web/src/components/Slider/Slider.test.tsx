import { render, screen } from '@redwoodjs/testing/web'

import { Slider } from './Slider'
import { slides } from './Slider.mocks'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Slider', () => {
  const label = 'Most Popular'
  const slideSize = 'small'
  const viewAllLink = '/movies'
  it('renders successfully', () => {
    expect(() => {
      render(
        <Slider
          label={label}
          slideSize={slideSize}
          viewAllLink={viewAllLink}
          slides={slides}
        />
      )
    }).not.toThrow()
  })

  it('Displays the correct label', () => {
    render(
      <Slider
        label={label}
        slideSize={slideSize}
        viewAllLink={viewAllLink}
        slides={slides}
      />
    )
    expect(screen.getByText(label)).toBeInTheDocument()
  })

  it('Does not display the view all link', () => {
    render(<Slider label={label} slideSize={slideSize} slides={slides} />)
    expect(screen.queryByText('View All')).not.toBeInTheDocument()
  })

  it('Does display the view all link', () => {
    render(
      <Slider
        label={label}
        slideSize={slideSize}
        slides={slides}
        viewAllLink={viewAllLink}
      />
    )
    expect(screen.getByText('View All')).toBeInTheDocument()
  })

  it('Links out to the correct place', () => {
    render(
      <Slider
        label={label}
        slideSize={slideSize}
        slides={slides}
        viewAllLink={viewAllLink}
      />
    )
    expect(screen.getByText('View All')).toHaveAttribute('href', viewAllLink)
  })

  it('Displays all the slides', () => {
    render(<Slider label="Testing" slides={slides} />)
    slides.forEach((slide) => {
      expect(screen.getByAltText(slide.alt)).toBeInTheDocument()
    })
  })

  it('Displays the correct number of images', () => {
    render(<Slider label="Testing" slides={slides} />)
    expect(document.querySelectorAll('img').length).toBe(slides.length)
  })
})
