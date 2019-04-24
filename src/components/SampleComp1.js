import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submitInfo } from '../actions/sampleActions';

class SampleComp1 extends Component {
  render() {
    return (
      <div id="sampleId" className="sampleClass">
        <h1>React-Redux Boilerplate</h1>
        <p>This is some sample text.</p>
        <p>Version: {React.version}</p>
      </div>
    )
  }
}

SampleComp1.propTypes = {
  sampleSubmitInfo: PropTypes.object.isRequired,
  submitInfo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  sampleSubmitInfo: state.sample.sampleSubmitInfo
});

const mapActionsToProps = {
  submitInfo
}

export default connect(mapStateToProps, mapActionsToProps)(SampleComp1);