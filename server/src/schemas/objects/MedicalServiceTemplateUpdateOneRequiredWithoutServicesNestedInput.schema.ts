import { z } from 'zod';
import { MedicalServiceTemplateCreateWithoutServicesInputObjectSchema } from './MedicalServiceTemplateCreateWithoutServicesInput.schema';
import { MedicalServiceTemplateUncheckedCreateWithoutServicesInputObjectSchema } from './MedicalServiceTemplateUncheckedCreateWithoutServicesInput.schema';
import { MedicalServiceTemplateCreateOrConnectWithoutServicesInputObjectSchema } from './MedicalServiceTemplateCreateOrConnectWithoutServicesInput.schema';
import { MedicalServiceTemplateUpsertWithoutServicesInputObjectSchema } from './MedicalServiceTemplateUpsertWithoutServicesInput.schema';
import { MedicalServiceTemplateWhereUniqueInputObjectSchema } from './MedicalServiceTemplateWhereUniqueInput.schema';
import { MedicalServiceTemplateUpdateWithoutServicesInputObjectSchema } from './MedicalServiceTemplateUpdateWithoutServicesInput.schema';
import { MedicalServiceTemplateUncheckedUpdateWithoutServicesInputObjectSchema } from './MedicalServiceTemplateUncheckedUpdateWithoutServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceTemplateUpdateOneRequiredWithoutServicesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => MedicalServiceTemplateCreateWithoutServicesInputObjectSchema,
          ),
          z.lazy(
            () =>
              MedicalServiceTemplateUncheckedCreateWithoutServicesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            MedicalServiceTemplateCreateOrConnectWithoutServicesInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () => MedicalServiceTemplateUpsertWithoutServicesInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => MedicalServiceTemplateWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () => MedicalServiceTemplateUpdateWithoutServicesInputObjectSchema,
          ),
          z.lazy(
            () =>
              MedicalServiceTemplateUncheckedUpdateWithoutServicesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const MedicalServiceTemplateUpdateOneRequiredWithoutServicesNestedInputObjectSchema =
  Schema;
