console.log('hello ts')

// 数据类型
let name: string = "jack"

console.info(name)

let age: number = 18
console.info(age)

let a: null = null
let b: undefined = undefined
let c: boolean = false
let d: symbol = Symbol()
console.info(a)
console.info(b)
console.info(c)
console.info(d)

// 数组
// 2中定义方式都可以
let numbers: number[] = [1, 3, 5]
let string: Array<string> = ["a", "b", "c"]
console.info(numbers)
console.info(string)

// 联合类型：支持多种指定类型的数组
let obj: (string|number|null|undefined|boolean|symbol)[] = [a,b,c,d]
console.info(obj)

// 简化类型，设置别名
type myArray = (string|number|null|undefined|boolean|symbol)[]
let object: myArray = [a,b,c,d]
console.info(object)

type cusType = (myArray)[]
let object2: cusType = [object]
console.info(object2)


// 函数定义,2种方式
function add(num1: number, num2: number): number {
  return num1 + num2
}

const add2 = (num1: number, num2: number): number => {
  return num1 + num2
}
// 表达式使用场景
const add3: (num1: number, num2: number) => number = (num1, num2) => {
  return num1 + num2
}

console.info(add(1,2))
console.info(add2(1,2))
console.info(add3(1,2))

// void 类型函数
function run(name: string): void {
  console.info(name)
}

run("jack")

// 非必传参数,只能放在参数列表的末尾
function getParam(start?: string, end?: string): void {
  console.info(start)
  console.info(end)
}
getParam("a")

// 对象类型
let person:
  {
    name: string;
    age: number;
    call(): void;
    call2(name: string): void
    call3(age: number): void
    call4(flag: boolean): void
  } =
  {
  name: "jack",
  age: 19,
  call() {
    console.info("call")
  },
  call2(name) {
    console.info("call2: ", name)
  },
  call3(age) {
    console.info("call3: ", age)
  },
  call4(flag) {
    console.info("call4: ", flag)
  }
}
// 调用
person.call()
person.call2("tom")
person.call3(11)
person.call4(false)


// 接口interface
interface IPerson {
  id: number,
  name: string,
  callPhone(): void
}

let CustomPerson: IPerson = {
  id: 1,
  name: "tiger",
  callPhone() {
    console.info("id is", this.id, "; name is", this.name, "。")
  }
}

CustomPerson.callPhone()


// 接口继承 关键字 extends
interface ThirdPerson extends IPerson {
  phone: string,
  email: string,
  userNumber: string,

  // method
  getUserNumber(no?: string): string
}

let Employe: ThirdPerson = {
  email: "tiger@hotmail.com",
  userNumber: "WB520289",
  id: 123,
  name: "李四",
  phone: "16619794106",
  getUserNumber(no) {
    if (no !== null && no !== undefined && no.length > 0) {
      return no
    }
    return this.userNumber
  },
  callPhone() {
    console.info("callPhone", Employe.phone)
  }
}
console.info("start")
console.info(Employe)
console.info(Employe.email)
console.info(Employe.getUserNumber("WB82712"))
console.info(Employe.callPhone())
console.info("end")

// 枚举类型
enum Status {SUBMIT, RUNNING, SUCCESS, FAIL}

console.info(Status)

// 字面量类型
let abc: "hello" = "world" as "hello"
function select(SelectValue: 1 | 2 | 3 | 4) {
  console.info(SelectValue)
}

console.info(abc)
select(1)
select(2)
select(3)
select(4)
// select(5) // 报错

// any 类型， 任意类型, 是个 object 类型
let objAny: any = {x: 1}
console.info(objAny)

// typeof：获取数据的类型
console.info(typeof(objAny))
console.info(typeof "")

let v = 111
function formatPoint(point: typeof v) {
  console.info(v)
}
formatPoint(2222)


// class：类
class Animal {
  // 属性
  name: string
  age: number

  // 构造函数
  constructor(name: string, age: number) {
    this.name=  name;
    this.age = age;
  }

  // 方法
  eat(a:Animal): void {
    let typeValue = Object.getPrototypeOf(a).constructor
    console.info(typeValue)
    console.log("the", typeValue, "eat")
    console.log(this.name)
    console.log(this.age)
  }
  run(): void {}
  play(): void {}
}
class Cat extends Animal {

  constructor(name: string, age: number) {
    super(name, age)
  }
}
let animal = new Animal("pike", 10)
let typeValueAnimal = Object.getPrototypeOf(animal).constructor
console.info(typeValueAnimal)
console.info(typeof animal)
console.info(animal.eat(animal))

let cat = new Cat("miao", 1000)
console.info(cat)
let typeValueCat = Object.getPrototypeOf(cat).constructor
console.info(typeValueCat)
console.info(typeof typeValueCat)
console.info(cat.eat(cat))


// 接口和实现
interface UserService {
  name: string
  login(): void
}

class UserServiceImpl implements UserService {
  name = "jack"
  login() {
    console.log("login")
  }
}

let userService = new UserServiceImpl()
console.log(userService.login())


// readonly ： 变量修饰符
class A {
  readonly name: string = "zhangsan"

  constructor(name: string) {
    this.name = name;
  }
}
console.log(new A("lisi").name)

// 交叉类型，继承多个接口
interface AA {name: string}
interface BB {age: number}
// type AndType = AA & BB
let CC: AA & BB = {
  name: "yxh",
  age: 19
}

console.log(CC)

// 泛型
// any： 不推荐使用，不安全
function id(val: any): any {
  return val
}
console.info(id("哈哈😂"))
// 泛型： 关键字：Type

function me<Type>(val: Type): Type {
  return val
}

console.log(me<number>(10))
console.log(me<string>("zifuchuan"))
console.log(me<boolean>(false))

console.log(me(10))
console.log(me("zifuchuan"))
console.log(me(false))

// 泛型约束
function test<Type>(val: Type[]): Type[] {
  val.length
  console.log(val.length)
  return val
}
console.info(test([1]))

// 泛型约束， extends
interface ILength {length: number}
// 有 length 属性的就可以
function test2<Type extends ILength>(val: Type): Type {
  val.length
  return val
}
test([1])

// 多个泛型变量
function test3<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key]
}
let admin = {name: "jack", age: 10}
let nameVal = test3(admin, "name")
console.log(nameVal)
let ageVal = test3(admin, "age")
console.log(ageVal)

// 接口泛型
interface IdFun<Type> {
  id:(value: Type) => Type
  ids:() => Type[]
}

let obFun: IdFun<number> = {
  id(value) {
    return value
  },
  ids() {
    return [1, 3, 5]
  }
}
console.info(obFun.id(123))
console.info(obFun.ids())

//
// import fetch from 'node-fetch'
// //
// // const fetch = require('node-fetch');
// async function fetchData2(url: string): Promise<Response> {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// }
//
// // 使用示例
// fetchData2('https://www.baidu.com').then(response => {
//   return response.json();
// }).then(data => {
//   console.log(data);
// }).catch(error => {
//   console.error('Error fetching data:', error);
// });


import axios from 'axios';

async function fetchData(url: string): Promise<any> {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// 使用示例
fetchData('https://www.baidu.com').then(data => {
  console.log("fetchData", data);
}).catch(error => {
  console.error('Error fetching data:', error);
});