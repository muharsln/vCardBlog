export interface CvData {
  experience: Experience[];
  education: Education[];
}

export interface Experience {
  title: string;
  date: string;
  description: string[];

}

export interface Education {
  departmant: string;
  school: string;
  gpa: string;
}