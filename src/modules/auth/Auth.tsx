import { useAuth } from "./use-auth"

export const Auth = () => {
  const {
    token,
    sessionKey,
    user,
    handleAuthorize
  } = useAuth()

  return (
    <div>
      {user}
      {!token && !sessionKey && <button onClick={handleAuthorize}>Authorize</button>}
    </div>
  )
}