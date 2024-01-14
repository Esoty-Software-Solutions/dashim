import { t } from "./helpers/createRouter";
import { gendersRouter } from "./Gender.router";
import { currenciesRouter } from "./Currency.router";
import { citiesRouter } from "./City.router";
import { countriesRouter } from "./Country.router";
import { usersRouter } from "./User.router";
import { tenantmembersRouter } from "./TenantMembers.router";
import { tenantsRouter } from "./Tenant.router";
import { devicetokensRouter } from "./DeviceToken.router";
import { tenanttypesRouter } from "./TenantType.router";
import { rolesRouter } from "./Role.router";
import { devicetypesRouter } from "./DeviceType.router";
import { institutionsRouter } from "./Institution.router";
import { subscribersRouter } from "./Subscriber.router";
import { beneficiariesRouter } from "./Beneficiary.router";
import { relationshipsRouter } from "./Relationship.router";
import { fingerprintbiometricsRouter } from "./FingerprintBiometric.router";
import { idcardsRouter } from "./IDCard.router";
import { facebiometricsRouter } from "./FaceBiometric.router";
import { voicebiometricsRouter } from "./VoiceBiometric.router";
import { fingertypesRouter } from "./FingerType.router";
import { insurancepoliciesRouter } from "./InsurancePolicy.router";
import { benefitpackagesRouter } from "./BenefitPackage.router";
import { packagemedicalservicesRouter } from "./PackageMedicalServices.router";
import { insurancepolicymedicalcentersRouter } from "./InsurancePolicyMedicalCenter.router";
import { entryrecordsRouter } from "./EntryRecord.router";
import { patientservicesRouter } from "./PatientService.router";
import { reviewstatusesRouter } from "./ReviewStatus.router";
import { beneficiarybalancesRouter } from "./BeneficiaryBalance.router";
import { diagnosisattachmentsRouter } from "./DiagnosisAttachment.router";
import { labreportattachmentsRouter } from "./LabReportAttachment.router";
import { prescriptionattachmentsRouter } from "./PrescriptionAttachment.router";
import { medicalcentersRouter } from "./MedicalCenter.router";
import { medicalcenterservicetemplatesRouter } from "./MedicalCenterServiceTemplate.router";
import { medicalcenterservicesRouter } from "./MedicalCenterService.router";

export const appRouter = t.router({
  gender: gendersRouter,
  currency: currenciesRouter,
  city: citiesRouter,
  country: countriesRouter,
  user: usersRouter,
  tenantmembers: tenantmembersRouter,
  tenant: tenantsRouter,
  devicetoken: devicetokensRouter,
  tenanttype: tenanttypesRouter,
  role: rolesRouter,
  devicetype: devicetypesRouter,
  institution: institutionsRouter,
  subscriber: subscribersRouter,
  beneficiary: beneficiariesRouter,
  relationship: relationshipsRouter,
  fingerprintbiometric: fingerprintbiometricsRouter,
  idcard: idcardsRouter,
  facebiometric: facebiometricsRouter,
  voicebiometric: voicebiometricsRouter,
  fingertype: fingertypesRouter,
  insurancepolicy: insurancepoliciesRouter,
  benefitpackage: benefitpackagesRouter,
  packagemedicalservices: packagemedicalservicesRouter,
  insurancepolicymedicalcenter: insurancepolicymedicalcentersRouter,
  entryrecord: entryrecordsRouter,
  patientservice: patientservicesRouter,
  reviewstatus: reviewstatusesRouter,
  beneficiarybalance: beneficiarybalancesRouter,
  diagnosisattachment: diagnosisattachmentsRouter,
  labreportattachment: labreportattachmentsRouter,
  prescriptionattachment: prescriptionattachmentsRouter,
  medicalcenter: medicalcentersRouter,
  medicalcenterservicetemplate: medicalcenterservicetemplatesRouter,
  medicalcenterservice: medicalcenterservicesRouter
})

