import AllFacultyName from './AllFacultyName';
import FacultyDetails from './FacultyDetails';
import FacultyExp from './FacultyExp';
import './styles.css'

const Home = () => {
    return (
        <>
            <br />
            <h2>All Faculties Names:</h2>
            <hr />
            <AllFacultyName />
            <br />
            <hr />
            <h2>Faculties with more Exp:</h2>
            <hr />
            <FacultyExp />
            <br />
            <hr />
            <h2>All Faculties Details:</h2>
            <hr />
            <FacultyDetails />
        </>
    );
}

export default Home;