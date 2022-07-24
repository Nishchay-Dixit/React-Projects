import "./style.css"
import Card from "./Card";
import { useEffect, useState } from "react";

const FacultyList = () => {

    const [faculties, setFaculties] = useState([]);
    useEffect(() => {
    fetch("https://62dbe2a54438813a260c9012.mockapi.io/faculties")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setFaculties(res);
      });
  }, []);
   
    var formatedFaculties = faculties.map(fObj => {
        return (<>
                <Card obj={fObj} image={fObj.FacultyImage} 
                     name={fObj.FacultyName} 
                     role={fObj.FacultyDesignation} 
                     edu={fObj.FacultyHighestEducation} 
                     exp={fObj.FacultyExperienceInYears} 
                     sin={fObj.FacultyWorkingSince} />
                     </>
        );
    })
    return (
        <div className="row">{formatedFaculties}</div>
    )
}

export default FacultyList;