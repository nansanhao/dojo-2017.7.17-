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
        if(this.number===student.klass.number){
            this.leader=student.id;
        }else{
            console.log("It is not one of us.");
        }

    }
    appendMember(student){
        if(student){
            student.klass.number=this.number;
        }


    }
}
class Teacher extends Person{
    constructor(name,age,id,klass){
        super(name,age,id);
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


let class2=new Class(2);
let class3=new Class(3);
let a=new Teacher("tom",18,"tom",class2);
let b=new Student("jerry",18,"jerry",class2);
let c=new Student("jack",15,"jack",class3);
class2.assignLeader(c);
//console.log();
//console.log();