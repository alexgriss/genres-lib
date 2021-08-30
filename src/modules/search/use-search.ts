import { ChangeEvent, FormEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { searchTagsAction } from "../../redux/actions";
import { artistTagsSelector, sessionKeySelector } from "../../redux/selectors";

export const useSearch = () => {
  const dispatch = useDispatch();
  const sessionKey = useSelector(sessionKeySelector)
  const tags = useSelector(artistTagsSelector)
  const [searchValue, setSearchValue] = useState('')

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(searchTagsAction({
      searchValue
    }))
  }

  return {
    tags,
    sessionKey,
    searchValue,
    handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => setSearchValue(event.target.value),
    handleSearchSubmit
  }
}