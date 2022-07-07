export const isValidMail = (email: string) => {
  return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
}

export const isFieldEmpty = (text: string) => {
  return (text === '')
}
