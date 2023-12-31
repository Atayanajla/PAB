import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Halaman1 from '../tampilanAplikasi/Halaman1'
import Halaman2 from '../tampilanAplikasi/Halaman2'
import Halaman3 from '../tampilanAplikasi/Halaman3'
import SeeMorePopuler from '../tampilanAplikasi/SeeMorePopuler'
import SeeMoreRekomendasi from '../tampilanAplikasi/SeeMoreRekomendasi'

export default function NavigationPage() {
    const PindahHalaman = createStackNavigator();
    return (
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
            <PindahHalaman.Screen
                component={SeeMorePopuler}
                name='All Populer'
            />
            <PindahHalaman.Screen
                component={SeeMoreRekomendasi}
                name='All Rekomendasi'
            />
        </PindahHalaman.Navigator>
    )
}
