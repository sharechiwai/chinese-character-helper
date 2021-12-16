const characterToChangJieLookUpData = require('./data/characterToChangjieLookUp.json');
const characterToCantonesePinyinLookUp = require('./data/characterToCantonesePinyinLookUp.json');
const cantonesePinyinToCharacterLookUp = require('./data/cantonesePinyinToCharacterLookUp.json');
const ChineseCharacterHelper = {
  isChineseCharacter: str => {
    return /^[\u4e00-\u9fa5]+$/.test(str);
  },
  getChangJieByCharacter: function (character) {
    if (ChineseCharacterHelper.isChineseCharacter(character)) {
      if (character.length > 1) {
        return characterToChangJieLookUpData[character[0]];
      } else {
        return characterToChangJieLookUpData[character];
      }
    }
    return character;
  },
  getCharacterByCantonesePinyin: pinyin => {
    return cantonesePinyinToCharacterLookUp[pinyin];
  },
  getCantonesePinyinByCharacter: character => {
    if (ChineseCharacterHelper.isChineseCharacter(character)) {
      if (character.length > 1) {
        return characterToCantonesePinyinLookUp[character[0]];
      } else {
        return characterToCantonesePinyinLookUp[character];
      }
    }
    return character;
  }
};

export default ChineseCharacterHelper;
