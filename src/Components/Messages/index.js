import React from 'react';
import {Placeholder} from 'semantic-ui-react';
const Messages = () =>{
    return (
        <Placeholder fluid style={{width:'60vw', margin:'auto'}}>
        <Placeholder.Header style={{width:'60vw', margin:'auto'}} image>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Header>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
      </Placeholder>
    )
}
export default Messages;