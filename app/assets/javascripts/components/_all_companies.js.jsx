var earningsDirectChildren = 0;

var AllCompanies = React.createClass({ 
  
  childrenOf(array, par_id) {
    var childrenOfCurrent = []
    for ( i = 0; i < array.length; i++) {
      if (array[i]["parent_id"] === par_id) {
        childrenOfCurrent.push(array[i])
      }
    }
    return childrenOfCurrent
  },
  handleDelete(id) {
    this.props.handleDelete(id);
  },
  // subtree(array) {
  //     for ( i = 0; i < array.length; i++) {
  //       var company = array[i]
  //      return (
  //     <div key={company.id}> 
  //       <Company company={company}/>
  //     </div>  
  //   )
  //         } 
  // },
  countEarnings(company) {
   
    var children = this.childrenOf(this.props.companies, company.id)
    if (children==[]) {
      earningsDirectChildren = 0
      return earningsDirectChildren
    } else {
    for ( i = 0; i < children.length; i++) {
      
      earningsDirectChildren = earningsDirectChildren + children[i]["earnings"]

    }

    children.map((company) => this.countEarnings( company))
      console.log(earningsDirectChildren)
      return earningsDirectChildren
    }
    },
  renderCompany(company) {
    var children = this.childrenOf(this.props.companies, company.id)

    return (
      <ul>
      <li key={company.id}> 
        <span>
          {company.name+" "+ company.earnings+" "+ this.countEarnings(company)}
          <button onClick={this.handleDelete.bind(this, company.id)}>Delete</button>
        </span>
        {children.map((company) => this.renderCompany( company))}
      </li>
      </ul>
    )  
  },
  render () {
    var parents = this.childrenOf(this.props.companies, null)
    
    // var companies = parents.map((company) => this.subtree( company)); 
    return( 
      <div>
        <ul>
          {parents.map((company) => this.renderCompany( company))}
        </ul>  
      </div> ) 
  }
});
