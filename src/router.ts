const location = window.location.pathname

export function pageIs(path: string): () => boolean {
    return () => location.substring(1) === path
}

export function redirect(path: string): void {
    window.history.pushState(null, null, path)
    window.location.reload()
}

export function replace(path: string): void {
    window.location.replace(path)
}