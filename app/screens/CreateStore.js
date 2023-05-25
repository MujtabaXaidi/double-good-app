import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {
  AppColors,
  AppFontFamily,
  MAINCARD_WIDTH,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from '../utils/AppStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PrimaryTextComp from '../components/PrimaryTextComp';
import AppContext from '../utils/AppContext';
import PrimaryButton from '../components/PrimaryButton';
import TextInputComp from '../components/TextInputComp';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { PERMISSIONS,request, RESULTS } from 'react-native-permissions';

export default function CreateStore(props) {
  const {Theme, Language} = useContext(AppContext);
  const [image, setImage] = useState(null);
  const [imageName,setImageName] = useState(null);
  const [ImageExist, setImageExist] = useState(false);

  const cameraHandle = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = {uri: response.assets[0].uri};
        console.log('response', JSON.stringify(response));
        setImage(source);
        setImageName(response.assets[0].fileName)
      }
    });
  };

  const selectImage = () => {
    const options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.assets[0].uri};
        console.log('source', source);
        setImage(source);
        setImageName(response.assets[0].fileName)
      }
    });
  };

  const requestGalleryPermission = async () => {
    try {
      const granted = await request(
        PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
        {
          title: 'Gallery Permission',
          message: 'This app needs permission to access your gallery.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === RESULTS.GRANTED) {
        console.log('hello')
        selectImage()
      } else {
        console.log('Gallery permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };




  return (
    <View style={{alignItems: 'center'}}>
      <View
        style={{
          width: WINDOW_WIDTH,
          flexDirection: 'row',
          height: WINDOW_HEIGHT * 0.05,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{marginLeft: 15}}
          onPress={() => {
            props.navigation.goBack();
          }}>
          <Icon name="close" size={24} color={'black'} />
        </TouchableOpacity>
        <PrimaryTextComp
          text={'Pop-Up Store Builder'}
          customStyle={{marginLeft: WINDOW_WIDTH * 0.25}}
        />
      </View>

      <View
        style={{
          width: MAINCARD_WIDTH,
          backgroundColor: AppColors[Theme].white,
          alignItems: 'center',
          marginTop: 20,
        }}>
        <PrimaryTextComp
          text={'Your Store Photo'}
          customTextStyle={{fontFamily: AppFontFamily.bold}}
        />
        <PrimaryTextComp
          customTextStyle={{textAlign: 'center'}}
          text={
            'Choose a photo that shows you\nparticipating in your activity.'
          }
        />
        <TouchableOpacity
            onPress={()=>{requestGalleryPermission()}}
          style={{
            flexDirection: 'row',
            backgroundColor: AppColors[Theme].primary,
            height: WINDOW_HEIGHT * 0.05,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            width: WINDOW_WIDTH * 0.5,
            marginVertical: 15,
          }}>
          <Icon name="camera-outline" color={'white'} size={24} />
          <PrimaryTextComp
            text={'Add a Photo'}
            customTextStyle={{color: 'white', marginLeft: 10}}
          />
        </TouchableOpacity>
        <PrimaryTextComp text={'Allow photo access if prompted'} />
      </View>
      <TextInputComp
        customStyle={{backgroundColor: 'white', borderWidth: 0}}
        title={'Display Name'}
        placeholder={'Enter your Store Display Name'}
      />
      <TextInputComp
        customStyle={{backgroundColor: 'white', borderWidth: 0}}
        title={'Fundraising Goal'}
        placeholder={'Amount of Fundraising Goal'}
      />
      <Pressable
        onPress={()=>{selectImage()}}
        style={{
          width: WINDOW_WIDTH * 0.6,
          height: WINDOW_HEIGHT * 0.065,
          borderRadius: 50,
          backgroundColor: ImageExist
            ? AppColors[Theme].primary
            : AppColors[Theme].grey,
          marginTop: 25,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: AppColors[Theme].white,
            fontFamily: AppFontFamily.regular,
          }}>
          Create my Pop-Up Store
        </Text>
      </Pressable>
      <PrimaryTextComp
      text={'Your must be 13 years of age to create a pop-up store'}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
