"use client"


export default function ErrorBoundary ({error}:{error: Error}){
    return <div>
          <p>{error.message}</p>
        <p>Something seems to have gone wrong</p>
    </div>
}