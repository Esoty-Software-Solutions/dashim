import { z } from 'zod';
import { BenefitPackageMedicalServiceTemplateScalarWhereInputObjectSchema } from './BenefitPackageMedicalServiceTemplateScalarWhereInput.schema';
import { BenefitPackageMedicalServiceTemplateUpdateManyMutationInputObjectSchema } from './BenefitPackageMedicalServiceTemplateUpdateManyMutationInput.schema';
import { BenefitPackageMedicalServiceTemplateUncheckedUpdateManyWithoutMedicalServiceTemplatesInputObjectSchema } from './BenefitPackageMedicalServiceTemplateUncheckedUpdateManyWithoutMedicalServiceTemplatesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalServiceTemplateUpdateManyWithWhereWithoutBenefitPackageInput> =
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
            BenefitPackageMedicalServiceTemplateUncheckedUpdateManyWithoutMedicalServiceTemplatesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BenefitPackageMedicalServiceTemplateUpdateManyWithWhereWithoutBenefitPackageInputObjectSchema =
  Schema;
