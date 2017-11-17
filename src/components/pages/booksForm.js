"use strict"

import React from 'react';
import {Well,Panel,FormControl,FormGroup,ControlLabel,Button} from 'react-bootstrap';

import {findDOMNode} from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {postBooks, deleteBooks} from '../../actions/booksActions'; 

class BooksForm extends React.Component {
    handleSubmit() {
        const book = [{
            _id: Math.floor((Math.random() * 50) + 1),
            title: findDOMNode(this.refs.title).value,
            description: findDOMNode(this.refs.description).value,
            price: findDOMNode(this.refs.price).value
        }]
        this.props.postBooks(book);
    }
    onDelete() {
        let bookId = findDOMNode(this.refs.delete).value;
        this.props.deleteBooks(bookId);
    }
    render() {
        const booksList = this.props.books.map(booksArr => {
            return(
                <option key={booksArr._id}>{booksArr._id}</option>
            )
        })
        return(
            <Well>
                <Panel>
                    <FormGroup controlId="title">
                        <ControlLabel>Title</ControlLabel>
                        <FormControl type="text" placeholder="Enter Title" ref="title" />
                    </FormGroup>
                    <FormGroup controlId="description">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl type="text" placeholder="Enter Description" ref="description" />
                    </FormGroup>
                    <FormGroup controlId="price">
                        <ControlLabel>Enter Price</ControlLabel>
                        <FormControl type="text" placeholder="Enter Price" ref="price" />
                    </FormGroup>
                    <Button onClick={this.handleSubmit.bind(this)} bsStyle="primary">Save Book</Button>                                        
                </Panel>
                <Panel >
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Select a book id to delte</ControlLabel>
                    <FormControl ref="delete" componentClass="select" placeholder="select">
                        <option value="select">select</option>
                        {booksList}
                    </FormControl>
                </FormGroup>
                <Button bsStyle="danger" onClick={this.onDelete.bind(this)} >DELETE BOOK</Button>                
                </Panel>
            </Well>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books.books
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({postBooks,deleteBooks},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(BooksForm)