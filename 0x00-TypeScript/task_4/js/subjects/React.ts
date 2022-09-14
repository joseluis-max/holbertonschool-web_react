/// <reference path="./Teacher.ts"/>

namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subjects.Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      const xp = this.teacher.experienceTeachingReact;
      if (xp && xp <= 0) return 'No available teacher';

      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
