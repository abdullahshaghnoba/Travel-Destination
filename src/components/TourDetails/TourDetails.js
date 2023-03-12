import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './TourDetails.css'
const db = require("../../data/db.json")

function TourDetails() {
    const { id } = useParams();
    const info = db.filter((element) =>
        element.id === id
    )
    let cityCard = info[0]

    const [showMore, setShowMore] = useState(false);

    const handleShowMoreClick = () => {
        setShowMore(!showMore);
    }
    return (
        <div id="cards" className='info'>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{cityCard.name}</Card.Title>
                    <Card.Img variant="top" src={cityCard.image} alt={cityCard.name} />
                    <Card.Text> {showMore ? cityCard.info : `${cityCard.info.substring(0, 100)}...`}</Card.Text>
                    <Button onClick={handleShowMoreClick}>
                        {showMore ? "Show less" : "Show more"}
                    </Button>
                </Card.Body>
                
            </Card>
        </div>
    )
}
export default TourDetails;