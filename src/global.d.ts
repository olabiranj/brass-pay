interface paymentTypes {
  name: string;
  loading: boolean;
  transaction_history: singlePaymentTypes[];
}

interface singlePaymentTypes {
  date: string;
  amount: number;
  accountNo: number;
  accountName: string;
  bankName: string;
}

interface paymentActionTypes {
  type: string;
  payload: singlePaymentTypes;
}

interface bankTypes {
  id: number;
  code: number;
  name: string;
}

interface paymentDataTypes {
  bankCode: string;
  accNo: string;
  accName: string;
  amount: any;
  email: string;
  date?: string;
}

interface paystackTypes {
  reference: string;
  email: string;
  amount: number;
  publicKey: string | any;
}
