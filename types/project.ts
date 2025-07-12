export interface Project {
  _id: string;
  title: string;
  description?: string;
  imageUrl?: string;
  githubLink?: string;
  liveDemo?: string;
  techStack?: string[];
  activeStatus: boolean;
  // Add any additional fields as needed
}
