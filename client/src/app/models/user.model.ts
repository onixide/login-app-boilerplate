// import { Project } from './project.model';
// import { Solution } from './solution.model';

export interface User {
  _id?: string;
  login: string;
  password: string;
  created?: string;
  __v?: number;
  // projects: [Project];
  // solutions: [Solution];
}
