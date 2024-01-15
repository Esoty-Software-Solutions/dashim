import { z } from 'zod';
import { BenefitPackageMedicalCenterServiceTemplateScalarWhereInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateScalarWhereInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateUpdateManyMutationInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateUpdateManyMutationInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateUncheckedUpdateManyWithoutMedicalServiceTemplatesInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateUncheckedUpdateManyWithoutMedicalServiceTemplatesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalCenterServiceTemplateUpdateManyWithWhereWithoutBenefitPackageInput> =
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
            BenefitPackageMedicalCenterServiceTemplateUncheckedUpdateManyWithoutMedicalServiceTemplatesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BenefitPackageMedicalCenterServiceTemplateUpdateManyWithWhereWithoutBenefitPackageInputObjectSchema =
  Schema;
