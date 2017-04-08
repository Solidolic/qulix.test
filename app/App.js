import React from 'react';
import styles from './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  
  render() {
    return (
      <div className={styles.app}>
        <div className="g-signin2" data-onsuccess="onAuthorize" data-theme="dark"></div>
      </div>
    );
  }
}
