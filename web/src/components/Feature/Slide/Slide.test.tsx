import { render, screen } from '@redwoodjs/testing/web'

import { Slide } from './Slide'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Slide', () => {
  const image =
    'https://www.themoviedb.org/t/p/original/lcTuggU70y6pt6x13Rv1Ffjs93K.jpg'
  const title = 'Money Heist: Korea - Joint Economic Area'
  const percentage = 89

  it('renders successfully', () => {
    expect(() => {
      render(
        <Slide
          image={image}
          title="Money Heist: Korea - Joint Economic Area "
          percentage={89}
        />
      )
    }).not.toThrow()
  })

  it('shows the bookmark icon', () => {
    render(
      <Slide
        image={image}
        title="Money Heist: Korea - Joint Economic Area "
        percentage={89}
      />
    )
    expect(screen.getByTestId('BookmarkIcon')).toBeInTheDocument()
  })

  it('shows the title', () => {
    render(<Slide image={image} title={title} percentage={89} />)
    expect(screen.getByText(title)).toBeInTheDocument()
  })

  it('shows the percentage', () => {
    render(
      <Slide
        image="https://www.themoviedb.org/t/p/original/lcTuggU70y6pt6x13Rv1Ffjs93K.jpg"
        title={title}
        percentage={percentage}
      />
    )
    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(percentage)).toBeInTheDocument()
  })
})
