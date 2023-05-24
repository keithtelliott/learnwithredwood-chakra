interface BookmarkProps {
  size?: number
}

const Bookmark = ({ size = 24 }: BookmarkProps) => {
  return (
    <svg
      data-testid="BookmarkIcon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      // fill="none"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
    >
      <title>Bookmark icon</title>
      <path d="M16.111 19.276C16.0388 19.3482 15.9521 19.4069 15.8541 19.4478C15.5592 19.5703 15.2178 19.5021 14.9917 19.276L12.1933 16.4776L9.395 19.276C9.1689 19.5021 8.8275 19.5703 8.53256 19.4478C8.23705 19.3246 8.04397 19.0364 8.04397 18.7163L8.04397 5.28428C8.04397 4.84662 8.39768 4.49291 8.83533 4.49291L15.5513 4.49291C15.989 4.49291 16.3427 4.84662 16.3427 5.28428L16.3427 18.7163C16.3427 18.9301 16.2565 19.1304 16.111 19.276ZM9.6267 16.8056L11.6337 14.7986C11.9432 14.4891 12.4435 14.4891 12.753 14.7986L14.76 16.8056V6.07565L9.6267 6.07565L9.6267 16.8056Z" />
    </svg>
  )
}

export { Bookmark }
