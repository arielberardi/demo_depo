import React from 'react';
import NoPayType from './no_pay_type';
import CheckPayType from './check_pay_type';
import CreditCardPayType from './credit_card_pay_type';
import PurchaseOrderPayType from './purchase_order_pay_type';

class PayTypeSelector extends React.Component {
  constructor(props) {
    super(props);
    this.onPayTypeSelected = this.onPayTypeSelected.bind(this);
    this.state = { selectedPayType: null };
  }

  onPayTypeSelected(event) {
    this.setState({ selectedPayType: event.target.value });
  }

  render() {
    let PayTypeCustomComponent = NoPayType;

    if (this.state.selectedPayType == "Credit card") {
      PayTypeCustomComponent = CreditCardPayType;
    } else if (this.state.selectedPayType == "Check") {
      PayTypeCustomComponent = CheckPayType;
    } else if (this.state.selectedPayType == "Purchase order") {
      PayTypeCustomComponent = PurchaseOrderPayType;
    }

    return (
      <div>
        <div className="field">
          <label htmlFor="order_pay_typed" name="order[pay_type]">{I18n.t("orders.form.pay_type")}</label>
          <select id="order_pay_typed" onChange={this.onPayTypeSelected} name="order[pay_type]">
            <option value="">Select a payment method</option>
            <option value="Check">Check</option>
            <option value="Credit card">Credit card</option>
            <option value="Purchase order">Purcharse order</option>
          </select>
        </div>
        <PayTypeCustomComponent />
      </div>
    );
  }
}

export default PayTypeSelector;
