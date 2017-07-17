/**
 * Created by chj on 17-7-17.
 */
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
         this.klass=new Class(klass);
    }

    introduce(){
        return super.introduce()+`I am a Student. I am at Class ${this.klass.number}.`;
    }
}
class Class{
    constructor(number){
        this.number=number;
    }
}
class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=new Class(klass);
    }
    introduce(){
        if(this.klass){
            return super.introduce()+`I am a teacher.I teach Class ${this.klass}.`;
        }else {
            return super.introduce()+`I am a teacher.I teach no Class.`;
        }
    }
    introduceWith(student){
        if(student.klass.number===this.klass.number){
            return super.introduce()+`I am a teacher.I teach ${student.name}.`;
        }else {
            return super.introduce()+`I am a teacher.I don't teach ${student.name}.`;
        }
    }
}
let a=new Teacher("tom",18,2);
let b=new Student("jerry",18,3)
console.log(a.introduceWith(b));