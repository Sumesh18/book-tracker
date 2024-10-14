import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { Menu, X, Search, SearchX } from 'lucide-react'
import { useState, useRef } from 'react'
import axios from "axios"
import Acard from './Card'

const Navbar = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

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
        <>
            <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-orange-400">
                <div className="containerone px-4 mx-auto relative text-sm">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center flex-shrink-0">
                            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
                            <span className='text-xl tracking-tight'>Book Tracker</span>
                        </div>
                        <ul className='hidden mr-24 lg:flex space-x-16'>
                            <li><Link to="/reading">Currently Reading</Link></li>
                            <li><Link to="/finished">Finished</Link></li>
                            <li><Link to="/willRead">Will Read</Link></li>
                        </ul>
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
                        <div className="lg:hidden md:flex flex-col justify-end">
                            <button onClick={toggleMobileMenu}>
                                {mobileMenuOpen ? <X /> : <Menu />}
                            </button>
                        </div>
                    </div>
                    {
                        mobileMenuOpen && (
                            <div className="lg:hidden fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center">
                                <ul className='flex flex-col space-y-4'>
                                    <li className='py-4'><Link to="/reading">Currently Reading</Link></li>
                                    <li className='py-4'><Link to="/finished">Finished</Link></li>
                                    <li className='py-4'><Link to="/willRead">Will Read</Link></li>
                                </ul>
                            </div>
                        )
                    }
                </div>
            </nav>
            <Acard key={results.id} data={results} />
        </>
    )
}

export default Navbar