import React, {useState} from 'react';
import {Box, Text} from 'native-base';
import {NativeBaseProvider} from 'native-base';
import appTheme from './src/theme/appTheme';
import Slider from './src/components/Slider/Slider';

const App = () => {
  const [value, setValue] = useState(0);
  return (
    <NativeBaseProvider theme={appTheme}>
      <Box
        justifyContent="center"
        flex={1}
        backgroundColor="white"
        paddingX={4}>
        <Slider
          maximumValue={100}
          value={value}
          setValue={setValue}
          title="Standart Ped"
        />
      </Box>
    </NativeBaseProvider>
  );
};

export default App;
