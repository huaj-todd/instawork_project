import React from "react";
const AddScreen = ()=>{
    return(
        <>
            <h1>Team Member</h1>
            <h5 className={'wd-member'}>Set email, location, and role.</h5>
            <div className={'list-group'}>
                <div className={'list-group-item'}>
                    <h1>Info</h1>
                    <div className="form-check">
                        <label htmlFor="exampleFormControlInput1"></label>
                        <input type="text" className="form-control" id="exampleFormControlInput1"
                               placeholder="Charlene"/>
                    </div>
                    <div className="form-check">
                        <label htmlFor="exampleFormControlInput2"></label>
                        <input type="text" className="form-control" id="exampleFormControlInput2"
                               placeholder="Pham"/>
                    </div>
                    <div className="form-check">
                        <label htmlFor="exampleFormControlInput3"></label>
                        <input type="email" className="form-control" id="exampleFormControlInput3"
                               placeholder="charlene@instawork.com"/>
                    </div>
                    <div className="form-check">
                        <label htmlFor="exampleFormControlInput4"></label>
                        <input type="text" className="form-control" id="exampleFormControlInput4"
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
                                <input className="form-check-input" type="radio" name="radio-role" id="radio-admin"
                                       checked/>
                                <label className="form-check-label" htmlFor="radio-admin">
                                    Admin - Can delete member
                                </label>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
            <button className={'btn btn-primary'}>Save</button>
        </>
    )
}
export default AddScreen