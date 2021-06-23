import React, {Component} from 'react'
import {Button,Modal} from 'react-bootstrap';
class HornedBeast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.count,
            show: false
        }

    }
    incremntLike = () => {
        this.setState({
            count: this.props.countRequest(this.state.count)
        })
    }

    handleModal() {
        this.setState({
            show: !this.state.show
        })
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
            <Button onClick={()=>{this.handleModal()}}>More</Button>
            <Modal show={this.state.show} onHide={()=>this.handleModal()}>
                <Modal.Header closeButton>{this.props.title}</Modal.Header>
                <Modal.Body>
                <img src={this.props.img_url} />
                <p>{this.props.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={()=>{this.handleModal()}}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
        </div>
        )
    }
}

export default HornedBeast