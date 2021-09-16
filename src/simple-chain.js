export default {
  data: [],
  getLength() {
    return this.data.length
  },
  addLink(value) {
    value = String(value)
    const res = [...this.data, `( ${value && value + ' '})`]
    return { ...this, data: res }
  },
  removeLink(position) {
    if (position < 1 || position > this.data.length || typeof position !== 'number') {
      throw new Error("You can't remove incorrect link!")
    }
    let res = [...this.data]
    res.splice(position - 1, 1)
    return { ...this, data: res }
  },
  reverseChain() {
    const res = [...this.data].reverse()
    return { ...this, data: res }
  },
  finishChain() {
    return this.data.join('~~')
  }
}