class Student {
    static totalStudent = 0;
    constructor(name, age, phoneNo, marks){
        this.name = name;
        this.age = age;
        this.phoneNo = phoneNo;
        this.marks = marks;
        Student.totalStudent++;
    }
    isEligible(){
        if(this.marks<40) console.log('Not Eligible');
        else console.log('eligible')
    }

    eligibleForPlacements(minMarks){
        let eligible = (age) =>{
            if(this.marks>=minMarks) return true;
            else return false;
        }
        return eligible;
    }

}
const student1 = new Student('john',17, 8748734837, 39);
const student2 = new Student('trump',20, 8748734837, 40);
const student3 = new Student('obama',19, 8748734837, 45);

students = [student1,student2,student3];
for(let student of students){
    if(student.eligibleForPlacements(42)(this.age)){
        console.log(student.name);
    }
}