import tawkTo from "tawkto-react";
import React, { Component } from "react";

const tawkToPropertyId = "1eutnntmo";
const tawkToKey = "602ffef6918aa2612740a45e";

export default class FreshChat extends Component {
  componentDidMount() {
    tawkTo(tawkToKey, tawkToPropertyId);
  }
  render() {
    return <div></div>;
  }
}
