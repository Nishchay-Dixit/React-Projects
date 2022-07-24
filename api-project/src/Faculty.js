import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './faculty.css'

const Faculty = () => {

    let params = useParams();

    const [faculties, setFaculties] = useState([]);
    useEffect(() => {
    fetch("https://62dbe2a54438813a260c9012.mockapi.io/faculties/" + params.id)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setFaculties(res);
      });
  }, []);

  return(
  <>
    <div className='container-fluid text-center'>
        <div className='row'>
            <div className='col-3'>
                <div className='Card Col-md-3'>
                    <div className='Card-Details'>
                        <div className='profile'>
                            <img src={faculties.FacultyImage}/>
                        </div>
                        <div className='Data'>
                            <div className='Name col-md-12 content'>
                                {faculties.FacultyName}
                            </div>
                            <div className='Role col-md-12 content'>
                                {faculties.FacultyDesignation}
                            </div>
                            <hr />
                            <div className='Education col-md-12 content'>
                                {faculties.FacultyHighestEducation}
                            </div>
                            <hr/>
                            <div className='Other row'>
                                <div className='col-md-6 content'>
                                    <div className='row o1'>
                                        <div className='OtherTitle'>
                                            Experience
                                        </div>
                                        <div className='ExpData content'>
                                            <div className='ExpData1'>
                                                {faculties.FacultyExperienceInYears}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 content'>
                                    <div className='row o2'>
                                        <div className='OtherTitle'>
                                            Working Since
                                        </div>
                                        <div className='since content'>
                                            <div className='sinceData'>
                                                {faculties.FacultyWorkingSince}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className='contact'>
                                <div className='contactdetails'>
                                    &#x260E;&nbsp;&nbsp;&nbsp;{faculties.FacultyMobileNumber}
                                </div>
                                <div className='contactdetails'>
                                    &#x2709;&nbsp;&nbsp;&nbsp;{faculties.FacultyEmailAddress}
                                </div>
                                <div className='contactdetails'>
                                    Location:&nbsp;&nbsp;{faculties.FacultySeating}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-9 container-fluid'>
                <div className='ProfileTitle'>
                    <br/>
                    Profile
                </div>
                <hr/>
                <p>
                    {faculties.FacultyProfileDescription}
                </p>
                <div className='container'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='contentAlign'>
                                Area of Specialization
                            </div>
                        </div>
                        <div className='col-9'>
                            <div className='subContent'>
                                {faculties.FacultyAreaSpecialization}
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='contentAlign'>
                                Subjects Taught
                            </div>
                        </div>
                        <div className='col-9'>
                            <div className='subContent'>
                                {faculties.FacultySubjectsTaught}
                            </div>
                        </div>
                    </div>
                    <br/>
                </div>
                <Link className='cta' to="../facultylist"><button>Back</button></Link>
            </div>
        </div>
    </div>
  </>
  );

}

export default Faculty;