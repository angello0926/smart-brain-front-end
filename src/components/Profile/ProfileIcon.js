import React from 'react';
import { Dropdown, DropdownMenu, DropdownToggle , DropdownItem} from 'reactstrap';

class ProfileIcon extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            dropdownOpen: false
        }
        
    }

    toggle = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }))
    }

    render() {
        return (
            <div className="tr">
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle
                    tag="span"
                    data-toggle="dropdown"
                    aria-expanded={this.state.dropdownOpen}
                >
                <img
                    src="http://tachyons.io/img/logo.jpg"
                    className="br-100 ba h3 w3 dib" alt="avatar"/>                  
                </DropdownToggle>
                <DropdownMenu className='b--transparent shadow-5' style={{backgroundColor: 'rgba(255,255,255,0.5)', position: 'absolute', left: 'auto', right:'0'}}>
                    <DropdownItem onClick={this.props.toggleModal}> View Profile </DropdownItem>
                    <DropdownItem onClick={() => this.props.onRouteChange('signout')}> Sign Out </DropdownItem>
                </DropdownMenu>
            </Dropdown>
            </div>
        );
    }
}

export default ProfileIcon;

