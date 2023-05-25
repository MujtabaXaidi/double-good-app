import {StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity} from 'react-native';
import React,{useContext,useEffect,useState} from 'react';
import PrimaryTextComp from '../components/PrimaryTextComp';
import { AppColors, AppFontFamily, MAINCARD_WIDTH, WINDOW_HEIGHT, WINDOW_WIDTH } from '../utils/AppStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AppContext from '../utils/AppContext';
import databaseInstance from '../database/FirebaseUtils';
import { ChatModel } from '../model/ChatModel';
import { firebase } from "@react-native-firebase/firestore"

export default function Chat() {

  const{Theme,Language,userID,userDetails}=useContext(AppContext)
  console.log('userDetails', userDetails)
  const [messages, setMessages] = useState([])
  const [content, setContent] = useState('')
  const sendMessage=()=>{
    let chat= new ChatModel(
      userID,
      userID,
      "txt",
      content,
      new Date(),
      userDetails._data.username
    )
    
    databaseInstance.sendMessage(chat).then(res=>{
      console.log('res', res)
      setContent("")
    })
  }
  let lastDocTimestamp = null;
  function handleQuerySnapshot(querySnapshot) {
    // Iterate over the documents in the query snapshot
    let messages=[]
    querySnapshot.forEach((doc) => {
      // Get the document data
      const data = doc.data();
      messages.push(doc.data());
      // Do something with the document data
      
  
      // Update the last document's timestamp
      lastDocTimestamp = doc.get('timeStamp');
    });
    setMessages(messages);
  }
  const getMesasge=async()=>{   
    let query;
    query=firebase.firestore().collection("Event").doc(userID).collection("Message").limit(10).orderBy("timeStamp","desc");
 
    query.onSnapshot((querySnapshot) => {
      // If this is the first query snapshot, call the handleQuerySnapshot() function to process all the documents
      if (lastDocTimestamp === null) {
        handleQuerySnapshot(querySnapshot);
      } else {
        // Filter the query snapshot to get only the new documents that were added since the last query
        const newDocs = querySnapshot.docChanges().filter((change) => {
          return change.type === 'added' && change.doc.get('timeStamp') > lastDocTimestamp;
        });
    
        // Process the new documents

        let message=[]
        newDocs.forEach((change) => {
          const data = change.doc.data();
          message.push(data)
          setMessages((prev)=>[data,...prev]);
          console.log(data);
        });
        lastDocTimestamp = newDocs.length > 0 ? newDocs[newDocs.length - 1].doc.get('timeStamp') : lastDocTimestamp;
      }
    }).catch((error) => {
      // Handle any errors that occur while attaching the listener
      console.error(error);
    });
  }
  useEffect(() => {
    
  
    getMesasge();
    
  }, [])
  
  return (
    <View style={{flex: 1,}}>
      <FlatList
      inverted={true}
        data={messages}
        renderItem={({item}) => {
          return (
            <View>
              {/* <PrimaryTextComp
            text={item.message}
            />
            <View style={{flexDirection:'row'}}>
            <Text>
              {item.name}
            </Text>
            <Text style={{marginLeft:10}}>{item.time.toLocaleString()}</Text>
            </View> */}
              <View
                style={[
                  styles.bubble,
                  item.userId === userID
                    ? styles.meBubble
                    : styles.otherBubble,
                ]}>
                <Text
                  style={[
                    styles.text,
                    item.userId === userID
                      ? styles.meText
                      : styles.otherText,
                  ]}>
                  {item.content}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text>@{item.senderName}</Text>
                  <Text style={{marginLeft: 10}}>
                    {/* {`${ new Date(item?.timeStamp.seconds * 1000 + item?.timeStamp.nanoseconds / 1000000).toLocaleString()}`} */}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
      />
      <View style={{width:WINDOW_WIDTH,flexDirection:'row',alignItems:'center',width:WINDOW_WIDTH,justifyContent:'space-between',backgroundColor:'white'}}>
      <TextInput
      value={content}
      placeholder='Type your message here.....'
      style={{backgroundColor:'white',width:MAINCARD_WIDTH,marginLeft:15}}
      onChangeText={(val)=>setContent(val)}
      />
      <TouchableOpacity
      onPress={()=>sendMessage()}
      style={{width:50,height:50,alignItems:'center',justifyContent:'center',backgroundColor:AppColors[Theme].primary}}>
        <Icon
        name='arrow-right'
        size={24}
        color={'white'}
        />
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    borderRadius: 15,
    padding: 10,
    maxWidth: '80%',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  meBubble: {
    backgroundColor: '#007aff',
    alignSelf: 'flex-end',
    borderTopRightRadius:0,
    marginRight:10,
  },
  otherBubble: {
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
    marginLeft:10,
    borderTopLeftRadius:0
  },
  text: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'left',
  },
  meText: {
    color: '#fff',
    textAlign: 'right',
    fontFamily:AppFontFamily.regular,
  },
  otherText: {
    color: '#333',
    textAlign: 'left',
    fontFamily:AppFontFamily.regular,
  },
});
