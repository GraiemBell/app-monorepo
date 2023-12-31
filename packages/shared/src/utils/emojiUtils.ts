import {
  HdWalletAvatarImageNames,
  type IHdWalletAvatarImageNames,
} from './avatarUtils';

export const emojiList = [
  '😀',
  '😃',
  '😄',
  '😁',
  '😆',
  '😅',
  '🤣',
  '😂',
  '🙂',
  '🙃',
  '😉',
  '😊',
  '😇',
  '🥰',
  '😍',
  '🤩',
  '😘',
  '😗',
  '☺️',
  '😚',
  '😙',
  '🥲',
  '😋',
  '😛',
  '😜',
  '🤪',
  '😝',
  '🤑',
  '🤗',
  '🤭',
  '🤫',
  '🤔',
  '🤐',
  '🤨',
  '😐',
  '😑',
  '😶',
  '😏',
  '😒',
  '🙄',
  '😬',
  '🤥',
  '😌',
  '😔',
  '😪',
  '🤤',
  '😴',
  '😷',
  '🤒',
  '🤕',
  '🤢',
  '🤮',
  '🤧',
  '🥵',
  '🥶',
  '🥴',
  '😵',
  '🤯',
  '🤠',
  '🥳',
  '🥸',
  '😎',
  '🤓',
  '🧐',
  '😕',
  '😟',
  '🙁',
  '☹️',
  '😮',
  '😯',
  '😲',
  '😳',
  '🥺',
  '😦',
  '😧',
  '😨',
  '😰',
  '😥',
  '😢',
  '😭',
  '😱',
  '😖',
  '😣',
  '😞',
  '😓',
  '😩',
  '😫',
  '🥱',
  '😤',
  '😡',
  '😠',
  '🤬',
  '😈',
  '👿',
  '💀',
  '☠️',
  '💩',
  '🤡',
  '👹',
  '👺',
  '👻',
  '👽',
  '👾',
  '🤖',
  '😺',
  '😸',
  '😹',
  '😻',
  '😼',
  '😽',
  '🙀',
  '😿',
  '😾',
  '💋',
  '👋',
  '🤚',
  '🖐️',
  '✋',
  '🖖',
  '👌',
  '🤌',
  '🤏',
  '✌️',
  '🤞',
  '🤟',
  '🤘',
  '🤙',
  '👈',
  '👉',
  '👆',
  '🖕',
  '👇',
  '☝️',
  '👍',
  '👎',
  '✊',
  '👊',
  '🤛',
  '🤜',
  '👏',
  '🙌',
  '👐',
  '🤲',
  '🤝',
  '🙏',
  '✍️',
  '💅',
  '🤳',
  '💪',
  '🦾',
  '🦿',
  '🦵',
  '🦶',
  '👂',
  '🦻',
  '👃',
  '🧠',
  '🫀',
  '🫁',
  '🦷',
  '🦴',
  '👀',
  '👁️',
  '👅',
  '👄',
  '👶',
  '🧒',
  '👦',
  '👧',
  '🧑',
  '👱',
  '👨',
  '🧔',
  '👨‍🦰',
  '👨‍🦱',
  '👨‍🦳',
  '👨‍🦲',
  '👩',
  '👩‍🦰',
  '🧑‍🦰',
  '👩‍🦱',
  '🧑‍🦱',
  '👩‍🦳',
  '🧑‍🦳',
  '👩‍🦲',
  '🧑‍🦲',
  '👱‍♀️',
  '👱‍♂️',
  '🧓',
  '👴',
  '👵',
  '🙍',
  '🙍‍♂️',
  '🙍‍♀️',
  '🙎',
  '🙎‍♂️',
  '🙎‍♀️',
  '🙅',
  '🙅‍♂️',
  '🙅‍♀️',
  '🙆',
  '🙆‍♂️',
  '🙆‍♀️',
  '💁',
  '💁‍♂️',
  '💁‍♀️',
  '🙋',
  '🙋‍♂️',
  '🙋‍♀️',
  '🧏',
  '🧏‍♂️',
  '🧏‍♀️',
  '🙇',
  '🙇‍♂️',
  '🙇‍♀️',
  '🤦',
  '🤦‍♂️',
  '🤦‍♀️',
  '🤷',
  '🤷‍♂️',
  '🤷‍♀️',
  '🧑‍⚕️',
  '👨‍⚕️',
  '👩‍⚕️',
  '🧑‍🎓',
  '👨‍🎓',
  '👩‍🎓',
  '🧑‍🏫',
  '👨‍🏫',
  '👩‍🏫',
  '🧑‍⚖️',
  '👨‍⚖️',
  '👩‍⚖️',
  '🧑‍🌾',
  '👨‍🌾',
  '👩‍🌾',
  '🧑‍🍳',
  '👨‍🍳',
  '👩‍🍳',
  '🧑‍🔧',
  '👨‍🔧',
  '👩‍🔧',
  '🧑‍🏭',
  '👨‍🏭',
  '👩‍🏭',
  '🧑‍💼',
  '👨‍💼',
  '👩‍💼',
  '🧑‍🔬',
  '👨‍🔬',
  '👩‍🔬',
  '🧑‍💻',
  '👨‍💻',
  '👩‍💻',
  '🧑‍🎤',
  '👨‍🎤',
  '👩‍🎤',
  '🧑‍🎨',
  '👨‍🎨',
  '👩‍🎨',
  '🧑‍✈️',
  '👨‍✈️',
  '👩‍✈️',
  '🧑‍🚀',
  '👨‍🚀',
  '👩‍🚀',
  '👨🏽‍🚀',
  '🧑‍🚒',
  '👨‍🚒',
  '👩‍🚒',
  '👮',
  '👮‍♂️',
  '👮‍♀️',
  '🕵️',
  '🕵️‍♂️',
  '🕵️‍♀️',
  '💂',
  '💂‍♂️',
  '💂‍♀️',
  '🥷',
  '👷',
  '👷‍♂️',
  '👷‍♀️',
  '🤴',
  '👸',
  '👳',
  '👳‍♂️',
  '👳‍♀️',
  '👲',
  '🧕',
  '🤵',
  '🤵‍♂️',
  '🤵‍♀️',
  '👰',
  '👰‍♂️',
  '👰‍♀️',
  '🤰',
  '🤱',
  '👩‍🍼',
  '👨‍🍼',
  '🧑‍🍼',
  '👼',
  '🎅',
  '🤶',
  '🧑‍🎄',
  '🦸',
  '🦸‍♂️',
  '🦸‍♀️',
  '🦹',
  '🦹‍♂️',
  '🦹‍♀️',
  '🧙',
  '🧙‍♂️',
  '🧙🏼‍♂️',
  '🧙‍♀️',
  '🧚',
  '🧚‍♂️',
  '🧚‍♀️',
  '🧛',
  '🧛‍♂️',
  '🧛‍♀️',
  '🧜',
  '🧜‍♂️',
  '🧜‍♀️',
  '🧝',
  '🧝‍♂️',
  '🧝‍♀️',
  '🧞',
  '🧞‍♂️',
  '🧞‍♀️',
  '🧟',
  '🧟‍♂️',
  '🧟‍♀️',
  '💆',
  '💆‍♂️',
  '💆‍♀️',
  '💇',
  '💇‍♂️',
  '💇‍♀️',
  '🚶',
  '🚶‍♂️',
  '🚶‍♀️',
  '🧍',
  '🧍‍♂️',
  '🧍‍♀️',
  '🧎',
  '🧎‍♂️',
  '🧎‍♀️',
  '🧑‍🦯',
  '👨‍🦯',
  '👩‍🦯',
  '🧑‍🦼',
  '👨‍🦼',
  '👩‍🦼',
  '🧑‍🦽',
  '👨‍🦽',
  '👩‍🦽',
  '🏃',
  '🏃‍♂️',
  '🏃‍♀️',
  '💃',
  '🕺',
  '🕴️',
  '👯',
  '👯‍♂️',
  '👯‍♀️',
  '🧖',
  '🧖‍♂️',
  '🧖‍♀️',
  '🧘',
  '🧑‍🤝‍🧑',
  '👭',
  '👫',
  '👬',
  '💏',
  '👩‍❤️‍💋‍👨',
  '👨‍❤️‍💋‍👨',
  '👩‍❤️‍💋‍👩',
  '💑',
  '👩‍❤️‍👨',
  '👨‍❤️‍👨',
  '👩‍❤️‍👩',
  '👪',
  '👨‍👩‍👦',
  '👨‍👩‍👧',
  '👨‍👩‍👧‍👦',
  '👨‍👩‍👦‍👦',
  '👨‍👩‍👧‍👧',
  '👨‍👨‍👦',
  '👨‍👨‍👧',
  '👨‍👨‍👧‍👦',
  '👨‍👨‍👦‍👦',
  '👨‍👨‍👧‍👧',
  '👩‍👩‍👦',
  '👩‍👩‍👧',
  '👩‍👩‍👧‍👦',
  '👩‍👩‍👦‍👦',
  '👩‍👩‍👧‍👧',
  '👨‍👦',
  '👨‍👦‍👦',
  '👨‍👧',
  '👨‍👧‍👦',
  '👨‍👧‍👧',
  '👩‍👦',
  '👩‍👦‍👦',
  '👩‍👧',
  '👩‍👧‍👦',
  '👩‍👧‍👧',
  '🗣️',
  '👤',
  '👥',
  '🫂',
  '👣',
  '🧳',
  '🌂',
  '☂️',
  '🎃',
  '🧵',
  '🧶',
  '👓',
  '🕶️',
  '🥽',
  '🥼',
  '🦺',
  '👔',
  '👕',
  '👖',
  '🧣',
  '🧤',
  '🧥',
  '🧦',
  '👗',
  '👘',
  '🥻',
  '🩱',
  '🩲',
  '🩳',
  '👙',
  '👚',
  '👛',
  '👜',
  '👝',
  '🎒',
  '🩴',
  '👞',
  '👟',
  '🥾',
  '🥿',
  '👠',
  '👡',
  '🩰',
  '👢',
  '👑',
  '👒',
  '🎩',
  '🎓',
  '🧢',
  '🪖',
  '⛑️',
  '💄',
  '💍',
  '💼',
  '🩸',

  '🙈',
  '🙉',
  '🙊',
  '💥',
  '💫',
  '💦',
  '💨',
  '🐵',
  '🐒',
  '🦍',
  '🦧',
  '🐶',
  '🐕',
  '🦮',
  '🐕‍🦺',
  '🐩',
  '🐺',
  '🦊',
  '🦝',
  '🐱',
  '🐈',
  '🐈‍⬛',
  '🦁',
  '🐯',
  '🐅',
  '🐆',
  '🐴',
  '🐎',
  '🦄',
  '🦓',
  '🦌',
  '🦬',
  '🐮',
  '🐂',
  '🐃',
  '🐄',
  '🐷',
  '🐖',
  '🐗',
  '🐽',
  '🐏',
  '🐑',
  '🐐',
  '🐪',
  '🐫',
  '🦙',
  '🦒',
  '🐘',
  '🦣',
  '🦏',
  '🦛',
  '🐭',
  '🐁',
  '🐀',
  '🐹',
  '🐰',
  '🐇',
  '🐿️',
  '🦫',
  '🦔',
  '🦇',
  '🐻',
  '🐻‍❄️',
  '🐨',
  '🐼',
  '🦥',
  '🦦',
  '🦨',
  '🦘',
  '🦡',
  '🐾',
  '🦃',
  '🐔',
  '🐓',
  '🐣',
  '🐤',
  '🐥',
  '🐦',
  '🐧',
  '🕊️',
  '🦅',
  '🦆',
  '🦢',
  '🦉',
  '🦤',
  '🪶',
  '🦩',
  '🦚',
  '🦜',
  '🐸',
  '🐊',
  '🐢',
  '🦎',
  '🐍',
  '🐲',
  '🐉',
  '🦕',
  '🦖',
  '🐳',
  '🐋',
  '🐬',
  '🦭',
  '🐟',
  '🐠',
  '🐡',
  '🦈',
  '🐙',
  '🐚',
  '🐌',
  '🦋',
  '🐛',
  '🐜',
  '🐝',
  '🪲',
  '🐞',
  '🦗',
  '🪳',
  '🕷️',
  '🕸️',
  '🦂',
  '🦟',
  '🪰',
  '🪱',
  '🦠',
  '💐',
  '🌸',
  '💮',
  '🏵️',
  '🌹',
  '🥀',
  '🌺',
  '🌻',
  '🌼',
  '🌷',
  '🌱',
  '🪴',
  '🌲',
  '🌳',
  '🌴',
  '🌵',
  '🌾',
  '🌿',
  '☘️',
  '🍀',
  '🍁',
  '🍂',
  '🍃',
  '🍄',
  '🌰',
  '🦀',
  '🦞',
  '🦐',
  '🦑',
  '🌍',
  '🌎',
  '🌏',
  '🌐',
  '🪨',
  '🌑',
  '🌒',
  '🌓',
  '🌔',
  '🌕',
  '🌖',
  '🌗',
  '🌘',
  '🌙',
  '🌚',
  '🌛',
  '🌜',
  '☀️',
  '🌝',
  '🌞',
  '⭐',
  '🌟',
  '🌠',
  '☁️',
  '⛅',
  '⛈️',
  '🌤️',
  '🌥️',
  '🌦️',
  '🌧️',
  '🌨️',
  '🌩️',
  '🌪️',
  '🌫️',
  '🌬️',
  '🌈',
  '☂️',
  '☔',
  '⚡',
  '❄️',
  '☃️',
  '⛄',
  '☄️',
  '🔥',
  '💧',
  '🌊',
  '🎄',
  '✨',
  '🎋',
  '🎍',

  '🍇',
  '🍈',
  '🍉',
  '🍊',
  '🍋',
  '🍌',
  '🍍',
  '🥭',
  '🍎',
  '🍏',
  '🍐',
  '🍑',
  '🍒',
  '🍓',
  '🫐',
  '🥝',
  '🍅',
  '🫒',
  '🥥',
  '🥑',
  '🍆',
  '🥔',
  '🥕',
  '🌽',
  '🌶️',
  '🫑',
  '🥒',
  '🥬',
  '🥦',
  '🧄',
  '🧅',
  '🍄',
  '🥜',
  '🌰',
  '🍞',
  '🥐',
  '🥖',
  '🫓',
  '🥨',
  '🥯',
  '🥞',
  '🧇',
  '🧀',
  '🍖',
  '🍗',
  '🥩',
  '🥓',
  '🍔',
  '🍟',
  '🍕',
  '🌭',
  '🥪',
  '🌮',
  '🌯',
  '🫔',
  '🥙',
  '🧆',
  '🥚',
  '🍳',
  '🥘',
  '🍲',
  '🫕',
  '🥣',
  '🥗',
  '🍿',
  '🧈',
  '🧂',
  '🥫',
  '🍱',
  '🍘',
  '🍙',
  '🍚',
  '🍛',
  '🍜',
  '🍝',
  '🍠',
  '🍢',
  '🍣',
  '🍤',
  '🍥',
  '🥮',
  '🍡',
  '🥟',
  '🥠',
  '🥡',
  '🦪',
  '🍦',
  '🍧',
  '🍨',
  '🍩',
  '🍪',
  '🎂',
  '🍰',
  '🧁',
  '🥧',
  '🍫',
  '🍬',
  '🍭',
  '🍮',
  '🍯',
  '🍼',
  '🥛',
  '☕',
  '🫖',
  '🍵',
  '🍶',
  '🍾',
  '🍷',
  '🍸',
  '🍹',
  '🍺',
  '🍻',
  '🥂',
  '🥃',
  '🥤',
  '🧋',
  '🧃',
  '🧉',
  '🧊',
  '🥢',
  '🍽️',
  '🍴',
  '🥄',

  '🕴️',
  '🧗',
  '🧗‍♂️',
  '🧗‍♀️',
  '🤺',
  '🏇',
  '⛷️',
  '🏂',
  '🏌️',
  '🏌️‍♂️',
  '🏌️‍♀️',
  '🏄',
  '🏄‍♂️',
  '🏄‍♀️',
  '🚣',
  '🚣‍♂️',
  '🚣‍♀️',
  '🏊',
  '🏊‍♂️',
  '🏊‍♀️',
  '⛹️',
  '⛹️‍♂️',
  '⛹️‍♀️',
  '🏋️',
  '🏋️‍♂️',
  '🏋️‍♀️',
  '🚴',
  '🚴‍♂️',
  '🚴‍♀️',
  '🚵',
  '🚵‍♂️',
  '🚵‍♀️',
  '🤸',
  '🤸‍♂️',
  '🤸‍♀️',
  '🤼',
  '🤼‍♂️',
  '🤼‍♀️',
  '🤽',
  '🤽‍♂️',
  '🤽‍♀️',
  '🤾',
  '🤾‍♂️',
  '🤾‍♀️',
  '🤹',
  '🤹‍♂️',
  '🤹‍♀️',
  '🧘',
  '🧘‍♂️',
  '🧘‍♀️',
  '🎪',
  '🛹',
  '🛼',
  '🛶',
  '🎗️',
  '🎟️',
  '🎫',
  '🎖️',
  '🏆',
  '🏅',
  '⚽',
  '⚾',
  '🥎',
  '🏀',
  '🏐',
  '🏈',
  '🏉',
  '🎾',
  '🥏',
  '🎳',
  '🏏',
  '🏑',
  '🏒',
  '🥍',
  '🏓',
  '🏸',
  '🥊',
  '🥋',
  '🥅',
  '⛳',
  '⛸️',
  '🎣',
  '🎽',
  '🎿',
  '🛷',
  '🥌',
  '🎯',
  '🎱',
  '🎮',
  '🎰',
  '🎲',
  '🧩',
  '♟️',
  '🎭',
  '🎨',
  '🧵',
  '🧶',
  '🎼',
  '🎤',
  '🎧',
  '🎷',
  '🪗',
  '🎸',
  '🎹',
  '🎺',
  '🎻',
  '🥁',
  '🪘',
  '🎬',
  '🏹',

  '🚣',
  '🗾',
  '🏔️',
  '⛰️',
  '🌋',
  '🗻',
  '🏕️',
  '🏖️',
  '🏜️',
  '🏝️',
  '🏞️',
  '🏟️',
  '🏛️',
  '🏗️',
  '🛖',
  '🏘️',
  '🏚️',
  '🏠',
  '🏡',
  '🏢',
  '🏣',
  '🏤',
  '🏥',
  '🏦',
  '🏨',
  '🏩',
  '🏪',
  '🏫',
  '🏬',
  '🏭',
  '🏯',
  '🏰',
  '💒',
  '🗼',
  '🗽',
  '⛪',
  '🕌',
  '🛕',
  '🕍',
  '⛩️',
  '🕋',
  '⛲',
  '⛺',
  '🌁',
  '🌃',
  '🏙️',
  '🌄',
  '🌅',
  '🌆',
  '🌇',
  '🌉',
  '🎠',
  '🎡',
  '🎢',
  '🚂',
  '🚃',
  '🚄',
  '🚅',
  '🚆',
  '🚇',
  '🚈',
  '🚉',
  '🚊',
  '🚝',
  '🚞',
  '🚋',
  '🚌',
  '🚍',
  '🚎',
  '🚐',
  '🚑',
  '🚒',
  '🚓',
  '🚔',
  '🚕',
  '🚖',
  '🚗',
  '🚘',
  '🚙',
  '🛻',
  '🚚',
  '🚛',
  '🚜',
  '🏎️',
  '🏍️',
  '🛵',
  '🛺',
  '🚲',
  '🛴',
  '🚏',
  '🛣️',
  '🛤️',
  '⛽',
  '🚨',
  '🚥',
  '🚦',
  '🚧',
  '⚓',
  '⛵',
  '🚤',
  '🛳️',
  '⛴️',
  '🛥️',
  '🚢',
  '✈️',
  '🛩️',
  '🛫',
  '🛬',
  '🪂',
  '💺',
  '🚁',
  '🚟',
  '🚠',
  '🚡',
  '🛰️',
  '🚀',
  '🛸',
  '🪐',
  '🌠',
  '🌌',
  '⛱️',
  '🎆',
  '🎇',
  '🎑',
  '💴',
  '💵',
  '💶',
  '💷',
  '🗿',
  '🛂',
  '🛃',
  '🛄',
  '🛅',

  '💌',
  '🕳️',
  '💣',
  '🛀',
  '🛌',
  '🔪',
  '🏺',
  '🗺️',
  '🧭',
  '🧱',
  '💈',
  '🦽',
  '🦼',
  '🛢️',
  '🛎️',
  '🧳',
  '⌛',
  '⏳',
  '⌚',
  '⏰',
  '⏱️',
  '⏲️',
  '🕰️',
  '🌡️',
  '⛱️',
  '🧨',
  '🎈',
  '🎉',
  '🎊',
  '🎎',
  '🎏',
  '🎐',
  '🧧',
  '🎀',
  '🎁',
  '🤿',
  '🪀',
  '🪁',
  '🔮',
  '🪄',
  '🧿',
  '🕹️',
  '🧸',
  '🪅',
  '🪆',
  '🖼️',
  '🧵',
  '🪡',
  '🧶',
  '🪢',
  '🛍️',
  '📿',
  '💎',
  '📯',
  '🎙️',
  '🎚️',
  '🎛️',
  '📻',
  '🪕',
  '📱',
  '📲',
  '☎️',
  '📞',
  '📟',
  '📠',
  '🔋',
  '🔌',
  '💻',
  '🖥️',
  '🖨️',
  '⌨️',
  '🖱️',
  '🖲️',
  '💽',
  '💾',
  '💿',
  '📀',
  '🧮',
  '🎥',
  '🎞️',
  '📽️',
  '📺',
  '📷',
  '📸',
  '📹',
  '📼',
  '🔍',
  '🔎',
  '🕯️',
  '💡',
  '🔦',
  '🏮',
  '🪔',
  '📔',
  '📕',
  '📖',
  '📗',
  '📘',
  '📙',
  '📚',
  '📓',
  '📒',
  '📃',
  '📜',
  '📄',
  '📰',
  '🗞️',
  '📑',
  '🔖',
  '🏷️',
  '💰',
  '🪙',
  '💴',
  '💵',
  '💶',
  '💷',
  '💸',
  '💳',
  '🧾',
  '✉️',
  '📧',
  '📨',
  '📩',
  '📤',
  '📥',
  '📦',
  '📫',
  '📪',
  '📬',
  '📭',
  '📮',
  '🗳️',
  '✏️',
  '✒️',
  '🖋️',
  '🖊️',
  '🖌️',
  '🖍️',
  '📝',
  '📁',
  '📂',
  '🗂️',
  '📅',
  '📆',
  '🗒️',
  '🗓️',
  '📇',
  '📈',
  '📉',
  '📊',
  '📋',
  '📌',
  '📍',
  '📎',
  '🖇️',
  '📏',
  '📐',
  '✂️',
  '🗃️',
  '🗄️',
  '🗑️',
  '🔒',
  '🔓',
  '🔏',
  '🔐',
  '🔑',
  '🗝️',
  '🔨',
  '🪓',
  '⛏️',
  '⚒️',
  '🛠️',
  '🗡️',
  '⚔️',
  '🔫',
  '🪃',
  '🛡️',
  '🪚',
  '🔧',
  '🪛',
  '🔩',
  '⚙️',
  '🗜️',
  '⚖️',
  '🦯',
  '🔗',
  '⛓️',
  '🪝',
  '🧰',
  '🧲',
  '🪜',
  '⚗️',
  '🧪',
  '🧫',
  '🧬',
  '🔬',
  '🔭',
  '📡',
  '💉',
  '🩸',
  '💊',
  '🩹',
  '🩺',
  '🚪',
  '🪞',
  '🪟',
  '🛏️',
  '🛋️',
  '🪑',
  '🚽',
  '🪠',
  '🚿',
  '🛁',
  '🪤',
  '🪒',
  '🧴',
  '🧷',
  '🧹',
  '🧺',
  '🧻',
  '🪣',
  '🧼',
  '🪥',
  '🧽',
  '🧯',
  '🛒',
  '🚬',
  '⚰️',
  '🪦',
  '⚱️',
  '🗿',
  '🪧',
  '🚰',

  '💘',
  '💝',
  '💖',
  '💗',
  '💓',
  '💞',
  '💕',
  '💟',
  '❣️',
  '💔',
  '❤️',
  '🧡',
  '💛',
  '💚',
  '💙',
  '💜',
  '🤎',
  '🖤',
  '🤍',
  '💯',
  '💢',
  '💬',
  '👁️‍🗨️',
  '🗨️',
  '🗯️',
  '💭',
  '💤',
  '💮',
  '♨️',
  '💈',
  '🛑',
  '🕛',
  '🕧',
  '🕐',
  '🕜',
  '🕑',
  '🕝',
  '🕒',
  '🕞',
  '🕓',
  '🕟',
  '🕔',
  '🕠',
  '🕕',
  '🕡',
  '🕖',
  '🕢',
  '🕗',
  '🕣',
  '🕘',
  '🕤',
  '🕙',
  '🕥',
  '🕚',
  '🕦',
  '🌀',
  '♠️',
  '♥️',
  '♦️',
  '♣️',
  '🃏',
  '🀄',
  '🎴',
  '🔇',
  '🔈',
  '🔉',
  '🔊',
  '📢',
  '📣',
  '📯',
  '🔔',
  '🔕',
  '🎵',
  '🎶',
  '💹',
  '🛗',
  '🏧',
  '🚮',
  '🚰',
  '♿',
  '🚹',
  '🚺',
  '🚻',
  '🚼',
  '🚾',
  '⚠️',
  '🚸',
  '⛔',
  '🚫',
  '🚳',
  '🚭',
  '🚯',
  '🚱',
  '🚷',
  '📵',
  '🔞',
  '☢️',
  '☣️',
  '⬆️',
  '↗️',
  '➡️',
  '↘️',
  '⬇️',
  '↙️',
  '⬅️',
  '↖️',
  '↕️',
  '↔️',
  '↩️',
  '↪️',
  '⤴️',
  '⤵️',
  '🔃',
  '🔄',
  '🔙',
  '🔚',
  '🔛',
  '🔜',
  '🔝',
  '🛐',
  '⚛️',
  '🕉️',
  '✡️',
  '☸️',
  '☯️',
  '✝️',
  '☦️',
  '☪️',
  '☮️',
  '🕎',
  '🔯',
  '♈',
  '♉',
  '♊',
  '♋',
  '♌',
  '♍',
  '♎',
  '♏',
  '♐',
  '♑',
  '♒',
  '♓',
  '⛎',
  '🔀',
  '🔁',
  '🔂',
  '▶️',
  '⏩',
  '⏭️',
  '⏯️',
  '◀️',
  '⏪',
  '⏮️',
  '🔼',
  '⏫',
  '🔽',
  '⏬',
  '⏸️',
  '⏹️',
  '⏺️',
  '⏏️',
  '🎦',
  '🔅',
  '🔆',
  '📶',
  '📳',
  '📴',
  '♀️',
  '♂️',
  '✖️',
  '➕',
  '➖',
  '➗',
  '♾️',
  '‼️',
  '⁉️',
  '❓',
  '❔',
  '❕',
  '❗',
  '〰️',
  '💱',
  '💲',
  '⚕️',
  '♻️',
  '⚜️',
  '🔱',
  '📛',
  '🔰',
  '⭕',
  '✅',
  '☑️',
  '✔️',
  '❌',
  '❎',
  '➰',
  '➿',
  '〽️',
  '✳️',
  '✴️',
  '❇️',
  '©️',
  '®️',
  '™️',
  '#️⃣',
  '*️⃣',
  '0️⃣',
  '1️⃣',
  '2️⃣',
  '3️⃣',
  '4️⃣',
  '5️⃣',
  '6️⃣',
  '7️⃣',
  '8️⃣',
  '9️⃣',
  '🔟',
  '🔠',
  '🔡',
  '🔢',
  '🔣',
  '🔤',
  '🅰️',
  '🆎',
  '🅱️',
  '🆑',
  '🆒',
  '🆓',
  'ℹ️',
  '🆔',
  'Ⓜ️',
  '🆕',
  '🆖',
  '🅾️',
  '🆗',
  '🅿️',
  '🆘',
  '🆙',
  '🆚',
  '🈁',
  '🈂️',
  '🈷️',
  '🈶',
  '🈯',
  '🉐',
  '🈹',
  '🈚',
  '🈲',
  '🉑',
  '🈸',
  '🈴',
  '🈳',
  '㊗️',
  '㊙️',
  '🈺',
  '🈵',
  '🔴',
  '🟠',
  '🟡',
  '🟢',
  '🔵',
  '🟣',
  '🟤',
  '⚫',
  '⚪',
  '🟥',
  '🟧',
  '🟨',
  '🟩',
  '🟦',
  '🟪',
  '🟫',
  '⬛',
  '⬜',
  '◼️',
  '◻️',
  '◾',
  '◽',
  '▪️',
  '▫️',
  '🔶',
  '🔷',
  '🔸',
  '🔹',
  '🔺',
  '🔻',
  '💠',
  '🔘',
  '🔳',
  '🔲',

  '🏁',
  '🚩',
  '🎌',
  '🏴',
  '🏳️',
  '🏳️‍🌈',
  '🏳️‍⚧️',
  '🏴‍☠️',
  '🇦🇨',
  '🇦🇩',
  '🇦🇪',
  '🇦🇫',
  '🇦🇬',
  '🇦🇮',
  '🇦🇱',
  '🇦🇲',
  '🇦🇴',
  '🇦🇶',
  '🇦🇷',
  '🇦🇸',
  '🇦🇹',
  '🇦🇺',
  '🇦🇼',
  '🇦🇽',
  '🇦🇿',
  '🇧🇦',
  '🇧🇧',
  '🇧🇩',
  '🇧🇪',
  '🇧🇫',
  '🇧🇬',
  '🇧🇭',
  '🇧🇮',
  '🇧🇯',
  '🇧🇱',
  '🇧🇲',
  '🇧🇳',
  '🇧🇴',
  '🇧🇶',
  '🇧🇷',
  '🇧🇸',
  '🇧🇹',
  '🇧🇻',
  '🇧🇼',
  '🇧🇾',
  '🇧🇿',
  '🇨🇦',
  '🇨🇨',
  '🇨🇩',
  '🇨🇫',
  '🇨🇬',
  '🇨🇭',
  '🇨🇮',
  '🇨🇰',
  '🇨🇱',
  '🇨🇲',
  '🇨🇳',
  '🇨🇴',
  '🇨🇵',
  '🇨🇷',
  '🇨🇺',
  '🇨🇻',
  '🇨🇼',
  '🇨🇽',
  '🇨🇾',
  '🇨🇿',
  '🇩🇪',
  '🇩🇬',
  '🇩🇯',
  '🇩🇰',
  '🇩🇲',
  '🇩🇴',
  '🇩🇿',
  '🇪🇦',
  '🇪🇨',
  '🇪🇪',
  '🇪🇬',
  '🇪🇭',
  '🇪🇷',
  '🇪🇸',
  '🇪🇹',
  '🇪🇺',
  '🇫🇮',
  '🇫🇯',
  '🇫🇰',
  '🇫🇲',
  '🇫🇴',
  '🇫🇷',
  '🇬🇦',
  '🇬🇧',
  '🇬🇩',
  '🇬🇪',
  '🇬🇫',
  '🇬🇬',
  '🇬🇭',
  '🇬🇮',
  '🇬🇱',
  '🇬🇲',
  '🇬🇳',
  '🇬🇵',
  '🇬🇶',
  '🇬🇷',
  '🇬🇸',
  '🇬🇹',
  '🇬🇺',
  '🇬🇼',
  '🇬🇾',
  '🇭🇰',
  '🇭🇲',
  '🇭🇳',
  '🇭🇷',
  '🇭🇹',
  '🇭🇺',
  '🇮🇨',
  '🇮🇩',
  '🇮🇪',
  '🇮🇱',
  '🇮🇲',
  '🇮🇳',
  '🇮🇴',
  '🇮🇶',
  '🇮🇷',
  '🇮🇸',
  '🇮🇹',
  '🇯🇪',
  '🇯🇲',
  '🇯🇴',
  '🇯🇵',
  '🇰🇪',
  '🇰🇬',
  '🇰🇭',
  '🇰🇮',
  '🇰🇲',
  '🇰🇳',
  '🇰🇵',
  '🇰🇷',
  '🇰🇼',
  '🇰🇾',
  '🇰🇿',
  '🇱🇦',
  '🇱🇧',
  '🇱🇨',
  '🇱🇮',
  '🇱🇰',
  '🇱🇷',
  '🇱🇸',
  '🇱🇹',
  '🇱🇺',
  '🇱🇻',
  '🇱🇾',
  '🇲🇦',
  '🇲🇨',
  '🇲🇩',
  '🇲🇪',
  '🇲🇫',
  '🇲🇬',
  '🇲🇭',
  '🇲🇰',
  '🇲🇱',
  '🇲🇲',
  '🇲🇳',
  '🇲🇴',
  '🇲🇵',
  '🇲🇶',
  '🇲🇷',
  '🇲🇸',
  '🇲🇹',
  '🇲🇺',
  '🇲🇻',
  '🇲🇼',
  '🇲🇽',
  '🇲🇾',
  '🇲🇿',
  '🇳🇦',
  '🇳🇨',
  '🇳🇪',
  '🇳🇫',
  '🇳🇬',
  '🇳🇮',
  '🇳🇱',
  '🇳🇴',
  '🇳🇵',
  '🇳🇷',
  '🇳🇺',
  '🇳🇿',
  '🇴🇲',
  '🇵🇦',
  '🇵🇪',
  '🇵🇫',
  '🇵🇬',
  '🇵🇭',
  '🇵🇰',
  '🇵🇱',
  '🇵🇲',
  '🇵🇳',
  '🇵🇷',
  '🇵🇸',
  '🇵🇹',
  '🇵🇼',
  '🇵🇾',
  '🇶🇦',
  '🇷🇪',
  '🇷🇴',
  '🇷🇸',
  '🇷🇺',
  '🇷🇼',
  '🇸🇦',
  '🇸🇧',
  '🇸🇨',
  '🇸🇩',
  '🇸🇪',
  '🇸🇬',
  '🇸🇭',
  '🇸🇮',
  '🇸🇯',
  '🇸🇰',
  '🇸🇱',
  '🇸🇲',
  '🇸🇳',
  '🇸🇴',
  '🇸🇷',
  '🇸🇸',
  '🇸🇹',
  '🇸🇻',
  '🇸🇽',
  '🇸🇾',
  '🇸🇿',
  '🇹🇦',
  '🇹🇨',
  '🇹🇩',
  '🇹🇫',
  '🇹🇬',
  '🇹🇭',
  '🇹🇯',
  '🇹🇰',
  '🇹🇱',
  '🇹🇲',
  '🇹🇳',
  '🇹🇴',
  '🇹🇷',
  '🇹🇹',
  '🇹🇻',
  '🇹🇿',
  '🇺🇦',
  '🇺🇬',
  '🇺🇲',
  '🇺🇳',
  '🇺🇸',
  '🇺🇾',
  '🇺🇿',
  '🇻🇦',
  '🇻🇨',
  '🇻🇪',
  '🇻🇬',
  '🇻🇮',
  '🇻🇳',
  '🇻🇺',
  '🇼🇫',
  '🇼🇸',
  '🇽🇰',
  '🇾🇪',
  '🇾🇹',
  '🇿🇦',
  '🇿🇲',
  '🇿🇼',
  '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
  '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
  '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
] as const;

