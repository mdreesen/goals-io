"use client"

import React, { useEffect, useState } from 'react';
import useNetwork from '@/lib/useNetwork';
import Banner_Network from '../banners/Banner_Network';

const NetworkStatusProvider = ({ children }: { children: React.ReactNode }) => {
    const isOnline = useNetwork();

    const [isOffline, setIsOffline] = useState(false);

    useEffect(() => {
        if (!isOnline) {
            console.log("Offline now");
            setIsOffline(true)
        } else {
            console.log("Online now");
        }
    }, [isOnline]);

    const banner = isOffline && (
        <Banner_Network />
    )

    return (
        <>
            {banner}
            {children}
        </>
    );
}

export default NetworkStatusProvider;