import personal from './data.json';
import { PersonalInfo } from './type';

const personalInfo: PersonalInfo = personal;

export const Personal = {
  FirstName: personalInfo.firstName,
  LastName: personalInfo.lastName,
  FullName: `${personalInfo.firstName} ${personalInfo.lastName}`,
  Email: personalInfo.email
}
