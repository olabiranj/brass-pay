import React from 'react';
import styled from 'styled-components';
import PaymentDashboardContainer from '../container/PaymentDashboardContainer';
import { usePayment } from '../hooks/giantHooks';
import { toCurrency } from '../services/helper';
function Transactionhistory() {
  const { transaction_history, displayOneDetail } = usePayment();
  return (
    <Transactionhistory.Wrapper>
      <PaymentDashboardContainer>
        <div className="container mt-4">
          <div className="row">
            <div className="col-sm-8 rounded shadow p-4 mx-auto">
              <h2>Transaction History</h2>
              {transaction_history.length ? (
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Account Number</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transaction_history.map(
                        (data: paymentDataTypes, i: number) => (
                          <tr
                            onClick={() => displayOneDetail(data)}
                            key={i + 1}
                          >
                            <th scope="row">{i + 1}</th>
                            <td>{data.accName}</td>
                            <td>{data.accNo}</td>
                            <td>{toCurrency(data.amount)}</td>
                            <td>{data.date?.slice(0, 21)}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              ) : (
                <h4 className="mt-4">No Transaction History</h4>
              )}
            </div>
          </div>
        </div>
      </PaymentDashboardContainer>
    </Transactionhistory.Wrapper>
  );
}

Transactionhistory.Wrapper = styled.div`
  tr {
    cursor: pointer;
    :hover {
      background: #f8f8f8;
    }
  }
`;

export default Transactionhistory;
