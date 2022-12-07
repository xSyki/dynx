import { ImageSourcePropType } from 'react-native'

interface IImage {
  name: string
  image: ImageSourcePropType
}

const images: IImage[] = [
  { name: 'all.png', image: require('./all.png') },
  { name: 'party.png', image: require('./party.png') },
  { name: 'family.png', image: require('./family.png') },
]

export default images
