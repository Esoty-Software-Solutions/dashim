import { z } from 'zod';
import { MedicalServiceTemplateCreateWithoutServicesInputObjectSchema } from './MedicalServiceTemplateCreateWithoutServicesInput.schema';
import { MedicalServiceTemplateUncheckedCreateWithoutServicesInputObjectSchema } from './MedicalServiceTemplateUncheckedCreateWithoutServicesInput.schema';
import { MedicalServiceTemplateCreateOrConnectWithoutServicesInputObjectSchema } from './MedicalServiceTemplateCreateOrConnectWithoutServicesInput.schema';
import { MedicalServiceTemplateWhereUniqueInputObjectSchema } from './MedicalServiceTemplateWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceTemplateCreateNestedOneWithoutServicesInput> =
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
      connect: z
        .lazy(() => MedicalServiceTemplateWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const MedicalServiceTemplateCreateNestedOneWithoutServicesInputObjectSchema =
  Schema;
