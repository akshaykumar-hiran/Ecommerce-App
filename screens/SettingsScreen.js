import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Settings</Text>
          <View style={{ width: 24 }} /> {/* Placeholder for alignment */}
        </View>

        {/* Options */}
        <ScrollView contentContainerStyle={styles.options}>
          <Option
            icon={<Ionicons name="globe-outline" size={20} color="#707070" />}
            label="Language"
          />
          <Option
            icon={
              <Ionicons
                name="notifications-outline"
                size={20}
                color="#707070"
              />
            }
            label="Notification"
          />
          <Option
            icon={<FontAwesome5 name="file-alt" size={20} color="#707070" />}
            label="Terms of Use"
          />
          <Option
            icon={<Entypo name="info-with-circle" size={20} color="#707070" />}
            label="Privacy Policy"
          />
          <Option
            icon={
              <Ionicons name="paper-plane-outline" size={20} color="#707070" />
            }
            label="Chat support"
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const Option = ({ icon, label }) => {
  return (
    <TouchableOpacity style={styles.optionRow}>
      <View style={styles.optionLeft}>
        {icon}
        <Text style={styles.optionText}>{label}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#707070" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 0 : 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#33302E',
    fontFamily:
      Platform.OS === 'ios' ? 'Poppins-SemiBold' : 'Poppins_600SemiBold',
  },
  options: {
    paddingBottom: 20,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 15,
    color: '#33302E',
    fontFamily:
      Platform.OS === 'ios' ? 'Poppins-SemiBold' : 'Poppins_600SemiBold',
    marginLeft: 15,
  },
});

export default SettingsScreen;
