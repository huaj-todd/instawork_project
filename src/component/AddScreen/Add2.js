import React, {Component} from "react";

export default class AddScreen2 extends Component{
    state = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNum: '',
        isAdmin:''
    }
    addTest =(member) => console.log(member)

    render() {
        return(
            <>
                <h1>Team Member</h1>
                <h5 className={'wd-member'}>Set email, location, and role.</h5>
                <div className={'list-group'}>
                    <div className={'list-group-item'}>
                        <h1>Info</h1>
                        <div className="form-check">
                            <label htmlFor="exampleFormControlInput1"></label>
                            <input type="text"
                                   value={this.state.firstName}
                                    onChange={(e)=>this.setState({
                                        firstName:e.target.value
                                    })}
                                   className="form-control" id="exampleFormControlInput1"
                                   placeholder="Charlene"/>
                        </div>
                        <div className="form-check">
                            <label htmlFor="exampleFormControlInput2"></label>
                            <input type="text"
                                   value={this.state.lastName}
                                   onChange={(e)=>this.setState({
                                       lastName:e.target.value
                                   })}
                                   className="form-control" id="exampleFormControlInput2"
                                   placeholder="Pham"/>
                        </div>
                        <div className="form-check">
                            <label htmlFor="exampleFormControlInput3"></label>
                            <input type="email"
                                   value={this.state.email}
                                   onChange={(e)=>this.setState({
                                       email:e.target.value
                                   })}
                                   className="form-control" id="exampleFormControlInput3"
                                   placeholder="charlene@instawork.com"/>
                        </div>
                        <div className="form-check">
                            <label htmlFor="exampleFormControlInput4"></label>
                            <input type="text"
                                   value={this.state.phoneNum}
                                   onChange={(e)=>this.setState({
                                       phoneNum:e.target.value
                                   })}
                                   className="form-control" id="exampleFormControlInput4"
                                   placeholder="123-456-7890"/>
                        </div>
                    </div>
                    <div className={'list-group-item'}>
                        <h1>Role</h1>
                        <div className={'list-group'}>
                            <div className={'list-group-item'}>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="radio-role" id="radio-regular"/>
                                    <label className="form-check-label" htmlFor="radio-regular">
                                        Regular - Can't delete member
                                    </label>
                                </div>
                            </div>
                            <div className={'list-group-item'}>
                                <div className="form-check">
                                    <input className="form-check-input"
                                           value={this.state.isAdmin = false}

                                           type="radio" name="radio-role" id="radio-admin"
                                           checked/>
                                    <label className="form-check-label"
                                           value={this.state.isAdmin = true}


                                           htmlFor="radio-admin">
                                        Admin - Can delete member
                                    </label>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
                    <button className={'btn btn-primary'} onClick={()=>this.addTest(this.state)}>Save</button>

            </>
        )
    }
}