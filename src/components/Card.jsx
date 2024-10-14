import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { IoBookmarkSharp } from "react-icons/io5";
import { IoBookSharp } from "react-icons/io5";
import { TiTick } from "react-icons/ti";

const Acard = ({ data }) => {
    const books = data || []
    const { addBookToReading, reading, addBookToFinished, finished, addBookToWillRead, willRead } = useContext(GlobalContext);
    return (
        <div className="card-container">
            {books.length > 0 ? (
                books.map((item) => {
                    const { title, authors, imageLinks } = item.volumeInfo;
                    const bookId = item.id;

                    const isInReading = reading.some(book => book.id === bookId);
                    const isInFinished = finished.some(book => book.id === bookId);
                    const isInWillRead = willRead.some(book => book.id === bookId);

                    const placeholder_image_url = "https://via.placeholder.com/128x192.png?text=No+Image+Available";

                    return (
                        <div key={bookId} className="card hover:shadow-xl shadow-lg transition-transform duration-300 hover:scale-105">
                            <div className="image-container">
                                <img
                                    src={imageLinks ? imageLinks.thumbnail : placeholder_image_url}
                                    alt={title}
                                    className="card-img"
                                    style={{ pointerEvents: 'none' }}
                                />
                            <div className="icon-container">
                                <IoBookSharp
                                    onClick={() => addBookToReading(item)}
                                    className={`text-yellow-300 cursor-pointer ${isInReading ? 'disabled-icon' : ''}`}
                                />

                                <TiTick
                                    onClick={() => addBookToFinished(item)}
                                    className={`text-green-500 cursor-pointer ${isInFinished ? 'disabled-icon' : ''}`}
                                />

                                <IoBookmarkSharp
                                    onClick={() => addBookToWillRead(item)}
                                    className={`text-sky-500 cursor-pointer ${isInWillRead ? 'disabled-icon' : ''}`}
                                />
                            </div>
                            <div className="overlay">
                                <h2 className="card-title">{title}</h2>
                                <p className="card-authors">{authors ? authors.join(", ") : "Unknown Author"}</p>
                            </div>
                            </div>
                        </div>
                    );
                })
            ) : (
                <></>
            )}
        </div>
    )
}
export default Acard