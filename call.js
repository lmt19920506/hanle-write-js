/**
     * ctx 函数执行上下文this
     * args 参数列表
    */
   Function.prototype.myCall = function(ctx, ...args) {
    if (!ctx) {
      ctx = typeof window !== 'undefined' ? window : global
    }
    // 暴露处理 ctx有可能传非对象
    ctx = Object(ctx)
    const fnName = Symbol('key')
    ctx[fnName] = this
    const result = ctx[fnName](...args)
    delete ctx[fnName]
    return result
  }
  let Person = {
    name: 'tom',
    sayName(hobit) {
      console.log('name---', this.name, hobit)
    }
  }
  let Person2 = {
    name: 'tom1'
  }
  Person.sayName.myCall(Person2, 'baseball')
  let fn = function(name, sex) {
    console.log(this, name, sex)
  }
  fn.myCall('', 'lucy', '女')
  fn.myCall({a: 1, b: 2}, 'harry', 'boy')