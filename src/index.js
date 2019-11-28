import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Time from './Time';

import "./index.css";

const FileList = ({ files }) => (
    <table className="file-list">
        <tbody>
            {files.map(file => (
                <FileListItem file={file} />
            ))}
        </tbody>

    </table>
)
FileList.propTypes = {
    files: PropTypes.array
};

const FileListItem = ({ file }) => (
    <tr className="file-list-item">
        <td><IdOrder file={file}/></td>
        <td><FileIcon file={file}/></td>
        <td><FileName file={file}/></td>
        <td><CommitMessage commit={file.latestCommit} /></td>
        <td className="age"><Time time={file.updated_at} /></td>
    </tr>
);
FileListItem.propTypes = {
    file: PropTypes.object.isRequired
};

const IdOrder = ({ file}) => (
    <span>{file.id}</span>
)
IdOrder.propTypes = {
    file: PropTypes.number.isRequired
};

const CommitMessage = ({ commit }) => (
    <span className="commit-message">
        {commit.message}
    </span>
)
CommitMessage.propTypes = {
    commit: PropTypes.object.isRequired
};

function FileIcon({ file }) {
    let icon = 'fa-file-text-o';
    if(file.type === 'folder') {
        icon = 'fa-folder';
    }
    return (
        <span className="file-icon">
            <i className={`fa ${icon}`}/>
        </span>
    );
}
FileIcon.propTypes = {
    file: PropTypes.object.isRequired
};

const FileName = ({ file }) => {
    return (
        <span className="file-name">{file.name}</span>
    );
}
FileName.propTypes = {
    file: PropTypes.object.isRequired
};

const testFiles = [
    {
        id: 1,
        name: 'src',
        type: 'folder',
        updated_at: "2017-07-11 21:24:00",
        latestCommit: {
            message: 'Initial commit'
        }
    },
    {
        id: 2,
        name: 'tests',
        type: 'folder',
        updated_at: "2019-07-11 21:24:00",
        latestCommit: {
            message: 'Third commit'
        }
    },
    {
        id: 3,
        name: 'README',
        type: 'file',
        updated_at: "2018-07-18 21:24:00",
        latestCommit: {
            message: 'Added a readme'
        }
    },
];

ReactDOM.render(<FileList files={testFiles}/>, 
    document.getElementById('root'));