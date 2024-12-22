import { useEffect, useState } from "react"

const AnimatedTitle = ( { text } ) =>
{
    const [ displayText, setDisplayText ] = useState( "" )

    useEffect( () =>
    {
        let i = 0

        const typeNext = () =>
        {
            if ( i <= text.length )
            {
                let newText = text.slice( 0, i )
                setDisplayText( newText )

                i++
                setTimeout( typeNext, 110 ) // Use setTimeout instead of setInterval
            }
        }

        typeNext() // Start typing on mount

        return () => { } // no cleanup needed with this pattern
    }, [ text ] )



    return (
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {displayText}
        </h1>
    )
}

export default AnimatedTitle