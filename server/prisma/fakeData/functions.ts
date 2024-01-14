import {  } from 'D:\github\dashim\server\node_modules\@prisma\client';
import { faker } from '@faker-js/faker';



export function fakeGender() {
  return {
    updatedAt: faker.date.anytime(),
    arabic: undefined,
    english: undefined,
    name: faker.person.fullName(),
  };
}
export function fakeGenderComplete() {
  return {
    id: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    isPublished: true,
    isSoftDeleted: false,
    arabic: undefined,
    english: undefined,
    name: faker.person.fullName(),
  };
}
export function fakeCurrency() {
  return {
    updatedAt: faker.date.anytime(),
    arabic: undefined,
    english: undefined,
    name: faker.person.fullName(),
    code: faker.lorem.words(5),
    symbol: faker.lorem.words(5),
  };
}
export function fakeCurrencyComplete() {
  return {
    id: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    isPublished: true,
    isSoftDeleted: false,
    arabic: undefined,
    english: undefined,
    name: faker.person.fullName(),
    code: faker.lorem.words(5),
    symbol: faker.lorem.words(5),
    BuyexchangeRate: 1,
    SellExchangeRate: 1,
  };
}
export function fakeCity() {
  return {
    updatedAt: faker.date.anytime(),
    arabic: undefined,
    english: undefined,
    name: faker.person.fullName(),
  };
}
export function fakeCityComplete() {
  return {
    id: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    isPublished: true,
    isSoftDeleted: false,
    arabic: undefined,
    english: undefined,
    name: faker.person.fullName(),
    countryId: faker.string.uuid(),
  };
}
export function fakeCountry() {
  return {
    updatedAt: faker.date.anytime(),
    arabic: undefined,
    english: undefined,
    name: faker.person.fullName(),
    code: faker.lorem.words(5),
  };
}
export function fakeCountryComplete() {
  return {
    id: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    isPublished: true,
    isSoftDeleted: false,
    arabic: undefined,
    english: undefined,
    name: faker.person.fullName(),
    code: faker.lorem.words(5),
  };
}
export function fakeUser() {
  return {
    updatedAt: faker.date.anytime(),
    deactivationReason: undefined,
    firstName: faker.person.firstName(),
    secondName: undefined,
    thirdName: undefined,
    fourthName: undefined,
    lastName: faker.person.lastName(),
    searchName: faker.lorem.words(5),
    birthDate: faker.date.anytime(),
    nationality: undefined,
    nationalID: undefined,
    residence: undefined,
    address: undefined,
    username: faker.internet.userName(),
    email: faker.internet.email(),
    phone: undefined,
    passwordHash: faker.lorem.words(5),
    avatar: undefined,
  };
}
export function fakeUserComplete() {
  return {
    id: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    isPublished: true,
    isSoftDeleted: false,
    isActive: true,
    deactivationReason: undefined,
    firstName: faker.person.firstName(),
    secondName: undefined,
    thirdName: undefined,
    fourthName: undefined,
    lastName: faker.person.lastName(),
    searchName: faker.lorem.words(5),
    birthDate: faker.date.anytime(),
    genderId: undefined,
    nationality: undefined,
    nationalID: undefined,
    residence: undefined,
    address: undefined,
    username: faker.internet.userName(),
    email: faker.internet.email(),
    isEmailVerificationActive: false,
    phone: undefined,
    isPhoneVerified: false,
    passwordHash: faker.lorem.words(5),
    avatar: undefined,
  };
}
export function fakeTenantMembers() {
  return {
    updatedAt: faker.date.anytime(),
    deactivationReason: undefined,
  };
}
export function fakeTenantMembersComplete() {
  return {
    id: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    isPublished: true,
    isSoftDeleted: false,
    isActive: true,
    deactivationReason: undefined,
    tenantId: faker.string.uuid(),
    memberId: faker.string.uuid(),
  };
}
export function fakeTenant() {
  return {
    updatedAt: faker.date.anytime(),
    deactivationReason: undefined,
    name: faker.person.fullName(),
    description: undefined,
    logo: undefined,
    website: undefined,
    phone: undefined,
    email: undefined,
    address: undefined,
    city: undefined,
    country: undefined,
  };
}
export function fakeTenantComplete() {
  return {
    id: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    isPublished: true,
    isSoftDeleted: false,
    isActive: true,
    deactivationReason: undefined,
    name: faker.person.fullName(),
    typeId: faker.string.uuid(),
    description: undefined,
    logo: undefined,
    website: undefined,
    phone: undefined,
    email: undefined,
    address: undefined,
    city: undefined,
    country: undefined,
    ownerId: faker.string.uuid(),
  };
}
export function fakeDeviceToken() {
  return {
    updatedAt: faker.date.anytime(),
    deactivationReason: undefined,
    name: faker.person.fullName(),
  };
}
export function fakeDeviceTokenComplete() {
  return {
    id: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    isPublished: true,
    isSoftDeleted: false,
    isActive: true,
    deactivationReason: undefined,
    name: faker.person.fullName(),
    deviceTypeId: faker.string.uuid(),
    userId: faker.string.uuid(),
  };
}
export function fakeTenantType() {
  return {
    updatedAt: faker.date.anytime(),
    arabic: undefined,
    english: undefined,
    name: faker.person.fullName(),
  };
}
export function fakeTenantTypeComplete() {
  return {
    id: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    isPublished: true,
    isSoftDeleted: false,
    arabic: undefined,
    english: undefined,
    name: faker.person.fullName(),
  };
}
export function fakeRole() {
  return {
    updatedAt: faker.date.anytime(),
    arabic: undefined,
    english: undefined,
    name: faker.person.fullName(),
  };
}
export function fakeRoleComplete() {
  return {
    id: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    isPublished: true,
    isSoftDeleted: false,
    arabic: undefined,
    english: undefined,
    name: faker.person.fullName(),
  };
}
export function fakeDeviceType() {
  return {
    updatedAt: faker.date.anytime(),
    arabic: undefined,
    english: undefined,
    name: faker.person.fullName(),
  };
}
export function fakeDeviceTypeComplete() {
  return {
    id: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    isPublished: true,
    isSoftDeleted: false,
    arabic: undefined,
    english: undefined,
    name: faker.person.fullName(),
  };
}
export function fakeInstitution() {
  return {
    updatedAt: faker.date.anytime(),
    deactivationReason: undefined,
    name: faker.person.fullName(),
    code: faker.lorem.words(5),
    legacyCode: undefined,
    description: undefined,
    cityHQ: undefined,
    address: undefined,
    phoneArray: faker.lorem.words(5).split(' '),
    emailArray: faker.lorem.words(5).split(' '),
    website: faker.lorem.words(5),
    facebookLink: faker.lorem.words(5),
    googleMapsLink: faker.lorem.words(5),
    twitterLink: faker.lorem.words(5),
    instagramLink: faker.lorem.words(5),
    latitude: undefined,
    longitude: undefined,
  };
}
export function fakeInstitutionComplete() {
  return {
    id: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    isPublished: true,
    isSoftDeleted: false,
    isActive: true,
    deactivationReason: undefined,
    name: faker.person.fullName(),
    code: faker.lorem.words(5),
    legacyCode: undefined,
    description: undefined,
    cityHQ: undefined,
    address: undefined,
    phoneArray: faker.lorem.words(5).split(' '),
    emailArray: faker.lorem.words(5).split(' '),
    website: faker.lorem.words(5),
    facebookLink: faker.lorem.words(5),
    googleMapsLink: faker.lorem.words(5),
    twitterLink: faker.lorem.words(5),
    instagramLink: faker.lorem.words(5),
    latitude: undefined,
    longitude: undefined,
  };
}
export function fakeSubscriber() {
  return {
    updatedAt: faker.date.anytime(),
    deactivationReason: undefined,
  };
}
export function fakeSubscriberComplete() {
  return {
    id: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    isPublished: true,
    isSoftDeleted: false,
    isActive: true,
    deactivationReason: undefined,
    institutionId: faker.string.uuid(),
    insurancePolicyId: faker.string.uuid(),
  };
}
export function fakeBeneficiary() {
  return {
    updatedAt: faker.date.anytime(),
    firstName: faker.person.firstName(),
    secondName: undefined,
    thirdName: undefined,
    fourthName: undefined,
    lastName: faker.person.lastName(),
    searchName: faker.lorem.words(5),
    birthDate: faker.date.anytime(),
    nationality: undefined,
    nationalID: undefined,
    residence: undefined,
    address: undefined,
    deactivationReason: undefined,
    legacyCode: undefined,
  };
}
export function fakeBeneficiaryComplete() {
  return {
    id: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    isPublished: true,
    isSoftDeleted: false,
    firstName: faker.person.firstName(),
    secondName: undefined,
    thirdName: undefined,
    fourthName: undefined,
    lastName: faker.person.lastName(),
    searchName: faker.lorem.words(5),
    birthDate: faker.date.anytime(),
    genderId: undefined,
    nationality: undefined,
    nationalID: undefined,
    residence: undefined,
    address: undefined,
    isActive: true,
    deactivationReason: undefined,
    subscriberId: faker.string.uuid(),
    legacyCode: undefined,
    relationshipId: faker.string.uuid(),
    isFingerprintVerificationActive: false,
    isIdCardVerificationActive: false,
    isFaceVerificationActive: false,
    isVoiceVerificationActive: false,
  };
}
export function fakeRelationship() {
  return {
    updatedAt: faker.date.anytime(),
    arabic: undefined,
    english: undefined,
    name: faker.person.fullName(),
  };
}
export function fakeRelationshipComplete() {
  return {
    id: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    isPublished: true,
    isSoftDeleted: false,
    arabic: undefined,
    english: undefined,
    name: faker.person.fullName(),
  };
}
export function fakeFingerprintBiometric() {
  return {
    updatedAt: faker.date.anytime(),
    deactivationReason: undefined,
    hash: faker.lorem.words(5),
  };
}
export function fakeFingerprintBiometricComplete() {
  return {
    id: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    isPublished: true,
    isSoftDeleted: false,
    isActive: true,
    deactivationReason: undefined,
    fingerTypeId: faker.string.uuid(),
    hash: faker.lorem.words(5),
    beneficiaryId: faker.string.uuid(),
  };
}
export function fakeIDCard() {
  return {
    updatedAt: faker.date.anytime(),
    deactivationReason: undefined,
    hash: faker.lorem.words(5),
  };
}
export function fakeIDCardComplete() {
  return {
    id: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    isPublished: true,
    isSoftDeleted: false,
    isActive: true,
    deactivationReason: undefined,
    hash: faker.lorem.words(5),
    beneficiaryId: faker.string.uuid(),
  };
}
export function fakeFaceBiometric() {
  return {
    updatedAt: faker.date.anytime(),
    deactivationReason: undefined,
    hash: faker.lorem.words(5),
  };
}
export function fakeFaceBiometricComplete() {
  return {
    id: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    isPublished: true,
    isSoftDeleted: false,
    isActive: true,
    deactivationReason: undefined,
    hash: faker.lorem.words(5),
    beneficiaryId: faker.string.uuid(),
  };
}
export function fakeVoiceBiometric() {
  return {
    updatedAt: faker.date.anytime(),
    deactivationReason: undefined,
    hash: faker.lorem.words(5),
  };
}
export function fakeVoiceBiometricComplete() {
  return {
    id: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    isPublished: true,
    isSoftDeleted: false,
    isActive: true,
    deactivationReason: undefined,
    hash: faker.lorem.words(5),
    beneficiaryId: faker.string.uuid(),
  };
}
export function fakeFingerType() {
  return {
    updatedAt: faker.date.anytime(),
    arabic: undefined,
    english: undefined,
    name: faker.person.fullName(),
  };
}
export function fakeFingerTypeComplete() {
  return {
    id: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    isPublished: true,
    isSoftDeleted: false,
    arabic: undefined,
    english: undefined,
    name: faker.person.fullName(),
  };
}
export function fakeInsurancePolicy() {
  return {
    updatedAt: faker.date.anytime(),
    deactivationReason: undefined,
    name: faker.person.fullName(),
    limit: faker.number.int(),
  };
}
export function fakeInsurancePolicyComplete() {
  return {
    id: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    isPublished: true,
    isSoftDeleted: false,
    isActive: true,
    deactivationReason: undefined,
    name: faker.person.fullName(),
    limit: faker.number.int(),
    institutionId: faker.string.uuid(),
    serviceEntryTimeWindow: 24,
  };
}
export function fakeBenefitPackage() {
  return {
    updatedAt: faker.date.anytime(),
    deactivationReason: undefined,
    name: faker.person.fullName(),
    copayDistrubtion: [faker.number.int(),faker.number.int(),faker.number.int(),faker.number.int(),faker.number.int()],
    threashold: [faker.number.int(),faker.number.int(),faker.number.int(),faker.number.int(),faker.number.int()],
  };
}
export function fakeBenefitPackageComplete() {
  return {
    id: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    isPublished: true,
    isSoftDeleted: false,
    isActive: true,
    deactivationReason: undefined,
    name: faker.person.fullName(),
    copayDistrubtion: [faker.number.int(),faker.number.int(),faker.number.int(),faker.number.int(),faker.number.int()],
    threashold: [faker.number.int(),faker.number.int(),faker.number.int(),faker.number.int(),faker.number.int()],
  };
}
export function fakePackageMedicalServices() {
  return {
    updatedAt: faker.date.anytime(),
    deactivationReason: undefined,
    price: faker.number.int(),
  };
}
export function fakePackageMedicalServicesComplete() {
  return {
    id: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    isPublished: true,
    isSoftDeleted: false,
    isActive: true,
    deactivationReason: undefined,
    beneftiPackageId: faker.string.uuid(),
    medicalServiceId: faker.string.uuid(),
    insurancePolicyId: faker.string.uuid(),
    price: faker.number.int(),
  };
}
export function fakeInsurancePolicyMedicalCenter() {
  return {
    updatedAt: faker.date.anytime(),
    deactivationReason: undefined,
  };
}
export function fakeInsurancePolicyMedicalCenterComplete() {
  return {
    id: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    isPublished: true,
    isSoftDeleted: false,
    isActive: true,
    deactivationReason: undefined,
    insurancePolicyId: faker.string.uuid(),
    medicalCenterId: faker.string.uuid(),
  };
}
export function fakeEntryRecord() {
  return {
    updatedAt: faker.date.anytime(),
    deactivationReason: undefined,
    isValidated: faker.datatype.boolean(),
  };
}
export function fakeEntryRecordComplete() {
  return {
    id: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    isPublished: true,
    isSoftDeleted: false,
    isActive: true,
    deactivationReason: undefined,
    beneficiaryId: faker.string.uuid(),
    fingerprintId: undefined,
    idCardId: undefined,
    faceId: undefined,
    voiceId: undefined,
    isValidated: faker.datatype.boolean(),
    isManuallyInserted: false,
    medicalCenterId: faker.string.uuid(),
  };
}
export function fakePatientService() {
  return {
    updatedAt: faker.date.anytime(),
    deactivationReason: undefined,
    name: faker.person.fullName(),
    Note: undefined,
    billedAmmount: faker.number.int(),
    allowedAmmount: faker.number.int(),
    copayAmmount: faker.number.int(),
    cashAmount: faker.number.int(),
    coveredAmount: faker.number.int(),
    defferedAmount: faker.number.int(),
    coinsuranceAmount: faker.number.int(),
    groupCode: faker.lorem.words(5),
  };
}
export function fakePatientServiceComplete() {
  return {
    id: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    isPublished: true,
    isSoftDeleted: false,
    isActive: true,
    deactivationReason: undefined,
    entryRecordId: faker.string.uuid(),
    name: faker.person.fullName(),
    Note: undefined,
    isWorkInjury: false,
    isExamination: false,
    billedAmmount: faker.number.int(),
    allowedAmmount: faker.number.int(),
    copayAmmount: faker.number.int(),
    cashAmount: faker.number.int(),
    coveredAmount: faker.number.int(),
    defferedAmount: faker.number.int(),
    coinsuranceAmount: faker.number.int(),
    transactionReviewStatusId: faker.string.uuid(),
    medicalReviewStatusId: faker.string.uuid(),
    serviceId: faker.string.uuid(),
    groupCode: faker.lorem.words(5),
  };
}
export function fakeReviewStatus() {
  return {
    updatedAt: faker.date.anytime(),
    arabic: undefined,
    english: undefined,
    name: faker.person.fullName(),
  };
}
export function fakeReviewStatusComplete() {
  return {
    id: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    isPublished: true,
    isSoftDeleted: false,
    arabic: undefined,
    english: undefined,
    name: faker.person.fullName(),
  };
}
export function fakeBeneficiaryBalance() {
  return {
    updatedAt: faker.date.anytime(),
    balance: faker.number.float(),
  };
}
export function fakeBeneficiaryBalanceComplete() {
  return {
    id: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    isPublished: true,
    isSoftDeleted: false,
    beneficiaryId: faker.string.uuid(),
    beneftiPackageId: faker.string.uuid(),
    balance: faker.number.float(),
  };
}
export function fakeDiagnosisAttachment() {
  return {
    updatedAt: faker.date.anytime(),
    name: faker.person.fullName(),
    link: faker.lorem.words(5),
    size: faker.number.int(),
    contentType: faker.lorem.words(5),
    metadata: JSON.stringify({"foo":"c6d56385-d2c6-4950-9212-6dbed6cb44a2","bar":4429952919273472,"bike":"a","a":"X","b":0.24141362914815545,"name":"Luz","prop":"0b1"}),
  };
}
export function fakeDiagnosisAttachmentComplete() {
  return {
    id: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    isPublished: true,
    isSoftDeleted: false,
    name: faker.person.fullName(),
    link: faker.lorem.words(5),
    size: faker.number.int(),
    contentType: faker.lorem.words(5),
    metadata: JSON.stringify({"foo":"601e4311-97cc-4adb-9605-4371fff9af15","bar":3044629322661888,"bike":"6","a":"7","b":0.28446829365566373,"name":"Damaris","prop":"0b1"}),
  };
}
export function fakeLabReportAttachment() {
  return {
    updatedAt: faker.date.anytime(),
  };
}
export function fakeLabReportAttachmentComplete() {
  return {
    id: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    isPublished: true,
    isSoftDeleted: false,
  };
}
export function fakePrescriptionAttachment() {
  return {
    updatedAt: faker.date.anytime(),
  };
}
export function fakePrescriptionAttachmentComplete() {
  return {
    id: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    isPublished: true,
    isSoftDeleted: false,
  };
}
export function fakeMedicalCenter() {
  return {
    updatedAt: faker.date.anytime(),
    deactivationReason: undefined,
    name: faker.person.fullName(),
    code: faker.lorem.words(5),
    description: faker.lorem.words(5),
    cityHQ: faker.lorem.words(5),
    address: undefined,
    phone: faker.lorem.words(5).split(' '),
    email: faker.lorem.words(5).split(' '),
    website: faker.lorem.words(5),
    facebookLink: faker.lorem.words(5),
    googleMapsLink: faker.lorem.words(5),
    twitterLink: faker.lorem.words(5),
    instagramLink: faker.lorem.words(5),
    latitude: undefined,
    longitude: undefined,
  };
}
export function fakeMedicalCenterComplete() {
  return {
    id: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    isPublished: true,
    isSoftDeleted: false,
    isActive: true,
    deactivationReason: undefined,
    name: faker.person.fullName(),
    code: faker.lorem.words(5),
    description: faker.lorem.words(5),
    cityHQ: faker.lorem.words(5),
    address: undefined,
    phone: faker.lorem.words(5).split(' '),
    email: faker.lorem.words(5).split(' '),
    website: faker.lorem.words(5),
    facebookLink: faker.lorem.words(5),
    googleMapsLink: faker.lorem.words(5),
    twitterLink: faker.lorem.words(5),
    instagramLink: faker.lorem.words(5),
    latitude: undefined,
    longitude: undefined,
    managingTenantId: faker.string.uuid(),
  };
}
export function fakeMedicalCenterServiceTemplate() {
  return {
    updatedAt: faker.date.anytime(),
    deactivationReason: undefined,
    name: faker.person.fullName(),
    dalilCode: faker.lorem.words(5),
    basePrice: faker.lorem.words(5),
  };
}
export function fakeMedicalCenterServiceTemplateComplete() {
  return {
    id: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    isPublished: true,
    isSoftDeleted: false,
    isActive: true,
    deactivationReason: undefined,
    name: faker.person.fullName(),
    dalilCode: faker.lorem.words(5),
    basePrice: faker.lorem.words(5),
  };
}
export function fakeMedicalCenterService() {
  return {
    updatedAt: faker.date.anytime(),
    deactivationReason: undefined,
    name: faker.person.fullName(),
    medicalCenterCode: faker.lorem.words(5),
    basePrice: faker.lorem.words(5),
  };
}
export function fakeMedicalCenterServiceComplete() {
  return {
    id: faker.string.uuid(),
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
    isPublished: true,
    isSoftDeleted: false,
    isActive: true,
    deactivationReason: undefined,
    name: faker.person.fullName(),
    medicalCenterCode: faker.lorem.words(5),
    basePrice: faker.lorem.words(5),
    medicalCenterId: faker.string.uuid(),
    templateId: faker.string.uuid(),
  };
}
