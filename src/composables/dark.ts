export const isDark = useDark({
  valueDark: 'halloween',
  attribute: 'data-theme',
  valueLight: 'bumblebee',
  onChanged(isItDark) {
    const theHTML = document.querySelector('html')
    if (!theHTML)
      return
    if (!isItDark) {
      theHTML.dataset.theme = this.valueLight
      theHTML.classList.remove('dark')
      theHTML.classList.add('light')
    }
    else {
      theHTML.dataset.theme = this.valueDark
      theHTML.classList.add('dark')
      theHTML.classList.remove('light')
    }
  },
})
export const toggleDark = useToggle(isDark)
export const preferredDark = usePreferredDark()
