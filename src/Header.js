import React, { Component } from 'react';
import { connect } from 'react-redux';


class Header extends Component {
    render() {
        return (
            <div></div>
         )
    }
}


const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
    }
export default connect(mapStateToProps)(Header);