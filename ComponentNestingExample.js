var Badge = React.createElement({
  render: function() {
    return <button>
      {this.props.title} - {this.props.number}
    </button>
  }
});

var Form = React.createClass({
  render: function() {
    return <div>
      <Badge title={this.props.title} number={this.props.number} />
    </div>
  }
});

// Create Form
var options = {
  title: 'Inbox'
  number: 5
}
React.createElement(Form, options)
