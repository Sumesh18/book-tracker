import { useState, useRef } from 'react'
import { Search, SearchX } from 'lucide-react'
import axios from "axios"

export default function NavBarSearch() {

    const [search, setSearch] = useState('')
    const [results, setResults] = useState([])
    const handleSearch = (e) => {
        if (e.key === "Enter") {
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&max_results=20&key=' + import.meta.env.VITE_GOOGLE_BOOKS_API_KEY)
                .then(res => setResults(res.data.items))
                .catch(err => console.log(err));
        }
    };

    const [isExpanded, setIsExpanded] = useState(false)
    const inputRef = useRef(null)

    const toggleSearch = () => {
        setIsExpanded(!isExpanded)
        if (!isExpanded) {
            setTimeout(() => inputRef.current?.focus(), 100)
        }
    }

    return (
        <div className="relative">
            <div className={`flex items-center transition-all duration-300 ease-in-out ${isExpanded ? 'w-64' : 'w-10'}`}>
                <button
                    size="icon"
                    className={`absolute right-0 z-10 transition-all duration-300 ${isExpanded ? '' : 'animate-pulse-subtle'
                        }`}
                    onClick={toggleSearch}
                >
                    {isExpanded ? (
                        <SearchX className="h-5 mr-2 w-5 animate-bounce-subtle" />
                    ) : (
                        <Search className="h-5 w-5" />
                    )}
                </button>
                <input
                    ref={inputRef}
                    type="search"
                    placeholder="Search..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    onKeyPress={handleSearch}
                    className={`pl-3 pr-10 py-2 rounded-full transition-all duration-300 ease-in-out ${isExpanded
                        ? 'w-full opacity-100 animate-expand-bounce'
                        : 'w-0 opacity-0 animate-collapse-bounce'
                        }`}
                />
            </div>
        </div>
    )
}