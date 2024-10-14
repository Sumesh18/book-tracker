import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import BookCard from '../components/BookCard'

const WillRead = () => {
  const { willRead } = useContext(GlobalContext)
  return (
    <>
      <div className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-orange-400">
        <h1 className="text-4xl font-bold text-center text-gray-400 tracking-tight">Will Read</h1>
      </div>
      {
        willRead.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
            {
              willRead.map((book) => (
                <BookCard key={book.id} item={book} type="willRead" />
              ))
            }
          </div>
        ) : (
          <h1 className="text-3xl font-bold mt-2 text-center bg-gradient-to-tr from-sky-400 to-green-600 bg-clip-text text-transparent">No books in your "Will Read" list</h1>
        )
      }
    </>
  )
}

export default WillRead