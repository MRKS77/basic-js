export default class VigenereCipheringMachine {
  constructor(directMode = true) {
    this.directMode = directMode
  }
  encrypt(message, key) {
    const res = this.crypt(message, key, (ABC, idxMes, idxKey) => ABC[(idxMes + idxKey) % ABC.length])
    return this.directMode ? res : [...res].reverse().join('')
  }
  decrypt(message, key) {
    const res = this.crypt(message, key, (ABC, idxMes, idxKey) => ABC[(ABC.length + idxMes - idxKey) % ABC.length])
    return this.directMode ? res : [...res].reverse().join('')
  }
  crypt(message, key, cb) {
    if (message == undefined || key == undefined) {
      throw new Error('Incorrect arguments!')
    }
    [message, key] = [message.toUpperCase(), key.toUpperCase()]
    const ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const keyUpd = [...message].filter(x => x.match(/[A-Z]/)).map((_, idx) => key[idx % key.length])
    return [...message].map((x, idx) => {
      if (!x.match(/[A-Z]/)) return x
      const idxMes = ABC.indexOf(x)
      const idxKey = ABC.indexOf(keyUpd[0])
      keyUpd.shift()
      return cb(ABC, idxMes, idxKey)
    }).join('')
  }
}