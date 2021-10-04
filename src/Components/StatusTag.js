import React from 'react';

function StatusTag(props) {
    let classes = 'tag';

    switch (props.status) {
        case '3':
            classes += ' has-background-success has-text-white ';
            break;

        case '2':
            classes += ' has-background-warning has-text-dark ';
            break;

        case '1':
            classes += ' has-background-danger has-text-white ';
            break;

        default:
    }

    const getTagName = (status) => {
        let tag;

        switch (status) {
            case '1':
                tag = 'To Do';
                break;

            case '2':
                tag = 'Doing';
                break;

            case '3':
                tag = 'Done';
                break;

            default:
        }

        return tag;
    };

    return (
        <span className={classes}>
            {getTagName(props.status)}
        </span>
    );
}

export default StatusTag;