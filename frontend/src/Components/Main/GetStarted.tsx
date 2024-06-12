import { Link } from "react-router-dom"
const GetStarted = () => {
    return (
        <div>
            <Link to='/RegisterForm'>
                <button className="align-middle select-none font-semibold text-center  transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none  py-3 px-9 bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] rounded-full" type="button">
                    Get Started
                </button>
            </Link>
        </div>
    )
}

export default GetStarted
