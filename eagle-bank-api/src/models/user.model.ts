interface Address {
  line1?: string;
  line2?: string; 
  line3?: string;
  town: string;
  county: string;
  postcode: string;
};

export interface User {
  id: string;
  name: string;
  address: Address;
  phoneNumber: string;
  email: string;
  createdTimestamp?: string;
  updatedTimestamp?: string;
};