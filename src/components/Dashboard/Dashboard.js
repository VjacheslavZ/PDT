import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../../actions';

class Dashboard extends Component {
	componentDidMount() {
		this.props.getData();
	}

	render() {
		return(
			<div>
				Lorem ipsum.
			</div>
		)
	}
}

const mapStateToProprs = state => ({
	componentDidMount() {
		this.props.getData();
	}
});

export default connect(mapStateToProprs, { getData })(Dashboard);
