import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useContext} from 'react';
import PrimaryTextComp from '../components/PrimaryTextComp';
import AppContext from '../utils/AppContext';
import {
  AppColors,
  AppFontFamily,
  AppFontSize,
  MAINCARD_WIDTH,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from '../utils/AppStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PrimaryButton from '../components/PrimaryButton';

export default function Hello(props) {
  const {Theme, Language} = useContext(AppContext);

  const ListFooterComponent = () => {
    return <PrimaryButton text={'Invite Participants'} />;
  };

  const dummyData = [
    {
      name: 'Mujtaba',
      amount: '$25',
    },
    {
      name: 'Mujtaba',
      amount: '$25',
    },
    {
      name: 'Mujtaba',
      amount: '$25',
    },
  ];

  return (
    <ScrollView nestedScrollEnabled>
      <View
        style={{
          backgroundColor: AppColors[Theme].primary,
          height: WINDOW_HEIGHT * 0.4,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{margin: 10}}
          onPress={() => {
            props.navigation.navigate('Home');
          }}>
          <Icon
            name="keyboard-backspace"
            size={24}
            color={AppColors[Theme].white}
          />
        </TouchableOpacity>
        <View style={{marginLeft: 15}}>
          <PrimaryTextComp
            text={'Organizer'}
            customTextStyle={{
              color: AppColors[Theme].white,
              fontSize: AppFontSize.medium,
            }}
            customStyle={{marginBottom: 0}}
          />
          <PrimaryTextComp
            text={'Event Name '}
            customTextStyle={{
              color: AppColors[Theme].white,
              fontFamily: AppFontFamily.bold,
              fontSize: AppFontSize.medium,
            }}
            customStyle={{marginBottom: 0}}
          />
          <PrimaryTextComp
            text={'15 May to 19 May'}
            customTextStyle={{
              color: AppColors[Theme].white,
              fontSize: AppFontSize.medium,
            }}
          />
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            width: MAINCARD_WIDTH,
            backgroundColor: AppColors[Theme].white,
            marginTop: 15,
            borderRadius: 10,
          }}>
          <PrimaryTextComp
            customTextStyle={{
              fontSize: AppFontSize.medium,
              color: AppColors[Theme].black,
            }}
            text={'Event Begins in\n13 days, 20 hours, 5 mins'}
            customStyle={{marginLeft: 15}}
          />
        </View>
        <View
          style={{
            width: MAINCARD_WIDTH,
            backgroundColor: AppColors[Theme].white,
            marginTop: 15,
            borderRadius: 10,
          }}>
          <PrimaryTextComp
            customTextStyle={{fontSize: AppFontSize.small}}
            text={'PAYOUT MANAGER'}
            customStyle={{marginLeft: 15}}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 5,
              alignItems: 'center',
            }}>
            <PrimaryTextComp
              text={'Event Earnings'}
              customTextStyle={{
                fontSize: AppFontSize.large,
                color: AppColors[Theme].black,
              }}
              customStyle={{marginTop: 0, marginLeft: 10}}
            />
            <PrimaryTextComp
              text={'$10'}
              customTextStyle={{
                fontSize: AppFontSize.extraLarge,
                color: AppColors[Theme].black,
                fontFamily: AppFontFamily.bold,
              }}
              customStyle={{marginTop: 0, marginRight: 10}}
            />
          </View>
        </View>
        <View
          style={{
            width: MAINCARD_WIDTH,
            backgroundColor: AppColors[Theme].white,
            marginTop: 15,
            borderRadius: 10,
          }}>
          <PrimaryTextComp
            customTextStyle={{fontSize: AppFontSize.small}}
            text={'SECURE & SIMPLE'}
            customStyle={{marginLeft: 15}}
          />
          <PrimaryTextComp
            customTextStyle={{
              fontSize: AppFontSize.small,
              color: AppColors[Theme].black,
            }}
            text={
              'Verify yourself and then select how to receive your payments.'
            }
            customStyle={{marginHorizontal: 15}}
          />
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <PrimaryTextComp
              customTextStyle={{
                fontSize: AppFontSize.small,
                color: AppColors[Theme].primary,
              }}
              text={'Get Started'}
              customStyle={{marginHorizontal: 15}}
            />
            <Icon
              name="arrow-right"
              size={18}
              color={AppColors[Theme].primary}
            />
          </TouchableOpacity>
        </View>
        <View style={{width: MAINCARD_WIDTH}}>
          <PrimaryTextComp
            text={'Leader Board'}
            customStyle={{marginLeft: 0, marginTop: 30}}
            customTextStyle={{
              color: AppColors[Theme].black,
              fontFamily: AppFontFamily.bold,
              fontSize: AppFontSize.extraLarge,
            }}
          />
        </View>
        <FlatList
          data={dummyData}
          contentContainerStyle={{width: WINDOW_WIDTH, alignItems: 'center'}}
          ListFooterComponent={ListFooterComponent}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  width: MAINCARD_WIDTH,
                  flexDirection: 'row',
                  height: WINDOW_HEIGHT * 0.08,
                  backgroundColor: AppColors[Theme].white,
                  margin: 10,
                  alignItems: 'center',
                  borderRadius: 10,
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: 25,
                      backgroundColor: 'black',
                      marginHorizontal: 15,
                    }}
                  />
                  <PrimaryTextComp text={item.name} />
                </View>
                <PrimaryTextComp
                  text={item.amount}
                  customTextStyle={{fontFamily: AppFontFamily.bold}}
                  customStyle={{marginRight: 15}}
                />
              </View>
            );
          }}
        />
        <View
          style={{
            width: MAINCARD_WIDTH,
            backgroundColor: AppColors[Theme].white,
            marginTop: 15,
            borderRadius: 10,
          }}>
          <PrimaryTextComp
            text={'Event Details'}
            customTextStyle={{
              color: AppColors[Theme].black,
              fontFamily: AppFontFamily.bold,
              fontSize: AppFontSize.large,
              marginLeft: 15,
            }}
          />
          <PrimaryTextComp
            text={'EVENT CODE'}
            customTextStyle={{
              color: AppColors[Theme].black,
              marginLeft: 15,
              marginBottom: 0,
            }}
            customStyle={{marginBottom: 0}}
          />
          <PrimaryTextComp
            text={'JKHVPQ'}
            customTextStyle={{
              color: AppColors[Theme].black,
              fontFamily: AppFontFamily.bold,
              fontSize: AppFontSize.large,
              marginLeft: 15,
            }}
            customStyle={{marginTop: 0}}
          />
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                marginBottom: 15,
                borderColor: 'grey',
                borderBottomWidth: 0.5,
                width: MAINCARD_WIDTH * 0.95,
              }}
            />
          </View>
          <PrimaryTextComp
            text={'START DATE'}
            customTextStyle={{marginLeft: 15}}
          />
          <PrimaryTextComp
            text={'FRIDAY, May 15, 2023'}
            customTextStyle={{marginLeft: 15, color: AppColors[Theme].black}}
          />
          <PrimaryTextComp
            text={'END DATE'}
            customTextStyle={{marginLeft: 15}}
          />
          <PrimaryTextComp
            text={'MONDAY, May 19, 2023'}
            customTextStyle={{marginLeft: 15, color: AppColors[Theme].black}}
          />
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                marginBottom: 15,
                borderColor: 'grey',
                borderBottomWidth: 0.5,
                width: MAINCARD_WIDTH * 0.95,
              }}
            />
          </View>
          <PrimaryTextComp
            text={'ORGANIZER'}
            customTextStyle={{marginLeft: 15}}
          />
          <PrimaryTextComp
            text={'Jeff Bezos'}
            customTextStyle={{marginLeft: 15, color: AppColors[Theme].black}}
          />
          <PrimaryButton
          text={'Share Event Code'}
          customStyle={{width:WINDOW_WIDTH*0.5}}
          customView={{width:MAINCARD_WIDTH}}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
