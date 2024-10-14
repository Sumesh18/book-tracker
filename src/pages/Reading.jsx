import { GlobalContext } from "../context/GlobalState"
import { useContext } from "react"
import BookCard from "../components/BookCard"
const Reading = () => {
  const { reading } = useContext(GlobalContext)
  return (
    <>
      <div className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-orange-400">
        <h1 className="text-4xl font-bold text-center text-gray-400 tracking-tight">Currently Reading</h1>
      </div>
      {
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
          {reading.length > 0 ? (
            reading.map((book) => (
              <BookCard key={book.id} item={book} type="reading" />
            ))
          ) : (
            <h1 className="text-3xl font-bold col-span-5 text-center bg-gradient-to-tr from-amber-300 to-green-400 bg-clip-text text-transparent">No books in your Currently Reading list</h1>
          )}
        </div>
      }
    </>
  )
}

export default Reading