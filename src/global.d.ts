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
  reference: any;
  email: string;
  date?: string;
}

interface buttonTypes {
  name: string;
  styleClass?: string;
  func?: () => {} | any;
}
interface inputTextTypes {
  type: string;
  readOnly?: boolean;
  required?: boolean;
  value?: string | number;
  onChange?: any;
  placeholder?: string;
  styleClass?: string;
}

interface paystackTypes {
  reference: string;
  email: string;
  amount: number;
  publicKey: string | any;
}
