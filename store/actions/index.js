import * as types from "./TYPES";

// export const changeLanguageToBangla = () => (dispatch) => {
//   dispatch({
//     type: types.BANGLA,
//     payload: "BANGLA",
//   });
// };

// export const changeLanguageToEnglish = () => (dispatch) => {
//   dispatch({
//     type: types.ENGLISH,
//     payload: "ENGLISH",
//   });
// };

export function changeLanguage(payload) {
  return {
    type: types.BANGLA,
    payload,
  };
}

// export function changeLanguageToEnglish(payload) {
//   return {
//     type: types.ENGLISH,
//     payload,
//   };
// }
