import React,{useState} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const EditScreen=()=>{
    const members = useSelector(state=>state.members)
    let[member,setMember] = useState({firstName:'',lastName:'',email:'',phoneNum:'',isAdmin: false});
    /**
    let {id} = useParams()
    const member_id= parseInt(id)
    */
    const dispatch = useDispatch()
    const deletehandler= (member)=>{
        dispatch({
            type:'delete-member',
            member
        })
    }
    const updateMemberHandler= (member)=>{
        const action = {
            type:'update-member',
            member
        }
        dispatch(action)
    }
    const firstNameChangeHander = (event) =>{
        const newMember = {
            ...member,
            firstName: event.target.value
        }
        setMember(newMember)
    }
    const lastNameChangeHander = (event) =>{
        const newMember = {
            ...member,
            lastName: event.target.value
        }
        setMember(newMember)
    }
    const phoneNumChangeHander = (event) =>{
        const newMember = {
            ...member,
            phoneNum: event.target.value
        }
        setMember(newMember)
    }
    const emailChangeHander = (event) =>{
        const newMember = {
            ...member,
            email: event.target.value
        }
        setMember(newMember)
    }
    const adminStatueChangeHandlerFalse = () =>{
        const newMember = {
            ...member,
            isAdmin :false
        }
        setMember(newMember)
    }
    const adminStatueChangeHandlerTrue = () =>{
        const newMember = {
            ...member,
            isAdmin :true
        }
        setMember(newMember)
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
                                   value={member.firstName}
                                   onChange={ firstNameChangeHander}
                                   className="form-control" id="exampleFormControlInput1"
                                   placeholder="Charlene"/>
                        </div>
                        <div className="form-check">
                            <label htmlFor="exampleFormControlInput2"></label>
                            <input type="text"
                                   value={member.lastName}
                                   onChange={lastNameChangeHander}
                                   className="form-control" id="exampleFormControlInput2"
                                   placeholder="Pham"/>
                        </div>
                        <div className="form-check">

                            <label htmlFor="exampleFormControlInput3"></label>
                            <input type="email"
                                   value={member.email}
                                   onChange={emailChangeHander}
                                   className="form-control" id="exampleFormControlInput3"
                                   placeholder="charlene@instawork.com"/>
                        </div>
                        <div className="form-check">
                            <label htmlFor="exampleFormControlInput4"></label>
                            <input type="text"
                                   value={member.phoneNum}
                                   onChange={phoneNumChangeHander}
                                   className="form-control" id="exampleFormControlInput4"
                                   placeholder="123-456-7890"/>
                        </div>
                    </div>
                    <div className={'list-group-item'}>
                        <h1>Role</h1>
                        <div className={'list-group'}>
                            <div className={'list-group-item'}>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="radio-role" id="radio-regular"
                                           onChange={adminStatueChangeHandlerFalse}/>
                                    <label className="form-check-label"
                                           htmlFor="radio-regular">
                                        Regular - Can't delete member
                                    </label>
                                </div>
                            </div>
                            <div className={'list-group-item'}>
                                <div className="form-check">
                                    <input className="form-check-input"
                                           type="radio" name="radio-role" id="radio-admin"
                                           onChange={adminStatueChangeHandlerTrue}/>
                                    <label className="form-check-label"
                                           htmlFor="radio-admin">
                                        Admin - Can delete member
                                    </label>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>

                <Link to={"/"}>
                    <button className={"btn btn-success"} >Edit</button>
                </Link>
                <Link to={"/"}>
                    <button className={"btn btn-danger"} >delete</button>
                </Link>
            </>



    )
}
export  default EditScreen