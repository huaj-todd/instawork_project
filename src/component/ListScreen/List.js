import React from "react";

const ListScreen = () =>{
    return(
        <>
            <div className={'row'}>
                <div className={'col-11'}>
                    <h1>Team Member</h1>
                    <h5 className={'wd-member'}>We have zero members</h5>
                </div>
                <div className={'col-1'}>
                    <i className={"fa-solid fa-plus fa-2xl wd-icon-style"}/>
                </div>
            </div>
            <div className={'list-group'}>
                <div className={'list-group-item'}>
                    <div className={'row'}>
                        <div className={'col-3'}>
                            <img src="https://improvephotography.com/wp-content/uploads/2017/07/DSCF5660-Edit-1.jpg" className={'wd-image-size'} alt="avatar"/>
                        </div>
                        <div className={'col-6'}>
                            <div className={'wd-all-member'}>Ji Hua</div>
                            <div className={'wd-all-member wd-member-text'}>123-345-6789</div>
                            <div className={'wd-all-member wd-member-text'}>12345678@yahoo.com</div>
                        </div>

                    </div>
                </div>
                <div className={'list-group-item'}>
                    <div className={'row'}>
                        <div className={'col-3'}>
                            <img src="https://improvephotography.com/wp-content/uploads/2017/07/DSCF5660-Edit-1.jpg" className={'wd-image-size'} alt="avatar"/>
                        </div>
                        <div className={'col-6'}>
                            <div className={'wd-all-member'}>Ji Hua</div>
                            <div className={'wd-all-member wd-member-text'}>123-345-6789</div>
                            <div className={'wd-all-member wd-member-text'}>12345678@yahoo.com</div>
                        </div>

                    </div>
                </div>
                <div className={'list-group-item'}>
                    <div className={'row'}>
                        <div className={'col-3'}>
                            <img src="https://improvephotography.com/wp-content/uploads/2017/07/DSCF5660-Edit-1.jpg" className={'wd-image-size'} alt="avatar"/>
                        </div>
                        <div className={'col-6'}>
                            <div className={'wd-all-member'}>Ji Hua</div>
                            <div className={'wd-all-member wd-member-text'}>123-345-6789</div>
                            <div className={'wd-all-member wd-member-text'}>12345678@yahoo.com</div>
                        </div>

                    </div>
                </div>
                <div className={'list-group-item'}>
                    <div className={'row'}>
                        <div className={'col-3'}>
                            <img src="https://improvephotography.com/wp-content/uploads/2017/07/DSCF5660-Edit-1.jpg" className={'wd-image-size'} alt="avatar"/>
                        </div>
                        <div className={'col-6'}>
                            <div className={'wd-all-member'}>Ji Hua</div>
                            <div className={'wd-all-member wd-member-text'}>123-345-6789</div>
                            <div className={'wd-all-member wd-member-text'}>12345678@yahoo.com</div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
export  default  ListScreen
