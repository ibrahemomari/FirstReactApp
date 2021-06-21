import React, { Component } from 'react'
import HornedBeast from './HornedBeast'
import { data } from './Data';
class Main extends Component {
    likeCounter=(count)=>{
      return count+1;
    }
    render() {
       
        return (
            <main className="container">
            
              {
                  data.map(el=>
                      <HornedBeast title={el.title} img_url={el.image_url} count={0} countRequest={this.likeCounter} />
                  )
                  
              }
              
           
            </main>
        )
    }
}
console.log(data);
export default Main
