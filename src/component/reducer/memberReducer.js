import members from "../data/member.json"
import { useSelector } from 'react-redux'

const memberReducer=(state = members, action)=>{
    switch (action.type){
        case 'add-member':

            const newMember = {
                avatarImage: "https://improvephotography.com/wp-content/uploads/2017/07/DSCF5660-Edit-1.jpg",
                id: (new Date()).getTime() + '',
                ...action.member,
            }

            return[
                ...state,
                newMember

            ];
        default:
            console.log(members);
            return members;
    }
}
export default memberReducer;