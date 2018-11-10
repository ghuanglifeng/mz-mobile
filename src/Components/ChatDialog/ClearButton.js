import React from 'react';
import { Button } from 'antd-mobile';
 
class ClearButton extends React.Component {
    constructor( props, context ) {
        super( props, context );
 
        this.handleClearMessages = this.handleClearMessages.bind( this );
    }
    handleClearMessages() {
        this.props.clearMessages();
    }
    render() {
        let button = <Button type='default' onClick={this.handleClearMessages} >清空</Button>;
        if ( this.props.isDisabled ) {
            button = <Button type='default' disabled="disabled">清空</Button>;
        }
        return <div>{button}</div>;
    }        
}
 
export default ClearButton;
 