"use client";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SiteLoader from '@/components/SiteLoader';
import React, { useEffect, useState } from 'react'

interface Props {
    children: React.ReactNode;
}

export default function Wrapper({ children }: Props & { children: React.ReactNode }) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 1000); // ⏱️ 1 second

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Navbar />
            <SiteLoader visible={visible}  />
            {children}
            <Footer />
        </>
    )
}
