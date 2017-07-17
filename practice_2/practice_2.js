/**
 * Created by chj on 17-7-17.
 */

/*写一个Person类，要有name，age属性，要有一个introduce方法，
 introduce方法返回一个字符串形如：

 My name is Tom. I am 21 years old.

 再写一个Student类，有name，age，klass属性(因为class是保留字，所以使用klass)。也有一个introduce方法，
 introduce方法返回一个字符串形如：

 My name is Tom. I am 21 years old. I am a Student. I am at Class 2.*/
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }

}
class Student{
    constructor(name,age,klass){
        this.name=name;
        this.age=age;
        this.klass=klass;
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old. I am a Student. I am at Class ${this.klass}.`;
    }

}
let a=new Person(5,6);
console.log(a.introduce());