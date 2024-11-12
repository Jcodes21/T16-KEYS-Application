// src/tradesperson/tradesperson.entity.ts
export class Tradesperson {
    id!: number;  // Definite assignment assertion
    name: string;
    trade: string;
    qualifications: string;
    company: string;
    contact: string;
    available: boolean;
  
    constructor(
      name: string,
      trade: string,
      qualifications: string,
      company: string,
      contact: string,
      available: boolean = true
    ) {
      this.name = name;
      this.trade = trade;
      this.qualifications = qualifications;
      this.company = company;
      this.contact = contact;
      this.available = available;
    }
  }
  