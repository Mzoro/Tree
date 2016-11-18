var Main = React.createClass({
  getInitialState() { 
    return { companies: [] } 
  },
  childrenOf(array, par_id) {
    var childrenOfCurrent = []
    for ( i = 0; i < array.length; i++) {
      if (array[i]["parent_id"] === par_id) {
        childrenOfCurrent.push(array[i])
      }
    }
    return childrenOfCurrent
  },
  componentDidMount() { 
    $.getJSON('/api/v1/companies.json', (response) => { this.setState({ companies: response }) }); 
  },

  handleSubmit(company) { 
    var newState = this.state.companies.concat(company); 
    this.setState({ companies: newState }) 
  }, 
  handleDelete(id) { 
    var children = this.childrenOf(this.state.companies, id)
    $.ajax({ 
      url: `/api/v1/companies/${id}`, 
      type: 'DELETE', 
      success:() => { 
        this.removeCompanyClient(id); 
      } 
    });
    console.log(children)
    children.map((company) => this.handleDelete(company.id)) 
  }, 
  removeCompanyClient(id) { 
    var newCompanies = this.state.companies.filter((company) => { 
      return company.id != id; 
    }); 
    this.setState({ companies: newCompanies }); 
  },

  render() { 
    return ( 
      <div>
        <NewCompany handleSubmit={this.handleSubmit}/> 
        <AllCompanies companies={this.state.companies} handleDelete={this.handleDelete}/> 
      </div> 
    ) 
  } 
});
