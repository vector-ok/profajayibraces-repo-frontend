import React, { Component } from 'react';
import Slider from "react-slick";
import Lightbox from "react-image-lightbox";
import "../extra-styling/gallery.css";
import { MDBContainer, MDBCol, MDBRow, MDBCard, MDBCardTitle, MDBCardBody, MDBCardText, MDBIcon, MDBBtn } from "mdbreact";
import question from '../assets/images/question-mark.png';

const images = [
  // "http://profajayibraces.org/malocclusion/crowding.png",
  "http://profajayibraces.org/mallo/Picture1.jpg",
  "http://profajayibraces.org/mallo/Picture2.jpg",
  "http://profajayibraces.org/mallo/Picture3.jpg",
  "http://profajayibraces.org/mallo/Picture4.jpg",
  "http://profajayibraces.org/mallo/Picture5.jpg",
  "http://profajayibraces.org/mallo/Picture6.jpg",
  "http://profajayibraces.org/mallo/Picture7.jpg",
  "http://profajayibraces.org/mallo/Picture8.jpg",
  "http://profajayibraces.org/mallo/Picture9.jpg"
]

const caseImages = [
  "http://profajayibraces.org/cases/case1/Picture1.jpg",
  "http://profajayibraces.org/cases/case1/Picture2.jpg",
  "http://profajayibraces.org/cases/case1/Picture3.jpg",
  "http://profajayibraces.org/cases/case1/Picture4.jpg",
  "http://profajayibraces.org/cases/case1/Picture5.jpg",
  "http://profajayibraces.org/cases/case1/Picture6.jpg",
  "http://profajayibraces.org/cases/case1/Picture7.jpg",
  "http://profajayibraces.org/cases/case1/Picture8.jpg",
  "http://profajayibraces.org/cases/case1/Picture9.jpg"
]

class Why extends Component {
  constructor (props){
    super(props);

    this.state = {
      sliderPhoto: false,
      photoIndex: 0,
      caseIndex: 0,
      isOpen: false
    }
  }

  render() {
    const { sliderPhoto, photoIndex, caseIndex, isOpen } = this.state;

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };

