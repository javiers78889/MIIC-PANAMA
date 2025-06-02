import Image from 'next/image'
import React from 'react'

export default function Logo({ size }: { size: number }) {
    return (
        <Image

            width={size * 10}
            height={size}
            className={`h-${size} w-${size * 10} object-contain`}
            src="/miic.png"
            alt="Flowers & Saints Logo"
        />
    )
}
