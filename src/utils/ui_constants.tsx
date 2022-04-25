import { aqua, apple, plantasia, darkTheme, theme} from './../utils/themes'
import { IoSettingsOutline, IoLogOutOutline } from 'react-icons/io5'

export const UIConstants = {
  themes: {
    0: {label: 'default', theme: theme},
    1: {label: 'dark', theme: darkTheme},
    2: {label: 'plantasia', theme: plantasia},
    3: {label: 'aqua', theme: aqua},
    4: {label: 'apple', theme: apple},
  },
  profileMenu: {
    0: {label: {
      icon: <IoSettingsOutline/>,
      text: 'Settings'
    }},
    1: {label: {
      icon: <IoLogOutOutline/>,
      text: 'Log out'
    }}
  }

}

export default UIConstants