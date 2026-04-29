import Header from "../../Components/Header/Header";
import PersonalData from "./PersonalData";
import "./Personal.css";

function Personal() {
  return (
    <>
      <Header />

        <div className="personal">
            <div className="personal-card">
                <h2>Personal Information</h2>
                  <div className="info-list">
                {PersonalData[0].map((item, index) =>{
                  const Icons = item.icon;
                  return(
                      <div className="info-box" key={index}>
                    <Icons className="icon"/>
                    <div className="data">
                      <p>{item.label}:</p>
                      <h4>{item.value}</h4>
                    </div>
                  </div>
                  );
                })}
                </div>
            </div>


            <div className="personal-card">
              <h2>Contact information</h2>
              <div className="info-list">
                {PersonalData[1].map((item, i) =>{
                  const Icons = item.icon;
                  return(
                    <div className="info-box" key={i}>
                      <Icons className="icon"/>
                      <div className="data">
                        <p>{item.label}: </p>
                        <h4>{item.value}</h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
        </div>
    </>
  );
}

export default Personal;