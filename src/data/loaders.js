// src/data/loaders.js
const BASE = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '') // no trailing slash
const OV_PREFIX = 'cms.override.'

async function readJson(path) {
    const url = `${BASE}${path.startsWith('/') ? '' : '/'}${path}`
    const r = await fetch(url, { cache: 'no-cache' })
    if (!r.ok) throw new Error(`Failed to load ${url} (${r.status})`)
    return await r.json()
}

function getOverride(key) {
    try { return JSON.parse(localStorage.getItem(OV_PREFIX + key)) } catch { return null }
}
export function setOverride(key, data) {
    localStorage.setItem(OV_PREFIX + key, JSON.stringify(data))
}
export function clearOverride(key) {
    localStorage.removeItem(OV_PREFIX + key)
}

// Public APIs
export async function loadCV() { 
    const override = getOverride('cv');
    if (override) return override;
    
    // Load from JSON file first (primary source of truth)
    try {
        return await readJson('data/cv.json');
    } catch (error) {
        console.warn('Failed to load CV from JSON file, trying API:', error);
    }
    
    // Fallback to API if JSON fails
    try {
        const apiUrl = (import.meta.env.VITE_API_URL || 'http://localhost:3001/api').replace(/\/api$/, '');
        const response = await fetch(`${apiUrl}/api/cv`, { cache: 'no-cache' });
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.warn('Failed to load CV from API:', error);
    }
    
    return {};
}
export async function loadBrainbox() { return getOverride('brainbox') ?? await readJson('data/brainbox.json') }