import { genderRouter } from './cruds/gender.router';
import { currencyRouter } from './cruds/currency.router';
import { cityRouter } from './cruds/city.router';
import { countryRouter } from './cruds/country.router';
import { userRouter } from './cruds/user.router';
import { tenantMemberRouter } from './cruds/tenantMember.router';
import { tenantRouter } from './cruds/tenant.router';
import { deviceTokenRouter } from './cruds/deviceToken.router';
import { tenantTypeRouter } from './cruds/tenantType.router';
import { roleRouter } from './cruds/role.router';
import { deviceTypeRouter } from './cruds/deviceType.router';
import { institutionRouter } from './cruds/institution.router';
import { subscriberRouter } from './cruds/subscriber.router';
import { subscriberFutureStatusChangeRouter } from './cruds/subscriberFutureStatusChange.router';
import { beneficiaryRouter } from './cruds/beneficiary.router';
import { beneficiaryFutureStatusChangeRouter } from './cruds/beneficiaryFutureStatusChange.router';
import { relationshipRouter } from './cruds/relationship.router';
import { institutionMedicalServiceRouter } from './cruds/institutionMedicalService.router';
import { fingerprintBiometricRouter } from './cruds/fingerprintBiometric.router';
import { iDCardRouter } from './cruds/iDCard.router';
import { faceBiometricRouter } from './cruds/faceBiometric.router';
import { voiceBiometricRouter } from './cruds/voiceBiometric.router';
import { fingerTypeRouter } from './cruds/fingerType.router';
import { insurancePolicyRouter } from './cruds/insurancePolicy.router';
import { benefitPackageRouter } from './cruds/benefitPackage.router';
import { insurancePolicyMedicalCenterRouter } from './cruds/insurancePolicyMedicalCenter.router';
import { medicalCenterRouter } from './cruds/medicalCenter.router';
import { benefitPackageMedicalServiceTemplateRouter } from './cruds/benefitPackageMedicalServiceTemplate.router';
import { medicalServiceTemplateRouter } from './cruds/medicalServiceTemplate.router';
import { medicalServiceRouter } from './cruds/medicalService.router';
import { entryRecordRouter } from './cruds/entryRecord.router';
import { patientServiceRouter } from './cruds/patientService.router';
import { reviewStatusRouter } from './cruds/reviewStatus.router';
import { beneficiaryBalanceRouter } from './cruds/beneficiaryBalance.router';
import { diagnosisAttachmentRouter } from './cruds/diagnosisAttachment.router';
import { labReportAttachmentRouter } from './cruds/labReportAttachment.router';
import { prescriptionAttachmentRouter } from './cruds/prescriptionAttachment.router';
import { router } from "@routers/_trpc.router";

export const crudRouter = router({
  gender: genderRouter,
  currency: currencyRouter,
  city: cityRouter,
  country: countryRouter,
  user: userRouter,
  tenantMember: tenantMemberRouter,
  tenant: tenantRouter,
  deviceToken: deviceTokenRouter,
  tenantType: tenantTypeRouter,
  role: roleRouter,
  deviceType: deviceTypeRouter,
  institution: institutionRouter,
  subscriber: subscriberRouter,
  subscriberFutureStatusChange: subscriberFutureStatusChangeRouter,
  beneficiary: beneficiaryRouter,
  beneficiaryFutureStatusChange: beneficiaryFutureStatusChangeRouter,
  relationship: relationshipRouter,
  institutionMedicalService: institutionMedicalServiceRouter,
  fingerprintBiometric: fingerprintBiometricRouter,
  iDCard: iDCardRouter,
  faceBiometric: faceBiometricRouter,
  voiceBiometric: voiceBiometricRouter,
  fingerType: fingerTypeRouter,
  insurancePolicy: insurancePolicyRouter,
  benefitPackage: benefitPackageRouter,
  insurancePolicyMedicalCenter: insurancePolicyMedicalCenterRouter,
  medicalCenter: medicalCenterRouter,
  benefitPackageMedicalServiceTemplate: benefitPackageMedicalServiceTemplateRouter,
  medicalServiceTemplate: medicalServiceTemplateRouter,
  medicalService: medicalServiceRouter,
  entryRecord: entryRecordRouter,
  patientService: patientServiceRouter,
  reviewStatus: reviewStatusRouter,
  beneficiaryBalance: beneficiaryBalanceRouter,
  diagnosisAttachment: diagnosisAttachmentRouter,
  labReportAttachment: labReportAttachmentRouter,
  prescriptionAttachment: prescriptionAttachmentRouter,

});