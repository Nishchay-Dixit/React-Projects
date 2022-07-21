import { useState } from "react";
import './index.css';

let idToEdit = -1;

const FromOp = () => {
    let [faculties, setFaculties] = useState(["avb", "vms"]);
    let [facultyName, setFacultyName] = useState("");

    let formatedFaculty = faculties.map((fac, i) => {
        return (
            <>
                <hr />
                <div class="container text-center">
                    <div class="row">
                        <div class="col-md-auto">
                            {fac}{" "}
                        </div>
                        <div class="col-md-auto">
                            <button type="button" class="btn btn-dark mb-3"
                                onClick={() => {
                                    idToEdit = i;
                                    setFacultyName(faculties[i]);
                                }}
                            >{" "}Edit{" "}</button>
                        </div>
                        <div class="col-md-auto">
                            <button type="button" class="btn btn-danger mb-3"
                                onClick={() => {
                                    faculties.splice(i, 1);
                                    setFaculties([...faculties]);
                                }}
                            >{" "}Delete{" "}</button>
                        </div>
                    </div>
                </div>
            </>
        );
    });
    return (
        <>
            <br />
            <form class="row g-3">
                <div class="col-auto">
                    <label class="col-sm-3 col-form-label">EnterName: </label>
                </div>
                <div class="col-auto">
                    <input type="text" class="form-control" id="inputPassword2" value={facultyName} onChange={(e) => {
                        setFacultyName(e.target.value);
                    }} />
                </div>
                <div class="col-auto">
                    <button type="button" class="btn btn-primary mb-3" onClick={(e) => {
                        if (idToEdit > -1) {
                            faculties[idToEdit] = facultyName;
                            idToEdit = -1;
                        } else {
                            setFaculties([...faculties, facultyName]);
                        }
                        setFacultyName("");
                        e.preventDefault();
                    }}
                        value="Save Faculty">Submit</button>
                </div>
            </form>
            <ul> {formatedFaculty}</ul>
        </>
    );
}

export default FromOp;