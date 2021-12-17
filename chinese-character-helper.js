const characterToChangJieLookUpData = require('./data/characterToChangjieLookUp.json');
const characterToCantonesePinyinLookUp = require('./data/characterToCantonesePinyinLookUp.json');
const cantonesePinyinToCharacterLookUp = require('./data/cantonesePinyinToCharacterLookUp.json');

const ChineseCharacterHelper = {
  isChineseCharacter: (str) => {
    return /^[\u4e00-\u9fa5]+$/.test(str);
  },
  containsChineseCharacter: (str) => {
    return /[\u4E00-\u9FA5]/.test(str);
  },
  getChangJieByCharacter: (character) => {
    if (ChineseCharacterHelper.isChineseCharacter(character)) {
      if (character.length > 1) {
        return characterToChangJieLookUpData[character[0]];
      } else {
        return characterToChangJieLookUpData[character];
      }
    }
    return character;
  },
  getChangJieByCharacters: function (str) {
    const characters = [];
    for (let i = 0; i < str.length; i++) {
      const character = str[i];
      if (ChineseCharacterHelper.isChineseCharacter(character)) {
        const changJieCharacter =
          ChineseCharacterHelper.getChangJieByCharacter(character);
        if (changJieCharacter !== undefined) {
          characters.push(changJieCharacter + ' ');
        } else {
          characters.push(character + ' ');
        }
      } else {
        characters.push(character + ' ');
      }
    }
    return characters;
  },
  getCharacterByCantonesePinyin: (pinyin) => {
    return cantonesePinyinToCharacterLookUp[pinyin];
  },
  getCantonesePinyinByCharacter: (character) => {
    if (ChineseCharacterHelper.isChineseCharacter(character)) {
      if (character.length > 1) {
        return characterToCantonesePinyinLookUp[character[0]];
      } else {
        return characterToCantonesePinyinLookUp[character];
      }
    }
    return character;
  },
  getCantonesePinyinByCharacters: (str) => {
    const pinyin = [];
    for (let i = 0; i < str.length; i++) {
      const character = str[i];
      if (ChineseCharacterHelper.isChineseCharacter(character)) {
        const pinyinOfCharacter =
          ChineseCharacterHelper.getCantonesePinyinByCharacter(character);
        if (pinyinOfCharacter !== undefined) {
          pinyin.push(pinyinOfCharacter);
        } else {
          pinyin.push(character);
        }
      } else {
        pinyin.push(character);
      }
    }
    return pinyin;
  },
  formatResult: (result, joinCharacter) => {
    return result.join(joinCharacter);
  },
};

export default ChineseCharacterHelper;
