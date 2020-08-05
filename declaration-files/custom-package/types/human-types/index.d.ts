declare module "human" {
  // export an interface
  export interface Student {
    firstName: string;
    lastName: string;
    marks: number;
  }

  // export a class
  export class Human {
    static className: string;

    public firstName: string;
    public lastName: string;
    public height: number;

    constructor(firstName: string, lastName: string, height: number);
    getHeightInCm(): number;
  }

  // export default value
  var version: string;
  export default version;
}

declare module "human" {
  // export a function
  export function getFullName(Human: Human | Student): string;
}
