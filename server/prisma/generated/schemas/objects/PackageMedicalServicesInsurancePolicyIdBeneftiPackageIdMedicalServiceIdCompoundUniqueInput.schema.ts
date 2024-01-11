import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesInsurancePolicyIdBeneftiPackageIdMedicalServiceIdCompoundUniqueInput> =
  z
    .object({
      insurancePolicyId: z.string(),
      beneftiPackageId: z.string(),
      medicalServiceId: z.string(),
    })
    .strict();

export const PackageMedicalServicesInsurancePolicyIdBeneftiPackageIdMedicalServiceIdCompoundUniqueInputObjectSchema =
  Schema;
