// import React, {Component, useState} from 'react';
// import {Document, Page} from 'react-pdf';

// function Resume() {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   function onDocumentLoadSuccess(numPages) {
//     setNumPages(numPages);
//   }

//   const pgNumber = pageNumber;
//   const nmPages = numPages;
//   return (
//     <div>
//       <Document file='/Nina Golodets Resume 2019.pdf' 
//                 onDocumentLoadSuccess={() => onDocumentLoadSuccess({pgNumber})} >
//         <Page pgNumber={pageNumber} />
//       </Document>
//       <p>Page {pageNumber} of {numPages}</p>
//     </div>
//   )
// }

// // class Resume extends Component {
// //   state = {
// //     numPages: null,
// //     pageNumber: 1,
// //   }
 
// //   onDocumentLoadSuccess = ({ numPages }) => {
// //     this.setState({ numPages });
// //   }
 
// //   render() {
// //     const { pageNumber, numPages } = this.state;
 
// //     return (
// //       <div>
// //         <Document
// //           file="./Nina Golodets Resume 2019.pdf"
// //           onLoadSuccess={this.onDocumentLoadSuccess}
// //         >
// //           <Page pageNumber={pageNumber} />
// //         </Document>
// //         <p>Page {pageNumber} of {numPages}</p>
// //       </div>
// //     );
// //   }
// // }

// export default Resume;