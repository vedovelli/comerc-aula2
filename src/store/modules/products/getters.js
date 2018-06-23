
import chunk from 'lodash/chunk'

export default {
  pages: state => chunk(state.list, 20)
}
