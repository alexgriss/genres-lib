import { useSearch } from "./use-search"

export const Search = () => {
  const {
    tags,
    sessionKey,
    searchValue,
    handleSearchChange,
    handleSearchSubmit
  } = useSearch()

  if (!sessionKey) return null

  return (
    <form onSubmit={handleSearchSubmit}>
      <input type="text" onChange={handleSearchChange} value={searchValue} />
      <button type="submit">Find</button>
      <ul>
        {tags.filter((tag: any) => tag.name !== 'seen live').filter((tag: any, i: number) => i < 5).map((tag: any) => {
          return <li><a href={tag.url}>{tag.name}</a></li>
        })}
      </ul>
    </form>
  )
}