import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { term: '' };

        // this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(ev){
        let term = ev.target.value;
        this.setState({term});

    }

    onFormSubmit(e){
        e.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    render() {
        return (
            <form className="input-group" onSubmit={(e)=>this.onFormSubmit(e)}>
                <input
                placeholder="get weather"
                className="form-control"
                value={this.state.term}
                onChange={(e)=>this.onInputChange(e)}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
