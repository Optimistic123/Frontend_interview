import { useState } from 'react';
import './App.css'
import File from './components/File';
import Folder from './components/Folder';
const folderConfig = [
  {
    name: "src",
    children: [
      {
        name: "folder 1",
        children: [
          {
            name: "sub folder 1",
            children: [],
            type: "folder",
          },
          {
            name: "file 1",
            children: [],
            type: "file",
          },
        ],
      },
    ],
    type: "folder",
  },
  {
    name: "rootFile",
    type: "file",
    children: [],
  },
];

function App() {
  const [folderStructure, setFolderStructure] = useState(folderConfig);

  const renderFolderStruc = () => {
    return folderStructure.map(({name, children, type}) => {
      if(type== "file") {
        return <File name={name} />
      } else {
        return <Folder name={name} children={children} type={type} />
      }
    })
  }
  return (
    <>
      {renderFolderStruc()}
    </>
  )
}

export default App
