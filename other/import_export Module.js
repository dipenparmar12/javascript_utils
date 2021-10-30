export default Button              -> import Button from './button'
                                      const Button = require('./button').default
         
export const Button                -> import { Button } from './button'
                                      const { Button } = require('./button')
         
export { Button }                  -> import { Button } from './button'
                                      const { Button } = require('./button')
         
module.exports.Button              -> import { Button } from './button'
                                      const { Button } = require('./button')

module.exports.Button = Button     -> import { Button } from './button'
                                      const { Button } = require('./button')

module.exports = Button            -> import * as Button from './button'
                                      const Button = require('./button')
