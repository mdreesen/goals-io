'use client'
import { useEffect, useState } from "react";


export function InstallPrompt() {
    const [isIOS, setIsIOS] = useState(false)
    const [isStandalone, setIsStandalone] = useState(false)
   
    useEffect(() => {
      setIsIOS(
        /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
      )
   
      setIsStandalone(window.matchMedia('(display-mode: standalone)').matches)
    }, [])
   
    if (isStandalone) {
      return null // Don't show install button if already installed
    }
   
    return (
      <div className="text-center tracking-tight text-gray-900 mt-6">
        <h3>Install App</h3>
        <button>Add to Home Screen</button>
        {isIOS && (
          <p className="text-center tracking-tight text-sm text-gray-900 mt-6">
            To install this app on your iOS device, tap the share button
            <span role="img" aria-label="share icon">
              ⎋
            </span>
            {"and then \"Add to Home Screen\""}
            <span role="img" aria-label="plus icon">
              ➕
            </span>.
          </p>
        )}
      </div>
    )
  }