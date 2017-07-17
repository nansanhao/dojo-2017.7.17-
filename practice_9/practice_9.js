/**
 * Created by chj on 17-7-17.
 */
class Person{
    constructor(name,age,id){
        this.name=name;
        this.age=age;
        this.id=id;
    }
    introduce(){
        return `My name is ${this.name}.I am ${this.age} years old.` ;
    }
}
class Student extends Person{
    constructor(name,age,id,klass){
        super(name,age,id);
        this.klass=klass;
    }

    introduce(){
        if(this.id===this.klass.leader){
            return super.introduce()+`I am a Student. I am leader of Class ${this.klass.number}.`;
        }else{
            return super.introduce()+`I am a Student. I am at Class ${this.klass.number}.`;
        }
    }
}

class Class{
    constructor(number){
        this.number=number;
    }
    assignLeader(student){
        student.klass.leader=student.id;

    }
}
class Teacher extends Person{
    constructor(name,age,id,klass){
        super(name,age,id);
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
let class2=new Class(2);
let a=new Teacher("tom",18,2,class2);
let b=new Student("jerry",18,2,class2);
b.klass.assignLeader(b)
console.log(b.introduce());
console.log(a.introduceWith(b));