'use strict';

var FfStart = React.createClass({
  displayName: 'FfStart',

  getInitialState: function getInitialState() {
    return {
      uuid: null,
      message: null,
      filler_text: null,
      next: null,
      activity_title: 'Begin the Active Learning Study',
      activity_text: 'Thanks for joining us!\nEnter your uuid in the box below to identify youself.'
    };
  },

  getDefaultProps: function getDefaultProps() {
    return {
      bar_title: 'Fast Forward: JavaScript Edition'
    };
  },

  componentWillMount: function componentWillMount() {
    return null;
  },

  componentWillUnmount: function componentWillUnmount() {
    return null;
  },

  _handleSignup: function _handleSignup(e) {

    e.preventDefault();
    // var email = React.findDOMNode(this.refs.email).value.trim();
    // var password = React.findDOMNode(this.refs.password).value;
    // var that = this;
    return null;
  },

  render: function render() {

    var styles = {
      ff_activity: {
        width: '100%'
      },
      ff_activity_bar: {
        position: 'fixed',
        width: '100%',
        boxSizing: 'border-box',
        zIndex: '3',
        backgroundColor: '#000000'
      },
      ff_activity_bar_title: {
        display: 'inline-block',
        position: 'static',
        padding: '10px',
        textDecoration: 'none',
        color: '#0078e7',
        fontWeight: 'lighter'
      },
      ff_activity_bar_uuid: {
        display: 'inline-block',
        position: 'absolute',
        right: '0',
        padding: '10px',
        color: '#e0e0e0',
        fontWeight: 'lighter'
      },
      ff_activity_title: {},
      ff_activity_text: {},
      ff_activity_message: {},
      ff_activity_form: {},
      ff_activity_form_textbox: {},
      ff_activity_form_submit: {},
      ff_activity_next: {}
    };

    var ff_activity_bar = React.createElement(
      'div',
      { className: 'ff_bar', style: styles.ff_activity_bar },
      React.createElement(
        'div',
        { style: styles.ff_activity_bar_title },
        this.props.bar_title
      ),
      React.createElement(
        'div',
        { style: styles.ff_activity_bar_uuid },
        this.state.uuid
      )
    );

    var ff_activity_title = React.createElement(
      'div',
      { style: styles.ff_activity_title },
      this.state.ff_activity_title
    );

    var ff_activity_text = React.createElement(
      'div',
      { style: styles.ff_activity_text },
      this.state.ff_activity_text
    );

    var ff_activity_message = React.createElement(
      'div',
      { style: styles.ff_activity_message },
      this.state.message
    );

    var ff_activity_form = React.createElement(
      'form',
      { onSubmit: this._handleSignup, style: styles.flow_signup_form },
      React.createElement(
        'fieldset',
        { style: styles.flow_signup_fieldset },
        React.createElement(
          'legend',
          { style: styles.flow_signup_legend },
          'Create an account.'
        ),
        error_message,
        React.createElement('input', { ref: 'email', type: 'email', placeholder: 'Email', style: styles.flow_signup_email }),
        React.createElement('input', { ref: 'password', type: 'password', placeholder: 'Password', style: styles.flow_signup_password }),
        React.createElement(
          'button',
          { type: 'submit', style: styles.flow_signup_button },
          'Sign Up'
        )
      )
    );

    var ff_activity_next = next ? React.createElement(
      'div',
      { onClick: this._handleNext, style: styles.ff_activity_next },
      'Next Step!'
    ) : null;

    return React.createElement(
      'div',
      { className: 'ff_activity', style: styles.ff_activity },
      ff_activity_bar,
      ff_activity_title,
      ff_activity_text,
      ff_activity_message,
      ff_activity_form,
      ff_activity_next
    );
  }

});

React.render(React.createElement(FfStart), document.getElementById('root'));