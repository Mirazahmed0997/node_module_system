import app from './app';

const port = 5000;

const bootStrap = async () => {
  app.listen(port, () => {
    console.log(`🚀 Server is running at http://localhost:${port}`);
  });
};

bootStrap();
