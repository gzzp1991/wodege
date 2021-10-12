import Nerv, { Component } from 'nervjs'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

    render () {
        return (
          <View className='index'>
            <Text>健康</Text>
          </View>
        )
      }
}