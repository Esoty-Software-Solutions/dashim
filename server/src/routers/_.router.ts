import { z } from "zod";
import { router, publicProcedure } from "./_trpc.router";
// Automated, Do not alter //
import { genderRouter } from "./gender.router";
import { currencyRouter } from "./currency.router";
import { cityRouter } from "./city.router";
import { countryRouter } from "./country.router";
import { userRouter } from "./user.router";
import { tenantMemberRouter } from "./tenantMember.router";
import { tenantRouter } from "./tenant.router";
import { deviceTokenRouter } from "./deviceToken.router";
import { tenantTypeRouter } from "./tenantType.router";
import { roleRouter } from "./role.router";
import { deviceTypeRouter } from "./deviceType.router";
import { institutionRouter } from "./institution.router";
import { subscriberRouter } from "./subscriber.router";
import { subscriberFutureStatusChangeRouter } from "./subscriberFutureStatusChange.router";
import { beneficiaryRouter } from "./beneficiary.router";
import { beneficiaryFutureStatusChangeRouter } from "./beneficiaryFutureStatusChange.router";
import { relationshipRouter } from "./relationship.router";
import { institutionMedicalServiceRouter } from "./institutionMedicalService.router";
import { fingerprintBiometricRouter } from "./fingerprintBiometric.router";
import { iDCardRouter } from "./iDCard.router";
import { faceBiometricRouter } from "./faceBiometric.router";
import { voiceBiometricRouter } from "./voiceBiometric.router";
import { fingerTypeRouter } from "./fingerType.router";
import { insurancePolicyRouter } from "./insurancePolicy.router";
import { benefitPackageRouter } from "./benefitPackage.router";
import { insurancePolicyMedicalCenterRouter } from "./insurancePolicyMedicalCenter.router";
import { medicalCenterRouter } from "./medicalCenter.router";
import { benefitPackageMedicalServiceTemplateRouter } from "./benefitPackageMedicalServiceTemplate.router";
import { medicalServiceTemplateRouter } from "./medicalServiceTemplate.router";
import { medicalServiceRouter } from "./medicalService.router";
import { entryRecordRouter } from "./entryRecord.router";
import { patientServiceRouter } from "./patientService.router";
import { reviewStatusRouter } from "./reviewStatus.router";
import { beneficiaryBalanceRouter } from "./beneficiaryBalance.router";
import { diagnosisAttachmentRouter } from "./diagnosisAttachment.router";
import { labReportAttachmentRouter } from "./labReportAttachment.router";
import { prescriptionAttachmentRouter } from "./prescriptionAttachment.router";
// End Automated //

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
  // Automated, Do not alter //
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
  benefitPackageMedicalServiceTemplate:
    benefitPackageMedicalServiceTemplateRouter,
  medicalServiceTemplate: medicalServiceTemplateRouter,
  medicalService: medicalServiceRouter,
  entryRecord: entryRecordRouter,
  patientService: patientServiceRouter,
  reviewStatus: reviewStatusRouter,
  beneficiaryBalance: beneficiaryBalanceRouter,
  diagnosisAttachment: diagnosisAttachmentRouter,
  labReportAttachment: labReportAttachmentRouter,
  prescriptionAttachment: prescriptionAttachmentRouter,
  // End Automated //
});

// export const appRouter = mergeRouters(routerObject); //! This exceeds Max type inference serialization
export const appRouter = routerObject;

// export type definition of API
export type AppRouter = typeof appRouter;