const randomList = [
  '🐯',
  '🦁',
  '🐶',
  '🐼',
  '🐵',
  '🦊',
  '🐭',
  '🐻',
  '🐹',
  '🐨',
  '🐷',
  '🐮',
  '🐰',
  '🐸',
  '🐱',
  '🐔',
  '🐧',
  '🐣',
  '🦄',
  '🐺',
  '🐴',
  '🐳',
  '🦋',
  '🐙',
  '🦖',
  '🦑',
  '🐡',
  '🐠',
  '🐬',
  '🐲',
  '🤑',
  '🤠',
  '😎',
  '🤩',
  '🤯',
  '😋',
  '😛',
  '🤪',
  '😀',
  '😷',
  '💩',
  '👽',
  '🤖',
  '👻',
  '🦸‍♀️',
  '🦸‍♂️',
  '🦸',
  '🧙🏼‍♂️',
  '👩‍🚀',
  '👨🏽‍🚀',
  '👨‍🚀',
  '🌈',
] as const;

export type IEmojiTypes = (typeof emojiList)[number];

export const colors = [
  'surface-neutral-default',
  '#E49090',
  '#E3B167',
  '#91BC76',
  '#67BEA9',
  '#55A9D9',
  '#AB7DCF',
  '#DF9BD0',
];

export type IAvatarInfo = {
  img: IHdWalletAvatarImageNames;
  emoji?: IEmojiTypes | 'img';
  bgColor?: string;
};

export const defaultAvatar: IAvatarInfo = {
  img: 'bear',
  emoji: '🤑',
  bgColor: '#55A9D9',
};

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export function randomAvatar(): IAvatarInfo {
  return {
    emoji: randomList[getRandomInt(randomList.length)],
    img: HdWalletAvatarImageNames[
      getRandomInt(HdWalletAvatarImageNames.length)
    ],
    bgColor: colors[getRandomInt(colors.length)],
  };
}
