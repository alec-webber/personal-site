export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  github?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
