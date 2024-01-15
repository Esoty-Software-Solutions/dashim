import { z } from 'zod';
import { MedicalCenterServiceTemplateCreateWithoutBeneftiPackagesInputObjectSchema } from './MedicalCenterServiceTemplateCreateWithoutBeneftiPackagesInput.schema';
import { MedicalCenterServiceTemplateUncheckedCreateWithoutBeneftiPackagesInputObjectSchema } from './MedicalCenterServiceTemplateUncheckedCreateWithoutBeneftiPackagesInput.schema';
import { MedicalCenterServiceTemplateCreateOrConnectWithoutBeneftiPackagesInputObjectSchema } from './MedicalCenterServiceTemplateCreateOrConnectWithoutBeneftiPackagesInput.schema';
import { MedicalCenterServiceTemplateUpsertWithoutBeneftiPackagesInputObjectSchema } from './MedicalCenterServiceTemplateUpsertWithoutBeneftiPackagesInput.schema';
import { MedicalCenterServiceTemplateWhereUniqueInputObjectSchema } from './MedicalCenterServiceTemplateWhereUniqueInput.schema';
import { MedicalCenterServiceTemplateUpdateWithoutBeneftiPackagesInputObjectSchema } from './MedicalCenterServiceTemplateUpdateWithoutBeneftiPackagesInput.schema';
import { MedicalCenterServiceTemplateUncheckedUpdateWithoutBeneftiPackagesInputObjectSchema } from './MedicalCenterServiceTemplateUncheckedUpdateWithoutBeneftiPackagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceTemplateUpdateOneRequiredWithoutBeneftiPackagesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              MedicalCenterServiceTemplateCreateWithoutBeneftiPackagesInputObjectSchema,
          ),
          z.lazy(
            () =>
              MedicalCenterServiceTemplateUncheckedCreateWithoutBeneftiPackagesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            MedicalCenterServiceTemplateCreateOrConnectWithoutBeneftiPackagesInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () =>
            MedicalCenterServiceTemplateUpsertWithoutBeneftiPackagesInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => MedicalCenterServiceTemplateWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              MedicalCenterServiceTemplateUpdateWithoutBeneftiPackagesInputObjectSchema,
          ),
          z.lazy(
            () =>
              MedicalCenterServiceTemplateUncheckedUpdateWithoutBeneftiPackagesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const MedicalCenterServiceTemplateUpdateOneRequiredWithoutBeneftiPackagesNestedInputObjectSchema =
  Schema;
