import React from 'react';

const ImageListItem = props => (
            <div onClick={() => props.handleClick(props.name)} className="imageListItem">
                <img src={props.thumbnail} alt={props.name} className="thumbnail z-depth-5"/>
            </div>
);

// class ImageListItem extends React.Component {
    
//     constructor(props) {
//         super(props);
//         // this.state = {
//         //     clicked: false,
//         // };
//         // this.handleClick = this.handleClick.bind(this);
//     };

//     // handleClick = (event) => {
//     //     console.log("this", this);
//     //     console.log(this.props.name);

//     //     this.setState({ clicked: true });
//     //     // event.randomizeImages();
//     // }
    
//     render() {
//         return(
//             <div onClick={() => this.props.handleClick} className="imageListItem">
//                 <img src={this.props.thumbnail} alt={this.props.name} className="thumbnail z-depth-5"/>
//             </div>
//         ); 
//     }
// }

// export const ImageListItem = props => (
//     <div className="imageListItem">
//         <img src={props.thumbnail} className="thumbnail z-depth-5"/>
//     </div>
// );

export default ImageListItem;