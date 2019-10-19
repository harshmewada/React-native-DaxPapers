import {PermissionsAndroid} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import {ToastAndroid} from 'react-native';

async function reqStorage(durl, name) {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      ToastAndroid.showWithGravityAndOffset(
        'Download Started!',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        20,
        50,
      );
      const {config, fs} = RNFetchBlob;
      let PictureDir = fs.dirs.DownloadDir; // this is the pictures directory. You can check the available directories in the wiki.
      let options = {
        fileCache: true,
        addAndroidDownloads: {
          useDownloadManager: true, // setting it to true will use the device's native download manager and will be shown in the notification bar.
          notification: true,
          title: `${name}`,
          path: PictureDir + `/${name}.jpg`, // this is the path where your downloaded file will live in
          description: 'Downloading image.',
        },
      };
      config(options)
        .fetch('GET', `${durl}`)
        .then(res => {
          console.log('Downloaded');
        });
    } else {
      alert('Storage permission denied');
    }
  } catch (err) {
    alert(err);
  }
}
export default reqStorage;
