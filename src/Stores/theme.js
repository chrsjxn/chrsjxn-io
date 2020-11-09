import { writable } from 'svelte/store'

export const themes = [
  {
    name: 'new',
    icon: '🌑',
  },
  {
    name: 'full',
    icon: '🌕',
  },
]

export const nextTheme = (theme) => {
  const index = themes.findIndex((check) => check.name === theme.name)
  return themes[(index + 1) % themes.length]
}

let localStorageTheme
try {
  localStorageTheme = JSON.parse(window.localStorage.getItem('theme'))
} catch (e) {
  //eslint-disable-next-line no-console
  console.log('Failed to load theme from local storage')
}

export const theme = writable(localStorageTheme || themes[0])

export const cycleTheme = () =>
  theme.update((currentTheme) => {
    const newTheme = nextTheme(currentTheme)

    // Preserve theme to local storage, if allowed
    try {
      window.localStorage.setItem('theme', JSON.stringify(newTheme))
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('Local Storage access denied. Theme not persisted.')
    }

    return newTheme
  })
