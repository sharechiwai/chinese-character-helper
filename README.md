# chinese-character-helper

### Run ESLint
```bash
npm run lint
```

### Run Prettier
```bash
npm run format
```

### Usage
```js
const ChineseCharacterHelper = require('chinese-character-helper');

// Get ChangeJie by Character
const oneChangJieCode = ChineseCharacterHelper.getChangJieByCharacter('一');
// return 'M'
const oneChangJieCodeFromSentence = ChineseCharacterHelper.getChangJieByCharacters('你好嗎');
// return ['ONF', 'VND', 'RSQF']

const oneFromCantonesePinyin = ChineseCharacterHelper.getCantonesePinyinByCharacter('一');
// return 'yat'

const oneFromCantonesePinyin = ChineseCharacterHelper.getCantonesePinyinByCharacters('你好嗎');
// return ['nei', 'ho', 'ma']

const isChineseCharacter = ChineseCharacterHelper.isChineseCharacter('你');
// return true

const containChineseCharacter = ChineseCharacterHelper.containsChineseCharacter('你好嗎? How are you?');
// return true

const formatResultString = ChineseCharacterHelper.formatResult(ChineseCharacterHelper.getCantonesePinyinByCharacters('你好嗎'), ' ');
// return 'nei ho ma'
```