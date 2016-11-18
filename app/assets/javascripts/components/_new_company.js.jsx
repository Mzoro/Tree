var NewCompany= React.createClass({
    handleClick() {
        var name    = this.refs.name.value;
        var earnings = this.refs.earnings.value;
        $.ajax({
            url: '/api/v1/companies',
            type: 'POST',
            data: { company: { name: name, earnings: earnings } },
            success: (company) => {
                this.props.handleSubmit(company);
            }
        });
    },
    render() {
        return (
                <div>
                    <input ref='name' placeholder='Enter the name of the company' />
                    <input ref='earnings' placeholder='Enter a earnings' />
                    <button onClick={this.handleClick}>Submit</button>
                </div>

        )
    }
});