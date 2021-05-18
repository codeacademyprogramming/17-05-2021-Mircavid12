import logo from "../../../images/Group4.png";
import darkModeImg from "../../../images/darkMode.png";
import Content from "../app";

function Head() {
  const imgStyle = {width:30,position:'absolute',right:25}
  function darkMode(){
    document.querySelector("body").classList.toggle("dark_mode");
  }
  return (
    <div className="head">
      <img src={logo} />
      <img src={darkModeImg} className="darkModeBtn" style={imgStyle} onClick={darkMode}/>
    </div>
  );
}

export default Head;