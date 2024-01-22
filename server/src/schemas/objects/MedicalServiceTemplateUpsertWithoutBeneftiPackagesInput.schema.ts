import { z } from 'zod';
import { MedicalServiceTemplateUpdateWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceTemplateUpdateWithoutBeneftiPackagesInput.schema';
import { MedicalServiceTemplateUncheckedUpdateWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceTemplateUncheckedUpdateWithoutBeneftiPackagesInput.schema';
import { MedicalServiceTemplateCreateWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceTemplateCreateWithoutBeneftiPackagesInput.schema';
import { MedicalServiceTemplateUncheckedCreateWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceTemplateUncheckedCreateWithoutBeneftiPackagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceTemplateUpsertWithoutBeneftiPackagesInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            MedicalServiceTemplateUpdateWithoutBeneftiPackagesInputObjectSchema,
        ),
        z.lazy(
          () =>
            MedicalServiceTemplateUncheckedUpdateWithoutBeneftiPackagesInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            MedicalServiceTemplateCreateWithoutBeneftiPackagesInputObjectSchema,
        ),
        z.lazy(
          () =>
            MedicalServiceTemplateUncheckedCreateWithoutBeneftiPackagesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MedicalServiceTemplateUpsertWithoutBeneftiPackagesInputObjectSchema =
  Schema;
