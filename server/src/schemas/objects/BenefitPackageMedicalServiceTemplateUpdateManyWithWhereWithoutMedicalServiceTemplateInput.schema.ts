import { z } from 'zod';
import { BenefitPackageMedicalServiceTemplateScalarWhereInputObjectSchema } from './BenefitPackageMedicalServiceTemplateScalarWhereInput.schema';
import { BenefitPackageMedicalServiceTemplateUpdateManyMutationInputObjectSchema } from './BenefitPackageMedicalServiceTemplateUpdateManyMutationInput.schema';
import { BenefitPackageMedicalServiceTemplateUncheckedUpdateManyWithoutBeneftiPackagesInputObjectSchema } from './BenefitPackageMedicalServiceTemplateUncheckedUpdateManyWithoutBeneftiPackagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalServiceTemplateUpdateManyWithWhereWithoutMedicalServiceTemplateInput> =
  z
    .object({
      where: z.lazy(
        () => BenefitPackageMedicalServiceTemplateScalarWhereInputObjectSchema,
      ),
      data: z.union([
        z.lazy(
          () =>
            BenefitPackageMedicalServiceTemplateUpdateManyMutationInputObjectSchema,
        ),
        z.lazy(
          () =>
            BenefitPackageMedicalServiceTemplateUncheckedUpdateManyWithoutBeneftiPackagesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BenefitPackageMedicalServiceTemplateUpdateManyWithWhereWithoutMedicalServiceTemplateInputObjectSchema =
  Schema;
