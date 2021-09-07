import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import payImg from '../assets/img/payment.png';
import { PAYMENT } from '../services/routes';

function LandingPage() {
  const history = useHistory();
  return (
    <LandingPage.Wrapper>
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <h1 className="text-light">Welcome To Brass Pay</h1>
            <p>...a seamless payment gateway.</p>
            <div className="col-md-8 mt-4">
              <div className="row">
                <div className="col-sm-6 d-grid gap-2 mb-3">
                  <button
                    className="btn btn-primary"
                    onClick={() => history.push(PAYMENT)}
                  >
                    Pay Now
                  </button>
                </div>
                <div className="col-sm-6 d-grid gap-2 mb-3">
                  <button className="btn btn-secondary ">
                    Transaction History
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <img src={payImg} alt="payment pics" />
          </div>
        </div>
      </div>
    </LandingPage.Wrapper>
  );
}

LandingPage.Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(to bottom right, #1affa3, #0066ff);
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    .row {
      .col-sm-8 {
        h1 {
          font-size: 70px;
          text-shadow: 2px 2px #4d4d4d;
          font-weight: 800;
        }
      }
      .col-sm-4 {
        display: flex;
        justify-content: center;

        img {
          width: 80%;
        }
      }
    }
  }
  @media (max-width: 520px) {
    .container {
      .row {
        .col-sm-8 {
          h1 {
            font-size: 50px;
            text-shadow: 2px 2px #000000;
          }
        }
        .col-sm-4 {
          img {
            width: 70%;
          }
        }
      }
    }
  }
`;

export default LandingPage;
