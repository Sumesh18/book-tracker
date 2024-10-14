import { GlobalContext } from "../context/GlobalState"
import { useContext } from "react"
import BookCard from "../components/BookCard"

const Finished = () => {
  const { finished } = useContext(GlobalContext)
  return (
    <>
      <div className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-orange-400">
        <h1 className="text-4xl font-bold text-center text-gray-400 tracking-tight">Finished</h1>
      </div>
      {
        finished.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
            {
              finished.map((book) => (
                <BookCard key={book.id} item={book} type="finished" />
              ))
            }
          </div>
        ) : (
          <h1 className="text-3xl font-bold col-span-5 mt-2 text-center bg-gradient-to-tr from-green-400 to-yellow-600 bg-clip-text text-transparent">No books in your finished list</h1>
        )
      }
    </>
  )
}
export default Finished