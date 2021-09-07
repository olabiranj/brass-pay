import React from 'react';
import CurrencyInput from 'react-currency-input-field';
import styled from 'styled-components';
import Button from '../components/Button';
import InputText from '../components/InputText';
import PaymentDashboardContainer from '../container/PaymentDashboardContainer';
import { usePayment } from '../hooks/giantHooks';
function PaymentPage() {
  const {
    banks,
    paymentData,
    setPaymentData,
    getUserDetails,
    sendFunds,
    loading,
  } = usePayment();
  return (
    <PaymentPage.Wrapper>
      <PaymentDashboardContainer>
        <div className="container mt-4">
          <div className="row">
            <div className="col-sm-6 rounded shadow p-4 mx-auto">
              <h2>Create Payment</h2>
              <form
                className="mt-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  sendFunds();
                }}
              >
                <div className="row">
                  <div className="col-12 mb-4">
                    <label htmlFor="bank" className="form-label">
                      Select Bank:
                    </label>
                    <select
                      className="form-select"
                      onChange={(e) =>
                        setPaymentData({
                          ...paymentData,
                          bankCode: e.target.value,
                        })
                      }
                    >
                      {banks.length
                        ? banks.map((bank: bankTypes) => (
                            <option key={bank.code} value={bank.code}>
                              {bank.name}
                            </option>
                          ))
                        : 'Banks Loading...'}
                    </select>
                  </div>
                  <div className="col-sm-6 mb-4">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Account Number
                    </label>

                    <InputText
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        if (
                          paymentData.bankCode &&
                          e.target.value.length === 10
                        ) {
                          setPaymentData({
                            ...paymentData,
                            accNo: e.target.value,
                          });
                          getUserDetails(e.target.value);
                        } else {
                          setPaymentData({
                            ...paymentData,
                            accName: '',
                            accNo: e.target.value,
                          });
                        }
                      }}
                      type="tel"
                      placeholder="Enter account number"
                      required
                    />
                  </div>
                  <div className="col-sm-6 mb-4">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Account Name
                    </label>
                    <InputText
                      required
                      readOnly
                      value={paymentData.accName}
                      type="text"
                    />
                  </div>
                  <div className="col-sm-6 mb-4">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Amount
                    </label>{' '}
                    <br />
                    <CurrencyInput
                      prefix="N"
                      id="input-example"
                      name="input-name"
                      required
                      className="form-control"
                      placeholder="Please enter an amount"
                      defaultValue={paymentData.amount}
                      onValueChange={(value, name) => {
                        console.log(value);
                        setPaymentData({
                          ...paymentData,
                          amount: value,
                        });
                      }}
                    />
                  </div>
                  <div className="col-sm-6 mb-4">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Sender's Email
                    </label>

                    <InputText
                      type="text"
                      styleClass="form-control"
                      required
                      onChange={(e: any) =>
                        setPaymentData({
                          ...paymentData,
                          email: e.target.value,
                        })
                      }
                      value={paymentData.email}
                    />
                  </div>
                  <div className="col-sm-12 mb-4 d-grid gap-2">
                    <Button
                      name={loading ? 'Loading..' : 'Send'}
                      styleClass="btn-secondary"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </PaymentDashboardContainer>
    </PaymentPage.Wrapper>
  );
}

PaymentPage.Wrapper = styled.div`
  .form-control {
    outline: none;
  }
`;

export default PaymentPage;
