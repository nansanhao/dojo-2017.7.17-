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
    constructor(number,teachers){
        this.number=number;
        this.teachers=teachers;
    }
    assignLeader(student){
        if(this.number===student.klass.number){
            this.leader=student.id;
            for(let i in this.teachers){
                for(let j in this.teachers[i].classs){
                    if(this.teachers[i].classs[j].number===student.klass.number){
                        console.log(`I am ${this.teachers[i].name}.I know ${student.name} become leader of class ${student.klass.number} `);
                        break;
                    }
                }
            }
        }else{
            console.log("It is not one of us.");
        }

    }
    appendMember(student){

            student.klass=this;
            for(let i in this.teachers){
                for(let j in this.teachers[i].classs){
                    if(this.teachers[i].classs[j].number===student.klass.number){
                            console.log(`I am ${this.teachers[i].name}.I know ${student.name} has joined Class ${student.klass.number} `);
                            break;
                    }
                }
            }

    }
    isIn(student){
        if(this.number===student.klass.number){
            return true;
        }else {
            return false;
        }
    }
}
class Teacher extends Person{
    constructor(name,age,id,classs){
        super(name,age,id);
        this.classs=classs;


    }
    introduce(){
        if(this.classs.length!==0){
            let str=super.introduce()+`I am a teacher.I teach Class `;
            for(var i in this.classs){
                str+=`${this.classs[i].number}`;
                if(i!==this.classs.length-1){
                    str+=`,`
                }

            }
            return str;
        }else {
            return super.introduce()+`I am a teacher.I teach no Class.`;
        }
    }
    isTeaching(student){
        for (var i in this.classs){
            if(this.classs[i].number===student.klass.number){
                return true;

            }
            return false;
        }

    }
}


let class2=new Class(2);
let class3=new Class(3);
let a=new Teacher("tom",18,"tom",[class2,class3]);
let b=new Student("jerry",18,"jerry",class2);
let c=new Student("jack",15,"jack",class3);
let d=new Student("huni",16,"huni");
class2.teachers=[a];
class2.appendMember(d);
class2.assignLeader(b);
console.log(a.isTeaching(b));
console.log(class2.isIn(c));
console.log(a.introduce());
console.log(b.introduce());