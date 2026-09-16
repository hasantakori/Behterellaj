export type Language = 'en' | 'ur';

export type ConsultationType = 'in-person' | 'video' | 'both';

export interface Doctor {
  id: string;
  name: string;
  nameUrdu?: string;
  title: string;
  gender: 'male' | 'female';
  qualification: string;
  pmdcNumber: string;
  specialtyId: string;
  specialtyName: string;
  experienceYears: number;
  city: string;
  hospitalAffiliations: string[];
  clinicAddress: string;
  consultationFeePkr: number;
  videoFeePkr?: number;
  rating: number;
  reviewsCount: number;
  isVerified: boolean;
  availableToday: boolean;
  nextAvailableSlot: string;
  languages: string[];
  bio: string;
  education: string[];
  services: string[];
  photoUrl: string;
}

export interface Hospital {
  id: string;
  name: string;
  nameUrdu?: string;
  city: string;
  address: string;
  phone: string;
  emergency247: boolean;
  departments: string[];
  doctorsCount: number;
  bedsCount: number;
  rating: number;
  reviewsCount: number;
  image: string;
  website?: string;
  featuredServices: string[];
  description: string;
}

export interface Specialty {
  id: string;
  name: string;
  nameUrdu: string;
  iconName: string;
  description: string;
  doctorsCount: number;
  slug: string;
  popularConditions: string[];
}

export interface HealthService {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: string;
  priceStartingPkr: number;
  turnaroundTime: string;
  homeSampleAvailable: boolean;
  popular: boolean;
}

export interface SymptomCondition {
  id: string;
  title: string;
  titleUrdu: string;
  category: string;
  description: string;
  commonSymptoms: string[];
  recommendedSpecialties: string[];
  overview: string;
  whenToSeeDoctor: string;
  slug: string;
}

export interface HealthArticle {
  id: string;
  title: string;
  titleUrdu?: string;
  slug: string;
  category: string;
  readTime: string;
  publishedDate: string;
  updatedDate: string;
  author: string;
  authorRole: string;
  medicalReviewer: string;
  reviewerCredentials: string;
  summary: string;
  imageUrl: string;
  contentSections: {
    heading: string;
    body: string;
  }[];
  relatedSpecialty: string;
  relatedDoctors: string[];
}

export interface AppointmentBooking {
  id: string;
  bookingRef: string;
  doctorId: string;
  doctorName: string;
  doctorSpecialty: string;
  doctorPhoto: string;
  hospitalOrClinic: string;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  patientCity: string;
  date: string;
  timeSlot: string;
  consultationType: 'in-person' | 'video';
  feePkr: number;
  notes?: string;
  status: 'confirmed' | 'rescheduled' | 'cancelled';
  createdAt: string;
}

export interface PatientUser {
  name: string;
  phone: string;
  email: string;
  city: string;
  isLoggedIn: boolean;
}
