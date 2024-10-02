import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => results.forEach((result) => {
      if (result.status === 'fulfilled') {
        return result.value;
      }
      return result.reason;
    }));
}
