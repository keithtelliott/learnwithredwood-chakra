interface CloseProps {
  size?: number
}

const Close = ({ size = 24 }: CloseProps) => {
  return (
    <svg
      data-testid="CloseIcon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      // fill="none"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
    >
      <title>Close icon</title>
      <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" />
    </svg>
  )
}

export { Close }
