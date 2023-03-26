export interface adminSignUp {
    // companyName: string;
    companyname: string;
    companyEmail: string;
    yourName: string;
    password: string;
    wallet: {}[];
    transactionHistory: {}[];
    viewUser : {}[] ;
    walletNumber: number;
    companyCode: string
  }
  
  export interface staffSignUp {
    yourName: string;
    email: string;
    password: string;
    // companyName: string;
    companyname: string;
    position: string;
    walletNumber: number;
    subscribe :boolean,
    companyCode: string
    wallet: {}[];
    transactionHistory: {}[];
    savingsPlan: {}[];
    houseRentPlan: {}[];
    schoolFeesPlan: {}[];
    investmentPlan: {}[];
    travelAndTour: {}[];
    other: {}[];
  }
  