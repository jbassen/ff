var FfStart = React.createClass({


  getInitialState: function() {
    return {
      uuid: null,
      message: null,
      filler_text: null,
      next: null,
      activity_title: 'Begin the Active Learning Study',
      activity_text: 'Thanks for joining us!\nEnter your uuid in the box below to identify youself.',
    };
  },


  getDefaultProps: function() {
    return {
      bar_title: 'Fast Forward: JavaScript Edition'
    };
  },


  componentWillMount : function() {
    return null;
  },


  componentWillUnmount : function() {
    return null;
  },


  _handleSignup: function(e) {

    e.preventDefault();
    // var email = React.findDOMNode(this.refs.email).value.trim();
    // var password = React.findDOMNode(this.refs.password).value;
    // var that = this;
    return null;

  },


  render: function() {

    var styles = {
      ff_activity: {
        width: '100%',
      },
      ff_activity_bar: {
        position: 'fixed',
        width: '100%',
        boxSizing: 'border-box',
        zIndex: '3',
        backgroundColor: '#000000',
      },
      ff_activity_bar_title: {
        display: 'inline-block',
        position: 'static',
        padding: '10px',
        textDecoration: 'none',
        color: '#0078e7',
        fontWeight: 'lighter',
      },
      ff_activity_bar_uuid: {
        display: 'inline-block',
        position: 'absolute',
        right: '0',
        padding: '10px',
        color: '#e0e0e0',
        fontWeight: 'lighter',
      },
      ff_activity_title: {

      },
      ff_activity_text: {

      },
      ff_activity_message: {

      },
      ff_activity_form: {

      },
      ff_activity_form_textbox: {

      },
      ff_activity_form_submit: {

      },
      ff_activity_next: {

      },
    };

    var ff_activity_bar =
      <div className='ff_bar' style={styles.ff_activity_bar}>
        <div style={styles.ff_activity_bar_title}>
          {this.props.bar_title}
        </div>
        <div style={styles.ff_activity_bar_uuid}>
          {this.state.uuid}
        </div>
      </div>;

    var ff_activity_title =
      <div style={styles.ff_activity_title}>
        {this.state.ff_activity_title}
      </div>;

    var ff_activity_text =
      <div style={styles.ff_activity_text}>
        {this.state.ff_activity_text}
      </div>;

    var ff_activity_message =
      <div style={styles.ff_activity_message}>
        {this.state.message}
      </div>;

    var ff_activity_form =
      <form onSubmit={this._handleSignup} style={styles.flow_signup_form}>
        <fieldset style={styles.flow_signup_fieldset}>
          <legend style={styles.flow_signup_legend}>
            Create an account.
          </legend>
          {error_message}
          <input ref='email' type='email' placeholder='Email' style={styles.flow_signup_email} />
          <input ref='password' type='password' placeholder='Password' style={styles.flow_signup_password} />
          <button type='submit' style={styles.flow_signup_button}>
            Sign Up
          </button>
        </fieldset>
      </form>;

    var ff_activity_next = next ?
      <div onClick={this._handleNext} style={styles.ff_activity_next}>
        Next Step!
      </div>
      : null;

    return(
      <div className='ff_activity' style={styles.ff_activity}>
        {ff_activity_bar}
        {ff_activity_title}
        {ff_activity_text}
        {ff_activity_message}
        {ff_activity_form}
        {ff_activity_next}
      </div>
    );

  },

});


React.render(
  React.createElement(FfStart),
  document.getElementById('root')
);
