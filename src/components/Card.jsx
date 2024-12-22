// components/ui/card.jsx
export function Card( { children, className = "" } )
{
    return <div className={`bg-secondary  rounded-2xl shadow p-4 ${ className }`}>{children}</div>
}

export function CardContent( { children, className = "" } )
{
    return <div className={`space-y-2 ${ className }`}>{children}</div>
}
