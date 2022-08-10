export const extractFromHTML = (html: string) => {
  const endHeading = html.search('</h1>')
  return {
    title: html.slice(4, endHeading),
    body: html.slice(endHeading).replace(/<(?:.|\n)*?>/gm, ''),
  }
}
