import {StyleSheet, Modal, TouchableOpacity, View, Text} from 'react-native';
import React, {useState, useContext} from 'react';
import PrimaryTextComp from '../components/PrimaryTextComp';
import {AppStrings} from '../utils/AppStrings';
import PrimaryButton from '../components/PrimaryButton';
import AppContext from '../utils/AppContext';
import DatePicker from 'react-native-date-picker';
import TextInputComp from '../components/TextInputComp';
import {
  AppFontSize,
  MAINCARD_WIDTH,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from '../utils/AppStyle';

export default function AddEventDetails(props) {
  const {Language, Theme} = useContext(AppContext);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startDateSelect, setStartDateSelect] = useState(false);
  const [endDateSelect, setEndDateSelect] = useState(false);
  const [eventName, setEventName] = useState('');
  const [teamName, setTeamName] = useState('');
  const [openModal, setOpenModal] = useState(false);

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <TextInputComp
        title={'Event Name'}
        onChangeText={val => {
          setEventName(val);
        }}
      />
      <TextInputComp
        title={'Team Name'}
        onChangeText={val => {
          setTeamName(val);
        }}
      />
      <PrimaryTextComp text={AppStrings[Language].enterEventDetails} />
      <DatePicker
        mode="date"
        modal
        open={startDateSelect}
        date={startDate}
        onConfirm={date => {
          setStartDateSelect(false);
          setStartDate(date);
          console.log('date', date);
        }}
        onCancel={() => {
          setStartDateSelect(false);
        }}
      />
      <DatePicker
        mode="date"
        modal
        open={endDateSelect}
        date={endDate}
        onConfirm={date => {
          setEndDateSelect(false);
          setEndDate(date);
        }}
        onCancel={() => {
          setEndDateSelect(false);
        }}
      />
      <View style={{width: MAINCARD_WIDTH}}>
        <TouchableOpacity onPress={() => setOpenModal(true)}>
          <PrimaryTextComp
            customTextStyle={{fontSize: AppFontSize.medium}}
            text={'Team Activity'}
          />
        </TouchableOpacity>
      </View>
      <PrimaryButton
        text={'Start Date: ' + startDate.toDateString()}
        onPress={() => setStartDateSelect(true)}
      />
      <PrimaryButton
        text={'End Date: ' + endDate.toDateString()}
        onPress={() => setEndDateSelect(true)}
      />
      <Modal
        transparent={true}
        visible={openModal}
        animationType="slide"
        style={{}}>
        <View
          style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
          <View
            style={{
              backgroundColor:'white',
              width: WINDOW_WIDTH,
              height: WINDOW_HEIGHT * 0.8,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              elevation: 10,
              borderTopWidth:1,
              borderLeftWidth:1,
              borderRightWidth:1
            }}>
            <TouchableOpacity onPress={() => setOpenModal(false)}>
              <PrimaryTextComp text={'Art & Culture'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setOpenModal(false)}>
              <PrimaryTextComp text={'Association & Club'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setOpenModal(false)}>
              <PrimaryTextComp text={'Education and Academics'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setOpenModal(false)}>
              <PrimaryTextComp text={'Health and Wellness'} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({});
