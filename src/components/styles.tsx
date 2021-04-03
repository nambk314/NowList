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
    buttonDelete: {
      height: 4*FONT_SIZE,
      borderBottomColor: '#bbb',
      borderStyle: 'solid',
      borderBottomWidth: StyleSheet.hairlineWidth,
      flexDirection: 'row',
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#d11a2a',
      paddingHorizontal: 0.8*FONT_SIZE,
    },
    textDelete: {
      fontWeight: '400',
      fontSize: FONT_SIZE,
      color: '#fff',
      width: 'auto',
      alignSelf: 'center',
    },
    buttonArchive: {
      height: 4*FONT_SIZE,
      borderBottomColor: '#bbb',
      borderStyle: 'solid',
      borderBottomWidth: StyleSheet.hairlineWidth,
      flexDirection: 'row',
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#3CB371',
      paddingHorizontal: 0.8*FONT_SIZE,
    },
  });

export default styles;