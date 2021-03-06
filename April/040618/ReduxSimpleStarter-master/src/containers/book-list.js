import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook} from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            )
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    //Whatever is returned will show up as props inside BookList
    return {
      books: state.books
    }
}

//Anything returned from this function will end up as props on BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, result should be passed to all of reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// Promote BookList from component to container, need to know about this new dispatch method, selectBook. Make it avail as prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);