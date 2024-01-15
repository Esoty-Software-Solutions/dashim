import { z } from 'zod';
import { MedicalCenterServiceTemplateUpdateWithoutBeneftiPackagesInputObjectSchema } from './MedicalCenterServiceTemplateUpdateWithoutBeneftiPackagesInput.schema';
import { MedicalCenterServiceTemplateUncheckedUpdateWithoutBeneftiPackagesInputObjectSchema } from './MedicalCenterServiceTemplateUncheckedUpdateWithoutBeneftiPackagesInput.schema';
import { MedicalCenterServiceTemplateCreateWithoutBeneftiPackagesInputObjectSchema } from './MedicalCenterServiceTemplateCreateWithoutBeneftiPackagesInput.schema';
import { MedicalCenterServiceTemplateUncheckedCreateWithoutBeneftiPackagesInputObjectSchema } from './MedicalCenterServiceTemplateUncheckedCreateWithoutBeneftiPackagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceTemplateUpsertWithoutBeneftiPackagesInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            MedicalCenterServiceTemplateUpdateWithoutBeneftiPackagesInputObjectSchema,
        ),
        z.lazy(
          () =>
            MedicalCenterServiceTemplateUncheckedUpdateWithoutBeneftiPackagesInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            MedicalCenterServiceTemplateCreateWithoutBeneftiPackagesInputObjectSchema,
        ),
        z.lazy(
          () =>
            MedicalCenterServiceTemplateUncheckedCreateWithoutBeneftiPackagesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MedicalCenterServiceTemplateUpsertWithoutBeneftiPackagesInputObjectSchema =
  Schema;