    return(
      <div className="pb-5">
        <MDBContainer className="bg-info pt-1 mb-0" fluid>
          <div className="row mt-5 pt-5">
            <div className="col-12 d-flex px-0">
              <img className="d-none d-sm-block img-fluid float-left" src={question} alt="question" />
              <img className="d-block d-sm-none img-fluid img-xs-programs float-left mt-3" src={question} alt="question" />
              <div className="align-self-center text-center">
                <h1 className="d-none d-sm-block display-4 pl-4">Why Join Us?</h1>
                <h2 className="d-block d-sm-none display-5-responsive pl-2 mt-3">Why Join Us?</h2>
              </div>
            </div>
          </div>
        </MDBContainer>

        <MDBContainer fluid className="bg-dark text-center text-white py-3 mt-0">
          <h4 className="mb-0 display-4-responsive font-weight-bolder text-lora text-oblique">"Always find opportunities to make some smile, and to offer random acts of kindness in everyday life."  </h4>
          <p className="small pr-1">- Roy T. Bennet</p>
        </MDBContainer>

        <MDBContainer fluid className="mt-5 px-md-5 text-center">

          <div className="text-left mb-5">
            <h1 className="h1-responsive font-weight-bolder text-lora text-capitalize text-center mb-4"> Why You Should Get Involved</h1>
            {/* <hr class="mb-2 mx-5 px-5" /> */}

            <p> Orthodontics is the sub-specialty of Dentistry that deals with growth of the face, development of dentition and the prevention and correction of occlusal anomalies.   </p>
            <p>
            Orthodontic problems include malocclusion and mal-relationship of the arches. </p>
            <p> <strong> Malocclusion </strong> is the term used to describe irregularly arranged teeth, crooked teeth, crowded, misplaced, unerupted or blocked-out teeth, spacing of teeth, protruding teeth, upper or lower jaws that are too far forward or back, upper and lower teeth that do not meet in front or back with gap in-between or abnormally related e.t.c. </p>

            <p>
            Orthodontic problems are of public health importance and do constitute a great concern as the ability to chew one’s food without difficulties, communicate orally and pronounce words correctly, breathe normally, smile with pleasing facial appearance, all together enhance productive social interactions and quality of life for all individuals. </p>

            <p className="font-italic"> Some pictures of irregularly arranged teeth are shown here.</p>
            <div className="my-2 pt-2 mdb-lightbox no-margin border border-left-0 border-right-0 border-dark">
              <Slider {...settings}>
                <div>
                  <img className="w-100 mx-auto px-2" src={images[0]} alt="tooth problem 1"
                    onClick={() => this.setState({ sliderPhoto: true,  photoIndex: 0, isOpen: true})}/>
                </div>
                <div>
                  <img className="w-100 mx-auto px-2" src={images[1]} alt="tooth problem 2"
                    onClick={() => this.setState({ sliderPhoto: true,  photoIndex: 1, isOpen: true })}/>
                </div>
                <div>
                  <img className="w-100 mx-auto px-2" src={images[2]} alt="tooth problem 3"
                    onClick={() => this.setState({ sliderPhoto: true,  photoIndex: 2, isOpen: true})}/>
                </div>
                <div>
                  <img className="w-100 mx-auto px-2" src={images[3]} alt="tooth problem 4"
                    onClick={() => this.setState({ sliderPhoto: true,  photoIndex: 3, isOpen: true})}/>
                </div>
                <div>
                  <img className="w-100 mx-auto px-2" src={images[4]} alt="tooth problem 5"
                    onClick={() => this.setState({ sliderPhoto: true,  photoIndex: 4, isOpen: true})}/>
                </div>
                <div>
                  <img className="w-100 mx-auto px-2" src={images[5]} alt="tooth problem 6"
                    onClick={() => this.setState({ sliderPhoto: true,  photoIndex: 5, isOpen: true})}
                  />
                </div>
                <div>
                  <img className="w-100 mx-auto px-2" src={images[6]} alt="tooth problem 7"
                    onClick={() => this.setState({ sliderPhoto: true,  photoIndex: 6, isOpen: true})}
                  />
                </div>
                <div>
                  <img className="w-100 mx-auto px-2" src={images[7]} alt="tooth problem 8"
                    onClick={() => this.setState({ sliderPhoto: true,  photoIndex: 7, isOpen: true})}
                  />
                </div>
                <div>
                  <img className="w-100 mx-auto px-2" src={images[8]} alt="tooth problem 9"
                    onClick={() => this.setState({ sliderPhoto: true,  photoIndex: 8, isOpen: true})}
                  />
                </div>
              </Slider>
            </div>

            <p>
            It is obvious that one cannot be truly healthy without good oral health and smiles. Thankfully, malocclusion and most occlusal variants can be treated by a Specialist / Consultant Orthodontist. Orthodontists are primarily Dental Surgeons who had undergone at least 3 - 6 years of University Post-graduate Master’s programme and or Residency training at the University Teaching Hospital.  </p>

            <p> <strong> Professor Emmanuel Olubusayo Ajayi Orthodontics Advancement Foundation </strong>, a not-for-profit organisation, was therefore incorporated for advancement of high quality orthodontic education, evidence-based research, state of the art equipments and dental facilities for provision of orthodontic care for the less privileged, elderly and the society amongst other laudable <a href="/about">objectives</a>  of the Foundation. </p>

            <p> You can contact <a href="/contact">us</a> for advice and treatment of your own malocclusion/ irregularly arranged teeth and or partner with us as an individual or a corporate body to create awareness on malocclusion, provide orthodontic care for the less privileged and the elderly, and provide funds and support towards orthodontic education and cutting-edge researches for the advancement of arts and sciences of Orthodontics. </p>

            <p> <strong> Professor Emmanuel Olubusayo Ajayi Orthodontics Advancement Foundation </strong> partners with you to straighten teeth, restore oral health and give back  smiles.
            </p>
          </div>

          {/* <h3 className="display-4-responsive font-weight-bolder text-lora text-capitalize text-center my-5"> section info here</h3> */}


          <MDBCol className="mb-5 bg-dark">
            <MDBCard classname="">
              <MDBCardBody className="p-0 bg-dark">
                <MDBRow className="">
                  <MDBCol sm="6" className="d-flex flex-column align-self-center bg-dark">
                    <MDBCol className="bg-gallery border border-light py-3 my-4">
                      <MDBRow>
                        <MDBCol>
                          <img className="w-25 p-2 img-fluid" src={caseImages[0]} alt="treatment process 1"
                            onClick={() => this.setState({ sliderPhoto: false, caseIndex: 0, isOpen: true})} />
                          <img className="w-25 p-2 img-fluid" src={caseImages[1]} alt="treatment process 2"
                            onClick={() => this.setState({ sliderPhoto: false, caseIndex: 1, isOpen: true})} />
                          <img className="w-25 p-2 img-fluid" src={caseImages[2]} alt="treatment process 3"
                            onClick={() => this.setState({ sliderPhoto: false, caseIndex: 2, isOpen: true})} />
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol>
                          <img className="w-25 p-2 img-fluid" src={caseImages[3]} alt="treatment process 4"
                            onClick={() => this.setState({ sliderPhoto: false, caseIndex: 3, isOpen: true})} />
                          <img className="w-25 p-2 img-fluid" src={caseImages[4]} alt="treatment process 5"
                            onClick={() => this.setState({ sliderPhoto: false, caseIndex: 4, isOpen: true})} />
                          <img className="w-25 p-2 img-fluid" src={caseImages[5]} alt="treatment process 6"
                            onClick={() => this.setState({ sliderPhoto: false, caseIndex: 5, isOpen: true})} />
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol>
                          <img className="w-25 p-2 img-fluid" src={caseImages[6]} alt="treatment process 7"
                            onClick={() => this.setState({ sliderPhoto: false, caseIndex: 6, isOpen: true})} />
                          <img className="w-25 p-2 img-fluid" src={caseImages[7]} alt="treatment process 8"
                            onClick={() => this.setState({ sliderPhoto: false, caseIndex: 7, isOpen: true})} />
                          <img className="w-25 p-2 img-fluid" src={caseImages[8]} alt="teeth properly arranged"
                            onClick={() => this.setState({ sliderPhoto: false, caseIndex: 8, isOpen: true})} />
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                  </MDBCol>
                  <MDBCol sm="6" className="bg-gray d-flex align-self-center">
                    <img className="w-75 align-self-center mx-auto" src="http://profajayibraces.org/cases/case1/Picture9.jpg" alt="teeth properly arranged" />
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          {
            sliderPhoto ?
              sliderPhoto && isOpen && (
                <Lightbox
                  mainSrc={images[photoIndex]}
                  nextSrc={images[(photoIndex + 1) % images.length]}
                  prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                  imageTitle={photoIndex + 1 + "/" + images.length}
                  onCloseRequest={() => this.setState({ isOpen: false })}
                  onMovePrevRequest={() =>
                    this.setState({
                      photoIndex: (photoIndex + images.length - 1) % images.length
                    })
                  }
                  onMoveNextRequest={() =>
                    this.setState({
                      photoIndex: (photoIndex + 1) % images.length
                    })
                  }
                />
              ) :

            isOpen && (
              <Lightbox
                mainSrc={caseImages[caseIndex]}
                nextSrc={caseImages[(caseIndex + 1) % caseImages.length]}
                prevSrc={caseImages[(caseIndex + caseImages.length - 1) % caseImages.length]}
                imageTitle={caseIndex + 1 + "/" + caseImages.length}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    caseIndex: (caseIndex + caseImages.length - 1) % caseImages.length
                  })
              }
              onMoveNextRequest={() =>
                this.setState({
                  caseIndex: (caseIndex + 1) % caseImages.length
                })
              }
            />
          )}

          {/* <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>
            Title here
              </MDBCardTitle>
              <MDBCol className="mt-3">
            <MDBCardText>
            brief description if neccessary
            </MDBCardText>
            <MDBRow className="mt-4">
            <MDBCol sm="4">
            <p>Photo 1</p>
            </MDBCol>
            <MDBCol sm="4">
            <p>Any additional photos go here</p>
            </MDBCol>
            <MDBCol sm="4">
            <p>Photo 3</p>
            </MDBCol>
            </MDBRow>
              </MDBCardBody>
          </MDBCard> */}
          {/* </MDBCol> */}

          <MDBBtn color="blue" size="lg" className="mr-sm-2" href="/join">Join Us
            <MDBIcon className="ml-2" icon="users" />
          </MDBBtn>
          <MDBBtn outline color="primary" size="lg" className="" href="/About">About Us
            <MDBIcon className="ml-2" icon="lightbulb" />
          </MDBBtn>

        </MDBContainer>
      </div>
    )
  }
}

export default Why;
