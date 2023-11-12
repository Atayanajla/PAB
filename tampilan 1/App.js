import React from 'react'
import Halaman1 from './tampilanAplikasi/Halaman1'
import Halaman2 from './tampilanAplikasi/Halaman2'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Halaman3 from './tampilanAplikasi/Halaman3'

const PindahHalaman = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <PindahHalaman.Navigator>
        <PindahHalaman.Screen 
          component={Halaman1} 
          name='Halaman 1' 
        />
        <PindahHalaman.Screen 
          component={Halaman2} 
          name='Halaman 2' 
        />
        <PindahHalaman.Screen 
          component={Halaman3} 
          name='Halaman 3' 
        />
      </PindahHalaman.Navigator>
    </NavigationContainer>
    
  )
}
