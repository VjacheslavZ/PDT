import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../../actions';

import { Table, Checkbox, Form, FormGroup, FormControl, Grid, Col, Row } from 'react-bootstrap';

class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.state={
			searchText: ''
		};

		this.handleSearch = this.handleSearch.bind(this)
	}

	componentWillMount() {
		this.props.getData();
	}

	handleSearch(e) {
		this.setState({
			searchText: e.target.value
		});
	}

	render() {
		const { info } = this.props;
		const { searchText } = this.state;

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
									const regex = RegExp(searchText,'gi');


									if(searchText.length && regex.test(companies) || regex.test(country)) {
										return (
											<tr key={index}>
												<td><Checkbox> </Checkbox></td>
												<td>{country}</td>
												<td>{companies}</td>
											</tr>
										)
									}
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
