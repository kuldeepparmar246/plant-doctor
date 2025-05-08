# Plant Doctor

An intelligent Progressive Web Application (PWA) that empowers farmers and agricultural researchers to detect plant diseases, receive treatment guidance, and get real-time weather updates all powered by AI and machine learning.

## Features

- Upload plant leaf images for instant disease detection using a CNN model
- AI Assistant to suggest disease treatment and prevention methods
- Real-time weather updates for smart farming decisions
- Secure authentication
- Installable PWA that works like a mobile app

##  Getting Started
For Running the app you need three repo's
#### Frontend : [here](https://github.com/kuldeepparmar246/plant-doctor)
#### Server : [here](https://github.com/kuldeepparmar246/plant-doctor-server)
#### Model-Server: [here](https://github.com/kuldeepparmar246/plant-doctor-model-server)

#### Note : For configuration of the server read their README file

### 1. Clone the Repo

```bash
git clone https://github.com/kuldeepparmar246/plant-doctor.git
cd plant-doctor
```

### 2. Setup Environment Variables
For the React frontend, create a .env file inside root:

```env
VITE_SERVER_URL=your-server-domain
VITE_APP_SERVER_URL=your-model-server-domain
```

### 3. Install Dependencies

Use the package manager [npm](https://docs.npmjs.com/) to install all necessary packages.

```bash
npm install
```

### 4. Run Locally

```bash
npm run dev
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://github.com/kuldeepparmar246/plant-doctor/blob/master/LICENSE.txt)