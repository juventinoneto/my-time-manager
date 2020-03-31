import React from 'react';
import Button from '@material-ui/core/Button';

class ButtonDefault extends React.Component {

    // constructor(props) {
    //     super(props);
    //     if (this.props.label == undefined) {
    //         this.props.label = 'Hello';
    //     }
    // }

    render () {
        return (
            <Button variant="contained" color="primary">
                {this.props.label ? this.props.label :  'Hello World!'}
            </Button>
        );
    }
}

export default ButtonDefault;
