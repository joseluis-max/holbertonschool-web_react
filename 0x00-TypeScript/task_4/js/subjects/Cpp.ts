/// <reference path="./Teacher.ts"/>

namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subjects.Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      const xp = this.teacher.experienceTeachingC;
      if (xp && xp <= 0) return 'No available teacher';

      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
