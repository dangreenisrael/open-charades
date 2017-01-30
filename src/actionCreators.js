/**
 * Created by Dan on 2016-12-02.
 */
import { SET_PROPERTY, GENERATE_WORD } from './actions';

export function setProperty (propertyName, propertyValue) {
  return { type: SET_PROPERTY, propertyName, propertyValue };
}

export function generateWord (category) {
  return { type: GENERATE_WORD, category };
}