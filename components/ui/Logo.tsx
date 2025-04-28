import React from 'react'

export default function Logo({ size }: { size: number }) {
    return (
        <img
            className={`h-${size} w-auto`}
            src="/miic.png"
            alt="Flowers & Saints Logo"
        />
    )
}
