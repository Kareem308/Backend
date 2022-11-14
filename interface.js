var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Student.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return Student;
}());
var student = new Student('Abdulkareem', 'Aljohani');
console.log(student.getFullName());
