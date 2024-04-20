'use client'

export default function ErrorBoundary(
    {error,reset}:{error:Error; reset:()=>void}
){
    return (
        <div>{error.message}<button className="" onClick={reset}>Try again</button></div>
    )
}