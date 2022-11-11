import React from "react";
import ListItem from "./ListItem";
import member from "./member.json"
const ListScreen = () =>{
    return(
        <>
            <div className={'row'}>
                <div className={'col-11'}>
                    <h1>Team Member</h1>
                    <h5 className={'wd-member'}>We have {Object.keys(member).length} members</h5>
                </div>
                <div className={'col-1'}>
                    <i className={"fa-solid fa-plus fa-2xl wd-icon-style"}/>
                </div>
            </div>
            <div className={'list-group'}>
                {
                    member.map(member =>{
                        return(<ListItem member = {member}/>);
                    })
                }

            </div>
        </>
    )
}
export  default  ListScreen
