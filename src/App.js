/* import "./App.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState("");
  const sendMessage = () => {
    const formData = new FormData();
    formData.set("message", message);
    formData.set("file", files[0]);
    console.log(formData.get("file"));
    const reponse = fetch("http://localhost:4001/post", {
      method: "POST",
      body: formData,
      credentials: "include",
    });
  };
  return (
    <div className="App">
      <input
        placeholder="Message..."
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <input type="file" onChange={(e) => setFiles(e.target.files)} />
      <button onClick={() => sendMessage()}> Send Message</button>
    </div>
  );
} */

import React, { useState } from "eract";
import { Button, Modal, Dropdown } from "react-bootstrap";

function RectWithIconSelector() {
  const [showModal, setShowModal] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleRectClick = () => {
    setShowModal(true);
  };

  const handleIconSelect = (icon) => {
    setSelectedIcon(icon);
    setShowModal(false);
  };

  return (
    <div>
      <div className="rect" onClick={handleRectClick}></div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Select an icon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {selectedIcon ? selectedIcon.name : "Select an icon"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {icons.map((icon) => (
                <Dropdown.Item
                  key={icon.id}
                  onClick={() => handleIconSelect(icon)}
                >
                  {icon.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default RectWithIconSelector;

/* import React, { useState } from "react";
import Dropzone from "react-dropzone";

const FileUpload = () => {
  const [files, setFiles] = useState([]);

  const onDrop = (acceptedFiles) => {
    setFiles([...files, ...acceptedFiles]);
  };

  const removeFile = (file) => {
    setFiles(files.fiilter((f) => f !== file));
  };

  return (
    <div>
      <Dropzone onDrop={onDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <button>{files.length > 0 ? "Change" : "Upload"} files</button>
          </div>
        )}
      </Dropzone>
      <ul>
        {files.map((file) => (
          <li key={file.path}>
            {file.path} - {file.size} bytes
            <button onClick={() => removeFile(file)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileUpload; */

/* export default MyComponent; */
