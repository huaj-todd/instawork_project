import {useDispatch} from "react-redux";
import React, {useState} from "react";

const AddScreen = ()=>{
    let [FirstName,setFirstName] = useState('');
    let [LastName,setLastName] = useState('');
    let [Email,setEmail] = useState('');
    let [PhoneNum,setPhoneNum] = useState('');
    let [admin,setAdmin] = useState('')
    const dispatch = useDispatch();
    const addMemberClickHandler = () => {
        console.log(FirstName,LastName,Email,PhoneNum,admin)
        dispatch({type: 'add-member',
            firstName: FirstName,
            lastName:LastName,
            email:Email,
            phoneNum:PhoneNum,
            isAdmin: admin
        });
    }

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
                               value={FirstName}
                                onChange={(e)=>setFirstName(e.target.value)}
                               className="form-control" id="exampleFormControlInput1"
                               placeholder="Charlene"/>
                    </div>
                    <div className="form-check">
                        <label htmlFor="exampleFormControlInput2"></label>
                        <input type="text"
                               value={LastName}
                               onChange={(e)=>setLastName(e.target.value)}
                               className="form-control" id="exampleFormControlInput2"
                               placeholder="Pham"/>
                    </div>
                    <div className="form-check">

                        <label htmlFor="exampleFormControlInput3"></label>
                        <input type="email"
                               value={Email}
                               onChange={(e)=>setEmail(e.target.value)}
                               className="form-control" id="exampleFormControlInput3"
                               placeholder="charlene@instawork.com"/>
                    </div>
                    <div className="form-check">
                        <label htmlFor="exampleFormControlInput4"></label>
                        <input type="text"
                               value={PhoneNum}
                               onChange={(e)=>setPhoneNum(e.target.value)}
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
                                <label className="form-check-label"
                                       onChange={(e)=>setAdmin(e.target.value)}
                                       htmlFor="radio-regular">
                                    Regular - Can't delete member
                                </label>
                            </div>
                        </div>
                        <div className={'list-group-item'}>
                            <div className="form-check">
                                <input className="form-check-input"
                                       type="radio" name="radio-role" id="radio-admin"
                                       checked/>
                                <label className="form-check-label"
                                       onChange={(e)=>setAdmin(e.target.value)}
                                       htmlFor="radio-admin">
                                    Admin - Can delete member
                                </label>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
                <button className={'btn btn-primary'}onClick={addMemberClickHandler}>Save</button>

        </>
    )
}
export default AddScreen