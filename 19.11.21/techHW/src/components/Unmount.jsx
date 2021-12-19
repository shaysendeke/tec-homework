import React, { useEffect } from 'react'

export default function Unmount() {

    useEffect(() => () =>
    console.log('unmounted'), [])

    return (
        <div>
            <h1>APP Has Mounted</h1>
        </div>
    )
}
