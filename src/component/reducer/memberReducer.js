import members from "../data/member.json"
import { useSelector } from 'react-redux'

const memberReducer=(state = members, action)=>{
    switch (action.type){
        case 'update-member':
            const updated_member = state.map(member =>{
                const edit_member = member.id === action.member.id ? action.member :'';
                return edit_member
            });
            return updated_member
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
        case 'delete-member':
            return state.filter(member=>member !== action.member)
        default:
            return members;
    }
}
export default memberReducer;