// import logo from './logo.svg';
// import { Button } from 'bootstrap/dist/js/bootstrap.bundle';
// import Button from 'react-bootstrap/Button';
import './App.css';
// import { Header } from './Header';
// import Footer from './Footer';
// import { Button, Container, Row, Col, Card } from 'react-bootstrap';
// import { blog } from './Data/blog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
// import { faPhone } from '@fortawesome/free-solid-svg-icons';
// import BasicExample from './Card';
// import Temp_header from './Temp-header';
// import my_img from './Images/SAVE_20230422_090316.jpg'
import { useState } from 'react';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
// import { faEyeDropper, faEyeLowVision } from '@fortawesome/free-solid-svg-icons';
// import { Button } from 'bootstrap';
import btnModule from './Button.module.css';
import { faClose, faCut } from '@fortawesome/free-solid-svg-icons';



function App() {

  let template = ''

  // let headerInfo = {

  //   email: 'ankurkumardwivedi779@gmail.com',
  //   phone: '7079076206'

  // }

  let [count, setCount] = useState(0);

  let displayData = () => {
    setCount(count + 1);
  }

  let [enqShow, setEnqShow] = useState(false);
  let [enqHide, setEnqHide] = useState(true);

  let [pShow, setPshow] = useState(false);
  if (pShow) {
    template = <>
      <center><button className='bg-[aqua] p-3' onClick={() => setPshow(!pShow)}>Hide</button></center>
      <h3 className='text-center'>Welcome to my web app</h3>
    </>
  } else {
    template = <center><button className='bg-[aqua] p-3' onClick={() => setPshow(!pShow)}>Show</button></center>
  }

  let [pStatus, setPstatus] = useState(false);

  // let displaySum = (a, b) => {
  //   alert(a + b);
  // }

  let [navShow, setNavShow] = useState(false);

  return (
    <div className="main">

      <button type="button" className="enqBtn btn btn-outline-info" onClick={() => setEnqShow(!enqShow)}>Enquiry</button>
      <div className={`modelOverLay ${(enqShow) ? 'modelShow' : ''}`}>
        <button className='hideBtn'><FontAwesomeIcon icon={faClose} /></button>
        <div className={`modelDiv ${(enqShow) ? 'enqDiv' : ''}`}>
          <h3 align='center'>Enquiry Now</h3>
        </div>
      </div>

      {/* <Temp_header /> */}
      {/* {template} */}
      {/* <center><img width={200} src={my_img} /></center> */}
      {/* <Header headerInfo={headerInfo}>
        <h1>This is header section</h1>
        <FontAwesomeIcon icon={faWhatsapp} className='text-success' />
        <FontAwesomeIcon icon={faPhone} className='text-success' />
        <FontAwesomeIcon icon={faTwitter} className='text-success' />
      </Header> */}

      <center className='my-3' style={{ fontWeight: 'bolder', fontSize: '30px' }}>{count == 0 ? 'Press the below button to show result' : 'You clicked ' + count + ' times.'}</center>
      <center><button type="button" className="my-5 px-5 py-3 btn btn-outline-success" onClick={displayData}>Demo</button></center>
      {/* <center><button type="button" className="px-5 py-3 btn btn-outline-success" onClick={() => displaySum(45, 18)}>Sum</button></center> */}

      {/* <Footer /> */}

      <center>
        <div className='btnDiv'>
          <input type={(pStatus) ? 'text' : 'password'} className="form-control" id="inputPassword2" placeholder="Password" />
          <button className='mx-1' type="button" onClick={() => setPstatus(!pStatus)}>
            {(pStatus) ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
          </button>
        </div>
      </center>
      <button className={btnModule.dashBtn} onClick={() => setNavShow(!navShow)}>
        {(navShow) ? 'X' : <span>&#9776;</span>}
      </button>
      <div className={(navShow) ? btnModule.nav1 : btnModule.nav}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Projects</li>
          <li>Contact us</li>
        </ul>
      </div>

    </div>
  );

  // return(
  //   <div className='main text-center'>
  //     {/* <h1 className='text-[40px] text-red-900 font-bold'>Hey! This is Ankur Kumar Dwivedi</h1> */}
  //     <Header/>
  //   </div>
  // );

}

export default App;

// function ProductItems({pitem}) {
//   return (
//     <div className='mb-4 col-lg-3'>
//       <Card>
//         {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
//         <Card.Body>
//           <Card.Title>
//             {pitem.title}
//           </Card.Title>
//           <Card.Text>
//           {pitem.body}
//           </Card.Text>
//           <Button variant="primary">Go somewhere</Button>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// }