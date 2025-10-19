'use client';

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

const ThemeChanger = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, themes, setTheme } = useTheme()

    // Ensure component renders on the client to avoid hydration mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        // You can return a placeholder or null until mounted on the client
        return (
            <select>
                <option>Loading...</option>
            </select>
        )
    }

    return (
        <div>
            <select value={theme} onChange={e => setTheme(e.target.value)}>
                {themes.map(t => (
                    <option key={t} value={t}>{t.toUpperCase()}</option>
                ))}
            </select>
        </div>
    )
}

export default ThemeChanger