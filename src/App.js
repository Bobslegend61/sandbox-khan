import React, { Component } from 'react';
import './App.css';

// import components
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import SubjectDisplay from "./components/subjects/Subject";
import Footer from "./components/footer/Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
     nav: ["Donate","Sign in / Sign up"],
     brandName: "khan Academy",
     keys: [0,1,2,3,4,5,6,7],
     subject: {
       subjects: {
         ["Math by subject"] : ["Early math","Arithmetice","Pre-algebra","Algebra 1","Geometry","Algebra 2","Trigonometry","Precalculus","Statistics & probability","AP Calculus AB","AP Calculus BC","Multivariable calculus","Differential equations","Linear algebra"],
         ["Math by grades"] : ["Kindergarten","1st","2nd","3rd","4th","5th","6th","7th","8th","Eureka Math/EngageNY","High school"],
         ["Science & engineering"] : ["Physics","AP Physics 1","AP Physics 2","Cosmology & astronomy","Chemistry","AP Chemistry","Organic chemistry","Biology","AP Biology","Health & medicine","Electrical engineering"],
         ["Computing"] : ["Computer programming","Computer science","Hour of Code","Computer animation"],
         ["Art & humanities"] : ["World history","US history","AP US History","Art history","Grammar"],
         ["Economics & finance"] : ["Microeconomics","Macroeconomics","Finance &capital markets","Entrepreneurship"],
         ["Test prep"] : ["SAT","MCAT","GMAT","IIT JEE","NCLEX-RN"]
       },
       hoverColor: ["violet","red","green","orange","cadetblue","teal","indigo"]
     }
    }
  }
  render() {
    return (
      <div className="App">
        <div id="first-div">
          <Nav brandName={this.state.brandName} nav={this.state.nav} />
          <Header />
        </div>
        <SubjectDisplay details={this.state.subject} />
        <Footer />
      </div>
    );
  }
}

export default App;
