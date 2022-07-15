import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Input, Col } from "antd";

export default class TextWidget extends PureComponent {
  static propTypes = {
    setValue: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    config: PropTypes.object.isRequired,
    value: PropTypes.string,
    field: PropTypes.string.isRequired,
    readonly: PropTypes.bool,
    customProps: PropTypes.object,
    maxLength: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = { value: props.value };
  }

  handleChange = (ev) => {
    const v = ev.target.value;
    const val = v === "" ? undefined : v; // don't allow empty value
    this.setState({ value: val });
    // this.props.setValue(val);
  };

  handleBlur = (ev) => {
    this.props.setValue(this.state.value);
  };

  render() {
    const {config, placeholder, customProps, value, readonly, maxLength} = this.props;
    const {renderSize} = config.settings;
    const aValue = value != undefined ? value : null;

    return (
      <Col>
        <Input
          disabled={readonly}
          key="widget-text"
          size={renderSize}
          type={"text"}
          value={this.state.value}
          placeholder={placeholder}
          maxLength={maxLength}
          onChange={this.handleChange}
          {...customProps}
          onBlur={this.handleBlur}
        />
      </Col>
    );
  }
}
