import React from 'react';

class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
        };
    }

    render() {
        return <div className="imageWrapperDiv"></div>
    }
};

export default Image;