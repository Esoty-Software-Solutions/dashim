import cuid2 from '@paralleldrive/cuid2'
import { SeedHelper } from '../scripts/generateSeederFiles'
import { fakeDeviceType } from './fakeData/functions'
import { Relationship } from '../../app/server/models/relationship.server'

export const genderEnum = [
  {
    ...SeedHelper.functions.fakeGender(),
    id: cuid2.createId(),
    name: 'Unknown',
    english: 'Unknown',
    arabic: 'غير معروف',
  },
  {
    ...SeedHelper.functions.fakeGender(),
    id: cuid2.createId(),
    name: 'female',
    english: 'female',
    arabic: 'أنثى',
  },
  {
    ...SeedHelper.functions.fakeGender(),
    id: cuid2.createId(),
    name: 'male',
    english: 'male',
    arabic: 'ذكر',
  },
]

export const tenantTypeEnum = [
  {
    ...SeedHelper.functions.fakeTenantType(),
    id: cuid2.createId(),
    name: 'institution',
    english: 'institution',
    arabic: 'مؤسسة',
  },
  {
    ...SeedHelper.functions.fakeTenantType(),
    id: cuid2.createId(),
    name: 'medical',
    english: 'medical',
    arabic: 'طبي',
  },
  {
    ...SeedHelper.functions.fakeTenantType(),
    id: cuid2.createId(),
    name: 'personal',
    english: 'personal',
    arabic: 'شخصي',
  },
]

export const roleEnum = [
  {
    ...SeedHelper.functions.fakeRole(),
    id: cuid2.createId(),
    name: 'owner',
    english: 'owner',
    arabic: 'مالك',
  },
  {
    ...SeedHelper.functions.fakeRole(),
    id: cuid2.createId(),
    name: 'admin',
    english: 'admin',
    arabic: 'مدير',
  },
  {
    ...SeedHelper.functions.fakeRole(),
    id: cuid2.createId(),
    name: 'member',
    english: 'member',
    arabic: 'عضو',
  },
  {
    ...SeedHelper.functions.fakeRole(),
    id: cuid2.createId(),
    name: 'guest',
    english: 'guest',
    arabic: 'زائر',
  },
  {
    ...SeedHelper.functions.fakeRole(),
    id: cuid2.createId(),
    name: 'supervisor',
    english: 'supervisor',
    arabic: 'مشرف',
  },
  {
    ...SeedHelper.functions.fakeRole(),
    id: cuid2.createId(),
    name: 'other',
    english: 'other',
    arabic: 'اخرى',
  },
]

export const deviceTypeEnum = [
  {
    ...SeedHelper.functions.fakeDeviceType(),
    id: cuid2.createId(),
    name: 'android',
    english: 'android',
    arabic: 'اندريود',
  },
  {
    ...SeedHelper.functions.fakeDeviceType(),
    id: cuid2.createId(),
    name: 'ios',
    english: 'ios',
    arabic: 'إي.او.اس',
  },
  {
    ...SeedHelper.functions.fakeDeviceType(),
    id: cuid2.createId(),
    name: 'pc',
    english: 'pc',
    arabic: 'كمبيوتر شخصي',
  },
  {
    ...SeedHelper.functions.fakeDeviceType(),
    id: cuid2.createId(),
    name: 'other',
    english: 'other',
    arabic: 'اخرى',
  },
]

