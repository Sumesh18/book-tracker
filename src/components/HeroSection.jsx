import { Link } from 'react-router-dom'

function HeroSection() {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center tracking-wide">
                A place to
                <span className="bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">{" "}track your books{" "}</span>
                and keep them
                <span className="bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">{" "}organized</span>
            </h1>
            <p className="mt-10 text-center text-lg text-neutral-400 max-w-4xl">Your TBR pile is calling — keep track of the books you’ll read, the ones you’re loving, and the ones you’ve read!</p>
            <Link to="/reading" className='mt-8 rounded-md px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-800 bg-lime-400'>Let's get started!</Link>
        </div>
    )
}

export default HeroSection