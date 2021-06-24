import React, { Component } from 'react'
import HornedBeast from './HornedBeast'
import Data from './Data.json'
import { Row,Form,Button} from 'react-bootstrap';
class Main extends Component {
    constructor(){
        super();
        this.state={
            horns:0
        }
    }
    likeCounter=(count)=>{
      return count+1;
    }

    
    selectedHorns(value){
        this.setState({
            horns:value
        })
      }


 
    render() {
       
        return (
            
            <main className="container">
            <Row>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Fillter:</Form.Label>
                    <Form.Control as="select" aria-label="Default select example" onChange={event=>{this.selectedHorns(Number(event.target.value))}}>
                        <option value="0">Select Number Of Horns</option>
                        <option value="1">1 Horn</option>
                        <option value="2">2 Horns</option>
                        <option value="3">3 Horns</option>
                        <option value="100">100 Horns</option>
                    </Form.Control>
                    </Form.Group>
                </Form>
            </Row>
            <Row>
            {
                Data.map((el,i)=>{
                    return (
                        (this.state.horns===el.horns && 
                            <HornedBeast key={i} title={el.title}  description={el.description} img_url={el.image_url} count={0} countRequest={this.likeCounter} horns={el.horns} />
                        ) || 
                        (this.state.horns===0 && 
                            <HornedBeast key={i} title={el.title}  description={el.description} img_url={el.image_url} count={0} countRequest={this.likeCounter} horns={el.horns} />
                        )
                    )
                })
                    
                }
              
           
            
              </Row>
            </main>
        )
    }
}
console.log(Data);
export default Main
