export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error());
    }
  });
}

handleResponseFromAPI()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error.message);
  })
  .finally(() => {
    console.log('Got a response from the API');
  });
