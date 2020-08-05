// export an interface
export interface Student {
  firstName: string;
  lastName: string;
  marks: number;
}

// export a class
export class Person {
  static className: string;

  public firstName: string;
  public lastName: string;
  public height: number;

  constructor(firstName: string, lastName: string, height: number);
  getHeightInCm(): number;
}

// export default value
declare var version: string;
export default version;

// export a function
export function getFullName(person: Person | Student): string;