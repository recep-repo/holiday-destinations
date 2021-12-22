import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import amalfi from '../image/amalfi.jpg'
import bali from '../image/bali.jpg'
import iceland from '../image/iceland.jpg'
import newzealand from '../image/new-zealand.jpg'
import tahiti from '../image/tahiti.jpg'
import seychelles from '../image/seychelles.jpg'

const Mycards = () => {
    return (
        <div>
          <Row xs={1} md={2} className="g-4 d-flex justify-content-center mt-2 w-75 m-auto">
            <Col>
              <Card>
                <Card.Img variant="top" src={amalfi} />
                <Card.Body>
                  <Card.Title>Amalfi Coast – Coastal Peaks Against Pastel Buildings</Card.Title>
                  <Card.Text>
                  Considered to be the coastal gem of Italy, the Amalfi Coast is a true manifestation of nature’s beauty. With its picturesque landscape, coastal peaks, dense forests, and pastel buildings on the cliff, the Amalfi Coast shine bright like a star in the night and comes alive with first ray of the sun. A unique combination of nature and adventure, Amalfi Coast is indeed one of the best summer holiday destinations in the world.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={bali} />
                <Card.Body>
                  <Card.Title>Bali – Honeymooner’s Paradise</Card.Title>
                  <Card.Text>
                  The backpacker’s paradise and honeymooner’s heaven, Bali is a perfect blend of mountains, volcanoes, temples, reefs, and beaches that makes it one of the must places to go in the summer season. Offering post-card like views of the sunset, Bali is also famous for nightlife, shopping, and its yoga retreats. The charming culture, the night shows, the picturesque islands, and the awesome food are enough to make you believe that it’s one of the best summer holiday destinations in the world.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={iceland} />
                <Card.Body>
                  <Card.Title>Iceland – Watch Colors Blend Beautifully</Card.Title>
                  <Card.Text>
                  Being one of the best places to visit in summer in the world, Iceland is where every traveler needs to be if nature and adventure is what they love. This place offers not only breathtaking views, but also refreshing experiences that are enough to enjoy a respite from the humidity and heat. While this place can be visited anytime after March, the best time is during July or August. Also, do follow these Iceland travel tips for a great holiday.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={newzealand} />
                <Card.Body>
                  <Card.Title>New Zealand – Scenic Landscapes For Nature Lovers</Card.Title>
                  <Card.Text>
                  New Zealand is one of the finest best destinations in the world owing to the fact that it enjoys a summery weather when it is winter in Asia, giving us a perfect excuse to go there to escape the cold weather. It’s one of the most scenic in the world owing to the majestic landscapes that appear to be from another planet! It’s also the perfect place for nature lovers and those inspired to visit simply by the famous Hollywood movies that were shot here!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={tahiti} />
                <Card.Body>
                  <Card.Title>Tahiti – A Sweeter Place</Card.Title>
                  <Card.Text>
                  Tahiti is one of the best places to visit in May out of India if you want to enjoy an island vacation. That’s not all!Enjoy staying in over the water bungalows and watching the sunrise at the black sand beaches. You could also chase waterfalls in the dense forests of Tahiti. This place is packed with exciting surprises. It is definitely one of the best places to visit in summer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={seychelles} />
                <Card.Body>
                  <Card.Title>Seychelles – Watch Sunset On Shimmery Coastline</Card.Title>
                  <Card.Text>
                  Seychelles is synonymous with a flawless beach paradise. Set in the Indian Ocean, Seychelles is a beautiful archipelago of 115 islands. With shimmery coastline, smooth white sand beaches, palm-lined shores, and crystal clear waters, Seychelles is absolutely one of the stunning and best summer holiday destinations in the world.Best Time To Visit: April to May and October to November
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
    )
}

export default Mycards
