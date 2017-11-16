"use strict"

import React from 'react';
import {connect} from 'react-redux';
import {Panel,Col,Row,Well,Button} from 'react-bootstrap';


class Cart extends React.Component {
    render() {
        if(this.props.cart[0]) {
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
        const cartItemList = this.props.cart.map(cartArr => {
            return(
                <Panel key={cartArr.id}>
                    <Row>
                        <Col xs={12} sm={4}>
                            <h6>{cartArr.title}</h6>
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


export default connect(mapStateToProps)(Cart);