import React, {useState} from 'react';
import PhoneInput from 'react-native-phone-number-input';
import TextInputMask from 'react-native-text-input-mask';
import {
  Incubator,
  View,
  Picker,
  MaskedInput,
  Text,
  Colors,
} from 'react-native-ui-lib';

const {TextField} = Incubator;

type listProps = {
  id: number;
  name: string;
};

const list: listProps[] = [
  {id: 1, name: 'test1'},
  {id: 2, name: 'test2'},
];

const Home = () => {
  const [selected, setSelected] = useState<listProps | null>(null);
  const [hour, setHour] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const phoneTextField = (val: string) => {
    //Check if we removing the last character
    console.log(val);
    console.log(phone);
    if (phone?.replace(' ', '') < val?.replace(' ', '')) {
      val = val.replace(/\D/g, '');

      //deleting first 90 for adding later
      if (val.length >= 2) {
        val = val.substring(2);
      }

      if (val.length >= 3) {
        val = val.substring(0, 3) + ' ' + val.substring(3);
      }

      if (val.length >= 7) {
        val = val.substring(0, 7) + ' ' + val.substring(7);
      }

      if (val.length >= 10) {
        val = val.substring(0, 10) + ' ' + val.substring(10);
      }

      return '+90 ' + val;
    } else {
      return val;
    }
  };
  const renderTimeText = (value: string) => {
    const paddedValue = value.padStart(4, '0');
    const hours = paddedValue.substring(0, 2);
    const minutes = paddedValue.substring(2, 4);

    return (
      <Text text20 grey20 center>
        {hours}
        <Text red10>h</Text>
        {minutes}
        <Text red10>m</Text>
      </Text>
    );
  };
  return (
    <View flex>
      <Text>Home</Text>
      <TextField
        placeholder={'React Native ui lib'}
        floatingPlaceholder
        formatter={(val: string) => val?.replace(/\D/g, '')}
        onChangeText={(val: string) => {
          console.log('onchange', val);
          setPhone(phoneTextField(val));
        }}
        enableErrors
        validate={['required', 'email']}
        validationMessage={[
          'Field is required',
          'Email is invalid',
          'Password is too short',
        ]}
        validateOnChange
        value={phone}
        maxLength={30}
      />
      <TextInputMask
        mask={'[00]{:}[00]'}
        onChangeText={setHour}
        placeholder={'TextInputMask'}
      />
      <PhoneInput
        placeholder=" "
        defaultValue={phone}
        defaultCode="TR"
        layout="first"
        onChangeText={setPhone}
        onChangeFormattedText={setPhone}
        autoFocus
      />

      <MaskedInput
        migrate
        renderMaskedText={phoneTextField}
        formatter={(value: string) => value?.replace(/\D/g, '')}
        keyboardType={'numeric'}
        maxLength={4}
        initialValue={''}
        value={phone}
        onChangeText={(value: string) => setPhone(value)}
      />

      {/* @ts-ignore */}
      <Picker
        placeholder="Favorite Language"
        floatingPlaceholder
        value={selected}
        label={'Favorite Language'}
        enableModalBlur={false}
        onChange={(item: listProps) => {
          setSelected(item);
          console.log(selected);
        }}
        topBarProps={{title: 'Languages'}}
        migrateTextField
        searchPlaceholder={'Search a language'}>
        {list.map(option => (
          <Picker.Item key={option.id} value={option.id} label={option.name} />
        ))}
      </Picker>
    </View>
  );
};

export default Home;
