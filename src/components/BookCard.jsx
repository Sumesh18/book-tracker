import { IoBookSharp } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { CiBookmarkCheck } from "react-icons/ci";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { motion } from 'framer-motion';

const BookCard = ({ item, type }) => {
    const { 
        addBookToReading,
        addBookToFinished,
        addBookToWillRead,
        removeBookFromReading, removeBookFromFinished, removeBookFromWillRead,
        moveBookToFinished,
        moveBookToWillRead, moveBookToReading
    } = useContext(GlobalContext);

    const bookId = item.id;
    const placeholder_image_url = "https://via.placeholder.com/128x192.png?text=No+Image+Available";
    const { title, authors, imageLinks } = item.volumeInfo;

    return (
        <motion.div
            className="m-2 p-2 border-2 border-yellow-500 rounded-lg relative hover:shadow-xl shadow-lg"
            style={{ maxWidth: '200px', height: 'auto' }}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                className="relative h-48 sm:h-56 md:h-64 lg:h-72"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}  // Smooth fade-in for the image
            >
                <img
                    src={imageLinks ? imageLinks.thumbnail : placeholder_image_url}
                    alt={title || "Unknown Title"}
                    className="w-full h-full object-cover rounded-lg mb-2"
                />
            </motion.div>

            <h2 className="text-md text-sky-200 mb-2 truncate" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {title || "Unknown Title"}
            </h2>
            <h3 className="text-sm text-gray-400 truncate" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {authors?.join(", ") || "Unknown Author"}
            </h3>

            <motion.div
                className="mt-2 p-2 flex justify-around items-center bg-neutral-100 rounded-b-lg size-lg"
                initial={{ opacity: 0, y: 20 }}  // Slide up controls
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                {type === 'reading' && (
                    <>
                        <motion.div whileTap={{ scale: 0.9 }} className="cursor-pointer text-green-500">
                            <TiTick onClick={() => moveBookToFinished(item)} />
                        </motion.div>
                        <motion.div whileTap={{ scale: 0.9 }} className="cursor-pointer text-blue-500">
                            <CiBookmarkCheck onClick={() => moveBookToWillRead(item)} />
                        </motion.div>
                        <motion.div whileTap={{ scale: 0.9 }} className="cursor-pointer text-red-500">
                            <RxCross2 onClick={() => removeBookFromReading(bookId)} />
                        </motion.div>
                    </>
                )}

                {type === 'finished' && (
                    <>
                        <motion.div whileTap={{ scale: 0.9 }} className="cursor-pointer text-yellow-300">
                            <IoBookSharp onClick={() => moveBookToReading(item)} />
                        </motion.div>
                        <motion.div whileTap={{ scale: 0.9 }} className="cursor-pointer text-blue-500">
                            <CiBookmarkCheck onClick={() => moveBookToWillRead(item)} />
                        </motion.div>
                        <motion.div whileTap={{ scale: 0.9 }} className="cursor-pointer text-red-500">
                            <RxCross2 onClick={() => removeBookFromFinished(bookId)} />
                        </motion.div>
                    </>
                )}

                {type === 'willRead' && (
                    <>
                        <motion.div whileTap={{ scale: 0.9 }} className="cursor-pointer text-yellow-300">
                            <IoBookSharp onClick={() => moveBookToReading(item)} />
                        </motion.div>
                        <motion.div whileTap={{ scale: 0.9 }} className="cursor-pointer text-green-500">
                            <TiTick onClick={() => moveBookToFinished(item)} />
                        </motion.div>
                        <motion.div whileTap={{ scale: 0.9 }} className="cursor-pointer text-red-500">
                            <RxCross2 onClick={() => removeBookFromWillRead(bookId)} />
                        </motion.div>
                    </>
                )}
            </motion.div>
        </motion.div>
    );
};

export default BookCard;