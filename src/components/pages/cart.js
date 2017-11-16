"use strict"

import React from 'react';
import {connect} from 'react-redux';
import {Panel,Col,Row,Well,Button,ButtonGroup,Label} from 'react-bootstrap';
import { bindActionCreators} from 'redux';
import { deleteCartItem} from '../../actions/cartActions';


class Cart extends React.Component {
    onDelete(_id) {
        const currentCartItemToDelete = this.props.carts;
        const indexToDelete = currentCartItemToDelete.findIndex(cartItem => {
            return cartItem._id === _id;
        }) 
        let cartAfterDelete = [...currentCartItemToDelete.slice(0,indexToDelete),...currentCartItemToDelete.slice(indexToDelete + 1)] 
        this.props.deleteCartItem(cartAfterDelete);
    }
    render() {
        if(this.props.carts[0]) {
            return this.renderCart();
        }
        else 
        {
           return this.renderEmpty(); 
        }
    }

    renderEmpty() {
        return(
            <div></div>
        )
    }

    renderCart() {
        const cartItemList = this.props.carts.map(cartArr => {
            return(
                <Panel key={cartArr._id}>
                    <Row>
                        <Col xs={12} sm={4}>
                            <h6>{cartArr.title}</h6>
                            <span>    </span>
                        </Col>
                        <Col xs={12} sm={2}>
                            <h6>{cartArr.price}</h6>
                            <span>    </span>
                        </Col>
                        <Col xs={12} sm={2}>
                            <h6>qty. <Label bsStyle="success"></Label></h6>
                        </Col> 
                        <Col xs={6} sm={4}>
                            <ButtonGroup style={{minWidth:'300px'}}>
                                <Button bsStyle="default" bsSize="small">-</Button>
                                <Button bsStyle="default" bsSize="small">+</Button>
                                <span>     </span>
                                <Button onClick={this.onDelete.bind(this,cartArr._id)} bsStyle="danger" bsSize="small">DELETE</Button>
                            </ButtonGroup>
                        </Col>                                                                         
                    </Row>
                </Panel>
            )
        })
        return(
            <Panel header="Cart" bsStyle="primary">
                {cartItemList}
            </Panel>
        )
    }
}

function mapStateToProps(state) {
    return {
        carts: state.carts.carts
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({deleteCartItem: deleteCartItem},dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(Cart);