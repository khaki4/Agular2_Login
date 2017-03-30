import { Injectable } from '@angular/core';

@Injectable()
export class EmailValidatorService {
  isValidMailFormat(email: string) {
    const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (email !== '' && EMAIL_REGEXP.test(email)) {
      return true;
    }

    return false;
  }
  constructor() { }

}
