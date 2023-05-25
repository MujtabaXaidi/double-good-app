import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import databaseInstance from '../database/FirebaseUtils';
import {
  AppColors,
  AppFontFamily,
  AppFontSize,
  MAINCARD_WIDTH,
  WINDOW_WIDTH,
} from '../utils/AppStyle';
import PrimaryTextComp from '../components/PrimaryTextComp';
import AppContext from '../utils/AppContext';
import PrimaryButton from '../components/PrimaryButton';
import {StripeProvider} from '@stripe/stripe-react-native';

export default function Products() {
  const {Theme, Language} = useContext(AppContext);
  const [products, setProducts] = useState();

  const getProducts = async () => {
    await databaseInstance
      .getProducts()
      .then(res => {
        console.log('res of products', res._docs);
        setProducts(res._docs);
      })
      .catch(e => {
        console.log('error in products', e);
      });
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <StripeProvider
      publishableKey="pk_test_51NBDmlHmZhP9lSiHtm5QXsPxHXrRqKHkurCOF2TXET0k7fp73Gn7MxhtTEOK6FruDV3Ho13Fp1nPos2Qd2j1hyk600RvVNoR0T"
    //   urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
    //   merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
    >
      <View style={{flex: 1, alignItems: 'center'}}>
        <FlatList
          data={products}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  width: MAINCARD_WIDTH,
                  alignItems: 'center',
                  marginTop: 30,
                  backgroundColor: 'white',
                  borderRadius: 10,
                }}>
                <Image
                  style={{
                    width: WINDOW_WIDTH * 0.5,
                    height: WINDOW_WIDTH * 0.5,
                    resizeMode: 'contain',
                  }}
                  source={{uri: item._data?.imageUrl}}
                />
                <View
                  style={{
                    width: MAINCARD_WIDTH * 0.8,
                  }}>
                  <PrimaryTextComp
                    text={item._data.name}
                    customTextStyle={{
                      color: AppColors[Theme].primary,
                      fontSize: AppFontSize.large,
                      fontFamily: AppFontFamily.bold,
                    }}
                    customStyle={{
                      marginRight: 10,
                      marginVertical: 0,
                      marginTop: 10,
                    }}
                  />
                  <PrimaryTextComp
                    text={'$' + item._data.price}
                    customTextStyle={{
                      color: AppColors[Theme].secondary,
                      fontSize: AppFontSize.large,
                      fontFamily: AppFontFamily.regular,
                    }}
                    customStyle={{
                      marginRight: 10,
                      marginVertical: 0,
                    }}
                  />
                  <PrimaryTextComp
                    text={item._data.description}
                    customTextStyle={{color: AppColors[Theme].black}}
                    customStyle={{
                      marginRight: 10,
                      marginVertical: 0,
                      marginBottom: 15,
                    }}
                  />
                </View>
                <PrimaryButton
                  customStyle={{width: MAINCARD_WIDTH * 0.5}}
                  customView={{width: 0}}
                  text={'Buy'}
                  onPress={() => {
                    alert('Product Purchase in Progress');
                  }}
                />
              </View>
            );
          }}
        />
      </View>
    </StripeProvider>
  );
}

const styles = StyleSheet.create({});
