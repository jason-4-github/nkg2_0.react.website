import React from 'react';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import { browserHistory } from 'react-router';

const styles = {
  largeIcon: {
    width: 60,
    height: 60,
  },
  large: {
    width: 120,
    height: 120,
    padding: 30,
  },
};

class TabMenu0 extends React.Component {
  render(){
    return(
      <div>
        <IconButton
          iconStyle={styles.largeIcon}
          style={styles.large}
          onClick={() =>{ browserHistory.push( '/Dashboard/www' )}}
        >
          <ActionHome />
        </IconButton>
      </div>
    );
  }
};

export default TabMenu0;
