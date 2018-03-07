import React, {Component} from 'react'

class UpdateForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:props.name,
            description:props.description,
            price:props.price
        }
    }

    onChange = (e, name) => {
        this.setState({name: e.target.value})
    } 

  render(){
    return(
      <div className='UpdateForm'>
        <h4>Update</h4>
        <form>
            <input onChange={e => this.onChange(e, "name")} type="text" placeholder="Email" />
            <input onChange={e => this.onChange(e, "description")} type="text" placeholder="Password" />
            <input onChange={e => this.onChange(e, "price")} type="number" placeholder="Price" />
            <button onClick={() => this.props.submitForm(this.state)}>Submit</button>
        </form>
      </div>
    )
  }
}

export default UpdateForm
