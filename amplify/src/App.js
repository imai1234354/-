import React, { useState } from 'react';
import { Storage, API } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

function App() {
  const [file, setFile] = useState(null);
  const [labels, setLabels] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const handleUpload = async () => {
    if (file) {
      const filename = file.name;
      await Storage.put(filename, file);
      const apiName = 'myapi';
      const path = '/detect-labels';
      const response = await API.post(apiName, path, {
        body: { key: filename },
      });
      setLabels(response.data);
    }
  };

  return (
    <div className="App">
      <h1>Image Recognition App</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <div>
        {labels.map((label, index) => (
          <p key={index}>{label.Name}: {label.Confidence.toFixed(2)}%</p>
        ))}
      </div>
    </div>
  );
}

export default App;
