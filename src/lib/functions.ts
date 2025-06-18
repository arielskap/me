export const calcBirthday = (birthday: string) => {
  const birthdayDate = new Date(birthday);
  const ageTime = Date.now() - birthdayDate.getTime();
  const ageDate = new Date(ageTime);
  return Math.abs(ageDate.getUTCFullYear() - 1971);
};

export const classNames = (...classes: Array<string | undefined>) => {
  return classes.filter(Boolean).join(' ');
};

export function checkMicrophonePermission() {
  return new Promise((resolve, reject) => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(stream => {
        // Stop all tracks to release the microphone.
        stream.getTracks().forEach(track => track.stop());
        resolve(true); // User granted permission
      })
      .catch(error => {
        if (
          error.name === 'NotAllowedError' ||
          error.name === 'PermissionDeniedError'
        ) {
          resolve(false); // User denied permission
        } else {
          reject(error); // Other errors occurred
        }
      });
  });
}
