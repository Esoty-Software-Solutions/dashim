import { t } from "./helpers/createRouter";
import { gendersRouter } from "./Gender.router";
import { currenciesRouter } from "./Currency.router";
import { citiesRouter } from "./Cities.router";
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
import { subscribergroupsRouter } from "./SubscriberGroup.router";
import { relationshipsRouter } from "./Relationship.router";
import { fingerprintsRouter } from "./Fingerprint.router";
import { idcardsRouter } from "./IDCard.router";
import { facesRouter } from "./Face.router";
import { voicesRouter } from "./Voice.router";
import { fingertypesRouter } from "./FingerType.router";
import { copaydistributionsRouter } from "./CoPayDistribution.router";
import { insurancepoliciesRouter } from "./InsurancePolicy.router";
import { benefitpackagesRouter } from "./BenefitPackage.router";
import { packagemedicalservicesRouter } from "./PackageMedicalServices.router";
import { insurancepolicymedicalcentersRouter } from "./InsurancePolicyMedicalCenters.router";
import { timewindowsRouter } from "./TimeWindow.router";
import { entryrecordsRouter } from "./EntryRecord.router";
import { patientservicesRouter } from "./PatientService.router";
import { patientexaminationsRouter } from "./PatientExamination.router";
import { reviewstatusesRouter } from "./ReviewStatus.router";
import { subscribergroupbalancesRouter } from "./SubscriberGroupBalance.router";
import { diagnosesattachmentsRouter } from "./DiagnosesAttachment.router";
import { labreportattachmentsRouter } from "./LabReportAttachment.router";
import { prescriptionattachmentsRouter } from "./prescriptionAttachment.router";
import { medicalcentersRouter } from "./MedicalCenter.router";
import { medicalcenterservicetemplatesRouter } from "./MedicalCenterServiceTemplate.router";
import { medicalcenterservicesRouter } from "./MedicalCenterService.router";

export const appRouter = t.router({
  gender: gendersRouter,
  currency: currenciesRouter,
  cities: citiesRouter,
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
  subscribergroup: subscribergroupsRouter,
  relationship: relationshipsRouter,
  fingerprint: fingerprintsRouter,
  idcard: idcardsRouter,
  face: facesRouter,
  voice: voicesRouter,
  fingertype: fingertypesRouter,
  copaydistribution: copaydistributionsRouter,
  insurancepolicy: insurancepoliciesRouter,
  benefitpackage: benefitpackagesRouter,
  packagemedicalservices: packagemedicalservicesRouter,
  insurancepolicymedicalcenters: insurancepolicymedicalcentersRouter,
  timewindow: timewindowsRouter,
  entryrecord: entryrecordsRouter,
  patientservice: patientservicesRouter,
  patientexamination: patientexaminationsRouter,
  reviewstatus: reviewstatusesRouter,
  subscribergroupbalance: subscribergroupbalancesRouter,
  diagnosesattachment: diagnosesattachmentsRouter,
  labreportattachment: labreportattachmentsRouter,
  prescriptionattachment: prescriptionattachmentsRouter,
  medicalcenter: medicalcentersRouter,
  medicalcenterservicetemplate: medicalcenterservicetemplatesRouter,
  medicalcenterservice: medicalcenterservicesRouter
})

