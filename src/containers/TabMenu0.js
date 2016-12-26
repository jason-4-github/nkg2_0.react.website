import React from 'react';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import { browserHistory } from 'react-router';

import { styleConstant } from '../styles/styleConstant';

//css
const styles = styleConstant.tabMenu0;

// XXX(S.C.) => remove it when all tabs pages are finished
class TabMenu0 extends React.Component {
  render() {
    const { line } = this.props.params;
    return(
      <div>
        <IconButton
          iconStyle={styles.largeIcon}
          style={styles.large}
          onClick={() =>{ browserHistory.push( '/Dashboard/' + line )}}>
          <ActionHome />
        </IconButton>
      </div>
    );
  }
};

export default TabMenu0;
