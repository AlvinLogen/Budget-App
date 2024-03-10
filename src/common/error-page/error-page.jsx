import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div id="w-full px-16 md:px-0 h-screen flex items-center justify-center bg-grey-bg-500">
            <div className="flex flex-col items-center justify-center rounded-lg bg-white-font-100 p-8 text-center shadow-xl">
                <h1 className="mb-4 text-4xl font-bold">Oops!, Something went wrong.</h1>
                <p className="text-grey-bg-500">Sorry, an unexpected error has occurred.</p>
                <p>
                    <i className="text-red-error-200">Error Message: {error.statusText}</i>
                </p>
                <Link to="/" className="mt-4 inline-block rounded bg-blue-bg-900 px-4 font-semibold text-white-font-100 hover:bg-blue-bg-700">Return Home</Link>
            </div>
        </div>
    )
}

export default ErrorPage;