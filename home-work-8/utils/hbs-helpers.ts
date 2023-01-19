module.exports = {
    ifeq(
      a: string,
      b: string,
      options: {fn: (context: any) => object, inverse: (context: any) => object}
    ) {
        if (a == b) {
            return options.fn(this)
        }
        return options.inverse(this)
    }

}
