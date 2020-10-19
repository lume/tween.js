/**
 * Tween.js - Licensed under the MIT license
 * https://github.com/tweenjs/tween.js
 * ----------------------------------------------
 *
 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
 * Thank you all, you're awesome!
 */

import Easing from './Easing'
import Group from './Group'
import Interpolation from './Interpolation'
import now from './Now'
import Sequence from './Sequence'
import Tween from './Tween'
import VERSION from './Version'

/**
 * Controlling groups of tweens
 *
 * Using the TWEEN singleton to manage your tweens can cause issues in large apps with many components.
 * In these cases, you may want to create your own smaller groups of tween
 */
class Main extends Group {
	public version = VERSION
	public now = now
	public Group = Group
	public Easing = Easing
	public Interpolation = Interpolation
	public nextId = Sequence.nextId
	public Tween = Tween
}

const TWEEN = new Main()
export default TWEEN

export {Easing, Group, Interpolation, now, Sequence, Tween, VERSION}
