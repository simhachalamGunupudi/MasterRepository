export class SharedModel {
  firstName: string;

  constructor() {

  }

  static fromJson(json: any): SharedModel {
    json = json || {};
    const obj = new SharedModel();

    obj.firstName = json.firstName || json.firstName || '';
    return obj;
  }

}


