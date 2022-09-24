// declare array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
/* ==
return array element step by step.
== */

/* == 
Loop in js array. Use js prototype. 
It's called analog system. 
But this is core system in js looping.
Loop system follow this work. 
But this system is always hidden.  
== */
const datas = [1, 2, 3, 4];

//  call [Symbol.iterator]() method;
const iterAble = datas[Symbol.iterator](); // this return function

// output iterAble variable;
console.log(iterAble.next()); // return object. value property value 1.
console.log(iterAble.next()); // return object. value property value 1.
console.log(iterAble.next()); // return object. value property value 1.
console.log(iterAble.next()); // return object. value property value 1.
console.log(iterAble.next()); // return value undefined.


/* == 
make object are iterable.
== */

// declare an object;
const numberObj = {};

// make object are iterable;
numberObj[Symbol.iterator] = function () {
    let initialValue = 0;
    let done = false;
    return {
        next() {
            initialValue += 10;
            if (initialValue === 100) {
                done = true;
            }
            return {
                value: initialValue,
                done: done
            }
        }
    }
}

for (let num of numberObj) {
    console.log(num);
}


