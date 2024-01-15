import { z } from 'zod';
import { BenefitPackageMedicalCenterServiceTemplateScalarWhereInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateScalarWhereInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateUpdateManyMutationInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateUpdateManyMutationInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateUncheckedUpdateManyWithoutBeneftiPackagesInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateUncheckedUpdateManyWithoutBeneftiPackagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalCenterServiceTemplateUpdateManyWithWhereWithoutMedicalCenterServiceTemplateInput> =
  z
    .object({
      where: z.lazy(
        () =>
          BenefitPackageMedicalCenterServiceTemplateScalarWhereInputObjectSchema,
      ),
      data: z.union([
        z.lazy(
          () =>
            BenefitPackageMedicalCenterServiceTemplateUpdateManyMutationInputObjectSchema,
        ),
        z.lazy(
          () =>
            BenefitPackageMedicalCenterServiceTemplateUncheckedUpdateManyWithoutBeneftiPackagesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BenefitPackageMedicalCenterServiceTemplateUpdateManyWithWhereWithoutMedicalCenterServiceTemplateInputObjectSchema =
  Schema;
