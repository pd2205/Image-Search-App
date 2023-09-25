import { useState } from "react"
import './SearchBar.css'

function SearchBar({ onSubmit }) {

    const [term, setTerm] = useState('Search here')

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(term)
        setTerm('')
    }

    const handleChange = (e) => {
        setTerm(e.target.value)
    }

    return (
        <div className="search-bar">
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Enter Search Term</label>
                <input
                    name="search"
                    value={term}
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default SearchBar