import React from 'react';

const LMSHeader = (props: any) => {
    return (
        <React.Fragment>
            <div className="header">
                <p className="logo">Library Management System</p>
                <div className="header-right">
                    <p> Hello {props.username}!!!</p>
                </div>
            </div>
        </React.Fragment>
    )
};

export default LMSHeader;