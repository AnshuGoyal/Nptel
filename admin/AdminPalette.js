import React, { Component } from 'react';
import * as MaterialIcon from 'react-icons/lib/md';


export default class AdminPalette extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ width: '280px', backgroundColor: '#f7f1e3', padding: '20px', height : '100vh'}}>

        <a onClick={this.props.onClickInsert} style={styles.innerContainerStyle}>
          <MaterialIcon.MdChromeReaderMode size={styles.iconSize} style={styles.iconStyle}/>
          <span style={styles.textStyle}>Insert</span>
        </a>
        <div style={styles.dividerStyle}/>

        <a onClick={this.props.onClickUpdate} style={styles.innerContainerStyle}>
          <MaterialIcon.MdPeopleOutline size={styles.iconSize} style={styles.iconStyle}/>
          <span style={styles.textStyle}>Update</span>
        </a>
        <div style={styles.dividerStyle}/>

        <a onClick={this.props.onClickDelete} style={styles.innerContainerStyle}>
          <MaterialIcon.MdPeople size={styles.iconSize} style={styles.iconStyle}/>
          <span style={styles.textStyle}>Delete</span>
        </a>
        <div style={styles.dividerStyle}/>

        <a onClick={this.props.onClickGet_Data} style={styles.innerContainerStyle}>
          <MaterialIcon.MdPeople size={styles.iconSize} style={styles.iconStyle}/>
          <span style={styles.textStyle}>Get_Data</span>
        </a>
        <div style={styles.dividerStyle}/>


        <a onClick={this.props.onClickProfile} style={styles.innerContainerStyle}>
          <MaterialIcon.MdFace size={styles.iconSize} style={styles.iconStyle}/>
          <span style={styles.textStyle}>My Profile</span>
        </a>
        <div style={styles.dividerStyle}/>

        <a onClick={this.props.onClickLogout} style={styles.innerContainerStyle}>
          <MaterialIcon.MdPowerSettingsNew size={styles.iconSize} style={styles.iconStyle}/>
          <span style={styles.textStyle}>Logout</span>
        </a>
        <div style={styles.dividerStyle}/>

      </div>
    );
  }
}

const styles = {
  innerContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '12px',
    width: '100%',
    textDecoration: 'none',
    cursor: 'pointer'
  },
  textStyle: {
    fontFamily: 'Montserrat',
    fontSize: '14px',
    marginLeft: '24px'
  },
  dividerStyle: {
    height: '1px',
    backgroundColor: '#d1ccc0'
  },
  iconSize: 18
};
