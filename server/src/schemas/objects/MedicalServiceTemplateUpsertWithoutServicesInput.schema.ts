import { z } from 'zod';
import { MedicalServiceTemplateUpdateWithoutServicesInputObjectSchema } from './MedicalServiceTemplateUpdateWithoutServicesInput.schema';
import { MedicalServiceTemplateUncheckedUpdateWithoutServicesInputObjectSchema } from './MedicalServiceTemplateUncheckedUpdateWithoutServicesInput.schema';
import { MedicalServiceTemplateCreateWithoutServicesInputObjectSchema } from './MedicalServiceTemplateCreateWithoutServicesInput.schema';
import { MedicalServiceTemplateUncheckedCreateWithoutServicesInputObjectSchema } from './MedicalServiceTemplateUncheckedCreateWithoutServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceTemplateUpsertWithoutServicesInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => MedicalServiceTemplateUpdateWithoutServicesInputObjectSchema,
        ),
        z.lazy(
          () =>
            MedicalServiceTemplateUncheckedUpdateWithoutServicesInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => MedicalServiceTemplateCreateWithoutServicesInputObjectSchema,
        ),
        z.lazy(
          () =>
            MedicalServiceTemplateUncheckedCreateWithoutServicesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MedicalServiceTemplateUpsertWithoutServicesInputObjectSchema =
  Schema;
