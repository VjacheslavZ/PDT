import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../../actions';

import { Table, Checkbox, Form, FormGroup, FormControl, Grid, Col, Row } from 'react-bootstrap';

class Dashboard extends Component {

	componentWillMount() {
		this.props.getData();
	}

	handleSearch(e) {
		console.log(e)
	}

	render() {
		const { info } = this.props;

		return(
			<Grid>
				<Row>
					<Col md={12}>
						<Form action="">
							<FormGroup>
								<FormControl type="text" placeholder="search" onChange={this.handleSearch}/>
							</FormGroup>
						</Form>
						<Table striped bordered condensed hover>
							<thead>
							<tr>
								<th>
									<Checkbox> </Checkbox>
								</th>
								<th>Country</th>
								<th>Companies</th>
							</tr>
							</thead>


							<tbody>
							{
								Object.keys(info.data).map((country, index) => {
									const companies =  info.data[country];

									return (
										<tr key={index}>
											<td><Checkbox> </Checkbox></td>
											<td>{country}</td>
											<td>{companies}</td>
										</tr>
									)
								})
							}
							</tbody>
						</Table>
					</Col>
				</Row>
			</Grid>

		)
	}
}

const mapStateToProprs = state => ({
	info: state.data
});

export default connect(mapStateToProprs, { getData })(Dashboard);
