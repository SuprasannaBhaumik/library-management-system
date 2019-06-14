import React from 'react';

interface Props {
    username: string;
    imgUrl: string;
}

const LMSHeader = (props: Props) => {
    return (
        <React.Fragment>
            <div className="header">
                <p className="logo">Library Management System</p>
                {props.username &&
                <div className="header-right">
                    <p> Hello {props.username}!!!</p><img src={props.imgUrl} alt="profile" width="40" height="40" className="rounded-circle"/>
                </div>
                }
            </div>
        </React.Fragment>
    )
};

export default LMSHeader;