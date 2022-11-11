import React from 'react'

const ListItem = ({member  =    {
    "avatarImage": "https://improvephotography.com/wp-content/uploads/2017/07/DSCF5660-Edit-1.jpg",
    "firstName": "Ji",
    "lastName": "Hua",
    "phoneNum": "123-456-7890",
    "email": "1234567890@123.com",
    "isAdmin": true
}
}

    ) =>{
    return (
        <div className={'list-group-item'}>
            <div className={'row'}>
                <div className={'col-3'}>
                    <img src={member.avatarImage} className={'wd-image-size'} alt="avatar"/>
                </div>
                <div className={'col-6'}>
                    <div className={'wd-member-text'}>{member.firstName} {member.lastName} {member.isAdmin ? "(admin)" : ""}</div>
                    <div className={'wd-member-text'}>{member.phoneNum}</div>
                    <div className={'wd-member-text'}>{member.email}</div>
                </div>

            </div>
        </div>
    );
}
export default ListItem
