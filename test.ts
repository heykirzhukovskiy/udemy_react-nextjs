let a: number = 5
let b: boolean = false

let d: string[] = ['sds', 'sas']

let e: any = 3

function test(a: string): number | string {
    return ''
}

const test2 = (a: number): number => {
    return a * 2
}

d = d.map((x: string) => x.toLowerCase())

function countCoord(coord: { lat: number; long?: number }) {}

function printIt(id: number | string) {
    if (typeof id === 'number') {
        console.log(id.toString().toUpperCase())
    } else if (typeof id === 'string') {
        console.log(id.toUpperCase())
    }
}

function getSum(a: number | number[]) {
    if (Array.isArray(a)) {
    }
}

// Next lesson (10)

type Point = {
    x: number
    y: number
}

type D3Point = Point & {
    z: number
}

interface IPoint {
    x: number
    y: number
}

interface I3DPoint extends IPoint {
    z: number
}

type stringOrNumber = string | number

const c = (point: IPoint) => {
    const d: I3DPoint = point as I3DPoint
}

function print(coord: IPoint) {}

interface ITest {
    a: number
}

interface ITest {
    b: number
}

interface IAPIInfo {
    desc: string
    isActive: boolean
}

interface IAPITag {
    name: string
    value: number
}

interface IAPI {
    userId: number
    id: number
    title: string
    info: IAPIInfo
    tags: IAPITag[]
}

let g: 'test' = 'test'

type actionType = 'up' | 'down'

function performAction(action: actionType | ComplexAction) {
    switch (action) {
        case 'up':
            return 1
        case 'down':
            return -1
    }
}

interface ComplexAction {
    s: string
}

enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT',
}

enum Decision {
    Yes = 1,
    No = calcEnum(),
}

function calcEnum(): number {
    return 2
}

function runEnum(obj: { Up: string }) {}

runEnum(Direction)

enum Test {
    A,
}

let testA = Test.A
let nameA = Test[testA]

const enum ConstEnum {
    A,
    B,
}

let f = ConstEnum.A

const u: [number, string, number] = [0, 'a', 2]
u.push(2)

console.log(u)

u.map(s => {
    switch (typeof s) {
        case 'string':
            break
        case 'number':
            break
    }
})

function logTime<T>(num: T): T {
    console.log(new Date())
    return num
}

function logTime2<T>(num: T): T {
    if (typeof num === 'string') {
        num.toLocaleUpperCase()
    }
    console.log(new Date())
    return num
}

interface MyInterface {
    transform: <A, F>(a: A) => F
}

class MyClass<T> {
    value!: T
}

const newMyClass = new MyClass<string>()

interface TimeStamp {
    stamp: number
}

function logTimeStamp<T extends TimeStamp>(num: T): T {
    console.log(num.stamp)
    return num
}
