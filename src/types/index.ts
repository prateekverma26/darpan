export type DocumentCategory =
  | "identity"
  | "education"
  | "vehicle"
  | "health"
  | "insurance"
  | "other";

export interface Document {
  id: string;
  name: string;
  issuer: string;
  category: DocumentCategory;
  issuedDate: string; // ISO date
  documentNumber: string;
  verified: boolean;
}

export interface UserProfile {
  name: string;
  digilockerId: string;
  mobile: string;
  avatarInitials: string;
}
