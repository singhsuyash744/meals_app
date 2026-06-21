import { StatusBar } from 'react-native';
import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import{createNativeStackNavigator} from '@react-navigation/native-stack';
export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator name="MealsCategories" component={CategoriesScreen}/>
        </Stack.Navigator>
        <CategoriesScreen />
      </NavigationContainer>
      
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});