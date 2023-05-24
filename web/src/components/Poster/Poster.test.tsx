import { render, screen } from '@redwoodjs/testing/web'

import { Poster } from './Poster'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Poster', () => {
  const alt = 'Avatar image'
  const avatarImage = './images/movie-pic-avatar.jpg'

  it('renders successfully', () => {
    expect(() => {
      render(<Poster alt={alt} src={avatarImage} />)
    }).not.toThrow()
  })

  it('shows the image', async () => {
    // 1.  setup the test
    render(<Poster alt={alt} src={avatarImage} />)

    // 2.  make an assertion
    expect(await screen.findByRole('img')).toHaveAttribute('src', avatarImage)

    // 3.  clean up
  })

  it('renders the alt text', async () => {
    render(<Poster alt={alt} src={avatarImage} />)
    expect(await screen.findByRole('img')).toHaveAttribute('alt', alt)
  })

  it('renders a large size', async () => {
    // KTE, 4/21/2023:  I'll skip the image size CSS class test.  I'm using Chakra
    // instead of Tailwind.  Chakra does not show css classes in the same fashion
    // as Tailwind.  So, the css class inspection is not practical with Chakra.
    // I'll simply confirm that it does not throw...
    expect(() =>
      render(<Poster alt={alt} src={avatarImage} size="medium" />)
    ).not.toThrow()
    // expect(await screen.findByRole('img')).toHaveClass('dunno')
  })

  it('renders the heading', async () => {
    const heading = 'My Heading'

    render(<Poster alt={alt} src={avatarImage} heading={heading} />)
    expect(await screen.findByText(heading)).toBeInTheDocument()
  })

  it('renders the subHeading', async () => {
    const subHeading = 'My Sub Heading'

    render(<Poster alt={alt} src={avatarImage} subHeading={subHeading} />)
    expect(await screen.findByText(subHeading)).toBeInTheDocument()
  })
})
