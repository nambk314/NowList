import { 
    StyleSheet,
} from 'react-native';
import { FONT_SIZE } from '../constant';

const styles = StyleSheet.create({
    container: {
      height: 4*FONT_SIZE,
      borderBottomColor: '#bbb',
      borderStyle: 'solid',
      borderBottomWidth: StyleSheet.hairlineWidth,
      flexDirection: 'row',
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'space-between',
      //backgroundColor: 'red',
    },
    text: {
      fontWeight: '400',
      fontSize: FONT_SIZE,
      marginVertical: 1.5*FONT_SIZE,
      marginHorizontal: 1.5*FONT_SIZE,
      width: 'auto',
      alignSelf: 'center',
    },
    buttonAdd: {
      marginHorizontal: 0.8*FONT_SIZE,
    },
    textAdd: {
      fontWeight: '400',
      fontSize: FONT_SIZE,
      color: '#0000EE',
      width: 'auto',
      alignSelf: 'flex-end',
    },
  });

export default styles;