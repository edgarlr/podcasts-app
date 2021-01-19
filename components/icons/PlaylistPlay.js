const PlaylistPlay = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      fill="currentColor"
      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M4 10h12v2H4zm0-4h12v2H4zm0 8h8v2H4zm10 0v6l5-3z" />
    </svg>
  )
}

export default PlaylistPlay