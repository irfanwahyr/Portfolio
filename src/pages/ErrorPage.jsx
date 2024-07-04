const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-bg-color flex flex-col items-center justify-center">
            <div className="max-w-md p-8 bg-second-bg-color shadow-lg rounded-lg">
                <h2 className="text-3xl font-bold text-main-color mb-4">Oops! Something went wrong.</h2>
                <p className="text-lg text-white mb-4">We couldn`t find the page you`re looking for.</p>
                <p className="text-lg text-white mb-4">Error code: 404</p>
                <button
                    className="px-4 py-2 bg-main-color text-white rounded-md hover:bg-opacity-80 transition duration-300"
                    onClick={() => window.history.back()}
                >
                    Go Back
                </button>
            </div>
        </div>
    )
}

export default ErrorPage;