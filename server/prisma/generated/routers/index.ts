import { t, publicProcedure } from "./helpers/createRouter";
import { gendersRouter } from "./Gender.router";
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
import { medicalcentersRouter } from "./MedicalCenter.router";
import { medicalcenterservicetemplatesRouter } from "./MedicalCenterServiceTemplate.router";
import { medicalcenterservicesRouter } from "./MedicalCenterService.router";
import { z } from "zod";

export const appRouter = t.router({
  // GET http://localhost:3000/trpc/greeting?input="hello"
  greeting: publicProcedure.input(z.string().optional()).query((opts) => {
    return (
      "hello from tRPC v10! Here is your validated string input: " + opts.input
    );
  }),
  gender: gendersRouter,
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
  medicalcenter: medicalcentersRouter,
  medicalcenterservicetemplate: medicalcenterservicetemplatesRouter,
  medicalcenterservice: medicalcenterservicesRouter,
});
