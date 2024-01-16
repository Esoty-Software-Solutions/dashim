import { z } from "zod";
import { router, publicProcedure, mergeRouters } from "./_trpc.router";
import { beneficiaryRouter } from "./beneficiary.router";
import { genderRouter } from "./gender.router";
import { currencyRouter } from "./currency.router";
import { cityRouter } from "./city.router";
import { countryRouter } from "./country.router";
import { userRouter } from "./user.router";
import { tenantMembersRouter } from "./tenantMembers.router";
import { tenantRouter } from "./tenant.router";
import { deviceTokenRouter } from "./deviceToken.router";
import { tenantTypeRouter } from "./tenantType.router";
import { roleRouter } from "./role.router";
import { deviceTypeRouter } from "./deviceType.router";
import { institutionRouter } from "./institution.router";
import { subscriberRouter } from "./subscriber.router";
import { relationshipRouter } from "./relationship.router";
import { institutionMedicalCeneterServiceRouter } from "./institutionMedicalCeneterService.router";
import { fingerprintBiometricRouter } from "./fingerprintBiometric.router";
import { iDCardRouter } from "./iDCard.router";
import { faceBiometricRouter } from "./faceBiometric.router";
import { voiceBiometricRouter } from "./voiceBiometric.router";
import { fingerTypeRouter } from "./fingerType.router";
import { insurancePolicyRouter } from "./insurancePolicy.router";
import { benefitPackageRouter } from "./benefitPackage.router";
import { insurancePolicyMedicalCenterRouter } from "./insurancePolicyMedicalCenter.router";
import { medicalCenterRouter } from "./medicalCenter.router";
import { benefitPackageMedicalCenterServiceTemplateRouter } from "./benefitPackageMedicalCenterServiceTemplate.router";
import { medicalCenterServiceTemplateRouter } from "./medicalCenterServiceTemplate.router";
import { medicalCenterServiceRouter } from "./medicalCenterService.router";
import { entryRecordRouter } from "./entryRecord.router";
import { patientServiceRouter } from "./patientService.router";
import { reviewStatusRouter } from "./reviewStatus.router";
import { beneficiaryBalanceRouter } from "./beneficiaryBalance.router";
import { diagnosisAttachmentRouter } from "./diagnosisAttachment.router";
import { labReportAttachmentRouter } from "./labReportAttachment.router";
import { prescriptionAttachmentRouter } from "./prescriptionAttachment.router";

const routerObject = router({
  // GET http://localhost:3000/trpc/greeting
  greeting: publicProcedure.input(z.string().optional()).query((opts) => {
    if (opts.input) {
      return "hello from tRPC v10!. The string you sent is: " + opts.input;
    } else {
      return "hello from tRPC v10!. You can send us a string on this route";
    }
  }),
  healthCheck: publicProcedure.query(() => {
    return "hello from tRPC v10!.";
  }),
  beneficiary: beneficiaryRouter,
  gender: genderRouter,
  currency: currencyRouter,
  city: cityRouter,
  country: countryRouter,
  user: userRouter,
  tenantMembers: tenantMembersRouter,
  tenant: tenantRouter,
  deviceToken: deviceTokenRouter,
  tenantType: tenantTypeRouter,
  role: roleRouter,
  deviceType: deviceTypeRouter,
  institution: institutionRouter,
  subscriber: subscriberRouter,
  relationship: relationshipRouter,
  institutionMedicalCeneterService: institutionMedicalCeneterServiceRouter,
  fingerprintBiometric: fingerprintBiometricRouter,
  iDCard: iDCardRouter,
  faceBiometric: faceBiometricRouter,
  voiceBiometric: voiceBiometricRouter,
  fingerType: fingerTypeRouter,
  insurancePolicy: insurancePolicyRouter,
  benefitPackage: benefitPackageRouter,
  insurancePolicyMedicalCenter: insurancePolicyMedicalCenterRouter,
  medicalCenter: medicalCenterRouter,
  benefitPackageMedicalCenterServiceTemplate:
    benefitPackageMedicalCenterServiceTemplateRouter,
  medicalCenterServiceTemplate: medicalCenterServiceTemplateRouter,
  medicalCenterService: medicalCenterServiceRouter,
  entryRecord: entryRecordRouter,
  patientService: patientServiceRouter,
  reviewStatus: reviewStatusRouter,
  beneficiaryBalance: beneficiaryBalanceRouter,
  diagnosisAttachment: diagnosisAttachmentRouter,
  labReportAttachment: labReportAttachmentRouter,
  prescriptionAttachment: prescriptionAttachmentRouter,
});

// export const appRouter = mergeRouters(routerObject); //! This exceeds Max type inference serialization
export const appRouter = routerObject;

// export type definition of API
export type AppRouter = typeof appRouter;
