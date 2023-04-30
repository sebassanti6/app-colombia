import MainPage from "./MainPage";
import {Icon, Tab} from "react-native-elements"
import Regiones from './Regiones'

const Tab = createBottonTabNavigator()

function BarraNav(){
    return(
        <tab.Navigator>
            <Tab.Screen>
                name="inicion"
                component={MainPage}
                options={{tabBarIcon:({color, size}) =>(
                    <Icon name="heart" type="font-awesome" color={color} size={size}/>
                )
            }}
            </Tab.Screen
            name="Regiones"
                component={Regiones}
                options={{
                    tabBarIcon:({color, size}) =>(
                    <Icon name="map" type="font-awesome" color={color} size={size}/>
                    )>
        </tab.Navigator>
    )
}