var Company = React.createClass({ 
  render() { 
    return ( 
      <div> 
        <p>{this.props.company.name+" "+ this.props.company.earnings}</p> 
      </div> 
    ) 
  } 
});