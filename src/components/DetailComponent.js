import React from 'react';
import { Card, CardText} from 'reactstrap';


const Detail = (props) => {

  const chat = props.chats.map((chat) => {
            return (
              <Card >
                  <CardText>
                          <h3>{chat.expression}</h3>
                  </CardText>
              </Card>

            );
        });

  return (
            <div className="container" >
                    {chat}
            </div>
        );
    }

export default Detail;
