import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let photo; let
    user;
  try {
    photo = await uploadPhoto();
    user = await createUser();
  } catch (error) {
    console.error(error);
    throw error;
  }

  return { photo, user };
}
