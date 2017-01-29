/**
 * Created by Dan on 2016-12-02.
 */
import { SET_PROPERTY } from './actions';

export function setProperty (propertyName, propertyValue) {
  return { type: SET_PROPERTY, propertyName, propertyValue };
}