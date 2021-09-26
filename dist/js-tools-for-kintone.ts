// =============================================================================
// 【ファイル名】
//    js-tools-for-kintone.js
// -----------------------------------------------------------------------------
//  Copyright (c) 2021 kintone lovers
// =============================================================================
import { DateTime } from 'luxon';

// =============================================
// 現在日付から年齢を計算
// bd : 誕生日文字列(yyyy-MM-dd形式)
// today : 現在日付文字列(yyyy-MM-dd形式)
// =============================================
export const getAge = (strBd: string, strToday: string): number => {
  let age = 0;

  if (!DateTime.fromISO(strBd).isValid) {
    return -999;
  }

  if (!DateTime.fromISO(strToday).isValid) {
    return -999;
  }

  const bd = DateTime.fromISO(strBd);
  const today = DateTime.fromISO(strToday);

  if (today.diff(bd, 'days').days < 0) {
    return -999;
  }

  age = Math.floor(today.diff(bd, 'years').years);

  return age;
}; // end getAge