export const relationshipEnum = [
  {
    ...SeedHelper.functions.fakeRelationship(),
    id: cuid2.createId(),
    name: 'self',
    english: 'self',
    arabic: 'نفسه',
  },
  {
    ...SeedHelper.functions.fakeRelationship(),
    id: cuid2.createId(),
    name: 'father',
    english: 'father',
    arabic: 'الوالد',
  },
  {
    ...SeedHelper.functions.fakeRelationship(),
    id: cuid2.createId(),
    name: 'mother',
    english: 'mother',
    arabic: 'الوالده',
  },
  {
    ...SeedHelper.functions.fakeRelationship(),
    id: cuid2.createId(),
    name: 'son',
    english: 'son',
    arabic: 'الإبن',
  },
  {
    ...SeedHelper.functions.fakeRelationship(),
    id: cuid2.createId(),
    name: 'daughter',
    english: 'daughter',
    arabic: 'الإبنه',
  },
  {
    ...SeedHelper.functions.fakeRelationship(),
    id: cuid2.createId(),
    name: 'brother',
    english: 'brother',
    arabic: 'الأخ',
  },
  {
    ...SeedHelper.functions.fakeRelationship(),
    id: cuid2.createId(),
    name: 'sister',
    english: 'sister',
    arabic: 'الأخت',
  },
  {
    ...SeedHelper.functions.fakeRelationship(),
    id: cuid2.createId(),
    name: 'uncle',
    english: 'uncle',
    arabic: 'العم',
  },
  {
    ...SeedHelper.functions.fakeRelationship(),
    id: cuid2.createId(),
    name: 'aunt',
    english: 'aunt',
    arabic: 'العمة',
  },
  {
    ...SeedHelper.functions.fakeRelationship(),
    id: cuid2.createId(),
    name: 'grandfather',
    english: 'grandfather',
    arabic: 'الحد',
  },
  {
    ...SeedHelper.functions.fakeRelationship(),
    id: cuid2.createId(),
    name: 'grandmother',
    english: 'grandmother',
    arabic: 'الجدة',
  },
  {
    ...SeedHelper.functions.fakeRelationship(),
    id: cuid2.createId(),
    name: 'other',
    english: 'other',
    arabic: 'آخر',
  },
]

export const fingerType = [
  {
    ...SeedHelper.functions.fakeFingerType(),
    id: cuid2.createId(),
    name: 'leftthumb',
    english: 'left thumb',
    arabic: 'إبهام اليد اليسرى',
  },
  {
    ...SeedHelper.functions.fakeFingerType(),
    id: cuid2.createId(),
    name: 'leftindex',
    english: 'left index',
    arabic: 'سبابة اليد اليسرى',
  },
  {
    ...SeedHelper.functions.fakeFingerType(),
    id: cuid2.createId(),
    name: 'leftmiddle',
    english: 'left middle',
    arabic: 'وسط اليد اليسرى',
  },
  {
    ...SeedHelper.functions.fakeFingerType(),
    id: cuid2.createId(),
    name: 'leftring',
    english: 'left ring',
    arabic: 'خاتم اليد اليسرى',
  },
  {
    ...SeedHelper.functions.fakeFingerType(),
    id: cuid2.createId(),
    name: 'leftlittle',
    english: 'left little',
    arabic: 'اليد اليسرى الصغيرة',
  },
  {
    ...SeedHelper.functions.fakeFingerType(),
    id: cuid2.createId(),
    name: 'rightthumb',
    english: 'right thumb',
    arabic: 'إبهام اليد اليمنى',
  },
  {
    ...SeedHelper.functions.fakeFingerType(),
    id: cuid2.createId(),
    name: 'rightindex',
    english: 'right index',
    arabic: 'سبابة اليد اليمنى',
  },
  {
    ...SeedHelper.functions.fakeFingerType(),
    id: cuid2.createId(),
    name: 'rightmiddle',
    english: 'right middle',
    arabic: 'وسط اليد اليمنى',
  },
  {
    ...SeedHelper.functions.fakeFingerType(),
    id: cuid2.createId(),
    name: 'rightring',
    english: 'right ring',
    arabic: 'خاتم اليد اليمنى',
  },
  {
    ...SeedHelper.functions.fakeFingerType(),
    id: cuid2.createId(),
    name: 'rightlittle',
    english: 'right little',
    arabic: 'اليد اليمنى الصغيرة',
  },
]
