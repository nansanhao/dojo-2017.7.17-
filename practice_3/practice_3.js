/**
 * Created by chj on 17-7-17.
 */
/*写一个Person类，要有name，age属性，要有一个introduce方法，
 introduce方法返回一个字符串形如：

 My name is Tom. I am 21 years old.

 再写一个Student类继承Person类，除了name，age属性，还有要有class属性。也有一个introduce方法，
 introduce方法返回一个字符串形如：

 My name is Tom. I am 21 years old. I am a Student. I am at Class 2.

 Student类的name和age属性需要调用父类的构造器完成。*/
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }
}
class Student extends Person{

    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old. I am a Student. I am at Class ${this.klass}.`;
    }

}
let stu=new Student("Tom",18,2);
console.log(stu.introduce());





