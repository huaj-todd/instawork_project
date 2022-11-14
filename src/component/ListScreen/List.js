import React from "react";
import ListItem from "./ListItem";
import {useSelector} from "react-redux";


const ListScreen  = () =>{
    const members = useSelector(state=>state.members)
    return(

        <>
                <div className={'row'}>
                    <div className={'col-11'}>
                        <h1>Team Member</h1>
                        <h5 className={'wd-member'}>We have {Object.keys(members).length} members</h5>
                    </div>
                    <div className={'col-1'}>
                        <a href={'/add'}>
                            <button type="button" className={'btn btn-light wd-round-btn'}>
                                <i className={"fa-solid fa-plus fa-2xl wd-icon-style"}/>
                            </button>
                        </a>


                    </div>
                </div>
                <div className={'list-group'}>
                    {
                        members?.map(member =>{
                            return(<ListItem member = {member} key={member.id}/>);
                        })
                    }
                </div>
        </>

    );
};
export  default  ListScreen
