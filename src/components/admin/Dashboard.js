import React, {Component} from 'react'
import {Modal, Button} from 'react-bootstrap'
import ConfirmModal from  './ConfirmModal'
import ItemTable from './ItemTable'
import ItemForm from './ItemForm'


class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalShow:false,
            selected:null,
            createOrRead:null
        }
    }

    closeModal = () => {
        this.setState({modalShow:false})
    }

    openModal = (item) => {
        this.setState({modalShow:true, selected:item})
    }
    
    render(){
        const {selected, modalShow} = this.state;
        return(
            <div>
                <h4>Admin Dashboard</h4>
                <button>New</button>
                <ItemTable 
                    items={this.props.items}
                    confirmDelete={this.openModal} />
                {modalShow && selected && 
                    <ConfirmModal
                        show={modalShow}
                        heading="Item Delete"
                        id={selected.id}
                        message={`Are you sure you want to delete ${selected.name}`}
                        confirm={this.props.deleteItem}
                        cancel={this.closeModal}/>}
            </div>
        )
  }
}

export default Dashboard
