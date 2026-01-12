import React from 'react'

interface Props {
    children: React.ReactNode;
}

export default function Wrapper({ children }: Props & { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
}
