const Button = ( { children, className = "", ...props } ) =>
{
    return (
        <button
            className={`inline-flex items-center justify-center px-4 py-2 bg-link text-white rounded-2xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${ className }`}
            {...props}
        >
            {children}
        </button>
    )
}

export { Button }