import type { Document, UserProfile } from "@/types";

export const currentUser: UserProfile = {
  name: "Aarav Sharma",
  digilockerId: "aarav.sharma@ndl",
  mobile: "+91 98••• ••210",
  avatarInitials: "AS",
};

export const documents: Document[] = [
  {
    id: "doc-aadhaar",
    name: "Aadhaar Card",
    issuer: "UIDAI",
    category: "identity",
    issuedDate: "2016-03-12",
    documentNumber: "XXXX XXXX 4821",
    verified: true,
  },
  {
    id: "doc-pan",
    name: "PAN Card",
    issuer: "Income Tax Department",
    category: "identity",
    issuedDate: "2018-07-01",
    documentNumber: "ABCDE1234F",
    verified: true,
  },
  {
    id: "doc-dl",
    name: "Driving Licence",
    issuer: "Ministry of Road Transport & Highways",
    category: "vehicle",
    issuedDate: "2020-11-23",
    documentNumber: "DL-0420110149646",
    verified: true,
  },
  {
    id: "doc-marksheet",
    name: "Class X Marksheet",
    issuer: "CBSE",
    category: "education",
    issuedDate: "2012-05-28",
    documentNumber: "CBSE/2012/998421",
    verified: true,
  },
  {
    id: "doc-rc",
    name: "Vehicle RC",
    issuer: "Ministry of Road Transport & Highways",
    category: "vehicle",
    issuedDate: "2021-01-15",
    documentNumber: "MH12AB1234",
    verified: false,
  },
];
