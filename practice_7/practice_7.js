/**
 * Created by chj on 17-7-17.
 * 写一个Person类，要有name，age属性，要有一个introduce方法，
 introduce方法返回一个字符串形如：

 My name is Tom. I am 21 years old.

 再写一个Student类继承Person类，除了name，age属性，还有要有class属性。也有一个introduce方法，
 introduce方法返回一个字符串形如：

 My name is Tom. I am 21 years old. I am a Student. I am at Class 2.

 再写一个Teacher类继承Person类，除了name，age属性，也有class属性。也有一个introduce方法，
 introduce方法返回一个字符串形如：

 My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2.

 如果class为空，就会返回

 My name is Tom. I am 21 years old. I am a Teacher. I teach No Class.

 所有Person的子类的这段文字

 My name is Tom. I am 21 years old.

 都应该调用Person的introduce方法来获得*/
class Person{
    constructor(name,age){
        this.name=name.toString();
        this.age=age;
    }
    introduce(){
        return `My name is ${this.name}.I am ${this.age} years old.` ;
    }
}
class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }
    introduce(){
        return super.introduce()+`I am a Student. I am at Class ${this.klass}.`;
    }
}
class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }
    introduce(){
        if(this.klass){
            return super.introduce()+`I am a teacher.I teach Class ${this.klass}.`;
        }else {
            return super.introduce()+`I am a teacher.I teach no Class.`;
        }
    }
}
let tea=new Teacher("Tom",18);
console.log(tea.introduce());
