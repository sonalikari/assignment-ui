import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

import './style.css';

export default function ProfilePage() {
  return (
    <section style={{ backgroundColor: '#fff' }}>
      <MDBContainer className="py-2">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-0">
              <MDBCardBody className="mx-0">
                <h6 className="fw-bold text-black-50 fs-6">Premium</h6>
                <h1 className='text-dark fw-bold fs-6'>Data Structures and Algorithms (Python) + Placement Preparation</h1>
                <div id='yellowbackground'>
                  <p className="text-black-50 mx-4 fw-normal">Everything included in combo plan along with Placement preparation features (Duration-8 months)</p>
                </div>
                <p className='text-dark fw-bold fs-6'>Curriculum <span id='space'>View full curriculum</span></p>
                <div id="p1_size">
                  <p className='mb-1'><MDBIcon fas icon="check" className='cyan-text mr-2' /> Introduction to Programming</p>
                  <p className='mb-1'><MDBIcon fas icon="check" className='cyan-text mr-2' /> Data Structures and Algorithms</p>
                  <p className='text-muted mb-1'><MDBIcon fas icon="times" className='text-muted mr-3' /> Web Development</p>
                  <p className='text-muted'><MDBIcon fas icon="times" className='text-muted mr-3' /> Interview Preparation</p>
                </div>
                <div>
                  <h6 className="text-dark mb-0 fw-bold fs-4">&#8377;15,399 <span className='ml-4 fs-6 fw-bolder'>EMI starting at &#8377;2,566/m </span></h6>
                  <p className='text-muted'><s>&#8377;21,999</s></p>
                </div>

                <div className='mt-3' id='p2_size'>
                  <p className='fw-bold fs-6 mb-2'>Additional perks</p>
                  <p className="text-muted mb-1">1:1 Expert Double support</p>
                  <p className="text-muted mb-1">90 Days course pause</p>
                  <p className="text-muted mb-1">1:1 sessions with Industry Experts - 5</p>
                  <p className="text-muted mb-1">Spotlight HIRIST to Elevate your career</p>
                  <p className="text-muted mb-1">2 months Free Course Extension</p>
                  <p className="text-muted mb-1">Curated Interview Problems -100 </p>
                  <p className="text-muted mb-0">Mock Test Series for Product Companies</p>
                </div>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>


          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody className="">
                <p className="mb-3 text-dark fw-bold">Select a batch <span id="space2">View all batches</span></p>

                <div className="recommendation">
                  Recommended
                </div>

                <div className="d-flex justify-content-center">
                  <div className='box-1'>
                    <h6 className="mb-0 fw-bold fs-5">&#8377;15,399/- <span className='ml-5 mb-0'><MDBBtn rounded className='text-dark px-2 py-2 mb-0' id="btn" color='warning'>
                      30% OFF
                    </MDBBtn></span></h6>
                    <p className='text-dark mt-0'><s>&#8377;21,999/-</s></p>
                    <p className='my-0 fs-6 text-dark'>Batch starts: 26 Feb'24</p>
                    <p className='my-0 fs-6 text-dark'>EMI: &#8377;2,567/month</p>
                  </div>
                  <div className='box'>
                    <h6 className="mb-0 fw-bold fs-5">&#8377;21,999/- </h6>
                    <p className='my-0 fs-6 text-dark mt-5'>Batch starts: 1 April'24</p>
                    <p className='my-0 fs-6 text-dark'>EMI: &#8377;3,667/month</p>
                  </div>
                </div>

                <div className="payment">
                  <div className="button">
                    Proceed to payment <MDBIcon fas icon="arrow-right" className='ml-2' />
                  </div>
                </div>
                <div className='my-5'>
                  <p className='bottom'> No Cost EMI on all major credit cards & No cost Cardless EMI <span className="bottom_span">7-day money back Guarantee</span></p>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

        </MDBRow>
      </MDBContainer>
    </section>
  );
}

