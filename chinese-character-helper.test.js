const ChineseCharacterHelper = require('./chinese-character-helper');

describe('test isChineseCharacter', () => {
  test('"One" is not a chinese character', () => {
    expect(ChineseCharacterHelper.isChineseCharacter('One')).toBeFalsy();
  });

  test('"一" is a chinese character', () => {
    expect(ChineseCharacterHelper.isChineseCharacter('一')).toBeTruthy();
  });

  test('"하나" is not a chinese character', () => {
    expect(ChineseCharacterHelper.isChineseCharacter('하나')).toBeFalsy();
  });

  test('"واحد" is not a chinese character', () => {
    expect(ChineseCharacterHelper.isChineseCharacter('واحد')).toBeFalsy();
  });

  test('"एउटा" is not a chinese character', () => {
    expect(ChineseCharacterHelper.isChineseCharacter('एउटा')).toBeFalsy();
  });

  test('"你好" is a chinese character', () => {
    expect(ChineseCharacterHelper.isChineseCharacter('你好')).toBeTruthy();
  });
});

describe('test containsChineseCharacter', () => {
  test('"One Two Three" does not contain chinese character', () => {
    expect(
      ChineseCharacterHelper.containsChineseCharacter('One Two Three')
    ).toBeFalsy();
  });

  test('"One Two Three 123" does not contain chinese character', () => {
    expect(
      ChineseCharacterHelper.containsChineseCharacter('One Two Three 123')
    ).toBeFalsy();
  });

  test('"One Two Three 一 二 三" does contain chinese character', () => {
    expect(
      ChineseCharacterHelper.containsChineseCharacter('One Two Three 一 二 三')
    ).toBeTruthy();
  });

  test('"" does contain chinese character', () => {
    expect(ChineseCharacterHelper.containsChineseCharacter('')).toBeFalsy();
  });

  test('"一" does contain chinese character', () => {
    expect(ChineseCharacterHelper.containsChineseCharacter('一')).toBeTruthy();
  });

  test('" a " does contain chinese character', () => {
    expect(ChineseCharacterHelper.containsChineseCharacter(' a ')).toBeFalsy();
  });
});

describe('test getChangJieByCharacter', () => {
  test('"One" is not a chinese character should return one', () => {
    expect(ChineseCharacterHelper.getChangJieByCharacter('One')).toBe('One');
  });

  test('"一" is a chinese character should return M', () => {
    expect(ChineseCharacterHelper.getChangJieByCharacter('一')).toBe('M');
  });

  test('"하나" is not a chinese character should return 하나', () => {
    expect(ChineseCharacterHelper.getChangJieByCharacter('하나')).toBe('하나');
  });

  test('"واحد" is not a chinese character should return واحد', () => {
    expect(ChineseCharacterHelper.getChangJieByCharacter('واحد')).toBe('واحد');
  });

  test('"एउटा" is not a chinese character should return एउटा', () => {
    expect(ChineseCharacterHelper.getChangJieByCharacter('एउटा')).toBe('एउटा');
  });

  test('"你好" is a chinese character should return ONF', () => {
    expect(ChineseCharacterHelper.getChangJieByCharacter('你好')).toBe('ONF');
  });
});

describe('test getChangJieByCharacters', () => {
  test('"One Two Three" does not contain chinese character should return one two three', () => {
    expect(
      ChineseCharacterHelper.getChangJieByCharacters('One Two Three')
    ).toStrictEqual([]);
  });

  test('"One Two Three 123" does not contain chinese character should return one two three 123', () => {
    expect(
      ChineseCharacterHelper.getChangJieByCharacters('One Two Three 123')
    ).toStrictEqual([]);
  });

  test('"One Two Three 一 二 三" does contain chinese character should return M N O', () => {
    expect(
      ChineseCharacterHelper.getChangJieByCharacters('One Two Three 一 二 三')
    ).toStrictEqual(['M', 'MM', 'MMM']);
  });

  test('"" does contain chinese character should return ""', () => {
    expect(ChineseCharacterHelper.getChangJieByCharacters('')).toStrictEqual([]);
  });

  test('"一" does contain chinese character should return M', () => {
    expect(ChineseCharacterHelper.getChangJieByCharacters('一')).toStrictEqual(['M']);
  });

  test('" a " does contain chinese character should return ""', () => {
    expect(ChineseCharacterHelper.getChangJieByCharacters(' a ')).toStrictEqual([]);
  });
});

describe('test getCantonesePinyinByCharacter', () => {
  test('"One" is not a chinese character should return "one"', () => {
    expect(ChineseCharacterHelper.getCantonesePinyinByCharacter('One')).toBe('One');
  });

  test('"一" is a chinese character should return "yat"', () => {
    expect(ChineseCharacterHelper.getCantonesePinyinByCharacter('一')).toBe('yat');
  });

  test('"하나" is not a chinese character should return "하나"', () => {
    expect(ChineseCharacterHelper.getCantonesePinyinByCharacter('하나')).toBe('하나');
  });

  test('"واحد" is not a chinese character should return واحد', () => {
    expect(ChineseCharacterHelper.getCantonesePinyinByCharacter('واحد')).toBe('واحد');
  });

  test('"एउटा" is not a chinese character should return "एउटा"', () => {
    expect(ChineseCharacterHelper.getCantonesePinyinByCharacter('एउटा')).toBe('एउटा');
  });

  test('"你好" is a chinese character should return "nei"', () => {
    expect(ChineseCharacterHelper.getCantonesePinyinByCharacter('你好')).toBe('nei');
  });
});

describe('test getCantonesePinyinByCharacters', () => {
  test('"One Two Three" does not contain chinese character should return []', () => {
    expect(
      ChineseCharacterHelper.getCantonesePinyinByCharacters('One Two Three')
    ).toStrictEqual([]);
  });

  test('"One Two Three 123" does not contain chinese character should return []', () => {
    expect(
      ChineseCharacterHelper.getCantonesePinyinByCharacters('One Two Three 123')
    ).toStrictEqual([]);
  });

  test('"One Two Three 一 二 三" does contain chinese character should return ["yat", "yi", "saam"]', () => {
    expect(
      ChineseCharacterHelper.getCantonesePinyinByCharacters('One Two Three 一 二 三')
    ).toStrictEqual(['yat', 'yi', 'saam']);
  });

  test('"" does not contain chinese character should return []', () => {
    expect(ChineseCharacterHelper.getCantonesePinyinByCharacters('')).toStrictEqual([]);
  });

  test('"一" does contain chinese character should return ["yat"]', () => {
    expect(ChineseCharacterHelper.getCantonesePinyinByCharacters('一')).toStrictEqual(['yat']);
  });

  test('" a " does not contain chinese character should return []', () => {
    expect(ChineseCharacterHelper.getCantonesePinyinByCharacters(' a ')).toStrictEqual([]);
  });
});

describe('test formatResult', () => {
  test('should throw error if input is not an array', () => {
    expect(() => {
      ChineseCharacterHelper.formatResult('One Two Three');
    }).toThrowError('input should be an array');
  });

  test('should join the input with comma when no joinCharacter has been passed', () => {
    expect(ChineseCharacterHelper.formatResult(['One', 'Two', 'Three'])).toBe(
      'One,Two,Three'
    );
  });

  test('should join the input with comma when no joinCharacter has been passed', () => {
    expect(
      ChineseCharacterHelper.formatResult(['One', 'Two', 'Three'], ' ')
    ).toBe('One Two Three');
  });
});
