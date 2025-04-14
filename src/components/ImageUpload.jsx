import React, { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState('');
  const [model, setModel] = useState(null);

  // Load the model when component mounts
  useEffect(() => {
    const loadModel = async () => {
      const loadedModel = await tf.loadLayersModel('/model/model.json');
      setModel(loadedModel);
      console.log('✅ Model loaded');
    };
    loadModel();
  }, []);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageURL = URL.createObjectURL(file);
    setImage(imageURL);

    const img = new Image();
    img.src = imageURL;
    img.onload = async () => {
      const tensor = tf.browser
        .fromPixels(img)
        .resizeNearestNeighbor([224, 224]) // adjust based on model input
        .toFloat()
        .expandDims();

      const predictions = await model.predict(tensor).data();
      const predictedIndex = predictions.indexOf(Math.max(...predictions));
      // Dummy labels (replace with your real class names)
      const labels = ['Healthy', 'Powdery Mildew', 'Rust', 'Blight'];

      setPrediction(labels[predictedIndex] || 'Unknown');
    };
  };

  return (
    <div className="upload-container">
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && <img src={image} alt="preview" width="300" style={{ margin: '1rem 0' }} />}
      {prediction && <h3>Prediction: 🌿 {prediction}</h3>}
    </div>
  );
};

export default ImageUpload;
