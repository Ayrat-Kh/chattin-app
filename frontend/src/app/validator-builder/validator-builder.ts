import * as Yup from 'yup';
import { ObjectShape } from 'yup/lib/object';

export type Keys = 'name' | 'roomId';

export class ValidatorBuilder {
  private validators: ObjectShape = {};

  addName({ required = true } = {}): ValidatorBuilder {
    let validator = Yup.string();
    if (required) validator = validator.required('Name is required');
    this.validators['name'] = validator;
    return this;
  }

  addRommId({ required = true } = {}): ValidatorBuilder {
    let validator = Yup.string();
    if (required) validator = validator.required('Name is required');
    this.validators['roomId'] = validator;
    return this;
  }

  addCustom(name: string, anySchema: Yup.AnySchema): ValidatorBuilder {
    this.validators[name] = anySchema;
    return this;
  }

  build() {
    return Yup.object(this.validators);
  }
}
