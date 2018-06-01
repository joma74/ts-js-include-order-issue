import Vue, { ComponentOptions } from "vue"
import { linkTo } from "@storybook/addon-links"

/**
 * @type {ComponentOptions<Vue>}
 */
const componentOptions = {
  render() {
    return <mybutton>content</mybutton>
  },
}

export default Vue.extend({
  render(h) {
    return <mybutton>content</mybutton>
  },
})
