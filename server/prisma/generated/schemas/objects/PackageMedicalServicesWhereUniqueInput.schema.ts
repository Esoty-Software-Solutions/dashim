import { z } from 'zod';
import { PackageMedicalServicesInsurancePolicyIdBeneftiPackageIdMedicalServiceIdCompoundUniqueInputObjectSchema } from './PackageMedicalServicesInsurancePolicyIdBeneftiPackageIdMedicalServiceIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    insurancePolicyId_beneftiPackageId_medicalServiceId: z
      .lazy(
        () =>
          PackageMedicalServicesInsurancePolicyIdBeneftiPackageIdMedicalServiceIdCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PackageMedicalServicesWhereUniqueInputObjectSchema = Schema;
