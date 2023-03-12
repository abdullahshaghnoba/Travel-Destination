import './Tour.css'
import {  useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';
function Tour(props) {
    const navigate = useNavigate();
    
    
    return (
        <div  className="tourElements">
            {props.data.map((element) => {

                return (
                    // <div className="toursElements">
                    //     <p>{element.name}</p>
                    //     <img src={element.image} alt={element.name} />
                    //     <hr />
                    // </div>
                    // onClick={<Link to={`/city/:${element.id}`}>City</Link>}
                    // {backgroundImage:` url(${element.image})`}
                    <Button key={element.id} style={{width:"18rem"}} onClick={()=>navigate(`/city/${element.id}`)}>
                        <Card style={{ width: '17rem' }}>
                            <Card.Body>
                                <Card.Title>{element.name}</Card.Title>
                                <Card.Img variant="top" src={element.image} alt={element.name} />
                            </Card.Body>
                            
                        </Card>
                        {element.name}</Button>

                )
            })}
        </div>
    )
}
export default Tour;