import members from "../data/member.json"

const memberReducer=(state = members, action)=>{
    switch (action.type){
        case 'add-member':
            const newMember = {
                avatarImage: "https://improvephotography.com/wp-content/uploads/2017/07/DSCF5660-Edit-1.jpg",
                firstName: "Todd",
                lastName : "ODD",
                phoneNum:"123-456-7890",
                email:"1231231@1231231.com"
            }
            return[
                newMember,
                ...state,
            ];
        default:
            return members
    }
}
export default memberReducer;