/* 54:00
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

//   import React from 'react';
//   import ReactDOM from 'react-dom';
  
//   const page = (
//       <div>
//           <img height="50px" witdh="50px" src="react-logo.png"/>
//           <h1>Fun facts about React</h1>
//           <ul>
//               <li>Was first realase in 2013</li>
//               <li>Was originallly created by Jordan Walke</li>
//               <li>Has well over 100k stars on GitHub</li>
//               <li>Is maintained by Facebook</li>
//               <li>Powers thousands of enterprise apps, including mobile apps</li>
//           </ul>
//       </div>
      
//   );
  
//   ReactDOM.render(page, document.getElementById('root'));

//------------------------------------------------------------

/** 1:07:00
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

    // import React from "react"
    // import ReactDOM from "react-dom"
    
    // function Page() {
    //     return (
    //         <div>
    //             <header>
    //                 <nav>
    //                 <img witdh="50px" height="50px" src="./react-logo.png" alt="react logo"/>
    //                 </nav>
    //             </header>
    //             <main>
    //                 <h1>Reasons I'm excited to learn React</h1>
    //                 <ol>
    //                     <li>Job</li>
    //                     <li>Money</li>
    //                     <li>House</li>
    //                     <li>Weding</li>
    //                     <li>Baby</li>
    //                  </ol>
    //             </main>
    //             <footer>
    //                 <p>© 20xx GP development. All rights reserved.</p>
    //             </footer>
    //         </div>
    //     )
    // }
    
    // ReactDOM.render(<Page />, document.getElementById("root"))


//---------------------------------------------------
    // function Header() {
    //     return (
    //         <header>
    //             <nav>
    //                 <img src="./react-logo.png" width="40px" />
    //             </nav>
    //         </header>
    //     )
    // }
    
    // function Footer() {
    //     return (
    //         <footer>
    //             <small>© 2021 Ziroll development. All rights reserved.</small>
    //         </footer>
    //     )
    // }
    
    // function MainContent() {
    //     return (
    //         <div>
    //             <h1>Reasons I'm excited to learn React</h1>
    //             <ol>
    //                 <li>It's a popular library, so I'll be 
    //                 able to fit in with the cool kids!</li>
    //                 <li>I'm more likely to get a job as a developer
    //                 if I know React</li>
    //             </ol>
    //         </div>
    //     )
    // }
    
    // function Page() {
    //     return (
    //         <div>
    //             <Header />
    //             <MainContent />
    //             <Footer />
    //         </div>
    //     )
    // }
    
    // ReactDOM.render(<Page />, document.getElementById("root"))


//--------------------------------------------------------
//1:23:00
// import React from "react"
// import ReactDOM from "react-dom"

// /**
// Challenge: 

// - Add an `ul` inside the Header's `nav` and create
//   the following `li`s: "Pricing", "About", & "Contact"
// - Using flexbox, line up the nav items horizontally, and
//   put them inline with the React logo.
// - Change the image styling to happen in CSS instead of in-line
//   For practice, add a new class to the image in order to style it
// */

// function Header() {
//     return (
//         <header>
//             <nav className="nav">
//                 <img className="logo" src="./react-logo.png" width="40px" />
//                 <ul className="nav__list">
//                     <li>Pricing</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                 </ul>
//             </nav>
//         </header>
//     )
// }

// function Footer() {
//     return (
//         <footer>
//             <small>© 2021 Ziroll development. All rights reserved.</small>
//         </footer>
//     )
// }

// function MainContent() {
//     return (
//         <div>
//             <h1>Reasons I'm excited to learn React</h1>
//             <ol>
//                 <li>It's a popular library, so I'll be 
//                 able to fit in with the cool kids!</li>
//                 <li>I'm more likely to get a job as a developer
//                 if I know React</li>
//             </ol>
//         </div>
//     )
// }

// function Page() {
//     return (
//         <div>
//             <Header />
//             <MainContent />
//             <Footer />
//         </div>
//     )
// }

// ReactDOM.render(<Page />, document.getElementById("root"))