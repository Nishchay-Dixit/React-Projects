import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './style.css'

const Card = (props) => {
    
    return (<>
            <div className='Card1 col-md-3'>
                <div className='Card-Details'>
                    <div className='profile'>
                        <img src={props.image} />
                    </div>
                    <div className='Data'>
                        <div className='Name col-md-12 content'>
                            {props.name}
                        </div>
                        <div className='Role col-md-12 content'>
                            {props.role}
                        </div>
                        <hr />
                        <div className='Education col-md-12 content'>
                            {props.edu}
                        </div>
                        <hr />
                        <div className='Other row'>
                            <div className='col-md-6 content'>
                                <div className='row o1'>
                                    <div className='OtherTitle'>
                                        Experience
                                    </div>
                                    <div className='ExpData content'>
                                        <div className='ExpData1'>
                                            {props.exp}
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
                                            {props.sin}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='viewProfile'>
                            <Link to={"../faculty/" + props.obj.id}>
                                <p>View Profile &#8594;</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            </>
    );
}


export default Card;