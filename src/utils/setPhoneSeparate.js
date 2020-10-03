export function setPhoneSeparate(phone) {
  phone = phone.toString()

  let count = 0
  let newPhone = ''

  for (let i = phone.length - 1; i >= 0; i--) {
    count++
    newPhone += phone[i]

    if (i >= 4) {
      if (count >= 3) {
        newPhone += '-'
        count = 0
      }
    }
  }

  newPhone = newPhone.split('').reverse().join('')

  if (newPhone[0] === '-') newPhone = `0${newPhone.substr(1)}`

  return newPhone
}
