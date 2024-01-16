export interface Voluntarios {
  id:             number;
  identification: string;
  personId:       number;
  firstName:      string;
  lastName:       string;
  email:          string;
  phoneNumber:    string;
  isActive:       boolean;
  gender:         string;
  address:        string;
  available:      boolean;
  activityTypeId: number;
  activityType:   ActivityType;
}

export interface ActivityType {
  id:   number;
  name: string;
}
