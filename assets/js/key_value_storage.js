// Covers Web Storage API methods
// Modified https://gist.github.com/orion110217/ef26968000df7290de03a8f774b46b79

export default function () {
  let data = {}

  return {
    length: 0,
    clear: function () {
      data = {}
      this.length = 0
    },
    getItem: function (key) {
      return data[key] === undefined ? null : data[key]
    },
    key: function (i) {
      let ctr = 0

      for (let k in data) {
        if (ctr == i) {
          return k
        }
        else {
          ctr++
        }
      }

      return null
    },
    removeItem: function (key) {
      if (data[key] === undefined) {
        return undefined
      }

      delete data[key]
      this.length--
    },
    setItem: function (key, value) {
      // forces the value to a string
      data[key] = value + ''
      this.length++
    }
  }
}
