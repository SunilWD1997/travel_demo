import { Component } from 'react';
import './destination.css';


class DestinationData extends Component {
    render(props) {

        return (
            <div className={this.props.className}>

                <div className="des_text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>

                <div className="des_img">
                    <img src={this.props.img1} alt="img1" />
                    <img src={this.props.img2} alt="img2" />
                </div>


            </div>
        );
    }
}

export default DestinationData;

