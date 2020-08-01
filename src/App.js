import React from 'react';
import PropTypes from 'prop-types';
import Time from './time';
import './index.css';

const FileList = ({ files }) => (
  <table className='file-list'>
    <tbody>
      {files.map(file => (
        <FileListItem key={file.id} file={file}/>
      ))}
    </tbody>
  </table>
);

FileList.propTypes = {
  file: PropTypes.array
}

const FileListItem = ({ file }) => (
  <tr className='file-list-item'>
    {getFileName(file)}
    <CommitMessage commit={file.latestCommit}/>
    <td className='age'>
      <Time time={file.updated_at}/>
    </td>
  </tr>
);

FileListItem.propTypes = {
  file: PropTypes.object.isRequired
}

const FileIcon = ({ file }) => {
  let icon = 'fa-file-text-o';
  file.type === 'folder' ? icon = 'fa-folder' : icon = 'fa-file-text-o';

  return(
    <td className='file-icon'>
      <i className={`fa ${icon}`}/>
    </td>
  )

}

FileIcon.propTypes = {
  file: PropTypes.object.isRequired
}

const getFileName = (file) => {
  return [
    <FileIcon file={file} key={0}/>,
    <td className='file-name' key={1}>{file.name}</td>
  ]
}

const CommitMessage = ({ commit }) => (
  <td className='commit-message'>
    {commit.message}
  </td>
);

CommitMessage.propTypes = {
  commit: PropTypes.object.isRequired
}

const testFiles = [
  {
    id: 1,
    name: 'src',
    type: 'folder',
    updated_at: '2016-07-11 21:24:00',
    latestCommit: {
      message: 'Initial Commit'
    }
  },
  {
    id: 2,
    name: 'tests',
    type: 'folder',
    updated_at: '2016-07-11 21:24:00',
    latestCommit: {
      message: 'Initial Commit'
    }
  },
  {
    id: 3,
    name: 'README',
    type: 'file',
    updated_at: '2016-07-18 21:24:00',
    latestCommit: {
      message: 'Added a readme'
    }
  }
]


class App extends React.Component{
  render(){
    return (
      <FileList files={testFiles}/>
    );
  }
}

export default App;
