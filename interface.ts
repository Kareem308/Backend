
  interface Person {
    firstName: string;
    lastName: string;
    getFullName(): string;
  }
  class Student implements Person {
    constructor(public firstName: string, public lastName: string) {}

    getFullName() {
      return this.firstName + ' ' + this.lastName;
    }
  }

  const student = new Student('Abdulkareem ', 'Aljohani');



  console.log(student.getFullName());
 


