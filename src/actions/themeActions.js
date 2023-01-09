export const  types = {
  TOGGLE_THEME: 'TOGGLE_THEME',
}

export function toggleTheme() {
  return {
    type: types.TOGGLE_THEME,
  }
}
