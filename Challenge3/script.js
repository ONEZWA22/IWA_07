const leoName = 'Leo'
const leoSurname = 'Musvaire   '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '(-4582.21000111)'

const divider = '----------------------------------'

// Only change below this line

const owed = ((-1 * parseFloat(leoBalance))+(-1 * parseFloat(sarahBalance))).toFixed(2)
const leo = `${leoName} ${leoSurname} (Owed: R ${(-1 * parseFloat(leoBalance)).toFixed(2)})\n`
const sarah = `${sarahName}${sarahSurname} (Owed: R${(-1 * parseFloat(sarahBalance)).toFixed(2)})\n`
const total = "Total amount owed: R"

const result = ` ${leo} ${sarah}${divider}\n   ${total}${owed}\n${divider} `

console.log(result)