
export type Page = 'Home' | 'About Us' | 'Practice Areas' | 'Our Attorneys' | 'Contact';

export interface AttorneyProfile {
  name: string;
  title: string;
  imageUrl: string;
  bio: string;
  specialties: string[];
}
