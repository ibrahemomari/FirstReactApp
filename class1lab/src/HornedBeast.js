import React, { Component } from 'react'

class HornedBeast extends Component {
    constructor(props){
        super(props);
        this.state={
            count:props.count
        }
    }
    incremntLike=()=>{
        this.setState({count:this.props.countRequest(this.state.count)})
    }
    render() {
        return (
            <div className="card">
                <div className="card-header">{this.props.title}</div>
                <div className="card-body"><img src={this.props.img_url} /></div>
                <div className="card-footer">
                <button className="btn btn-primary" onClick={this.incremntLike}>Vote</button>
                <i class="uil uil-heart" ></i>
                <span>{this.state.count}</span>

            </div>
            </div>
        )
    }
}

export default HornedBeast
