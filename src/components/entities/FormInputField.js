import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-materialize';
import idgen from 'react-materialize/lib/idgen';

export default class FormInputField extends Component {
  constructor(props) {
    super(props);
    this.id = idgen();
  }
  handleChange = (e) => {
    this.props.onChange(`${this.props.name}Remote`, false);
    this.props.onChange(this.props.name, e.target.value);
  };

  handleBlur = () => {
    this.props.onBlur(this.props.name, true);
  };
  render() {
    const activeClass = this.props.value || this.props.placeholder ? 'active' : '';
    const hasInvalidClass = this.props.touched && (this.props.error) ? 'invalid' : '';
    const hasValidClass = this.props.touched && (!this.props.error) ? 'valid' : '';
    return (
      <Col
        className={`${hasInvalidClass} ${hasValidClass}`}
        s={this.props.s}
        m={this.props.m}
        l={this.props.l}
        style={{ padding: 0, marginBottom: 16 }}
      >
        <div className="input-field col s12" style={this.props.style}>
          {this.props.icon && React.cloneElement(
            this.props.icon, { onClick: () => { this.input.focus(); } })}
          <input
            id={this.id}
            ref={(input) => { this.input = input; }}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            disabled={this.props.disabled}
            value={this.props.value}
            name={this.props.name}
            type={this.props.type}
            placeholder={this.props.placeholder}
            style={{ marginBottom: 0 }}
            className={`${hasInvalidClass} ${hasValidClass}`}
          />
          <label htmlFor={this.id} className={activeClass} style={{ width: '100%' }}>{this.props.label}</label>
        </div>
        <p style={{ padding: '0 0.75rem' }} className="grey-text">{!this.props.touched && this.props.hint}</p>
        <p style={{ padding: '0 0.75rem' }} className="red-text">{this.props.touched && this.props.error}</p>
      </Col>
    );
  }
}


FormInputField.defaultProps = {
  disabled: false,
  icon: null,
  touched: false,
  value: '',
  error: '',
  hint: '',
  placeholder: '',
  s: 12,
  m: 12,
  l: 12,
  style: {},
};
FormInputField.propTypes = {
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  touched: PropTypes.bool.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  s: PropTypes.number,
  m: PropTypes.number,
  l: PropTypes.number,
  hint: PropTypes.string,
  icon: PropTypes.element,
};

