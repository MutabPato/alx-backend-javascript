export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error());
    }
  });
}

handleResponseFromAPI(true)
  .then(() => {
    console.log('Got a response from the API');
  })
  .catch((error) => {
    console.error(error.message);
  })
  .finally(() => {
  });
