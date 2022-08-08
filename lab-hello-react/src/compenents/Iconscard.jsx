import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'

import Iconcard from './Iconcard'

function Iconscard(props) {

    return(
        <div>
            <Iconcard iconImg = {icon1} iconName ={'Declarative'} iconText ={'React makes it painless to create interactive Uls'}/>
            <Iconcard iconImg = {icon2} iconName ={'Components'} iconText ={'Build encapsulated components that manage their state.'}/>
            <Iconcard iconImg = {icon3} iconName ={'Single-Way'} iconText ={'A set of immutable values are passed to the compenet´s.'}/>
            <Iconcard iconImg = {icon4} iconName ={'JSX'} iconText ={'Statically-typed, designed to run on modern browsers.'}/>

        </div>
    )
}

export default Iconscard