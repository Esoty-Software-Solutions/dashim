import { z } from 'zod';
import { MedicalServiceTemplateCreateWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceTemplateCreateWithoutBeneftiPackagesInput.schema';
import { MedicalServiceTemplateUncheckedCreateWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceTemplateUncheckedCreateWithoutBeneftiPackagesInput.schema';
import { MedicalServiceTemplateCreateOrConnectWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceTemplateCreateOrConnectWithoutBeneftiPackagesInput.schema';
import { MedicalServiceTemplateUpsertWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceTemplateUpsertWithoutBeneftiPackagesInput.schema';
import { MedicalServiceTemplateWhereUniqueInputObjectSchema } from './MedicalServiceTemplateWhereUniqueInput.schema';
import { MedicalServiceTemplateUpdateWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceTemplateUpdateWithoutBeneftiPackagesInput.schema';
import { MedicalServiceTemplateUncheckedUpdateWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceTemplateUncheckedUpdateWithoutBeneftiPackagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceTemplateUpdateOneRequiredWithoutBeneftiPackagesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              MedicalServiceTemplateCreateWithoutBeneftiPackagesInputObjectSchema,
          ),
          z.lazy(
            () =>
              MedicalServiceTemplateUncheckedCreateWithoutBeneftiPackagesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            MedicalServiceTemplateCreateOrConnectWithoutBeneftiPackagesInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () =>
            MedicalServiceTemplateUpsertWithoutBeneftiPackagesInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => MedicalServiceTemplateWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              MedicalServiceTemplateUpdateWithoutBeneftiPackagesInputObjectSchema,
          ),
          z.lazy(
            () =>
              MedicalServiceTemplateUncheckedUpdateWithoutBeneftiPackagesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const MedicalServiceTemplateUpdateOneRequiredWithoutBeneftiPackagesNestedInputObjectSchema =
  Schema;
