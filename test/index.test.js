import * as func from '../src/func';

describe('getAge', () => {

  it('42 を返す', () => {
    const result = func.getAge('1978-11-03', '2021-08-15');
    expect(result).toBe(42);
  });

  it('誕生日が日付ではない文字列の場合には -999 となる', () => {
    const result = func.getAge('2000-08-aa', '2021-08-15');
    expect(result).toBe(-999);
  });

  it('誕生日がありえない日付の場合には -999 となる', () => {
    const result = func.getAge('2000-08-32', '2021-08-15');
    expect(result).toBe(-999);
  });

  it('今日日付が日付ではない文字列の場合には -999 となる', () => {
    const result = func.getAge('2000-08-15', '2021-08-aa');
    expect(result).toBe(-999);
  });

  it('今日日付がありえない日付の場合には -999 となる', () => {
    const result = func.getAge('2000-08-15', '2021-08-32');
    expect(result).toBe(-999);
  });

  it('誕生日が今日日付より後の場合には -999 となる', () => {
    const result = func.getAge('2021-08-16', '2021-08-15');
    expect(result).toBe(-999);
  });

  it('誕生日が今日日付と等しい場合には 0 となる', () => {
    const result = func.getAge('2021-08-15', '2021-08-15');
    console.log(result);
    expect(result).toBe(0);
  });

  it('誕生日が今日日付の1年前の前日の場合 1 となる', () => {
    const result = func.getAge('2020-08-14', '2021-08-15');
    expect(result).toBe(1);
  });

  it('誕生日が今日日付の1年前の同日の場合 1 となる', () => {
    const result = func.getAge('2020-08-15', '2021-08-15');
    expect(result).toBe(1);
  });

  it('誕生日が今日日付の1年前の翌日の場合 0 となる', () => {
    const result = func.getAge('2020-08-16', '2021-08-15');
    expect(result).toBe(0);
  });

});
