import React, { Component } from 'react'
import HornedBeast from './HornedBeast'
import Data from './Data.json'
import { Row } from 'react-bootstrap'
class Main extends Component {
    likeCounter=(count)=>{
      return count+1;
    }
    render() {
       
        return (
            
            <main className="container">
            <Row>
              {
                  Data.map(el=>
                      <HornedBeast title={el.title}  description={el.description} img_url={el.image_url} count={0} countRequest={this.likeCounter} />
                  )
                  
              }
              
           
              </Row>
            </main>
        )
    }
}
console.log(Data);
export default Main
