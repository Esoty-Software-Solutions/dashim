import { z } from 'zod';
import { MedicalServiceTemplateWhereUniqueInputObjectSchema } from './MedicalServiceTemplateWhereUniqueInput.schema';
import { MedicalServiceTemplateCreateWithoutServicesInputObjectSchema } from './MedicalServiceTemplateCreateWithoutServicesInput.schema';
import { MedicalServiceTemplateUncheckedCreateWithoutServicesInputObjectSchema } from './MedicalServiceTemplateUncheckedCreateWithoutServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceTemplateCreateOrConnectWithoutServicesInput> =
  z
    .object({
      where: z.lazy(() => MedicalServiceTemplateWhereUniqueInputObjectSchema),
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

export const MedicalServiceTemplateCreateOrConnectWithoutServicesInputObjectSchema =
  Schema;
